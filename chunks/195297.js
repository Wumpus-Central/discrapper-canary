n.d(t, { default: () => P }), n(388685);
var i = n(951288),
    a = n(647438),
    o = n(120356),
    r = n.n(o),
    c = n(159691),
    l = n(481060),
    s = n(100527),
    d = n(906732),
    u = n(455708),
    f = n(222062),
    g = n(530329),
    _ = n(626135),
    p = n(488499),
    x = n(58384),
    N = n(981631),
    m = n(486324),
    h = n(388032),
    A = n(382775);
function P(e) {
    let { transitionState: t, onClose: o, onComplete: P, uploadType: b, showUpsellHeader: v, analyticsPage: E } = e,
        [j, R] = a.useState(!1),
        y = (0, l.vRw)(),
        { analyticsLocations: I, newestAnalyticsLocation: C } = (0, d.ZP)(s.Z.GIF_PICKER);
    async function Z(e) {
        let { gifSrc: t } = e;
        if (null == t || j) return;
        R(!0);
        let a = (0, x.Q)(t),
            r = await fetch(a),
            c = await r.blob();
        o(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("59732"), n.e("42529")]).then(n.bind(n, 712451));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })(
                                {
                                    imageUri: a,
                                    file: new File([c], "tenor.gif", { type: "image/gif" }),
                                    onCrop: P,
                                    uploadType: b,
                                    showUpsellHeader: v,
                                },
                                t,
                            ),
                        );
                },
                { contextKey: y },
            );
    }
    a.useEffect(() => {
        _.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: I,
            location: { page: E },
        });
    }, [I, E]);
    let w = b === m.pC.AVATAR || b === m.pC.BANNER,
        O = (0, f.M)(!w);
    return (0, i.jsx)(d.Gt, {
        value: I,
        children: (0, i.jsxs)(c.IX, {
            onClose: o,
            transitionState: t,
            children: [
                (0, i.jsx)(c.xBx, { title: h.intl.string(h.t["xsC+//"]) }),
                v &&
                    !O &&
                    (0, i.jsx)("div", {
                        className: A.upsellHeaderContainer,
                        children: (0, i.jsx)(p.Z, {
                            type: b,
                            analyticsPage: E,
                            analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, i.jsxs)("div", {
                    className: A.gifPickerContainer,
                    children: [
                        (0, i.jsx)(u.Z, {
                            className: r()(A.gifPicker, { [A.loadingOverlay]: j }),
                            onSelectGIF: Z,
                            headingColor: "text-secondary",
                            hideFavorites: !0,
                        }),
                        j && (0, i.jsx)(l.$jN, { className: A.spinner }),
                        v &&
                            O &&
                            (0, i.jsx)(g.Z, {
                                uploadType: b,
                                analyticsSource: C,
                                showUpsell: !0,
                                className: A.nitroUpsell,
                            }),
                    ],
                }),
            ],
        }),
    });
}
