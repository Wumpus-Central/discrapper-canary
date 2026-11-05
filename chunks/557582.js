var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    a = n(855986),
    s = n(866665),
    c = n(97808),
    u = n(778712),
    o = n(177953),
    d = n(834730),
    m = n(534514),
    x = n(696451),
    g = n(427262),
    h = n(722260),
    f = n(563312),
    E = n(826383),
    N = n(794782),
    v = n(974930),
    A = n(773955),
    j = n(850183),
    T = n(103355),
    I = n(792996),
    C = n(386522);
function L(t) {
    let { className: e, creator: n, guildId: r, isNew: m, guildEvent: A, eventPreview: j, recurrenceId: L } = t,
        D = (0, E.A)(r, A.id, L),
        p = A ?? j,
        _ = (0, a.bG)([x.Ay], () => x.Ay.getNick(r, n?.id), [r, n]);
    L = null == p || null != L ? L : (0, v.G3)(p);
    let { startTime: y } = (0, f.Ay)(A ?? j, L),
        b = (0, h.A)(L, A.id),
        w = p?.scheduled_start_time != null ? (0, v.j)(b, y, new Date(p.scheduled_start_time)) : null;
    if (null == p) return null;
    let { entity_type: S, status: P, recurrence_rule: k } = p;
    return (0, l.jsxs)("div", {
        className: i()(C.II, e),
        children: [
            (0, l.jsx)(T.L, {
                startTime: y.toISOString(),
                status: w ?? P,
                eventType: S,
                isNew: m,
                recurrenceRule: (0, N.Sn)(k),
                guildEventId: A.id,
                recurrenceId: L,
            }),
            (0, l.jsx)("div", { className: C.jH }),
            null != n &&
                (0, l.jsx)(s.m, {
                    text: I.intl.formatToPlainString(I.t["+3iypQ"], { username: _ ?? g.Ay.getName(n) }),
                    children: (0, l.jsx)(c.eu, {
                        src: n.getAvatarURL(r, 20),
                        size: u._3.SIZE_20,
                        "aria-label": _ ?? n.username,
                        className: C.xL,
                    }),
                }),
            (0, l.jsx)(s.m, {
                ariaHidden: !0,
                text: I.intl.formatToPlainString(I.t["+DLsD8"], { count: D }),
                children: (0, l.jsxs)("div", {
                    role: "group",
                    "aria-label": I.intl.formatToPlainString(I.t["+DLsD8"], { count: D }),
                    className: C.T_,
                    children: [
                        (0, l.jsx)(o.GroupIcon, { size: "xxs", color: "currentColor", className: C.pO }),
                        (0, l.jsx)(d.E, { color: "text-default", variant: "body-sm/normal", children: D }),
                    ],
                }),
            }),
        ],
    });
}
function D(t) {
    let {
        headerVariant: e = "heading-lg/medium",
        descriptionClassName: n,
        name: r,
        description: a,
        truncate: s,
        guildId: c,
        imageSource: u,
    } = t;
    return (0, l.jsxs)("div", {
        className: i()({ [C.dT]: null != u }),
        children: [
            (0, l.jsxs)("div", {
                className: i()({ [C.FD]: null != u }),
                children: [
                    (0, l.jsx)(m.D, { variant: e, selectable: !0, className: C.eq, children: r }),
                    null != a && (0, l.jsx)(A.A, { description: a, className: i()(n, C.h_), truncate: s, guildId: c }),
                ],
            }),
            null != u &&
                (0, l.jsx)("div", { className: C.iT, children: (0, l.jsx)(j.A, { source: u, className: C.xn }) }),
        ],
    });
}
n.d(
    e,
    {},
    {
        Ay: function (t) {
            let {
                headerVariant: e,
                descriptionClassName: n,
                creator: r,
                name: i,
                description: a,
                imageSource: s,
                truncate: c,
                guildId: u,
                isNew: o,
                guildEvent: d,
                eventPreview: m,
                recurrenceId: x,
            } = t;
            return (0, l.jsxs)("div", {
                className: C.kL,
                children: [
                    null != s
                        ? (0, l.jsx)("div", {
                              className: C.iT,
                              children: (0, l.jsx)(j.A, { source: s, className: C.xn }),
                          })
                        : null,
                    (0, l.jsx)(L, {
                        className: C.kj,
                        creator: r,
                        guildId: u,
                        isNew: o,
                        guildEvent: d,
                        eventPreview: m,
                        recurrenceId: x,
                    }),
                    (0, l.jsx)(D, {
                        name: i,
                        description: a,
                        headerVariant: e,
                        descriptionClassName: n,
                        truncate: c,
                        guildId: u,
                    }),
                ],
            });
        },
        Uq: L,
        sC: D,
    },
);
