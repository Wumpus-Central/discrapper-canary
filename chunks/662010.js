"use strict";
n.d(t, { O: () => a });
var l = n(477900),
    i = n(349288),
    s = n(123917),
    r = n(290451);
function a(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, l.jsx)(i.Anchor, {
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
