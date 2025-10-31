n.d(t, { default: () => M });
var l = n(951288);
n(647438);
var r = n(481060),
    i = n(239091),
    o = n(883385),
    a = n(108843),
    u = n(947440),
    c = n(100527),
    s = n(299206),
    d = n(819403),
    f = n(777658),
    b = n(858488),
    g = n(933409),
    O = n(389052),
    Z = n(24311),
    E = n(158508),
    m = n(710631),
    y = n(494439),
    v = n(991307),
    j = n(700994),
    p = n(332031),
    S = n(981631),
    h = n(388032);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    let {
            user: t,
            guildId: n,
            channelId: o,
            mediaEngineContext: a,
            onSelect: c,
            onShowProfile: S,
            onWatchStream: _,
            appContext: P,
        } = e,
        A = (0, y.Z)({
            onAction: () => {
                null == S || S();
            },
        }),
        I = (0, Z.Z)({
            user: t,
            context: P,
        }),
        M = (0, b.Z)({
            user: t,
            appContext: P,
        }),
        C = (0, p.Z)(t.id, _),
        x = (0, j.Z)(t.id),
        D = (0, v.Z)(t.id, a),
        T = (0, m.Z)({ user: t }),
        N = (0, u.Z)(null, t),
        k = (0, f.Z)({
            user: t,
            appContext: P,
        }),
        w = (0, O.Z)({
            user: t,
            appContext: P,
        }),
        U = (0, E.Z)({
            user: t,
            appContext: P,
        }),
        L = (0, s.Z)({
            id: t.id,
            label: h.intl.string(h.t["/AXYnE"]),
        }),
        R = (0, d.Z)(t),
        B = (0, g.Z)(t, n, o),
        V = t.isNonUserBot();
    return (0, l.jsxs)(r.v2r, {
        navId: "user-context",
        onClose: i.Zy,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: c,
        children: [
            !V &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.kSQ, { children: R }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [A, I, M, C],
                        }),
                        (0, l.jsx)(r.kSQ, { children: x }),
                        (0, l.jsx)(r.kSQ, { children: N }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [D, T, k, U, w],
                        }),
                        (0, l.jsx)(r.kSQ, { children: B }),
                    ],
                }),
            (0, l.jsx)(r.kSQ, { children: L }),
        ],
    });
}
function I(e) {
    let { user: t, mediaEngineContext: n, onSelect: o, onShowProfile: a, onWatchStream: c, appContext: g } = e,
        S = (0, y.Z)({
            onAction: () => {
                null == a || a();
            },
        }),
        _ = (0, Z.Z)({
            user: t,
            context: g,
        }),
        P = (0, b.Z)({
            user: t,
            appContext: g,
        }),
        A = (0, p.Z)(t.id, c),
        I = (0, j.Z)(t.id),
        M = (0, v.Z)(t.id, n),
        C = (0, m.Z)({ user: t }),
        x = (0, u.Z)(null, t),
        D = (0, f.Z)({
            user: t,
            appContext: g,
        }),
        T = (0, O.Z)({
            user: t,
            appContext: g,
        }),
        N = (0, E.Z)({
            user: t,
            appContext: g,
        }),
        k = (0, s.Z)({
            id: t.id,
            label: h.intl.string(h.t["/AXYnE"]),
        }),
        w = (0, d.Z)(t),
        U = t.isNonUserBot();
    return (0, l.jsxs)(r.v2r, {
        navId: "user-context",
        onClose: i.Zy,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: o,
        children: [
            !U &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.kSQ, { children: w }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [S, _, P, A],
                        }),
                        (0, l.jsx)(r.kSQ, { children: I }),
                        (0, l.jsx)(r.kSQ, { children: x }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [M, C, D, N, T],
                        }),
                    ],
                }),
            (0, l.jsx)(r.kSQ, { children: k }),
        ],
    });
}
let M = (0, a.Z)(
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
                        for (l = 0; l < i.length; l++)
                            (n = i[l]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (r[n] = e[n]);
                    }
                    return r;
                })(e, ["guildId", "channelId"]);
            return null != t && null != n
                ? (0, l.jsx)(
                      A,
                      P(_({}, r), {
                          guildId: t,
                          channelId: n,
                      }),
                  )
                : (0, l.jsx)(
                      I,
                      P(_({}, r), {
                          guildId: t,
                          channelId: n,
                      }),
                  );
        },
        { object: S.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.USER_OVERLAY_CONTEXT_MENU],
);
