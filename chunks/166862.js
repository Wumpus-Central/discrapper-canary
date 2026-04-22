"use strict";
n.d(t, { A: () => A });
var r = n(311907),
    i = n(73153),
    s = n(155718),
    a = n(58149),
    o = n(723702),
    l = n(861382),
    u = n(652215);
let d = new Map(),
    c = new Map(),
    _ = new Map();
function f(e) {
    return (
        c.has(e) ||
            c.set(e, {
                commandId: l.A.getActiveCommand(e)?.id,
                optionName: l.A.getActiveOptionName(e),
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
function E() {
    return d.clear(), c.clear(), !0;
}
let h = (0, o.isDesktop)();
function p(e) {
    let { channelId: t, command: n } = e;
    m(t, n?.id);
}
function m(e, t) {
    let n = l.A.getActiveOptionName(e),
        r = c.get(e);
    return (
        null != r &&
        (t !== r.commandId || n !== r.optionName) &&
        (null != t &&
            t !== r.commandId &&
            (r.optionNameToLastResults.clear(),
            r.optionNameToNonce.clear(),
            r.optionNameToLastQuery.clear(),
            r.optionNameToAutocompleteQueries.clear()),
        (r.lastErrored = !1),
        (r.commandId = t),
        (r.optionName = n),
        !0)
    );
}
class g extends r.Ay.Store {
    static displayName = "ApplicationCommandAutocompleteStore";
    initialize() {
        this.waitFor(l.A);
    }
    getLastErrored(e) {
        return f(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        let r = f(e);
        return r.optionNameToAutocompleteQueries.get(t)?.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return f(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return f(e).lastResponseNonce;
    }
}
let A = new g(i.h, {
    CONNECTION_OPEN: E,
    LOGOUT: E,
    CHANNEL_SELECT: E,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
        let { nonce: t, channelId: n, query: r, name: i } = e,
            s = f(n);
        if (s.optionNameToLastQuery.get(i) === r) return !1;
        s.optionNameToLastQuery.set(i, r);
        let a = s.optionNameToAutocompleteQueries.get(i)?.get(r);
        if (null != a) return (s.lastErrored = !1), s.optionNameToLastResults.set(i, a), !0;
        let o = s.optionNameToNonce.get(i);
        if (
            (null != o && d.delete(o),
            d.set(t, { channelId: n, query: r, name: i }),
            _.set(t, new Date()),
            s.optionNameToNonce.set(i, t),
            s.lastErrored)
        )
            return (s.lastErrored = !1), !0;
    },
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
        let { choices: t, nonce: n } = e,
            r = d.get(n);
        if (null == r) return !1;
        d.delete(n);
        let i = f(r.channelId);
        null == i.optionNameToAutocompleteQueries.get(r.name) &&
            i.optionNameToAutocompleteQueries.set(r.name, new Map());
        let o = h && l.A.getActiveOption(r.channelId)?.type === s.n4.INTEGER,
            c =
                t?.map((e) => {
                    let { value: t, name_localized: n, name: r } = e;
                    return { displayName: n ?? r, name: r, value: (t = o ? Number(t) : t) };
                }) ?? [],
            E = _.get(n),
            p = null != E ? new Date().getTime() - E.getTime() : 0;
        return (
            (0, a.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: p,
                error: !1,
                num_options: c.length,
            }),
            _.delete(n),
            i.optionNameToAutocompleteQueries.get(r.name)?.set(r.query, c),
            i.optionNameToLastQuery.get(r.name) === r.query &&
                ((i.lastErrored = !1), i.optionNameToLastResults.set(r.name, c)),
            (i.lastResponseNonce = n),
            !0
        );
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = d.get(t);
        if (null == n) return !1;
        d.delete(t);
        let r = _.get(t),
            i = null != r ? new Date().getTime() - r.getTime() : 0;
        return (
            (0, a.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, { duration_ms: i, error: !0 }),
            _.delete(t),
            (f(n.channelId).lastErrored = !0),
            !0
        );
    },
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, command: n } = e;
        m(t, n?.id);
    },
});
