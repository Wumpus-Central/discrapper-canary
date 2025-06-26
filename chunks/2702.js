n.d(t, { default: () => R }), n(314940), n(388685);
var l = n(255367),
    s = n(73800),
    i = n(120356),
    a = n.n(i),
    r = n(512722),
    o = n.n(r),
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
    C = n(25990),
    _ = n(594174),
    j = n(74538),
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
                    color: 'text-feedback-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, l.jsx)(x.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-default',
                      children: I.intl.string(I.t.z7c4bG)
                  })
                : null
        );
};
function R(e) {
    var t;
    let { transitionState: n, onClose: i } = e,
        r = (0, d.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return o()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e;
        }),
        u = s.useMemo(() => j.ZP.canEditDiscriminator(r) && !r.isPomelo(), [r]),
        [m, R] = s.useState(!1),
        [z, S] = s.useState(r.username),
        [L, P] = s.useState(r.discriminator),
        [y, M] = s.useState(''),
        [T, B] = s.useState(!1),
        F = (0, d.e7)([C.Z], () => C.Z.getErrors()),
        U = (0, b.n)(),
        W = r.isPomelo() && U,
        Z = (0, g.a)(z, W, !1, r.username),
        A = s.useRef(null),
        D = s.useMemo(() => {
            var e, t, n;
            return null != (n = null == F || null == (e = F.username) ? void 0 : e[0]) ? n : null == F || null == (t = F.discriminator) ? void 0 : t[0];
        }, [F]);
    s.useEffect(() => {
        if (n === x.Dvm.ENTERED) {
            var e;
            null == (e = A.current) || e.focus();
        }
    }, [n]);
    let K = L !== r.discriminator;
    async function J(e) {
        e.preventDefault(), B(!0);
        let t = await (0, f.Mn)({
            username: z,
            discriminator: u ? L : void 0,
            password: y
        });
        B(!1), (null == t ? void 0 : t.ok) && i();
    }
    let q = s.useMemo(() => c()(R, 50), []);
    return (0, l.jsxs)(x.Y0X, {
        transitionState: n,
        parentComponent: 'ChangeUsernameModal',
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
                                error: D,
                                children: (0, l.jsxs)('div', {
                                    className: a()(w.input, E.multiInput, {
                                        [w.error]: null != D,
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
                                            inputRef: A,
                                            className: E.multiInputFirst,
                                            inputClassName: a()(E.multiInputField, { [E.lowercase]: r.isPomelo() })
                                        }),
                                        !r.isPomelo() &&
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
                            W
                                ? (0, l.jsx)(v.Z, {
                                      show: (null == Z ? void 0 : Z.type) === p.K.ERROR || m,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, l.jsx)(N, {
                                          usernameStatus: Z,
                                          showHint: r.isPomelo()
                                      })
                                  })
                                : null,
                            (0, l.jsx)(x.xJW, {
                                className: E.password,
                                title: I.intl.string(I.t.TmdnJy),
                                error: null == F || null == (t = F.password) ? void 0 : t[0],
                                children: (0, l.jsx)(x.oil, {
                                    type: 'password',
                                    value: y,
                                    onChange: M
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
                                submitting: T,
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
