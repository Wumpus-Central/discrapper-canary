s.d(t, { _: () => c });
var a = s(627968);
s(64700);
var r = s(194261),
    l = s(534514),
    i = s(144165),
    n = s(56225),
    d = s(375708),
    o = s(75662);
function c(e) {
    let { partnerIds: t } = e;
    return (
        null != t
            ? Object.entries((0, n.Cf)()).filter((e) => {
                  let [s] = e;
                  return t.includes(s);
              })
            : Object.entries((0, n.Cf)())
    ).map((e) => {
        let [t, s] = e;
        return (0, a.jsx)(
            "div",
            {
                className: o.lA,
                children: (0, a.jsxs)("div", {
                    className: o.LV,
                    children: [
                        (0, a.jsxs)("div", {
                            className: o.JN,
                            children: [
                                (0, a.jsx)("div", {
                                    className: o.MC,
                                    children: (0, a.jsx)(r.X, { size: "refresh_sm" }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: o.yO,
                                    children: [
                                        (0, a.jsx)(l.D, {
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: d.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                                        }),
                                        (0, a.jsx)(l.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: d.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: o.R4,
                            children: (0, a.jsx)(i._, {
                                src: s.asset,
                                className: o.Ys,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                                imageClassName: o.EM,
                            }),
                        }),
                    ],
                }),
            },
            t,
        );
    });
}
