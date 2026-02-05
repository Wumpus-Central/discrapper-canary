"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(291661),
    d = n(685073),
    c = n(534400),
    u = n(514661),
    m = n(71393),
    g = n(287809),
    x = n(562153),
    h = n(29086),
    _ = n(583970),
    A = n(985018),
    p = n(908742);
function f(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([m.A], () => m.A.getGuild(t)),
        s = (0, r.bG)([g.default], () => g.default.getCurrentUser()),
        { onAdoptTag: f, isAdopting: j } = (0, u.A)(t),
        N = s?.primaryGuild?.identityGuildId === t && s?.primaryGuild?.identityEnabled === !0;
    if (null != s && null != n && (0, d.q0)(n))
        return (0, i.jsxs)("div", {
            className: p.kL,
            children: [
                (0, i.jsx)(a.Text, {
                    className: p.uW,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: N ? A.intl.string(_.default["6xBCpG"]) : A.intl.string(_.default.eSRKez),
                }),
                (0, i.jsx)("div", { className: p.yF }),
                (0, i.jsxs)("div", {
                    className: l()(p.uW, p.rf),
                    children: [
                        (0, i.jsx)(h.V, {
                            avatar: (0, i.jsx)(o.A, {
                                user: s,
                                guildId: t,
                                avatarSize: a._3J.SIZE_40,
                                "aria-hidden": !0,
                            }),
                            decorations: (0, i.jsx)(c.o9, {
                                guildId: n.id,
                                guildBadge: n.profile.badge,
                                guildTag: n.profile.tag,
                                inline: !1,
                            }),
                            username: x.Ay.getName(t, null, s),
                            message: A.intl.string(A.t["6OSasb"]),
                        }),
                        (0, i.jsx)(a.Button, {
                            variant: "primary",
                            text: A.intl.string(A.t.cQDYRu),
                            onClick: f,
                            loading: j,
                            disabled: N,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        });
}
