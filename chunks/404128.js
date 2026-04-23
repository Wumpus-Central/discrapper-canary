i.d(a, { default: () => N });
var t = i(627968);
i(64700);
var l = i(503698),
    n = i.n(l),
    d = i(17928),
    s = i(990078),
    r = i(935462),
    o = i(534514),
    c = i(834730),
    u = i(821609),
    g = i(319756),
    _ = i(581781),
    m = i(71393),
    f = i(287809),
    x = i(685073),
    h = i(514661),
    b = i(985018),
    p = i(661023),
    C = i(393125);
function N(e) {
    let { guildId: a, ...i } = e,
        l = (0, d.bG)([m.A], () => m.A.getGuild(a)),
        N = (0, d.bG)([f.default], () => {
            let e = f.default.getCurrentUser()?.primaryGuild;
            return e?.identityGuildId === a && e?.identityEnabled === !0;
        }, [a]),
        { isAdopting: j, onAdoptTag: v, onEditProfile: I } = (0, h.A)(a, i.onClose);
    if (null != l && (0, x.Rg)(l) && (0, x.q0)(l))
        return (0, t.jsxs)(r.EO, {
            "data-migration-pending": !0,
            className: C.yl,
            size: r.rI.DYNAMIC,
            ...i,
            parentComponent: "GuildTagAdoptModal",
            children: [
                (0, t.jsxs)(r.$m, {
                    "data-migration-pending": !0,
                    className: C.jE,
                    scrollbarType: "none",
                    children: [
                        (0, t.jsx)("div", {
                            className: C.X6,
                            children: (0, t.jsxs)("div", {
                                className: C.kb,
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: C.N1,
                                        children: [
                                            (0, t.jsx)(o.D, {
                                                variant: "heading-lg/bold",
                                                children: b.intl.string(p.default.OvKPi0),
                                            }),
                                            (0, t.jsx)(c.E, {
                                                variant: "text-md/normal",
                                                children: b.intl.string(p.default.kHxfDw),
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)(_.A, {
                                        className: C._S,
                                        guildId: l.id,
                                        guildName: l.name,
                                        guildIcon: l.icon,
                                        guildIconSize: 32,
                                        guildTag: l.profile.tag,
                                        guildBadge: l.profile.badge ?? "",
                                    }),
                                    (0, t.jsxs)("div", {
                                        className: C.UD,
                                        children: [
                                            (0, t.jsx)(s.m, {
                                                text: b.intl.string(p.default.WlENZt),
                                                shouldShow: N,
                                                children: (0, t.jsx)(u.$, {
                                                    variant: "primary",
                                                    text: b.intl.string(b.t.jwEaiX),
                                                    fullWidth: !0,
                                                    onClick: v,
                                                    loading: j,
                                                    disabled: N,
                                                }),
                                            }),
                                            (0, t.jsx)(u.$, {
                                                variant: "secondary",
                                                text: b.intl.string(b.t.s5vZlQ),
                                                fullWidth: !0,
                                                onClick: I,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, t.jsx)("div", {
                            className: n()(C.X6, C.pG),
                            children: (0, t.jsx)(g.A, {
                                className: C.uJ,
                                guildId: l.id,
                                tag: l.profile.tag,
                                badge: l.profile.badge ?? "",
                            }),
                        }),
                    ],
                }),
                (0, t.jsx)(r.s_, { "data-migration-pending": !0, className: C.VN, onClick: i.onClose }),
            ],
        });
}
