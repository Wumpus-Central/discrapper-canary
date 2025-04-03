n.d(t, { default: () => O }), n(47120);
var r = n(200651),
    l = n(192379),
    s = n(442837),
    a = n(481060),
    i = n(904245),
    o = n(311819),
    u = n(835473),
    c = n(957730),
    d = n(987509),
    f = n(72214),
    b = n(592125),
    p = n(594174),
    h = n(572004),
    m = n(823379),
    y = n(207003),
    g = n(388032),
    j = n(277580),
    x = n(621054);
function O(e) {
    var t,
        n,
        { applicationId: h, customId: O, linkId: S, message: _, onClose: N, onCopyLink: E, onShare: P, referrerId: Z, transitionState: L } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['applicationId', 'customId', 'linkId', 'message', 'onClose', 'onCopyLink', 'onShare', 'referrerId', 'transitionState']);
    let [w] = (0, u.Z)([h]),
        k = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        [T, D] = l.useState(!1),
        [R, M] = l.useState(''),
        [I, W] = l.useState('');
    l.useEffect(() => {
        W(
            (0, o.H)({
                applicationId: h,
                referrerId: null != Z ? Z : null == k ? void 0 : k.id,
                customId: O,
                linkId: S
            })
        );
    }, [h, k, O, S, Z, W]);
    let A = l.useRef(0),
        [U, z] = l.useState([]),
        H = U.length,
        q = H >= 5;
    l.useEffect(() => {
        if ('' === R) {
            var e;
            null == (e = B.current) || e.focus();
        }
    }, [R]);
    let F = l.useCallback(() => {
            M('');
        }, [M]),
        B = l.useRef(null),
        { results: G, updateSearchText: X } = (0, f.s)({
            selectedDestinations: U,
            includeMissingDMs: !0
        }),
        V = l.useCallback(
            (e) => {
                M(e), X(e);
            },
            [M, X]
        ),
        J = l.useCallback(
            (e) => {
                z((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return q ? t : (M(''), (A.current += 1), [e, ...t]);
                    let r = [...t];
                    return r.splice(n, 1), (A.current += 1), r;
                });
            },
            [q]
        ),
        K = l.useCallback(
            async (e) => {
                if (null == w) return;
                let t = g.NW.formatToMarkdownString(g.t.dZJpdH, {
                        applicationName: w.name,
                        link: I
                    }),
                    n = ''.concat(_, '\n\n').concat(t);
                D(!0),
                    (await Promise.all(e.map(d.qx))).filter(m.lm).forEach(async (e) => {
                        let t = b.Z.getChannel(e);
                        null != t && (await i.Z.sendMessage(e, c.ZP.parse(t, n), !1));
                    }),
                    (0, a.showToast)((0, a.createToast)(g.NW.formatToPlainString(g.t.jQULqK, { applicationName: w.name }), a.ToastType.SUCCESS)),
                    P(!0),
                    N();
            },
            [_, I, N, P, w]
        ),
        Q =
            G.length > 0
                ? (0, r.jsx)(y.Q, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: G,
                      handleToggleDestination: J,
                      selectedDestinations: U,
                      disableSelection: q
                  })
                : (0, r.jsxs)(a.hzk, {
                      className: j.noResults,
                      children: [
                          (0, r.jsx)('img', {
                              className: j.noResultsImg,
                              src: x,
                              alt: ''
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: g.NW.string(g.t.V6nAfH)
                          })
                      ]
                  });
    return (0, r.jsxs)(
        a.Y0X,
        ((t = (function (e) {
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
        })({ transitionState: L }, C)),
        (n = n =
            {
                className: j.modalRoot,
                children: [
                    (0, r.jsxs)(a.xBx, {
                        className: j.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.titleLine,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: j.title,
                                        children: (0, r.jsx)(a.y5t, {
                                            component: (0, r.jsx)(a.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: g.NW.string(g.t.r9qKo6)
                                            }),
                                            children: (0, r.jsx)(a.Text, {
                                                className: j.message,
                                                lineClamp: 1,
                                                variant: 'text-sm/medium',
                                                color: 'text-secondary',
                                                children: _
                                            })
                                        })
                                    }),
                                    (0, r.jsx)(a.olH, {
                                        className: j.closeButton,
                                        onClick: N
                                    })
                                ]
                            }),
                            (0, r.jsx)(a.E1j, {
                                ref: B,
                                size: a.E1j.Sizes.MEDIUM,
                                query: R,
                                onChange: V,
                                onClear: F,
                                placeholder: g.NW.string(g.t['5h0QOD']),
                                'aria-label': g.NW.string(g.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    Q,
                    (0, r.jsx)(a.mzw, {
                        className: j.footer,
                        children: (0, r.jsxs)('div', {
                            className: j.copySendBar,
                            children: [
                                (0, r.jsx)(v, {
                                    link: I,
                                    onCopyLink: E
                                }),
                                (0, r.jsx)(a.zxk, {
                                    className: j.sendWithMessage,
                                    onClick: () => K(U),
                                    submitting: T,
                                    disabled: !(H > 0),
                                    children: g.NW.string(g.t.TXNS7e)
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
function v(e) {
    let { link: t, onCopyLink: n } = e,
        [s, i] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e;
            return (
                s &&
                    (e = setTimeout(() => {
                        i(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [s]),
        (0, r.jsxs)(a.zxk, {
            look: a.zxk.Looks.LINK,
            color: a.zxk.Colors.LINK,
            onClick: function () {
                (0, h.JG)(t), n(), i(!0);
            },
            innerClassName: j.copyButton,
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
                s ? g.NW.string(g.t['t5VZ8/']) : g.NW.string(g.t.WqhZsr)
            ]
        })
    );
}
