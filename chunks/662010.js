var l = e(477900),
    i = e(28863),
    a = e(889558),
    r = e(824062);
e.d(
    n,
    {},
    {
        O: function (t) {
            let { children: n, href: e } = t;
            return null == e
                ? n
                : (0, l.jsx)(i.Anchor, {
                      className: r.n,
                      href: e,
                      onClick: (t) => {
                          (t.stopPropagation(), a.h({ href: e }, t));
                      },
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: n,
                  });
        },
    },
);
