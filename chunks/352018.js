"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(625903),
    o = n(265872),
    l = n(688810),
    u = n(384059),
    c = n(480890),
    d = n(573435),
    _ = n(848362),
    f = n(471993),
    p = n(734057),
    h = n(287809),
    E = n(964989),
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
function v(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(d.Ay, { className: t, mask: d.Ay.Masks.HEADER_BAR_BADGE_BOTTOM, children: (0, r.jsx)(N, {}) }),
            (0, r.jsx)(E.A, { className: y.s }),
        ],
    });
}
function C(e) {
    let { hideBadges: t = !1, stream: n, location: a, ...d } = e,
        E = i.useRef(null),
        { analyticsLocations: y, parentAnalyticsLocation: C } = (0, l.Ay)(),
        O = (0, s.bG)([h.default], () => m.Ay.isPremium(h.default.getCurrentUser(), T.PremiumTypes.TIER_1)),
        R = (0, s.bG)([p.A], () => p.A.getChannel(n?.channelId)),
        b = i.useMemo(() => (null != n ? [n] : []), [n]),
        D = i.useCallback(() => {
            null != R && (0, f.A)(R.getGuildId(), R.id, y);
        }, [R, y]);
    if (null == n || null == R) return null;
    let L = N;
    return (
        t || O || (L = v),
        (0, r.jsx)(o.Y, {
            targetElementRef: E,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.A, {
                    children: (0, r.jsx)(_.A, {
                        channel: R,
                        currentUser: h.default.getCurrentUser(),
                        activeStreams: b,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: D,
                        onInteraction: (0, c.s)("ManageStreamsButton", C ?? a, { entrypoint: I.GK.OTHER_BUTTON }),
                    }),
                });
            },
            animation: o.Y.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(A.A, {
                    ...e,
                    buttonRef: E,
                    label: S.intl.string(S.t.tmiYpF),
                    iconComponent: L,
                    onClick: (t) => {
                        (null != C || null != a) && (0, u.X)(C ?? a, u.O.STREAM_SETTINGS), e?.onClick(t);
                    },
                    ...d,
                }),
        })
    );
}
