n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(397927),
    s = n(975807),
    d = n(985018),
    o = n(212335),
    u = n(606566);
let c = (e) => {
    let {
        data: { url: t, link_text: n, link_description: a, is_localized: d },
    } = e;
    return d
        ? (0, l.jsxs)(r.DUT, {
              role: "link",
              className: i()(u.$J, o.lD),
              onClick: () => {
                  (0, s.A)(t);
              },
              children: [
                  (0, l.jsxs)("div", {
                      className: u.xU,
                      children: [
                          (0, l.jsx)(r.Text, {
                              className: u.__invalid_linkText,
                              variant: "text-md/semibold",
                              children: n,
                          }),
                          null != a &&
                              "" !== a &&
                              (0, l.jsx)(r.Text, { variant: "text-md/normal", color: "text-muted", children: a }),
                      ],
                  }),
                  (0, l.jsx)(r.I9m, { size: "sm", color: "currentColor", className: u.wP }),
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
            return (0, l.jsx)(c, { data: n }, `external-link+${t}`);
        }),
        a = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, l.jsxs)("div", {
        className: i()(u.nV, o.E8),
        children: [
            !a &&
                (0, l.jsx)(r.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: u.wx,
                    children: d.intl.string(d.t.hvVgAZ),
                }),
            n,
        ],
    });
}
