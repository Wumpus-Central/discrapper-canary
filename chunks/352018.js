"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(625903),
    o = n(265872),
    l = n(688810),
    u = n(384059),
    d = n(480890),
    c = n(573435),
    _ = n(848362),
    f = n(471993),
    E = n(734057),
    h = n(287809),
    p = n(964989),
    m = n(927578),
    g = n(447404),
    A = n(709562),
    I = n(806931),
    T = n(788868),
    S = n(985018),
    y = n(570027);
function N(e) {
    let { className: t } = e;
    return (0, r.jsx)(a.Z, { size: "md", color: "currentColor", className: t });
}
function O(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(c.Ay, { className: t, mask: c.Ay.Masks.HEADER_BAR_BADGE_BOTTOM, children: (0, r.jsx)(N, {}) }),
            (0, r.jsx)(p.A, { className: y.s }),
        ],
    });
}
function R(e) {
    let { hideBadges: t = !1, stream: n, location: a, ...c } = e,
        p = i.useRef(null),
        { analyticsLocations: y, parentAnalyticsLocation: R } = (0, l.Ay)(),
        v = (0, s.bG)([h.default], () => m.Ay.isPremium(h.default.getCurrentUser(), T.PremiumTypes.TIER_1)),
        C = (0, s.bG)([E.A], () => E.A.getChannel(n?.channelId)),
        b = i.useMemo(() => (null != n ? [n] : []), [n]),
        D = i.useCallback(() => {
            null != C && (0, f.A)(C.getGuildId(), C.id, y);
        }, [C, y]);
    if (null == n || null == C) return null;
    let L = N;
    return (
        t || v || (L = O),
        (0, r.jsx)(o.Y, {
            targetElementRef: p,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.A, {
                    children: (0, r.jsx)(_.A, {
                        channel: C,
                        currentUser: h.default.getCurrentUser(),
                        activeStreams: b,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: D,
                        onInteraction: (0, d.s)("ManageStreamsButton", R ?? a, { entrypoint: I.GK.OTHER_BUTTON }),
                    }),
                });
            },
            animation: o.Y.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(A.A, {
                    ...e,
                    buttonRef: p,
                    label: S.intl.string(S.t.tmiYpF),
                    iconComponent: L,
                    onClick: (t) => {
                        (null != R || null != a) && (0, u.X)(R ?? a, u.O.STREAM_SETTINGS), e?.onClick(t);
                    },
                    ...c,
                }),
        })
    );
}
