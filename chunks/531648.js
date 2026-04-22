e.d(n, { A: () => x, Q: () => A });
var i = e(627968);
e(64700);
var l = e(3026),
    r = e(939249),
    a = e(534514),
    s = e(834730),
    o = e(939496),
    c = e(996988),
    u = e(514566);
function d(t) {
    let { text: n, onClick: e, component: a, ...s } = t,
        { themeType: d } = (0, o.E)(),
        A = "string" == typeof n ? n.trim() : n;
    if (null == A || "" === A) return null;
    let x = () =>
        d === c.d.MODAL || d === c.d.MODAL_V2
            ? (0, i.jsx)(a, { color: "text-default", ...s, children: A })
            : (0, i.jsx)(a, { color: "text-default", ...s, children: (0, i.jsx)(l.A, { children: A }) });
    return null != e
        ? (0, i.jsx)(r.D, {
              onClick: (t) => {
                  t.stopPropagation(), e(t);
              },
              className: u.sd,
              children: x(),
          })
        : x();
}
function A(t) {
    return (0, i.jsx)(d, { component: a.D, ...t });
}
function x(t) {
    return (0, i.jsx)(d, { component: s.E, ...t });
}
