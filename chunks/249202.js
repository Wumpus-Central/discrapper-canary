"use strict";
n.d(t, { E: () => x });
var i = n(627968),
    s = n(64700),
    l = n(732955),
    r = n(688810),
    a = n(342490),
    o = n(695800),
    d = n(652215),
    c = n(874864),
    u = n(339984),
    m = n(478644),
    g = n(985018);
function x(e) {
    let { guild: t, canManageGuild: n, buttonClassName: x } = e,
        { analyticsLocations: h } = (0, r.Ay)(),
        _ = t.features.has(d.GuildFeatures.BANNER),
        A = s.useCallback(
            (e) => {
                let { imageUri: n, file: i } = e;
                (0, o.fI)(t, h, n, i);
            },
            [h, t],
        ),
        p = s.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.p_)({
                        guild: t,
                        analyticsLocations: h,
                        analyticsSection: d.JJy.GUILD_BANNER,
                        analyticsObject: d.ZSU.BUTTON_CTA,
                        perks: (0, c.QR)(),
                    });
            },
            [h, t],
        ),
        f = s.useCallback(() => {
            (0, o.Nn)({
                uploadType: u.HL.GUILD_BANNER,
                maxFileSizeBytes: m.j,
                onComplete: A,
                analyticsLocation: { page: d.liQ.GUILD_SETTINGS, section: d.JJy.GUILD_BANNER },
                analyticsLocations: h,
            });
        }, [h, A]);
    return _
        ? (0, i.jsx)("div", {
              className: x,
              children: (0, i.jsx)(l.$nd, {
                  disabled: !(_ && n),
                  variant: "primary",
                  text: g.intl.string(g.t.yG2pUi),
                  onClick: f,
              }),
          })
        : (0, i.jsx)("div", { className: x, children: (0, i.jsx)(a.u, { onClick: p }) });
}
