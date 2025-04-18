n.d(t, { default: () => b }), n(388685);
var i = n(200651),
    a = n(192379),
    o = n(120356),
    r = n.n(o),
    l = n(481060),
    c = n(100527),
    s = n(906732),
    d = n(313201),
    u = n(455708),
    f = n(222062),
    _ = n(530329),
    g = n(626135),
    N = n(488499),
    p = n(58384),
    m = n(981631),
    x = n(486324),
    A = n(388032),
    h = n(496560);
function b(e) {
    let { transitionState: t, onClose: o, onComplete: b, uploadType: P, showUpsellHeader: E, analyticsPage: R } = e,
        [j, Z] = a.useState(!1),
        C = (0, l.vRw)(),
        v = (0, d.Dt)(),
        { analyticsLocations: y } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function I(e) {
        let { gifSrc: t } = e;
        if (null == t || j) return;
        Z(!0);
        let a = (0, p.Q)(t),
            r = await fetch(a),
            c = await r.blob();
        o(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('59732'), n.e('67318')]).then(n.bind(n, 712451));
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
            location: { page: R }
        });
    }, [R]);
    let k = P === x.pC.AVATAR || P === x.pC.BANNER,
        L = (0, f.M)(!k);
    return (0, i.jsx)(s.Gt, {
        value: y,
        children: (0, i.jsxs)(l.Y0X, {
            'aria-labelledby': v,
            transitionState: t,
            size: l.CgR.SMALL,
            children: [
                E &&
                    !L &&
                    (0, i.jsx)(N.Z, {
                        type: P,
                        analyticsPage: R,
                        analyticsSection: m.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, i.jsxs)(l.xBx, {
                    className: h.modalHeader,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: h.titleCase,
                            tag: l.RB0.H1,
                            children: A.NW.string(A.t['xsC+//'])
                        }),
                        (0, i.jsx)(l.olH, {
                            onClick: o,
                            className: h.modalCloseButton
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Z, {
                            contentClassName: r()({ [h.gifPickerContent]: E && L }),
                            className: r()(h.gifPicker, { [h.loadingOverlay]: j }),
                            onSelectGIF: I,
                            hideFavorites: !0
                        }),
                        j && (0, i.jsx)(l.$jN, { className: h.spinner })
                    ]
                }),
                E &&
                    L &&
                    (0, i.jsx)(_.Z, {
                        uploadType: P,
                        showUpsell: !0,
                        className: h.nitroUpsell
                    })
            ]
        })
    });
}
