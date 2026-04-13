n.d(t, { A: () => _ });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(397927),
    s = n(975807),
    d = n(985018),
    o = n(687404),
    c = n(566707);
let u = (e) => {
    let {
        data: { url: t, link_text: n, link_description: l, is_localized: d },
    } = e;
    return d
        ? (0, a.jsxs)(r.DUT, {
              role: "link",
              className: i()(c.$J, o.lD),
              onClick: () => {
                  (0, s.A)(t);
              },
              children: [
                  (0, a.jsxs)("div", {
                      className: c.xU,
                      children: [
                          (0, a.jsx)(r.Text, {
                              className: c.__invalid_linkText,
                              variant: "text-md/normal",
                              children: n,
                          }),
                          null != l &&
                              "" !== l &&
                              (0, a.jsx)(r.Text, { variant: "text-md/normal", color: "text-muted", children: l }),
                      ],
                  }),
                  (0, a.jsx)(r.I9m, { size: "sm", color: "currentColor", className: c.wP }),
              ],
          })
        : null;
};
function _(e) {
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
            return (0, a.jsx)(u, { data: n }, `external-link+${t}`);
        }),
        l = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, a.jsxs)("div", {
        className: i()(c.nV, o.E8),
        children: [
            !l &&
                (0, a.jsx)(r.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: c.wx,
                    children: d.intl.string(d.t.hvVgAZ),
                }),
            n,
        ],
    });
}
