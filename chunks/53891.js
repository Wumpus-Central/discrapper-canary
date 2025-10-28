n.d(t, { ZP: () => j });
var a = n(951288);
n(647438);
var r = n(442837),
    l = n(704215),
    i = n(198168),
    o = n(907862),
    s = n(570140),
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
        s.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: l } = (0, h.Z)(e.guild.id, () => t(x.L.TAKE_ACTION)),
        c = [
            {
                text: f.intl.string(f.t.jwEaiX),
                loading: n,
                onClick: r,
                variant: "primary",
            },
            {
                text: f.intl.string(f.t.s5vZlQ),
                onClick: l,
                variant: "secondary",
            },
        ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(o.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: f.intl.formatToPlainString(f.t["m/Tc3n"], { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIr),
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
        s.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            (0, d.Qd)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, !0, x.L.DISMISS),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: r, onEditProfile: c } = (0, h.Z)(e.guild.id, () => t(x.L.TAKE_ACTION)),
        u = [
            {
                text: f.intl.string(f.t.jwEaiX),
                loading: n,
                onClick: r,
                variant: "primary",
            },
            {
                text: f.intl.string(f.t.s5vZlQ),
                onClick: c,
                variant: "secondary",
            },
        ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(o.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: f.intl.formatToPlainString(f.t.VFqnyU, { guildName: e.guild.name }),
                body: f.intl.string(f.t.DrAXIr),
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
