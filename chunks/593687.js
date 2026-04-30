"use strict";
n.d(t, { _: () => c });
var i = n(627968);
n(64700);
var r = n(194261),
    s = n(534514),
    a = n(144165),
    o = n(56225),
    l = n(375708),
    u = n(75662);
function c(e) {
    let { partnerIds: t } = e;
    return (
        null != t
            ? Object.entries((0, o.Cf)()).filter((e) => {
                  let [n] = e;
                  return t.includes(n);
              })
            : Object.entries((0, o.Cf)())
    ).map((e) => {
        let [t, n] = e;
        return (0, i.jsx)(
            "div",
            {
                className: u.lA,
                children: (0, i.jsxs)("div", {
                    className: u.LV,
                    children: [
                        (0, i.jsxs)("div", {
                            className: u.JN,
                            children: [
                                (0, i.jsx)("div", {
                                    className: u.MC,
                                    children: (0, i.jsx)(r.X, { size: "refresh_sm" }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: u.yO,
                                    children: [
                                        (0, i.jsx)(s.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: l.intl.formatToPlainString(n.title, n.titleParams ?? {}),
                                        }),
                                        (0, i.jsx)(s.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: l.intl.formatToPlainString(n.body, n.bodyParams ?? {}),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: u.R4,
                            children: (0, i.jsx)(a._, {
                                src: n.asset,
                                className: u.Ys,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                                imageClassName: u.EM,
                            }),
                        }),
                    ],
                }),
            },
            t,
        );
    });
}
