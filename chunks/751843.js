n.d(t, { Z: () => h });
var i,
    l = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(871499),
    c = n(734802),
    d = (((i = d || {})[(i.UP = 0)] = 'UP'), (i[(i.DOWN = 1)] = 'DOWN'), i);
function u(e) {
    let { direction: t, className: n, themeable: i, ...a } = e;
    return (0, l.jsx)(o.Z, {
        className: r()(n, c.arrow, { [c.up]: 0 === t }),
        iconComponent: s.CJ0,
        themeable: i,
        ...a
    });
}
u.Directions = d;
let h = u;
