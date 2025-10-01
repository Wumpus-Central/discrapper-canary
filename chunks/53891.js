n.d(t, { ZP: () => j });
var a = n(951288);
n(647438);
var r = n(442837),
    i = n(704215),
    l = n(198168),
    s = n(907862),
    o = n(570140),
    c = n(710845),
    d = n(645041),
    u = n(430824),
    m = n(562511),
    p = n(731722),
    h = n(446094),
    x = n(921944),
    f = n(388032);
let b = new c.Z("GuildTagCoachmark");
function g(e) {
    function t(t) {
        var n;
        o.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: i } = (0, h.Z)(e.guild.id, () => t(x.L.TAKE_ACTION)),
        c = [
            {
                text: f.intl.string(f.t.jwEaiY),
                loading: n,
                onClick: r,
                variant: "primary",
            },
            {
                text: f.intl.string(f.t.s5vZlZ),
                onClick: i,
                variant: "secondary",
            },
        ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(s.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: l.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: f.intl.formatToPlainString(f.t["m/Tc3t"], { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIi),
                actions: c,
                size: "md",
                onRequestClose: () => t(x.L.USER_DISMISS),
            }),
        ],
    });
}
function v(e) {
    function t(t) {
        var n;
        o.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            (0, d.Qd)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, !0, x.L.DISMISS),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: c } = (0, h.Z)(e.guild.id, () => t(x.L.TAKE_ACTION)),
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
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(s.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: l.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: f.intl.formatToPlainString(f.t.VFqnyc, { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIi),
                actions: u,
                size: "md",
                onRequestClose: () => t(x.L.USER_DISMISS),
            }),
        ],
    });
}
function j(e) {
    let t = (0, r.e7)([u.Z], () => u.Z.getGuild(e.guildId)),
        n = (0, m.S3)(e.guildId);
    return null != t && (0, p.jq)(t) && null !== n
        ? "changed" === n
            ? (0, a.jsx)(g, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : (0, a.jsx)(v, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
        : (b.error("GuildTagCoachmark rendered without guildId or coachmark type."), e.children);
}
