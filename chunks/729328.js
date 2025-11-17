i.d(n, { default: () => s });
var r = i(54381);
i(473749);
var e = i(481060),
    a = i(388032);
function s(t) {
    let { onClose: n, transitionState: i, body: s } = t;
    return (0, r.jsxs)(e.Y0X, {
        transitionState: i,
        parentComponent: "ProblemReported",
        children: [
            (0, r.jsx)(e.xBx, {
                separator: !1,
                children: (0, r.jsx)(e.Heading, {
                    variant: "heading-md/semibold",
                    children: a.intl.string(a.t.KTjjrG),
                }),
            }),
            (0, r.jsx)(e.hzk, {
                children:
                    "string" == typeof s
                        ? (0, r.jsx)(e.Text, {
                              variant: "text-md/normal",
                              children: s,
                          })
                        : s,
            }),
            (0, r.jsx)(e.mzw, {
                children: (0, r.jsx)(e.Button, {
                    variant: "primary",
                    text: a.intl.string(a.t.i4jeWR),
                    onClick: n,
                }),
            }),
        ],
    });
}
