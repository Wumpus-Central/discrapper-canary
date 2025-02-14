n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(990547),
    r = n(481060),
    a = n(313201),
    s = n(758119),
    o = n(388032),
    d = n(283026);
function c(e) {
    let { transitionState: t } = e,
        c = (0, a.Dt)();
    return (0, i.jsxs)(r.Y0X, {
        transitionState: t,
        size: r.CgR.SMALL,
        'aria-labelledby': c,
        impression: {
            impressionName: l.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !0 }
        },
        children: [
            (0, i.jsx)(r.hzk, {
                children: (0, i.jsxs)('div', {
                    className: d.container,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: n(863181),
                            className: d.img
                        }),
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-xl/semibold',
                            className: d.title,
                            id: c,
                            children: o.intl.string(o.t.gUiIGR)
                        }),
                        (0, i.jsx)(r.Text, {
                            color: 'header-secondary',
                            className: d.subtitle,
                            variant: 'text-sm/normal',
                            children: o.intl.string(o.t.susqq6)
                        })
                    ]
                })
            }),
            (0, i.jsx)(r.mzw, {
                children: (0, i.jsx)(r.zxk, {
                    size: r.PhG.SMALL,
                    fullWidth: !0,
                    onClick: function () {
                        (0, s.qV)();
                    },
                    autoFocus: !0,
                    children: o.intl.string(o.t.cpT0Cg)
                })
            })
        ]
    });
}
