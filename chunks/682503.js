a.d(t, {
    default: () => h,
}),
    a(896048);
var n = a(627968),
    s = a(64700),
    i = a(503698),
    l = a.n(i),
    r = a(732955),
    c = a(397927),
    o = a(793574),
    d = a(688810),
    u = a(855057),
    f = a(702211),
    A = a(699576),
    _ = a(954571),
    m = a(504974),
    b = a(248067),
    x = a(652215),
    p = a(339984),
    N = a(985018),
    g = a(392491);

function h(e) {
    let { transitionState: t, onClose: i, onComplete: h, uploadType: E, showUpsellHeader: y, analyticsPage: j } = e,
        [R, v] = s.useState(!1),
        I = (0, c.k34)(),
        { analyticsLocations: L, newestAnalyticsLocation: P } = (0, d.Ay)(o.A.GIF_PICKER);
    async function S(e) {
        let { gifSrc: t } = e;
        if (null == t || R) return;
        v(!0);
        let s = (0, b.g)(t),
            l = await fetch(s),
            r = await l.blob();
        i(),
            (0, c.mMO)(
                async () => {
                    let { default: e } = await Promise.all([a.e("35929"), a.e("74571"), a.e("67449")]).then(
                        a.bind(a, 142630),
                    );
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(a);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = a[t]),
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
                            })(
                                {
                                    imageUri: s,
                                    file: new File([r], "tenor.gif", {
                                        type: "image/gif",
                                    }),
                                    onCrop: h,
                                    uploadType: E,
                                    showUpsellHeader: y,
                                },
                                t,
                            ),
                        );
                },
                {
                    contextKey: I,
                },
            );
    }
    s.useEffect(() => {
        _.default.track(x.HAw.OPEN_MODAL, {
            type: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: L,
            location: {
                page: j,
            },
        });
    }, [L, j]);
    let T = E === p.HL.AVATAR || E === p.HL.BANNER,
        w = (0, f.b)(!T);
    return (0, n.jsx)(d.f5, {
        value: L,
        children: (0, n.jsxs)(r.dWK, {
            onClose: i,
            transitionState: t,
            children: [
                (0, n.jsx)(r.rQ0, {
                    title: N.intl.string(N.t["xsC+/y"]),
                }),
                y &&
                    !w &&
                    (0, n.jsx)("div", {
                        className: g.It,
                        children: (0, n.jsx)(m.A, {
                            type: E,
                            analyticsPage: j,
                            analyticsSection: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, n.jsxs)("div", {
                    className: g.SD,
                    children: [
                        (0, n.jsx)(u.A, {
                            className: l()(g.XC, {
                                [g.bX]: R,
                            }),
                            onSelectGIF: S,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        R &&
                            (0, n.jsx)(c.y$y, {
                                className: g.u1,
                            }),
                        y &&
                            w &&
                            (0, n.jsx)(A.A, {
                                uploadType: E,
                                analyticsSource: P,
                                showUpsell: !0,
                                className: g.Kt,
                            }),
                    ],
                }),
            ],
        }),
    });
}
