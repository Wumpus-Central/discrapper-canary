n.d(t, { A: () => j });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(834730),
    o = n(778712),
    d = n(821609),
    c = n(162232),
    u = n(685073),
    m = n(534400),
    g = n(514661),
    h = n(71393),
    x = n(287809),
    _ = n(562153),
    p = n(29086),
    A = n(661023),
    E = n(985018),
    f = n(878485);
function j(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([h.A], () => h.A.getGuild(t)),
        l = (0, r.bG)([x.default], () => x.default.getCurrentUser()),
        { onAdoptTag: j, isAdopting: N } = (0, g.A)(t),
        I = l?.primaryGuild?.identityGuildId === t && l?.primaryGuild?.identityEnabled === !0;
    if (null != l && null != n && (0, u.q0)(n))
        return (0, i.jsxs)("div", {
            className: f.kL,
            children: [
                (0, i.jsx)(a.E, {
                    className: f.uW,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: I ? E.intl.string(A.default["6xBCpG"]) : E.intl.string(A.default.eSRKez),
                }),
                (0, i.jsx)("div", { className: f.yF }),
                (0, i.jsxs)("div", {
                    className: s()(f.uW, f.rf),
                    children: [
                        (0, i.jsx)(p.V, {
                            avatar: (0, i.jsx)(c.A, {
                                user: l,
                                guildId: t,
                                avatarSize: o._3.SIZE_40,
                                "aria-hidden": !0,
                            }),
                            decorations: (0, i.jsx)(m.o9, {
                                guildId: n.id,
                                guildBadge: n.profile.badge,
                                guildTag: n.profile.tag,
                                inline: !1,
                            }),
                            username: _.Ay.getName(t, null, l),
                            message: E.intl.string(E.t["6OSasb"]),
                        }),
                        (0, i.jsx)(d.$, {
                            variant: "primary",
                            text: E.intl.string(E.t.cQDYRu),
                            onClick: j,
                            loading: N,
                            disabled: I,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        });
}
