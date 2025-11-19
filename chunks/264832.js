n.d(t, { _: () => s });
var r = n(54381),
    i = n(481060),
    a = n(49012),
    o = n(351326);
function s(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(i.Anchor, {
              className: o.link,
              href: n,
              onClick: (e) => {
                  e.stopPropagation(), a.q({ href: n }, e);
              },
              target: "_blank",
              rel: "noopener noreferrer",
              children: t,
          });
}
