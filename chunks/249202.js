n.d(t, { E: () => h });
var i = n(627968),
    l = n(64700),
    s = n(821609),
    r = n(688810),
    a = n(342490),
    o = n(695800),
    d = n(652215),
    c = n(874864),
    u = n(339984),
    m = n(478644),
    g = n(985018);
function h(e) {
    let { guild: t, canManageGuild: n, buttonClassName: h } = e,
        { analyticsLocations: x } = (0, r.Ay)(),
        _ = t.features.has(d.GuildFeatures.BANNER),
        p = l.useCallback(
            (e) => {
                let { imageUri: n, file: i } = e;
                (0, o.fI)(t, x, n, i);
            },
            [x, t],
        ),
        A = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.p_)({
                        guild: t,
                        analyticsLocations: x,
                        analyticsSection: d.JJy.GUILD_BANNER,
                        analyticsObject: d.ZSU.BUTTON_CTA,
                        perks: (0, c.QR)(),
                    });
            },
            [x, t],
        ),
        E = l.useCallback(() => {
            (0, o.Nn)({
                uploadType: u.HL.GUILD_BANNER,
                maxFileSizeBytes: m.j,
                onComplete: p,
                analyticsLocation: { page: d.liQ.GUILD_SETTINGS, section: d.JJy.GUILD_BANNER },
                analyticsLocations: x,
            });
        }, [x, p]);
    return _
        ? (0, i.jsx)("div", {
              className: h,
              children: (0, i.jsx)(s.$, {
                  disabled: !(_ && n),
                  variant: "primary",
                  text: g.intl.string(g.t.yG2pUi),
                  onClick: E,
              }),
          })
        : (0, i.jsx)("div", { className: h, children: (0, i.jsx)(a.u, { onClick: A }) });
}
