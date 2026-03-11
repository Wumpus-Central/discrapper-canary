"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(990078),
    a = n(397927),
    r = n(351001),
    o = n(226884),
    u = n(985018),
    c = n(697449);
function d(e) {
    let { guild: t, message: n } = e,
        d = i.useRef(null);
    return (0, r.HU)(t.id, n.author.id)
        ? (0, l.jsx)(a.YNO, {
              targetElementRef: d,
              animation: a.YNO.Animation.TRANSLATE,
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
                  return (0, l.jsx)(a.DUT, {
                      onClick: t,
                      tag: "span",
                      innerRef: d,
                      children: (0, l.jsx)(s.m, {
                          text: u.intl.string(u.t["v/OYd2"]),
                          children: (0, l.jsx)("div", {
                              className: c.C,
                              children: (0, l.jsx)(a.NVf, {
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
