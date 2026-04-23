n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(939249),
    s = n(834730),
    d = n(509434),
    o = n(534514),
    c = n(975807),
    u = n(985018),
    _ = n(777148),
    m = n(135363);
let h = (e) => {
    let {
        data: { url: t, link_text: n, link_description: a, is_localized: o },
    } = e;
    return o
        ? (0, l.jsxs)(r.D, {
              role: "link",
              className: i()(m.$J, _.lD),
              onClick: () => {
                  (0, c.A)(t);
              },
              children: [
                  (0, l.jsxs)("div", {
                      className: m.xU,
                      children: [
                          (0, l.jsx)(s.E, { className: m.__invalid_linkText, variant: "text-md/normal", children: n }),
                          null != a &&
                              "" !== a &&
                              (0, l.jsx)(s.E, { variant: "text-md/normal", color: "text-muted", children: a }),
                      ],
                  }),
                  (0, l.jsx)(d.I, { size: "sm", color: "currentColor", className: m.wP }),
              ],
          })
        : null;
};
function g(e) {
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
            return (0, l.jsx)(h, { data: n }, `external-link+${t}`);
        }),
        a = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, l.jsxs)("div", {
        className: i()(m.nV, _.E8),
        children: [
            !a &&
                (0, l.jsx)(o.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: m.wx,
                    children: u.intl.string(u.t.hvVgAZ),
                }),
            n,
        ],
    });
}
