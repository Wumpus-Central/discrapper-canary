n.d(t, { Z: () => G }), n(953529);
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
    T = n(485341),
    A = n(687158),
    N = n(228168),
    C = n(981631),
    P = n(215023),
    R = n(474936),
    w = n(681642),
    D = n(388032),
    L = n(286020);
function x(e, t, n) {
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
function k(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === g.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(E.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== w.a
          ? (0, r.jsx)(d.Z, {
                profileBadge: t,
                tenureBadge: n
            })
          : t.description;
};
function G(e) {
    var t;
    let { badges: n, className: i, badgeClassName: d, displayProfile: E, onClose: x, shouldOpenBadgeTooltip: M, shouldGlowTenureBadge: G } = e,
        { analyticsLocations: B } = (0, c.ZP)(l.Z.BADGE),
        { context: F, trackUserProfileAction: V } = (0, I.KZ)(),
        Z = b.default.getCurrentUser(),
        H = (0, O.yd)(null == Z ? void 0 : Z.premiumType, R.p9.TIER_2),
        Y = (0, A.Of)(null != (t = null == Z ? void 0 : Z.id) ? t : null),
        W = (0, T.Z)(Y).some((e) => e.id === g.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)('div', {
        className: a()(L.container, i),
        'aria-label': D.intl.string(D.t.VWV0y8),
        role: 'group',
        children: n.map((e, t) => {
            var n;
            let i = e.id === g.l.ORB_PROFILE_BADGE,
                c = (0, v.fv)(e.id),
                b = null != c || e.id === w.a,
                O = (t) => {
                    if (
                        (V({ action: 'PRESS_BADGE' }),
                        (0, S.NE)(
                            k(
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
                            tab: P.AW.ORBS,
                            analyticsLocations: B,
                            analyticsSource: l.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                        });
                    if (b) {
                        if (
                            (t.preventDefault(),
                            y.default.track(C.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: H,
                                viewed_user_id: null == E ? void 0 : E.userId
                            }),
                            H)
                        ) {
                            (null == E ? void 0 : E.userId) === (null == Z ? void 0 : Z.id)
                                ? (0, m.uL)(C.Z5c.NITRO_HOME)
                                : (0, f.k)({
                                      analyticsLocations: B,
                                      displayProfile: E
                                  }),
                                null == x || x();
                            return;
                        }
                        if ((null == E ? void 0 : E.userId) === (null == Z ? void 0 : Z.id)) {
                            let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: B }) : null;
                            if (null == n) return;
                            return null == x || x(), n(t);
                        }
                        return (
                            (0, f.k)({
                                analyticsLocations: B,
                                displayProfile: E
                            }),
                            void (null == x || x())
                        );
                    }
                    let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: B }) : null;
                    if (null != n) return null == x || x(), n(t);
                },
                I = () => {
                    e.id === T.i &&
                        y.default.track(
                            C.rMx.QUEST_CONTENT_VIEWED,
                            j(k({}, (0, _.mH)(h.jn.QUEST_BADGE)), {
                                google_advertising_id: p.Z.googleAdvertisingId,
                                is_targeted: !1
                            })
                        ),
                        V({ action: 'HOVER_BADGE' }),
                        (0, S.Qf)(
                            k(
                                {
                                    badge: e.id,
                                    analyticsLocations: B
                                },
                                F
                            )
                        );
                },
                A = U({
                    badge: e,
                    tieredTenureBadge: b && e.id !== w.a ? c : void 0,
                    currentUserOwnsOrbBadge: W
                });
            return (0, r.jsx)(
                o.DY3,
                {
                    text: A,
                    'aria-label': e.description,
                    forceOpen: null != M && M(e.id),
                    delay: N.vB,
                    children: (0, r.jsx)(o.eee, {
                        onClick: O,
                        onMouseEnter: I,
                        href: e.link,
                        style: { filter: G && null != c ? 'drop-shadow(0 0 5px '.concat(c.glowColor, ')') : void 0 },
                        children: (0, r.jsx)('img', {
                            alt: ' ',
                            'aria-hidden': !0,
                            src: null != (n = e.iconSrc) ? n : (0, N.Ej)(e.icon),
                            className: a()(L.badge, d)
                        })
                    })
                },
                ''.concat(e.id, '-').concat(t)
            );
        })
    });
}
