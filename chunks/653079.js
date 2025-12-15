n.d(t, { Z: () => f });
var l = n(54381),
    r = n(120356),
    i = n.n(r),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(884697),
    d = n(449217),
    u = n(29121),
    p = n(778825),
    m = n(25990),
    g = n(74538),
    h = n(956748),
    x = n(566697),
    v = n(388032),
    b = n(875292);
let f = (e) => {
    var t, n;
    let { user: r, guildId: f, nameplate: j } = e,
        y = (0, s.cj)([m.Z, p.Z], () => (null == f ? m.Z.getAllPending() : p.Z.getAllPending())),
        { product: P, purchase: C } = (0, d.Z)(null == j ? void 0 : j.skuId),
        E = (0, u.ag)(C),
        O = (0, u.kd)(P),
        w = g.ZP.canUseCollectibles(r),
        _ = (0, c.qS)(C),
        N = (0, c.G1)(P),
        Z = !w && _,
        I = null == C || Z;
    return (0, l.jsxs)("div", {
        className: i()(b.previewBorder, { [b.upsell]: null != j && I }),
        children: [
            (0, l.jsx)("div", {
                className: b.previewBox,
                role: "img",
                "aria-label": v.intl.string(v.t.SZeUdR),
                children: (0, l.jsxs)("div", {
                    className: b.previewContents,
                    "aria-hidden": !0,
                    children: [
                        (0, l.jsx)(h.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(h.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(
                            x.Z,
                            ((t = (function (e) {
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
                            })({}, y)),
                            (n = n =
                                {
                                    user: r,
                                    guildId: f,
                                    nameplate: j,
                                    isHighlighted: !0,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var l = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, l);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                        ),
                        (0, l.jsx)(h.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(h.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                    ],
                }),
            }),
            null != j &&
                (0, l.jsxs)("div", {
                    className: b.previewDescription,
                    children: [
                        (0, l.jsxs)(o.Text, {
                            variant: "text-sm/semibold",
                            children: [" ", (0, a.isEmpty)(E) ? O : E],
                        }),
                        I &&
                            (0, l.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: Z
                                    ? v.intl.string(v.t.nD78oa)
                                    : N && w
                                      ? v.intl.string(v.t.hmyYK8)
                                      : N
                                        ? v.intl.string(v.t.JY1i0u)
                                        : v.intl.string(v.t.fEGjVQ),
                            }),
                    ],
                }),
        ],
    });
};
