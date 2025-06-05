n.d(e, { default: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    s = n(388032),
    l = n(915935);
function o(t) {
    let { onClose: e, transitionState: n, body: o } = t;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: n,
        parentComponent: 'ProblemReported',
        children: [
            (0, r.jsx)(i.xBx, {
                separator: !1,
                children: (0, r.jsx)(i.vwX, {
                    tag: 'h2',
                    className: l.title,
                    children: s.intl.string(s.t.KTjjrK)
                })
            }),
            (0, r.jsx)(i.hzk, {
                children:
                    'string' == typeof o
                        ? (0, r.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              children: o
                          })
                        : o
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsx)(i.zxk, {
                    color: i.zxk.Colors.BRAND,
                    onClick: e,
                    children: s.intl.string(s.t.i4jeWV)
                })
            })
        ]
    });
}
