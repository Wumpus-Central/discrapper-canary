r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(686546),
    u = r(544384),
    c = r(76021),
    d = r(592125),
    f = r(594174),
    _ = r(834348),
    h = r(74538),
    p = r(618158),
    m = r(871499),
    g = r(981631),
    E = r(474936),
    v = r(388032),
    I = r(556656);
function T(e) {
    let { className: n } = e;
    return (0, i.jsx)(o.SettingsIcon, {
        size: 'md',
        color: 'currentColor',
        className: n
    });
}
function b(e) {
    let { className: n } = e;
    return (0, i.jsxs)(a.Fragment, {
        children: [
            (0, i.jsx)(l.ZP, {
                className: n,
                mask: l.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, i.jsx)(T, {})
            }),
            (0, i.jsx)(_.Z, { className: I.badgeUpgrade })
        ]
    });
}
function y(e) {
    let { hideBadges: n = !1, stream: r, ...l } = e,
        _ = (0, s.e7)([f.default], () => h.ZP.isPremium(f.default.getCurrentUser(), E.p9.TIER_1)),
        I = (0, s.e7)([d.Z], () => d.Z.getChannel(null == r ? void 0 : r.channelId)),
        y = a.useMemo(() => (null != r ? [r] : []), [r]),
        S = a.useCallback(() => {
            null != I && (0, c.Z)(I.getGuildId(), I.id, g.jXE.STREAM_SETTINGS);
        }, [I]);
    if (null == r || null == I) return null;
    let A = T;
    return (
        !n && !_ && (A = b),
        (0, i.jsx)(o.Popout, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(p.Z, {
                    children: (0, i.jsx)(u.Z, {
                        channel: I,
                        currentUser: f.default.getCurrentUser(),
                        activeStreams: y,
                        onClose: n,
                        showReportOption: !0,
                        handleGoLive: S
                    })
                });
            },
            animation: o.Popout.Animation.FADE,
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
