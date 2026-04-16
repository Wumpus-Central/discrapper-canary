"use strict";
n.d(t, { B: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(664007),
    o = n(486020),
    d = n(695800),
    c = n(652215),
    u = n(874864),
    m = n(339984),
    g = n(478644),
    x = n(985018),
    h = n(19420);
function _(e) {
    let { guild: t, canManageGuild: n } = e,
        _ = t.features.has(c.GuildFeatures.BANNER),
        A = t.features.has(c.GuildFeatures.ANIMATED_BANNER),
        p = _ && n,
        { analyticsLocations: f } = (0, r.Ay)(),
        j = s.useCallback(
            (e, n) => {
                (0, d.fI)(t, f, e, n);
            },
            [f, t],
        ),
        N = s.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.p_)({
                        guild: t,
                        analyticsLocations: f,
                        analyticsSection: c.JJy.GUILD_BANNER,
                        analyticsObject: c.ZSU.UPLOAD_IMAGE,
                        perks: (0, u.QR)(),
                    });
            },
            [f, t],
        ),
        E = (0, i.jsx)(a.A, {
            image: t.banner,
            makeURL: (e) => (null != e ? o.Ay.getGuildBannerURL({ id: t.id, banner: e }, A) : null),
            disabled: !p,
            onChange: j,
            hint: x.intl.string(x.t.uPvxqJ),
            onOpenImageSelectModal: () =>
                (0, d.Nn)({
                    uploadType: m.HL.GUILD_BANNER,
                    maxFileSizeBytes: g.j,
                    onComplete: (e) => {
                        let { imageUri: t, file: n } = e;
                        return j(t, n);
                    },
                    analyticsLocation: { page: c.liQ.GUILD_SETTINGS, section: c.JJy.GUILD_BANNER },
                    analyticsLocations: f,
                }),
            enabled: p,
        });
    return _ ? E : (0, i.jsx)(l.DUT, { "aria-hidden": !0, tabIndex: -1, className: h.U, onClick: N, children: E });
}
