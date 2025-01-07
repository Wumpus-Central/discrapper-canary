n.r(t),
    n.d(t, {
        ApplicationCommandShareModal: function () {
            return _;
        },
        useQueryForAppCommands: function () {
            return Z;
        }
    }),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(481060),
    s = n(911969),
    a = n(835473),
    o = n(987509),
    u = n(72214),
    c = n(592125),
    d = n(430824),
    h = n(823379),
    f = n(213459),
    m = n(667204),
    g = n(739980),
    p = n(617266),
    b = n(333861),
    x = n(388032),
    v = n(5859),
    C = n(621054);
let S = [s.yU.CHAT],
    y = () => {
        (0, i.closeModal)(b.s);
    };
function N(e) {
    let { sendLabel: t, canSend: n, isSending: s, onSend: a } = e,
        o = r.useCallback(() => {
            a();
        }, [a]);
    return (0, l.jsx)(i.ModalFooter, {
        className: v.footerWithMessage,
        children: (0, l.jsx)('div', {
            className: v.footerButtons,
            children: (0, l.jsx)(i.Button, {
                className: v.sendWithMessage,
                submitting: s,
                disabled: !n,
                onClick: o,
                children: t
            })
        })
    });
}
function Z(e, t) {
    return (0, f.v1)(
        e,
        { commandTypes: S },
        {
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    );
}
function _(e) {
    let { applicationId: t, channel: n, command: s, onClose: f, requireLaunchChannel: b, onShareResult: S, previewMessage: _, ...j } = e,
        E = r.useMemo(() => (0, o.dL)(n.id), [n]),
        [M, L] = r.useState(!1),
        { commands: T, loading: P } = Z(n, t),
        w = r.useRef(0),
        [A, R] = r.useState(b ? [E] : []),
        k = A.length,
        D = k >= 5,
        [I, F] = r.useState(''),
        { results: H, updateSearchText: U } = (0, u.s)({
            selectedDestinations: A,
            originDestination: E,
            includeMissingDMs: !0
        }),
        q = r.useCallback(
            (e) => {
                F(e), U(e);
            },
            [U]
        ),
        W = r.useCallback(() => {
            S(!1), f();
        }, [S, f]),
        [z] = (0, a.Z)([t]),
        O = r.useCallback(() => {
            F('');
        }, [F]),
        B = r.useRef(null);
    r.useEffect(() => {
        if ('' === I) {
            var e;
            null === (e = B.current) || void 0 === e || e.focus();
        }
    }, [I]);
    let G = r.useCallback(
            (e) => {
                R((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return D ? t : (F(''), (w.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (w.current += 1), l;
                });
            },
            [D]
        ),
        [V, X] = r.useMemo(() => {
            if (P) return [null, !1];
            let e = T.find((e) => e.untranslatedName === s);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [s, T, P]),
        J = r.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === V) return;
                L(!0);
                let n = (await Promise.all(e.map(o.qx))).filter(h.lm);
                t && (S(!0), y()),
                    n.forEach(async (e) => {
                        let t = c.Z.getChannel(e);
                        if (null == t) return;
                        let n = d.Z.getGuild(null == t ? void 0 : t.guild_id);
                        null !=
                            (await (0, m.Z)({
                                command: V,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                }
                            })) && (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['5WjJcn']), i.ToastType.MESSAGE));
                    }),
                    S(!0),
                    y();
            },
            [S, V]
        ),
        Q = r.useCallback(() => {
            J(A, { closeAfterSend: !0 });
        }, [J, A]);
    if (P)
        return (0, l.jsx)(i.ModalRoot, {
            className: v.modal,
            'aria-label': x.intl.string(x.t.fuFvw8),
            ...j,
            children: (0, l.jsx)(i.Spinner, { className: v.spinnerContainer })
        });
    X && (i.ModalRoot, v.modal, x.intl.string(x.t.fuFvw8), i.ModalContent, x.intl.string(x.t.yAk8ZW));
    let Y =
        H.length > 0
            ? (0, l.jsx)(p.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: H,
                  handleToggleDestination: G,
                  selectedDestinations: A,
                  disableSelection: D,
                  originDestination: E
              })
            : (0, l.jsxs)(i.ModalContent, {
                  className: v.noResults,
                  children: [
                      (0, l.jsx)('img', {
                          className: v.noResultsImg,
                          src: C,
                          alt: ''
                      }),
                      (0, l.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: x.intl.string(x.t.V6nAfH)
                      })
                  ]
              });
    return (0, l.jsxs)(i.ModalRoot, {
        className: v.modal,
        'aria-label': x.intl.string(x.t.fuFvw8),
        ...j,
        children: [
            (0, l.jsxs)(i.ModalHeader, {
                className: v.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: v.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: v.title,
                                children: (0, l.jsxs)(i.HeadingLevel, {
                                    component: (0, l.jsxs)(i.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: ['Share from ', null == z ? void 0 : z.name, '?']
                                    }),
                                    children: [
                                        D
                                            ? (0, l.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-warning',
                                                  children: x.intl.format(x.t['/KhyPT'], { count: 5 })
                                              })
                                            : null,
                                        (0, l.jsx)(i.Heading, {
                                            variant: 'heading-sm/normal',
                                            color: 'header-muted',
                                            children: x.intl.string(x.t['DF+q2t'])
                                        })
                                    ]
                                })
                            }),
                            (0, l.jsx)(i.ModalCloseButton, {
                                className: v.closeButton,
                                onClick: W
                            })
                        ]
                    }),
                    void 0 !== _ ? (0, l.jsx)(g.z, { previewMessage: _ }) : null,
                    (0, l.jsx)(i.SearchBar, {
                        className: v.search,
                        ref: B,
                        size: i.SearchBar.Sizes.MEDIUM,
                        query: I,
                        onChange: q,
                        onClear: O,
                        placeholder: x.intl.string(x.t['5h0QOD']),
                        'aria-label': x.intl.string(x.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            Y,
            (0, l.jsx)(N, {
                sendLabel: x.intl.string(x.t.TXNS7e),
                canSend: k > 0,
                isSending: M,
                onSend: Q
            })
        ]
    });
}
