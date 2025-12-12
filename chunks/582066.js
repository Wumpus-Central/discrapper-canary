n.d(t, { Z: () => j });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(204418),
    c = n(731722),
    d = n(172751),
    u = n(446094),
    g = n(430824),
    f = n(594174),
    m = n(5192),
    b = n(978088),
    p = n(551199),
    h = n(388032),
    x = n(801912);
function j(e) {
    var t, n;
    let { guildId: i } = e,
        j = (0, a.e7)([g.Z], () => g.Z.getGuild(i)),
        v = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        { onAdoptTag: O, isAdopting: C } = (0, u.Z)(i),
        y =
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
                    children: y ? h.intl.string(p.default["6xBCpG"]) : h.intl.string(p.default.eSRKez),
                }),
                (0, r.jsx)("div", { className: x.divider }),
                (0, r.jsxs)("div", {
                    className: l()(x.section, x.body),
                    children: [
                        (0, r.jsx)(b.l, {
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
                            username: m.ZP.getName(i, null, v),
                            message: h.intl.string(h.t["6OSasb"]),
                        }),
                        (0, r.jsx)(s.Button, {
                            variant: "primary",
                            text: h.intl.string(h.t.cQDYRu),
                            onClick: O,
                            loading: C,
                            disabled: y,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        });
}
