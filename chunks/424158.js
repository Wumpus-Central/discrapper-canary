n.d(t, { Z: () => l }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(911969),
    o = n(970184),
    s = n(609275);
function l(e) {
    let { label: t, description: n, component: l, renderComponent: c } = e,
        u = (0, o.h4)(l);
    return l.type === a.re.CHECKBOX
        ? c(l, "label-child")
        : (0, r.jsxs)(i.xJW, {
              title: t,
              required: l.required,
              error: u,
              children: [
                  null != n &&
                      (0, r.jsx)(i.R94, {
                          type: i.geA.DESCRIPTION,
                          className: s.description,
                          children: n,
                      }),
                  c(l, "label-child"),
              ],
          });
}
