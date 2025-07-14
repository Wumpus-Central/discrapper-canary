n.d(t, { _: () => s });
var r = n(255367),
    i = n(481060),
    a = n(49012),
    o = n(160362);
function s(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(i.eee, {
              className: o.link,
              href: n,
              onClick: (e) => {
                  (e.stopPropagation(), a.q({ href: n }, e));
              },
              target: '_blank',
              rel: 'noopener noreferrer',
              children: t
          });
}
