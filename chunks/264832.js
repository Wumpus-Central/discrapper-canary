n.d(t, { _: () => s });
var r = n(255367),
    i = n(481060),
    o = n(49012),
    a = n(840855);
function s(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(i.eee, {
              className: a.link,
              href: n,
              onClick: (e) => {
                  e.stopPropagation(), o.q({ href: n }, e);
              },
              target: "_blank",
              rel: "noopener noreferrer",
              children: t,
          });
}
