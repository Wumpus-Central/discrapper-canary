n.d(t, { Z: () => b }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(367907),
    o = n(998698),
    l = n(981631);
function u(e, t, n) {
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
let c = new Map(),
    d = new Map(),
    f = new Map();
function _(e) {
    if (!d.has(e)) {
        var t;
        d.set(e, {
            commandId: null === (t = o.Z.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
            optionName: o.Z.getActiveOptionName(e),
            optionNameToAutocompleteQueries: new Map(),
            optionNameToLastResults: new Map(),
            optionNameToNonce: new Map(),
            optionNameToLastQuery: new Map(),
            lastErrored: !1,
            lastResponseNonce: void 0
        });
    }
    return d.get(e);
}
function p() {
    return c.clear(), d.clear(), !0;
}
function h(e) {
    var t;
    let { nonce: n, channelId: i, query: r, name: a } = e,
        s = _(i);
    if (s.optionNameToLastQuery.get(a) === r) return !1;
    s.optionNameToLastQuery.set(a, r);
    let o = null === (t = s.optionNameToAutocompleteQueries.get(a)) || void 0 === t ? void 0 : t.get(r);
    if (null != o) return (s.lastErrored = !1), s.optionNameToLastResults.set(a, o), !0;
    let l = s.optionNameToNonce.get(a);
    if (
        (null != l && c.delete(l),
        c.set(n, {
            channelId: i,
            query: r,
            name: a
        }),
        f.set(n, new Date()),
        s.optionNameToNonce.set(a, n),
        s.lastErrored)
    )
        return (s.lastErrored = !1), !0;
}
function m(e) {
    var t, n;
    let { choices: i, nonce: r } = e,
        a = c.get(r);
    if (null == a) return !1;
    c.delete(r);
    let o =
            null !==
                (n =
                    null == i
                        ? void 0
                        : i.map((e) => {
                              var t;
                              return {
                                  ...e,
                                  displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                              };
                          })) && void 0 !== n
                ? n
                : [],
        u = f.get(r),
        d = null != u ? new Date().getTime() - u.getTime() : 0;
    (0, s.yw)(l.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
        duration_ms: d,
        error: !1,
        num_options: o.length
    }),
        f.delete(r);
    let p = _(a.channelId);
    return null == p.optionNameToAutocompleteQueries.get(a.name) && p.optionNameToAutocompleteQueries.set(a.name, new Map()), null === (t = p.optionNameToAutocompleteQueries.get(a.name)) || void 0 === t || t.set(a.query, o), p.optionNameToLastQuery.get(a.name) === a.query && ((p.lastErrored = !1), p.optionNameToLastResults.set(a.name, o)), (p.lastResponseNonce = r), !0;
}
function g(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = c.get(t);
    if (null == n) return !1;
    c.delete(t);
    let i = f.get(t),
        r = null != i ? new Date().getTime() - i.getTime() : 0;
    return (
        (0, s.yw)(l.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: r,
            error: !0
        }),
        f.delete(t),
        (_(n.channelId).lastErrored = !0),
        !0
    );
}
function E(e) {
    let { channelId: t, command: n } = e;
    y(t, null == n ? void 0 : n.id);
}
function v(e) {
    let { channelId: t, command: n } = e;
    y(t, null == n ? void 0 : n.id);
}
function y(e, t) {
    let n = o.Z.getActiveOptionName(e),
        i = d.get(e);
    return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), (i.lastErrored = !1), (i.commandId = t), (i.optionName = n), !0);
}
class I extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getLastErrored(e) {
        return _(e).lastErrored;
    }
    getAutocompleteChoices(e, t, n) {
        var i;
        return null === (i = _(e).optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n);
    }
    getAutocompleteLastChoices(e, t) {
        return _(e).optionNameToLastResults.get(t);
    }
    getLastResponseNonce(e) {
        return _(e).lastResponseNonce;
    }
}
u(I, 'displayName', 'ApplicationCommandAutocompleteStore');
let b = new I(a.Z, {
    CONNECTION_OPEN: p,
    LOGOUT: p,
    CHANNEL_SELECT: p,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: h,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: m,
    INTERACTION_FAILURE: g,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: E,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: E,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: v
});
