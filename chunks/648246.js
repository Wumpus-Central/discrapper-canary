"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(821609),
    s = n(908289),
    a = n(960076),
    o = n(375708);
function l(e) {
    let { activity: t, onAction: n, variant: l = "secondary", size: u = "sm", ...c } = e;
    return (0, a.A)(t)
        ? (0, i.jsx)(r.$, {
              variant: l,
              size: u,
              text: o.intl.string(o.t.I6JG46),
              onClick: () => {
                  n?.();
                  let e = (0, s.A)(t);
                  return window.open(null != e ? e : void 0);
              },
              fullWidth: !0,
              ...c,
          })
        : null;
}
