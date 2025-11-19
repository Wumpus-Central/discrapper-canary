n.d(t, { Z: () => D });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
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
    b = n(354459),
    y = n(474936),
    O = n(388032),
    v = n(572065);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.ewm, {
        size: "md",
        color: "currentColor",
        className: t,
    });
}
function P(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(u.ZP, {
                className: t,
                mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, r.jsx)(R, {}),
            }),
            (0, r.jsx)(h.Z, { className: v.badgeUpgrade }),
        ],
    });
}
function D(e) {
    var { hideBadges: t = !1, stream: n, location: u } = e,
        h = C(e, ["hideBadges", "stream", "location"]);
    let v = i.useRef(null),
        { analyticsLocations: I, parentAnalyticsLocation: S } = (0, s.ZP)(),
        N = (0, a.e7)([p.default], () => m.ZP.isPremium(p.default.getCurrentUser(), y.PremiumTypes.TIER_1)),
        D = (0, a.e7)([_.Z], () => _.Z.getChannel(null == n ? void 0 : n.channelId)),
        w = i.useMemo(() => (null != n ? [n] : []), [n]),
        L = i.useCallback(() => {
            null != D && (0, f.Z)(D.getGuildId(), D.id, I);
        }, [D, I]);
    if (null == n || null == D) return null;
    let x = R;
    return (
        t || N || (x = P),
        (0, r.jsx)(o.yRy, {
            targetElementRef: v,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.Z, {
                    children: (0, r.jsx)(d.Z, {
                        channel: D,
                        currentUser: p.default.getCurrentUser(),
                        activeStreams: w,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: L,
                        onInteraction: (0, c.u)("ManageStreamsButton", null != S ? S : u, {
                            entrypoint: b.A5.OTHER_BUTTON,
                        }),
                    }),
                });
            },
            animation: o.yRy.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(
                    E.Z,
                    T(
                        A(T({}, e), {
                            buttonRef: v,
                            label: O.intl.string(O.t.tmiYpF),
                            iconComponent: x,
                            onClick: (t) => {
                                (null != S || null != u) && (0, l.v)(null != S ? S : u, l.d.STREAM_SETTINGS),
                                    null == e || e.onClick(t);
                            },
                        }),
                        h,
                    ),
                ),
        })
    );
}
