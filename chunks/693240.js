n.d(t, { o: () => _, w: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(116833),
    a = n(265486),
    r = n(73153),
    o = n(626584),
    d = n(71393),
    c = n(685073),
    u = n(514661),
    p = n(49999),
    h = n(985018);
let m = new o.A("GuildTagAvailableCoachmark");
function _(e) {
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
    let { isAdopting: o, onAdoptTag: _, onEditProfile: A } = (0, u.A)(t?.id ?? null, () => n(p.i.TAKE_ACTION));
    if (null == t || !(0, c.q0)(t))
        return m.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let f = [
        { text: h.intl.string(h.t.jwEaiX), loading: o, onClick: _, variant: "primary" },
        { text: h.intl.string(h.t.s5vZlQ), onClick: A, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(a.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: l.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: h.intl.formatToPlainString(h.t["m/Tc3n"], { guildName: t.name }),
                body: h.intl.string(h.t.DrAXIr),
                actions: f,
                size: "md",
                onRequestClose: () => n(p.i.USER_DISMISS),
            }),
        ],
    });
}
function A(e) {
    let t = (0, s.bG)([d.A], () => d.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: o, onEditProfile: _ } = (0, u.A)(t?.id ?? null, () => n(p.i.TAKE_ACTION));
    if (null == t || !(0, c.q0)(t))
        return m.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let A = [
        { text: h.intl.string(h.t.jwEaiX), loading: r, onClick: o, variant: "primary" },
        { text: h.intl.string(h.t.s5vZlQ), onClick: _, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(a.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: l.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: h.intl.formatToPlainString(h.t.VFqnyU, { guildName: t.name }),
                body: h.intl.string(h.t.DrAXIr),
                actions: A,
                size: "md",
                onRequestClose: () => n(p.i.USER_DISMISS),
            }),
        ],
    });
}
