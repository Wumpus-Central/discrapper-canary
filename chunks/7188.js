n.d(t, { Z: () => P });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(795318),
    l = n(686546),
    c = n(544384),
    u = n(76021),
    d = n(592125),
    f = n(594174),
    p = n(834348),
    _ = n(74538),
    h = n(618158),
    m = n(871499),
    g = n(981631),
    E = n(354459),
    v = n(474936),
    b = n(388032),
    y = n(966476);
function O(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function C(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.ewm, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function R(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(l.ZP, {
                className: t,
                mask: l.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, r.jsx)(C, {})
            }),
            (0, r.jsx)(p.Z, { className: y.badgeUpgrade })
        ]
    });
}
function P(e) {
    var { hideBadges: t = !1, stream: n } = e,
        l = N(e, ['hideBadges', 'stream']);
    let p = (0, o.e7)([f.default], () => _.ZP.isPremium(f.default.getCurrentUser(), v.p9.TIER_1)),
        y = (0, o.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channelId)),
        O = i.useMemo(() => (null != n ? [n] : []), [n]),
        I = i.useCallback(() => {
            null != y && (0, u.Z)(y.getGuildId(), y.id, g.jXE.STREAM_SETTINGS);
        }, [y]);
    if (null == n || null == y) return null;
    let A = C;
    return (
        t || p || (A = R),
        (0, r.jsx)(a.yRy, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(h.Z, {
                    children: (0, r.jsx)(c.Z, {
                        channel: y,
                        currentUser: f.default.getCurrentUser(),
                        activeStreams: O,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: I,
                        onInteraction: (0, s.u)('ManageStreamsButton', 'StreamSettingsButton', { entrypoint: E.A5.OTHER_BUTTON })
                    })
                });
            },
            animation: a.yRy.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(
                    m.Z,
                    S(
                        T(S({}, e), {
                            label: b.NW.string(b.t.tmiYpK),
                            iconComponent: A
                        }),
                        l
                    )
                )
        })
    );
}
