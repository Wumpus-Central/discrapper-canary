n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(276293),
    o = n(834730),
    d = n(47167),
    c = n(713654),
    u = n(112389),
    m = n(961973),
    g = n(487626),
    h = n(147925),
    x = n(863694),
    _ = n(992711),
    p = n(985018),
    A = n(327121);
function E(e) {
    let { guild: t, scrollToQuestions: n } = e,
        l = (0, r.bG)([x.A], () => x.A.editedDefaultChannelIds),
        s = (0, g.$)(t.id, l).filter((e) => e.isCategory() || (0, u.S)(e.guild_id, e.id));
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [
            (0, i.jsx)("div", { className: A.wx, children: (0, i.jsx)(_.A, { guildId: t.id, scrollToQuestions: n }) }),
            (0, i.jsxs)("div", {
                className: A.o5,
                children: [(0, i.jsx)(N, {}), 0 === s.length && (0, i.jsx)(f, {}), (0, i.jsx)(j, { channels: s })],
            }),
        ],
    });
}
function f() {
    return (0, i.jsxs)("div", {
        className: A.p$,
        children: [
            (0, i.jsx)("div", { className: A.AI, children: (0, i.jsx)(a.N, { size: "md", color: "currentColor" }) }),
            (0, i.jsx)(o.E, {
                className: A.HA,
                variant: "text-md/normal",
                color: "text-muted",
                children: p.intl.string(p.t.Qj6O91),
            }),
        ],
    });
}
function j(e) {
    let { channels: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e) =>
            e.isCategory() ? (0, i.jsx)(I, { channel: e }, e.id) : (0, i.jsx)(C, { channel: e }, e.id),
        ),
    });
}
function N() {
    return (0, i.jsx)("div", { className: A.yF });
}
function I(e) {
    let { channel: t } = e,
        n = (0, d.Ay)(t);
    return (0, i.jsxs)("div", {
        className: A.L1,
        children: [
            (0, i.jsx)(h.A, { className: A.OW, width: 12, height: 12, direction: h.A.Directions.DOWN }),
            (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "text-muted", lineClamp: 1, children: n }),
        ],
    });
}
function C(e) {
    let { channel: t } = e,
        n = (0, d.Ay)(t),
        l = (0, m.sZ)(t),
        r = (0, c.gU)(t) ?? a.N;
    return (0, i.jsxs)("div", {
        className: A.Ix,
        children: [
            (0, i.jsx)(r, { className: A.p, size: "xs", color: "currentColor" }),
            (0, i.jsx)(o.E, {
                className: A.HA,
                variant: "text-md/normal",
                color: "text-muted",
                lineClamp: 1,
                children: n,
            }),
            (0, i.jsx)("div", { className: s()({ [A.al]: l }) }),
        ],
    });
}
