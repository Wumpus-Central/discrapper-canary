n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(2052),
    c = n(410030),
    d = n(100527),
    f = n(906732),
    _ = n(98278),
    p = n(197115),
    h = n(626135),
    m = n(74538),
    g = n(830253),
    E = n(409673),
    v = n(981631),
    y = n(474936),
    I = n(388032),
    T = n(27191),
    b = n(52916);
function S(e) {
    var t;
    let { onClose: a, closePopout: S, sound: A, channel: N } = e,
        C = (0, c.ZP)(),
        [R, O] = r.useState(!1),
        { location: D } = (0, u.O)(),
        L = r.useMemo(
            () => ({
                ...D,
                section: v.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [D]
        ),
        { analyticsLocations: x } = (0, f.ZP)(d.Z.PREMIUM_UPSELL),
        { previewSound: P } = (0, g.Z)(A, null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : null),
        w = (0, E.K_)({
            sound: A,
            previewSound: P,
            tooltipPosition: 'left'
        }),
        M = (0, o.ap)(C) ? n(537381) : n(341048);
    r.useEffect(() => {
        h.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
            type: y.cd.SOUND_PICKER_SOUND_CLICKED,
            is_external: !0,
            location: {
                ...L,
                object: v.qAy.SOUNDBOARD_SOUND
            },
            location_stack: x,
            sku_id: m.ZP.getSkuIdForPremiumType(y.p9.TIER_2)
        });
    }, [x, L]);
    let k = r.useCallback(() => {
        h.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, { location_section: v.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL }), (0, _.z)(), S();
    }, [S]);
    return (0, i.jsxs)('div', {
        className: s()(b.premiumPromo, T.container),
        children: [
            (0, i.jsx)(l.P3F, {
                className: b.premiumPromoClose,
                onClick: a,
                children: I.intl.string(I.t.cpT0Cg)
            }),
            (0, i.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                className: s()(b.premiumPromoImage, b.premiumPromoImageSmaller, T.image),
                src: M
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-lg/normal',
                color: 'header-primary',
                className: b.premiumPromoTitle,
                children: I.intl.string(I.t['/a5qY2'])
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: b.premiumPromoDescription,
                children: I.intl.format(I.t.lcSxhI, { onClick: k })
            }),
            (0, i.jsxs)('div', {
                className: T.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: T.previewButtonContainer,
                        children: w
                    }),
                    (0, i.jsx)(p.Z, {
                        subscriptionTier: y.Si.TIER_2,
                        submitting: R,
                        premiumModalAnalyticsLocation: {
                            section: v.jXE.SOUNDBOARD_SOUND_PICKER,
                            object: v.qAy.BUTTON_CTA
                        },
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.GREEN,
                        onClick: () => {
                            O(!0);
                        },
                        onSubscribeModalClose: (e) => {
                            O(!1), e && a();
                        }
                    })
                ]
            })
        ]
    });
}
