n.d(t, { default: () => P }), n(388685);
var i = n(54381),
    a = n(473749),
    r = n(120356),
    o = n.n(r),
    l = n(159691),
    c = n(481060),
    s = n(100527),
    d = n(906732),
    u = n(455708),
    f = n(222062),
    _ = n(530329),
    g = n(626135),
    p = n(488499),
    x = n(58384),
    m = n(981631),
    N = n(486324),
    h = n(388032),
    A = n(382775);
function P(e) {
    let { transitionState: t, onClose: r, onComplete: P, uploadType: b, showUpsellHeader: v, analyticsPage: E } = e,
        [j, R] = a.useState(!1),
        y = (0, c.vRw)(),
        { analyticsLocations: I, newestAnalyticsLocation: C } = (0, d.ZP)(s.Z.GIF_PICKER);
    async function Z(e) {
        let { gifSrc: t } = e;
        if (null == t || j) return;
        R(!0);
        let a = (0, x.Q)(t),
            o = await fetch(a),
            l = await o.blob();
        r(),
            (0, c.ZDy)(
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
                                    file: new File([l], "tenor.gif", { type: "image/gif" }),
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
        g.default.track(m.rMx.OPEN_MODAL, {
            type: m.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: I,
            location: { page: E },
        });
    }, [I, E]);
    let w = b === N.pC.AVATAR || b === N.pC.BANNER,
        O = (0, f.M)(!w);
    return (0, i.jsx)(d.Gt, {
        value: I,
        children: (0, i.jsxs)(l.IX, {
            onClose: r,
            transitionState: t,
            children: [
                (0, i.jsx)(l.xBx, { title: h.intl.string(h.t["xsC+/y"]) }),
                v &&
                    !O &&
                    (0, i.jsx)("div", {
                        className: A.upsellHeaderContainer,
                        children: (0, i.jsx)(p.Z, {
                            type: b,
                            analyticsPage: E,
                            analyticsSection: m.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, i.jsxs)("div", {
                    className: A.gifPickerContainer,
                    children: [
                        (0, i.jsx)(u.Z, {
                            className: o()(A.gifPicker, { [A.loadingOverlay]: j }),
                            onSelectGIF: Z,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        j && (0, i.jsx)(c.$jN, { className: A.spinner }),
                        v &&
                            O &&
                            (0, i.jsx)(_.Z, {
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
