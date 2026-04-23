s.d(a, { A: () => c });
var r = s(627968);
s(64700);
var n = s(503698),
    l = s.n(n),
    t = s(438874),
    o = s(722523),
    i = s(439156),
    d = s(344445);
function c(e) {
    let { className: a, guildId: s, powerup: n, expressiveCta: c, onError: _ } = e,
        { showToggleButton: u, showConfigureButton: m } = (0, t.A)(s, n),
        p = !m;
    return (0, r.jsxs)("div", {
        className: l()(d.k, a),
        children: [
            u && (0, r.jsx)(i.A, { guildId: s, powerup: n, onError: _, grow: p, compact: !p, expressiveCta: c }),
            m && (0, r.jsx)(o.GU, { guildId: s, powerup: n }),
        ],
    });
}
