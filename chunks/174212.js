n.d(t, { Z: () => T }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(367907),
    l = n(358085),
    c = n(998698),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = new Map(),
    p = new Map(),
    _ = new Map();
function m(e) {
    if (!p.has(e)) {
        var t;
        p.set(e, {
            commandId: null == (t = c.Z.getActiveCommand(e)) ? void 0 : t.id,
            optionName: c.Z.getActiveOptionName(e),
            optionNameToAutocompleteQueries: new Map(),
            optionNameToLastResults: new Map(),
            optionNameToNonce: new Map(),
            optionNameToLastQuery: new Map(),
            lastErrored: !1,
            lastResponseNonce: void 0,
        });
    }
    return p.get(e);
}
function h() {
    return f.clear(), p.clear(), !0;
}
function g(e) {
    var t;
    let { nonce: n, channelId: r, query: i, name: a } = e,
        o = m(r);
    if (o.optionNameToLastQuery.get(a) === i) return !1;
    o.optionNameToLastQuery.set(a, i);
    let s = null == (t = o.optionNameToAutocompleteQueries.get(a)) ? void 0 : t.get(i);
    if (null != s) return (o.lastErrored = !1), o.optionNameToLastResults.set(a, s), !0;
    let l = o.optionNameToNonce.get(a);
    if (
        (null != l && f.delete(l),
        f.set(n, {
            channelId: r,
            query: i,
            name: a,
        }),
        _.set(n, new Date()),
        o.optionNameToNonce.set(a, n),
        o.lastErrored)
    )
        return (o.lastErrored = !1), !0;
}
let E = (0, l.isDesktop)();
function b(e) {
    var t, n, r;
    let { choices: i, nonce: a } = e,
        l = f.get(a);
    if (null == l) return !1;
    f.delete(a);
    let d = m(l.channelId);
    null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map());
    let p = E && (null == (t = c.Z.getActiveOption(l.channelId)) ? void 0 : t.type) === o.jw.INTEGER,
        h =
            null !=
            (r =
                null == i
                    ? void 0
                    : i.map((e) => {
                          let { value: t, name_localized: n, name: r } = e;
                          return {
                              displayName: null != n ? n : r,
                              name: r,
                              value: (t = p ? Number(t) : t),
                          };
                      }))
                ? r
                : [],
        g = _.get(a),
        b = null != g ? new Date().getTime() - g.getTime() : 0;
    return (
        (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: b,
            error: !1,
            num_options: h.length,
        }),
        _.delete(a),
        null == (n = d.optionNameToAutocompleteQueries.get(l.name)) || n.set(l.query, h),
        d.optionNameToLastQuery.get(l.name) === l.query &&
            ((d.lastErrored = !1), d.optionNameToLastResults.set(l.name, h)),
        (d.lastResponseNonce = a),
        !0
    );
}
function y(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = f.get(t);
    if (null == n) return !1;
    f.delete(t);
    let r = _.get(t),
        i = null != r ? new Date().getTime() - r.getTime() : 0;
    return (
        (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: i,
            error: !0,
        }),
        _.delete(t),
        (m(n.channelId).lastErrored = !0),
        !0
    );
}
function O(e) {
    let { channelId: t, command: n } = e;
    S(t, null == n ? void 0 : n.id);
}
function v(e) {
    let { channelId: t, command: n } = e;
    S(t, null == n ? void 0 : n.id);
}
function S(e, t) {
    let n = c.Z.getActiveOptionName(e),
        r = p.get(e);
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
class I extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getLastErrored(e) {
        return m(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        var r;
        return null == (r = m(e).optionNameToAutocompleteQueries.get(t)) ? void 0 : r.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return m(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return m(e).lastResponseNonce;
    }
}
d(I, "displayName", "ApplicationCommandAutocompleteStore");
let T = new I(a.Z, {
    CONNECTION_OPEN: h,
    LOGOUT: h,
    CHANNEL_SELECT: h,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: g,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: b,
    INTERACTION_FAILURE: y,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: O,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: O,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: v,
});
