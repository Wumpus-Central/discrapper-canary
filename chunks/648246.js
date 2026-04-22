"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(821609),
    s = n(908289),
    r = n(960076),
    a = n(985018);
function o(e) {
    let { activity: t, onAction: n, variant: o = "secondary", size: c = "sm", ...u } = e;
    return (0, r.A)(t)
        ? (0, i.jsx)(l.$, {
              variant: o,
              size: c,
              text: a.intl.string(a.t.I6JG46),
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
