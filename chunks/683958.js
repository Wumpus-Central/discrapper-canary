n.d(t, { ApplicationCommandShareModal: () => P }), n(47120), n(301563);
var r = n(200651),
    l = n(192379),
    a = n(481060),
    s = n(911969),
    i = n(835473),
    o = n(987509),
    u = n(72214),
    c = n(592125),
    d = n(430824),
    f = n(823379),
    b = n(213459),
    h = n(667204),
    m = n(739980),
    p = n(617266),
    g = n(333861),
    y = n(388032),
    v = n(120575),
    j = n(621054);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = [s.yU.CHAT],
    N = () => {
        (0, a.Mr3)(g.s);
    };
function S(e) {
    let { sendLabel: t, canSend: n, isSending: s, onSend: i } = e,
        o = l.useCallback(() => {
            i();
        }, [i]);
    return (0, r.jsx)(a.mzw, {
        className: v.footerWithMessage,
        children: (0, r.jsx)('div', {
            className: v.footerButtons,
            children: (0, r.jsx)(a.zxk, {
                className: v.sendWithMessage,
                submitting: s,
                disabled: !n,
                onClick: o,
                children: t
            })
        })
    });
}
function P(e) {
    var t,
        { applicationId: n, channel: s, command: g, onClose: P, requireLaunchChannel: w, onShareResult: E, previewMessage: C } = e,
        Z = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['applicationId', 'channel', 'command', 'onClose', 'requireLaunchChannel', 'onShareResult', 'previewMessage']);
    let L = l.useMemo(() => (0, o.dL)(s.id), [s]),
        [D, M] = l.useState(!1),
        { commands: T, loading: k } =
            ((t = {
                channel: s,
                type: 'channel'
            }),
            (0, b.v1)(
                t,
                { commandTypes: _ },
                {
                    applicationId: n,
                    allowFetch: !1,
                    allowApplicationState: !0
                }
            )),
        W = l.useRef(0),
        [A, R] = l.useState(w ? [L] : []),
        I = A.length,
        F = I >= 5,
        [q, U] = l.useState(''),
        { results: z, updateSearchText: H } = (0, u.s)({
            selectedDestinations: A,
            originDestination: L,
            includeMissingDMs: !0
        }),
        G = l.useCallback(
            (e) => {
                U(e), H(e);
            },
            [H]
        ),
        X = l.useCallback(() => {
            E(!1), P();
        }, [E, P]),
        [B] = (0, i.Z)([n]),
        V = l.useCallback(() => {
            U('');
        }, [U]),
        Y = l.useRef(null);
    l.useEffect(() => {
        if ('' === q) {
            var e;
            null == (e = Y.current) || e.focus();
        }
    }, [q]);
    let J = l.useCallback(
            (e) => {
                R((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return F ? t : (U(''), (W.current += 1), [e, ...t]);
                    let r = [...t];
                    return r.splice(n, 1), (W.current += 1), r;
                });
            },
            [F]
        ),
        [Q, K] = l.useMemo(() => {
            if (k) return [null, !1];
            let e = T.find((e) => e.untranslatedName === g);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [g, T, k]),
        $ = l.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Q) return;
                M(!0);
                let n = (await Promise.all(e.map(o.qx))).filter(f.lm);
                t && (E(!0), N()),
                    n.forEach(async (e) => {
                        let t = c.Z.getChannel(e);
                        if (null == t) return;
                        let n = d.Z.getGuild(null == t ? void 0 : t.guild_id);
                        null !=
                            (await (0, h.Z)({
                                command: Q,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                }
                            })) && (0, a.showToast)((0, a.createToast)(y.NW.string(y.t['5WjJcn']), a.ToastType.MESSAGE));
                    }),
                    E(!0),
                    N();
            },
            [E, Q]
        ),
        ee = l.useCallback(() => {
            $(A, { closeAfterSend: !0 });
        }, [$, A]);
    if (k)
        return (0, r.jsx)(
            a.Y0X,
            O(
                x(
                    {
                        className: v.modal,
                        'aria-label': y.NW.string(y.t.fuFvw8)
                    },
                    Z
                ),
                { children: (0, r.jsx)(a.$jN, { className: v.spinnerContainer }) }
            )
        );
    K &&
        (a.Y0X,
        O(
            x(
                {
                    className: v.modal,
                    'aria-label': y.NW.string(y.t.fuFvw8)
                },
                Z
            ),
            { children: (0, r.jsx)(a.hzk, { children: y.NW.string(y.t.yAk8ZW) }) }
        ));
    let et =
        z.length > 0
            ? (0, r.jsx)(p.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: z,
                  handleToggleDestination: J,
                  selectedDestinations: A,
                  disableSelection: F,
                  originDestination: L
              })
            : (0, r.jsxs)(a.hzk, {
                  className: v.noResults,
                  children: [
                      (0, r.jsx)('img', {
                          className: v.noResultsImg,
                          src: j,
                          alt: ''
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: y.NW.string(y.t.V6nAfH)
                      })
                  ]
              });
    return (0, r.jsxs)(
        a.Y0X,
        O(
            x(
                {
                    className: v.modal,
                    'aria-label': y.NW.string(y.t.fuFvw8)
                },
                Z
            ),
            {
                children: [
                    (0, r.jsxs)(a.xBx, {
                        className: v.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v.titleLine,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: v.title,
                                        children: (0, r.jsxs)(a.y5t, {
                                            component: (0, r.jsxs)(a.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: ['Share from ', null == B ? void 0 : B.name, '?']
                                            }),
                                            children: [
                                                F
                                                    ? (0, r.jsx)(a.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'text-warning',
                                                          children: y.NW.format(y.t['/KhyPT'], { count: 5 })
                                                      })
                                                    : null,
                                                (0, r.jsx)(a.X6q, {
                                                    variant: 'heading-sm/normal',
                                                    color: 'header-muted',
                                                    children: y.NW.string(y.t['DF+q2t'])
                                                })
                                            ]
                                        })
                                    }),
                                    (0, r.jsx)(a.olH, {
                                        className: v.closeButton,
                                        onClick: X
                                    })
                                ]
                            }),
                            void 0 !== C ? (0, r.jsx)(m.z, { previewMessage: C }) : null,
                            (0, r.jsx)(a.E1j, {
                                className: v.search,
                                ref: Y,
                                size: a.E1j.Sizes.MEDIUM,
                                query: q,
                                onChange: G,
                                onClear: V,
                                placeholder: y.NW.string(y.t['5h0QOD']),
                                'aria-label': y.NW.string(y.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    et,
                    (0, r.jsx)(S, {
                        sendLabel: y.NW.string(y.t.TXNS7e),
                        canSend: I > 0,
                        isSending: D,
                        onSend: ee
                    })
                ]
            }
        )
    );
}
