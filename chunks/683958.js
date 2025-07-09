(n.d(t, { ApplicationCommandShareModal: () => C }), n(388685), n(35282));
var r = n(255367),
    l = n(73800),
    i = n(755721),
    a = n(481060),
    s = n(911969),
    o = n(835473),
    u = n(987509),
    c = n(72214),
    d = n(592125),
    f = n(430824),
    b = n(823379),
    h = n(213459),
    m = n(667204),
    p = n(739980),
    g = n(617266),
    y = n(333861),
    v = n(388032),
    x = n(120575),
    j = n(621054);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e, t) {
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
let S = [s.yU.CHAT],
    P = () => {
        (0, a.Mr3)(y.s);
    };
function w(e) {
    let { sendLabel: t, canSend: n, isSending: s, onSend: o } = e,
        u = l.useCallback(() => {
            o();
        }, [o]);
    return (0, r.jsx)(a.mzw, {
        className: x.footerWithMessage,
        children: (0, r.jsx)('div', {
            className: x.footerButtons,
            children: (0, r.jsx)(i.zx, {
                className: x.sendWithMessage,
                submitting: s,
                disabled: !n,
                onClick: u,
                children: t
            })
        })
    });
}
function C(e) {
    var t,
        { applicationId: n, channel: i, command: s, onClose: y, requireLaunchChannel: C, onShareResult: E, previewMessage: N } = e,
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
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['applicationId', 'channel', 'command', 'onClose', 'requireLaunchChannel', 'onShareResult', 'previewMessage']);
    let L = l.useMemo(() => (null == i ? null : (0, u.dL)(i.id)), [i]),
        [M, D] = l.useState(!1),
        { commands: T, loading: k } =
            ((t = l.useMemo(
                () =>
                    null == i
                        ? { type: 'contextless' }
                        : {
                              type: 'channel',
                              channel: i
                          },
                [i]
            )),
            (0, h.v1)(
                t,
                { commandTypes: S },
                {
                    applicationId: n,
                    allowFetch: !0,
                    allowApplicationState: !0
                }
            )),
        A = l.useRef(0),
        [R, I] = l.useState(C && null != L ? [L] : []),
        F = R.length,
        q = F >= 5,
        [U, z] = l.useState(''),
        { results: H, updateSearchText: W } = (0, c.s)({
            selectedDestinations: R,
            originDestination: null != L ? L : void 0,
            includeMissingDMs: !0
        }),
        G = l.useCallback(
            (e) => {
                (z(e), W(e));
            },
            [W]
        ),
        X = l.useCallback(() => {
            (E(!1), y());
        }, [E, y]),
        [B] = (0, o.Z)([n]),
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
                    if (-1 === n) return q ? t : (z(''), W(''), (A.current += 1), [e, ...t]);
                    let r = [...t];
                    return (r.splice(n, 1), (A.current += 1), r);
                });
            },
            [q, W]
        ),
        [Q, K] = l.useMemo(() => {
            if (k) return [null, !1];
            let e = T.find((e) => e.untranslatedName === s.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [s, T, k]),
        $ = l.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Q) return;
                D(!0);
                let n = (await Promise.all(e.map(u.qx))).filter(b.lm);
                (t && (E(!0), P()),
                    n.forEach(async (e) => {
                        var t, n;
                        let r = d.Z.getChannel(e);
                        if (null == r) return;
                        let l =
                                null !=
                                (n =
                                    null == (t = s.options)
                                        ? void 0
                                        : t.reduce(
                                              (e, t) => (
                                                  (e[t.name] = [
                                                      {
                                                          type: 'text',
                                                          text: t.value
                                                      }
                                                  ]),
                                                  e
                                              ),
                                              {}
                                          ))
                                    ? n
                                    : {},
                            i = f.Z.getGuild(null == r ? void 0 : r.guild_id);
                        null !=
                            (await (0, m.Z)({
                                command: Q,
                                optionValues: l,
                                context: {
                                    channel: r,
                                    guild: i
                                }
                            })) && (0, a.showToast)((0, a.createToast)(v.intl.string(v.t['5WjJcn']), a.ToastType.MESSAGE));
                    }),
                    E(!0),
                    P());
            },
            [E, Q, s.options]
        ),
        ee = l.useCallback(() => {
            $(R, { closeAfterSend: !0 });
        }, [$, R]);
    if (k)
        return (0, r.jsx)(
            a.Y0X,
            _(
                O(
                    {
                        className: x.modal,
                        'aria-label': v.intl.string(v.t.fuFvw8)
                    },
                    Z
                ),
                {
                    parentComponent: 'ApplicationCommandShareModal',
                    children: (0, r.jsx)(a.$jN, { className: x.spinnerContainer })
                }
            )
        );
    if (K)
        return (0, r.jsx)(
            a.Y0X,
            _(
                O(
                    {
                        className: x.modal,
                        'aria-label': v.intl.string(v.t.fuFvw8)
                    },
                    Z
                ),
                {
                    parentComponent: 'ApplicationCommandShareModal',
                    children: (0, r.jsx)(a.hzk, { children: v.intl.string(v.t.yAk8ZW) })
                }
            )
        );
    let et =
        H.length > 0
            ? (0, r.jsx)(g.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: H,
                  handleToggleDestination: J,
                  selectedDestinations: R,
                  disableSelection: q,
                  originDestination: L
              })
            : (0, r.jsxs)(a.hzk, {
                  className: x.noResults,
                  children: [
                      (0, r.jsx)('img', {
                          className: x.noResultsImg,
                          src: j,
                          alt: ''
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: v.intl.string(v.t.V6nAfH)
                      })
                  ]
              });
    return (0, r.jsxs)(
        a.Y0X,
        _(
            O(
                {
                    className: x.modal,
                    'aria-label': v.intl.string(v.t.fuFvw8)
                },
                Z
            ),
            {
                parentComponent: 'ApplicationCommandShareModal',
                children: [
                    (0, r.jsxs)(a.xBx, {
                        className: x.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: x.titleLine,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: x.title,
                                        children: (0, r.jsxs)(a.y5t, {
                                            component: (0, r.jsxs)(a.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: ['Share from ', null == B ? void 0 : B.name, '?']
                                            }),
                                            children: [
                                                q
                                                    ? (0, r.jsx)(a.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'text-feedback-warning',
                                                          children: v.intl.format(v.t['/KhyPT'], { count: 5 })
                                                      })
                                                    : null,
                                                (0, r.jsx)(a.X6q, {
                                                    variant: 'heading-sm/normal',
                                                    color: 'header-muted',
                                                    children: v.intl.string(v.t['DF+q2t'])
                                                })
                                            ]
                                        })
                                    }),
                                    (0, r.jsx)(a.olH, {
                                        className: x.closeButton,
                                        onClick: X
                                    })
                                ]
                            }),
                            void 0 !== N ? (0, r.jsx)(p.z, { previewMessage: N }) : null,
                            (0, r.jsx)(a.E1j, {
                                className: x.search,
                                ref: Y,
                                size: a.E1j.Sizes.MEDIUM,
                                query: U,
                                onChange: G,
                                onClear: V,
                                placeholder: v.intl.string(v.t['5h0QOD']),
                                'aria-label': v.intl.string(v.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    et,
                    (0, r.jsx)(w, {
                        sendLabel: v.intl.string(v.t.TXNS7e),
                        canSend: F > 0,
                        isSending: M,
                        onSend: ee
                    })
                ]
            }
        )
    );
}
