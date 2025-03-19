n.d(t, { Z: () => F }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(315263),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    f = n(943180),
    _ = n(490248),
    p = n(768865),
    h = n(617136),
    m = n(497505),
    g = n(703656),
    E = n(317257),
    b = n(594174),
    v = n(626135),
    y = n(111361),
    O = n(291175),
    I = n(785717),
    S = n(221292),
    T = n(485341),
    N = n(687158),
    A = n(797321),
    C = n(228168),
    R = n(981631),
    P = n(215023),
    w = n(474936),
    D = n(681642),
    L = n(388032),
    x = n(219041),
    M = n(266850);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
let U = (e) => {
        if (null != e)
            switch (e) {
                case w.JN.PREMIUM_TENURE_1_MONTH:
                    return x.tieredTenureBadgeBronzeGlow;
                case w.JN.PREMIUM_TENURE_3_MONTH:
                    return x.tieredTenureBadgeSilverGlow;
                case w.JN.PREMIUM_TENURE_6_MONTH:
                    return x.tieredTenureBadgeGoldGlow;
                case w.JN.PREMIUM_TENURE_12_MONTH:
                    return x.tieredTenureBadgePlatinumGlow;
                case w.JN.PREMIUM_TENURE_24_MONTH:
                    return x.tieredTenureBadgeDiamondGlow;
                case w.JN.PREMIUM_TENURE_36_MONTH:
                    return x.tieredTenureBadgeEmeraldGlow;
                case w.JN.PREMIUM_TENURE_60_MONTH:
                    return x.tieredTenureBadgeRubyGlow;
                case w.JN.PREMIUM_TENURE_72_MONTH:
                    return x.tieredTenureBadgeFireGlow;
                default:
                    return;
            }
    },
    G = (e) => {
        let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
        return t.id === E.l.ORB_PROFILE_BADGE
            ? (0, r.jsx)(_.r4, { showSubtext: !i && !t.isPreviewMode })
            : void 0 !== n && t.id !== D.a
              ? (0, r.jsx)(_.L7, {
                    profileBadge: t,
                    tenureBadge: n
                })
              : t.description;
    },
    B = (e) => (e.id === E.l.ORB_PROFILE_BADGE ? M : (0, C.Ej)(e.icon));
function F(e) {
    var t;
    let { badges: n, className: o, badgeClassName: _, displayProfile: M, onClose: k, shouldOpenBadgeTooltip: F } = e,
        { analyticsLocations: V } = (0, u.ZP)(c.Z.BADGE),
        { context: Z, trackUserProfileAction: H } = (0, I.KZ)(),
        [W, Y] = i.useState(!1),
        K = b.default.getCurrentUser(),
        z = (0, y.yd)(null == K ? void 0 : K.premiumType, w.p9.TIER_2),
        { isBadgeVersion2: q } = (0, f.D)(),
        Q = (0, N.Of)(null !== (t = null == K ? void 0 : K.id) && void 0 !== t ? t : null),
        X = (0, T.Z)(Q).some((e) => e.id === E.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: a()(x.container, o),
        'aria-label': L.NW.string(L.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            let t = e.id === E.l.ORB_PROFILE_BADGE,
                n = (0, O.fv)(e.id),
                i = q && (null != n || e.id === D.a),
                o = (n) => {
                    if (
                        (H({ action: 'PRESS_BADGE' }),
                        (0, S.NE)(
                            j(
                                {
                                    badge: e.id,
                                    analyticsLocations: V
                                },
                                Z
                            )
                        ),
                        t)
                    ) {
                        (0, d.mK)({
                            openInLayer: !1,
                            tab: P.AW.ORBS,
                            analyticsLocations: V,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                        });
                        return;
                    }
                    if (i) {
                        if (
                            (n.preventDefault(),
                            v.default.track(R.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: z,
                                viewed_user_id: null == M ? void 0 : M.userId
                            }),
                            z)
                        ) {
                            (null == M ? void 0 : M.userId) === (null == K ? void 0 : K.id)
                                ? (0, g.uL)(R.Z5c.NITRO_HOME)
                                : (0, p.k)({
                                      analyticsLocations: V,
                                      displayProfile: M
                                  }),
                                null == k || k();
                            return;
                        }
                        if ((null == M ? void 0 : M.userId) === (null == K ? void 0 : K.id)) {
                            let t = null != e.link ? (0, l.default)(e.link, { analyticsLocations: V }) : null;
                            if (null == t) return;
                            return null == k || k(), t(n);
                        }
                        return (
                            (0, p.k)({
                                analyticsLocations: V,
                                displayProfile: M
                            }),
                            void (null == k || k())
                        );
                    }
                    let r = null != e.link ? (0, l.default)(e.link, { analyticsLocations: V }) : null;
                    if (null != r) return null == k || k(), r(n);
                },
                u = () => {
                    e.id === T.i && v.default.track(R.rMx.QUEST_CONTENT_VIEWED, j({}, (0, h.mH)(m.jn.QUEST_BADGE))),
                        H({ action: 'HOVER_BADGE' }),
                        (0, S.Qf)(
                            j(
                                {
                                    badge: e.id,
                                    analyticsLocations: V
                                },
                                Z
                            )
                        );
                },
                f = U(null == n ? void 0 : n.id),
                b = null != n && W,
                y = G({
                    badge: e,
                    tieredTenureBadge: i && e.id !== D.a ? n : void 0,
                    currentUserOwnsOrbBadge: X
                });
            return (0, r.jsx)(
                s.DY3,
                {
                    text: y,
                    'aria-label': e.description,
                    forceOpen: null != F && F(e.id),
                    delay: C.vB,
                    tooltipClassName: f,
                    onTooltipShow: () => Y(null != n && 1 === n.badgeVersion),
                    onTooltipHide: () => Y(!1),
                    children: (0, r.jsxs)(s.eee, {
                        onClick: o,
                        onMouseEnter: u,
                        href: e.link,
                        children: [
                            (0, r.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: B(e),
                                className: a()(x.badge, _, { [x.orbBadge]: t })
                            }),
                            b &&
                                (0, r.jsxs)('div', {
                                    className: x.starContainer,
                                    children: [(0, r.jsx)(A.Z, { className: x.topLeftStar }), (0, r.jsx)(A.Z, { className: x.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
