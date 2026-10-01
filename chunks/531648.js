n.d(e, { A: () => f, Q: () => A });
var l = n(477900);
n(582128);
var i = n(3026),
    a = n(939249),
    r = n(297264),
    s = n(834730),
    o = n(939496),
    c = n(996988),
    u = n(260155);
function d(t) {
    let { text: e, onClick: n, component: r, ...s } = t,
        { themeType: d } = (0, o.E)(),
        A = "string" == typeof e ? e.trim() : e;
    if (null == A || "" === A) return null;
    function f() {
        return d === c.d.MODAL || d === c.d.MODAL_V2
            ? (0, l.jsx)(r, { color: "text-default", ...s, children: A })
            : (0, l.jsx)(r, { color: "text-default", ...s, children: (0, l.jsx)(i.A, { children: A }) });
    }
    return null != n
        ? (0, l.jsx)(a.D, {
              onClick: (t) => {
                  (t.stopPropagation(), n(t));
              },
              className: u.sd,
              children: f(),
          })
        : f();
}
function A(t) {
    return (0, l.jsx)(d, { component: r.D, ...t });
}
function f(t) {
    return (0, l.jsx)(d, { component: s.E, ...t });
}
