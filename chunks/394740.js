r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(780384),
    c = r(481060),
    d = r(2052),
    f = r(410030),
    p = r(100527),
    h = r(906732),
    _ = r(98278),
    m = r(197115),
    g = r(626135),
    E = r(74538),
    v = r(706667),
    y = r(409673),
    b = r(981631),
    I = r(474936),
    T = r(388032),
    S = r(944634),
    A = r(940675);
function C(e) {
    var n;
    let { onClose: i, closePopout: s, sound: C, channel: N } = e,
        R = (0, f.ZP)(),
        [O, D] = o.useState(!1),
        { location: x } = (0, d.O)(),
        L = o.useMemo(
            () => ({
                ...x,
                section: b.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [x]
        ),
        { analyticsLocations: w } = (0, h.ZP)(p.Z.PREMIUM_UPSELL),
        { previewSound: P } = (0, v.Z)(C, null !== (n = null == N ? void 0 : N.id) && void 0 !== n ? n : null),
        M = (0, y.K_)({
            sound: C,
            previewSound: P,
            tooltipPosition: 'left'
        }),
        k = (0, u.ap)(R) ? r(537381) : r(341048);
    o.useEffect(() => {
        g.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
            type: I.cd.SOUND_PICKER_SOUND_CLICKED,
            is_external: !0,
            location: {
                ...L,
                object: b.qAy.SOUNDBOARD_SOUND
            },
            location_stack: w,
            sku_id: E.ZP.getSkuIdForPremiumType(I.p9.TIER_2)
        });
    }, [w, L]);
    let U = o.useCallback(() => {
        g.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, { location_section: b.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL }), (0, _.z)(), s();
    }, [s]);
    return (0, a.jsxs)('div', {
        className: l()(A.premiumPromo, S.container),
        children: [
            (0, a.jsx)(c.Clickable, {
                className: A.premiumPromoClose,
                onClick: i,
                children: T.intl.string(T.t.cpT0Cg)
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
                children: T.intl.string(T.t['/a5qY2'])
            }),
            (0, a.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: A.premiumPromoDescription,
                children: T.intl.format(T.t.lcSxhI, { onClick: U })
            }),
            (0, a.jsxs)('div', {
                className: S.buttonContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: S.previewButtonContainer,
                        children: M
                    }),
                    (0, a.jsx)(m.Z, {
                        subscriptionTier: I.Si.TIER_2,
                        submitting: O,
                        premiumModalAnalyticsLocation: {
                            section: b.jXE.SOUNDBOARD_SOUND_PICKER,
                            object: b.qAy.BUTTON_CTA
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
