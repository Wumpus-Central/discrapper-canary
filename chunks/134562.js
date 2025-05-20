s.d(t, { Z: () => o }), s(953529);
var n = s(255367);
s(73800);
var r = s(481060),
    l = s(308569),
    i = s(388032),
    a = s(652297);
function o(e) {
    let { onNext: t, onClose: s } = e;
    return (0, n.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, n.jsxs)(r.xBx, {
                separator: !1,
                className: a.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: i.intl.string(i.t.hhR7gY)
                    }),
                    (0, n.jsx)(r.olH, {
                        onClick: s,
                        className: a.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(r.hzk, {
                className: a.content,
                children: [
                    (0, n.jsx)(r.Text, {
                        className: a.description,
                        variant: 'text-md/normal',
                        children: i.intl.format(i.t.rqWXUV, { hcArticle: l.j1 })
                    }),
                    (0, n.jsx)(r.Text, {
                        className: a.description,
                        variant: 'text-md/normal',
                        children: i.intl.string(i.t['3LW10N'])
                    })
                ]
            }),
            (0, n.jsxs)(r.mzw, {
                className: a.modalFooter,
                children: [
                    (0, n.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        onClick: s,
                        children: i.intl.string(i.t['ETE/oK'])
                    }),
                    (0, n.jsx)(r.zxk, {
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
