"use strict";
n.d(t, { A: () => g });
var l = n(627968),
    a = n(64700),
    s = n(990078),
    i = n(265872),
    r = n(939249),
    o = n(506803),
    c = n(351001),
    u = n(226884),
    d = n(985018),
    m = n(125534);
function g(e) {
    let { guild: t, message: n } = e,
        g = a.useRef(null);
    return (0, c.HU)(t.id, n.author.id)
        ? (0, l.jsx)(i.Y, {
              targetElementRef: g,
              animation: i.Y.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, l.jsx)(u.A, { guild: t, message: n, onClose: a });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, l.jsx)(r.D, {
                      onClick: t,
                      tag: "span",
                      innerRef: g,
                      children: (0, l.jsx)(s.m, {
                          text: d.intl.string(d.t["v/OYd2"]),
                          children: (0, l.jsx)("div", {
                              className: m.C,
                              children: (0, l.jsx)(o.N, {
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
