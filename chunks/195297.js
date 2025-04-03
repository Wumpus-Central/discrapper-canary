n.d(i, { default: () => E }), n(47120);
var t = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    c = n(100527),
    s = n(906732),
    d = n(313201),
    u = n(455708),
    g = n(222062),
    f = n(530329),
    _ = n(626135),
    b = n(488499),
    p = n(58384),
    N = n(981631),
    m = n(486324),
    h = n(388032),
    T = n(922349);
function E(e) {
    let { transitionState: i, onClose: r, onComplete: E, uploadType: x, showUpsellHeader: j, analyticsPage: I } = e,
        [P, C] = o.useState(!1),
        v = (0, l.vRw)(),
        O = (0, d.Dt)(),
        { analyticsLocations: R } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function B(e) {
        let { gifSrc: i } = e;
        if (null == i || P) return;
        C(!0);
        let o = (0, p.Q)(i),
            a = await fetch(o),
            c = await a.blob();
        r(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('59732'), n.e('25005'), n.e('11181')]).then(n.bind(n, 73620));
                    return (i) =>
                        (0, t.jsx)(
                            e,
                            (function (e) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var n = null != arguments[i] ? arguments[i] : {},
                                        t = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (t = t.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        t.forEach(function (i) {
                                            var t;
                                            (t = n[i]),
                                                i in e
                                                    ? Object.defineProperty(e, i, {
                                                          value: t,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[i] = t);
                                        });
                                }
                                return e;
                            })(
                                {
                                    imageUri: o,
                                    file: new File([c], 'tenor.gif', { type: 'image/gif' }),
                                    onCrop: E,
                                    uploadType: x,
                                    showUpsellHeader: j
                                },
                                i
                            )
                        );
                },
                { contextKey: v }
            );
    }
    o.useEffect(() => {
        _.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: I }
        });
    }, [I]);
    let y = x === m.pC.AVATAR || x === m.pC.BANNER,
        k = (0, g.M)(!y);
    return (0, t.jsx)(s.Gt, {
        value: R,
        children: (0, t.jsxs)(l.Y0X, {
            'aria-labelledby': O,
            transitionState: i,
            size: l.CgR.SMALL,
            children: [
                j &&
                    !k &&
                    (0, t.jsx)(b.Z, {
                        type: x,
                        analyticsPage: I,
                        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, t.jsxs)(l.xBx, {
                    className: T.modalHeader,
                    separator: !1,
                    children: [
                        (0, t.jsx)(l.vwX, {
                            className: T.titleCase,
                            tag: l.RB0.H1,
                            children: h.NW.string(h.t['xsC+//'])
                        }),
                        (0, t.jsx)(l.olH, {
                            onClick: r,
                            className: T.modalCloseButton
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    children: [
                        (0, t.jsx)(u.Z, {
                            contentClassName: a()({ [T.gifPickerContent]: j && k }),
                            className: a()(T.gifPicker, { [T.loadingOverlay]: P }),
                            onSelectGIF: B,
                            hideFavorites: !0
                        }),
                        P && (0, t.jsx)(l.$jN, { className: T.spinner })
                    ]
                }),
                j &&
                    k &&
                    (0, t.jsx)(f.Z, {
                        uploadType: x,
                        showUpsell: !0,
                        className: T.nitroUpsell
                    })
            ]
        })
    });
}
