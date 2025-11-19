n.d(t, { A: () => s });
var r = n(54381);
n(473749);
var i = n(28664),
    l = n(481060),
    a = n(409483);
function s(e) {
    let { text: t, tooltipText: n, onClick: s, disabled: o } = e;
    return o
        ? (0, r.jsxs)("div", {
              className: a.container,
              children: [
                  (0, r.jsx)(l.qJs, {
                      size: "md",
                      color: "currentColor",
                      className: a.icon,
                  }),
                  (0, r.jsx)(l.Text, {
                      color: "interactive-active",
                      variant: "text-md/semibold",
                      children: t,
                  }),
              ],
          })
        : (0, r.jsx)(i.u, {
              text: n,
              shouldShow: null != n,
              children: (0, r.jsxs)(l.P3F, {
                  className: a.container,
                  onClick: s,
                  children: [
                      (0, r.jsx)(l.qJs, {
                          size: "md",
                          color: "currentColor",
                          className: a.icon,
                      }),
                      (0, r.jsx)(l.Text, {
                          color: "interactive-active",
                          variant: "text-md/semibold",
                          children: t,
                      }),
                  ],
              }),
          });
}
