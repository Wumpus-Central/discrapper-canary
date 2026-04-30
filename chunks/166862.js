"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    s = n(155718),
    a = n(95561),
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
function h() {
    return c.clear(), d.clear(), !0;
}
let p = (0, o.isDesktop)();
function E(e) {
    let { channelId: t, command: n } = e;
    m(t, n?.id);
}
function m(e, t) {
    let n = l.A.getActiveOptionName(e),
        i = d.get(e);
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
        this.waitFor(l.A);
    }
    getLastErrored(e) {
        return f(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        let i = f(e);
        return i.optionNameToAutocompleteQueries.get(t)?.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return f(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return f(e).lastResponseNonce;
    }
}
let A = new g(r.h, {
    CONNECTION_OPEN: h,
    LOGOUT: h,
    CHANNEL_SELECT: h,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
        let { nonce: t, channelId: n, query: i, name: r } = e,
            s = f(n);
        if (s.optionNameToLastQuery.get(r) === i) return !1;
        s.optionNameToLastQuery.set(r, i);
        let a = s.optionNameToAutocompleteQueries.get(r)?.get(i);
        if (null != a) return (s.lastErrored = !1), s.optionNameToLastResults.set(r, a), !0;
        let o = s.optionNameToNonce.get(r);
        if (
            (null != o && c.delete(o),
            c.set(t, { channelId: n, query: i, name: r }),
            _.set(t, new Date()),
            s.optionNameToNonce.set(r, t),
            s.lastErrored)
        )
            return (s.lastErrored = !1), !0;
    },
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
        let { choices: t, nonce: n } = e,
            i = c.get(n);
        if (null == i) return !1;
        c.delete(n);
        let r = f(i.channelId);
        null == r.optionNameToAutocompleteQueries.get(i.name) &&
            r.optionNameToAutocompleteQueries.set(i.name, new Map());
        let o = p && l.A.getActiveOption(i.channelId)?.type === s.n4.INTEGER,
            d =
                t?.map((e) => {
                    let { value: t, name_localized: n, name: i } = e;
                    return { displayName: n ?? i, name: i, value: (t = o ? Number(t) : t) };
                }) ?? [],
            h = _.get(n),
            E = null != h ? new Date().getTime() - h.getTime() : 0;
        return (
            (0, a.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: E,
                error: !1,
                num_options: d.length,
            }),
            _.delete(n),
            r.optionNameToAutocompleteQueries.get(i.name)?.set(i.query, d),
            r.optionNameToLastQuery.get(i.name) === i.query &&
                ((r.lastErrored = !1), r.optionNameToLastResults.set(i.name, d)),
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
            (0, a.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, { duration_ms: r, error: !0 }),
            _.delete(t),
            (f(n.channelId).lastErrored = !0),
            !0
        );
    },
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: E,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: E,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, command: n } = e;
        m(t, n?.id);
    },
});
