l.d(a, { default: () => b });
var e = l(627968);
l(64700);
var d = l(503698),
    n = l.n(d),
    s = l(17928),
    t = l(990078),
    r = l(935462),
    c = l(534514),
    g = l(834730),
    o = l(821609),
    u = l(319756),
    m = l(581781),
    p = l(71393),
    h = l(287809),
    x = l(685073),
    j = l(514661),
    f = l(375708),
    N = l(661023),
    v = l(393125);
function b(i) {
    let { guildId: a, ...l } = i,
        d = (0, s.bG)([p.A], () => p.A.getGuild(a)),
        b = (0, s.bG)([h.default], () => {
            let i = h.default.getCurrentUser()?.primaryGuild;
            return i?.identityGuildId === a && i?.identityEnabled === !0;
        }, [a]),
        { isAdopting: C, onAdoptTag: k, onEditProfile: y } = (0, j.A)(a, l.onClose);
    if (null != d && (0, x.Rg)(d) && (0, x.q0)(d))
        return (0, e.jsxs)(r.EO, {
            "data-migration-pending": !0,
            className: v.yl,
            size: r.rI.DYNAMIC,
            ...l,
            parentComponent: "GuildTagAdoptModal",
            children: [
                (0, e.jsxs)(r.$m, {
                    "data-migration-pending": !0,
                    className: v.jE,
                    scrollbarType: "none",
                    children: [
                        (0, e.jsx)("div", {
                            className: v.X6,
                            children: (0, e.jsxs)("div", {
                                className: v.kb,
                                children: [
                                    (0, e.jsxs)("div", {
                                        className: v.N1,
                                        children: [
                                            (0, e.jsx)(c.D, {
                                                variant: "heading-lg/bold",
                                                children: f.intl.string(N.default.OvKPi0),
                                            }),
                                            (0, e.jsx)(g.E, {
                                                variant: "text-md/normal",
                                                children: f.intl.string(N.default.kHxfDw),
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(m.A, {
                                        className: v._S,
                                        guildId: d.id,
                                        guildName: d.name,
                                        guildIcon: d.icon,
                                        guildIconSize: 32,
                                        guildTag: d.profile.tag,
                                        guildBadge: d.profile.badge ?? "",
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: v.UD,
                                        children: [
                                            (0, e.jsx)(t.m, {
                                                text: f.intl.string(N.default.WlENZt),
                                                shouldShow: b,
                                                children: (0, e.jsx)(o.$, {
                                                    variant: "primary",
                                                    text: f.intl.string(f.t.jwEaiX),
                                                    fullWidth: !0,
                                                    onClick: k,
                                                    loading: C,
                                                    disabled: b,
                                                }),
                                            }),
                                            (0, e.jsx)(o.$, {
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
                        (0, e.jsx)("div", {
                            className: n()(v.X6, v.pG),
                            children: (0, e.jsx)(u.A, {
                                className: v.uJ,
                                guildId: d.id,
                                tag: d.profile.tag,
                                badge: d.profile.badge ?? "",
                            }),
                        }),
                    ],
                }),
                (0, e.jsx)(r.s_, { "data-migration-pending": !0, className: v.VN, onClick: l.onClose }),
            ],
        });
}
