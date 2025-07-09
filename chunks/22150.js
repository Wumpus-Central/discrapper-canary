(n.d(t, { Z: () => m }), n(388685), n(953529));
var s = n(255367),
    a = n(73800),
    r = n(442837),
    i = n(481060),
    l = n(479531),
    o = n(393869),
    c = n(594174),
    d = n(388032),
    x = n(652297);
function m(e) {
    let { onNext: t, onClose: n } = e,
        [m, u] = a.useState(!1),
        _ = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        E = async (e) => {
            (e.preventDefault(), u(!0));
            try {
                (await (0, o.i)(), t());
            } catch (t) {
                let e = new l.Z(t).getAnyErrorMessage();
                null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
            } finally {
                u(!1);
            }
        };
    return (0, s.jsxs)('form', {
        onSubmit: E,
        children: [
            (0, s.jsxs)(i.xBx, {
                separator: !1,
                className: x.header,
                children: [
                    (0, s.jsx)(i.X6q, {
                        className: x.title,
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t.uFxYq6)
                    }),
                    (0, s.jsx)(i.olH, {
                        onClick: n,
                        className: x.modalCloseButton
                    })
                ]
            }),
            (0, s.jsx)(i.hzk, {
                className: x.content,
                children: (0, s.jsx)(i.Text, {
                    className: x.description,
                    variant: 'text-md/normal',
                    children: d.intl.format(d.t.oMFSgo, { oldEmail: null == _ ? void 0 : _.email })
                })
            }),
            (0, s.jsxs)(i.mzw, {
                className: x.modalFooter,
                children: [
                    (0, s.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: x.__invalid_submit,
                        children: (0, s.jsx)(i.zxk, {
                            variant: 'primary',
                            text: d.intl.string(d.t.rXV81N),
                            type: 'submit',
                            loading: m
                        })
                    }),
                    (0, s.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: x.__invalid_cancel,
                        children: (0, s.jsx)(i.zxk, {
                            variant: 'secondary',
                            text: d.intl.string(d.t['ETE/oK']),
                            onClick: n
                        })
                    })
                ]
            })
        ]
    });
}
