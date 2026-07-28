n.d(e, { Ay: () => _, Uq: () => L, sC: () => D });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    s = n(17928),
    a = n(866665),
    c = n(97808),
    u = n(778712),
    o = n(177953),
    d = n(834730),
    m = n(297264),
    x = n(696451),
    g = n(427262),
    h = n(722260),
    f = n(563312),
    N = n(826383),
    A = n(794782),
    E = n(974930),
    v = n(937050),
    j = n(850183),
    T = n(103355),
    I = n(375708),
    C = n(895566);
function L(t) {
    let { className: e, creator: n, guildId: r, isNew: m, guildEvent: v, eventPreview: j, recurrenceId: L } = t,
        D = (0, N.A)(r, v.id, L),
        _ = v ?? j,
        p = (0, s.bG)([x.Ay], () => x.Ay.getNick(r, n?.id), [r, n]);
    L = null == _ || null != L ? L : (0, E.G3)(_);
    let { startTime: w } = (0, f.Ay)(v ?? j, L),
        S = (0, h.A)(L, v.id),
        b = _?.scheduled_start_time != null ? (0, E.j)(S, w, new Date(_.scheduled_start_time)) : null;
    if (null == _) return null;
    let { entity_type: y, status: P, recurrence_rule: k } = _;
    return (0, l.jsxs)("div", {
        className: i()(C.II, e),
        children: [
            (0, l.jsx)(T.L, {
                startTime: w.toISOString(),
                status: b ?? P,
                eventType: y,
                isNew: m,
                recurrenceRule: (0, A.Sn)(k),
                guildEventId: v.id,
                recurrenceId: L,
            }),
            (0, l.jsx)("div", { className: C.jH }),
            null != n &&
                (0, l.jsx)(a.m, {
                    text: I.intl.formatToPlainString(I.t["+3iypQ"], { username: p ?? g.Ay.getName(n) }),
                    children: (0, l.jsx)(c.eu, {
                        src: n.getAvatarURL(r, 20),
                        size: u._3.SIZE_20,
                        "aria-label": p ?? n.username,
                        className: C.xL,
                    }),
                }),
            (0, l.jsx)(a.m, {
                ariaHidden: !0,
                text: I.intl.formatToPlainString(I.t["+DLsD8"], { count: D }),
                children: (0, l.jsxs)("div", {
                    role: "group",
                    "aria-label": I.intl.formatToPlainString(I.t["+DLsD8"], { count: D }),
                    className: C.T_,
                    children: [
                        (0, l.jsx)(o.n, { size: "xxs", color: "currentColor", className: C.pO }),
                        (0, l.jsx)(d.E, { color: "text-default", variant: "text-sm/normal", children: D }),
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
        description: s,
        truncate: a,
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
                    null != s && (0, l.jsx)(v.A, { description: s, className: i()(n, C.h_), truncate: a, guildId: c }),
                ],
            }),
            null != u &&
                (0, l.jsx)("div", { className: C.iT, children: (0, l.jsx)(j.A, { source: u, className: C.xn }) }),
        ],
    });
}
function _(t) {
    let {
        headerVariant: e,
        descriptionClassName: n,
        creator: r,
        name: i,
        description: s,
        imageSource: a,
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
            null != a
                ? (0, l.jsx)("div", { className: C.iT, children: (0, l.jsx)(j.A, { source: a, className: C.xn }) })
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
                description: s,
                headerVariant: e,
                descriptionClassName: n,
                truncate: c,
                guildId: u,
            }),
        ],
    });
}
