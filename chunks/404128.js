l.d(a, { default: () => v });
var d = l(477900);
l(582128);
var e = l(503698),
    n = l.n(e),
    s = l(17928),
    t = l(935462),
    r = l(534514),
    c = l(834730),
    g = l(866665),
    o = l(821609),
    u = l(483625),
    m = l(581781),
    p = l(71393),
    h = l(287809),
    x = l(685073),
    j = l(514661),
    f = l(105292),
    N = l(690344),
    b = l(79744);
function v(i) {
    let { guildId: a, ...l } = i,
        e = (0, s.bG)([p.A], () => p.A.getGuild(a)),
        v = (0, s.bG)(
            [h.default],
            () => {
                let i = h.default.getCurrentUser()?.primaryGuild;
                return i?.identityGuildId === a && i?.identityEnabled === !0;
            },
            [a],
        ),
        { isAdopting: C, onAdoptTag: k, onEditProfile: y } = (0, j.A)(a, l.onClose);
    if (null != e && (0, x.Rg)(e) && (0, x.q0)(e))
        return (0, d.jsxs)(t.EO, {
            "data-migration-pending": !0,
            className: b.yl,
            size: t.rI.DYNAMIC,
            ...l,
            parentComponent: "GuildTagAdoptModal",
            children: [
                (0, d.jsxs)(t.$m, {
                    "data-migration-pending": !0,
                    className: b.jE,
                    scrollbarType: "none",
                    children: [
                        (0, d.jsx)("div", {
                            className: b.X6,
                            children: (0, d.jsxs)("div", {
                                className: b.kb,
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: b.N1,
                                        children: [
                                            (0, d.jsx)(r.D, {
                                                variant: "heading-lg/semibold",
                                                children: f.intl.string(N.default.OvKPi0),
                                            }),
                                            (0, d.jsx)(c.E, {
                                                variant: "body-md/normal",
                                                children: f.intl.string(N.default.kHxfDw),
                                            }),
                                        ],
                                    }),
                                    (0, d.jsx)(m.A, {
                                        className: b._S,
                                        guildId: e.id,
                                        guildName: e.name,
                                        guildIcon: e.icon,
                                        guildIconSize: 32,
                                        guildTag: e.profile.tag,
                                        guildBadge: e.profile.badge ?? "",
                                    }),
                                    (0, d.jsxs)("div", {
                                        className: b.UD,
                                        children: [
                                            (0, d.jsx)(g.m, {
                                                text: f.intl.string(N.default.WlENZt),
                                                shouldShow: v,
                                                children: (0, d.jsx)(o.$, {
                                                    variant: "primary",
                                                    text: f.intl.string(f.t.jwEaiX),
                                                    fullWidth: !0,
                                                    onClick: k,
                                                    loading: C,
                                                    disabled: v,
                                                }),
                                            }),
                                            (0, d.jsx)(o.$, {
                                                variant: "secondary",
                                                text: f.intl.string(f.t.s5vZlQ),
                                                fullWidth: !0,
                                                onClick: y,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: n()(b.X6, b.pG),
                            children: (0, d.jsx)(u.A, {
                                className: b.uJ,
                                guildId: e.id,
                                tag: e.profile.tag,
                                badge: e.profile.badge ?? "",
                            }),
                        }),
                    ],
                }),
                (0, d.jsx)(t.s_, { "data-migration-pending": !0, className: b.VN, onClick: l.onClose }),
            ],
        });
}
