n.d(t, { Z: () => B }), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(315263),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(927513),
    f = n(570642),
    _ = n(768865),
    p = n(617136),
    h = n(569984),
    m = n(497505),
    g = n(703656),
    E = n(317257),
    b = n(976015),
    y = n(594174),
    O = n(626135),
    v = n(111361),
    I = n(291175),
    S = n(785717),
    T = n(221292),
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
    return t.id === E.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(b.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== D.a
          ? (0, r.jsx)(d.Z, {
                profileBadge: t,
                tenureBadge: n
            })
          : t.description;
};
function B(e) {
    var t;
    let { badges: n, className: i, badgeClassName: d, displayProfile: b, onClose: k, shouldOpenBadgeTooltip: j } = e,
        { analyticsLocations: B } = (0, c.ZP)(l.Z.BADGE),
        { context: F, trackUserProfileAction: V } = (0, S.KZ)(),
        Z = y.default.getCurrentUser(),
        H = (0, v.yd)(null == Z ? void 0 : Z.premiumType, w.p9.TIER_2),
        Y = (0, f.Z)({ location: 'UserProfileBadgeList' }),
        W = (0, N.Of)(null != (t = null == Z ? void 0 : Z.id) ? t : null),
        K = (0, A.Z)(W).some((e) => e.id === E.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: a()(x.container, i),
        'aria-label': L.intl.string(L.t.VWV0y8),
        role: 'group',
        children: n.map((e, t) => {
            var n;
            let i = e.id === E.l.ORB_PROFILE_BADGE,
                c = (0, I.fv)(e.id),
                f = null != c || e.id === D.a,
                y = (t) => {
                    if (
                        (V({ action: 'PRESS_BADGE' }),
                        (0, T.NE)(
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
                    if (f) {
                        if (
                            (t.preventDefault(),
                            O.default.track(P.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: H,
                                viewed_user_id: null == b ? void 0 : b.userId
                            }),
                            H)
                        ) {
                            (null == b ? void 0 : b.userId) === (null == Z ? void 0 : Z.id)
                                ? (0, g.uL)(P.Z5c.NITRO_HOME)
                                : (0, _.k)({
                                      analyticsLocations: B,
                                      displayProfile: b
                                  }),
                                null == k || k();
                            return;
                        }
                        if ((null == b ? void 0 : b.userId) === (null == Z ? void 0 : Z.id)) {
                            let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: B }) : null;
                            if (null == n) return;
                            return null == k || k(), n(t);
                        }
                        return (
                            (0, _.k)({
                                analyticsLocations: B,
                                displayProfile: b
                            }),
                            void (null == k || k())
                        );
                    }
                    let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: B }) : null;
                    if (null != n) return null == k || k(), n(t);
                },
                v = () => {
                    e.id === A.i && O.default.track(P.rMx.QUEST_CONTENT_VIEWED, U(M({}, (0, p.mH)(m.jn.QUEST_BADGE)), { google_advertising_id: h.Z.googleAdvertisingId })),
                        V({ action: 'HOVER_BADGE' }),
                        (0, T.Qf)(
                            M(
                                {
                                    badge: e.id,
                                    analyticsLocations: B
                                },
                                F
                            )
                        );
                },
                S = G({
                    badge: e,
                    tieredTenureBadge: f && e.id !== D.a ? c : void 0,
                    currentUserOwnsOrbBadge: K
                }),
                N = null != c && Y;
            return (0, r.jsx)(
                o.DY3,
                {
                    text: S,
                    'aria-label': e.description,
                    forceOpen: null != j && j(e.id),
                    delay: C.vB,
                    children: (0, r.jsx)(o.eee, {
                        onClick: y,
                        onMouseEnter: v,
                        href: e.link,
                        style: { filter: N ? 'drop-shadow(0 0 5px '.concat(c.glowColor, ')') : void 0 },
                        children: (0, r.jsx)('img', {
                            alt: ' ',
                            'aria-hidden': !0,
                            src: null != (n = e.iconSrc) ? n : (0, C.Ej)(e.icon),
                            className: a()(x.badge, d)
                        })
                    })
                },
                ''.concat(e.id, '-').concat(t)
            );
        })
    });
}
