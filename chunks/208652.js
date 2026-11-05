s.d(i, { default: () => v });
var n = s(477900);
s(582128);
var e = s(512750),
    l = s(855986),
    a = s(189213),
    r = s(939249),
    c = s(834730),
    o = s(866665),
    d = s(885574),
    u = s(95362),
    m = s(498642),
    x = s(682163),
    h = s(792996),
    j = s(599127);
function b(t) {
    let { guild: i, onClick: s } = t,
        e = (0, l.bG)([m.A], () => m.A.getMemberCount(i.id));
    return (0, n.jsxs)(r.D, {
        className: j._S,
        onClick: s,
        children: [
            (0, n.jsx)(x.Ay, { className: j.$f, guild: i, size: x.Ay.Sizes.MEDIUM, active: !0 }),
            (0, n.jsxs)("div", {
                className: j.OA,
                children: [
                    (0, n.jsx)(c.E, {
                        className: j.J5,
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: i.name,
                    }),
                    null != e &&
                        (0, n.jsx)(c.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: h.intl.formatToPlainString(h.t.zRl6XR, { count: e }),
                        }),
                ],
            }),
        ],
    });
}
function p(t) {
    let {
        title: i,
        subtitle: s,
        listLabel: e,
        listLabelTooltip: l,
        guilds: r,
        onSelectGuild: m,
        onClose: x,
        transitionState: h,
        returnRef: p,
    } = t;
    return (0, n.jsxs)(a.a, {
        transitionState: h,
        onClose: async function () {
            await x();
        },
        title: i,
        subtitle: s,
        actions: [],
        returnRef: p,
        children: [
            null != e &&
                (0, n.jsxs)("div", {
                    className: j.RO,
                    children: [
                        (0, n.jsx)(c.E, { variant: "body-sm/semibold", children: e }),
                        null != l &&
                            (0, n.jsx)(o.m, {
                                position: "top",
                                text: l,
                                children: (0, n.jsx)(d.CircleInformationIcon, { size: "xs", className: j.G }),
                            }),
                    ],
                }),
            (0, n.jsx)(u.Ip, {
                className: j.OW,
                children: r.map((t) => (0, n.jsx)(b, { guild: t, onClick: () => m(t) }, t.id)),
            }),
        ],
    });
}
var f = s(828162);
function v(t) {
    let { guilds: i, analyticsLocation: s, onClose: l, transitionState: a, returnRef: r } = t;
    return (0, n.jsx)(p, {
        transitionState: a,
        onClose: l,
        returnRef: r,
        title: h.intl.string(h.t.xO5QzM),
        subtitle: h.intl.string(h.t["h+7Yx3"]),
        guilds: i,
        onSelectGuild: async (t) => {
            (await l(), (0, f.A)(t.id, s, e.SL));
        },
    });
}
