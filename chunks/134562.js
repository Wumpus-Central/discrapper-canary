t.d(s, { Z: () => o });
var n = t(200651);
t(192379);
var l = t(481060),
    i = t(308569),
    a = t(388032),
    r = t(669154);
function o(e) {
    let { onNext: s, onClose: t } = e;
    return (0, n.jsxs)('form', {
        onSubmit: s,
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: r.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: a.intl.string(a.t.hhR7gY)
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: t,
                        className: r.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: r.content,
                children: [
                    (0, n.jsx)(l.Text, {
                        className: r.description,
                        variant: 'text-md/normal',
                        children: a.intl.format(a.t.rqWXUV, { hcArticle: i.j1 })
                    }),
                    (0, n.jsx)(l.Text, {
                        className: r.description,
                        variant: 'text-md/normal',
                        children: a.intl.string(a.t['3LW10N'])
                    })
                ]
            }),
            (0, n.jsxs)(l.mzw, {
                className: r.modalFooter,
                children: [
                    (0, n.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: t,
                        children: a.intl.string(a.t['ETE/oK'])
                    }),
                    (0, n.jsx)(l.zxk, {
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        onClick: s,
                        children: a.intl.string(a.t.rwTBFh)
                    })
                ]
            })
        ]
    });
}
