n.d(t, {
    Ay: () => v,
    Uq: () => O,
    sC: () => A,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(397927),
    c = n(696451),
    u = n(427262),
    d = n(722260),
    f = n(563312),
    p = n(826383),
    _ = n(794782),
    h = n(974930),
    m = n(847494),
    g = n(850183),
    E = n(103355),
    b = n(985018),
    y = n(680028);
function O(e) {
    let { className: t, creator: n, guildId: i, isNew: m, guildEvent: g, eventPreview: O, recurrenceId: A } = e,
        v = (0, p.A)(i, g.id, A),
        S = null != g ? g : O,
        I = (0, s.bG)([c.Ay], () => c.Ay.getNick(i, null == n ? void 0 : n.id), [i, n]);
    A = null == S || null != A ? A : (0, h.G3)(S);
    let { startTime: T } = (0, f.Ay)(null != g ? g : O, A),
        C = (0, d.A)(A, g.id),
        N =
            (null == S ? void 0 : S.scheduled_start_time) != null
                ? (0, h.j)(C, T, new Date(S.scheduled_start_time))
                : null;
    if (null == S) return null;
    let { entity_type: R, status: w, recurrence_rule: P } = S;
    return (0, r.jsxs)("div", {
        className: a()(y.II, t),
        children: [
            (0, r.jsx)(E.L, {
                startTime: T.toISOString(),
                status: null != N ? N : w,
                eventType: R,
                isNew: m,
                recurrenceRule: (0, _.Sn)(P),
                guildEventId: g.id,
                recurrenceId: A,
            }),
            (0, r.jsx)("div", { className: y.jH }),
            null != n &&
                (0, r.jsx)(o.m, {
                    text: b.intl.formatToPlainString(b.t["+3iypQ"], { username: null != I ? I : u.Ay.getName(n) }),
                    children: (0, r.jsx)(l.euF, {
                        src: n.getAvatarURL(i, 20),
                        size: l._3J.SIZE_20,
                        "aria-label": null != I ? I : n.username,
                        className: y.xL,
                    }),
                }),
            (0, r.jsx)(o.m, {
                text: b.intl.formatToPlainString(b.t["+DLsD8"], { count: v }),
                children: (0, r.jsxs)("div", {
                    className: y.T_,
                    children: [
                        (0, r.jsx)(l.nFg, {
                            size: "xxs",
                            color: "currentColor",
                            className: y.pO,
                        }),
                        (0, r.jsx)(l.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: v,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function A(e) {
    let {
        headerVariant: t = "heading-lg/medium",
        descriptionClassName: n,
        name: i,
        description: s,
        truncate: o,
        guildId: c,
        imageSource: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()({ [y.dT]: null != u }),
        children: [
            (0, r.jsxs)("div", {
                className: a()({ [y.FD]: null != u }),
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: t,
                        selectable: !0,
                        className: y.eq,
                        children: i,
                    }),
                    null != s &&
                        (0, r.jsx)(m.A, {
                            description: s,
                            className: a()(n, y.h_),
                            truncate: o,
                            guildId: c,
                        }),
                ],
            }),
            null != u &&
                (0, r.jsx)("div", {
                    className: y.iT,
                    children: (0, r.jsx)(g.A, {
                        source: u,
                        className: y.xn,
                    }),
                }),
        ],
    });
}
function v(e) {
    let {
        headerVariant: t,
        descriptionClassName: n,
        creator: i,
        name: a,
        description: s,
        imageSource: o,
        truncate: l,
        guildId: c,
        isNew: u,
        guildEvent: d,
        eventPreview: f,
        recurrenceId: p,
    } = e;
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [
            null != o
                ? (0, r.jsx)("div", {
                      className: y.iT,
                      children: (0, r.jsx)(g.A, {
                          source: o,
                          className: y.xn,
                      }),
                  })
                : null,
            (0, r.jsx)(O, {
                className: y.kj,
                creator: i,
                guildId: c,
                isNew: u,
                guildEvent: d,
                eventPreview: f,
                recurrenceId: p,
            }),
            (0, r.jsx)(A, {
                name: a,
                description: s,
                headerVariant: t,
                descriptionClassName: n,
                truncate: l,
                guildId: c,
            }),
        ],
    });
}
