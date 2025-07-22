(n.d(t, { default: () => y }), n(314940), n(388685));
var s = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    r = n(512722),
    o = n.n(r),
    u = n(954955),
    c = n.n(u),
    d = n(278074),
    m = n(442837),
    x = n(755721),
    f = n(481060),
    h = n(809206),
    p = n(219496),
    b = n(575681),
    g = n(807369),
    v = n(180529),
    j = n(25990),
    _ = n(594174),
    C = n(74538),
    w = n(981631),
    k = n(388032),
    I = n(238861),
    N = n(165005);
let E = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, d.EQ)(t)
        .with(
            {
                type: p.K.ERROR,
                message: d.P.select()
            },
            (e) =>
                (0, s.jsx)(f.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: e
                })
        )
        .with(
            {
                type: p.K.AVAILABLE,
                message: d.P.select()
            },
            (e) =>
                (0, s.jsx)(f.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-feedback-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, s.jsx)(f.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-default',
                      children: k.intl.string(k.t.z7c4bG)
                  })
                : null
        );
};
function y(e) {
    var t;
    let { transitionState: n, onClose: l } = e,
        r = (0, m.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return (o()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e);
        }),
        u = a.useMemo(() => C.ZP.canEditDiscriminator(r) && !r.isPomelo(), [r]),
        [d, y] = a.useState(!1),
        [L, R] = a.useState(r.username),
        [S, T] = a.useState(r.discriminator),
        [F, B] = a.useState(''),
        [P, W] = a.useState(!1),
        z = (0, m.e7)([j.Z], () => j.Z.getErrors()),
        U = (0, b.n)(),
        M = r.isPomelo() && U,
        q = (0, g.a)(L, M, !1, r.username),
        D = a.useRef(null),
        J = a.useMemo(() => {
            var e, t, n;
            return null != (n = null == z || null == (e = z.username) ? void 0 : e[0]) ? n : null == z || null == (t = z.discriminator) ? void 0 : t[0];
        }, [z]);
    a.useEffect(() => {
        if (n === f.Dvm.ENTERED) {
            var e;
            null == (e = D.current) || e.focus();
        }
    }, [n]);
    let K = S !== r.discriminator;
    async function Z(e) {
        (e.preventDefault(), W(!0));
        let t = await (0, h.Mn)({
            username: L,
            discriminator: u ? S : void 0,
            password: F
        });
        (W(!1), (null == t ? void 0 : t.ok) && l());
    }
    let A = a.useMemo(() => c()(y, 50), []);
    return (0, s.jsxs)(f.Y0X, {
        transitionState: n,
        parentComponent: 'ChangeUsernameModal',
        children: [
            (0, s.jsxs)(f.xBx, {
                separator: !1,
                className: I.header,
                children: [
                    (0, s.jsx)(f.X6q, {
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        className: I.title,
                        children: k.intl.string(k.t['m5or5+'])
                    }),
                    (0, s.jsx)(f.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: I.subtitle,
                        children: k.intl.string(k.t.SLJvy8)
                    }),
                    (0, s.jsx)(f.olH, {
                        onClick: l,
                        className: I.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)('form', {
                onSubmit: Z,
                children: [
                    (0, s.jsxs)(f.hzk, {
                        className: I.content,
                        children: [
                            (0, s.jsx)(f.xJW, {
                                title: k.intl.string(k.t.TWzdWl),
                                error: J,
                                children: (0, s.jsxs)('div', {
                                    className: i()(N.input, I.multiInput, {
                                        [N.error]: null != J,
                                        [N.focused]: d
                                    }),
                                    children: [
                                        (0, s.jsx)(x.Is, {
                                            name: 'username',
                                            'aria-label': k.intl.string(k.t.qqhR3N),
                                            value: L,
                                            maxLength: w.l$U,
                                            onChange: R,
                                            onFocus: () => A(!0),
                                            onBlur: () => A(!1),
                                            inputRef: D,
                                            className: I.multiInputFirst,
                                            inputClassName: i()(I.multiInputField, { [I.lowercase]: r.isPomelo() })
                                        }),
                                        !r.isPomelo() &&
                                            (0, s.jsx)(x.Is, {
                                                name: 'discriminator',
                                                'aria-label': k.intl.string(k.t.ozumaG),
                                                maxLength: 4,
                                                value: S,
                                                onChange: T,
                                                onFocus: () => A(!0),
                                                onBlur: () => A(!1),
                                                disabled: !u,
                                                className: I.multiInputLast,
                                                inputClassName: I.multiInputField
                                            })
                                    ]
                                })
                            }),
                            K
                                ? (0, s.jsx)(f.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: I.discriminatorChangeWarning,
                                      children: k.intl.string(k.t.mConUV)
                                  })
                                : null,
                            M
                                ? (0, s.jsx)(v.Z, {
                                      show: (null == q ? void 0 : q.type) === p.K.ERROR || d,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, s.jsx)(E, {
                                          usernameStatus: q,
                                          showHint: r.isPomelo()
                                      })
                                  })
                                : null,
                            (0, s.jsx)(f.xJW, {
                                className: I.password,
                                title: k.intl.string(k.t.TmdnJy),
                                error: null == z || null == (t = z.password) ? void 0 : t[0],
                                children: (0, s.jsx)(f.oil, {
                                    type: 'password',
                                    value: F,
                                    onChange: B
                                })
                            })
                        ]
                    }),
                    (0, s.jsxs)(f.mzw, {
                        children: [
                            (0, s.jsx)(f.zxk, {
                                variant: 'primary',
                                text: k.intl.string(k.t.i4jeWV),
                                type: 'submit',
                                loading: P
                            }),
                            (0, s.jsx)('div', {
                                'data-button-hoisted-classname-wrapper': !0,
                                className: I.cancel,
                                children: (0, s.jsx)(f.zxk, {
                                    variant: 'secondary',
                                    text: k.intl.string(k.t['ETE/oK']),
                                    onClick: l
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
