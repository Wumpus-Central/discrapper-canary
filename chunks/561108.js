"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(713654),
    d = n(112389),
    c = n(961973),
    u = n(487626),
    m = n(147925),
    g = n(863694),
    x = n(992711),
    h = n(985018),
    _ = n(980993);
function p(e) {
    let { guild: t, scrollToQuestions: n } = e,
        s = (0, r.bG)([g.A], () => g.A.editedDefaultChannelIds),
        l = (0, u.$)(t.id, s).filter((e) => e.isCategory() || (0, d.S)(e.guild_id, e.id));
    return (0, i.jsxs)("div", {
        className: _.kL,
        children: [
            (0, i.jsx)("div", { className: _.wx, children: (0, i.jsx)(x.A, { guildId: t.id, scrollToQuestions: n }) }),
            (0, i.jsxs)("div", {
                className: _.o5,
                children: [(0, i.jsx)(j, {}), 0 === l.length && (0, i.jsx)(A, {}), (0, i.jsx)(f, { channels: l })],
            }),
        ],
    });
}
function A() {
    return (0, i.jsxs)("div", {
        className: _.p$,
        children: [
            (0, i.jsx)("div", { className: _.AI, children: (0, i.jsx)(a.N$i, { size: "md", color: "currentColor" }) }),
            (0, i.jsx)(a.Text, {
                className: _.HA,
                variant: "text-md/normal",
                color: "text-muted",
                children: h.intl.string(h.t.Qj6O91),
            }),
        ],
    });
}
function f(e) {
    let { channels: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e) =>
            e.isCategory() ? (0, i.jsx)(N, { label: e.name }, e.id) : (0, i.jsx)(E, { channel: e }, e.id),
        ),
    });
}
function j() {
    return (0, i.jsx)("div", { className: _.yF });
}
function N(e) {
    let { label: t } = e;
    return (0, i.jsxs)("div", {
        className: _.L1,
        children: [
            (0, i.jsx)(m.A, { className: _.OW, width: 12, height: 12, direction: m.A.Directions.DOWN }),
            (0, i.jsx)(a.Text, { variant: "text-xs/semibold", color: "text-muted", lineClamp: 1, children: t }),
        ],
    });
}
function E(e) {
    let { channel: t } = e,
        n = (0, c.sZ)(t),
        s = (0, o.gU)(t) ?? a.N$i;
    return (0, i.jsxs)("div", {
        className: _.Ix,
        children: [
            (0, i.jsx)(s, { className: _.p, size: "xs", color: "currentColor" }),
            (0, i.jsx)(a.Text, {
                className: _.HA,
                variant: "text-md/normal",
                color: "text-muted",
                lineClamp: 1,
                children: t.name,
            }),
            (0, i.jsx)("div", { className: l()({ [_.al]: n }) }),
        ],
    });
}
