r.d(t, { default: () => O });
var n = r(54381),
    s = r(473749),
    a = r(120356),
    i = r.n(a),
    c = r(704215),
    o = r(159691),
    l = r(481060),
    d = r(605236),
    u = r(626135),
    f = r(164670),
    b = r(705338),
    m = r(981631),
    x = r(921944),
    p = r(231338),
    j = r(388032),
    g = r(383749),
    h = r(867709),
    v = r(157443);
function O(e) {
    s.useEffect(() => {
        u.default.track(m.rMx.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal" }),
            (0, d.bj)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL, { dismissAction: x.L.AUTO_DISMISS });
    }, []);
    let t = s.useCallback(() => {
            (0, b.eagerNavigateToSocialLayerStorefront)({ guildId: (0, f.ac)() });
        }, []),
        { onClose: r } = e,
        a = s.useCallback(() => {
            (0, b.default)({ guildId: (0, f.ac)() }), r();
        }, [r]);
    return (0, n.jsx)(o.f6W, {
        theme: p.BR.DARK,
        children: (s) => {
            var c, d;
            return (0, n.jsx)(
                l.IX,
                ((c = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (d = d =
                    {
                        size: "lg",
                        children: (0, n.jsxs)("div", {
                            className: i()(s, g.content),
                            children: [
                                (0, n.jsx)("div", {
                                    className: g.closeButton,
                                    children: (0, n.jsx)(o.PZ7, { onClick: r }),
                                }),
                                (0, n.jsx)("div", { className: g.artwork }),
                                (0, n.jsxs)("div", {
                                    className: g.titleContainer,
                                    children: [
                                        (0, n.jsx)(o.X6q, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: g.title,
                                            children: j.intl.string(j.t.to0E8U),
                                        }),
                                        (0, n.jsx)(o.X6q, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: g.title,
                                            children: j.intl.string(j.t.BKEkBd),
                                        }),
                                        (0, n.jsx)(o.X6q, {
                                            variant: "heading-lg/medium",
                                            color: "text-muted",
                                            className: g.subtitle,
                                            children: j.intl.string(j.t.SiXpR2),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: g.features,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: g.feature,
                                            children: [
                                                (0, n.jsx)("div", {
                                                    className: g.featureIcon,
                                                    children: (0, n.jsx)("img", {
                                                        src: v,
                                                        alt: "",
                                                    }),
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: g.featureCopy,
                                                    children: [
                                                        (0, n.jsx)(o.X6q, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-strong",
                                                            children: j.intl.string(j.t["5hRbeH"]),
                                                        }),
                                                        (0, n.jsx)(o.xvT, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            children: j.intl.string(j.t["72sDuh"]),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: g.feature,
                                            children: [
                                                (0, n.jsx)("div", {
                                                    className: g.featureIcon,
                                                    children: (0, n.jsx)("img", {
                                                        src: h,
                                                        alt: "",
                                                    }),
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: g.featureCopy,
                                                    children: [
                                                        (0, n.jsx)(o.X6q, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-strong",
                                                            children: j.intl.string(j.t.MO4ASw),
                                                        }),
                                                        (0, n.jsx)(o.xvT, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            children: j.intl.string(j.t.o4i2Wx),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(o.zxk, {
                                    variant: "primary",
                                    text: j.intl.string(j.t.CekBHq),
                                    onClick: a,
                                    onMouseDown: t,
                                }),
                            ],
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(d)).forEach(function (e) {
                          Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e));
                      }),
                c),
            );
        },
    });
}
