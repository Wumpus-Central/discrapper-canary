n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(471445),
    c = n(977258),
    d = n(637853),
    u = n(816436),
    g = n(259580),
    f = n(889369),
    m = n(838324),
    b = n(388032),
    p = n(794558);
function h(e) {
    let { guild: t, scrollToQuestions: n } = e,
        i = (0, a.e7)([f.Z], () => f.Z.editedDefaultChannelIds),
        l = (0, u.b)(t.id, i).filter((e) => e.isCategory() || (0, c.s)(e.guild_id, e.id));
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsx)("div", {
                className: p.header,
                children: (0, r.jsx)(m.Z, {
                    guildId: t.id,
                    scrollToQuestions: n,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.channelList,
                children: [(0, r.jsx)(v, {}), 0 === l.length && (0, r.jsx)(x, {}), (0, r.jsx)(j, { channels: l })],
            }),
        ],
    });
}
function x() {
    return (0, r.jsxs)("div", {
        className: p.emptyState,
        children: [
            (0, r.jsx)("div", {
                className: p.emptyStateIcon,
                children: (0, r.jsx)(s.VL1, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsx)(s.Text, {
                className: p.channelName,
                variant: "text-md/normal",
                color: "text-muted",
                children: b.intl.string(b.t.Qj6O91),
            }),
        ],
    });
}
function j(e) {
    let { channels: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e) =>
            e.isCategory() ? (0, r.jsx)(O, { label: e.name }, e.id) : (0, r.jsx)(C, { channel: e }, e.id),
        ),
    });
}
function v() {
    return (0, r.jsx)("div", { className: p.divider });
}
function O(e) {
    let { label: t } = e;
    return (0, r.jsxs)("div", {
        className: p.category,
        children: [
            (0, r.jsx)(g.Z, {
                className: p.caret,
                width: 12,
                height: 12,
                direction: g.Z.Directions.DOWN,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                lineClamp: 1,
                children: t,
            }),
        ],
    });
}
function C(e) {
    var t;
    let { channel: n } = e,
        i = (0, d.iF)(n),
        a = null != (t = (0, o.KS)(n)) ? t : s.VL1;
    return (0, r.jsxs)("div", {
        className: p.channel,
        children: [
            (0, r.jsx)(a, {
                className: p.channelIcon,
                size: "xs",
                color: "currentColor",
            }),
            (0, r.jsx)(s.Text, {
                className: p.channelName,
                variant: "text-md/normal",
                color: "text-muted",
                lineClamp: 1,
                children: n.name,
            }),
            (0, r.jsx)("div", { className: l()({ [p.chattableIndicator]: i }) }),
        ],
    });
}
