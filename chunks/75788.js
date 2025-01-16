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
    d = n(25990),
    c = n(388032),
    u = n(981818);
function m(e) {
    var t;
    let { isSlideReady: n, error: m, setEmailToken: _, setError: E, onNext: N, onClose: x } = e,
        [A, C] = o.useState(!1),
        [h, M] = o.useState(''),
        [S, p] = o.useState(!1),
        I = (0, l.e7)([d.Z], () => d.Z.getErrors()),
        f = o.useRef(null);
    o.useEffect(() => {
        if (n) {
            var e;
            null === (e = f.current) || void 0 === e || e.focus();
        }
    }, [n]);
    let j = async (e) => {
            e.preventDefault(), E(null), C(!0);
            try {
                let { token: e } = await (0, r.w)(h);
                _(e), N();
            } catch (e) {
                E(new i.Z(e).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        g = async () => {
            if (!S) {
                p(!0);
                try {
                    await (0, r.i)(!0), (0, a.showToast)((0, a.createToast)(c.intl.string(c.t['84yeo6']), a.ToastType.SUCCESS));
                } catch (t) {
                    let e = new i.Z(t).getAnyErrorMessage();
                    null != e && (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
                } finally {
                    p(!1);
                }
            }
        };
    return (0, s.jsxs)('form', {
        onSubmit: j,
        children: [
            (0, s.jsxs)(a.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, s.jsx)(a.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: c.intl.string(c.t.jMGc4O)
                    }),
                    (0, s.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: u.subtitle,
                        children: c.intl.string(c.t.SZJow8)
                    }),
                    (0, s.jsx)(a.ModalCloseButton, {
                        onClick: x,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(a.ModalContent, {
                className: u.content,
                children: [
                    (0, s.jsx)(a.FormItem, {
                        title: c.intl.string(c.t['8mZX6O']),
                        error: null != m ? m : null == I ? void 0 : null === (t = I.email_token) || void 0 === t ? void 0 : t[0],
                        children: (0, s.jsx)(a.TextInput, {
                            value: h,
                            onChange: M,
                            inputRef: f
                        })
                    }),
                    (0, s.jsx)(a.Text, {
                        className: u.help,
                        variant: 'text-sm/normal',
                        children: c.intl.format(c.t.P0sak5, { onResend: g })
                    })
                ]
            }),
            (0, s.jsx)(a.ModalFooter, {
                children: (0, s.jsx)(a.Button, {
                    type: 'submit',
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    submitting: A,
                    children: c.intl.string(c.t.PDTjLC)
                })
            })
        ]
    });
}
