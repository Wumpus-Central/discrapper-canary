n.d(t, { A: () => I });
var i = n(17928),
    l = n(228366),
    a = n(155718),
    r = n(58149),
    s = n(723702),
    o = n(861382),
    d = n(652215);
let u = new Map(),
    c = new Map(),
    h = new Map();
function E(e) {
    return (
        c.has(e) ||
            c.set(e, {
                commandId: o.A.getActiveCommand(e)?.id,
                optionName: o.A.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map(),
                optionNameToLastResults: new Map(),
                optionNameToNonce: new Map(),
                optionNameToLastQuery: new Map(),
                lastErrored: !1,
                lastResponseNonce: void 0,
            }),
        c.get(e)
    );
}
function A() {
    return u.clear(), c.clear(), !0;
}
let _ = (0, s.isDesktop)();
function p(e) {
    let { channelId: t, command: n } = e;
    g(t, n?.id);
}
function g(e, t) {
    let n = o.A.getActiveOptionName(e),
        i = c.get(e);
    return (
        null != i &&
        (t !== i.commandId || n !== i.optionName) &&
        (null != t &&
            t !== i.commandId &&
            (i.optionNameToLastResults.clear(),
            i.optionNameToNonce.clear(),
            i.optionNameToLastQuery.clear(),
            i.optionNameToAutocompleteQueries.clear()),
        (i.lastErrored = !1),
        (i.commandId = t),
        (i.optionName = n),
        !0)
    );
}
class f extends i.Ay.Store {
    static displayName = "ApplicationCommandAutocompleteStore";
    initialize() {
        this.waitFor(o.A);
    }
    getLastErrored(e) {
        return E(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        let i = E(e);
        return i.optionNameToAutocompleteQueries.get(t)?.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return E(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return E(e).lastResponseNonce;
    }
}
let I = new f(l.h, {
    CONNECTION_OPEN: A,
    LOGOUT: A,
    CHANNEL_SELECT: A,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
        let { nonce: t, channelId: n, query: i, name: l } = e,
            a = E(n);
        if (a.optionNameToLastQuery.get(l) === i) return !1;
        a.optionNameToLastQuery.set(l, i);
        let r = a.optionNameToAutocompleteQueries.get(l)?.get(i);
        if (null != r) return (a.lastErrored = !1), a.optionNameToLastResults.set(l, r), !0;
        let s = a.optionNameToNonce.get(l);
        if (
            (null != s && u.delete(s),
            u.set(t, { channelId: n, query: i, name: l }),
            h.set(t, new Date()),
            a.optionNameToNonce.set(l, t),
            a.lastErrored)
        )
            return (a.lastErrored = !1), !0;
    },
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
        let { choices: t, nonce: n } = e,
            i = u.get(n);
        if (null == i) return !1;
        u.delete(n);
        let l = E(i.channelId);
        null == l.optionNameToAutocompleteQueries.get(i.name) &&
            l.optionNameToAutocompleteQueries.set(i.name, new Map());
        let s = _ && o.A.getActiveOption(i.channelId)?.type === a.n4.INTEGER,
            c =
                t?.map((e) => {
                    let { value: t, name_localized: n, name: i } = e;
                    return { displayName: n ?? i, name: i, value: (t = s ? Number(t) : t) };
                }) ?? [],
            A = h.get(n),
            p = null != A ? new Date().getTime() - A.getTime() : 0;
        return (
            (0, r.zV)(d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: p,
                error: !1,
                num_options: c.length,
            }),
            h.delete(n),
            l.optionNameToAutocompleteQueries.get(i.name)?.set(i.query, c),
            l.optionNameToLastQuery.get(i.name) === i.query &&
                ((l.lastErrored = !1), l.optionNameToLastResults.set(i.name, c)),
            (l.lastResponseNonce = n),
            !0
        );
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = u.get(t);
        if (null == n) return !1;
        u.delete(t);
        let i = h.get(t),
            l = null != i ? new Date().getTime() - i.getTime() : 0;
        return (
            (0, r.zV)(d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, { duration_ms: l, error: !0 }),
            h.delete(t),
            (E(n.channelId).lastErrored = !0),
            !0
        );
    },
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, command: n } = e;
        g(t, n?.id);
    },
});
