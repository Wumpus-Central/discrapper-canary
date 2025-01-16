n.r(i),
    n.d(i, {
        default: function () {
            return E;
        }
    }),
    n(47120);
var t = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    c = n(100527),
    s = n(906732),
    d = n(313201),
    u = n(455708),
    g = n(222062),
    f = n(530329),
    p = n(626135),
    _ = n(488499),
    h = n(58384),
    N = n(981631),
    T = n(486324),
    m = n(388032),
    x = n(415617);
function E(e) {
    let { transitionState: i, onClose: r, onComplete: E, uploadType: b, showUpsellHeader: I, analyticsPage: B } = e,
        [C, j] = o.useState(!1),
        R = (0, a.useModalContext)(),
        A = (0, d.Dt)(),
        { analyticsLocations: P } = (0, s.ZP)(c.Z.GIF_PICKER);
    async function Z(e) {
        let { gifSrc: i } = e;
        if (null == i || C) return;
        j(!0);
        let o = (0, h.Q)(i),
            l = await fetch(o),
            c = await l.blob();
        r(),
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('48017'), n.e('27371')]).then(n.bind(n, 850085));
                    return (i) =>
                        (0, t.jsx)(e, {
                            imgURI: o,
                            file: new File([c], 'tenor.gif', { type: 'image/gif' }),
                            onCrop: E,
                            uploadType: b,
                            showUpsellHeader: I,
                            ...i
                        });
                },
                { contextKey: R }
            );
    }
    o.useEffect(() => {
        p.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: B }
        });
    }, [B]);
    let k = b === T.pC.AVATAR || b === T.pC.BANNER,
        v = (0, g.M)(!k);
    return (0, t.jsx)(s.Gt, {
        value: P,
        children: (0, t.jsxs)(a.ModalRoot, {
            'aria-labelledby': A,
            transitionState: i,
            size: a.ModalSize.SMALL,
            children: [
                I &&
                    !v &&
                    (0, t.jsx)(_.Z, {
                        type: b,
                        analyticsPage: B,
                        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        isGIF: !0
                    }),
                (0, t.jsxs)(a.ModalHeader, {
                    className: x.modalHeader,
                    separator: !1,
                    children: [
                        (0, t.jsx)(a.FormTitle, {
                            className: x.titleCase,
                            tag: a.FormTitleTags.H1,
                            children: m.intl.string(m.t['xsC+//'])
                        }),
                        (0, t.jsx)(a.ModalCloseButton, {
                            onClick: r,
                            className: x.modalCloseButton
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    children: [
                        (0, t.jsx)(u.Z, {
                            contentClassName: l()({ [x.gifPickerContent]: I && v }),
                            className: l()(x.gifPicker, { [x.loadingOverlay]: C }),
                            onSelectGIF: Z,
                            hideFavorites: !0
                        }),
                        C && (0, t.jsx)(a.Spinner, { className: x.spinner })
                    ]
                }),
                I &&
                    v &&
                    (0, t.jsx)(f.Z, {
                        uploadType: b,
                        showUpsell: !0,
                        className: x.nitroUpsell
                    })
            ]
        })
    });
}
