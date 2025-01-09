n.r(t),
    n.d(t, {
        default: function () {
            return S;
        }
    }),
    n(47120);
var l = n(200651),
    r = n(192379),
    s = n(442837),
    i = n(481060),
    a = n(904245),
    u = n(311819),
    o = n(835473),
    c = n(957730),
    d = n(987509),
    f = n(72214),
    h = n(592125),
    m = n(594174),
    b = n(572004),
    p = n(823379),
    x = n(207003),
    g = n(388032),
    y = n(409267),
    C = n(621054);
function S(e) {
    let { applicationId: t, onClose: n, transitionState: b, message: S, launchParams: E, onShare: Z, ...N } = e,
        [L] = (0, o.Z)([t]),
        _ = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        [j, M] = r.useState(!1),
        [T, R] = r.useState(''),
        [k, P] = r.useState('');
    r.useEffect(() => {
        let { referrerId: e, customId: n } = E;
        P(
            (0, u.H)({
                applicationId: t,
                referrerId: null != e ? e : null == _ ? void 0 : _.id,
                customId: n
            })
        );
    }, [t, _, E, P]);
    let I = r.useRef(0),
        [D, A] = r.useState([]),
        U = D.length,
        B = U >= 5;
    r.useEffect(() => {
        if ('' === T) {
            var e;
            null === (e = z.current) || void 0 === e || e.focus();
        }
    }, [T]);
    let H = r.useCallback(() => {
            R('');
        }, [R]),
        z = r.useRef(null),
        { results: w, updateSearchText: q } = (0, f.s)({
            selectedDestinations: D,
            includeMissingDMs: !0
        }),
        F = r.useCallback(
            (e) => {
                R(e), q(e);
            },
            [R, q]
        ),
        O = r.useCallback(
            (e) => {
                A((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return B ? t : (R(''), (I.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (I.current += 1), l;
                });
            },
            [B]
        ),
        W = r.useCallback(
            async (e) => {
                if (null == L) return;
                let t = ''.concat(S, '\n').concat(k);
                M(!0),
                    (await Promise.all(e.map(d.qx))).filter(p.lm).forEach(async (e) => {
                        let n = h.Z.getChannel(e);
                        if (null != n) await a.Z.sendMessage(e, c.ZP.parse(n, t));
                    }),
                    (0, i.showToast)((0, i.createToast)(g.intl.formatToPlainString(g.t.jQULqK, { applicationName: L.name }), i.ToastType.SUCCESS)),
                    Z(!0),
                    n();
            },
            [S, k, n, Z, L]
        ),
        G =
            w.length > 0
                ? (0, l.jsx)(x.Q, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: w,
                      handleToggleDestination: O,
                      selectedDestinations: D,
                      disableSelection: B
                  })
                : (0, l.jsxs)(i.ModalContent, {
                      className: y.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: y.noResultsImg,
                              src: C,
                              alt: ''
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: g.intl.string(g.t.V6nAfH)
                          })
                      ]
                  });
    return (0, l.jsxs)(i.ModalRoot, {
        transitionState: b,
        ...N,
        className: y.modalRoot,
        children: [
            (0, l.jsxs)(i.ModalHeader, {
                className: y.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: y.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: y.title,
                                children: (0, l.jsx)(i.HeadingLevel, {
                                    component: (0, l.jsx)(i.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: g.intl.string(g.t.r9qKo6)
                                    }),
                                    children: (0, l.jsx)(i.Text, {
                                        className: y.message,
                                        lineClamp: 1,
                                        variant: 'text-sm/medium',
                                        color: 'text-secondary',
                                        children: S
                                    })
                                })
                            }),
                            (0, l.jsx)(i.ModalCloseButton, {
                                className: y.closeButton,
                                onClick: n
                            })
                        ]
                    }),
                    (0, l.jsx)(i.SearchBar, {
                        ref: z,
                        size: i.SearchBar.Sizes.MEDIUM,
                        query: T,
                        onChange: F,
                        onClear: H,
                        placeholder: g.intl.string(g.t['5h0QOD']),
                        'aria-label': g.intl.string(g.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            G,
            (0, l.jsx)(i.ModalFooter, {
                className: y.footer,
                children: (0, l.jsxs)('div', {
                    className: y.copySendBar,
                    children: [
                        (0, l.jsx)(v, { link: k }),
                        (0, l.jsx)(i.Button, {
                            className: y.sendWithMessage,
                            onClick: () => W(D),
                            submitting: j,
                            disabled: !(U > 0),
                            children: g.intl.string(g.t.TXNS7e)
                        })
                    ]
                })
            })
        ]
    });
}
function v(e) {
    let { link: t } = e,
        [n, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                n &&
                    (e = setTimeout(() => {
                        s(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [n]),
        (0, l.jsxs)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.LINK,
            onClick: function () {
                (0, b.JG)(t), s(!0);
            },
            innerClassName: y.copyButton,
            children: [
                n
                    ? (0, l.jsx)(i.CircleCheckIcon, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, l.jsx)(i.CopyIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                n ? g.intl.string(g.t['t5VZ8/']) : g.intl.string(g.t.WqhZsr)
            ]
        })
    );
}
