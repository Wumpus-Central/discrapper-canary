n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(263063),
    r = n(513461),
    o = n(654265),
    c = n(561446),
    d = n(287809),
    u = n(314307),
    h = n(985018),
    m = n(470725);
function A(e) {
    let { joinRequest: t, guild: n } = e,
        o = (0, l.bG)([d.default], () => d.default.getUser(t.userId));
    return (0, i.jsxs)("div", {
        className: m.I8,
        children: [
            (0, i.jsxs)("div", {
                className: m.Ov,
                children: [
                    null != n &&
                        (0, i.jsxs)("div", {
                            className: m.yB,
                            children: [
                                (0, i.jsx)(a.Ay, { guild: n, active: !0, size: a.Ay.Sizes.SMOL, className: m.$f }),
                                (0, i.jsx)(s.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != o &&
                        (0, i.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: h.intl.format(h.t.jDV3i6, { username: o.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== r.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === r.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("hr", { className: m.g2 }),
                            (0, i.jsxs)("div", {
                                className: m.fs,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: t,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function g(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: a } = (0, o.A)(t.id);
    return (0, i.jsx)(u.Ay, {
        channelId: t.id,
        className: m.kL,
        children:
            null != l && null != l.formResponses
                ? (0, i.jsxs)("div", {
                      className: m.KJ,
                      children: [
                          (0, i.jsx)("div", { children: (0, i.jsx)(A, { guild: a, joinRequest: l }) }),
                          (0, i.jsx)(c.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, i.jsx)(s.y$y, {})
                  : null,
    });
}
