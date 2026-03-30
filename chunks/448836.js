s.d(t, { A: () => d });
var n = s(627968);
s(64700);
var a = s(503698),
    r = s.n(a),
    l = s(438874),
    i = s(722523),
    o = s(439156),
    c = s(143309);
function d(e) {
    let { className: t, guildId: s, powerup: a, expressiveCta: d, onError: u } = e,
        { showToggleButton: _, showConfigureButton: m } = (0, l.A)(s, a),
        x = !m;
    return (0, n.jsxs)("div", {
        className: r()(c.k, t),
        children: [
            _ && (0, n.jsx)(o.A, { guildId: s, powerup: a, onError: u, grow: x, compact: !x, expressiveCta: d }),
            m && (0, n.jsx)(i.GU, { guildId: s, powerup: a }),
        ],
    });
}
