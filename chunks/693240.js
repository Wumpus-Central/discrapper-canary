n.d(t, {
    o: () => f,
    w: () => x,
});
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(116833),
    r = n(342494),
    s = n(73153),
    o = n(626584),
    c = n(71393),
    d = n(685073),
    u = n(514661),
    m = n(49999),
    p = n(985018);
let h = new o.A("GuildTagAvailableCoachmark");
function f(e) {
    var t;
    let n = (0, l.bG)([c.A], () => c.A.getGuild(e.guildId));
    function o(t) {
        var a, l;
        (null == n || null == (a = n.profile) ? void 0 : a.tag) != null &&
            s.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: n.id,
                lastSeenInfo: { tag: n.profile.tag },
            }),
            null == (l = e.onDismiss) || l.call(e, t);
    }
    let {
        isAdopting: f,
        onAdoptTag: x,
        onEditProfile: b,
    } = (0, u.A)(null != (t = null == n ? void 0 : n.id) ? t : null, () => o(m.i.TAKE_ACTION));
    if (null == n || !(0, d.q0)(n))
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
            (0, a.jsx)(r.AM, {
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
                onRequestClose: () => o(m.i.USER_DISMISS),
            }),
        ],
    });
}
function x(e) {
    var t;
    let n = (0, l.bG)([c.A], () => c.A.getGuild(e.guildId));
    function s(t) {
        var n;
        null == (n = e.onDismiss) || n.call(e, t);
    }
    let {
        isAdopting: o,
        onAdoptTag: f,
        onEditProfile: x,
    } = (0, u.A)(null != (t = null == n ? void 0 : n.id) ? t : null, () => s(m.i.TAKE_ACTION));
    if (null == n || !(0, d.q0)(n))
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
            (0, a.jsx)(r.AM, {
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
                onRequestClose: () => s(m.i.USER_DISMISS),
            }),
        ],
    });
}
