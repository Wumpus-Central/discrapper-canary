n.d(t, { default: () => E }), n(47120);
var l = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    i = n(904245),
    u = n(311819),
    o = n(835473),
    c = n(957730),
    d = n(987509),
    h = n(72214),
    f = n(592125),
    m = n(594174),
    p = n(572004),
    x = n(823379),
    g = n(207003),
    b = n(388032),
    _ = n(36984),
    y = n(621054);
function E(e) {
    let { applicationId: t, onClose: n, transitionState: p, message: E, launchParams: Z, onShare: N, ...j } = e,
        [v] = (0, o.Z)([t]),
        C = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        [L, T] = s.useState(!1),
        [R, M] = s.useState(''),
        [k, P] = s.useState('');
    s.useEffect(() => {
        let { referrerId: e, customId: n } = Z;
        P(
            (0, u.H)({
                applicationId: t,
                referrerId: null != e ? e : null == C ? void 0 : C.id,
                customId: n
            })
        );
    }, [t, C, Z, P]);
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
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return z ? t : (M(''), (I.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (I.current += 1), l;
                });
            },
            [z]
        ),
        W = s.useCallback(
            async (e) => {
                if (null == v) return;
                let t = b.intl.formatToMarkdownString(b.t.dZJpdH, {
                        applicationName: v.name,
                        link: k
                    }),
                    l = ''.concat(E, '\n\n').concat(t);
                T(!0),
                    (await Promise.all(e.map(d.qx))).filter(x.lm).forEach(async (e) => {
                        let t = f.Z.getChannel(e);
                        null != t && (await i.Z.sendMessage(e, c.ZP.parse(t, l)));
                    }),
                    (0, a.showToast)((0, a.createToast)(b.intl.formatToPlainString(b.t.jQULqK, { applicationName: v.name }), a.ToastType.SUCCESS)),
                    N(!0),
                    n();
            },
            [E, k, n, N, v]
        ),
        G =
            q.length > 0
                ? (0, l.jsx)(g.Q, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: q,
                      handleToggleDestination: B,
                      selectedDestinations: D,
                      disableSelection: z
                  })
                : (0, l.jsxs)(a.hzk, {
                      className: _.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: _.noResultsImg,
                              src: y,
                              alt: ''
                          }),
                          (0, l.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: b.intl.string(b.t.V6nAfH)
                          })
                      ]
                  });
    return (0, l.jsxs)(a.Y0X, {
        transitionState: p,
        ...j,
        className: _.modalRoot,
        children: [
            (0, l.jsxs)(a.xBx, {
                className: _.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: _.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: _.title,
                                children: (0, l.jsx)(a.y5t, {
                                    component: (0, l.jsx)(a.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: b.intl.string(b.t.r9qKo6)
                                    }),
                                    children: (0, l.jsx)(a.Text, {
                                        className: _.message,
                                        lineClamp: 1,
                                        variant: 'text-sm/medium',
                                        color: 'text-secondary',
                                        children: E
                                    })
                                })
                            }),
                            (0, l.jsx)(a.olH, {
                                className: _.closeButton,
                                onClick: n
                            })
                        ]
                    }),
                    (0, l.jsx)(a.E1j, {
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
            (0, l.jsx)(a.mzw, {
                className: _.footer,
                children: (0, l.jsxs)('div', {
                    className: _.copySendBar,
                    children: [
                        (0, l.jsx)(S, {
                            link: k,
                            onShare: N
                        }),
                        (0, l.jsx)(a.zxk, {
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
    let { link: t, onShare: n } = e,
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
        (0, l.jsxs)(a.zxk, {
            look: a.zxk.Looks.LINK,
            color: a.zxk.Colors.LINK,
            onClick: function () {
                (0, p.JG)(t), n(!0), i(!0);
            },
            innerClassName: _.copyButton,
            children: [
                r
                    ? (0, l.jsx)(a.owK, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, l.jsx)(a.TIy, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                r ? b.intl.string(b.t['t5VZ8/']) : b.intl.string(b.t.WqhZsr)
            ]
        })
    );
}
