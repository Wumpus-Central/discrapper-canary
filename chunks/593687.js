"use strict";
n.d(t, { _: () => c });
var i = n(627968);
n(64700);
var r = n(194261),
    a = n(534514),
    s = n(144165),
    l = n(772167),
    o = n(375708),
    d = n(738894);
function c(e) {
    let { partnerIds: t } = e;
    return (
        null != t
            ? Object.entries((0, l.Cf)()).filter((e) => {
                  let [n] = e;
                  return t.includes(n);
              })
            : Object.entries((0, l.Cf)())
    ).map((e) => {
        let [t, n] = e;
        return (0, i.jsx)(
            "div",
            {
                className: d.lA,
                children: (0, i.jsxs)("div", {
                    className: d.LV,
                    children: [
                        (0, i.jsxs)("div", {
                            className: d.JN,
                            children: [
                                (0, i.jsx)("div", {
                                    className: d.MC,
                                    children: (0, i.jsx)(r.X, { size: "refresh_sm" }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: d.yO,
                                    children: [
                                        (0, i.jsx)(a.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: o.intl.formatToPlainString(n.title, n.titleParams ?? {}),
                                        }),
                                        (0, i.jsx)(a.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: o.intl.formatToPlainString(n.body, n.bodyParams ?? {}),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: d.R4,
                            children: (0, i.jsx)(s._, {
                                src: n.asset,
                                className: d.Ys,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                                imageClassName: d.EM,
                            }),
                        }),
                    ],
                }),
            },
            t,
        );
    });
}
