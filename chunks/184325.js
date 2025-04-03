n.d(t, { Z: () => k }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(315263),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(927513),
    f = n(768865),
    _ = n(617136),
    p = n(497505),
    h = n(703656),
    m = n(317257),
    g = n(976015),
    E = n(594174),
    b = n(626135),
    y = n(111361),
    v = n(291175),
    O = n(785717),
    I = n(221292),
    S = n(485341),
    T = n(687158),
    N = n(228168),
    A = n(981631),
    C = n(215023),
    R = n(474936),
    P = n(681642),
    w = n(388032),
    D = n(286020);
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
        ? (0, r.jsx)(g.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== P.a
          ? (0, r.jsx)(d.Z, {
                profileBadge: t,
                tenureBadge: n
            })
          : t.description;
};
function k(e) {
    var t;
    let { badges: n, className: i, badgeClassName: d, displayProfile: g, onClose: L, shouldOpenBadgeTooltip: k } = e,
        { analyticsLocations: j } = (0, c.ZP)(l.Z.BADGE),
        { context: U, trackUserProfileAction: G } = (0, O.KZ)(),
        B = E.default.getCurrentUser(),
        F = (0, y.yd)(null == B ? void 0 : B.premiumType, R.p9.TIER_2),
        V = (0, T.Of)(null != (t = null == B ? void 0 : B.id) ? t : null),
        Z = (0, S.Z)(V).some((e) => e.id === m.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: o()(D.container, i),
        'aria-label': w.NW.string(w.t.VWV0y8),
        role: 'group',
        children: n.map((e, t) => {
            var n;
            let i = e.id === m.l.ORB_PROFILE_BADGE,
                c = (0, v.fv)(e.id),
                E = null != c || e.id === P.a,
                y = (t) => {
                    if (
                        (G({ action: 'PRESS_BADGE' }),
                        (0, I.NE)(
                            x(
                                {
                                    badge: e.id,
                                    analyticsLocations: j
                                },
                                U
                            )
                        ),
                        i)
                    )
                        return void (0, u.mK)({
                            openInLayer: !1,
                            tab: C.AW.ORBS,
                            analyticsLocations: j,
                            analyticsSource: l.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                        });
                    if (E) {
                        if (
                            (t.preventDefault(),
                            b.default.track(A.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: F,
                                viewed_user_id: null == g ? void 0 : g.userId
                            }),
                            F)
                        ) {
                            (null == g ? void 0 : g.userId) === (null == B ? void 0 : B.id)
                                ? (0, h.uL)(A.Z5c.NITRO_HOME)
                                : (0, f.k)({
                                      analyticsLocations: j,
                                      displayProfile: g
                                  }),
                                null == L || L();
                            return;
                        }
                        if ((null == g ? void 0 : g.userId) === (null == B ? void 0 : B.id)) {
                            let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: j }) : null;
                            if (null == n) return;
                            return null == L || L(), n(t);
                        }
                        return (
                            (0, f.k)({
                                analyticsLocations: j,
                                displayProfile: g
                            }),
                            void (null == L || L())
                        );
                    }
                    let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: j }) : null;
                    if (null != n) return null == L || L(), n(t);
                },
                O = () => {
                    e.id === S.i && b.default.track(A.rMx.QUEST_CONTENT_VIEWED, x({}, (0, _.mH)(p.jn.QUEST_BADGE))),
                        G({ action: 'HOVER_BADGE' }),
                        (0, I.Qf)(
                            x(
                                {
                                    badge: e.id,
                                    analyticsLocations: j
                                },
                                U
                            )
                        );
                },
                T = M({
                    badge: e,
                    tieredTenureBadge: E && e.id !== P.a ? c : void 0,
                    currentUserOwnsOrbBadge: Z
                });
            return (0, r.jsx)(
                a.DY3,
                {
                    text: T,
                    'aria-label': e.description,
                    forceOpen: null != k && k(e.id),
                    delay: N.vB,
                    children: (0, r.jsx)(a.eee, {
                        onClick: y,
                        onMouseEnter: O,
                        href: e.link,
                        children: (0, r.jsx)('img', {
                            alt: ' ',
                            'aria-hidden': !0,
                            src: null != (n = e.iconSrc) ? n : (0, N.Ej)(e.icon),
                            className: o()(D.badge, d)
                        })
                    })
                },
                ''.concat(e.id, '-').concat(t)
            );
        })
    });
}
