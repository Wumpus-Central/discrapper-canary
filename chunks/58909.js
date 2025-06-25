t.d(n, { Z: () => y });
var r = t(255367);
t(73800);
var i = t(120356),
    a = t.n(i),
    l = t(442837),
    s = t(481060),
    d = t(204418),
    o = t(731722),
    c = t(172751),
    u = t(446094),
    m = t(430824),
    f = t(594174),
    h = t(5192),
    x = t(742409),
    p = t(195196),
    g = t(388032),
    b = t(816123);
function y(e) {
    var n, t;
    let { guildId: i } = e,
        y = (0, l.e7)([m.Z], () => m.Z.getGuild(i)),
        j = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        { onAdoptTag: v, isAdopting: C } = (0, u.Z)(i),
        N = (null == j || null == (n = j.primaryGuild) ? void 0 : n.identityGuildId) === i && (null == j || null == (t = j.primaryGuild) ? void 0 : t.identityEnabled) === !0;
    if (null != j && null != y && (0, o.jq)(y))
        return (0, r.jsxs)('div', {
            className: b.container,
            children: [
                (0, r.jsx)(s.Text, {
                    className: b.section,
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: N ? g.intl.string(p.default['6xBCpK']) : g.intl.string(p.default.eSRKe3)
                }),
                (0, r.jsx)('div', { className: b.divider }),
                (0, r.jsxs)('div', {
                    className: a()(b.section, b.body),
                    children: [
                        (0, r.jsx)(x.l, {
                            avatar: (0, r.jsx)(d.Z, {
                                user: j,
                                guildId: i,
                                avatarSize: s.EFr.SIZE_40,
                                'aria-hidden': !0
                            }),
                            decorations: (0, r.jsx)(c.m0, {
                                guildId: y.id,
                                guildBadge: y.profile.badge,
                                guildTag: y.profile.tag,
                                inline: !1
                            }),
                            username: h.ZP.getName(i, null, j),
                            message: g.intl.string(g.t['6OSasb'])
                        }),
                        (0, r.jsx)(s.zxk, {
                            onClick: v,
                            submitting: C,
                            disabled: N,
                            fullWidth: !0,
                            children: g.intl.string(g.t.cQDYRk)
                        })
                    ]
                })
            ]
        });
}
