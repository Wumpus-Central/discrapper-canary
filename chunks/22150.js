t.d(s, { Z: () => N }), t(47120), t(266796);
var n = t(200651),
    r = t(192379),
    a = t(442837),
    l = t(481060),
    o = t(479531),
    i = t(393869),
    c = t(594174),
    d = t(388032),
    x = t(925495);
function N(e) {
    let { onNext: s, onClose: t } = e,
        [N, m] = r.useState(!1),
        u = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        _ = async (e) => {
            e.preventDefault(), m(!0);
            try {
                await (0, i.i)(), s();
            } catch (s) {
                let e = new o.Z(s).getAnyErrorMessage();
                null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
            } finally {
                m(!1);
            }
        };
    return (0, n.jsxs)('form', {
        onSubmit: _,
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: x.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: x.title,
                        variant: 'heading-xl/extrabold',
                        children: d.NW.string(d.t.uFxYq6)
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: t,
                        className: x.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(l.hzk, {
                className: x.content,
                children: (0, n.jsx)(l.Text, {
                    className: x.description,
                    variant: 'text-md/normal',
                    children: d.NW.format(d.t.oMFSgo, { oldEmail: null == u ? void 0 : u.email })
                })
            }),
            (0, n.jsxs)(l.mzw, {
                className: x.modalFooter,
                children: [
                    (0, n.jsx)(l.zxk, {
                        type: 'submit',
                        color: l.zxk.Colors.BRAND,
                        size: l.zxk.Sizes.MEDIUM,
                        submitting: N,
                        className: x.__invalid_submit,
                        children: d.NW.string(d.t.rXV81N)
                    }),
                    (0, n.jsx)(l.zxk, {
                        className: x.__invalid_cancel,
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: d.NW.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
