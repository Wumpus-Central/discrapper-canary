n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(686546),
    l = n(544384),
    c = n(76021),
    u = n(592125),
    d = n(594174),
    f = n(834348),
    p = n(74538),
    _ = n(618158),
    h = n(871499),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(966476);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.ewm, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function A(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(s.ZP, {
                className: t,
                mask: s.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, r.jsx)(N, {})
            }),
            (0, r.jsx)(f.Z, { className: v.badgeUpgrade })
        ]
    });
}
function C(e) {
    var { hideBadges: t = !1, stream: n } = e,
        s = I(e, ['hideBadges', 'stream']);
    let f = (0, o.e7)([d.default], () => p.ZP.isPremium(d.default.getCurrentUser(), g.p9.TIER_1)),
        v = (0, o.e7)([u.Z], () => u.Z.getChannel(null == n ? void 0 : n.channelId)),
        b = i.useMemo(() => (null != n ? [n] : []), [n]),
        O = i.useCallback(() => {
            null != v && (0, c.Z)(v.getGuildId(), v.id, m.jXE.STREAM_SETTINGS);
        }, [v]);
    if (null == n || null == v) return null;
    let T = N;
    return (
        t || f || (T = A),
        (0, r.jsx)(a.yRy, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(_.Z, {
                    children: (0, r.jsx)(l.Z, {
                        channel: v,
                        currentUser: d.default.getCurrentUser(),
                        activeStreams: b,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: O
                    })
                });
            },
            animation: a.yRy.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(
                    h.Z,
                    y(
                        S(y({}, e), {
                            label: E.NW.string(E.t.tmiYpK),
                            iconComponent: T
                        }),
                        s
                    )
                )
        })
    );
}
