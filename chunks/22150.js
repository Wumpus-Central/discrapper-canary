n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var s = n(200651),
    o = n(192379),
    l = n(442837),
    a = n(481060),
    i = n(479531),
    r = n(393869),
    d = n(594174),
    c = n(388032),
    u = n(981818);
function m(e) {
    let { onNext: t, onClose: n } = e,
        [m, _] = o.useState(!1),
        E = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        N = async (e) => {
            e.preventDefault(), _(!0);
            try {
                await (0, r.i)(), t();
            } catch (t) {
                let e = new i.Z(t).getAnyErrorMessage();
                null != e && (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
            } finally {
                _(!1);
            }
        };
    return (0, s.jsxs)('form', {
        onSubmit: N,
        children: [
            (0, s.jsxs)(a.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, s.jsx)(a.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: c.intl.string(c.t.uFxYq6)
                    }),
                    (0, s.jsx)(a.ModalCloseButton, {
                        onClick: n,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, s.jsx)(a.ModalContent, {
                className: u.content,
                children: (0, s.jsx)(a.Text, {
                    className: u.description,
                    variant: 'text-md/normal',
                    children: c.intl.format(c.t.oMFSgo, { oldEmail: null == E ? void 0 : E.email })
                })
            }),
            (0, s.jsxs)(a.ModalFooter, {
                className: u.modalFooter,
                children: [
                    (0, s.jsx)(a.Button, {
                        type: 'submit',
                        color: a.Button.Colors.BRAND,
                        size: a.Button.Sizes.MEDIUM,
                        submitting: m,
                        className: u.__invalid_submit,
                        children: c.intl.string(c.t.rXV81N)
                    }),
                    (0, s.jsx)(a.Button, {
                        className: u.__invalid_cancel,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: n,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
