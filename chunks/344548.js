"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(625903),
    o = n(922016),
    l = n(688810),
    _ = n(384059),
    d = n(480890),
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
var A = n(927578),
    I = n(447404),
    p = n(709562),
    T = n(806931),
    S = n(788868),
    N = n(985018),
    O = n(570027);
function R(e) {
    let { className: t } = e;
    return (0, i.jsx)(a.Z, { size: "md", color: "currentColor", className: t });
}
function C(e) {
    let { className: t } = e;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)(u.Ay, { className: t, mask: u.Ay.Masks.HEADER_BAR_BADGE_BOTTOM, children: (0, i.jsx)(R, {}) }),
            (0, i.jsx)(g, { className: O.s }),
        ],
    });
}
function y(e) {
    let { hideBadges: t = !1, stream: n, location: a, ...u } = e,
        f = r.useRef(null),
        { analyticsLocations: g, parentAnalyticsLocation: O } = (0, l.Ay)(),
        y = (0, s.bG)([m.default], () => A.Ay.isPremium(m.default.getCurrentUser(), S.PremiumTypes.TIER_1)),
        D = (0, s.bG)([h.A], () => h.A.getChannel(n?.channelId)),
        L = r.useMemo(() => (null != n ? [n] : []), [n]),
        v = r.useCallback(() => {
            null != D && (0, E.A)(D.getGuildId(), D.id, g);
        }, [D, g]);
    if (null == n || null == D) return null;
    let w = R;
    return (
        t || y || (w = C),
        (0, i.jsx)(o.Y, {
            targetElementRef: f,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(I.A, {
                    children: (0, i.jsx)(c.A, {
                        channel: D,
                        currentUser: m.default.getCurrentUser(),
                        activeStreams: L,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: v,
                        onInteraction: (0, d.s)("ManageStreamsButton", O ?? a, { entrypoint: T.GK.OTHER_BUTTON }),
                    }),
                });
            },
            animation: o.Y.Animation.FADE,
            children: (e) =>
                (0, i.jsx)(p.A, {
                    ...e,
                    buttonRef: f,
                    label: N.intl.string(N.t.tmiYpF),
                    iconComponent: w,
                    onClick: (t) => {
                        (null != O || null != a) && (0, _.X)(O ?? a, _.O.STREAM_SETTINGS), e?.onClick(t);
                    },
                    ...u,
                }),
        })
    );
}
