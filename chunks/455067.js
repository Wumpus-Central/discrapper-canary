n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(534514),
    s = n(834730),
    r = n(289873),
    o = n(263063),
    c = n(513461),
    d = n(654265),
    u = n(561446),
    h = n(287809),
    m = n(314307),
    A = n(985018),
    g = n(806700);
function p(e) {
    let { joinRequest: t, guild: n } = e,
        r = (0, l.bG)([h.default], () => h.default.getUser(t.userId));
    return (0, i.jsxs)("div", {
        className: g.I8,
        children: [
            (0, i.jsxs)("div", {
                className: g.Ov,
                children: [
                    null != n &&
                        (0, i.jsxs)("div", {
                            className: g.yB,
                            children: [
                                (0, i.jsx)(o.Ay, { guild: n, active: !0, size: o.Ay.Sizes.SMOL, className: g.$f }),
                                (0, i.jsx)(a.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != r &&
                        (0, i.jsx)(a.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: A.intl.format(A.t.jDV3i6, { username: r.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== c.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === c.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("hr", { className: g.g2 }),
                            (0, i.jsxs)("div", {
                                className: g.fs,
                                children: [
                                    (0, i.jsx)(s.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, i.jsx)(s.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function _(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: a } = (0, d.A)(t.id);
    return (0, i.jsx)(m.Ay, {
        channelId: t.id,
        className: g.kL,
        children:
            null != l && null != l.formResponses
                ? (0, i.jsxs)("div", {
                      className: g.KJ,
                      children: [
                          (0, i.jsx)("div", { children: (0, i.jsx)(p, { guild: a, joinRequest: l }) }),
                          (0, i.jsx)(u.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, i.jsx)(r.y, {})
                  : null,
    });
}
