n.d(t, { default: () => T });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(239091),
    o = n(883385),
    a = n(108843),
    u = n(947440),
    c = n(100527),
    s = n(299206),
    d = n(819403),
    f = n(777658),
    g = n(858488),
    b = n(933409),
    O = n(389052),
    E = n(24311),
    _ = n(158508),
    y = n(710631),
    v = n(494439),
    h = n(991307),
    Z = n(700994),
    m = n(332031),
    p = n(981631),
    S = n(388032);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { user: t, guildId: n, channelId: o, mediaEngineContext: a, onSelect: c, onShowProfile: p, onWatchStream: j, appContext: N } = e,
        P = (0, v.Z)({
            onAction: () => {
                null == p || p();
            }
        }),
        A = (0, E.Z)({
            user: t,
            context: N
        }),
        T = (0, g.Z)({
            user: t,
            appContext: N
        }),
        I = (0, m.Z)(t.id, j),
        M = (0, Z.Z)(t.id),
        D = (0, h.Z)(t.id, a),
        C = (0, y.Z)({ user: t }),
        w = (0, u.Z)(null, t),
        x = (0, f.Z)({
            user: t,
            appContext: N
        }),
        U = (0, O.Z)({
            user: t,
            appContext: N
        }),
        k = (0, _.Z)({
            user: t,
            appContext: N
        }),
        W = (0, s.Z)({
            id: t.id,
            label: S.NW.string(S.t['/AXYnJ'])
        }),
        R = (0, d.Z)(t),
        L = (0, b.Z)(t, n, o),
        B = t.isNonUserBot();
    return (0, r.jsxs)(l.v2r, {
        navId: 'user-context',
        onClose: i.Zy,
        'aria-label': S.NW.string(S.t.liqwPD),
        onSelect: c,
        children: [
            !B &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.kSQ, { children: R }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [P, A, T, I]
                        }),
                        (0, r.jsx)(l.kSQ, { children: M }),
                        (0, r.jsx)(l.kSQ, { children: w }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [D, C, x, k, U]
                        }),
                        (0, r.jsx)(l.kSQ, { children: L })
                    ]
                }),
            (0, r.jsx)(l.kSQ, { children: W })
        ]
    });
}
function A(e) {
    let { user: t, mediaEngineContext: n, onSelect: o, onShowProfile: a, onWatchStream: c, appContext: b } = e,
        p = (0, v.Z)({
            onAction: () => {
                null == a || a();
            }
        }),
        j = (0, E.Z)({
            user: t,
            context: b
        }),
        N = (0, g.Z)({
            user: t,
            appContext: b
        }),
        P = (0, m.Z)(t.id, c),
        A = (0, Z.Z)(t.id),
        T = (0, h.Z)(t.id, n),
        I = (0, y.Z)({ user: t }),
        M = (0, u.Z)(null, t),
        D = (0, f.Z)({
            user: t,
            appContext: b
        }),
        C = (0, O.Z)({
            user: t,
            appContext: b
        }),
        w = (0, _.Z)({
            user: t,
            appContext: b
        }),
        x = (0, s.Z)({
            id: t.id,
            label: S.NW.string(S.t['/AXYnJ'])
        }),
        U = (0, d.Z)(t),
        k = t.isNonUserBot();
    return (0, r.jsxs)(l.v2r, {
        navId: 'user-context',
        onClose: i.Zy,
        'aria-label': S.NW.string(S.t.liqwPD),
        onSelect: o,
        children: [
            !k &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.kSQ, { children: U }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [p, j, N, P]
                        }),
                        (0, r.jsx)(l.kSQ, { children: A }),
                        (0, r.jsx)(l.kSQ, { children: M }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [T, I, D, w, C]
                        })
                    ]
                }),
            (0, r.jsx)(l.kSQ, { children: x })
        ]
    });
}
let T = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            var { guildId: t, channelId: n } = e,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    }
                    return l;
                })(e, ['guildId', 'channelId']);
            return null != t && null != n
                ? (0, r.jsx)(
                      P,
                      N(j({}, l), {
                          guildId: t,
                          channelId: n
                      })
                  )
                : (0, r.jsx)(
                      A,
                      N(j({}, l), {
                          guildId: t,
                          channelId: n
                      })
                  );
        },
        { object: p.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.USER_OVERLAY_CONTEXT_MENU]
);
