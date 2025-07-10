n.d(t, { _: () => o });
var r = n(255367),
    i = n(481060),
    a = n(49012);
function o(e) {
    let { children: t, href: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(i.eee, {
              href: n,
              onClick: (e) => {
                  (e.stopPropagation(), a.q({ href: n }, e));
              },
              target: '_blank',
              rel: 'noopener noreferrer',
              children: t
          });
}
