t.d(s, { Z: () => i }), t(266796);
var n = t(200651);
t(192379);
var r = t(481060),
    a = t(308569),
    l = t(388032),
    o = t(652297);
function i(e) {
    let { onNext: s, onClose: t } = e;
    return (0, n.jsxs)('form', {
        onSubmit: s,
        children: [
            (0, n.jsxs)(r.xBx, {
                separator: !1,
                className: o.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: l.NW.string(l.t.hhR7gY)
                    }),
                    (0, n.jsx)(r.olH, {
                        onClick: t,
                        className: o.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(r.hzk, {
                className: o.content,
                children: [
                    (0, n.jsx)(r.Text, {
                        className: o.description,
                        variant: 'text-md/normal',
                        children: l.NW.format(l.t.rqWXUV, { hcArticle: a.j1 })
                    }),
                    (0, n.jsx)(r.Text, {
                        className: o.description,
                        variant: 'text-md/normal',
                        children: l.NW.string(l.t['3LW10N'])
                    })
                ]
            }),
            (0, n.jsxs)(r.mzw, {
                className: o.modalFooter,
                children: [
                    (0, n.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        onClick: t,
                        children: l.NW.string(l.t['ETE/oK'])
                    }),
                    (0, n.jsx)(r.zxk, {
                        color: r.zxk.Colors.PRIMARY,
                        look: r.zxk.Looks.LINK,
                        onClick: s,
                        children: l.NW.string(l.t.rwTBFh)
                    })
                ]
            })
        ]
    });
}
