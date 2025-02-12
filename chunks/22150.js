t.d(s, { Z: () => m }), t(47120);
var n = t(200651),
    l = t(192379),
    i = t(442837),
    a = t(481060),
    r = t(479531),
    o = t(393869),
    c = t(594174),
    d = t(388032),
    x = t(669154);
function m(e) {
    let { onNext: s, onClose: t } = e,
        [m, u] = l.useState(!1),
        _ = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        E = async (e) => {
            e.preventDefault(), u(!0);
            try {
                await (0, o.i)(), s();
            } catch (s) {
                let e = new r.Z(s).getAnyErrorMessage();
                null != e && (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
            } finally {
                u(!1);
            }
        };
    return (0, n.jsxs)('form', {
        onSubmit: E,
        children: [
            (0, n.jsxs)(a.xBx, {
                separator: !1,
                className: x.header,
                children: [
                    (0, n.jsx)(a.X6q, {
                        className: x.title,
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t.uFxYq6)
                    }),
                    (0, n.jsx)(a.olH, {
                        onClick: t,
                        className: x.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(a.hzk, {
                className: x.content,
                children: (0, n.jsx)(a.Text, {
                    className: x.description,
                    variant: 'text-md/normal',
                    children: d.intl.format(d.t.oMFSgo, { oldEmail: null == _ ? void 0 : _.email })
                })
            }),
            (0, n.jsxs)(a.mzw, {
                className: x.modalFooter,
                children: [
                    (0, n.jsx)(a.zxk, {
                        type: 'submit',
                        color: a.zxk.Colors.BRAND,
                        size: a.zxk.Sizes.MEDIUM,
                        submitting: m,
                        className: x.__invalid_submit,
                        children: d.intl.string(d.t.rXV81N)
                    }),
                    (0, n.jsx)(a.zxk, {
                        className: x.__invalid_cancel,
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
