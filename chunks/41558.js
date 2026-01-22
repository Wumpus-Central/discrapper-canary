n.d(t, { S: () => x });
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(688810),
    a = n(2553),
    c = n(664007),
    o = n(486020),
    d = n(997509),
    u = n(695800),
    f = n(652215),
    g = n(874864),
    b = n(478644),
    m = n(985018),
    p = n(340736);
function x(e) {
    let { guild: t, canManageGuild: n } = e,
        x = t.features.has(f.GuildFeatures.INVITE_SPLASH),
        h = n && x,
        { analyticsLocations: j } = (0, s.Ay)(),
        O = i.useCallback((e) => {
            d.A.updateGuild({ splash: e });
        }, []),
        y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.p_)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: f.JJy.GUILD_INVITE_BACKGROUND,
                        analyticsObject: f.ZSU.UPLOAD_IMAGE,
                        perks: (0, g.Lp)(),
                    });
            },
            [j, t],
        ),
        v = (0, r.jsx)(c.A, {
            image: t.splash,
            makeURL: (e) =>
                null != e
                    ? o.Ay.getGuildSplashURL({
                          id: t.id,
                          splash: e,
                      })
                    : null,
            disabled: !h,
            onChange: O,
            hint: m.intl.string(m.t.uPvxqJ),
            enabled: h,
            maxFileSizeBytes: b.j,
            onFileSizeError: () => (0, a.A)(b.j),
        });
    return x
        ? v
        : (0, r.jsx)(l.DUT, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: p.U,
              onClick: y,
              children: v,
          });
}
