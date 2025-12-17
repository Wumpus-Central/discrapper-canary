n.d(t, { default: () => A }), n(388685);
var i = n(54381),
    a = n(473749),
    o = n(120356),
    r = n.n(o),
    l = n(159691),
    c = n(481060),
    s = n(100527),
    d = n(906732),
    u = n(455708),
    f = n(222062),
    b = n(530329),
    g = n(626135),
    p = n(488499),
    x = n(58384),
    N = n(981631),
    m = n(486324),
    _ = n(388032),
    h = n(749013);
function A(e) {
    let { transitionState: t, onClose: o, onComplete: A, uploadType: P, showUpsellHeader: v, analyticsPage: E } = e,
        [j, R] = a.useState(!1),
        y = (0, c.vRw)(),
        { analyticsLocations: I, newestAnalyticsLocation: C } = (0, d.ZP)(s.Z.GIF_PICKER);
    async function Z(e) {
        let { gifSrc: t } = e;
        if (null == t || j) return;
        R(!0);
        let a = (0, x.Q)(t),
            r = await fetch(a),
            l = await r.blob();
        o(),
            (0, c.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("59732"), n.e("37988")]).then(n.bind(n, 712451));
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
                                    onCrop: A,
                                    uploadType: P,
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
        g.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: I,
            location: { page: E },
        });
    }, [I, E]);
    let w = P === m.pC.AVATAR || P === m.pC.BANNER,
        O = (0, f.M)(!w);
    return (0, i.jsx)(d.Gt, {
        value: I,
        children: (0, i.jsxs)(l.IX, {
            onClose: o,
            transitionState: t,
            children: [
                (0, i.jsx)(l.xBx, { title: _.intl.string(_.t["xsC+/y"]) }),
                v &&
                    !O &&
                    (0, i.jsx)("div", {
                        className: h.upsellHeaderContainer,
                        children: (0, i.jsx)(p.Z, {
                            type: P,
                            analyticsPage: E,
                            analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, i.jsxs)("div", {
                    className: h.gifPickerContainer,
                    children: [
                        (0, i.jsx)(u.Z, {
                            className: r()(h.gifPicker, { [h.loadingOverlay]: j }),
                            onSelectGIF: Z,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        j && (0, i.jsx)(c.$jN, { className: h.spinner }),
                        v &&
                            O &&
                            (0, i.jsx)(b.Z, {
                                uploadType: P,
                                analyticsSource: C,
                                showUpsell: !0,
                                className: h.nitroUpsell,
                            }),
                    ],
                }),
            ],
        }),
    });
}
