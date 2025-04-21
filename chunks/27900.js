n.d(t, { default: () => I });
var l = n(200651);
n(192379);
var r = n(481060),
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
    p = n(332031),
    m = n(981631),
    S = n(388032);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { user: t, guildId: n, channelId: o, mediaEngineContext: a, onSelect: c, onShowProfile: m, onWatchStream: j, appContext: P } = e,
        A = (0, v.Z)({
            onAction: () => {
                null == m || m();
            }
        }),
        T = (0, E.Z)({
            user: t,
            context: P
        }),
        I = (0, g.Z)({
            user: t,
            appContext: P
        }),
        M = (0, p.Z)(t.id, j),
        N = (0, Z.Z)(t.id),
        C = (0, h.Z)(t.id, a),
        D = (0, y.Z)({ user: t }),
        w = (0, u.Z)(null, t),
        x = (0, f.Z)({
            user: t,
            appContext: P
        }),
        U = (0, O.Z)({
            user: t,
            appContext: P
        }),
        k = (0, _.Z)({
            user: t,
            appContext: P
        }),
        R = (0, s.Z)({
            id: t.id,
            label: S.intl.string(S.t['/AXYnJ'])
        }),
        L = (0, d.Z)(t),
        B = (0, b.Z)(t, n, o),
        V = t.isNonUserBot();
    return (0, l.jsxs)(r.v2r, {
        navId: 'user-context',
        onClose: i.Zy,
        'aria-label': S.intl.string(S.t.liqwPD),
        onSelect: c,
        children: [
            !V &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.kSQ, { children: L }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [A, T, I, M]
                        }),
                        (0, l.jsx)(r.kSQ, { children: N }),
                        (0, l.jsx)(r.kSQ, { children: w }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [C, D, x, k, U]
                        }),
                        (0, l.jsx)(r.kSQ, { children: B })
                    ]
                }),
            (0, l.jsx)(r.kSQ, { children: R })
        ]
    });
}
function T(e) {
    let { user: t, mediaEngineContext: n, onSelect: o, onShowProfile: a, onWatchStream: c, appContext: b } = e,
        m = (0, v.Z)({
            onAction: () => {
                null == a || a();
            }
        }),
        j = (0, E.Z)({
            user: t,
            context: b
        }),
        P = (0, g.Z)({
            user: t,
            appContext: b
        }),
        A = (0, p.Z)(t.id, c),
        T = (0, Z.Z)(t.id),
        I = (0, h.Z)(t.id, n),
        M = (0, y.Z)({ user: t }),
        N = (0, u.Z)(null, t),
        C = (0, f.Z)({
            user: t,
            appContext: b
        }),
        D = (0, O.Z)({
            user: t,
            appContext: b
        }),
        w = (0, _.Z)({
            user: t,
            appContext: b
        }),
        x = (0, s.Z)({
            id: t.id,
            label: S.intl.string(S.t['/AXYnJ'])
        }),
        U = (0, d.Z)(t),
        k = t.isNonUserBot();
    return (0, l.jsxs)(r.v2r, {
        navId: 'user-context',
        onClose: i.Zy,
        'aria-label': S.intl.string(S.t.liqwPD),
        onSelect: o,
        children: [
            !k &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.kSQ, { children: U }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [m, j, P, A]
                        }),
                        (0, l.jsx)(r.kSQ, { children: T }),
                        (0, l.jsx)(r.kSQ, { children: N }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [I, M, C, w, D]
                        })
                    ]
                }),
            (0, l.jsx)(r.kSQ, { children: x })
        ]
    });
}
let I = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            var { guildId: t, channelId: n } = e,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                l,
                                r = {},
                                i = Object.keys(e);
                            for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    }
                    return r;
                })(e, ['guildId', 'channelId']);
            return null != t && null != n
                ? (0, l.jsx)(
                      A,
                      P(j({}, r), {
                          guildId: t,
                          channelId: n
                      })
                  )
                : (0, l.jsx)(
                      T,
                      P(j({}, r), {
                          guildId: t,
                          channelId: n
                      })
                  );
        },
        { object: m.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.USER_OVERLAY_CONTEXT_MENU]
);
