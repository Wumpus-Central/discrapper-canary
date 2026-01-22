n.d(t, {
    A: () => I,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(155718),
    o = n(58149),
    l = n(723702),
    c = n(861382),
    u = n(652215);

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

function h(e) {
    if (!p.has(e)) {
        var t;
        p.set(e, {
            commandId: null == (t = c.A.getActiveCommand(e)) ? void 0 : t.id,
            optionName: c.A.getActiveOptionName(e),
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

function m() {
    return f.clear(), p.clear(), !0;
}

function g(e) {
    var t;
    let { nonce: n, channelId: r, query: i, name: a } = e,
        s = h(r);
    if (s.optionNameToLastQuery.get(a) === i) return !1;
    s.optionNameToLastQuery.set(a, i);
    let o = null == (t = s.optionNameToAutocompleteQueries.get(a)) ? void 0 : t.get(i);
    if (null != o) return (s.lastErrored = !1), s.optionNameToLastResults.set(a, o), !0;
    let l = s.optionNameToNonce.get(a);
    if (
        (null != l && f.delete(l),
        f.set(n, {
            channelId: r,
            query: i,
            name: a,
        }),
        _.set(n, new Date()),
        s.optionNameToNonce.set(a, n),
        s.lastErrored)
    )
        return (s.lastErrored = !1), !0;
}
let E = (0, l.isDesktop)();

function b(e) {
    var t, n, r;
    let { choices: i, nonce: a } = e,
        l = f.get(a);
    if (null == l) return !1;
    f.delete(a);
    let d = h(l.channelId);
    null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map());
    let p = E && (null == (n = c.A.getActiveOption(l.channelId)) ? void 0 : n.type) === s.n4.INTEGER,
        m =
            null !=
            (t =
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
                ? t
                : [],
        g = _.get(a),
        b = null != g ? new Date().getTime() - g.getTime() : 0;
    return (
        (0, o.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: b,
            error: !1,
            num_options: m.length,
        }),
        _.delete(a),
        null == (r = d.optionNameToAutocompleteQueries.get(l.name)) || r.set(l.query, m),
        d.optionNameToLastQuery.get(l.name) === l.query &&
            ((d.lastErrored = !1), d.optionNameToLastResults.set(l.name, m)),
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
        (0, o.zV)(u.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
            duration_ms: i,
            error: !0,
        }),
        _.delete(t),
        (h(n.channelId).lastErrored = !0),
        !0
    );
}

function O(e) {
    let { channelId: t, command: n } = e;
    v(t, null == n ? void 0 : n.id);
}

function A(e) {
    let { channelId: t, command: n } = e;
    v(t, null == n ? void 0 : n.id);
}

function v(e, t) {
    let n = c.A.getActiveOptionName(e),
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
class S extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A);
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
d(S, "displayName", "ApplicationCommandAutocompleteStore");
let I = new S(a.h, {
    CONNECTION_OPEN: m,
    LOGOUT: m,
    CHANNEL_SELECT: m,
    APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: g,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: b,
    INTERACTION_FAILURE: y,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: O,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: O,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: A,
});
