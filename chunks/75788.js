n.d(t, { Z: () => m }), n(388685);
var s = n(255367),
    r = n(73800),
    l = n(442837),
    i = n(481060),
    a = n(479531),
    o = n(393869),
    c = n(25990),
    x = n(388032),
    d = n(652297);
function m(e) {
    var t;
    let { isSlideReady: n, error: m, setEmailToken: u, setError: E, onNext: _, onClose: N } = e,
        [A, h] = r.useState(!1),
        [C, p] = r.useState(''),
        [j, S] = r.useState(!1),
        k = (0, l.e7)([c.Z], () => c.Z.getErrors()),
        f = r.useRef(null);
    r.useEffect(() => {
        if (n) {
            var e;
            null == (e = f.current) || e.focus();
        }
    }, [n]);
    let g = async (e) => {
            e.preventDefault(), E(null), h(!0);
            try {
                let { token: e } = await (0, o.w)(C);
                u(e), _();
            } catch (e) {
                E(new a.Z(e).getAnyErrorMessage());
            } finally {
                h(!1);
            }
        },
        M = async () => {
            if (!j) {
                S(!0);
                try {
                    await (0, o.i)(!0), (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['84yeo6']), i.ToastType.SUCCESS));
                } catch (t) {
                    let e = new a.Z(t).getAnyErrorMessage();
                    null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
                } finally {
                    S(!1);
                }
            }
        };
    return (0, s.jsxs)('form', {
        onSubmit: g,
        children: [
            (0, s.jsxs)(i.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, s.jsx)(i.X6q, {
                        className: d.title,
                        variant: 'heading-xl/extrabold',
                        children: x.intl.string(x.t.jMGc4O)
                    }),
                    (0, s.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: d.subtitle,
                        children: x.intl.string(x.t.SZJow8)
                    }),
                    (0, s.jsx)(i.olH, {
                        onClick: N,
                        className: d.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(i.hzk, {
                className: d.content,
                children: [
                    (0, s.jsx)(i.xJW, {
                        title: x.intl.string(x.t['8mZX6O']),
                        error: null != m ? m : null == k || null == (t = k.email_token) ? void 0 : t[0],
                        children: (0, s.jsx)(i.oil, {
                            value: C,
                            onChange: p,
                            inputRef: f
                        })
                    }),
                    (0, s.jsx)(i.Text, {
                        className: d.help,
                        variant: 'text-sm/normal',
                        children: x.intl.format(x.t.P0sak5, { onResend: M })
                    })
                ]
            }),
            (0, s.jsx)(i.mzw, {
                children: (0, s.jsx)(i.zxk, {
                    type: 'submit',
                    color: i.zxk.Colors.BRAND,
                    size: i.zxk.Sizes.MEDIUM,
                    submitting: A,
                    children: x.intl.string(x.t.PDTjLC)
                })
            })
        ]
    });
}
