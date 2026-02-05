l.d(t, { Ay: () => C, Uq: () => E, sC: () => I });
var n = l(627968);
l(64700);
var s = l(503698),
    i = l.n(s),
    a = l(311907),
    r = l(990078),
    c = l(397927),
    u = l(696451),
    d = l(427262),
    o = l(722260),
    m = l(563312),
    x = l(826383),
    v = l(794782),
    h = l(974930),
    N = l(847494),
    g = l(850183),
    p = l(103355),
    j = l(985018),
    A = l(680028);
function E(e) {
    let { className: t, creator: l, guildId: s, isNew: N, guildEvent: g, eventPreview: E, recurrenceId: I } = e,
        C = (0, x.A)(s, g.id, I),
        f = g ?? E,
        T = (0, a.bG)([u.Ay], () => u.Ay.getNick(s, l?.id), [s, l]);
    I = null == f || null != I ? I : (0, h.G3)(f);
    let { startTime: S } = (0, m.Ay)(g ?? E, I),
        y = (0, o.A)(I, g.id),
        _ = f?.scheduled_start_time != null ? (0, h.j)(y, S, new Date(f.scheduled_start_time)) : null;
    if (null == f) return null;
    let { entity_type: k, status: R, recurrence_rule: L } = f;
    return (0, n.jsxs)("div", {
        className: i()(A.II, t),
        children: [
            (0, n.jsx)(p.L, {
                startTime: S.toISOString(),
                status: _ ?? R,
                eventType: k,
                isNew: N,
                recurrenceRule: (0, v.Sn)(L),
                guildEventId: g.id,
                recurrenceId: I,
            }),
            (0, n.jsx)("div", { className: A.jH }),
            null != l &&
                (0, n.jsx)(r.m, {
                    text: j.intl.formatToPlainString(j.t["+3iypQ"], { username: T ?? d.Ay.getName(l) }),
                    children: (0, n.jsx)(c.euF, {
                        src: l.getAvatarURL(s, 20),
                        size: c._3J.SIZE_20,
                        "aria-label": T ?? l.username,
                        className: A.xL,
                    }),
                }),
            (0, n.jsx)(r.m, {
                text: j.intl.formatToPlainString(j.t["+DLsD8"], { count: C }),
                children: (0, n.jsxs)("div", {
                    className: A.T_,
                    children: [
                        (0, n.jsx)(c.nFg, { size: "xxs", color: "currentColor", className: A.pO }),
                        (0, n.jsx)(c.Text, { color: "text-default", variant: "text-sm/normal", children: C }),
                    ],
                }),
            }),
        ],
    });
}
function I(e) {
    let {
        headerVariant: t = "heading-lg/medium",
        descriptionClassName: l,
        name: s,
        description: a,
        truncate: r,
        guildId: u,
        imageSource: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: i()({ [A.dT]: null != d }),
        children: [
            (0, n.jsxs)("div", {
                className: i()({ [A.FD]: null != d }),
                children: [
                    (0, n.jsx)(c.Heading, { variant: t, selectable: !0, className: A.eq, children: s }),
                    null != a && (0, n.jsx)(N.A, { description: a, className: i()(l, A.h_), truncate: r, guildId: u }),
                ],
            }),
            null != d &&
                (0, n.jsx)("div", { className: A.iT, children: (0, n.jsx)(g.A, { source: d, className: A.xn }) }),
        ],
    });
}
function C(e) {
    let {
        headerVariant: t,
        descriptionClassName: l,
        creator: s,
        name: i,
        description: a,
        imageSource: r,
        truncate: c,
        guildId: u,
        isNew: d,
        guildEvent: o,
        eventPreview: m,
        recurrenceId: x,
    } = e;
    return (0, n.jsxs)("div", {
        className: A.kL,
        children: [
            null != r
                ? (0, n.jsx)("div", { className: A.iT, children: (0, n.jsx)(g.A, { source: r, className: A.xn }) })
                : null,
            (0, n.jsx)(E, {
                className: A.kj,
                creator: s,
                guildId: u,
                isNew: d,
                guildEvent: o,
                eventPreview: m,
                recurrenceId: x,
            }),
            (0, n.jsx)(I, {
                name: i,
                description: a,
                headerVariant: t,
                descriptionClassName: l,
                truncate: c,
                guildId: u,
            }),
        ],
    });
}
