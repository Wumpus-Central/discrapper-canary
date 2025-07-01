(n.d(t, { default: () => E }), n(314940), n(388685));
var l = n(255367),
    i = n(73800),
    s = n(120356),
    a = n.n(s),
    r = n(512722),
    o = n.n(r),
    u = n(954955),
    c = n.n(u),
    m = n(278074),
    d = n(442837),
    x = n(481060),
    f = n(809206),
    h = n(219496),
    p = n(575681),
    b = n(807369),
    g = n(180529),
    v = n(25990),
    j = n(594174),
    C = n(74538),
    k = n(981631),
    _ = n(388032),
    w = n(238861),
    I = n(953100);
let N = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, m.EQ)(t)
        .with(
            {
                type: h.K.ERROR,
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
                type: h.K.AVAILABLE,
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
                      children: _.intl.string(_.t.z7c4bG)
                  })
                : null
        );
};
function E(e) {
    var t;
    let { transitionState: n, onClose: s } = e,
        r = (0, d.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return (o()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e);
        }),
        u = i.useMemo(() => C.ZP.canEditDiscriminator(r) && !r.isPomelo(), [r]),
        [m, E] = i.useState(!1),
        [z, R] = i.useState(r.username),
        [L, y] = i.useState(r.discriminator),
        [S, P] = i.useState(''),
        [T, B] = i.useState(!1),
        F = (0, d.e7)([v.Z], () => v.Z.getErrors()),
        M = (0, p.n)(),
        U = r.isPomelo() && M,
        W = (0, b.a)(z, U, !1, r.username),
        D = i.useRef(null),
        A = i.useMemo(() => {
            var e, t, n;
            return null != (n = null == F || null == (e = F.username) ? void 0 : e[0]) ? n : null == F || null == (t = F.discriminator) ? void 0 : t[0];
        }, [F]);
    i.useEffect(() => {
        if (n === x.Dvm.ENTERED) {
            var e;
            null == (e = D.current) || e.focus();
        }
    }, [n]);
    let K = L !== r.discriminator;
    async function q(e) {
        (e.preventDefault(), B(!0));
        let t = await (0, f.Mn)({
            username: z,
            discriminator: u ? L : void 0,
            password: S
        });
        (B(!1), (null == t ? void 0 : t.ok) && s());
    }
    let J = i.useMemo(() => c()(E, 50), []);
    return (0, l.jsxs)(x.Y0X, {
        transitionState: n,
        parentComponent: 'ChangeUsernameModal',
        children: [
            (0, l.jsxs)(x.xBx, {
                separator: !1,
                className: w.header,
                children: [
                    (0, l.jsx)(x.X6q, {
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        className: w.title,
                        children: _.intl.string(_.t['m5or5+'])
                    }),
                    (0, l.jsx)(x.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: w.subtitle,
                        children: _.intl.string(_.t.SLJvy8)
                    }),
                    (0, l.jsx)(x.olH, {
                        onClick: s,
                        className: w.modalCloseButton
                    })
                ]
            }),
            (0, l.jsxs)('form', {
                onSubmit: q,
                children: [
                    (0, l.jsxs)(x.hzk, {
                        className: w.content,
                        children: [
                            (0, l.jsx)(x.xJW, {
                                title: _.intl.string(_.t.TWzdWl),
                                error: A,
                                children: (0, l.jsxs)('div', {
                                    className: a()(I.input, w.multiInput, {
                                        [I.error]: null != A,
                                        [I.focused]: m
                                    }),
                                    children: [
                                        (0, l.jsx)(x.oil, {
                                            name: 'username',
                                            'aria-label': _.intl.string(_.t.qqhR3N),
                                            value: z,
                                            maxLength: k.l$U,
                                            onChange: R,
                                            onFocus: () => J(!0),
                                            onBlur: () => J(!1),
                                            inputRef: D,
                                            className: w.multiInputFirst,
                                            inputClassName: a()(w.multiInputField, { [w.lowercase]: r.isPomelo() })
                                        }),
                                        !r.isPomelo() &&
                                            (0, l.jsx)(x.oil, {
                                                name: 'discriminator',
                                                'aria-label': _.intl.string(_.t.ozumaG),
                                                maxLength: 4,
                                                value: L,
                                                onChange: y,
                                                onFocus: () => J(!0),
                                                onBlur: () => J(!1),
                                                inputPrefix: '#',
                                                disabled: !u,
                                                className: w.multiInputLast,
                                                inputClassName: w.multiInputField
                                            })
                                    ]
                                })
                            }),
                            K
                                ? (0, l.jsx)(x.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: w.discriminatorChangeWarning,
                                      children: _.intl.string(_.t.mConUV)
                                  })
                                : null,
                            U
                                ? (0, l.jsx)(g.Z, {
                                      show: (null == W ? void 0 : W.type) === h.K.ERROR || m,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, l.jsx)(N, {
                                          usernameStatus: W,
                                          showHint: r.isPomelo()
                                      })
                                  })
                                : null,
                            (0, l.jsx)(x.xJW, {
                                className: w.password,
                                title: _.intl.string(_.t.TmdnJy),
                                error: null == F || null == (t = F.password) ? void 0 : t[0],
                                children: (0, l.jsx)(x.oil, {
                                    type: 'password',
                                    value: S,
                                    onChange: P
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
                                children: _.intl.string(_.t.i4jeWV)
                            }),
                            (0, l.jsx)(x.zxk, {
                                className: w.cancel,
                                look: x.zxk.Looks.LINK,
                                color: x.zxk.Colors.PRIMARY,
                                onClick: s,
                                children: _.intl.string(_.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
