n.d(t, { ZP: () => j });
var i = n(951288);
n(647438);
var r = n(442837),
    s = n(704215),
    a = n(198168),
    l = n(907862),
    o = n(570140),
    c = n(710845),
    d = n(645041),
    u = n(430824),
    m = n(562511),
    p = n(731722),
    g = n(446094),
    h = n(921944),
    f = n(388032);
let b = new c.Z("GuildTagCoachmark");
function x(e) {
    function t(t) {
        var n;
        o.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: s } = (0, g.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)),
        c = [
            {
                text: f.intl.string(f.t.jwEaiY),
                loading: n,
                onClick: r,
                variant: "primary",
            },
            {
                text: f.intl.string(f.t.s5vZlZ),
                onClick: s,
                variant: "secondary",
            },
        ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(l.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: a.P3.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: f.intl.formatToPlainString(f.t["m/Tc3t"], { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIi),
                actions: c,
                size: "md",
                onRequestClose: () => t(h.L.USER_DISMISS),
            }),
        ],
    });
}
function _(e) {
    function t(t) {
        var n;
        o.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            (0, d.Qd)(s.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, !0, h.L.DISMISS),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: c } = (0, g.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)),
        u = [
            {
                text: f.intl.string(f.t.jwEaiY),
                loading: n,
                onClick: r,
                variant: "primary",
            },
            {
                text: f.intl.string(f.t.s5vZlZ),
                onClick: c,
                variant: "secondary",
            },
        ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(l.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: a.P3.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: f.intl.formatToPlainString(f.t.VFqnyc, { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIi),
                actions: u,
                size: "md",
                onRequestClose: () => t(h.L.USER_DISMISS),
            }),
        ],
    });
}
function j(e) {
    let t = (0, r.e7)([u.Z], () => u.Z.getGuild(e.guildId)),
        n = (0, m.S3)(e.guildId);
    return null != t && (0, p.jq)(t) && null !== n
        ? "changed" === n
            ? (0, i.jsx)(x, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : (0, i.jsx)(_, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
        : (b.error("GuildTagCoachmark rendered without guildId or coachmark type."), e.children);
}
