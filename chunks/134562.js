n.d(t, { Z: () => o }), n(953529);
var s = n(255367);
n(73800);
var r = n(481060),
    l = n(308569),
    i = n(388032),
    a = n(652297);
function o(e) {
    let { onNext: t, onClose: n } = e;
    return (0, s.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, s.jsxs)(r.xBx, {
                separator: !1,
                className: a.header,
                children: [
                    (0, s.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: i.intl.string(i.t.hhR7gY)
                    }),
                    (0, s.jsx)(r.olH, {
                        onClick: n,
                        className: a.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(r.hzk, {
                className: a.content,
                children: [
                    (0, s.jsx)(r.Text, {
                        className: a.description,
                        variant: 'text-md/normal',
                        children: i.intl.format(i.t.rqWXUV, { hcArticle: l.j1 })
                    }),
                    (0, s.jsx)(r.Text, {
                        className: a.description,
                        variant: 'text-md/normal',
                        children: i.intl.string(i.t['3LW10N'])
                    })
                ]
            }),
            (0, s.jsxs)(r.mzw, {
                className: a.modalFooter,
                children: [
                    (0, s.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        onClick: n,
                        children: i.intl.string(i.t['ETE/oK'])
                    }),
                    (0, s.jsx)(r.zxk, {
                        color: r.zxk.Colors.PRIMARY,
                        look: r.zxk.Looks.LINK,
                        onClick: t,
                        children: i.intl.string(i.t.rwTBFh)
                    })
                ]
            })
        ]
    });
}
