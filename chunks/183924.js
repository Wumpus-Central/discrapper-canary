n.d(t, { A: () => l }), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(155718),
    s = n(207963),
    o = n(518774);
function l(e) {
    let { label: t, description: n, component: l, renderComponent: c } = e,
        u = (0, s.bO)(l);
    return l.type === a.I5.CHECKBOX
        ? c(l, "label-child")
        : (0, r.jsxs)(i.eIh, {
              title: t,
              required: l.required,
              error: u,
              children: [
                  null != n &&
                      (0, r.jsx)(i.ayl, {
                          type: i.tiu.DESCRIPTION,
                          className: o.h,
                          children: n,
                      }),
                  c(l, "label-child"),
              ],
          });
}
