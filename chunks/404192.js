"use strict";
n.d(t, { A: () => h });
var a = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    l = n(939249),
    s = n(834730),
    d = n(509434),
    o = n(534514),
    c = n(975807),
    u = n(985018),
    _ = n(777148),
    m = n(135363);
let p = (e) => {
    let {
        data: { url: t, link_text: n, link_description: i, is_localized: o },
    } = e;
    return o
        ? (0, a.jsxs)(l.D, {
              role: "link",
              className: r()(m.$J, _.lD),
              onClick: () => {
                  (0, c.A)(t);
              },
              children: [
                  (0, a.jsxs)("div", {
                      className: m.xU,
                      children: [
                          (0, a.jsx)(s.E, { className: m.__invalid_linkText, variant: "text-md/normal", children: n }),
                          null != i &&
                              "" !== i &&
                              (0, a.jsx)(s.E, { variant: "text-md/normal", color: "text-muted", children: i }),
                      ],
                  }),
                  (0, a.jsx)(d.I, { size: "sm", color: "currentColor", className: m.wP }),
              ],
          })
        : null;
};
function h(e) {
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
            return (0, a.jsx)(p, { data: n }, `external-link+${t}`);
        }),
        i = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, a.jsxs)("div", {
        className: r()(m.nV, _.E8),
        children: [
            !i &&
                (0, a.jsx)(o.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: m.wx,
                    children: u.intl.string(u.t.hvVgAZ),
                }),
            n,
        ],
    });
}
