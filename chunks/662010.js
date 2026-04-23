"use strict";
n.d(t, { O: () => o });
var r = n(627968),
    i = n(349288),
    s = n(307600),
    a = n(144843);
function o(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(i.Anchor, {
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
