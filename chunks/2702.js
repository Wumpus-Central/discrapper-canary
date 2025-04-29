n.d(t, { default: () => R }), n(314940), n(388685);
var l = n(255367),
    s = n(73800),
    i = n(120356),
    r = n.n(i),
    a = n(512722),
    o = n.n(a),
    u = n(954955),
    c = n.n(u),
    m = n(278074),
    d = n(442837),
    x = n(481060),
    f = n(809206),
    h = n(118012),
    p = n(219496),
    b = n(575681),
    g = n(807369),
    v = n(180529),
    _ = n(25990),
    j = n(594174),
    C = n(74538),
    k = n(981631),
    I = n(388032),
    E = n(238861),
    w = n(953100);
let N = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, m.EQ)(t)
        .with(
            {
                type: p.K.ERROR,
                message: m.P.select()
            },
            (e) =>
                (0, l.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: e
                })
        )
        .with(
            {
                type: p.K.AVAILABLE,
                message: m.P.select()
            },
            (e) =>
                (0, l.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, l.jsx)(x.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: I.intl.string(I.t.z7c4bG)
                  })
                : null
        );
};
function R(e) {
    var t;
    let { transitionState: n, onClose: i } = e,
        a = (0, d.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e;
        }),
        u = s.useMemo(() => C.ZP.canEditDiscriminator(a) && !a.isPomelo(), [a]),
        [m, R] = s.useState(!1),
        [z, S] = s.useState(a.username),
        [L, P] = s.useState(a.discriminator),
        [y, T] = s.useState(''),
        [B, F] = s.useState(!1),
        M = (0, d.e7)([_.Z], () => _.Z.getErrors()),
        W = (0, b.n)(),
        Z = a.isPomelo() && W,
        A = (0, g.a)(z, Z, !1, a.username),
        D = s.useRef(null),
        U = s.useMemo(() => {
            var e, t, n;
            return null != (n = null == M || null == (e = M.username) ? void 0 : e[0]) ? n : null == M || null == (t = M.discriminator) ? void 0 : t[0];
        }, [M]);
    s.useEffect(() => {
        if (n === x.Dvm.ENTERED) {
            var e;
            null == (e = D.current) || e.focus();
        }
    }, [n]);
    let K = L !== a.discriminator;
    async function J(e) {
        e.preventDefault(), F(!0);
        let t = await (0, f.Mn)({
            username: z,
            discriminator: u ? L : void 0,
            password: y
        });
        F(!1), (null == t ? void 0 : t.ok) && i();
    }
    let q = s.useMemo(() => c()(R, 50), []);
    return (0, l.jsxs)(x.Y0X, {
        transitionState: n,
        children: [
            (0, l.jsxs)(x.xBx, {
                separator: !1,
                className: E.header,
                children: [
                    (0, l.jsx)(h.Z, {
                        color: h.Z.Colors.HEADER_PRIMARY,
                        size: h.Z.Sizes.SIZE_24,
                        className: E.title,
                        children: I.intl.string(I.t['m5or5+'])
                    }),
                    (0, l.jsx)(x.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: E.subtitle,
                        children: I.intl.string(I.t.SLJvy8)
                    }),
                    (0, l.jsx)(x.olH, {
                        onClick: i,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, l.jsxs)('form', {
                onSubmit: J,
                children: [
                    (0, l.jsxs)(x.hzk, {
                        className: E.content,
                        children: [
                            (0, l.jsx)(x.xJW, {
                                title: I.intl.string(I.t.TWzdWl),
                                error: U,
                                children: (0, l.jsxs)('div', {
                                    className: r()(w.input, E.multiInput, {
                                        [w.error]: null != U,
                                        [w.focused]: m
                                    }),
                                    children: [
                                        (0, l.jsx)(x.oil, {
                                            name: 'username',
                                            'aria-label': I.intl.string(I.t.qqhR3N),
                                            value: z,
                                            maxLength: k.l$U,
                                            onChange: S,
                                            onFocus: () => q(!0),
                                            onBlur: () => q(!1),
                                            inputRef: D,
                                            className: E.multiInputFirst,
                                            inputClassName: r()(E.multiInputField, { [E.lowercase]: a.isPomelo() })
                                        }),
                                        !a.isPomelo() &&
                                            (0, l.jsx)(x.oil, {
                                                name: 'discriminator',
                                                'aria-label': I.intl.string(I.t.ozumaG),
                                                maxLength: 4,
                                                value: L,
                                                onChange: P,
                                                onFocus: () => q(!0),
                                                onBlur: () => q(!1),
                                                inputPrefix: '#',
                                                disabled: !u,
                                                className: E.multiInputLast,
                                                inputClassName: E.multiInputField
                                            })
                                    ]
                                })
                            }),
                            K
                                ? (0, l.jsx)(x.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: E.discriminatorChangeWarning,
                                      children: I.intl.string(I.t.mConUV)
                                  })
                                : null,
                            Z
                                ? (0, l.jsx)(v.Z, {
                                      show: (null == A ? void 0 : A.type) === p.K.ERROR || m,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, l.jsx)(N, {
                                          usernameStatus: A,
                                          showHint: a.isPomelo()
                                      })
                                  })
                                : null,
                            (0, l.jsx)(x.xJW, {
                                className: E.password,
                                title: I.intl.string(I.t.TmdnJy),
                                error: null == M || null == (t = M.password) ? void 0 : t[0],
                                children: (0, l.jsx)(x.oil, {
                                    type: 'password',
                                    value: y,
                                    onChange: T
                                })
                            })
                        ]
                    }),
                    (0, l.jsxs)(x.mzw, {
                        children: [
                            (0, l.jsx)(x.zxk, {
                                type: 'submit',
                                color: x.zxk.Colors.BRAND,
                                size: x.zxk.Sizes.MEDIUM,
                                submitting: B,
                                children: I.intl.string(I.t.i4jeWV)
                            }),
                            (0, l.jsx)(x.zxk, {
                                className: E.cancel,
                                look: x.zxk.Looks.LINK,
                                color: x.zxk.Colors.PRIMARY,
                                onClick: i,
                                children: I.intl.string(I.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
