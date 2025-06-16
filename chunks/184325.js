n.d(t, { Z: () => B }), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(315263),
    l = n(516796),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    f = n(927513),
    _ = n(768865),
    p = n(617136),
    h = n(497505),
    m = n(703656),
    g = n(317257),
    E = n(976015),
    b = n(594174),
    y = n(626135),
    O = n(358085),
    v = n(111361),
    I = n(291175),
    T = n(785717),
    S = n(221292),
    A = n(485341),
    N = n(687158),
    C = n(228168),
    R = n(981631),
    P = n(215023),
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
          ? (0, r.jsx)(f.Z, {
                profileBadge: t,
                tenureBadge: n
            })
          : t.description;
};
function B(e) {
    var t;
    let { badges: n, className: i, badgeClassName: f, displayProfile: E, onClose: k, shouldOpenBadgeTooltip: j, shouldGlowTenureBadge: B } = e,
        { analyticsLocations: V } = (0, u.ZP)(c.Z.BADGE),
        { context: F, trackUserProfileAction: Z } = (0, T.KZ)(),
        H = b.default.getCurrentUser(),
        Y = (0, v.yd)(null == H ? void 0 : H.premiumType, w.p9.TIER_2),
        W = (0, N.Of)(null != (t = null == H ? void 0 : H.id) ? t : null),
        K = (0, A.Z)(W).some((e) => e.id === g.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: a()(x.container, i),
        'aria-label': L.intl.string(L.t.VWV0y8),
        role: 'group',
        children: n.map((e, t) => {
            var n;
            let i = e.id === g.l.ORB_PROFILE_BADGE,
                u = (0, I.fv)(e.id),
                b = null != u || e.id === D.a,
                v = (t) => {
                    if (
                        (Z({ action: 'PRESS_BADGE' }),
                        (0, S.NE)(
                            M(
                                {
                                    badge: e.id,
                                    analyticsLocations: V
                                },
                                F
                            )
                        ),
                        i)
                    )
                        return void (0, d.mK)({
                            openInLayer: !1,
                            tab: P.AW.ORBS,
                            analyticsLocations: V,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                        });
                    if (b) {
                        if (
                            (t.preventDefault(),
                            y.default.track(R.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: Y,
                                viewed_user_id: null == E ? void 0 : E.userId
                            }),
                            Y)
                        ) {
                            (null == E ? void 0 : E.userId) === (null == H ? void 0 : H.id)
                                ? (0, m.uL)(R.Z5c.NITRO_HOME)
                                : (0, _.k)({
                                      analyticsLocations: V,
                                      displayProfile: E
                                  }),
                                null == k || k();
                            return;
                        }
                        if ((null == E ? void 0 : E.userId) === (null == H ? void 0 : H.id)) {
                            let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: V }) : null;
                            if (null == n) return;
                            return null == k || k(), n(t);
                        }
                        return (
                            (0, _.k)({
                                analyticsLocations: V,
                                displayProfile: E
                            }),
                            void (null == k || k())
                        );
                    }
                    let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: V }) : null;
                    if (null != n) return null == k || k(), n(t);
                },
                T = () => {
                    if (e.id === A.i) {
                        let e = (0, l.S)();
                        y.default.track(
                            R.rMx.QUEST_CONTENT_VIEWED,
                            U(M({}, (0, p.mH)(h.jn.QUEST_BADGE)), {
                                android_advertising_id: null != e && (0, O.isAndroid)() ? e.advertisingId : null,
                                is_targeted: !1
                            })
                        );
                    }
                    Z({ action: 'HOVER_BADGE' }),
                        (0, S.Qf)(
                            M(
                                {
                                    badge: e.id,
                                    analyticsLocations: V
                                },
                                F
                            )
                        );
                },
                N = G({
                    badge: e,
                    tieredTenureBadge: b && e.id !== D.a ? u : void 0,
                    currentUserOwnsOrbBadge: K
                });
            return (0, r.jsx)(
                o.DY3,
                {
                    text: N,
                    'aria-label': e.description,
                    forceOpen: null != j && j(e.id),
                    delay: C.vB,
                    children: (0, r.jsx)(o.eee, {
                        onClick: v,
                        onMouseEnter: T,
                        href: e.link,
                        style: { filter: B && null != u ? 'drop-shadow(0 0 5px '.concat(u.glowColor, ')') : void 0 },
                        children: (0, r.jsx)('img', {
                            alt: ' ',
                            'aria-hidden': !0,
                            src: null != (n = e.iconSrc) ? n : (0, C.Ej)(e.icon),
                            className: a()(x.badge, f)
                        })
                    })
                },
                ''.concat(e.id, '-').concat(t)
            );
        })
    });
}
