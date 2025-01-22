n.r(i),
    n.d(i, {
        default: function () {
            return I;
        }
    }),
    n(47120);
var t = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    c = n(100527),
    s = n(906732),
    d = n(313201),
    u = n(455708),
    g = n(222062),
    f = n(530329),
    _ = n(626135),
    N = n(488499),
    T = n(58384),
    p = n(981631),
    m = n(486324),
    E = n(388032),
    h = n(415617);
function I(e) {
    let { transitionState: i, onClose: l, onComplete: I, uploadType: b, showUpsellHeader: B, analyticsPage: x } = e,
        [C, R] = o.useState(!1),
        A = (0, a.useModalContext)(),
        j = (0, d.Dt)(),
        { analyticsLocations: P } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function Z(e) {
        let { gifSrc: i } = e;
        if (null == i || C) return;
        R(!0);
        let o = (0, T.Q)(i),
            r = await fetch(o),
            c = await r.blob();
        l(),
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('48017'), n.e('27371')]).then(n.bind(n, 850085));
                    return (i) =>
                        (0, t.jsx)(e, {
                            imgURI: o,
                            file: new File([c], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: I,
                            uploadType: b,
                            showUpsellHeader: B,
                            ...i
                        });
                },
                { contextKey: A }
            );
    }
    o.useEffect(() => {
        _.default.track(p.rMx.OPEN_MODAL, {
            type: p.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: x }
        });
    }, [x]);
    let k = b === m.pC.AVATAR || b === m.pC.BANNER,
        v = (0, g.M)(!k);
    return (0, t.jsx)(s.Gt, {
        value: P,
        children: (0, t.jsxs)(a.ModalRoot, {
            'aria-labelledby': j,
            transitionState: i,
            size: a.ModalSize.SMALL,
            children: [
                B &&
                    !v &&
                    (0, t.jsx)(N.Z, {
                        type: b,
                        analyticsPage: x,
                        analyticsSection: p.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, t.jsxs)(a.ModalHeader, {
                    className: h.modalHeader,
                    separator: !1,
                    children: [
                        (0, t.jsx)(a.FormTitle, {
                            className: h.titleCase,
                            tag: a.FormTitleTags.H1,
                            children: E.intl.string(E.t['xsC+//'])
                        }),
                        (0, t.jsx)(a.ModalCloseButton, {
                            onClick: l,
                            className: h.modalCloseButton
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    children: [
                        (0, t.jsx)(u.Z, {
                            contentClassName: r()({ [h.gifPickerContent]: B && v }),
                            className: r()(h.gifPicker, { [h.loadingOverlay]: C }),
                            onSelectGIF: Z,
                            hideFavorites: !0
                        }),
                        C && (0, t.jsx)(a.Spinner, { className: h.spinner })
                    ]
                }),
                B &&
                    v &&
                    (0, t.jsx)(f.Z, {
                        uploadType: b,
                        showUpsell: !0,
                        className: h.nitroUpsell
                    })
            ]
        })
    });
}
