"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(625903),
    o = n(922016),
    l = n(688810),
    d = n(384059),
    _ = n(480890),
    u = n(573435),
    c = n(848362),
    E = n(471993),
    h = n(734057),
    m = n(287809),
    f = n(953727);
function g(e) {
    let { width: t = 8, height: n = 8, color: r = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsx)("svg", {
        ...(0, f.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 8 8",
        fill: "none",
        children: (0, i.jsx)("path", {
            className: s,
            fill: r,
            d: "M8 3.99957L4 0 0 3.99957l1.20161 1.20149L3.1502 3.25268V8h1.6996V3.25268l1.94858 1.94838L8 3.99957z",
        }),
    });
}
var p = n(927578),
    A = n(447404),
    I = n(709562),
    T = n(806931),
    S = n(788868),
    N = n(985018),
    C = n(570027);
function R(e) {
    let { className: t } = e;
    return (0, i.jsx)(a.Z, { size: "md", color: "currentColor", className: t });
}
function O(e) {
    let { className: t } = e;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)(u.Ay, { className: t, mask: u.Ay.Masks.HEADER_BAR_BADGE_BOTTOM, children: (0, i.jsx)(R, {}) }),
            (0, i.jsx)(g, { className: C.s }),
        ],
    });
}
function y(e) {
    let { hideBadges: t = !1, stream: n, location: a, ...u } = e,
        f = r.useRef(null),
        { analyticsLocations: g, parentAnalyticsLocation: C } = (0, l.Ay)(),
        y = (0, s.bG)([m.default], () => p.Ay.isPremium(m.default.getCurrentUser(), S.PremiumTypes.TIER_1)),
        v = (0, s.bG)([h.A], () => h.A.getChannel(n?.channelId)),
        D = r.useMemo(() => (null != n ? [n] : []), [n]),
        L = r.useCallback(() => {
            null != v && (0, E.A)(v.getGuildId(), v.id, g);
        }, [v, g]);
    if (null == n || null == v) return null;
    let b = R;
    return (
        t || y || (b = O),
        (0, i.jsx)(o.Y, {
            targetElementRef: f,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(A.A, {
                    children: (0, i.jsx)(c.A, {
                        channel: v,
                        currentUser: m.default.getCurrentUser(),
                        activeStreams: D,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: L,
                        onInteraction: (0, _.s)("ManageStreamsButton", C ?? a, { entrypoint: T.GK.OTHER_BUTTON }),
                    }),
                });
            },
            animation: o.Y.Animation.FADE,
            children: (e) =>
                (0, i.jsx)(I.A, {
                    ...e,
                    buttonRef: f,
                    label: N.intl.string(N.t.tmiYpF),
                    iconComponent: b,
                    onClick: (t) => {
                        (null != C || null != a) && (0, d.X)(C ?? a, d.O.STREAM_SETTINGS), e?.onClick(t);
                    },
                    ...u,
                }),
        })
    );
}
