"use strict";
n.d(t, { A: () => S });
var r = n(311907),
    i = n(73153),
    a = n(155718),
    s = n(58149),
    o = n(723702),
    l = n(861382),
    u = n(652215);
let c = new Map(),
    d = new Map(),
    _ = new Map();
function f(e) {
    return (
        d.has(e) ||
            d.set(e, {
                commandId: l.A.getActiveCommand(e)?.id,
                optionName: l.A.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map(),
                optionNameToLastResults: new Map(),
                optionNameToNonce: new Map(),
                optionNameToLastQuery: new Map(),
                lastErrored: !1,
                lastResponseNonce: void 0,
            }),
        d.get(e)
    );
}
function p() {
    return c.clear(), d.clear(), !0;
}
function h(e) {
    let { nonce: t, channelId: n, query: r, name: i } = e,
        a = f(n);
    if (a.optionNameToLastQuery.get(i) === r) return !1;
    a.optionNameToLastQuery.set(i, r);
    let s = a.optionNameToAutocompleteQueries.get(i)?.get(r);
    if (null != s) return (a.lastErrored = !1), a.optionNameToLastResults.set(i, s), !0;
    let o = a.optionNameToNonce.get(i);
    if (
        (null != o && c.delete(o),
        c.set(t, { channelId: n, query: r, name: i }),
        _.set(t, new Date()),
        a.optionNameToNonce.set(i, t),
        a.lastErrored)
    )
        return (a.lastErrored = !1), !0;
}
let m = (0, o.isDesktop)();
function g(e) {
    let { choices: t, nonce: n } = e,
        r = c.get(n);
    if (null == r) return !1;
    c.delete(n);
    let i = f(r.channelId);
    null == i.optionNameToAutocompleteQueries.get(r.name) && i.optionNameToAutocompleteQueries.set(r.name, new Map());
    let o = m && l.A.getActiveOption(r.channelId)?.type === a.n4.INTEGER,
        d =
            t?.map((e) => {
                let { value: t, name_localized: n, name: r } = e;
                return { displayName: n ?? r, name: r, value: (t = o ? Number(t) : t) };
            }) ?? [],
        p = _.get(n),
        h = null != p ? new Date().getTime() - p.getTime() : 0;
    return (
        (0, s.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: h,
            error: !1,
            num_options: d.length,
        }),
        _.delete(n),
        i.optionNameToAutocompleteQueries.get(r.name)?.set(r.query, d),
        i.optionNameToLastQuery.get(r.name) === r.query &&
            ((i.lastErrored = !1), i.optionNameToLastResults.set(r.name, d)),
        (i.lastResponseNonce = n),
        !0
    );
}
function E(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = c.get(t);
    if (null == n) return !1;
    c.delete(t);
    let r = _.get(t),
        i = null != r ? new Date().getTime() - r.getTime() : 0;
    return (
        (0, s.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, { duration_ms: i, error: !0 }),
        _.delete(t),
        (f(n.channelId).lastErrored = !0),
        !0
    );
}
function A(e) {
    let { channelId: t, command: n } = e;
    T(t, n?.id);
}
function I(e) {
    let { channelId: t, command: n } = e;
    T(t, n?.id);
}
function T(e, t) {
    let n = l.A.getActiveOptionName(e),
        r = d.get(e);
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
class y extends r.Ay.Store {
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
let S = new y(i.h, {
    CONNECTION_OPEN: p,
    LOGOUT: p,
    CHANNEL_SELECT: p,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: h,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: g,
    INTERACTION_FAILURE: E,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: A,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: A,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: I,
});
