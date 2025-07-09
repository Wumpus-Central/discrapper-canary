(n.d(t, { Z: () => o }), n(953529));
var s = n(255367);
n(73800);
var a = n(481060),
    r = n(308569),
    i = n(388032),
    l = n(652297);
function o(e) {
    let { onNext: t, onClose: n } = e;
    return (0, s.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, s.jsxs)(a.xBx, {
                separator: !1,
                className: l.header,
                children: [
                    (0, s.jsx)(a.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: i.intl.string(i.t.hhR7gY)
                    }),
                    (0, s.jsx)(a.olH, {
                        onClick: n,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(a.hzk, {
                className: l.content,
                children: [
                    (0, s.jsx)(a.Text, {
                        className: l.description,
                        variant: 'text-md/normal',
                        children: i.intl.format(i.t.rqWXUV, { hcArticle: r.j1 })
                    }),
                    (0, s.jsx)(a.Text, {
                        className: l.description,
                        variant: 'text-md/normal',
                        children: i.intl.string(i.t['3LW10N'])
                    })
                ]
            }),
            (0, s.jsx)(a.mzw, {
                className: l.modalFooter,
                children: (0, s.jsxs)(a.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, s.jsx)(a.zxk, {
                            variant: 'primary',
                            text: i.intl.string(i.t['ETE/oK']),
                            onClick: n
                        }),
                        (0, s.jsx)(a.zxk, {
                            variant: 'secondary',
                            text: i.intl.string(i.t.rwTBFh),
                            onClick: t
                        })
                    ]
                })
            })
        ]
    });
}
