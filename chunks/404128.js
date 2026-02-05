i.d(e, { default: () => p });
var n = i(627968);
i(64700);
var t = i(503698),
    l = i.n(t),
    d = i(311907),
    s = i(990078),
    r = i(397927),
    o = i(29086),
    g = i(581781),
    c = i(71393),
    u = i(287809),
    _ = i(685073),
    f = i(514661),
    m = i(985018),
    b = i(583970),
    h = i(581298);
function p(a) {
    let { guildId: e, ...i } = a,
        t = (0, d.bG)([c.A], () => c.A.getGuild(e)),
        p = (0, d.bG)([u.default], () => {
            let a = u.default.getCurrentUser()?.primaryGuild;
            return a?.identityGuildId === e && a?.identityEnabled === !0;
        }, [e]),
        { isAdopting: x, onAdoptTag: C, onEditProfile: j } = (0, f.A)(e, i.onClose);
    if (null != t && (0, _.Rg)(t) && (0, _.q0)(t))
        return (0, n.jsxs)(r.EOs, {
            "data-migration-pending": !0,
            className: h.yl,
            size: r.rIJ.DYNAMIC,
            ...i,
            parentComponent: "GuildTagAdoptModal",
            children: [
                (0, n.jsxs)(r.$mQ, {
                    "data-migration-pending": !0,
                    className: h.jE,
                    scrollbarType: "none",
                    children: [
                        (0, n.jsx)("div", {
                            className: h.X6,
                            children: (0, n.jsxs)("div", {
                                className: h.kb,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: h.N1,
                                        children: [
                                            (0, n.jsx)(r.Heading, {
                                                variant: "heading-lg/bold",
                                                children: m.intl.string(b.default.OvKPi0),
                                            }),
                                            (0, n.jsx)(r.Text, {
                                                variant: "text-md/normal",
                                                children: m.intl.string(b.default.kHxfDw),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(g.A, {
                                        className: h._S,
                                        guildId: t.id,
                                        guildName: t.name,
                                        guildIcon: t.icon,
                                        guildIconSize: 32,
                                        guildTag: t.profile.tag,
                                        guildBadge: t.profile.badge ?? "",
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: h.UD,
                                        children: [
                                            (0, n.jsx)(s.m, {
                                                text: m.intl.string(b.default.WlENZt),
                                                shouldShow: p,
                                                children: (0, n.jsx)(r.Button, {
                                                    variant: "primary",
                                                    text: m.intl.string(m.t.jwEaiX),
                                                    fullWidth: !0,
                                                    onClick: C,
                                                    loading: x,
                                                    disabled: p,
                                                }),
                                            }),
                                            (0, n.jsx)(r.Button, {
                                                variant: "secondary",
                                                text: m.intl.string(m.t.s5vZlQ),
                                                fullWidth: !0,
                                                onClick: j,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: l()(h.X6, h.pG),
                            children: (0, n.jsx)(o.A, {
                                className: h.uJ,
                                guildId: t.id,
                                tag: t.profile.tag,
                                badge: t.profile.badge ?? "",
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(r.s_y, { "data-migration-pending": !0, className: h.VN, onClick: i.onClose }),
            ],
        });
}
