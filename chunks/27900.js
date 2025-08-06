n.d(t, { default: () => I });
var l = n(255367);
n(73800);
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
    y = n(158508),
    j = n(710631),
    v = n(494439),
    E = n(991307),
    m = n(700994),
    p = n(332031),
    S = n(981631),
    _ = n(388032);
function h(e) {
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
            onWatchStream: h,
            appContext: P,
        } = e,
        A = (0, v.Z)({
            onAction: () => {
                null == S || S();
            },
        }),
        M = (0, Z.Z)({
            user: t,
            context: P,
        }),
        I = (0, b.Z)({
            user: t,
            appContext: P,
        }),
        x = (0, p.Z)(t.id, h),
        C = (0, m.Z)(t.id),
        D = (0, E.Z)(t.id, a),
        N = (0, j.Z)({ user: t }),
        T = (0, u.Z)(null, t),
        w = (0, f.Z)({
            user: t,
            appContext: P,
        }),
        U = (0, O.Z)({
            user: t,
            appContext: P,
        }),
        k = (0, y.Z)({
            user: t,
            appContext: P,
        }),
        L = (0, s.Z)({
            id: t.id,
            label: _.intl.string(_.t["/AXYnJ"]),
        }),
        R = (0, d.Z)(t),
        B = (0, g.Z)(t, n, o),
        V = t.isNonUserBot();
    return (0, l.jsxs)(r.v2r, {
        navId: "user-context",
        onClose: i.Zy,
        "aria-label": _.intl.string(_.t.liqwPD),
        onSelect: c,
        children: [
            !V &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.kSQ, { children: R }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [A, M, I, x],
                        }),
                        (0, l.jsx)(r.kSQ, { children: C }),
                        (0, l.jsx)(r.kSQ, { children: T }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [D, N, w, k, U],
                        }),
                        (0, l.jsx)(r.kSQ, { children: B }),
                    ],
                }),
            (0, l.jsx)(r.kSQ, { children: L }),
        ],
    });
}
function M(e) {
    let { user: t, mediaEngineContext: n, onSelect: o, onShowProfile: a, onWatchStream: c, appContext: g } = e,
        S = (0, v.Z)({
            onAction: () => {
                null == a || a();
            },
        }),
        h = (0, Z.Z)({
            user: t,
            context: g,
        }),
        P = (0, b.Z)({
            user: t,
            appContext: g,
        }),
        A = (0, p.Z)(t.id, c),
        M = (0, m.Z)(t.id),
        I = (0, E.Z)(t.id, n),
        x = (0, j.Z)({ user: t }),
        C = (0, u.Z)(null, t),
        D = (0, f.Z)({
            user: t,
            appContext: g,
        }),
        N = (0, O.Z)({
            user: t,
            appContext: g,
        }),
        T = (0, y.Z)({
            user: t,
            appContext: g,
        }),
        w = (0, s.Z)({
            id: t.id,
            label: _.intl.string(_.t["/AXYnJ"]),
        }),
        U = (0, d.Z)(t),
        k = t.isNonUserBot();
    return (0, l.jsxs)(r.v2r, {
        navId: "user-context",
        onClose: i.Zy,
        "aria-label": _.intl.string(_.t.liqwPD),
        onSelect: o,
        children: [
            !k &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.kSQ, { children: U }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [S, h, P, A],
                        }),
                        (0, l.jsx)(r.kSQ, { children: M }),
                        (0, l.jsx)(r.kSQ, { children: C }),
                        (0, l.jsxs)(r.kSQ, {
                            children: [I, x, D, T, N],
                        }),
                    ],
                }),
            (0, l.jsx)(r.kSQ, { children: w }),
        ],
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
                      P(h({}, r), {
                          guildId: t,
                          channelId: n,
                      }),
                  )
                : (0, l.jsx)(
                      M,
                      P(h({}, r), {
                          guildId: t,
                          channelId: n,
                      }),
                  );
        },
        { object: S.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.USER_OVERLAY_CONTEXT_MENU],
);
