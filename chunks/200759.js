"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(990078),
    r = n(397927),
    a = n(351001),
    o = n(226884),
    u = n(985018),
    c = n(322958);
function d(e) {
    let { guild: t, message: n } = e,
        d = i.useRef(null);
    return (0, a.HU)(t.id, n.author.id)
        ? (0, l.jsx)(r.YNO, {
              targetElementRef: d,
              animation: r.YNO.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsx)(o.A, { guild: t, message: n, onClose: i });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, l.jsx)(r.DUT, {
                      onClick: t,
                      tag: "span",
                      innerRef: d,
                      children: (0, l.jsx)(s.m, {
                          text: u.intl.string(u.t["v/OYd2"]),
                          children: (0, l.jsx)("div", {
                              className: c.C,
                              children: (0, l.jsx)(r.NVf, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                                  height: 20,
                              }),
                          }),
                      }),
                  });
              },
          })
        : null;
}
