(n.d(t, { default: () => I }), n(314940), n(388685));
var i = n(255367),
    l = n(73800),
    a = n(120356),
    s = n.n(a),
    r = n(512722),
    o = n.n(r),
    u = n(954955),
    c = n.n(u),
    d = n(278074),
    m = n(442837),
    x = n(481060),
    f = n(809206),
    h = n(219496),
    p = n(575681),
    b = n(807369),
    g = n(180529),
    v = n(25990),
    j = n(594174),
    _ = n(74538),
    C = n(981631),
    w = n(388032),
    k = n(238861),
    N = n(953100);
let E = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, d.EQ)(t)
        .with(
            {
                type: h.K.ERROR,
                message: d.P.select()
            },
            (e) =>
                (0, i.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: e
                })
        )
        .with(
            {
                type: h.K.AVAILABLE,
                message: d.P.select()
            },
            (e) =>
                (0, i.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-feedback-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, i.jsx)(x.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-default',
                      children: w.intl.string(w.t.z7c4bG)
                  })
                : null
        );
};
function I(e) {
    var t;
    let { transitionState: n, onClose: a } = e,
        r = (0, m.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return (o()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e);
        }),
        u = l.useMemo(() => _.ZP.canEditDiscriminator(r) && !r.isPomelo(), [r]),
        [d, I] = l.useState(!1),
        [y, L] = l.useState(r.username),
        [R, S] = l.useState(r.discriminator),
        [T, F] = l.useState(''),
        [P, B] = l.useState(!1),
        W = (0, m.e7)([v.Z], () => v.Z.getErrors()),
        z = (0, p.n)(),
        U = r.isPomelo() && z,
        M = (0, b.a)(y, U, !1, r.username),
        q = l.useRef(null),
        D = l.useMemo(() => {
            var e, t, n;
            return null != (n = null == W || null == (e = W.username) ? void 0 : e[0]) ? n : null == W || null == (t = W.discriminator) ? void 0 : t[0];
        }, [W]);
    l.useEffect(() => {
        if (n === x.Dvm.ENTERED) {
            var e;
            null == (e = q.current) || e.focus();
        }
    }, [n]);
    let J = R !== r.discriminator;
    async function K(e) {
        (e.preventDefault(), B(!0));
        let t = await (0, f.Mn)({
            username: y,
            discriminator: u ? R : void 0,
            password: T
        });
        (B(!1), (null == t ? void 0 : t.ok) && a());
    }
    let Z = l.useMemo(() => c()(I, 50), []);
    return (0, i.jsxs)(x.Y0X, {
        transitionState: n,
        parentComponent: 'ChangeUsernameModal',
        children: [
            (0, i.jsxs)(x.xBx, {
                separator: !1,
                className: k.header,
                children: [
                    (0, i.jsx)(x.X6q, {
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        className: k.title,
                        children: w.intl.string(w.t['m5or5+'])
                    }),
                    (0, i.jsx)(x.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: k.subtitle,
                        children: w.intl.string(w.t.SLJvy8)
                    }),
                    (0, i.jsx)(x.olH, {
                        onClick: a,
                        className: k.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: K,
                children: [
                    (0, i.jsxs)(x.hzk, {
                        className: k.content,
                        children: [
                            (0, i.jsx)(x.xJW, {
                                title: w.intl.string(w.t.TWzdWl),
                                error: D,
                                children: (0, i.jsxs)('div', {
                                    className: s()(N.input, k.multiInput, {
                                        [N.error]: null != D,
                                        [N.focused]: d
                                    }),
                                    children: [
                                        (0, i.jsx)(x.oil, {
                                            name: 'username',
                                            'aria-label': w.intl.string(w.t.qqhR3N),
                                            value: y,
                                            maxLength: C.l$U,
                                            onChange: L,
                                            onFocus: () => Z(!0),
                                            onBlur: () => Z(!1),
                                            inputRef: q,
                                            className: k.multiInputFirst,
                                            inputClassName: s()(k.multiInputField, { [k.lowercase]: r.isPomelo() })
                                        }),
                                        !r.isPomelo() &&
                                            (0, i.jsx)(x.oil, {
                                                name: 'discriminator',
                                                'aria-label': w.intl.string(w.t.ozumaG),
                                                maxLength: 4,
                                                value: R,
                                                onChange: S,
                                                onFocus: () => Z(!0),
                                                onBlur: () => Z(!1),
                                                inputPrefix: '#',
                                                disabled: !u,
                                                className: k.multiInputLast,
                                                inputClassName: k.multiInputField
                                            })
                                    ]
                                })
                            }),
                            J
                                ? (0, i.jsx)(x.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: k.discriminatorChangeWarning,
                                      children: w.intl.string(w.t.mConUV)
                                  })
                                : null,
                            U
                                ? (0, i.jsx)(g.Z, {
                                      show: (null == M ? void 0 : M.type) === h.K.ERROR || d,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, i.jsx)(E, {
                                          usernameStatus: M,
                                          showHint: r.isPomelo()
                                      })
                                  })
                                : null,
                            (0, i.jsx)(x.xJW, {
                                className: k.password,
                                title: w.intl.string(w.t.TmdnJy),
                                error: null == W || null == (t = W.password) ? void 0 : t[0],
                                children: (0, i.jsx)(x.oil, {
                                    type: 'password',
                                    value: T,
                                    onChange: F
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(x.mzw, {
                        children: [
                            (0, i.jsx)(x.zxk, {
                                variant: 'primary',
                                text: w.intl.string(w.t.i4jeWV),
                                type: 'submit',
                                loading: P
                            }),
                            (0, i.jsx)('div', {
                                'data-button-hoisted-classname-wrapper': !0,
                                className: k.cancel,
                                children: (0, i.jsx)(x.zxk, {
                                    variant: 'secondary',
                                    text: w.intl.string(w.t['ETE/oK']),
                                    onClick: a
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
