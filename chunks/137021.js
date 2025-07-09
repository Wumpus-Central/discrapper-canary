(n.d(t, { default: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    s = n(442837),
    i = n(755721),
    a = n(481060),
    o = n(904245),
    u = n(311819),
    c = n(835473),
    d = n(957730),
    f = n(987509),
    b = n(72214),
    p = n(592125),
    h = n(594174),
    m = n(572004),
    y = n(823379),
    g = n(207003),
    j = n(388032),
    x = n(277580),
    O = n(621054);
function v(e) {
    var t,
        n,
        { applicationId: m, customId: v, linkId: _, message: E, onClose: P, onCopyLink: Z, onShare: L, transitionState: C } = e,
        N = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['applicationId', 'customId', 'linkId', 'message', 'onClose', 'onCopyLink', 'onShare', 'transitionState']);
    let [w] = (0, c.Z)([m]),
        k = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        [T, D] = l.useState(!1),
        [R, M] = l.useState(''),
        [I, A] = l.useState('');
    l.useEffect(() => {
        A(
            (0, u.H)({
                applicationId: m,
                referrerId: null == k ? void 0 : k.id,
                customId: v,
                linkId: _
            })
        );
    }, [m, k, v, _, A]);
    let U = l.useRef(0),
        [z, H] = l.useState([]),
        q = z.length,
        F = q >= 5;
    l.useEffect(() => {
        if ('' === R) {
            var e;
            null == (e = W.current) || e.focus();
        }
    }, [R]);
    let B = l.useCallback(() => {
            M('');
        }, [M]),
        W = l.useRef(null),
        { results: G, updateSearchText: X } = (0, b.s)({
            selectedDestinations: z,
            includeMissingDMs: !0
        }),
        V = l.useCallback(
            (e) => {
                (M(e), X(e));
            },
            [M, X]
        ),
        J = l.useCallback(
            (e) => {
                H((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return F ? t : (M(''), (U.current += 1), [e, ...t]);
                    let r = [...t];
                    return (r.splice(n, 1), (U.current += 1), r);
                });
            },
            [F]
        ),
        K = l.useCallback(
            async (e) => {
                if (null == w) return;
                let t = j.intl.formatToMarkdownString(j.t.dZJpdH, {
                        applicationName: w.name,
                        link: I
                    }),
                    n = ''.concat(E, '\n\n').concat(t);
                (D(!0),
                    (await Promise.all(e.map(f.qx))).filter(y.lm).forEach(async (e) => {
                        let t = p.Z.getChannel(e);
                        null != t && (await o.Z.sendMessage(e, d.ZP.parse(t, n), !1));
                    }),
                    (0, a.showToast)((0, a.createToast)(j.intl.formatToPlainString(j.t.jQULqK, { applicationName: w.name }), a.ToastType.SUCCESS)),
                    L(!0),
                    P());
            },
            [E, I, P, L, w]
        ),
        Q =
            G.length > 0
                ? (0, r.jsx)(g.Q, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: G,
                      handleToggleDestination: J,
                      selectedDestinations: z,
                      disableSelection: F
                  })
                : (0, r.jsxs)(a.hzk, {
                      className: x.noResults,
                      children: [
                          (0, r.jsx)('img', {
                              className: x.noResultsImg,
                              src: O,
                              alt: ''
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: j.intl.string(j.t.V6nAfH)
                          })
                      ]
                  });
    return (0, r.jsxs)(
        a.Y0X,
        ((t = (function (e) {
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
        })({ transitionState: C }, N)),
        (n = n =
            {
                className: x.modalRoot,
                parentComponent: 'ActivityShareLinkModal',
                children: [
                    (0, r.jsxs)(a.xBx, {
                        className: x.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: x.titleLine,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: x.title,
                                        children: (0, r.jsx)(a.y5t, {
                                            component: (0, r.jsx)(a.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: j.intl.string(j.t.r9qKo6)
                                            }),
                                            children: (0, r.jsx)(a.Text, {
                                                className: x.message,
                                                lineClamp: 1,
                                                variant: 'text-sm/medium',
                                                color: 'text-secondary',
                                                children: E
                                            })
                                        })
                                    }),
                                    (0, r.jsx)(a.olH, {
                                        className: x.closeButton,
                                        onClick: P
                                    })
                                ]
                            }),
                            (0, r.jsx)(a.E1j, {
                                ref: W,
                                size: a.E1j.Sizes.MEDIUM,
                                query: R,
                                onChange: V,
                                onClear: B,
                                placeholder: j.intl.string(j.t['5h0QOD']),
                                'aria-label': j.intl.string(j.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    Q,
                    (0, r.jsx)(a.mzw, {
                        className: x.footer,
                        children: (0, r.jsxs)('div', {
                            className: x.copySendBar,
                            children: [
                                (0, r.jsx)(S, {
                                    link: I,
                                    onCopyLink: Z
                                }),
                                (0, r.jsx)(i.zx, {
                                    className: x.sendWithMessage,
                                    onClick: () => K(z),
                                    submitting: T,
                                    disabled: !(q > 0),
                                    children: j.intl.string(j.t.TXNS7e)
                                })
                            ]
                        })
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
function S(e) {
    let { link: t, onCopyLink: n } = e,
        [s, o] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e;
            return (
                s &&
                    (e = setTimeout(() => {
                        o(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [s]),
        (0, r.jsxs)(i.zx, {
            look: i.zx.Looks.LINK,
            color: i.zx.Colors.LINK,
            onClick: function () {
                (0, m.JG)(t, () => {
                    (n(), o(!0));
                });
            },
            innerClassName: x.copyButton,
            children: [
                s
                    ? (0, r.jsx)(a.owK, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, r.jsx)(a.TIy, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                s ? j.intl.string(j.t['t5VZ8/']) : j.intl.string(j.t.WqhZsr)
            ]
        })
    );
}
