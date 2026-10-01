i.d(t, { A: () => o });
var e = i(477900);
i(582128);
var l = i(821609),
    r = i(908289),
    a = i(960076),
    s = i(375708);
function o(n) {
    let { activity: t, onAction: i, variant: o = "secondary", size: d = "sm", ...u } = n;
    return (0, a.A)(t)
        ? (0, e.jsx)(l.$, {
              variant: o,
              size: d,
              text: s.intl.string(s.t.I6JG46),
              onClick: function () {
                  i?.();
                  let n = (0, r.A)(t);
                  return window.open(null != n ? n : void 0);
              },
              fullWidth: !0,
              ...u,
          })
        : null;
}
