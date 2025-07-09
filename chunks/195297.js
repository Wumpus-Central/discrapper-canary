(n.d(t, { default: () => P }), n(388685));
var i = n(255367),
    a = n(73800),
    o = n(120356),
    r = n.n(o),
    l = n(481060),
    c = n(100527),
    s = n(906732),
    d = n(313201),
    u = n(455708),
    f = n(222062),
    g = n(530329),
    p = n(626135),
    _ = n(488499),
    m = n(58384),
    N = n(981631),
    x = n(486324),
    h = n(388032),
    A = n(922349);
function P(e) {
    let { transitionState: t, onClose: o, onComplete: P, uploadType: b, showUpsellHeader: E, analyticsPage: R } = e,
        [j, v] = a.useState(!1),
        y = (0, l.vRw)(),
        C = (0, d.Dt)(),
        { analyticsLocations: I, newestAnalyticsLocation: Z } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function L(e) {
        let { gifSrc: t } = e;
        if (null == t || j) return;
        v(!0);
        let a = (0, m.Q)(t),
            r = await fetch(a),
            c = await r.blob();
        (o(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('59732'), n.e('93157')]).then(n.bind(n, 712451));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            ((i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i));
                                        }));
                                }
                                return e;
                            })(
                                {
                                    imageUri: a,
                                    file: new File([c], 'tenor.gif', { type: 'image/gif' }),
                                    onCrop: P,
                                    uploadType: b,
                                    showUpsellHeader: E
                                },
                                t
                            )
                        );
                },
                { contextKey: y }
            ));
    }
    a.useEffect(() => {
        p.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: I,
            location: { page: R }
        });
    }, [I, R]);
    let B = b === x.pC.AVATAR || b === x.pC.BANNER,
        k = (0, f.M)(!B);
    return (0, i.jsx)(s.Gt, {
        value: I,
        children: (0, i.jsxs)(l.Y0X, {
            'aria-labelledby': C,
            transitionState: t,
            size: l.CgR.SMALL,
            parentComponent: 'GIFPickerCroppingModal',
            children: [
                E &&
                    !k &&
                    (0, i.jsx)(_.Z, {
                        type: b,
                        analyticsPage: R,
                        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, i.jsxs)(l.xBx, {
                    className: A.modalHeader,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: A.titleCase,
                            tag: l.RB0.H1,
                            children: h.intl.string(h.t['xsC+//'])
                        }),
                        (0, i.jsx)(l.olH, {
                            onClick: o,
                            className: A.modalCloseButton
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Z, {
                            contentClassName: r()({ [A.gifPickerContent]: E && k }),
                            className: r()(A.gifPicker, { [A.loadingOverlay]: j }),
                            onSelectGIF: L,
                            hideFavorites: !0
                        }),
                        j && (0, i.jsx)(l.$jN, { className: A.spinner })
                    ]
                }),
                E &&
                    k &&
                    (0, i.jsx)(g.Z, {
                        uploadType: b,
                        analyticsSource: Z,
                        showUpsell: !0,
                        className: A.nitroUpsell
                    })
            ]
        })
    });
}
