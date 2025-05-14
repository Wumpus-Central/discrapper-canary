n.d(t, { Z: () => B }), n(953529);
var r = n(255367);
n(73800);
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
    p = n(569984),
    h = n(497505),
    m = n(703656),
    g = n(317257),
    E = n(976015),
    b = n(594174),
    y = n(626135),
    O = n(111361),
    v = n(291175),
    I = n(785717),
    S = n(221292),
    T = n(792481),
    A = n(485341),
    N = n(687158),
    C = n(228168),
    P = n(981631),
    R = n(215023),
    w = n(474936),
    D = n(681642),
    L = n(388032),
    x = n(286020);
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
function M(e) {
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
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === g.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(E.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== D.a
          ? (0, r.jsx)(d.Z, {
                profileBadge: t,
                tenureBadge: n
            })
          : t.description;
};
function B(e) {
    var t;
    let { badges: n, className: i, badgeClassName: d, displayProfile: E, onClose: k, shouldOpenBadgeTooltip: j } = e,
        { analyticsLocations: B } = (0, c.ZP)(l.Z.BADGE),
        { context: F, trackUserProfileAction: V } = (0, I.KZ)(),
        Z = b.default.getCurrentUser(),
        H = (0, O.yd)(null == Z ? void 0 : Z.premiumType, w.p9.TIER_2),
        Y = T.X.useExperiment({ location: 'UserProfileBadgeList' }),
        W = (0, N.Of)(null != (t = null == Z ? void 0 : Z.id) ? t : null),
        K = (0, A.Z)(W).some((e) => e.id === g.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: o()(x.container, i),
        'aria-label': L.intl.string(L.t.VWV0y8),
        role: 'group',
        children: n.map((e, t) => {
            var n;
            let i = e.id === g.l.ORB_PROFILE_BADGE,
                c = (0, v.fv)(e.id),
                b = null != c || e.id === D.a,
                O = (t) => {
                    if (
                        (V({ action: 'PRESS_BADGE' }),
                        (0, S.NE)(
                            M(
                                {
                                    badge: e.id,
                                    analyticsLocations: B
                                },
                                F
                            )
                        ),
                        i)
                    )
                        return void (0, u.mK)({
                            openInLayer: !1,
                            tab: R.AW.ORBS,
                            analyticsLocations: B,
                            analyticsSource: l.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                        });
                    if (b) {
                        if (
                            (t.preventDefault(),
                            y.default.track(P.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: H,
                                viewed_user_id: null == E ? void 0 : E.userId
                            }),
                            H)
                        ) {
                            (null == E ? void 0 : E.userId) === (null == Z ? void 0 : Z.id)
                                ? (0, m.uL)(P.Z5c.NITRO_HOME)
                                : (0, f.k)({
                                      analyticsLocations: B,
                                      displayProfile: E
                                  }),
                                null == k || k();
                            return;
                        }
                        if ((null == E ? void 0 : E.userId) === (null == Z ? void 0 : Z.id)) {
                            let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: B }) : null;
                            if (null == n) return;
                            return null == k || k(), n(t);
                        }
                        return (
                            (0, f.k)({
                                analyticsLocations: B,
                                displayProfile: E
                            }),
                            void (null == k || k())
                        );
                    }
                    let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: B }) : null;
                    if (null != n) return null == k || k(), n(t);
                },
                I = () => {
                    e.id === A.i && y.default.track(P.rMx.QUEST_CONTENT_VIEWED, U(M({}, (0, _.mH)(h.jn.QUEST_BADGE)), { google_advertising_id: p.Z.googleAdvertisingId })),
                        V({ action: 'HOVER_BADGE' }),
                        (0, S.Qf)(
                            M(
                                {
                                    badge: e.id,
                                    analyticsLocations: B
                                },
                                F
                            )
                        );
                },
                T = G({
                    badge: e,
                    tieredTenureBadge: b && e.id !== D.a ? c : void 0,
                    currentUserOwnsOrbBadge: K
                }),
                N = null != c && Y.enabled;
            return (0, r.jsx)(
                a.DY3,
                {
                    text: T,
                    'aria-label': e.description,
                    forceOpen: null != j && j(e.id),
                    delay: C.vB,
                    children: (0, r.jsx)(a.eee, {
                        onClick: O,
                        onMouseEnter: I,
                        href: e.link,
                        style: { filter: N ? 'drop-shadow(0 0 5px '.concat(c.glowColor, ')') : void 0 },
                        children: (0, r.jsx)('img', {
                            alt: ' ',
                            'aria-hidden': !0,
                            src: null != (n = e.iconSrc) ? n : (0, C.Ej)(e.icon),
                            className: o()(x.badge, d)
                        })
                    })
                },
                ''.concat(e.id, '-').concat(t)
            );
        })
    });
}
