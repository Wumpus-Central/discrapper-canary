n.d(t, {
    A: () => j,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    c = n(291661),
    o = n(685073),
    d = n(534400),
    u = n(514661),
    f = n(71393),
    g = n(287809),
    b = n(562153),
    m = n(29086),
    p = n(583970),
    x = n(985018),
    h = n(908742);

function j(e) {
    var t, n;
    let { guildId: i } = e,
        j = (0, s.bG)([f.A], () => f.A.getGuild(i)),
        O = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        { onAdoptTag: y, isAdopting: v } = (0, u.A)(i),
        A =
            (null == O || null == (t = O.primaryGuild) ? void 0 : t.identityGuildId) === i &&
            (null == O || null == (n = O.primaryGuild) ? void 0 : n.identityEnabled) === !0;
    if (null != O && null != j && (0, o.q0)(j))
        return (0, r.jsxs)("div", {
            className: h.kL,
            children: [
                (0, r.jsx)(a.Text, {
                    className: h.uW,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: A ? x.intl.string(p.default["6xBCpG"]) : x.intl.string(p.default.eSRKez),
                }),
                (0, r.jsx)("div", {
                    className: h.yF,
                }),
                (0, r.jsxs)("div", {
                    className: l()(h.uW, h.rf),
                    children: [
                        (0, r.jsx)(m.V, {
                            avatar: (0, r.jsx)(c.A, {
                                user: O,
                                guildId: i,
                                avatarSize: a._3J.SIZE_40,
                                "aria-hidden": !0,
                            }),
                            decorations: (0, r.jsx)(d.o9, {
                                guildId: j.id,
                                guildBadge: j.profile.badge,
                                guildTag: j.profile.tag,
                                inline: !1,
                            }),
                            username: b.Ay.getName(i, null, O),
                            message: x.intl.string(x.t["6OSasb"]),
                        }),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: x.intl.string(x.t.cQDYRu),
                            onClick: y,
                            loading: v,
                            disabled: A,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        });
}
