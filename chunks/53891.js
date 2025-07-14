n.d(t, { ZP: () => j });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(704215),
    a = n(907862),
    l = n(570140),
    o = n(710845),
    c = n(645041),
    d = n(430824),
    u = n(562511),
    m = n(731722),
    p = n(413915),
    g = n(446094),
    h = n(921944),
    f = n(388032);
let b = new o.Z('GuildTagCoachmark');
function x(e) {
    function t(t) {
        var n;
        (l.Z.dispatch({
            type: 'GUILD_TAG_CHANGED_COACHMARK_SEEN',
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag }
        }),
            null == (n = e.onDismiss) || n.call(e, t));
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: s } = (0, g.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)),
        o = [
            {
                text: f.intl.string(f.t.jwEaiY),
                loading: n,
                onClick: r,
                variant: 'primary'
            },
            {
                text: f.intl.string(f.t.s5vZlZ),
                onClick: s,
                variant: 'secondary'
            }
        ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(a.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: 'top',
                asset: (0, i.jsx)(p.Z, {
                    guildId: e.guild.id,
                    guildProfile: e.guild.profile
                }),
                title: f.intl.formatToPlainString(f.t['m/Tc3t'], { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIi),
                actions: o,
                size: 'md',
                onRequestClose: () => t(h.L.USER_DISMISS)
            })
        ]
    });
}
function _(e) {
    function t(t) {
        var n;
        (l.Z.dispatch({
            type: 'GUILD_TAG_CHANGED_COACHMARK_SEEN',
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag }
        }),
            (0, c.Qd)(s.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, !0, h.L.DISMISS),
            null == (n = e.onDismiss) || n.call(e, t));
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: o } = (0, g.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)),
        d = [
            {
                text: f.intl.string(f.t.jwEaiY),
                loading: n,
                onClick: r,
                variant: 'primary'
            },
            {
                text: f.intl.string(f.t.s5vZlZ),
                onClick: o,
                variant: 'secondary'
            }
        ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(a.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: 'top',
                asset: (0, i.jsx)(p.Z, {
                    guildId: e.guild.id,
                    guildProfile: e.guild.profile
                }),
                title: f.intl.formatToPlainString(f.t.VFqnyc, { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIi),
                actions: d,
                size: 'md',
                onRequestClose: () => t(h.L.USER_DISMISS)
            })
        ]
    });
}
function j(e) {
    let t = (0, r.e7)([d.Z], () => d.Z.getGuild(e.guildId)),
        n = (0, u.S3)(e.guildId);
    return null != t && (0, m.jq)(t) && null !== n
        ? 'changed' === n
            ? (0, i.jsx)(x, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children
              })
            : (0, i.jsx)(_, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children
              })
        : (b.error('GuildTagCoachmark rendered without guildId or coachmark type.'), e.children);
}
