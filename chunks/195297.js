n.d(t, { default: () => b }), n(388685);
var i = n(255367),
    a = n(73800),
    o = n(120356),
    l = n.n(o),
    r = n(481060),
    c = n(100527),
    s = n(906732),
    d = n(313201),
    u = n(455708),
    _ = n(222062),
    f = n(530329),
    g = n(626135),
    p = n(488499),
    N = n(58384),
    m = n(981631),
    x = n(486324),
    A = n(388032),
    h = n(922349);
function b(e) {
    let { transitionState: t, onClose: o, onComplete: b, uploadType: P, showUpsellHeader: E, analyticsPage: R } = e,
        [j, Z] = a.useState(!1),
        C = (0, r.vRw)(),
        v = (0, d.Dt)(),
        { analyticsLocations: y, newestAnalyticsLocation: I } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function k(e) {
        let { gifSrc: t } = e;
        if (null == t || j) return;
        Z(!0);
        let a = (0, N.Q)(t),
            l = await fetch(a),
            c = await l.blob();
        o(),
            (0, r.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('59732'), n.e('93157')]).then(n.bind(n, 712451));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })(
                                {
                                    imageUri: a,
                                    file: new File([c], 'tenor.gif', { type: 'image/gif' }),
                                    onCrop: b,
                                    uploadType: P,
                                    showUpsellHeader: E
                                },
                                t
                            )
                        );
                },
                { contextKey: C }
            );
    }
    a.useEffect(() => {
        g.default.track(m.rMx.OPEN_MODAL, {
            type: m.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: y,
            location: { page: R }
        });
    }, [y, R]);
    let S = P === x.pC.AVATAR || P === x.pC.BANNER,
        L = (0, _.M)(!S);
    return (0, i.jsx)(s.Gt, {
        value: y,
        children: (0, i.jsxs)(r.Y0X, {
            'aria-labelledby': v,
            transitionState: t,
            size: r.CgR.SMALL,
            children: [
                E &&
                    !L &&
                    (0, i.jsx)(p.Z, {
                        type: P,
                        analyticsPage: R,
                        analyticsSection: m.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, i.jsxs)(r.xBx, {
                    className: h.modalHeader,
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.vwX, {
                            className: h.titleCase,
                            tag: r.RB0.H1,
                            children: A.intl.string(A.t['xsC+//'])
                        }),
                        (0, i.jsx)(r.olH, {
                            onClick: o,
                            className: h.modalCloseButton
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Z, {
                            contentClassName: l()({ [h.gifPickerContent]: E && L }),
                            className: l()(h.gifPicker, { [h.loadingOverlay]: j }),
                            onSelectGIF: k,
                            hideFavorites: !0
                        }),
                        j && (0, i.jsx)(r.$jN, { className: h.spinner })
                    ]
                }),
                E &&
                    L &&
                    (0, i.jsx)(f.Z, {
                        uploadType: P,
                        analyticsSource: I,
                        showUpsell: !0,
                        className: h.nitroUpsell
                    })
            ]
        })
    });
}
