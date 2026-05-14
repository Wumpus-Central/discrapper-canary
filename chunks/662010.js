"use strict";
n.d(t, { O: () => o });
var i = n(627968),
    r = n(349288),
    s = n(123917),
    a = n(144843);
function o(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, i.jsx)(r.Anchor, {
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
