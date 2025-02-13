t.d(s, { Z: () => m }), t(47120);
var n = t(200651),
    l = t(192379),
    i = t(442837),
    a = t(481060),
    r = t(479531),
    o = t(393869),
    c = t(25990),
    d = t(388032),
    x = t(669154);
function m(e) {
    var s;
    let { isSlideReady: t, error: m, setEmailToken: u, setError: _, onNext: E, onClose: N } = e,
        [A, C] = l.useState(!1),
        [h, S] = l.useState(''),
        [k, p] = l.useState(!1),
        j = (0, i.e7)([c.Z], () => c.Z.getErrors()),
        M = l.useRef(null);
    l.useEffect(() => {
        if (t) {
            var e;
            null === (e = M.current) || void 0 === e || e.focus();
        }
    }, [t]);
    let I = async (e) => {
            e.preventDefault(), _(null), C(!0);
            try {
                let { token: e } = await (0, o.w)(h);
                u(e), E();
            } catch (e) {
                _(new r.Z(e).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        R = async () => {
            if (!k) {
                p(!0);
                try {
                    await (0, o.i)(!0), (0, a.showToast)((0, a.createToast)(d.intl.string(d.t['84yeo6']), a.ToastType.SUCCESS));
                } catch (s) {
                    let e = new r.Z(s).getAnyErrorMessage();
                    null != e && (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
                } finally {
                    p(!1);
                }
            }
        };
    return (0, n.jsxs)('form', {
        onSubmit: I,
        children: [
            (0, n.jsxs)(a.xBx, {
                separator: !1,
                className: x.header,
                children: [
                    (0, n.jsx)(a.X6q, {
                        className: x.title,
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t.jMGc4O)
                    }),
                    (0, n.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: x.subtitle,
                        children: d.intl.string(d.t.SZJow8)
                    }),
                    (0, n.jsx)(a.olH, {
                        onClick: N,
                        className: x.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(a.hzk, {
                className: x.content,
                children: [
                    (0, n.jsx)(a.xJW, {
                        title: d.intl.string(d.t['8mZX6O']),
                        error: null != m ? m : null == j ? void 0 : null === (s = j.email_token) || void 0 === s ? void 0 : s[0],
                        children: (0, n.jsx)(a.oil, {
                            value: h,
                            onChange: S,
                            inputRef: M
                        })
                    }),
                    (0, n.jsx)(a.Text, {
                        className: x.help,
                        variant: 'text-sm/normal',
                        children: d.intl.format(d.t.P0sak5, { onResend: R })
                    })
                ]
            }),
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)(a.zxk, {
                    type: 'submit',
                    color: a.zxk.Colors.BRAND,
                    size: a.zxk.Sizes.MEDIUM,
                    submitting: A,
                    children: d.intl.string(d.t.PDTjLC)
                })
            })
        ]
    });
}
