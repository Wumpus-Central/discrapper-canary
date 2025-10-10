r.d(n, { default: () => s });
var i = r(951288);
r(647438);
var e = r(481060),
    a = r(388032);
function s(t) {
    let { onClose: n, transitionState: r, body: s } = t;
    return (0, i.jsxs)(e.Y0X, {
        transitionState: r,
        parentComponent: "ProblemReported",
        children: [
            (0, i.jsx)(e.xBx, {
                separator: !1,
                children: (0, i.jsx)(e.X6q, {
                    variant: "heading-md/semibold",
                    children: a.intl.string(a.t.KTjjrK),
                }),
            }),
            (0, i.jsx)(e.hzk, {
                children:
                    "string" == typeof s
                        ? (0, i.jsx)(e.Text, {
                              variant: "text-md/normal",
                              children: s,
                          })
                        : s,
            }),
            (0, i.jsx)(e.mzw, {
                children: (0, i.jsx)(e.zxk, {
                    variant: "primary",
                    text: a.intl.string(a.t.i4jeWV),
                    onClick: n,
                }),
            }),
        ],
    });
}
