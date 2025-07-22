t.d(r, { Z: () => j });
var n = t(255367);
t(73800);
var i = t(120356),
    a = t.n(i),
    s = t(442837),
    l = t(481060),
    o = t(204418),
    c = t(731722),
    d = t(172751),
    u = t(446094),
    m = t(430824),
    p = t(594174),
    h = t(5192),
    f = t(742409),
    g = t(195196),
    x = t(388032),
    y = t(816123);
function j(e) {
    var r, t;
    let { guildId: i } = e,
        j = (0, s.e7)([m.Z], () => m.Z.getGuild(i)),
        v = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        { onAdoptTag: C, isAdopting: b } = (0, u.Z)(i),
        N = (null == v || null == (r = v.primaryGuild) ? void 0 : r.identityGuildId) === i && (null == v || null == (t = v.primaryGuild) ? void 0 : t.identityEnabled) === !0;
    if (null != v && null != j && (0, c.jq)(j))
        return (0, n.jsxs)('div', {
            className: y.container,
            children: [
                (0, n.jsx)(l.Text, {
                    className: y.section,
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: N ? x.intl.string(g.default['6xBCpK']) : x.intl.string(g.default.eSRKe3)
                }),
                (0, n.jsx)('div', { className: y.divider }),
                (0, n.jsxs)('div', {
                    className: a()(y.section, y.body),
                    children: [
                        (0, n.jsx)(f.l, {
                            avatar: (0, n.jsx)(o.Z, {
                                user: v,
                                guildId: i,
                                avatarSize: l.EFr.SIZE_40,
                                'aria-hidden': !0
                            }),
                            decorations: (0, n.jsx)(d.m0, {
                                guildId: j.id,
                                guildBadge: j.profile.badge,
                                guildTag: j.profile.tag,
                                inline: !1
                            }),
                            username: h.ZP.getName(i, null, v),
                            message: x.intl.string(x.t['6OSasb'])
                        }),
                        (0, n.jsx)(l.zxk, {
                            variant: 'primary',
                            text: x.intl.string(x.t.cQDYRk),
                            onClick: C,
                            loading: b,
                            disabled: N,
                            fullWidth: !0
                        })
                    ]
                })
            ]
        });
}
