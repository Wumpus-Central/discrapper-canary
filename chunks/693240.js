n.d(t, { o: () => p, w: () => g });
var a = n(627968);
n(64700);
var s = n(311907),
    i = n(116833),
    l = n(342494),
    r = n(73153),
    o = n(626584),
    d = n(71393),
    c = n(685073),
    u = n(514661),
    m = n(49999),
    h = n(985018);
let x = new o.A("GuildTagAvailableCoachmark");
function p(e) {
    let t = (0, s.bG)([d.A], () => d.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            r.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: o, onAdoptTag: p, onEditProfile: g } = (0, u.A)(t?.id ?? null, () => n(m.i.TAKE_ACTION));
    if (null == t || !(0, c.q0)(t))
        return x.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let _ = [
        { text: h.intl.string(h.t.jwEaiX), loading: o, onClick: p, variant: "primary" },
        { text: h.intl.string(h.t.s5vZlQ), onClick: g, variant: "secondary" },
    ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(l.AM, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: h.intl.formatToPlainString(h.t["m/Tc3n"], { guildName: t.name }),
                body: h.intl.string(h.t.DrAXIr),
                actions: _,
                size: "md",
                onRequestClose: () => n(m.i.USER_DISMISS),
            }),
        ],
    });
}
function g(e) {
    let t = (0, s.bG)([d.A], () => d.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: o, onEditProfile: p } = (0, u.A)(t?.id ?? null, () => n(m.i.TAKE_ACTION));
    if (null == t || !(0, c.q0)(t))
        return x.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let g = [
        { text: h.intl.string(h.t.jwEaiX), loading: r, onClick: o, variant: "primary" },
        { text: h.intl.string(h.t.s5vZlQ), onClick: p, variant: "secondary" },
    ];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e.children,
            (0, a.jsx)(l.AM, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: h.intl.formatToPlainString(h.t.VFqnyU, { guildName: t.name }),
                body: h.intl.string(h.t.DrAXIr),
                actions: g,
                size: "md",
                onRequestClose: () => n(m.i.USER_DISMISS),
            }),
        ],
    });
}
