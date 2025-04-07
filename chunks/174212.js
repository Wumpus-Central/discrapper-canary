n.d(t, { Z: () => T }), n(388685);
var r,
    i = n(442837),
    o = n(570140),
    a = n(911969),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = new Map(),
    _ = new Map(),
    p = new Map();
function h(e) {
    if (!_.has(e)) {
        var t;
        _.set(e, {
            commandId: null == (t = c.Z.getActiveCommand(e)) ? void 0 : t.id,
            optionName: c.Z.getActiveOptionName(e),
            optionNameToAutocompleteQueries: new Map(),
            optionNameToLastResults: new Map(),
            optionNameToNonce: new Map(),
            optionNameToLastQuery: new Map(),
            lastErrored: !1,
            lastResponseNonce: void 0
        });
    }
    return _.get(e);
}
function m() {
    return f.clear(), _.clear(), !0;
}
function g(e) {
    var t;
    let { nonce: n, channelId: r, query: i, name: o } = e,
        a = h(r);
    if (a.optionNameToLastQuery.get(o) === i) return !1;
    a.optionNameToLastQuery.set(o, i);
    let s = null == (t = a.optionNameToAutocompleteQueries.get(o)) ? void 0 : t.get(i);
    if (null != s) return (a.lastErrored = !1), a.optionNameToLastResults.set(o, s), !0;
    let l = a.optionNameToNonce.get(o);
    if (
        (null != l && f.delete(l),
        f.set(n, {
            channelId: r,
            query: i,
            name: o
        }),
        p.set(n, new Date()),
        a.optionNameToNonce.set(o, n),
        a.lastErrored)
    )
        return (a.lastErrored = !1), !0;
}
let E = (0, l.isDesktop)();
function b(e) {
    var t, n, r;
    let { choices: i, nonce: o } = e,
        l = f.get(o);
    if (null == l) return !1;
    f.delete(o);
    let d = h(l.channelId);
    null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map());
    let _ = E && (null == (t = c.Z.getActiveOption(l.channelId)) ? void 0 : t.type) === a.jw.INTEGER,
        m =
            null !=
            (r =
                null == i
                    ? void 0
                    : i.map((e) => {
                          let { value: t, name_localized: n, name: r } = e;
                          return {
                              displayName: null != n ? n : r,
                              name: r,
                              value: (t = _ ? Number(t) : t)
                          };
                      }))
                ? r
                : [],
        g = p.get(o),
        b = null != g ? new Date().getTime() - g.getTime() : 0;
    return (
        (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: b,
            error: !1,
            num_options: m.length
        }),
        p.delete(o),
        null == (n = d.optionNameToAutocompleteQueries.get(l.name)) || n.set(l.query, m),
        d.optionNameToLastQuery.get(l.name) === l.query && ((d.lastErrored = !1), d.optionNameToLastResults.set(l.name, m)),
        (d.lastResponseNonce = o),
        !0
    );
}
function y(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = f.get(t);
    if (null == n) return !1;
    f.delete(t);
    let r = p.get(t),
        i = null != r ? new Date().getTime() - r.getTime() : 0;
    return (
        (0, s.yw)(u.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: i,
            error: !0
        }),
        p.delete(t),
        (h(n.channelId).lastErrored = !0),
        !0
    );
}
function v(e) {
    let { channelId: t, command: n } = e;
    I(t, null == n ? void 0 : n.id);
}
function O(e) {
    let { channelId: t, command: n } = e;
    I(t, null == n ? void 0 : n.id);
}
function I(e, t) {
    let n = c.Z.getActiveOptionName(e),
        r = _.get(e);
    return null != r && (t !== r.commandId || n !== r.optionName) && (null != t && t !== r.commandId && (r.optionNameToLastResults.clear(), r.optionNameToNonce.clear(), r.optionNameToLastQuery.clear(), r.optionNameToAutocompleteQueries.clear()), (r.lastErrored = !1), (r.commandId = t), (r.optionName = n), !0);
}
class S extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getLastErrored(e) {
        return h(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        var r;
        return null == (r = h(e).optionNameToAutocompleteQueries.get(t)) ? void 0 : r.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return h(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return h(e).lastResponseNonce;
    }
}
d(S, 'displayName', 'ApplicationCommandAutocompleteStore');
let T = new S(o.Z, {
    CONNECTION_OPEN: m,
    LOGOUT: m,
    CHANNEL_SELECT: m,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: g,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: b,
    INTERACTION_FAILURE: y,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: v,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: v,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: O
});
