i.d(n, { default: () => E }), i(47120);
var t = i(200651),
    o = i(192379),
    r = i(120356),
    a = i.n(r),
    l = i(481060),
    c = i(100527),
    s = i(906732),
    d = i(313201),
    u = i(455708),
    g = i(222062),
    _ = i(530329),
    f = i(626135),
    b = i(488499),
    p = i(58384),
    N = i(981631),
    m = i(486324),
    T = i(388032),
    h = i(130504);
function E(e) {
    let { transitionState: n, onClose: r, onComplete: E, uploadType: x, showUpsellHeader: j, analyticsPage: I } = e,
        [P, O] = o.useState(!1),
        B = (0, l.vRw)(),
        C = (0, d.Dt)(),
        { analyticsLocations: y } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function R(e) {
        let { gifSrc: n } = e;
        if (null == n || P) return;
        O(!0);
        let o = (0, p.Q)(n),
            a = await fetch(o),
            c = await a.blob();
        r(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([i.e('59732'), i.e('25005'), i.e('71253')]).then(i.bind(i, 73620));
                    return (n) =>
                        (0, t.jsx)(
                            e,
                            (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var i = null != arguments[n] ? arguments[n] : {},
                                        t = Object.keys(i);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (t = t.concat(
                                            Object.getOwnPropertySymbols(i).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                            })
                                        )),
                                        t.forEach(function (n) {
                                            var t;
                                            (t = i[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: t,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[n] = t);
                                        });
                                }
                                return e;
                            })(
                                {
                                    imgURI: o,
                                    file: new File([c], 'tenor.gif', { type: 'image/gif' }),
                                    onCrop: E,
                                    uploadType: x,
                                    showUpsellHeader: j
                                },
                                n
                            )
                        );
                },
                { contextKey: B }
            );
    }
    o.useEffect(() => {
        f.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: I }
        });
    }, [I]);
    let v = x === m.pC.AVATAR || x === m.pC.BANNER,
        A = (0, g.M)(!v);
    return (0, t.jsx)(s.Gt, {
        value: y,
        children: (0, t.jsxs)(l.Y0X, {
            'aria-labelledby': C,
            transitionState: n,
            size: l.CgR.SMALL,
            children: [
                j &&
                    !A &&
                    (0, t.jsx)(b.Z, {
                        type: x,
                        analyticsPage: I,
                        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, t.jsxs)(l.xBx, {
                    className: h.modalHeader,
                    separator: !1,
                    children: [
                        (0, t.jsx)(l.vwX, {
                            className: h.titleCase,
                            tag: l.RB0.H1,
                            children: T.NW.string(T.t['xsC+//'])
                        }),
                        (0, t.jsx)(l.olH, {
                            onClick: r,
                            className: h.modalCloseButton
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    children: [
                        (0, t.jsx)(u.Z, {
                            contentClassName: a()({ [h.gifPickerContent]: j && A }),
                            className: a()(h.gifPicker, { [h.loadingOverlay]: P }),
                            onSelectGIF: R,
                            hideFavorites: !0
                        }),
                        P && (0, t.jsx)(l.$jN, { className: h.spinner })
                    ]
                }),
                j &&
                    A &&
                    (0, t.jsx)(_.Z, {
                        uploadType: x,
                        showUpsell: !0,
                        className: h.nitroUpsell
                    })
            ]
        })
    });
}
