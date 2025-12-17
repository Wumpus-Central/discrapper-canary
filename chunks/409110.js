n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    s = n(481060),
    l = n(485386),
    o = n(259580),
    c = n(598952),
    d = n(392739),
    u = n(916001),
    m = n(981631),
    x = n(388032),
    f = n(405122);
let h = "expanded-area";
function j(e) {
    let { attachments: t, role: n, roleLocked: i } = e,
        [l, m] = r.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(s.P3F, {
                className: f.viewContents,
                onClick: () => {
                    m((e) => !e);
                },
                "aria-expanded": l,
                "aria-controls": h,
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: l ? x.intl.string(x.t.DKNxgB) : x.intl.string(x.t.ESEKua),
                    }),
                    (0, a.jsx)(o.Z, {
                        className: f.caretIcon,
                        direction: l ? o.Z.Directions.UP : o.Z.Directions.DOWN,
                    }),
                ],
            }),
            (0, a.jsx)(s.LZC, { size: 12 }),
            l &&
                (0, a.jsxs)("ul", {
                    className: f.contentsContainer,
                    id: h,
                    children: [
                        (0, a.jsx)(d.Z, {
                            label: x.intl.string(x.t.DWYJua),
                            children: (0, a.jsx)("ul", {
                                className: f.attachmentGrid,
                                children: t.map((e) => (0, a.jsx)(c.Z, { attachment: e }, e.id)),
                            }),
                        }),
                        null != n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: f.separator }),
                                    (0, a.jsx)(d.Z, {
                                        label: x.intl.string(x.t.o9xphc),
                                        children: (0, a.jsx)(u.Z, {
                                            role: n,
                                            textVariant: "text-md/medium",
                                            locked: i,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function p(e) {
    var t;
    let { listing: n } = e,
        r = null != (t = n.attachments) ? t : [],
        s = (0, i.e7)([l.Z], () => {
            var e;
            return l.Z.getRole(n.guild_id, null != (e = n.role_id) ? e : m.lds);
        }),
        o = !n.has_entitlement;
    return 0 === r.length && null == s
        ? null
        : 0 === r.length && null != s
          ? (0, a.jsx)(u.Z, {
                role: s,
                textVariant: "text-md/medium",
                locked: o,
            })
          : (0, a.jsx)(j, {
                attachments: r,
                role: s,
                roleLocked: o,
            });
}
