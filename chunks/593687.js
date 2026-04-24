s.d(t, { _: () => c });
var n = s(627968);
s(64700);
var a = s(194261),
    r = s(534514),
    l = s(144165),
    i = s(56225),
    d = s(985018),
    o = s(75662);
function c(e) {
    let { partnerIds: t } = e;
    return (
        null != t
            ? Object.entries((0, i.Cf)()).filter((e) => {
                  let [s] = e;
                  return t.includes(s);
              })
            : Object.entries((0, i.Cf)())
    ).map((e) => {
        let [t, s] = e;
        return (0, n.jsx)(
            "div",
            {
                className: o.lA,
                children: (0, n.jsxs)("div", {
                    className: o.LV,
                    children: [
                        (0, n.jsxs)("div", {
                            className: o.JN,
                            children: [
                                (0, n.jsx)("div", {
                                    className: o.MC,
                                    children: (0, n.jsx)(a.X, { size: "refresh_sm" }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: o.yO,
                                    children: [
                                        (0, n.jsx)(r.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: d.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                                        }),
                                        (0, n.jsx)(r.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: d.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: o.R4,
                            children: (0, n.jsx)(l._, {
                                src: s.asset,
                                className: o.Ys,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                    ],
                }),
            },
            t,
        );
    });
}
