n.d(t, { A: () => T });
var i = n(17928),
    r = n(228366),
    a = n(155718),
    s = n(95561),
    l = n(723702),
    o = n(861382),
    d = n(652215);
let c = new Map(),
    u = new Map(),
    _ = new Map();
function E(e) {
    return (
        u.has(e) ||
            u.set(e, {
                commandId: o.A.getActiveCommand(e)?.id,
                optionName: o.A.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map(),
                optionNameToLastResults: new Map(),
                optionNameToNonce: new Map(),
                optionNameToLastQuery: new Map(),
                lastErrored: !1,
                lastResponseNonce: void 0,
            }),
        u.get(e)
    );
}
function A() {
    return c.clear(), u.clear(), !0;
}
let h = (0, l.isDesktop)();
function I(e) {
    let { channelId: t, command: n } = e;
    f(t, n?.id);
}
function f(e, t) {
    let n = o.A.getActiveOptionName(e),
        i = u.get(e);
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
class p extends i.Ay.Store {
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
let T = new p(r.h, {
    CONNECTION_OPEN: A,
    LOGOUT: A,
    CHANNEL_SELECT: A,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
        let { nonce: t, channelId: n, query: i, name: r } = e,
            a = E(n);
        if (a.optionNameToLastQuery.get(r) === i) return !1;
        a.optionNameToLastQuery.set(r, i);
        let s = a.optionNameToAutocompleteQueries.get(r)?.get(i);
        if (null != s) return (a.lastErrored = !1), a.optionNameToLastResults.set(r, s), !0;
        let l = a.optionNameToNonce.get(r);
        if (
            (null != l && c.delete(l),
            c.set(t, { channelId: n, query: i, name: r }),
            _.set(t, new Date()),
            a.optionNameToNonce.set(r, t),
            a.lastErrored)
        )
            return (a.lastErrored = !1), !0;
    },
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
        let { choices: t, nonce: n } = e,
            i = c.get(n);
        if (null == i) return !1;
        c.delete(n);
        let r = E(i.channelId);
        null == r.optionNameToAutocompleteQueries.get(i.name) &&
            r.optionNameToAutocompleteQueries.set(i.name, new Map());
        let l = h && o.A.getActiveOption(i.channelId)?.type === a.n4.INTEGER,
            u =
                t?.map((e) => {
                    let { value: t, name_localized: n, name: i } = e;
                    return { displayName: n ?? i, name: i, value: (t = l ? Number(t) : t) };
                }) ?? [],
            A = _.get(n),
            I = null != A ? new Date().getTime() - A.getTime() : 0;
        return (
            (0, s.zV)(d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: I,
                error: !1,
                num_options: u.length,
            }),
            _.delete(n),
            r.optionNameToAutocompleteQueries.get(i.name)?.set(i.query, u),
            r.optionNameToLastQuery.get(i.name) === i.query &&
                ((r.lastErrored = !1), r.optionNameToLastResults.set(i.name, u)),
            (r.lastResponseNonce = n),
            !0
        );
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = c.get(t);
        if (null == n) return !1;
        c.delete(t);
        let i = _.get(t),
            r = null != i ? new Date().getTime() - i.getTime() : 0;
        return (
            (0, s.zV)(d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, { duration_ms: r, error: !0 }),
            _.delete(t),
            (E(n.channelId).lastErrored = !0),
            !0
        );
    },
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: I,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: I,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, command: n } = e;
        f(t, n?.id);
    },
});
