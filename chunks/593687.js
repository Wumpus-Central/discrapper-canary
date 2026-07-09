i.d(t, { _: () => c });
var r = i(627968);
i(64700);
var n = i(194261),
    s = i(534514),
    a = i(144165),
    l = i(772167),
    o = i(375708),
    d = i(738894);
function c(e) {
    let { partnerIds: t } = e;
    return (
        null != t
            ? Object.entries((0, l.Cf)()).filter((e) => {
                  let [i] = e;
                  return t.includes(i);
              })
            : Object.entries((0, l.Cf)())
    ).map((e) => {
        let [t, i] = e;
        return (0, r.jsx)(
            "div",
            {
                className: d.lA,
                children: (0, r.jsxs)("div", {
                    className: d.LV,
                    children: [
                        (0, r.jsxs)("div", {
                            className: d.JN,
                            children: [
                                (0, r.jsx)("div", {
                                    className: d.MC,
                                    children: (0, r.jsx)(n.X, { size: "refresh_sm" }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: d.yO,
                                    children: [
                                        (0, r.jsx)(s.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: o.intl.formatToPlainString(i.title, i.titleParams ?? {}),
                                        }),
                                        (0, r.jsx)(s.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: o.intl.formatToPlainString(i.body, i.bodyParams ?? {}),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: d.R4,
                            children: (0, r.jsx)(a._, {
                                src: i.asset,
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
