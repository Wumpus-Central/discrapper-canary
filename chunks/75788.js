t.d(s, { Z: () => N }), t(47120);
var n = t(200651),
    r = t(192379),
    a = t(442837),
    l = t(481060),
    o = t(479531),
    i = t(393869),
    c = t(25990),
    x = t(388032),
    d = t(652297);
function N(e) {
    var s;
    let { isSlideReady: t, error: N, setEmailToken: m, setError: u, onNext: _, onClose: E } = e,
        [A, h] = r.useState(!1),
        [C, p] = r.useState(''),
        [j, S] = r.useState(!1),
        k = (0, a.e7)([c.Z], () => c.Z.getErrors()),
        f = r.useRef(null);
    r.useEffect(() => {
        if (t) {
            var e;
            null == (e = f.current) || e.focus();
        }
    }, [t]);
    let g = async (e) => {
            e.preventDefault(), u(null), h(!0);
            try {
                let { token: e } = await (0, i.w)(C);
                m(e), _();
            } catch (e) {
                u(new o.Z(e).getAnyErrorMessage());
            } finally {
                h(!1);
            }
        },
        M = async () => {
            if (!j) {
                S(!0);
                try {
                    await (0, i.i)(!0), (0, l.showToast)((0, l.createToast)(x.NW.string(x.t['84yeo6']), l.ToastType.SUCCESS));
                } catch (s) {
                    let e = new o.Z(s).getAnyErrorMessage();
                    null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
                } finally {
                    S(!1);
                }
            }
        };
    return (0, n.jsxs)('form', {
        onSubmit: g,
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: d.title,
                        variant: 'heading-xl/extrabold',
                        children: x.NW.string(x.t.jMGc4O)
                    }),
                    (0, n.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: d.subtitle,
                        children: x.NW.string(x.t.SZJow8)
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: E,
                        className: d.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: d.content,
                children: [
                    (0, n.jsx)(l.xJW, {
                        title: x.NW.string(x.t['8mZX6O']),
                        error: null != N ? N : null == k || null == (s = k.email_token) ? void 0 : s[0],
                        children: (0, n.jsx)(l.oil, {
                            value: C,
                            onChange: p,
                            inputRef: f
                        })
                    }),
                    (0, n.jsx)(l.Text, {
                        className: d.help,
                        variant: 'text-sm/normal',
                        children: x.NW.format(x.t.P0sak5, { onResend: M })
                    })
                ]
            }),
            (0, n.jsx)(l.mzw, {
                children: (0, n.jsx)(l.zxk, {
                    type: 'submit',
                    color: l.zxk.Colors.BRAND,
                    size: l.zxk.Sizes.MEDIUM,
                    submitting: A,
                    children: x.NW.string(x.t.PDTjLC)
                })
            })
        ]
    });
}
