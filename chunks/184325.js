n.d(t, { Z: () => M }), n(266796);
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
    A = n(981631),
    N = n(215023),
    C = n(474936),
    R = n(681642),
    P = n(388032),
    w = n(219041);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
let x = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === m.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(d.r4, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== R.a
          ? (0, r.jsx)(d.L7, {
                profileBadge: t,
                tenureBadge: n
            })
          : t.description;
};
function M(e) {
    var t;
    let { badges: n, className: i, badgeClassName: d, displayProfile: D, onClose: M, shouldOpenBadgeTooltip: k } = e,
        { analyticsLocations: j } = (0, c.ZP)(l.Z.BADGE),
        { context: U, trackUserProfileAction: G } = (0, y.KZ)(),
        B = g.default.getCurrentUser(),
        F = (0, b.yd)(null == B ? void 0 : B.premiumType, C.p9.TIER_2),
        V = (0, S.Of)(null !== (t = null == B ? void 0 : B.id) && void 0 !== t ? t : null),
        Z = (0, I.Z)(V).some((e) => e.id === m.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: o()(w.container, i),
        'aria-label': P.NW.string(P.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            var t;
            let n = e.id === m.l.ORB_PROFILE_BADGE,
                i = (0, v.fv)(e.id),
                c = null != i || e.id === R.a,
                g = (t) => {
                    if (
                        (G({ action: 'PRESS_BADGE' }),
                        (0, O.NE)(
                            L(
                                {
                                    badge: e.id,
                                    analyticsLocations: j
                                },
                                U
                            )
                        ),
                        n)
                    ) {
                        (0, u.mK)({
                            openInLayer: !1,
                            tab: N.AW.ORBS,
                            analyticsLocations: j,
                            analyticsSource: l.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                        });
                        return;
                    }
                    if (c) {
                        if (
                            (t.preventDefault(),
                            E.default.track(A.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: F,
                                viewed_user_id: null == D ? void 0 : D.userId
                            }),
                            F)
                        ) {
                            (null == D ? void 0 : D.userId) === (null == B ? void 0 : B.id)
                                ? (0, h.uL)(A.Z5c.NITRO_HOME)
                                : (0, f.k)({
                                      analyticsLocations: j,
                                      displayProfile: D
                                  }),
                                null == M || M();
                            return;
                        }
                        if ((null == D ? void 0 : D.userId) === (null == B ? void 0 : B.id)) {
                            let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: j }) : null;
                            if (null == n) return;
                            return null == M || M(), n(t);
                        }
                        return (
                            (0, f.k)({
                                analyticsLocations: j,
                                displayProfile: D
                            }),
                            void (null == M || M())
                        );
                    }
                    let r = null != e.link ? (0, s.default)(e.link, { analyticsLocations: j }) : null;
                    if (null != r) return null == M || M(), r(t);
                },
                b = () => {
                    e.id === I.i && E.default.track(A.rMx.QUEST_CONTENT_VIEWED, L({}, (0, _.mH)(p.jn.QUEST_BADGE))),
                        G({ action: 'HOVER_BADGE' }),
                        (0, O.Qf)(
                            L(
                                {
                                    badge: e.id,
                                    analyticsLocations: j
                                },
                                U
                            )
                        );
                },
                y = x({
                    badge: e,
                    tieredTenureBadge: c && e.id !== R.a ? i : void 0,
                    currentUserOwnsOrbBadge: Z
                });
            return (0, r.jsx)(
                a.DY3,
                {
                    text: y,
                    'aria-label': e.description,
                    forceOpen: null != k && k(e.id),
                    delay: T.vB,
                    children: (0, r.jsx)(a.eee, {
                        onClick: g,
                        onMouseEnter: b,
                        href: e.link,
                        children: (0, r.jsx)('img', {
                            alt: ' ',
                            'aria-hidden': !0,
                            src: null !== (t = e.iconSrc) && void 0 !== t ? t : (0, T.Ej)(e.icon),
                            className: o()(w.badge, d)
                        })
                    })
                },
                e.id
            );
        })
    });
}
