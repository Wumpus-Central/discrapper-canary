n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    l = n(155718),
    a = n(58149),
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
function _() {
    return u.clear(), c.clear(), !0;
}
let p = (0, s.isDesktop)();
function A(e) {
    let { channelId: t, command: n } = e;
    f(t, n?.id);
}
function f(e, t) {
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
class g extends i.Ay.Store {
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
let I = new g(r.h, {
    CONNECTION_OPEN: _,
    LOGOUT: _,
    CHANNEL_SELECT: _,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
        let { nonce: t, channelId: n, query: i, name: r } = e,
            l = E(n);
        if (l.optionNameToLastQuery.get(r) === i) return !1;
        l.optionNameToLastQuery.set(r, i);
        let a = l.optionNameToAutocompleteQueries.get(r)?.get(i);
        if (null != a) return (l.lastErrored = !1), l.optionNameToLastResults.set(r, a), !0;
        let s = l.optionNameToNonce.get(r);
        if (
            (null != s && u.delete(s),
            u.set(t, { channelId: n, query: i, name: r }),
            h.set(t, new Date()),
            l.optionNameToNonce.set(r, t),
            l.lastErrored)
        )
            return (l.lastErrored = !1), !0;
    },
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
        let { choices: t, nonce: n } = e,
            i = u.get(n);
        if (null == i) return !1;
        u.delete(n);
        let r = E(i.channelId);
        null == r.optionNameToAutocompleteQueries.get(i.name) &&
            r.optionNameToAutocompleteQueries.set(i.name, new Map());
        let s = p && o.A.getActiveOption(i.channelId)?.type === l.n4.INTEGER,
            c =
                t?.map((e) => {
                    let { value: t, name_localized: n, name: i } = e;
                    return { displayName: n ?? i, name: i, value: (t = s ? Number(t) : t) };
                }) ?? [],
            _ = h.get(n),
            A = null != _ ? new Date().getTime() - _.getTime() : 0;
        return (
            (0, a.zV)(d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: A,
                error: !1,
                num_options: c.length,
            }),
            h.delete(n),
            r.optionNameToAutocompleteQueries.get(i.name)?.set(i.query, c),
            r.optionNameToLastQuery.get(i.name) === i.query &&
                ((r.lastErrored = !1), r.optionNameToLastResults.set(i.name, c)),
            (r.lastResponseNonce = n),
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
            r = null != i ? new Date().getTime() - i.getTime() : 0;
        return (
            (0, a.zV)(d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, { duration_ms: r, error: !0 }),
            h.delete(t),
            (E(n.channelId).lastErrored = !0),
            !0
        );
    },
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: A,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: A,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, command: n } = e;
        f(t, n?.id);
    },
});
