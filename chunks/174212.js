var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(367907),
    u = r(998698),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Map(),
    p = new Map(),
    h = new Map();
function _(e) {
    if (!p.has(e)) {
        var n;
        p.set(e, {
            commandId: null === (n = u.Z.getActiveCommand(e)) || void 0 === n ? void 0 : n.id,
            optionName: u.Z.getActiveOptionName(e),
            optionNameToAutocompleteQueries: new Map(),
            optionNameToLastResults: new Map(),
            optionNameToNonce: new Map(),
            optionNameToLastQuery: new Map(),
            lastErrored: !1,
            lastResponseNonce: void 0
        });
    }
    return p.get(e);
}
function m() {
    return f.clear(), p.clear(), !0;
}
function g(e) {
    var n;
    let { nonce: r, channelId: i, query: a, name: o } = e,
        s = _(i);
    if (s.optionNameToLastQuery.get(o) === a) return !1;
    s.optionNameToLastQuery.set(o, a);
    let l = null === (n = s.optionNameToAutocompleteQueries.get(o)) || void 0 === n ? void 0 : n.get(a);
    if (null != l) return (s.lastErrored = !1), s.optionNameToLastResults.set(o, l), !0;
    let u = s.optionNameToNonce.get(o);
    if (
        (null != u && f.delete(u),
        f.set(r, {
            channelId: i,
            query: a,
            name: o
        }),
        h.set(r, new Date()),
        s.optionNameToNonce.set(o, r),
        s.lastErrored)
    )
        return (s.lastErrored = !1), !0;
}
function E(e) {
    var n, r;
    let { choices: i, nonce: a } = e,
        o = f.get(a);
    if (null == o) return !1;
    f.delete(a);
    let s =
            null !==
                (r =
                    null == i
                        ? void 0
                        : i.map((e) => {
                              var n;
                              return {
                                  ...e,
                                  displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name
                              };
                          })) && void 0 !== r
                ? r
                : [],
        u = h.get(a),
        d = null != u ? new Date().getTime() - u.getTime() : 0;
    (0, l.yw)(c.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
        duration_ms: d,
        error: !1,
        num_options: s.length
    }),
        h.delete(a);
    let p = _(o.channelId);
    return null == p.optionNameToAutocompleteQueries.get(o.name) && p.optionNameToAutocompleteQueries.set(o.name, new Map()), null === (n = p.optionNameToAutocompleteQueries.get(o.name)) || void 0 === n || n.set(o.query, s), p.optionNameToLastQuery.get(o.name) === o.query && ((p.lastErrored = !1), p.optionNameToLastResults.set(o.name, s)), (p.lastResponseNonce = a), !0;
}
function v(e) {
    let { nonce: n } = e;
    if (null == n) return !1;
    let r = f.get(n);
    if (null == r) return !1;
    f.delete(n);
    let i = h.get(n),
        a = null != i ? new Date().getTime() - i.getTime() : 0;
    return (
        (0, l.yw)(c.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: a,
            error: !0
        }),
        h.delete(n),
        (_(r.channelId).lastErrored = !0),
        !0
    );
}
function y(e) {
    let { channelId: n, command: r } = e;
    I(n, null == r ? void 0 : r.id);
}
function b(e) {
    let { channelId: n, command: r } = e;
    I(n, null == r ? void 0 : r.id);
}
function I(e, n) {
    let r = u.Z.getActiveOptionName(e),
        i = p.get(e);
    return null != i && (n !== i.commandId || r !== i.optionName) && (null != n && n !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), (i.lastErrored = !1), (i.commandId = n), (i.optionName = r), !0);
}
class T extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getLastErrored(e) {
        return _(e).lastErrored;
    }
    getAutocompleteChoices(e, n, r) {
        var i;
        return null === (i = _(e).optionNameToAutocompleteQueries.get(n)) || void 0 === i ? void 0 : i.get(r);
    }
    getAutocompleteLastChoices(e, n) {
        return _(e).optionNameToLastResults.get(n);
    }
    getLastResponseNonce(e) {
        return _(e).lastResponseNonce;
    }
}
d(T, 'displayName', 'ApplicationCommandAutocompleteStore'),
    (n.Z = new T(s.Z, {
        CONNECTION_OPEN: m,
        LOGOUT: m,
        CHANNEL_SELECT: m,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: g,
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: E,
        INTERACTION_FAILURE: v,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: y,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: y,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: b
    }));
