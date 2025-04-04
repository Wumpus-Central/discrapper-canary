n.d(t, { Z: () => D });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(906732),
    l = n(522651),
    c = n(795318),
    u = n(686546),
    d = n(544384),
    f = n(76021),
    _ = n(592125),
    p = n(594174),
    h = n(834348),
    m = n(74538),
    g = n(618158),
    E = n(871499),
    b = n(981631),
    y = n(354459),
    v = n(474936),
    O = n(388032),
    I = n(71922);
function S(e, t, n) {
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
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function P(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.ewm, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function w(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(u.ZP, {
                className: t,
                mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, r.jsx)(P, {})
            }),
            (0, r.jsx)(h.Z, { className: I.badgeUpgrade })
        ]
    });
}
function D(e) {
    var { hideBadges: t = !1, stream: n, location: u } = e,
        h = C(e, ['hideBadges', 'stream', 'location']);
    let { parentAnalyticsLocation: I } = (0, s.ZP)(),
        S = (0, o.e7)([p.default], () => m.ZP.isPremium(p.default.getCurrentUser(), v.p9.TIER_1)),
        N = (0, o.e7)([_.Z], () => _.Z.getChannel(null == n ? void 0 : n.channelId)),
        R = i.useMemo(() => (null != n ? [n] : []), [n]),
        D = i.useCallback(() => {
            null != N && (0, f.Z)(N.getGuildId(), N.id, b.jXE.STREAM_SETTINGS);
        }, [N]);
    if (null == n || null == N) return null;
    let L = P;
    return (
        t || S || (L = w),
        (0, r.jsx)(a.yRy, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.Z, {
                    children: (0, r.jsx)(d.Z, {
                        channel: N,
                        currentUser: p.default.getCurrentUser(),
                        activeStreams: R,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: D,
                        onInteraction: (0, c.u)('ManageStreamsButton', null != I ? I : u, { entrypoint: y.A5.OTHER_BUTTON })
                    })
                });
            },
            animation: a.yRy.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(
                    E.Z,
                    T(
                        A(T({}, e), {
                            label: O.NW.string(O.t.tmiYpK),
                            iconComponent: L,
                            onClick: (t) => {
                                (null != I || null != u) && (0, l.v)(null != I ? I : u, l.d.STREAM_SETTINGS), null == e || e.onClick(t);
                            }
                        }),
                        h
                    )
                )
        })
    );
}
