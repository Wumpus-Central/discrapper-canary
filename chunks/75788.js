s.d(t, { Z: () => m }), s(388685);
var n = s(200651),
    r = s(192379),
    l = s(442837),
    i = s(481060),
    a = s(479531),
    o = s(393869),
    c = s(25990),
    x = s(388032),
    d = s(652297);
function m(e) {
    var t;
    let { isSlideReady: s, error: m, setEmailToken: u, setError: _, onNext: E, onClose: N } = e,
        [A, h] = r.useState(!1),
        [C, p] = r.useState(''),
        [j, S] = r.useState(!1),
        k = (0, l.e7)([c.Z], () => c.Z.getErrors()),
        f = r.useRef(null);
    r.useEffect(() => {
        if (s) {
            var e;
            null == (e = f.current) || e.focus();
        }
    }, [s]);
    let g = async (e) => {
            e.preventDefault(), _(null), h(!0);
            try {
                let { token: e } = await (0, o.w)(C);
                u(e), E();
            } catch (e) {
                _(new a.Z(e).getAnyErrorMessage());
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
    return (0, n.jsxs)('form', {
        onSubmit: g,
        children: [
            (0, n.jsxs)(i.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, n.jsx)(i.X6q, {
                        className: d.title,
                        variant: 'heading-xl/extrabold',
                        children: x.intl.string(x.t.jMGc4O)
                    }),
                    (0, n.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: d.subtitle,
                        children: x.intl.string(x.t.SZJow8)
                    }),
                    (0, n.jsx)(i.olH, {
                        onClick: N,
                        className: d.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(i.hzk, {
                className: d.content,
                children: [
                    (0, n.jsx)(i.xJW, {
                        title: x.intl.string(x.t['8mZX6O']),
                        error: null != m ? m : null == k || null == (t = k.email_token) ? void 0 : t[0],
                        children: (0, n.jsx)(i.oil, {
                            value: C,
                            onChange: p,
                            inputRef: f
                        })
                    }),
                    (0, n.jsx)(i.Text, {
                        className: d.help,
                        variant: 'text-sm/normal',
                        children: x.intl.format(x.t.P0sak5, { onResend: M })
                    })
                ]
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsx)(i.zxk, {
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
