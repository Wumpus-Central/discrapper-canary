n.d(t, {
    $: () => x,
    f: () => f,
});
var a = n(54381);
n(473749);
var r = n(442837),
    i = n(198168),
    l = n(907862),
    s = n(570140),
    o = n(710845),
    c = n(430824),
    d = n(731722),
    u = n(446094),
    m = n(921944),
    p = n(388032);
let h = new o.Z("GuildTagAvailableCoachmark");
function f(e) {
    var t;
    let n = (0, r.e7)([c.Z], () => c.Z.getGuild(e.guildId));
    function o(t) {
        var a, r;
        (null == n || null == (a = n.profile) ? void 0 : a.tag) != null &&
            s.Z.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: n.id,
                lastSeenInfo: { tag: n.profile.tag },
            }),
            null == (r = e.onDismiss) || r.call(e, t);
    }
    let {
        isAdopting: f,
        onAdoptTag: x,
        onEditProfile: b,
    } = (0, u.Z)(null != (t = null == n ? void 0 : n.id) ? t : null, () => o(m.L.TAKE_ACTION));
    if (null == n || !(0, d.jq)(n))
        return h.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let g = [
        {
            text: p.intl.string(p.t.jwEaiX),
            loading: f,
            onClick: x,
            variant: "primary",
        },
        {
            text: p.intl.string(p.t.s5vZlQ),
            onClick: b,
            variant: "secondary",
        },
    ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(l.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: n.id,
                        guildProfile: n.profile,
                    },
                },
                title: p.intl.formatToPlainString(p.t["m/Tc3n"], { guildName: n.name }),
                body: p.intl.string(p.t.DrAXIr),
                actions: g,
                size: "md",
                onRequestClose: () => o(m.L.USER_DISMISS),
            }),
        ],
    });
}
function x(e) {
    var t;
    let n = (0, r.e7)([c.Z], () => c.Z.getGuild(e.guildId));
    function s(t) {
        var n;
        null == (n = e.onDismiss) || n.call(e, t);
    }
    let {
        isAdopting: o,
        onAdoptTag: f,
        onEditProfile: x,
    } = (0, u.Z)(null != (t = null == n ? void 0 : n.id) ? t : null, () => s(m.L.TAKE_ACTION));
    if (null == n || !(0, d.jq)(n))
        return h.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let b = [
        {
            text: p.intl.string(p.t.jwEaiX),
            loading: o,
            onClick: f,
            variant: "primary",
        },
        {
            text: p.intl.string(p.t.s5vZlQ),
            onClick: x,
            variant: "secondary",
        },
    ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(l.J2, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: {
                        guildId: n.id,
                        guildProfile: n.profile,
                    },
                },
                title: p.intl.formatToPlainString(p.t.VFqnyU, { guildName: n.name }),
                body: p.intl.string(p.t.DrAXIr),
                actions: b,
                size: "md",
                onRequestClose: () => s(m.L.USER_DISMISS),
            }),
        ],
    });
}
