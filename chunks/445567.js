n.d(t, {
    B: () => p,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(688810),
    a = n(664007),
    c = n(486020),
    o = n(695800),
    d = n(652215),
    u = n(874864),
    f = n(339984),
    g = n(478644),
    b = n(985018),
    m = n(664991);

function p(e) {
    let { guild: t, canManageGuild: n } = e,
        p = t.features.has(d.GuildFeatures.BANNER),
        x = t.features.has(d.GuildFeatures.ANIMATED_BANNER),
        h = p && n,
        { analyticsLocations: j } = (0, s.Ay)(),
        O = i.useCallback(
            (e, n) => {
                (0, o.fI)(t, j, e, n);
            },
            [j, t],
        ),
        y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.p_)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: d.JJy.GUILD_BANNER,
                        analyticsObject: d.ZSU.UPLOAD_IMAGE,
                        perks: (0, u.QR)(),
                    });
            },
            [j, t],
        ),
        v = (0, r.jsx)(a.A, {
            image: t.banner,
            makeURL: (e) =>
                null != e
                    ? c.Ay.getGuildBannerURL(
                          {
                              id: t.id,
                              banner: e,
                          },
                          x,
                      )
                    : null,
            disabled: !h,
            onChange: O,
            hint: b.intl.string(b.t.uPvxqJ),
            onOpenImageSelectModal: () =>
                (0, o.Nn)({
                    uploadType: f.HL.GUILD_BANNER,
                    maxFileSizeBytes: g.j,
                    onComplete: (e) => {
                        let { imageUri: t, file: n } = e;
                        return O(t, n);
                    },
                    analyticsLocation: {
                        page: d.liQ.GUILD_SETTINGS,
                        section: d.JJy.GUILD_BANNER,
                    },
                    analyticsLocations: j,
                }),
            enabled: h,
        });
    return p
        ? v
        : (0, r.jsx)(l.DUT, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: m.U,
              onClick: y,
              children: v,
          });
}
