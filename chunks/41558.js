n.d(t, { S: () => p });
var i = n(627968),
    l = n(64700),
    s = n(939249),
    r = n(688810),
    a = n(2553),
    o = n(664007),
    d = n(486020),
    c = n(997509),
    u = n(695800),
    m = n(652215),
    g = n(874864),
    h = n(478644),
    x = n(985018),
    _ = n(465919);
function p(e) {
    let { guild: t, canManageGuild: n } = e,
        p = t.features.has(m.GuildFeatures.INVITE_SPLASH),
        A = n && p,
        { analyticsLocations: E } = (0, r.Ay)(),
        f = l.useCallback((e) => {
            c.A.updateGuild({ splash: e });
        }, []),
        j = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.p_)({
                        guild: t,
                        analyticsLocations: E,
                        analyticsSection: m.JJy.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.ZSU.UPLOAD_IMAGE,
                        perks: (0, g.Lp)(),
                    });
            },
            [E, t],
        ),
        N = (0, i.jsx)(o.A, {
            image: t.splash,
            makeURL: (e) => (null != e ? d.Ay.getGuildSplashURL({ id: t.id, splash: e }) : null),
            disabled: !A,
            onChange: f,
            hint: x.intl.string(x.t.uPvxqJ),
            enabled: A,
            maxFileSizeBytes: h.j,
            onFileSizeError: () => (0, a.A)(h.j),
        });
    return p ? N : (0, i.jsx)(s.D, { "aria-hidden": !0, tabIndex: -1, className: _.U, onClick: j, children: N });
}
