s.d(t, { Z: () => m }), s(388685), s(953529);
var n = s(255367),
    r = s(73800),
    l = s(442837),
    i = s(481060),
    a = s(479531),
    o = s(393869),
    c = s(594174),
    x = s(388032),
    d = s(652297);
function m(e) {
    let { onNext: t, onClose: s } = e,
        [m, u] = r.useState(!1),
        _ = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        E = async (e) => {
            e.preventDefault(), u(!0);
            try {
                await (0, o.i)(), t();
            } catch (t) {
                let e = new a.Z(t).getAnyErrorMessage();
                null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
            } finally {
                u(!1);
            }
        };
    return (0, n.jsxs)('form', {
        onSubmit: E,
        children: [
            (0, n.jsxs)(i.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, n.jsx)(i.X6q, {
                        className: d.title,
                        variant: 'heading-xl/extrabold',
                        children: x.intl.string(x.t.uFxYq6)
                    }),
                    (0, n.jsx)(i.olH, {
                        onClick: s,
                        className: d.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(i.hzk, {
                className: d.content,
                children: (0, n.jsx)(i.Text, {
                    className: d.description,
                    variant: 'text-md/normal',
                    children: x.intl.format(x.t.oMFSgo, { oldEmail: null == _ ? void 0 : _.email })
                })
            }),
            (0, n.jsxs)(i.mzw, {
                className: d.modalFooter,
                children: [
                    (0, n.jsx)(i.zxk, {
                        type: 'submit',
                        color: i.zxk.Colors.BRAND,
                        size: i.zxk.Sizes.MEDIUM,
                        submitting: m,
                        className: d.__invalid_submit,
                        children: x.intl.string(x.t.rXV81N)
                    }),
                    (0, n.jsx)(i.zxk, {
                        className: d.__invalid_cancel,
                        look: i.zxk.Looks.LINK,
                        color: i.zxk.Colors.PRIMARY,
                        onClick: s,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
