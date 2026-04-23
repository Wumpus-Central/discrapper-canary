t.d(l, { Ay: () => S, Uq: () => T, sC: () => y });
var n = t(627968);
t(64700);
var s = t(503698),
    i = t.n(s),
    a = t(311907),
    r = t(990078),
    c = t(97808),
    d = t(778712),
    u = t(177953),
    o = t(834730),
    m = t(534514),
    x = t(696451),
    v = t(427262),
    h = t(722260),
    N = t(563312),
    g = t(826383),
    p = t(794782),
    j = t(974930),
    A = t(847494),
    E = t(850183),
    I = t(103355),
    f = t(985018),
    C = t(758041);
function T(e) {
    let { className: l, creator: t, guildId: s, isNew: m, guildEvent: A, eventPreview: E, recurrenceId: T } = e,
        y = (0, g.A)(s, A.id, T),
        S = A ?? E,
        _ = (0, a.bG)([x.Ay], () => x.Ay.getNick(s, t?.id), [s, t]);
    T = null == S || null != T ? T : (0, j.G3)(S);
    let { startTime: k } = (0, N.Ay)(A ?? E, T),
        w = (0, h.A)(T, A.id),
        R = S?.scheduled_start_time != null ? (0, j.j)(w, k, new Date(S.scheduled_start_time)) : null;
    if (null == S) return null;
    let { entity_type: D, status: L, recurrence_rule: b } = S;
    return (0, n.jsxs)("div", {
        className: i()(C.II, l),
        children: [
            (0, n.jsx)(I.L, {
                startTime: k.toISOString(),
                status: R ?? L,
                eventType: D,
                isNew: m,
                recurrenceRule: (0, p.Sn)(b),
                guildEventId: A.id,
                recurrenceId: T,
            }),
            (0, n.jsx)("div", { className: C.jH }),
            null != t &&
                (0, n.jsx)(r.m, {
                    text: f.intl.formatToPlainString(f.t["+3iypQ"], { username: _ ?? v.Ay.getName(t) }),
                    children: (0, n.jsx)(c.eu, {
                        src: t.getAvatarURL(s, 20),
                        size: d._3.SIZE_20,
                        "aria-label": _ ?? t.username,
                        className: C.xL,
                    }),
                }),
            (0, n.jsx)(r.m, {
                text: f.intl.formatToPlainString(f.t["+DLsD8"], { count: y }),
                children: (0, n.jsxs)("div", {
                    className: C.T_,
                    children: [
                        (0, n.jsx)(u.n, { size: "xxs", color: "currentColor", className: C.pO }),
                        (0, n.jsx)(o.E, { color: "text-default", variant: "text-sm/normal", children: y }),
                    ],
                }),
            }),
        ],
    });
}
function y(e) {
    let {
        headerVariant: l = "heading-lg/medium",
        descriptionClassName: t,
        name: s,
        description: a,
        truncate: r,
        guildId: c,
        imageSource: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: i()({ [C.dT]: null != d }),
        children: [
            (0, n.jsxs)("div", {
                className: i()({ [C.FD]: null != d }),
                children: [
                    (0, n.jsx)(m.D, { variant: l, selectable: !0, className: C.eq, children: s }),
                    null != a && (0, n.jsx)(A.A, { description: a, className: i()(t, C.h_), truncate: r, guildId: c }),
                ],
            }),
            null != d &&
                (0, n.jsx)("div", { className: C.iT, children: (0, n.jsx)(E.A, { source: d, className: C.xn }) }),
        ],
    });
}
function S(e) {
    let {
        headerVariant: l,
        descriptionClassName: t,
        creator: s,
        name: i,
        description: a,
        imageSource: r,
        truncate: c,
        guildId: d,
        isNew: u,
        guildEvent: o,
        eventPreview: m,
        recurrenceId: x,
    } = e;
    return (0, n.jsxs)("div", {
        className: C.kL,
        children: [
            null != r
                ? (0, n.jsx)("div", { className: C.iT, children: (0, n.jsx)(E.A, { source: r, className: C.xn }) })
                : null,
            (0, n.jsx)(T, {
                className: C.kj,
                creator: s,
                guildId: d,
                isNew: u,
                guildEvent: o,
                eventPreview: m,
                recurrenceId: x,
            }),
            (0, n.jsx)(y, {
                name: i,
                description: a,
                headerVariant: l,
                descriptionClassName: t,
                truncate: c,
                guildId: d,
            }),
        ],
    });
}
