n.d(t, { ApplicationCommandShareModal: () => w }), n(388685), n(35282);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(911969),
    s = n(835473),
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
    j = n(120575),
    v = n(621054);
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
let _ = [a.yU.CHAT],
    S = () => {
        (0, i.Mr3)(g.s);
    };
function P(e) {
    let { sendLabel: t, canSend: n, isSending: a, onSend: s } = e,
        o = l.useCallback(() => {
            s();
        }, [s]);
    return (0, r.jsx)(i.mzw, {
        className: j.footerWithMessage,
        children: (0, r.jsx)('div', {
            className: j.footerButtons,
            children: (0, r.jsx)(i.zxk, {
                className: j.sendWithMessage,
                submitting: a,
                disabled: !n,
                onClick: o,
                children: t
            })
        })
    });
}
function w(e) {
    var t,
        { applicationId: n, channel: a, command: g, onClose: w, requireLaunchChannel: E, onShareResult: C, previewMessage: N } = e,
        Z = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['applicationId', 'channel', 'command', 'onClose', 'requireLaunchChannel', 'onShareResult', 'previewMessage']);
    let L = l.useMemo(() => (null == a ? null : (0, o.dL)(a.id)), [a]),
        [D, M] = l.useState(!1),
        { commands: T, loading: k } =
            ((t = l.useMemo(
                () =>
                    null == a
                        ? { type: 'contextless' }
                        : {
                              type: 'channel',
                              channel: a
                          },
                [a]
            )),
            (0, b.v1)(
                t,
                { commandTypes: _ },
                {
                    applicationId: n,
                    allowFetch: !1,
                    allowApplicationState: !0
                }
            )),
        A = l.useRef(0),
        [R, I] = l.useState(E && null != L ? [L] : []),
        F = R.length,
        q = F >= 5,
        [U, z] = l.useState(''),
        { results: H, updateSearchText: W } = (0, u.s)({
            selectedDestinations: R,
            originDestination: null != L ? L : void 0,
            includeMissingDMs: !0
        }),
        G = l.useCallback(
            (e) => {
                z(e), W(e);
            },
            [W]
        ),
        X = l.useCallback(() => {
            C(!1), w();
        }, [C, w]),
        [B] = (0, s.Z)([n]),
        V = l.useCallback(() => {
            z('');
        }, [z]),
        Y = l.useRef(null);
    l.useEffect(() => {
        if ('' === U) {
            var e;
            null == (e = Y.current) || e.focus();
        }
    }, [U]);
    let J = l.useCallback(
            (e) => {
                I((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return q ? t : (z(''), (A.current += 1), [e, ...t]);
                    let r = [...t];
                    return r.splice(n, 1), (A.current += 1), r;
                });
            },
            [q]
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
                t && (C(!0), S()),
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
                            })) && (0, i.showToast)((0, i.createToast)(y.intl.string(y.t['5WjJcn']), i.ToastType.MESSAGE));
                    }),
                    C(!0),
                    S();
            },
            [C, Q]
        ),
        ee = l.useCallback(() => {
            $(R, { closeAfterSend: !0 });
        }, [$, R]);
    if (k)
        return (0, r.jsx)(
            i.Y0X,
            O(
                x(
                    {
                        className: j.modal,
                        'aria-label': y.intl.string(y.t.fuFvw8)
                    },
                    Z
                ),
                { children: (0, r.jsx)(i.$jN, { className: j.spinnerContainer }) }
            )
        );
    if (K)
        return (0, r.jsx)(
            i.Y0X,
            O(
                x(
                    {
                        className: j.modal,
                        'aria-label': y.intl.string(y.t.fuFvw8)
                    },
                    Z
                ),
                { children: (0, r.jsx)(i.hzk, { children: y.intl.string(y.t.yAk8ZW) }) }
            )
        );
    let et =
        H.length > 0
            ? (0, r.jsx)(p.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: H,
                  handleToggleDestination: J,
                  selectedDestinations: R,
                  disableSelection: q,
                  originDestination: L
              })
            : (0, r.jsxs)(i.hzk, {
                  className: j.noResults,
                  children: [
                      (0, r.jsx)('img', {
                          className: j.noResultsImg,
                          src: v,
                          alt: ''
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: y.intl.string(y.t.V6nAfH)
                      })
                  ]
              });
    return (0, r.jsxs)(
        i.Y0X,
        O(
            x(
                {
                    className: j.modal,
                    'aria-label': y.intl.string(y.t.fuFvw8)
                },
                Z
            ),
            {
                children: [
                    (0, r.jsxs)(i.xBx, {
                        className: j.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.titleLine,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: j.title,
                                        children: (0, r.jsxs)(i.y5t, {
                                            component: (0, r.jsxs)(i.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: ['Share from ', null == B ? void 0 : B.name, '?']
                                            }),
                                            children: [
                                                q
                                                    ? (0, r.jsx)(i.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'text-warning',
                                                          children: y.intl.format(y.t['/KhyPT'], { count: 5 })
                                                      })
                                                    : null,
                                                (0, r.jsx)(i.X6q, {
                                                    variant: 'heading-sm/normal',
                                                    color: 'header-muted',
                                                    children: y.intl.string(y.t['DF+q2t'])
                                                })
                                            ]
                                        })
                                    }),
                                    (0, r.jsx)(i.olH, {
                                        className: j.closeButton,
                                        onClick: X
                                    })
                                ]
                            }),
                            void 0 !== N ? (0, r.jsx)(m.z, { previewMessage: N }) : null,
                            (0, r.jsx)(i.E1j, {
                                className: j.search,
                                ref: Y,
                                size: i.E1j.Sizes.MEDIUM,
                                query: U,
                                onChange: G,
                                onClear: V,
                                placeholder: y.intl.string(y.t['5h0QOD']),
                                'aria-label': y.intl.string(y.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    et,
                    (0, r.jsx)(P, {
                        sendLabel: y.intl.string(y.t.TXNS7e),
                        canSend: F > 0,
                        isSending: D,
                        onSend: ee
                    })
                ]
            }
        )
    );
}
