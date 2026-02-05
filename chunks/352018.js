"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(688810),
    l = n(384059),
    u = n(480890),
    c = n(573435),
    d = n(848362),
    _ = n(471993),
    f = n(734057),
    p = n(287809),
    h = n(964989),
    m = n(927578),
    g = n(447404),
    E = n(709562),
    A = n(806931),
    I = n(788868),
    T = n(985018),
    y = n(849148);
function S(e) {
    let { className: t } = e;
    return (0, r.jsx)(s.Zes, { size: "md", color: "currentColor", className: t });
}
function v(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(c.Ay, { className: t, mask: c.Ay.Masks.HEADER_BAR_BADGE_BOTTOM, children: (0, r.jsx)(S, {}) }),
            (0, r.jsx)(h.A, { className: y.s }),
        ],
    });
}
function C(e) {
    let { hideBadges: t = !1, stream: n, location: c, ...h } = e,
        y = i.useRef(null),
        { analyticsLocations: C, parentAnalyticsLocation: b } = (0, o.Ay)(),
        N = (0, a.bG)([p.default], () => m.Ay.isPremium(p.default.getCurrentUser(), I.PremiumTypes.TIER_1)),
        R = (0, a.bG)([f.A], () => f.A.getChannel(n?.channelId)),
        O = i.useMemo(() => (null != n ? [n] : []), [n]),
        D = i.useCallback(() => {
            null != R && (0, _.A)(R.getGuildId(), R.id, C);
        }, [R, C]);
    if (null == n || null == R) return null;
    let L = S;
    return (
        t || N || (L = v),
        (0, r.jsx)(s.YNO, {
            targetElementRef: y,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.A, {
                    children: (0, r.jsx)(d.A, {
                        channel: R,
                        currentUser: p.default.getCurrentUser(),
                        activeStreams: O,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: D,
                        onInteraction: (0, u.s)("ManageStreamsButton", b ?? c, { entrypoint: A.GK.OTHER_BUTTON }),
                    }),
                });
            },
            animation: s.YNO.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(E.A, {
                    ...e,
                    buttonRef: y,
                    label: T.intl.string(T.t.tmiYpF),
                    iconComponent: L,
                    onClick: (t) => {
                        (null != b || null != c) && (0, l.X)(b ?? c, l.O.STREAM_SETTINGS), e?.onClick(t);
                    },
                    ...h,
                }),
        })
    );
}
