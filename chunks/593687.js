l.d(t, { _: () => c });
var i = l(627968);
l(64700);
var r = l(194261),
    a = l(534514),
    s = l(144165),
    n = l(56225),
    o = l(375708),
    d = l(75662);
function c(e) {
    let { partnerIds: t } = e;
    return (
        null != t
            ? Object.entries((0, n.Cf)()).filter((e) => {
                  let [l] = e;
                  return t.includes(l);
              })
            : Object.entries((0, n.Cf)())
    ).map((e) => {
        let [t, l] = e;
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
                                            children: o.intl.formatToPlainString(l.title, l.titleParams ?? {}),
                                        }),
                                        (0, i.jsx)(a.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: o.intl.formatToPlainString(l.body, l.bodyParams ?? {}),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: d.R4,
                            children: (0, i.jsx)(s._, {
                                src: l.asset,
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
