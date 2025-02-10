n.d(i, { default: () => h }), n(47120);
var o = n(200651),
    t = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(481060),
    c = n(100527),
    s = n(906732),
    d = n(313201),
    u = n(455708),
    _ = n(222062),
    g = n(530329),
    N = n(626135),
    T = n(488499),
    f = n(58384),
    m = n(981631),
    p = n(486324),
    x = n(388032),
    E = n(170089);
function h(e) {
    let { transitionState: i, onClose: a, onComplete: h, uploadType: I, showUpsellHeader: b, analyticsPage: B } = e,
        [C, R] = t.useState(!1),
        A = (0, r.vRw)(),
        j = (0, d.Dt)(),
        { analyticsLocations: P } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function k(e) {
        let { gifSrc: i } = e;
        if (null == i || C) return;
        R(!0);
        let t = (0, f.Q)(i),
            l = await fetch(t),
            c = await l.blob();
        a(),
            (0, r.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('59732'), n.e('25005')]).then(n.bind(n, 73620));
                    return (i) =>
                        (0, o.jsx)(e, {
                            imgURI: t,
                            file: new File([c], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: h,
                            uploadType: I,
                            showUpsellHeader: b,
                            ...i
                        });
                },
                { contextKey: A }
            );
    }
    t.useEffect(() => {
        N.default.track(m.rMx.OPEN_MODAL, {
            type: m.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: B }
        });
    }, [B]);
    let Z = I === p.pC.AVATAR || I === p.pC.BANNER,
        v = (0, _.M)(!Z);
    return (0, o.jsx)(s.Gt, {
        value: P,
        children: (0, o.jsxs)(r.Y0X, {
            'aria-labelledby': j,
            transitionState: i,
            size: r.CgR.SMALL,
            children: [
                b &&
                    !v &&
                    (0, o.jsx)(T.Z, {
                        type: I,
                        analyticsPage: B,
                        analyticsSection: m.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, o.jsxs)(r.xBx, {
                    className: E.modalHeader,
                    separator: !1,
                    children: [
                        (0, o.jsx)(r.vwX, {
                            className: E.titleCase,
                            tag: r.RB0.H1,
                            children: x.intl.string(x.t['xsC+//'])
                        }),
                        (0, o.jsx)(r.olH, {
                            onClick: a,
                            className: E.modalCloseButton
                        })
                    ]
                }),
                (0, o.jsxs)('div', {
                    children: [
                        (0, o.jsx)(u.Z, {
                            contentClassName: l()({ [E.gifPickerContent]: b && v }),
                            className: l()(E.gifPicker, { [E.loadingOverlay]: C }),
                            onSelectGIF: k,
                            hideFavorites: !0
                        }),
                        C && (0, o.jsx)(r.$jN, { className: E.spinner })
                    ]
                }),
                b &&
                    v &&
                    (0, o.jsx)(g.Z, {
                        uploadType: I,
                        showUpsell: !0,
                        className: E.nitroUpsell
                    })
            ]
        })
    });
}
