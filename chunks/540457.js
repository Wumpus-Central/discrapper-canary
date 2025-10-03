n.d(t, { A: () => a });
var r = n(951288);
n(647438);
var i = n(28664),
    l = n(481060),
    s = n(409483);
function a(e) {
    let { text: t, tooltipText: n, onClick: a, disabled: o } = e;
    return o
        ? (0, r.jsxs)("div", {
              className: s.container,
              children: [
                  (0, r.jsx)(l.qJs, {
                      size: "md",
                      color: "currentColor",
                      className: s.icon,
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
                  className: s.container,
                  onClick: a,
                  children: [
                      (0, r.jsx)(l.qJs, {
                          size: "md",
                          color: "currentColor",
                          className: s.icon,
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
