n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(397927),
    s = n(975807),
    o = n(985018),
    c = n(212335),
    d = n(606566);
let u = (e) => {
    let {
        data: { url: t, link_text: n, link_description: r, is_localized: o },
    } = e;
    return o
        ? (0, l.jsxs)(i.DUT, {
              role: "link",
              className: a()(d.$J, c.lD),
              onClick: () => {
                  (0, s.A)(t);
              },
              children: [
                  (0, l.jsxs)("div", {
                      className: d.xU,
                      children: [
                          (0, l.jsx)(i.Text, {
                              className: d.__invalid_linkText,
                              variant: "text-md/semibold",
                              children: n,
                          }),
                          null != r &&
                              "" !== r &&
                              (0, l.jsx)(i.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: r,
                              }),
                      ],
                  }),
                  (0, l.jsx)(i.I9m, {
                      size: "sm",
                      color: "currentColor",
                      className: d.wP,
                  }),
              ],
          })
        : null;
};
function m(e) {
    let { elements: t } = e;
    if (
        null == t ||
        0 === t.length ||
        null ==
            t.find((e) => {
                let { data: t } = e;
                return t.is_localized;
            })
    )
        return null;
    let n = t.map((e, t) => {
            let { data: n } = e;
            return (0, l.jsx)(u, { data: n }, "external-link+".concat(t));
        }),
        r = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, l.jsxs)("div", {
        className: a()(d.nV, c.E8),
        children: [
            !r &&
                (0, l.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: d.wx,
                    children: o.intl.string(o.t.hvVgAZ),
                }),
            n,
        ],
    });
}
