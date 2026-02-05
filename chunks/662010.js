"use strict";
n.d(t, { O: () => o });
var r = n(627968),
    i = n(397927),
    a = n(307600),
    s = n(465748);
function o(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(i.MzZ, {
              className: s.n,
              href: n,
              onClick: (e) => {
                  e.stopPropagation(), a.h({ href: n }, e);
              },
              target: "_blank",
              rel: "noopener noreferrer",
              children: t,
          });
}
