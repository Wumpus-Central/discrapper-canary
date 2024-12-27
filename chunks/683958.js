n.r(t),
    n.d(t, {
        ApplicationCommandShareModal: function () {
            return _;
        },
        useQueryForAppCommands: function () {
            return N;
        }
    }),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(481060),
    a = n(911969),
    s = n(835473),
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
let S = [a.yU.CHAT],
    Z = () => {
        (0, i.closeModal)(b.s);
    };
function y(e) {
    let { sendLabel: t, canSend: n, isSending: a, onSend: s } = e,
        o = r.useCallback(() => {
            s();
        }, [s]);
    return (0, l.jsx)(i.ModalFooter, {
        className: v.footerWithMessage,
        children: (0, l.jsx)('div', {
            className: v.footerButtons,
            children: (0, l.jsx)(i.Button, {
                className: v.sendWithMessage,
                submitting: a,
                disabled: !n,
                onClick: o,
                children: t
            })
        })
    });
}
function N(e, t) {
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
    let { applicationId: t, channel: n, command: a, onClose: f, onRequestSent: b, previewMessage: S, ..._ } = e,
        j = r.useMemo(() => (0, o.dL)(n.id), [n]),
        [E, M] = r.useState(!1),
        { commands: L, loading: T } = N(n, t),
        P = r.useRef(0),
        [w, A] = r.useState([j]),
        R = w.length,
        k = R >= 5,
        [D, I] = r.useState(''),
        { results: F, updateSearchText: H } = (0, u.s)({
            selectedDestinations: w,
            originDestination: j,
            includeMissingDMs: !0
        }),
        U = r.useCallback(
            (e) => {
                I(e), H(e);
            },
            [H]
        ),
        q = r.useCallback(() => {
            f();
        }, [f]),
        [W] = (0, s.Z)([t]),
        z = r.useCallback(() => {
            I('');
        }, [I]),
        O = r.useRef(null);
    r.useEffect(() => {
        if ('' === D) {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
        }
    }, [D]);
    let B = r.useCallback(
            (e) => {
                A((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return k ? t : (I(''), (P.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (P.current += 1), l;
                });
            },
            [k]
        ),
        [G, V] = r.useMemo(() => {
            if (T) return [null, !1];
            let e = L.find((e) => e.untranslatedName === a);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [a, L, T]),
        X = r.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === G) return;
                M(!0);
                let n = (await Promise.all(e.map(o.qx))).filter(h.lm);
                t && Z(),
                    null == b || b(),
                    n.forEach(async (e) => {
                        let t = c.Z.getChannel(e);
                        if (null == t) return;
                        let n = d.Z.getGuild(null == t ? void 0 : t.guild_id);
                        null !=
                            (await (0, m.Z)({
                                command: G,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                }
                            })) && (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['5WjJcn']), i.ToastType.MESSAGE));
                    }),
                    Z();
            },
            [b, G]
        ),
        J = r.useCallback(() => {
            X(w, { closeAfterSend: !0 });
        }, [X, w]);
    if (T)
        return (0, l.jsx)(i.ModalRoot, {
            className: v.modal,
            'aria-label': x.intl.string(x.t.fuFvw8),
            ..._,
            children: (0, l.jsx)(i.Spinner, { className: v.spinnerContainer })
        });
    V && (i.ModalRoot, v.modal, x.intl.string(x.t.fuFvw8), i.ModalContent, x.intl.string(x.t.yAk8ZW));
    let Q =
        F.length > 0
            ? (0, l.jsx)(p.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: F,
                  handleToggleDestination: B,
                  selectedDestinations: w,
                  disableSelection: k,
                  originDestination: j
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
        ..._,
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
                                        children: ['Share from ', null == W ? void 0 : W.name, '?']
                                    }),
                                    children: [
                                        k
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
                                onClick: q
                            })
                        ]
                    }),
                    void 0 !== S ? (0, l.jsx)(g.z, { previewMessage: S }) : null,
                    (0, l.jsx)(i.SearchBar, {
                        className: v.search,
                        ref: O,
                        size: i.SearchBar.Sizes.MEDIUM,
                        query: D,
                        onChange: U,
                        onClear: z,
                        placeholder: x.intl.string(x.t['5h0QOD']),
                        'aria-label': x.intl.string(x.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            Q,
            (0, l.jsx)(y, {
                sendLabel: x.intl.string(x.t.TXNS7e),
                canSend: R > 0,
                isSending: E,
                onSend: J
            })
        ]
    });
}
