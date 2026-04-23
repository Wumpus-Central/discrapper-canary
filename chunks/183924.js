n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var l = n(321471),
    r = n(244367),
    i = n(155718),
    s = n(207963),
    o = n(704475);
function d(e) {
    let { label: t, description: n, component: d, renderComponent: c } = e,
        u = (0, s.bO)(d);
    return d.type === i.I5.CHECKBOX
        ? c(d, "label-child")
        : (0, a.jsxs)(l.e, {
              title: t,
              required: d.required,
              error: u,
              children: [
                  null != n && (0, a.jsx)(r.a, { type: r.t.DESCRIPTION, className: o.h, children: n }),
                  c(d, "label-child"),
              ],
          });
}
