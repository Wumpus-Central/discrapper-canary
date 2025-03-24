n.d(t, { Z: () => j }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(315263),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(490248),
    f = n(768865),
    _ = n(617136),
    p = n(497505),
    h = n(703656),
    m = n(317257),
    g = n(594174),
    E = n(626135),
    b = n(111361),
    v = n(291175),
    y = n(785717),
    O = n(221292),
    I = n(485341),
    S = n(687158),
    T = n(228168),
    N = n(981631),
    A = n(215023),
    C = n(474936),
    R = n(681642),
    P = n(388032),
    w = n(219041),
    D = n(266850);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
let M = (e) => {
        let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
        return t.id === m.l.ORB_PROFILE_BADGE
            ? (0, r.jsx)(d.r4, { showSubtext: !i && !t.isPreviewMode })
            : void 0 !== n && t.id !== R.a
              ? (0, r.jsx)(d.L7, {
                    profileBadge: t,
                    tenureBadge: n
                })
              : t.description;
    },
    k = (e) => (e.id === m.l.ORB_PROFILE_BADGE ? D : (0, T.Ej)(e.icon));
function j(e) {
    var t;
    let { badges: n, className: i, badgeClassName: d, displayProfile: D, onClose: L, shouldOpenBadgeTooltip: j } = e,
        { analyticsLocations: U } = (0, c.ZP)(l.Z.BADGE),
        { context: G, trackUserProfileAction: B } = (0, y.KZ)(),
        F = g.default.getCurrentUser(),
        V = (0, b.yd)(null == F ? void 0 : F.premiumType, C.p9.TIER_2),
        Z = (0, S.Of)(null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : null),
        H = (0, I.Z)(Z).some((e) => e.id === m.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: o()(w.container, i),
        'aria-label': P.NW.string(P.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            let t = e.id === m.l.ORB_PROFILE_BADGE,
                n = (0, v.fv)(e.id),
                i = null != n || e.id === R.a,
                c = (n) => {
                    if (
                        (B({ action: 'PRESS_BADGE' }),
                        (0, O.NE)(
                            x(
                                {
                                    badge: e.id,
                                    analyticsLocations: U
                                },
                                G
                            )
                        ),
                        t)
                    ) {
                        (0, u.mK)({
                            openInLayer: !1,
                            tab: A.AW.ORBS,
                            analyticsLocations: U,
                            analyticsSource: l.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                        });
                        return;
                    }
                    if (i) {
                        if (
                            (n.preventDefault(),
                            E.default.track(N.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: V,
                                viewed_user_id: null == D ? void 0 : D.userId
                            }),
                            V)
                        ) {
                            (null == D ? void 0 : D.userId) === (null == F ? void 0 : F.id)
                                ? (0, h.uL)(N.Z5c.NITRO_HOME)
                                : (0, f.k)({
                                      analyticsLocations: U,
                                      displayProfile: D
                                  }),
                                null == L || L();
                            return;
                        }
                        if ((null == D ? void 0 : D.userId) === (null == F ? void 0 : F.id)) {
                            let t = null != e.link ? (0, s.default)(e.link, { analyticsLocations: U }) : null;
                            if (null == t) return;
                            return null == L || L(), t(n);
                        }
                        return (
                            (0, f.k)({
                                analyticsLocations: U,
                                displayProfile: D
                            }),
                            void (null == L || L())
                        );
                    }
                    let r = null != e.link ? (0, s.default)(e.link, { analyticsLocations: U }) : null;
                    if (null != r) return null == L || L(), r(n);
                },
                g = () => {
                    e.id === I.i && E.default.track(N.rMx.QUEST_CONTENT_VIEWED, x({}, (0, _.mH)(p.jn.QUEST_BADGE))),
                        B({ action: 'HOVER_BADGE' }),
                        (0, O.Qf)(
                            x(
                                {
                                    badge: e.id,
                                    analyticsLocations: U
                                },
                                G
                            )
                        );
                },
                b = M({
                    badge: e,
                    tieredTenureBadge: i && e.id !== R.a ? n : void 0,
                    currentUserOwnsOrbBadge: H
                });
            return (0, r.jsx)(
                a.DY3,
                {
                    text: b,
                    'aria-label': e.description,
                    forceOpen: null != j && j(e.id),
                    delay: T.vB,
                    children: (0, r.jsx)(a.eee, {
                        onClick: c,
                        onMouseEnter: g,
                        href: e.link,
                        children: (0, r.jsx)('img', {
                            alt: ' ',
                            'aria-hidden': !0,
                            src: k(e),
                            className: o()(w.badge, d, { [w.orbBadge]: t })
                        })
                    })
                },
                e.id
            );
        })
    });
}
