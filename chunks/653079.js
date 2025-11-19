n.d(t, { Z: () => _ });
var l = n(54381),
    r = n(120356),
    i = n.n(r),
    s = n(442837),
    a = n(481060),
    o = n(884697),
    c = n(449217),
    u = n(29121),
    d = n(778825),
    p = n(25990),
    m = n(74538),
    h = n(956748),
    g = n(566697),
    x = n(388032),
    v = n(763740);
let _ = (e) => {
    var t, n;
    let { user: r, guildId: _, nameplate: j } = e,
        y = (0, s.cj)([p.Z, d.Z], () => (null == _ ? p.Z.getAllPending() : d.Z.getAllPending())),
        { product: P, purchase: b } = (0, c.Z)(null == j ? void 0 : j.skuId),
        f = (0, u.kd)(P),
        C = m.ZP.canUseCollectibles(r),
        E = (0, o.qS)(b),
        O = (0, o.G1)(P),
        w = !C && E,
        N = null == b || w;
    return (0, l.jsxs)("div", {
        className: i()(v.previewBorder, { [v.upsell]: null != j && N }),
        children: [
            (0, l.jsx)("div", {
                className: v.previewBox,
                role: "img",
                "aria-label": x.intl.string(x.t.SZeUdR),
                children: (0, l.jsxs)("div", {
                    className: v.previewContents,
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
                            g.Z,
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
                                    guildId: _,
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
                    className: v.previewDescription,
                    children: [
                        (0, l.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            children: f,
                        }),
                        N &&
                            (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: w
                                    ? x.intl.string(x.t.nD78oa)
                                    : O && C
                                      ? x.intl.string(x.t.hmyYK8)
                                      : O
                                        ? x.intl.string(x.t.JY1i0u)
                                        : x.intl.string(x.t.fEGjVQ),
                            }),
                    ],
                }),
        ],
    });
};
