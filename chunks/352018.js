"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(625903),
    o = n(922016),
    l = n(688810),
    u = n(384059),
    c = n(480890),
    d = n(573435),
    _ = n(848362),
    h = n(471993),
    f = n(734057),
    p = n(287809),
    E = n(964989),
    m = n(428262),
    g = n(447404),
    A = n(204651),
    I = n(806931),
    T = n(788868),
    S = n(375708),
    y = n(570027);
function C(e) {
    let { className: t } = e;
    return (0, i.jsx)(a.Z, { size: "md", color: "currentColor", className: t });
}
function N(e) {
    let { className: t } = e;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)(d.Ay, { className: t, mask: d.Ay.Masks.HEADER_BAR_BADGE_BOTTOM, children: (0, i.jsx)(C, {}) }),
            (0, i.jsx)(E.A, { className: y.s }),
        ],
    });
}
function v(e) {
    let { hideBadges: t = !1, stream: n, location: a, ...d } = e,
        E = r.useRef(null),
        { analyticsLocations: y, parentAnalyticsLocation: v } = (0, l.Ay)(),
        R = (0, s.bG)([p.default], () => m.Ay.isPremium(p.default.getCurrentUser(), T.PremiumTypes.TIER_1)),
        O = (0, s.bG)([f.A], () => f.A.getChannel(n?.channelId)),
        b = r.useMemo(() => (null != n ? [n] : []), [n]),
        D = r.useCallback(() => {
            null != O && (0, h.A)(O.getGuildId(), O.id, y);
        }, [O, y]);
    if (null == n || null == O) return null;
    let L = C;
    return (
        t || R || (L = N),
        (0, i.jsx)(o.Y, {
            targetElementRef: E,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(g.A, {
                    children: (0, i.jsx)(_.A, {
                        channel: O,
                        currentUser: p.default.getCurrentUser(),
                        activeStreams: b,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: D,
                        onInteraction: (0, c.s)("ManageStreamsButton", v ?? a, { entrypoint: I.GK.OTHER_BUTTON }),
                    }),
                });
            },
            animation: o.Y.Animation.FADE,
            children: (e) =>
                (0, i.jsx)(A.A, {
                    ...e,
                    buttonRef: E,
                    label: S.intl.string(S.t.tmiYpF),
                    iconComponent: L,
                    onClick: (t) => {
                        (null != v || null != a) && (0, u.X)(v ?? a, u.O.STREAM_SETTINGS), e?.onClick(t);
                    },
                    ...d,
                }),
        })
    );
}
