"use strict";
n.d(t, { O: () => a });
var i = n(627968),
    l = n(349288),
    s = n(307600),
    r = n(144843);
function a(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, i.jsx)(l.Anchor, {
              className: r.n,
              href: n,
              onClick: (e) => {
                  e.stopPropagation(), s.h({ href: n }, e);
              },
              target: "_blank",
              rel: "noopener noreferrer",
              children: t,
          });
}
