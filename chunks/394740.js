r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(780384),
    c = r(481060),
    d = r(2052),
    f = r(410030),
    _ = r(100527),
    h = r(906732),
    p = r(98278),
    m = r(197115),
    g = r(626135),
    E = r(74538),
    v = r(706667),
    I = r(409673),
    T = r(981631),
    b = r(474936),
    y = r(388032),
    S = r(944634),
    A = r(940675);
function N(e) {
    var n;
    let { onClose: i, closePopout: o, sound: N, channel: C } = e,
        R = (0, f.ZP)(),
        [O, D] = s.useState(!1),
        { location: L } = (0, d.O)(),
        x = s.useMemo(
            () => ({
                ...L,
                section: T.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [L]
        ),
        { analyticsLocations: w } = (0, h.ZP)(_.Z.PREMIUM_UPSELL),
        { previewSound: P } = (0, v.Z)(N, null !== (n = null == C ? void 0 : C.id) && void 0 !== n ? n : null),
        M = (0, I.K_)({
            sound: N,
            previewSound: P,
            tooltipPosition: 'left'
        }),
        k = (0, u.ap)(R) ? r(537381) : r(341048);
    s.useEffect(() => {
        g.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
            type: b.cd.SOUND_PICKER_SOUND_CLICKED,
            is_external: !0,
            location: {
                ...x,
                object: T.qAy.SOUNDBOARD_SOUND
            },
            location_stack: w,
            sku_id: E.ZP.getSkuIdForPremiumType(b.p9.TIER_2)
        });
    }, [w, x]);
    let U = s.useCallback(() => {
        g.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, { location_section: T.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL }), (0, p.z)(), o();
    }, [o]);
    return (0, a.jsxs)('div', {
        className: l()(A.premiumPromo, S.container),
        children: [
            (0, a.jsx)(c.Clickable, {
                className: A.premiumPromoClose,
                onClick: i,
                children: y.intl.string(y.t.cpT0Cg)
            }),
            (0, a.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                className: l()(A.premiumPromoImage, A.premiumPromoImageSmaller, S.image),
                src: k
            }),
            (0, a.jsx)(c.Heading, {
                variant: 'heading-lg/normal',
                color: 'header-primary',
                className: A.premiumPromoTitle,
                children: y.intl.string(y.t['/a5qY2'])
            }),
            (0, a.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: A.premiumPromoDescription,
                children: y.intl.format(y.t.lcSxhI, { onClick: U })
            }),
            (0, a.jsxs)('div', {
                className: S.buttonContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: S.previewButtonContainer,
                        children: M
                    }),
                    (0, a.jsx)(m.Z, {
                        subscriptionTier: b.Si.TIER_2,
                        submitting: O,
                        premiumModalAnalyticsLocation: {
                            section: T.jXE.SOUNDBOARD_SOUND_PICKER,
                            object: T.qAy.BUTTON_CTA
                        },
                        size: c.Button.Sizes.SMALL,
                        color: c.Button.Colors.GREEN,
                        onClick: () => {
                            D(!0);
                        },
                        onSubscribeModalClose: (e) => {
                            D(!1), e && i();
                        }
                    })
                ]
            })
        ]
    });
}
