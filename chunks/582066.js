n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(204418),
    c = n(731722),
    d = n(172751),
    u = n(446094),
    g = n(430824),
    m = n(594174),
    p = n(5192),
    f = n(978088),
    h = n(562915),
    b = n(388032),
    x = n(65992);
function j(e) {
    var t, n;
    let { guildId: i } = e,
        j = (0, a.e7)([g.Z], () => g.Z.getGuild(i)),
        v = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        { onAdoptTag: _, isAdopting: C } = (0, u.Z)(i),
        O =
            (null == v || null == (t = v.primaryGuild) ? void 0 : t.identityGuildId) === i &&
            (null == v || null == (n = v.primaryGuild) ? void 0 : n.identityEnabled) === !0;
    if (null != v && null != j && (0, c.jq)(j))
        return (0, r.jsxs)("div", {
            className: x.container,
            children: [
                (0, r.jsx)(s.Text, {
                    className: x.section,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: O ? b.intl.string(h.default["6xBCpG"]) : b.intl.string(h.default.eSRKez),
                }),
                (0, r.jsx)("div", { className: x.divider }),
                (0, r.jsxs)("div", {
                    className: l()(x.section, x.body),
                    children: [
                        (0, r.jsx)(f.l, {
                            avatar: (0, r.jsx)(o.Z, {
                                user: v,
                                guildId: i,
                                avatarSize: s.EFr.SIZE_40,
                                "aria-hidden": !0,
                            }),
                            decorations: (0, r.jsx)(d.m0, {
                                guildId: j.id,
                                guildBadge: j.profile.badge,
                                guildTag: j.profile.tag,
                                inline: !1,
                            }),
                            username: p.ZP.getName(i, null, v),
                            message: b.intl.string(b.t["6OSasb"]),
                        }),
                        (0, r.jsx)(s.Button, {
                            variant: "primary",
                            text: b.intl.string(b.t.cQDYRu),
                            onClick: _,
                            loading: C,
                            disabled: O,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        });
}
