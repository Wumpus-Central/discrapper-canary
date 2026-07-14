e.d(n, { A: () => x, Q: () => A });
var i = e(627968);
e(64700);
var l = e(3026),
    a = e(939249),
    r = e(297264),
    s = e(834730),
    o = e(939496),
    c = e(996988),
    u = e(514566);
function d(t) {
    let { text: n, onClick: e, component: r, ...s } = t,
        { themeType: d } = (0, o.E)(),
        A = "string" == typeof n ? n.trim() : n;
    if (null == A || "" === A) return null;
    let x = () =>
        d === c.d.MODAL || d === c.d.MODAL_V2
            ? (0, i.jsx)(r, { color: "text-default", ...s, children: A })
            : (0, i.jsx)(r, { color: "text-default", ...s, children: (0, i.jsx)(l.A, { children: A }) });
    return null != e
        ? (0, i.jsx)(a.D, {
              onClick: (t) => {
                  t.stopPropagation(), e(t);
              },
              className: u.sd,
              children: x(),
          })
        : x();
}
function A(t) {
    return (0, i.jsx)(d, { component: r.D, ...t });
}
function x(t) {
    return (0, i.jsx)(d, { component: s.E, ...t });
}
