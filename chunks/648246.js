"use strict";
n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(821609),
    s = n(908289),
    a = n(960076),
    r = n(985018);
function o(e) {
    let { activity: t, onAction: n, variant: o = "secondary", size: c = "sm", ...u } = e;
    return (0, a.A)(t)
        ? (0, l.jsx)(i.$, {
              variant: o,
              size: c,
              text: r.intl.string(r.t.I6JG46),
              onClick: () => {
                  n?.();
                  let e = (0, s.A)(t);
                  return window.open(null != e ? e : void 0);
              },
              fullWidth: !0,
              ...u,
          })
        : null;
}
