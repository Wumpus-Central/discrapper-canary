n.d(e, { O: () => s });
var l = n(477900),
    i = n(28863),
    a = n(123917),
    r = n(824062);
function s(t) {
    let { children: e, href: n } = t;
    return null == n
        ? e
        : (0, l.jsx)(i.Anchor, {
              className: r.n,
              href: n,
              onClick: (t) => {
                  (t.stopPropagation(), a.h({ href: n }, t));
              },
              target: "_blank",
              rel: "noopener noreferrer",
              children: e,
          });
}
