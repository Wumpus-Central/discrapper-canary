n.d(i, { default: () => c });
var r = n(200651);
n(192379);
var e = n(481060),
    s = n(388032),
    l = n(646592);
function c(t) {
    let { onClose: i, transitionState: n, body: c } = t;
    return (0, r.jsxs)(e.Y0X, {
        transitionState: n,
        children: [
            (0, r.jsx)(e.xBx, {
                separator: !1,
                children: (0, r.jsx)(e.vwX, {
                    tag: 'h2',
                    className: l.title,
                    children: s.intl.string(s.t.KTjjrK)
                })
            }),
            (0, r.jsx)(e.hzk, {
                children:
                    'string' == typeof c
                        ? (0, r.jsx)(e.Text, {
                              variant: 'text-md/normal',
                              children: c
                          })
                        : c
            }),
            (0, r.jsx)(e.mzw, {
                children: (0, r.jsx)(e.zxk, {
                    color: e.zxk.Colors.BRAND,
                    onClick: i,
                    children: s.intl.string(s.t.i4jeWV)
                })
            })
        ]
    });
}
