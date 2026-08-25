"use strict";
n.d(t, { A: () => O });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(625903),
    l = n(922016),
    o = n(688810),
    d = n(384059),
    c = n(480890),
    u = n(573435),
    _ = n(848362),
    E = n(471993),
    A = n(734057),
    h = n(287809),
    I = n(964989),
    f = n(158045),
    p = n(447404),
    T = n(204651),
    m = n(806931),
    g = n(202541),
    S = n(375708),
    N = n(138302);
function C(e) {
    let { className: t } = e;
    return (0, i.jsx)(s.SettingsIcon, { size: "md", color: "currentColor", className: t });
}
function R(e) {
    let { className: t } = e;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)(u.Ay, { className: t, mask: u.Ay.Masks.HEADER_BAR_BADGE_BOTTOM, children: (0, i.jsx)(C, {}) }),
            (0, i.jsx)(I.A, { className: N.s }),
        ],
    });
}
function O(e) {
    let { hideBadges: t = !1, stream: n, location: s, ...u } = e,
        I = r.useRef(null),
        { analyticsLocations: N, parentAnalyticsLocation: O } = (0, o.Ay)(),
        L = (0, a.bG)([h.default], () => f.Ay.isPremium(h.default.getCurrentUser(), g.PremiumTypes.TIER_1)),
        y = (0, a.bG)([A.A], () => A.A.getChannel(n?.channelId)),
        D = r.useMemo(() => (null != n ? [n] : []), [n]),
        v = r.useCallback(() => {
            null != y && (0, E.A)(y.getGuildId(), y.id, N);
        }, [y, N]);
    if (null == n || null == y) return null;
    let b = C;
    return (
        t || L || (b = R),
        (0, i.jsx)(l.Y, {
            targetElementRef: I,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(p.A, {
                    children: (0, i.jsx)(_.A, {
                        channel: y,
                        currentUser: h.default.getCurrentUser(),
                        activeStreams: D,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: v,
                        onInteraction: (0, c.s)("ManageStreamsButton", O ?? s, { entrypoint: m.GK.OTHER_BUTTON }),
                    }),
                });
            },
            animation: l.Y.Animation.FADE,
            children: (e) =>
                (0, i.jsx)(T.A, {
                    ...e,
                    buttonRef: I,
                    label: S.intl.string(S.t.tmiYpF),
                    iconComponent: b,
                    onClick: (t) => {
                        (null != O || null != s) && (0, d.X)(O ?? s, d.O.STREAM_SETTINGS), e?.onClick(t);
                    },
                    ...u,
                }),
        })
    );
}
