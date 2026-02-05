n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var a = n(397927),
    r = n(155718),
    s = n(207963),
    i = n(518774);
function o(e) {
    let { label: t, description: n, component: o, renderComponent: d } = e,
        c = (0, s.bO)(o);
    return o.type === r.I5.CHECKBOX
        ? d(o, "label-child")
        : (0, l.jsxs)(a.eIh, {
              title: t,
              required: o.required,
              error: c,
              children: [
                  null != n && (0, l.jsx)(a.ayl, { type: a.tiu.DESCRIPTION, className: i.h, children: n }),
                  d(o, "label-child"),
              ],
          });
}
