"use strict";
n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var r = n(821609),
    a = n(908289),
    s = n(960076),
    l = n(375708);
function o(e) {
    let { activity: t, onAction: n, variant: o = "secondary", size: d = "sm", ...c } = e;
    return (0, s.A)(t)
        ? (0, i.jsx)(r.$, {
              variant: o,
              size: d,
              text: l.intl.string(l.t.I6JG46),
              onClick: function () {
                  n?.();
                  let e = (0, a.A)(t);
                  return window.open(null != e ? e : void 0);
              },
              fullWidth: !0,
              ...c,
          })
        : null;
}
