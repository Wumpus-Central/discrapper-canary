r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(686546),
    u = r(544384),
    c = r(76021),
    d = r(592125),
    f = r(594174),
    p = r(834348),
    h = r(74538),
    _ = r(618158),
    m = r(871499),
    g = r(981631),
    E = r(474936),
    v = r(388032),
    y = r(556656);
function b(e) {
    let { className: n } = e;
    return (0, i.jsx)(s.SettingsIcon, {
        size: 'md',
        color: 'currentColor',
        className: n
    });
}
function I(e) {
    let { className: n } = e;
    return (0, i.jsxs)(a.Fragment, {
        children: [
            (0, i.jsx)(l.ZP, {
                className: n,
                mask: l.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, i.jsx)(b, {})
            }),
            (0, i.jsx)(p.Z, { className: y.badgeUpgrade })
        ]
    });
}
function T(e) {
    let { hideBadges: n = !1, stream: r, ...l } = e,
        p = (0, o.e7)([f.default], () => h.ZP.isPremium(f.default.getCurrentUser(), E.p9.TIER_1)),
        y = (0, o.e7)([d.Z], () => d.Z.getChannel(null == r ? void 0 : r.channelId)),
        T = a.useMemo(() => (null != r ? [r] : []), [r]),
        S = a.useCallback(() => {
            null != y && (0, c.Z)(y.getGuildId(), y.id, g.jXE.STREAM_SETTINGS);
        }, [y]);
    if (null == r || null == y) return null;
    let A = b;
    return (
        !n && !p && (A = I),
        (0, i.jsx)(s.Popout, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(_.Z, {
                    children: (0, i.jsx)(u.Z, {
                        channel: y,
                        currentUser: f.default.getCurrentUser(),
                        activeStreams: T,
                        onClose: n,
                        showReportOption: !0,
                        handleGoLive: S
                    })
                });
            },
            animation: s.Popout.Animation.FADE,
            children: (e) =>
                (0, i.jsx)(m.Z, {
                    ...e,
                    label: v.intl.string(v.t.tmiYpK),
                    iconComponent: A,
                    ...l
                })
        })
    );
}
