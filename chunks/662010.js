"use strict";
n.d(t, { O: () => r });
var l = n(627968),
    i = n(349288),
    s = n(76843),
    a = n(144843);
function r(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, l.jsx)(i.Anchor, {
              className: a.n,
              href: n,
              onClick: (e) => {
                  e.stopPropagation(), s.h({ href: n }, e);
              },
              target: "_blank",
              rel: "noopener noreferrer",
              children: t,
          });
}
