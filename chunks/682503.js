n.d(t, {
    default: () => N,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    l = n(732955),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(855057),
    p = n(702211),
    _ = n(699576),
    A = n(954571),
    m = n(504974),
    f = n(439193),
    g = n(652215),
    h = n(339984),
    x = n(985018),
    b = n(392491);

function N(e) {
    let { transitionState: t, onClose: s, onComplete: N, uploadType: y, showUpsellHeader: j, analyticsPage: E } = e,
        [v, R] = i.useState(!1),
        L = (0, o.k34)(),
        { analyticsLocations: I, newestAnalyticsLocation: w } = (0, d.Ay)(c.A.GIF_PICKER);
    async function P(e) {
        let t,
            { gifSrc: i } = e;
        if (null == i || v) return;
        R(!0);
        let r = (0, f.s)(i),
            l = await fetch(r),
            c = await l.blob(),
            d =
                "" !== c.type
                    ? c.type
                    : (function (e) {
                          var t;
                          switch (null == (t = new URL(e).pathname.split(".").pop()) ? void 0 : t.toLowerCase()) {
                              case "gif":
                              default:
                                  return "image/gif";
                              case "webp":
                                  return "image/webp";
                              case "png":
                                  return "image/png";
                              case "jpg":
                              case "jpeg":
                                  return "image/jpeg";
                          }
                      })(r),
            u = "jpeg" === (t = d.split("/")[1]) ? ".jpg" : null != t && "" !== t ? ".".concat(t) : ".gif",
            p = "selected".concat(u);
        s(),
            (0, o.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("35929"), n.e("74571"), n.e("67449")]).then(
                        n.bind(n, 142630),
                    );
                    return (t) =>
                        (0, a.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        a.forEach(function (t) {
                                            var a;
                                            (a = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: a,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = a);
                                        });
                                }
                                return e;
                            })(
                                {
                                    imageUri: r,
                                    file: new File([c], p, {
                                        type: d,
                                    }),
                                    onCrop: N,
                                    uploadType: y,
                                    showUpsellHeader: j,
                                },
                                t,
                            ),
                        );
                },
                {
                    contextKey: L,
                },
            );
    }
    i.useEffect(() => {
        A.default.track(g.HAw.OPEN_MODAL, {
            type: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: I,
            location: {
                page: E,
            },
        });
    }, [I, E]);
    let S = y === h.HL.AVATAR || y === h.HL.BANNER,
        U = (0, p.b)(!S);
    return (0, a.jsx)(d.f5, {
        value: I,
        children: (0, a.jsxs)(l.dWK, {
            onClose: s,
            transitionState: t,
            children: [
                (0, a.jsx)(l.rQ0, {
                    title: x.intl.string(x.t["xsC+/y"]),
                }),
                j &&
                    !U &&
                    (0, a.jsx)("div", {
                        className: b.It,
                        children: (0, a.jsx)(m.A, {
                            type: y,
                            analyticsPage: E,
                            analyticsSection: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: b.SD,
                    children: [
                        (0, a.jsx)(u.A, {
                            className: r()(b.XC, {
                                [b.bX]: v,
                            }),
                            onSelectGIF: P,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        v &&
                            (0, a.jsx)(o.y$y, {
                                className: b.u1,
                            }),
                        j &&
                            U &&
                            (0, a.jsx)(_.A, {
                                uploadType: y,
                                analyticsSource: w,
                                showUpsell: !0,
                                className: b.Kt,
                            }),
                    ],
                }),
            ],
        }),
    });
}
