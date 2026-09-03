n.d(t, { A: () => o });
var l = n(477900);
n(582128);
var i = n(821609),
    s = n(908289),
    r = n(960076),
    a = n(375708);
function o(e) {
    let { activity: t, onAction: n, variant: o = "secondary", size: u = "sm", ...c } = e;
    return (0, r.A)(t)
        ? (0, l.jsx)(i.$, {
              variant: o,
              size: u,
              text: a.intl.string(a.t.I6JG46),
              onClick: function () {
                  n?.();
                  let e = (0, s.A)(t);
                  return window.open(null != e ? e : void 0);
              },
              fullWidth: !0,
              ...c,
          })
        : null;
}
