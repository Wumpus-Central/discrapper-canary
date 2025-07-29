n.d(t, { Z: () => D });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(906732),
    l = n(522651),
    c = n(795318),
    u = n(686546),
    d = n(544384),
    _ = n(76021),
    f = n(592125),
    p = n(594174),
    h = n(834348),
    m = n(74538),
    g = n(618158),
    E = n(871499),
    b = n(981631),
    y = n(354459),
    O = n(474936),
    v = n(388032),
    I = n(71922);
function T(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function P(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.ewm, {
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
    let I = i.useRef(null),
        { parentAnalyticsLocation: T } = (0, s.ZP)(),
        A = (0, a.e7)([p.default], () => m.ZP.isPremium(p.default.getCurrentUser(), O.p9.TIER_1)),
        R = (0, a.e7)([f.Z], () => f.Z.getChannel(null == n ? void 0 : n.channelId)),
        D = i.useMemo(() => (null != n ? [n] : []), [n]),
        L = i.useCallback(() => {
            null != R && (0, _.Z)(R.getGuildId(), R.id, b.jXE.STREAM_SETTINGS);
        }, [R]);
    if (null == n || null == R) return null;
    let x = P;
    return (
        t || A || (x = w),
        (0, r.jsx)(o.yRy, {
            targetElementRef: I,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.Z, {
                    children: (0, r.jsx)(d.Z, {
                        channel: R,
                        currentUser: p.default.getCurrentUser(),
                        activeStreams: D,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: L,
                        onInteraction: (0, c.u)('ManageStreamsButton', null != T ? T : u, { entrypoint: y.A5.OTHER_BUTTON })
                    })
                });
            },
            animation: o.yRy.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(
                    E.Z,
                    S(
                        N(S({}, e), {
                            buttonRef: I,
                            label: v.intl.string(v.t.tmiYpK),
                            iconComponent: x,
                            onClick: (t) => {
                                ((null != T || null != u) && (0, l.v)(null != T ? T : u, l.d.STREAM_SETTINGS), null == e || e.onClick(t));
                            }
                        }),
                        h
                    )
                )
        })
    );
}
