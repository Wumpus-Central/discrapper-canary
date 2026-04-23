n.d(t, { B: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(939249),
    r = n(688810),
    a = n(664007),
    o = n(486020),
    d = n(695800),
    c = n(652215),
    u = n(874864),
    m = n(339984),
    g = n(478644),
    h = n(985018),
    x = n(19420);
function _(e) {
    let { guild: t, canManageGuild: n } = e,
        _ = t.features.has(c.GuildFeatures.BANNER),
        p = t.features.has(c.GuildFeatures.ANIMATED_BANNER),
        A = _ && n,
        { analyticsLocations: E } = (0, r.Ay)(),
        f = l.useCallback(
            (e, n) => {
                (0, d.fI)(t, E, e, n);
            },
            [E, t],
        ),
        j = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.p_)({
                        guild: t,
                        analyticsLocations: E,
                        analyticsSection: c.JJy.GUILD_BANNER,
                        analyticsObject: c.ZSU.UPLOAD_IMAGE,
                        perks: (0, u.QR)(),
                    });
            },
            [E, t],
        ),
        N = (0, i.jsx)(a.A, {
            image: t.banner,
            makeURL: (e) => (null != e ? o.Ay.getGuildBannerURL({ id: t.id, banner: e }, p) : null),
            disabled: !A,
            onChange: f,
            hint: h.intl.string(h.t.uPvxqJ),
            onOpenImageSelectModal: () =>
                (0, d.Nn)({
                    uploadType: m.HL.GUILD_BANNER,
                    maxFileSizeBytes: g.j,
                    onComplete: (e) => {
                        let { imageUri: t, file: n } = e;
                        return f(t, n);
                    },
                    analyticsLocation: { page: c.liQ.GUILD_SETTINGS, section: c.JJy.GUILD_BANNER },
                    analyticsLocations: E,
                }),
            enabled: A,
        });
    return _ ? N : (0, i.jsx)(s.D, { "aria-hidden": !0, tabIndex: -1, className: x.U, onClick: j, children: N });
}
