n.d(t, { n: () => c });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(688465),
    a = n(921944),
    l = n(388032),
    o = n(882051);
function c(e) {
    let { markAsDismissed: t, onCTA: c } = e;
    return (0, i.jsxs)('div', {
        className: o.popup,
        children: [
            (0, i.jsxs)('div', {
                className: o.background,
                children: [(0, i.jsx)('div', { className: o.blur0 }), (0, i.jsx)('div', { className: o.blur1 }), (0, i.jsx)('div', { className: o.blur2 })]
            }),
            (0, i.jsxs)('div', {
                className: o.content,
                children: [
                    (0, i.jsx)(r.P3F, {
                        className: o.closeIcon,
                        onClick: () => t(a.L.USER_DISMISS),
                        children: (0, i.jsx)(r.Dio, {})
                    }),
                    (0, i.jsx)('img', {
                        src: n(414190),
                        className: o.art,
                        alt: ''
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(r.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                className: o.heading,
                                children: [l.intl.string(l.t.MLt8Hx), (0, i.jsx)(s.Z, { className: o.betaTag })]
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: l.intl.string(l.t['l+lSLi'])
                            })
                        ]
                    }),
                    (0, i.jsx)(r.zxk, {
                        variant: 'primary',
                        text: l.intl.string(l.t['9WdoBw']),
                        fullWidth: !0,
                        onClick: () => {
                            (t(a.L.TAKE_ACTION), c());
                        }
                    })
                ]
            })
        ]
    });
}
