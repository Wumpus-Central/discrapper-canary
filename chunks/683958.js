n.d(t, { ApplicationCommandShareModal: () => C }), n(47120);
var l = n(200651),
    s = n(192379),
    i = n(481060),
    a = n(911969),
    r = n(835473),
    o = n(987509),
    u = n(72214),
    c = n(592125),
    d = n(430824),
    h = n(823379),
    m = n(213459),
    f = n(667204),
    b = n(739980),
    g = n(617266),
    p = n(333861),
    x = n(388032),
    _ = n(721621),
    v = n(621054);
let Z = [a.yU.CHAT],
    j = () => {
        (0, i.Mr3)(p.s);
    };
function y(e) {
    let { sendLabel: t, canSend: n, isSending: a, onSend: r } = e,
        o = s.useCallback(() => {
            r();
        }, [r]);
    return (0, l.jsx)(i.mzw, {
        className: _.footerWithMessage,
        children: (0, l.jsx)('div', {
            className: _.footerButtons,
            children: (0, l.jsx)(i.zxk, {
                className: _.sendWithMessage,
                submitting: a,
                disabled: !n,
                onClick: o,
                children: t
            })
        })
    });
}
function C(e) {
    var t;
    let { applicationId: n, channel: a, command: p, onClose: C, requireLaunchChannel: N, onShareResult: S, previewMessage: E, ...L } = e,
        M = s.useMemo(() => (0, o.dL)(a.id), [a]),
        [P, T] = s.useState(!1),
        { commands: w, loading: A } =
            ((t = {
                channel: a,
                type: 'channel'
            }),
            (0, m.v1)(
                t,
                { commandTypes: Z },
                {
                    applicationId: n,
                    allowFetch: !1,
                    allowApplicationState: !0
                }
            )),
        R = s.useRef(0),
        [D, k] = s.useState(N ? [M] : []),
        I = D.length,
        F = I >= 5,
        [U, q] = s.useState(''),
        { results: z, updateSearchText: H } = (0, u.s)({
            selectedDestinations: D,
            originDestination: M,
            includeMissingDMs: !0
        }),
        W = s.useCallback(
            (e) => {
                q(e), H(e);
            },
            [H]
        ),
        O = s.useCallback(() => {
            S(!1), C();
        }, [S, C]),
        [G] = (0, r.Z)([n]),
        X = s.useCallback(() => {
            q('');
        }, [q]),
        B = s.useRef(null);
    s.useEffect(() => {
        if ('' === U) {
            var e;
            null === (e = B.current) || void 0 === e || e.focus();
        }
    }, [U]);
    let V = s.useCallback(
            (e) => {
                k((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return F ? t : (q(''), (R.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (R.current += 1), l;
                });
            },
            [F]
        ),
        [Y, J] = s.useMemo(() => {
            if (A) return [null, !1];
            let e = w.find((e) => e.untranslatedName === p);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [p, w, A]),
        Q = s.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Y) return;
                T(!0);
                let n = (await Promise.all(e.map(o.qx))).filter(h.lm);
                t && (S(!0), j()),
                    n.forEach(async (e) => {
                        let t = c.Z.getChannel(e);
                        if (null == t) return;
                        let n = d.Z.getGuild(null == t ? void 0 : t.guild_id);
                        null !=
                            (await (0, f.Z)({
                                command: Y,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                }
                            })) && (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['5WjJcn']), i.ToastType.MESSAGE));
                    }),
                    S(!0),
                    j();
            },
            [S, Y]
        ),
        K = s.useCallback(() => {
            Q(D, { closeAfterSend: !0 });
        }, [Q, D]);
    if (A)
        return (0, l.jsx)(i.Y0X, {
            className: _.modal,
            'aria-label': x.intl.string(x.t.fuFvw8),
            ...L,
            children: (0, l.jsx)(i.$jN, { className: _.spinnerContainer })
        });
    J && (i.Y0X, _.modal, x.intl.string(x.t.fuFvw8), i.hzk, x.intl.string(x.t.yAk8ZW));
    let $ =
        z.length > 0
            ? (0, l.jsx)(g.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: z,
                  handleToggleDestination: V,
                  selectedDestinations: D,
                  disableSelection: F,
                  originDestination: M
              })
            : (0, l.jsxs)(i.hzk, {
                  className: _.noResults,
                  children: [
                      (0, l.jsx)('img', {
                          className: _.noResultsImg,
                          src: v,
                          alt: ''
                      }),
                      (0, l.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: x.intl.string(x.t.V6nAfH)
                      })
                  ]
              });
    return (0, l.jsxs)(i.Y0X, {
        className: _.modal,
        'aria-label': x.intl.string(x.t.fuFvw8),
        ...L,
        children: [
            (0, l.jsxs)(i.xBx, {
                className: _.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: _.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: _.title,
                                children: (0, l.jsxs)(i.y5t, {
                                    component: (0, l.jsxs)(i.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: ['Share from ', null == G ? void 0 : G.name, '?']
                                    }),
                                    children: [
                                        F
                                            ? (0, l.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-warning',
                                                  children: x.intl.format(x.t['/KhyPT'], { count: 5 })
                                              })
                                            : null,
                                        (0, l.jsx)(i.X6q, {
                                            variant: 'heading-sm/normal',
                                            color: 'header-muted',
                                            children: x.intl.string(x.t['DF+q2t'])
                                        })
                                    ]
                                })
                            }),
                            (0, l.jsx)(i.olH, {
                                className: _.closeButton,
                                onClick: O
                            })
                        ]
                    }),
                    void 0 !== E ? (0, l.jsx)(b.z, { previewMessage: E }) : null,
                    (0, l.jsx)(i.E1j, {
                        className: _.search,
                        ref: B,
                        size: i.E1j.Sizes.MEDIUM,
                        query: U,
                        onChange: W,
                        onClear: X,
                        placeholder: x.intl.string(x.t['5h0QOD']),
                        'aria-label': x.intl.string(x.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            $,
            (0, l.jsx)(y, {
                sendLabel: x.intl.string(x.t.TXNS7e),
                canSend: I > 0,
                isSending: P,
                onSend: K
            })
        ]
    });
}
