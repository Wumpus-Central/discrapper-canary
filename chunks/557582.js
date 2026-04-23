n.d(l, { Ay: () => _, Uq: () => y, sC: () => T });
var s = n(627968);
n(64700);
var i = n(503698),
    t = n.n(i),
    a = n(17928),
    r = n(990078),
    c = n(97808),
    d = n(778712),
    u = n(177953),
    o = n(834730),
    m = n(534514),
    v = n(696451),
    x = n(427262),
    h = n(722260),
    N = n(563312),
    p = n(826383),
    g = n(794782),
    j = n(974930),
    I = n(847494),
    A = n(850183),
    E = n(103355),
    C = n(985018),
    f = n(758041);
function y(e) {
    let { className: l, creator: n, guildId: i, isNew: m, guildEvent: I, eventPreview: A, recurrenceId: y } = e,
        T = (0, p.A)(i, I.id, y),
        _ = I ?? A,
        S = (0, a.bG)([v.Ay], () => v.Ay.getNick(i, n?.id), [i, n]);
    y = null == _ || null != y ? y : (0, j.G3)(_);
    let { startTime: w } = (0, N.Ay)(I ?? A, y),
        R = (0, h.A)(y, I.id),
        k = _?.scheduled_start_time != null ? (0, j.j)(R, w, new Date(_.scheduled_start_time)) : null;
    if (null == _) return null;
    let { entity_type: D, status: G, recurrence_rule: L } = _;
    return (0, s.jsxs)("div", {
        className: t()(f.II, l),
        children: [
            (0, s.jsx)(E.L, {
                startTime: w.toISOString(),
                status: k ?? G,
                eventType: D,
                isNew: m,
                recurrenceRule: (0, g.Sn)(L),
                guildEventId: I.id,
                recurrenceId: y,
            }),
            (0, s.jsx)("div", { className: f.jH }),
            null != n &&
                (0, s.jsx)(r.m, {
                    text: C.intl.formatToPlainString(C.t["+3iypQ"], { username: S ?? x.Ay.getName(n) }),
                    children: (0, s.jsx)(c.eu, {
                        src: n.getAvatarURL(i, 20),
                        size: d._3.SIZE_20,
                        "aria-label": S ?? n.username,
                        className: f.xL,
                    }),
                }),
            (0, s.jsx)(r.m, {
                text: C.intl.formatToPlainString(C.t["+DLsD8"], { count: T }),
                children: (0, s.jsxs)("div", {
                    className: f.T_,
                    children: [
                        (0, s.jsx)(u.n, { size: "xxs", color: "currentColor", className: f.pO }),
                        (0, s.jsx)(o.E, { color: "text-default", variant: "text-sm/normal", children: T }),
                    ],
                }),
            }),
        ],
    });
}
function T(e) {
    let {
        headerVariant: l = "heading-lg/medium",
        descriptionClassName: n,
        name: i,
        description: a,
        truncate: r,
        guildId: c,
        imageSource: d,
    } = e;
    return (0, s.jsxs)("div", {
        className: t()({ [f.dT]: null != d }),
        children: [
            (0, s.jsxs)("div", {
                className: t()({ [f.FD]: null != d }),
                children: [
                    (0, s.jsx)(m.D, { variant: l, selectable: !0, className: f.eq, children: i }),
                    null != a && (0, s.jsx)(I.A, { description: a, className: t()(n, f.h_), truncate: r, guildId: c }),
                ],
            }),
            null != d &&
                (0, s.jsx)("div", { className: f.iT, children: (0, s.jsx)(A.A, { source: d, className: f.xn }) }),
        ],
    });
}
function _(e) {
    let {
        headerVariant: l,
        descriptionClassName: n,
        creator: i,
        name: t,
        description: a,
        imageSource: r,
        truncate: c,
        guildId: d,
        isNew: u,
        guildEvent: o,
        eventPreview: m,
        recurrenceId: v,
    } = e;
    return (0, s.jsxs)("div", {
        className: f.kL,
        children: [
            null != r
                ? (0, s.jsx)("div", { className: f.iT, children: (0, s.jsx)(A.A, { source: r, className: f.xn }) })
                : null,
            (0, s.jsx)(y, {
                className: f.kj,
                creator: i,
                guildId: d,
                isNew: u,
                guildEvent: o,
                eventPreview: m,
                recurrenceId: v,
            }),
            (0, s.jsx)(T, {
                name: t,
                description: a,
                headerVariant: l,
                descriptionClassName: n,
                truncate: c,
                guildId: d,
            }),
        ],
    });
}
