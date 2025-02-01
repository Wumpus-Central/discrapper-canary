n.d(t, { Z: () => T });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(686546),
    l = n(544384),
    u = n(76021),
    c = n(592125),
    d = n(594174),
    f = n(834348),
    _ = n(74538),
    p = n(618158),
    h = n(871499),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(556656);
function y(e) {
    let { className: t } = e;
    return (0, i.jsx)(s.ewm, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function I(e) {
    let { className: t } = e;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)(o.ZP, {
                className: t,
                mask: o.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, i.jsx)(y, {})
            }),
            (0, i.jsx)(f.Z, { className: v.badgeUpgrade })
        ]
    });
}
function T(e) {
    let { hideBadges: t = !1, stream: n, ...o } = e,
        f = (0, a.e7)([d.default], () => _.ZP.isPremium(d.default.getCurrentUser(), g.p9.TIER_1)),
        v = (0, a.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.channelId)),
        T = r.useMemo(() => (null != n ? [n] : []), [n]),
        b = r.useCallback(() => {
            null != v && (0, u.Z)(v.getGuildId(), v.id, m.jXE.STREAM_SETTINGS);
        }, [v]);
    if (null == n || null == v) return null;
    let S = y;
    return (
        t || f || (S = I),
        (0, i.jsx)(s.yRy, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(p.Z, {
                    children: (0, i.jsx)(l.Z, {
                        channel: v,
                        currentUser: d.default.getCurrentUser(),
                        activeStreams: T,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: b
                    })
                });
            },
            animation: s.yRy.Animation.FADE,
            children: (e) =>
                (0, i.jsx)(h.Z, {
                    ...e,
                    label: E.intl.string(E.t.tmiYpK),
                    iconComponent: S,
                    ...o
                })
        })
    );
}
