t.d(r, { Z: () => j });
var n = t(255367);
t(73800);
var a = t(120356),
    i = t.n(a),
    s = t(442837),
    l = t(481060),
    o = t(204418),
    d = t(731722),
    c = t(172751),
    u = t(446094),
    f = t(430824),
    m = t(594174),
    p = t(5192),
    h = t(742409),
    x = t(195196),
    g = t(388032),
    y = t(816123);
function j(e) {
    var r, t;
    let { guildId: a } = e,
        j = (0, s.e7)([f.Z], () => f.Z.getGuild(a)),
        v = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        { onAdoptTag: b, isAdopting: C } = (0, u.Z)(a),
        N = (null == v || null == (r = v.primaryGuild) ? void 0 : r.identityGuildId) === a && (null == v || null == (t = v.primaryGuild) ? void 0 : t.identityEnabled) === !0;
    if (null != v && null != j && (0, d.jq)(j))
        return (0, n.jsxs)('div', {
            className: y.container,
            children: [
                (0, n.jsx)(l.Text, {
                    className: y.section,
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: N ? g.intl.string(x.default['6xBCpK']) : g.intl.string(x.default.eSRKe3)
                }),
                (0, n.jsx)('div', { className: y.divider }),
                (0, n.jsxs)('div', {
                    className: i()(y.section, y.body),
                    children: [
                        (0, n.jsx)(h.l, {
                            avatar: (0, n.jsx)(o.Z, {
                                user: v,
                                guildId: a,
                                avatarSize: l.EFr.SIZE_40,
                                'aria-hidden': !0
                            }),
                            decorations: (0, n.jsx)(c.m0, {
                                guildId: j.id,
                                guildBadge: j.profile.badge,
                                guildTag: j.profile.tag,
                                inline: !1
                            }),
                            username: p.ZP.getName(a, null, v),
                            message: g.intl.string(g.t['6OSasb'])
                        }),
                        (0, n.jsx)(l.zxk, {
                            variant: 'primary',
                            text: g.intl.string(g.t.cQDYRk),
                            onClick: b,
                            loading: C,
                            disabled: N,
                            fullWidth: !0
                        })
                    ]
                })
            ]
        });
}
