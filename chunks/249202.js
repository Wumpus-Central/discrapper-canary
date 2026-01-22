n.d(t, { E: () => b });
var r = n(627968),
    i = n(64700),
    l = n(732955),
    s = n(688810),
    a = n(342490),
    c = n(695800),
    o = n(652215),
    d = n(874864),
    u = n(339984),
    f = n(478644),
    g = n(985018);
function b(e) {
    let { guild: t, canManageGuild: n, buttonClassName: b } = e,
        { analyticsLocations: m } = (0, s.Ay)(),
        p = t.features.has(o.GuildFeatures.BANNER),
        x = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, c.fI)(t, m, n, r);
            },
            [m, t],
        ),
        h = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, c.p_)({
                        guild: t,
                        analyticsLocations: m,
                        analyticsSection: o.JJy.GUILD_BANNER,
                        analyticsObject: o.ZSU.BUTTON_CTA,
                        perks: (0, d.QR)(),
                    });
            },
            [m, t],
        ),
        j = i.useCallback(() => {
            (0, c.Nn)({
                uploadType: u.HL.GUILD_BANNER,
                maxFileSizeBytes: f.j,
                onComplete: x,
                analyticsLocation: {
                    page: o.liQ.GUILD_SETTINGS,
                    section: o.JJy.GUILD_BANNER,
                },
                analyticsLocations: m,
            });
        }, [m, x]);
    return p
        ? (0, r.jsx)("div", {
              className: b,
              children: (0, r.jsx)(l.$nd, {
                  disabled: !(p && n),
                  variant: "primary",
                  text: g.intl.string(g.t.yG2pUi),
                  onClick: j,
              }),
          })
        : (0, r.jsx)("div", {
              className: b,
              children: (0, r.jsx)(a.u, { onClick: h }),
          });
}
