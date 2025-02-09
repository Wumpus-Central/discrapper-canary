l.d(t, { default: () => E }), l(47120);
var n = l(200651),
    s = l(192379),
    r = l(442837),
    a = l(481060),
    i = l(904245),
    u = l(311819),
    o = l(835473),
    c = l(957730),
    d = l(987509),
    h = l(72214),
    f = l(592125),
    m = l(594174),
    p = l(572004),
    x = l(823379),
    g = l(207003),
    b = l(388032),
    _ = l(258454),
    y = l(621054);
function E(e) {
    let { applicationId: t, onClose: l, transitionState: p, message: E, launchParams: Z, onShare: N, ...j } = e,
        [v] = (0, o.Z)([t]),
        C = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        [L, T] = s.useState(!1),
        [R, M] = s.useState(''),
        [P, k] = s.useState('');
    s.useEffect(() => {
        let { referrerId: e, customId: l } = Z;
        k(
            (0, u.H)({
                applicationId: t,
                referrerId: null != e ? e : null == C ? void 0 : C.id,
                customId: l
            })
        );
    }, [t, C, Z, k]);
    let I = s.useRef(0),
        [D, A] = s.useState([]),
        U = D.length,
        z = U >= 5;
    s.useEffect(() => {
        if ('' === R) {
            var e;
            null === (e = H.current) || void 0 === e || e.focus();
        }
    }, [R]);
    let w = s.useCallback(() => {
            M('');
        }, [M]),
        H = s.useRef(null),
        { results: q, updateSearchText: F } = (0, h.s)({
            selectedDestinations: D,
            includeMissingDMs: !0
        }),
        O = s.useCallback(
            (e) => {
                M(e), F(e);
            },
            [M, F]
        ),
        B = s.useCallback(
            (e) => {
                A((t) => {
                    let l = t.findIndex((t) => {
                        let { type: l, id: n } = t;
                        return l === e.type && n === e.id;
                    });
                    if (-1 === l) return z ? t : (M(''), (I.current += 1), [e, ...t]);
                    let n = [...t];
                    return n.splice(l, 1), (I.current += 1), n;
                });
            },
            [z]
        ),
        W = s.useCallback(
            async (e) => {
                if (null == v) return;
                let t = ''.concat(E, '\n').concat(P);
                T(!0),
                    (await Promise.all(e.map(d.qx))).filter(x.lm).forEach(async (e) => {
                        let l = f.Z.getChannel(e);
                        null != l && (await i.Z.sendMessage(e, c.ZP.parse(l, t)));
                    }),
                    (0, a.showToast)((0, a.createToast)(b.intl.formatToPlainString(b.t.jQULqK, { applicationName: v.name }), a.ToastType.SUCCESS)),
                    N(!0),
                    l();
            },
            [E, P, l, N, v]
        ),
        G =
            q.length > 0
                ? (0, n.jsx)(g.Q, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: q,
                      handleToggleDestination: B,
                      selectedDestinations: D,
                      disableSelection: z
                  })
                : (0, n.jsxs)(a.hzk, {
                      className: _.noResults,
                      children: [
                          (0, n.jsx)('img', {
                              className: _.noResultsImg,
                              src: y,
                              alt: ''
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: b.intl.string(b.t.V6nAfH)
                          })
                      ]
                  });
    return (0, n.jsxs)(a.Y0X, {
        transitionState: p,
        ...j,
        className: _.modalRoot,
        children: [
            (0, n.jsxs)(a.xBx, {
                className: _.header,
                children: [
                    (0, n.jsxs)('div', {
                        className: _.titleLine,
                        children: [
                            (0, n.jsx)('div', {
                                className: _.title,
                                children: (0, n.jsx)(a.y5t, {
                                    component: (0, n.jsx)(a.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: b.intl.string(b.t.r9qKo6)
                                    }),
                                    children: (0, n.jsx)(a.Text, {
                                        className: _.message,
                                        lineClamp: 1,
                                        variant: 'text-sm/medium',
                                        color: 'text-secondary',
                                        children: E
                                    })
                                })
                            }),
                            (0, n.jsx)(a.olH, {
                                className: _.closeButton,
                                onClick: l
                            })
                        ]
                    }),
                    (0, n.jsx)(a.E1j, {
                        ref: H,
                        size: a.E1j.Sizes.MEDIUM,
                        query: R,
                        onChange: O,
                        onClear: w,
                        placeholder: b.intl.string(b.t['5h0QOD']),
                        'aria-label': b.intl.string(b.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            G,
            (0, n.jsx)(a.mzw, {
                className: _.footer,
                children: (0, n.jsxs)('div', {
                    className: _.copySendBar,
                    children: [
                        (0, n.jsx)(S, {
                            link: P,
                            onShare: N
                        }),
                        (0, n.jsx)(a.zxk, {
                            className: _.sendWithMessage,
                            onClick: () => W(D),
                            submitting: L,
                            disabled: !(U > 0),
                            children: b.intl.string(b.t.TXNS7e)
                        })
                    ]
                })
            })
        ]
    });
}
function S(e) {
    let { link: t, onShare: l } = e,
        [r, i] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e;
            return (
                r &&
                    (e = setTimeout(() => {
                        i(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [r]),
        (0, n.jsxs)(a.zxk, {
            look: a.zxk.Looks.LINK,
            color: a.zxk.Colors.LINK,
            onClick: function () {
                (0, p.JG)(t), l(!0), i(!0);
            },
            innerClassName: _.copyButton,
            children: [
                r
                    ? (0, n.jsx)(a.owK, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, n.jsx)(a.TIy, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                r ? b.intl.string(b.t['t5VZ8/']) : b.intl.string(b.t.WqhZsr)
            ]
        })
    );
}
