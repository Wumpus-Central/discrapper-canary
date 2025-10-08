n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(204418),
    c = n(731722),
    d = n(172751),
    u = n(446094),
    g = n(430824),
    m = n(594174),
    p = n(5192),
    f = n(978088),
    h = n(755032),
    x = n(388032),
    b = n(820309);
function j(e) {
    var t, n;
    let { guildId: i } = e,
        j = (0, s.e7)([g.Z], () => g.Z.getGuild(i)),
        _ = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        { onAdoptTag: v, isAdopting: C } = (0, u.Z)(i),
        O =
            (null == _ || null == (t = _.primaryGuild) ? void 0 : t.identityGuildId) === i &&
            (null == _ || null == (n = _.primaryGuild) ? void 0 : n.identityEnabled) === !0;
    if (null != _ && null != j && (0, c.jq)(j))
        return (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(a.Text, {
                    className: b.section,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: O ? x.intl.string(h.default["6xBCpK"]) : x.intl.string(h.default.eSRKe3),
                }),
                (0, r.jsx)("div", { className: b.divider }),
                (0, r.jsxs)("div", {
                    className: l()(b.section, b.body),
                    children: [
                        (0, r.jsx)(f.l, {
                            avatar: (0, r.jsx)(o.Z, {
                                user: _,
                                guildId: i,
                                avatarSize: a.EFr.SIZE_40,
                                "aria-hidden": !0,
                            }),
                            decorations: (0, r.jsx)(d.m0, {
                                guildId: j.id,
                                guildBadge: j.profile.badge,
                                guildTag: j.profile.tag,
                                inline: !1,
                            }),
                            username: p.ZP.getName(i, null, _),
                            message: x.intl.string(x.t["6OSasb"]),
                        }),
                        (0, r.jsx)(a.zxk, {
                            variant: "primary",
                            text: x.intl.string(x.t.cQDYRk),
                            onClick: v,
                            loading: C,
                            disabled: O,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        });
}
