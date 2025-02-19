n.d(t, { default: () => T });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(239091),
    o = n(883385),
    a = n(108843),
    u = n(947440),
    c = n(100527),
    d = n(299206),
    s = n(819403),
    f = n(777658),
    g = n(858488),
    b = n(933409),
    O = n(389052),
    E = n(24311),
    v = n(158508),
    _ = n(710631),
    y = n(494439),
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
    let { user: t, guildId: n, channelId: o, mediaEngineContext: a, onSelect: c, onShowProfile: p, appContext: j } = e,
        N = (0, y.Z)({
            onAction: () => {
                null == p || p();
            }
        }),
        P = (0, E.Z)({
            user: t,
            context: j
        }),
        A = (0, g.Z)({
            user: t,
            appContext: j
        }),
        T = (0, m.Z)(t.id),
        I = (0, Z.Z)(t.id),
        M = (0, h.Z)(t.id, a),
        D = (0, _.Z)({ user: t }),
        C = (0, u.Z)(null, t),
        w = (0, f.Z)({
            user: t,
            appContext: j
        }),
        x = (0, O.Z)({
            user: t,
            appContext: j
        }),
        U = (0, v.Z)({
            user: t,
            appContext: j
        }),
        k = (0, d.Z)({
            id: t.id,
            label: S.NW.string(S.t['/AXYnJ'])
        }),
        W = (0, s.Z)(t),
        R = (0, b.Z)(t, n, o),
        L = t.isNonUserBot();
    return (0, r.jsxs)(l.v2r, {
        navId: 'user-context',
        onClose: i.Zy,
        'aria-label': S.NW.string(S.t.liqwPD),
        onSelect: c,
        children: [
            !L &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.kSQ, { children: W }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [N, P, A, T]
                        }),
                        (0, r.jsx)(l.kSQ, { children: I }),
                        (0, r.jsx)(l.kSQ, { children: C }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [M, D, w, U, x]
                        }),
                        (0, r.jsx)(l.kSQ, { children: R })
                    ]
                }),
            (0, r.jsx)(l.kSQ, { children: k })
        ]
    });
}
function A(e) {
    let { user: t, mediaEngineContext: n, onSelect: o, onShowProfile: a, appContext: c } = e,
        b = (0, y.Z)({
            onAction: () => {
                null == a || a();
            }
        }),
        p = (0, E.Z)({
            user: t,
            context: c
        }),
        j = (0, g.Z)({
            user: t,
            appContext: c
        }),
        N = (0, m.Z)(t.id),
        P = (0, Z.Z)(t.id),
        A = (0, h.Z)(t.id, n),
        T = (0, _.Z)({ user: t }),
        I = (0, u.Z)(null, t),
        M = (0, f.Z)({
            user: t,
            appContext: c
        }),
        D = (0, O.Z)({
            user: t,
            appContext: c
        }),
        C = (0, v.Z)({
            user: t,
            appContext: c
        }),
        w = (0, d.Z)({
            id: t.id,
            label: S.NW.string(S.t['/AXYnJ'])
        }),
        x = (0, s.Z)(t),
        U = t.isNonUserBot();
    return (0, r.jsxs)(l.v2r, {
        navId: 'user-context',
        onClose: i.Zy,
        'aria-label': S.NW.string(S.t.liqwPD),
        onSelect: o,
        children: [
            !U &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.kSQ, { children: x }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [b, p, j, N]
                        }),
                        (0, r.jsx)(l.kSQ, { children: P }),
                        (0, r.jsx)(l.kSQ, { children: I }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [A, T, M, C, D]
                        })
                    ]
                }),
            (0, r.jsx)(l.kSQ, { children: w })
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
