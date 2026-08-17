i.d(t, { _: () => d });
var n = i(477900);
i(582128);
var r = i(194261),
    s = i(297264),
    a = i(144165),
    l = i(772167),
    o = i(375708),
    c = i(640886);
function d(e) {
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
        return (0, n.jsx)(
            "div",
            {
                className: c.lA,
                children: (0, n.jsxs)("div", {
                    className: c.LV,
                    children: [
                        (0, n.jsxs)("div", {
                            className: c.JN,
                            children: [
                                (0, n.jsx)("div", {
                                    className: c.MC,
                                    children: (0, n.jsx)(r.LockIcon, { size: "refresh_sm" }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: c.yO,
                                    children: [
                                        (0, n.jsx)(s.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: o.intl.formatToPlainString(i.title, i.titleParams ?? {}),
                                        }),
                                        (0, n.jsx)(s.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: o.intl.formatToPlainString(i.body, i.bodyParams ?? {}),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: c.R4,
                            children: (0, n.jsx)(a._, {
                                src: i.asset,
                                className: c.Ys,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                                imageClassName: c.EM,
                            }),
                        }),
                    ],
                }),
            },
            t,
        );
    });
}
