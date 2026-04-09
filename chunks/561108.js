"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(47167),
    d = n(713654),
    c = n(112389),
    u = n(961973),
    m = n(487626),
    g = n(147925),
    x = n(863694),
    h = n(992711),
    _ = n(985018),
    A = n(980993);
function p(e) {
    let { guild: t, scrollToQuestions: n } = e,
        s = (0, r.bG)([x.A], () => x.A.editedDefaultChannelIds),
        l = (0, m.$)(t.id, s).filter((e) => e.isCategory() || (0, c.S)(e.guild_id, e.id));
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [
            (0, i.jsx)("div", { className: A.wx, children: (0, i.jsx)(h.A, { guildId: t.id, scrollToQuestions: n }) }),
            (0, i.jsxs)("div", {
                className: A.o5,
                children: [(0, i.jsx)(N, {}), 0 === l.length && (0, i.jsx)(f, {}), (0, i.jsx)(j, { channels: l })],
            }),
        ],
    });
}
function f() {
    return (0, i.jsxs)("div", {
        className: A.p$,
        children: [
            (0, i.jsx)("div", { className: A.AI, children: (0, i.jsx)(a.N$i, { size: "md", color: "currentColor" }) }),
            (0, i.jsx)(a.Text, {
                className: A.HA,
                variant: "text-md/normal",
                color: "text-muted",
                children: _.intl.string(_.t.Qj6O91),
            }),
        ],
    });
}
function j(e) {
    let { channels: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e) =>
            e.isCategory() ? (0, i.jsx)(E, { channel: e }, e.id) : (0, i.jsx)(C, { channel: e }, e.id),
        ),
    });
}
function N() {
    return (0, i.jsx)("div", { className: A.yF });
}
function E(e) {
    let { channel: t } = e,
        n = (0, o.Ay)(t);
    return (0, i.jsxs)("div", {
        className: A.L1,
        children: [
            (0, i.jsx)(g.A, { className: A.OW, width: 12, height: 12, direction: g.A.Directions.DOWN }),
            (0, i.jsx)(a.Text, { variant: "text-xs/semibold", color: "text-muted", lineClamp: 1, children: n }),
        ],
    });
}
function C(e) {
    let { channel: t } = e,
        n = (0, o.Ay)(t),
        s = (0, u.sZ)(t),
        r = (0, d.gU)(t) ?? a.N$i;
    return (0, i.jsxs)("div", {
        className: A.Ix,
        children: [
            (0, i.jsx)(r, { className: A.p, size: "xs", color: "currentColor" }),
            (0, i.jsx)(a.Text, {
                className: A.HA,
                variant: "text-md/normal",
                color: "text-muted",
                lineClamp: 1,
                children: n,
            }),
            (0, i.jsx)("div", { className: l()({ [A.al]: s }) }),
        ],
    });
}
