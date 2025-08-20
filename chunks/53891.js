n.d(t, { ZP: () => y });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(704215),
    o = n(198168),
    s = n(907862),
    l = n(570140),
    c = n(710845),
    u = n(645041),
    d = n(430824),
    f = n(562511),
    _ = n(731722),
    p = n(446094),
    h = n(921944),
    m = n(388032);
let g = new c.Z("GuildTagCoachmark");
function E(e) {
    function t(t) {
        var n;
        l.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: i, onEditProfile: a } = (0, p.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)),
        c = [
            {
                text: m.intl.string(m.t.jwEaiY),
                loading: n,
                onClick: i,
                variant: "primary",
            },
            {
                text: m.intl.string(m.t.s5vZlZ),
                onClick: a,
                variant: "secondary",
            },
        ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            e.children,
            (0, r.jsx)(s.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: o.P3.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: m.intl.formatToPlainString(m.t["m/Tc3t"], { guildName: e.guild.name }),
                body: m.intl.string(m.t.DrAXIi),
                actions: c,
                size: "md",
                onRequestClose: () => t(h.L.USER_DISMISS),
            }),
        ],
    });
}
function b(e) {
    function t(t) {
        var n;
        l.Z.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag },
        }),
            (0, u.Qd)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, !0, h.L.DISMISS),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    let { isAdopting: n, onAdoptTag: i, onEditProfile: c } = (0, p.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)),
        d = [
            {
                text: m.intl.string(m.t.jwEaiY),
                loading: n,
                onClick: i,
                variant: "primary",
            },
            {
                text: m.intl.string(m.t.s5vZlZ),
                onClick: c,
                variant: "secondary",
            },
        ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            e.children,
            (0, r.jsx)(s.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: o.P3.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: e.guild.id,
                        guildProfile: e.guild.profile,
                    },
                },
                title: m.intl.formatToPlainString(m.t.VFqnyc, { guildName: e.guild.name }),
                body: m.intl.string(m.t.DrAXIi),
                actions: d,
                size: "md",
                onRequestClose: () => t(h.L.USER_DISMISS),
            }),
        ],
    });
}
function y(e) {
    let t = (0, i.e7)([d.Z], () => d.Z.getGuild(e.guildId)),
        n = (0, f.S3)(e.guildId);
    return null != t && (0, _.jq)(t) && null !== n
        ? "changed" === n
            ? (0, r.jsx)(E, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : (0, r.jsx)(b, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
        : (g.error("GuildTagCoachmark rendered without guildId or coachmark type."), e.children);
}
