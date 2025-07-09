i.d(e, { default: () => l });
var n = i(255367);
i(73800);
var r = i(481060),
    s = i(388032),
    a = i(915935);
function l(t) {
    let { onClose: e, transitionState: i, body: l } = t;
    return (0, n.jsxs)(r.Y0X, {
        transitionState: i,
        parentComponent: 'ProblemReported',
        children: [
            (0, n.jsx)(r.xBx, {
                separator: !1,
                children: (0, n.jsx)(r.vwX, {
                    tag: 'h2',
                    className: a.title,
                    children: s.intl.string(s.t.KTjjrK)
                })
            }),
            (0, n.jsx)(r.hzk, {
                children:
                    'string' == typeof l
                        ? (0, n.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              children: l
                          })
                        : l
            }),
            (0, n.jsx)(r.mzw, {
                children: (0, n.jsx)(r.zxk, {
                    variant: 'primary',
                    text: s.intl.string(s.t.i4jeWV),
                    onClick: e
                })
            })
        ]
    });
}
