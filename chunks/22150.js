n.d(t, { Z: () => m }), n(388685), n(953529);
var s = n(255367),
    r = n(73800),
    l = n(442837),
    i = n(481060),
    a = n(479531),
    o = n(393869),
    c = n(594174),
    x = n(388032),
    d = n(652297);
function m(e) {
    let { onNext: t, onClose: n } = e,
        [m, u] = r.useState(!1),
        E = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        _ = async (e) => {
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
    return (0, s.jsxs)('form', {
        onSubmit: _,
        children: [
            (0, s.jsxs)(i.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, s.jsx)(i.X6q, {
                        className: d.title,
                        variant: 'heading-xl/extrabold',
                        children: x.intl.string(x.t.uFxYq6)
                    }),
                    (0, s.jsx)(i.olH, {
                        onClick: n,
                        className: d.modalCloseButton
                    })
                ]
            }),
            (0, s.jsx)(i.hzk, {
                className: d.content,
                children: (0, s.jsx)(i.Text, {
                    className: d.description,
                    variant: 'text-md/normal',
                    children: x.intl.format(x.t.oMFSgo, { oldEmail: null == E ? void 0 : E.email })
                })
            }),
            (0, s.jsxs)(i.mzw, {
                className: d.modalFooter,
                children: [
                    (0, s.jsx)(i.zxk, {
                        type: 'submit',
                        color: i.zxk.Colors.BRAND,
                        size: i.zxk.Sizes.MEDIUM,
                        submitting: m,
                        className: d.__invalid_submit,
                        children: x.intl.string(x.t.rXV81N)
                    }),
                    (0, s.jsx)(i.zxk, {
                        className: d.__invalid_cancel,
                        look: i.zxk.Looks.LINK,
                        color: i.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
