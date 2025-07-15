n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    l = n(481060),
    d = n(204418),
    o = n(731722),
    c = n(172751),
    u = n(446094),
    h = n(430824),
    f = n(594174),
    m = n(5192),
    p = n(742409),
    x = n(195196),
    g = n(388032),
    b = n(816123);
function y(e) {
    var t, n;
    let { guildId: i } = e,
        y = (0, s.e7)([h.Z], () => h.Z.getGuild(i)),
        j = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        { onAdoptTag: v, isAdopting: C } = (0, u.Z)(i),
        N = (null == j || null == (t = j.primaryGuild) ? void 0 : t.identityGuildId) === i && (null == j || null == (n = j.primaryGuild) ? void 0 : n.identityEnabled) === !0;
    if (null != j && null != y && (0, o.jq)(y))
        return (0, r.jsxs)('div', {
            className: b.container,
            children: [
                (0, r.jsx)(l.Text, {
                    className: b.section,
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: N ? g.intl.string(x.default['6xBCpK']) : g.intl.string(x.default.eSRKe3)
                }),
                (0, r.jsx)('div', { className: b.divider }),
                (0, r.jsxs)('div', {
                    className: a()(b.section, b.body),
                    children: [
                        (0, r.jsx)(p.l, {
                            avatar: (0, r.jsx)(d.Z, {
                                user: j,
                                guildId: i,
                                avatarSize: l.EFr.SIZE_40,
                                'aria-hidden': !0
                            }),
                            decorations: (0, r.jsx)(c.m0, {
                                guildId: y.id,
                                guildBadge: y.profile.badge,
                                guildTag: y.profile.tag,
                                inline: !1
                            }),
                            username: m.ZP.getName(i, null, j),
                            message: g.intl.string(g.t['6OSasb'])
                        }),
                        (0, r.jsx)(l.zxk, {
                            variant: 'primary',
                            text: g.intl.string(g.t.cQDYRk),
                            onClick: v,
                            loading: C,
                            disabled: N,
                            fullWidth: !0
                        })
                    ]
                })
            ]
        });
}
