(n.d(t, { Z: () => m }), n(388685));
var s = n(255367),
    a = n(73800),
    r = n(442837),
    i = n(481060),
    l = n(479531),
    o = n(393869),
    c = n(25990),
    d = n(388032),
    x = n(652297);
function m(e) {
    var t;
    let { isSlideReady: n, error: m, setEmailToken: u, setError: _, onNext: E, onClose: N } = e,
        [h, A] = a.useState(!1),
        [p, C] = a.useState(''),
        [j, f] = a.useState(!1),
        S = (0, r.e7)([c.Z], () => c.Z.getErrors()),
        g = a.useRef(null);
    a.useEffect(() => {
        if (n) {
            var e;
            null == (e = g.current) || e.focus();
        }
    }, [n]);
    let v = async (e) => {
            (e.preventDefault(), _(null), A(!0));
            try {
                let { token: e } = await (0, o.w)(p);
                (u(e), E());
            } catch (e) {
                _(new l.Z(e).getAnyErrorMessage());
            } finally {
                A(!1);
            }
        },
        O = async () => {
            if (!j) {
                f(!0);
                try {
                    (await (0, o.i)(!0), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t['84yeo6']), i.ToastType.SUCCESS)));
                } catch (t) {
                    let e = new l.Z(t).getAnyErrorMessage();
                    null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
                } finally {
                    f(!1);
                }
            }
        };
    return (0, s.jsxs)('form', {
        onSubmit: v,
        children: [
            (0, s.jsxs)(i.xBx, {
                separator: !1,
                className: x.header,
                children: [
                    (0, s.jsx)(i.X6q, {
                        className: x.title,
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t.jMGc4O)
                    }),
                    (0, s.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: x.subtitle,
                        children: d.intl.string(d.t.SZJow8)
                    }),
                    (0, s.jsx)(i.olH, {
                        onClick: N,
                        className: x.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(i.hzk, {
                className: x.content,
                children: [
                    (0, s.jsx)(i.xJW, {
                        title: d.intl.string(d.t['8mZX6O']),
                        error: null != m ? m : null == S || null == (t = S.email_token) ? void 0 : t[0],
                        children: (0, s.jsx)(i.oil, {
                            value: p,
                            onChange: C,
                            inputRef: g
                        })
                    }),
                    (0, s.jsx)(i.Text, {
                        className: x.help,
                        variant: 'text-sm/normal',
                        children: d.intl.format(d.t.P0sak5, { onResend: O })
                    })
                ]
            }),
            (0, s.jsx)(i.mzw, {
                children: (0, s.jsx)(i.zxk, {
                    variant: 'primary',
                    text: d.intl.string(d.t.PDTjLC),
                    type: 'submit',
                    loading: h
                })
            })
        ]
    });
}
