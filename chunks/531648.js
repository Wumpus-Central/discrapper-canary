e.d(n, { A: () => x, Q: () => A });
var l = e(477900);
e(582128);
var i = e(3026),
    r = e(939249),
    a = e(297264),
    s = e(834730),
    o = e(939496),
    c = e(996988),
    u = e(260155);
function d(t) {
    let { text: n, onClick: e, component: a, ...s } = t,
        { themeType: d } = (0, o.E)(),
        A = "string" == typeof n ? n.trim() : n;
    if (null == A || "" === A) return null;
    function x() {
        return d === c.d.MODAL || d === c.d.MODAL_V2
            ? (0, l.jsx)(a, { color: "text-default", ...s, children: A })
            : (0, l.jsx)(a, { color: "text-default", ...s, children: (0, l.jsx)(i.A, { children: A }) });
    }
    return null != e
        ? (0, l.jsx)(r.D, {
              onClick: (t) => {
                  (t.stopPropagation(), e(t));
              },
              className: u.sd,
              children: x(),
          })
        : x();
}
function A(t) {
    return (0, l.jsx)(d, { component: a.D, ...t });
}
function x(t) {
    return (0, l.jsx)(d, { component: s.E, ...t });
}
