n.d(t, { default: () => O }), n(388685);
var r = n(255367),
    l = n(73800),
    s = n(442837),
    i = n(481060),
    a = n(904245),
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
        { applicationId: h, customId: O, linkId: _, message: S, onClose: E, onCopyLink: P, onShare: Z, transitionState: L } = e,
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
        })(e, ['applicationId', 'customId', 'linkId', 'message', 'onClose', 'onCopyLink', 'onShare', 'transitionState']);
    let [N] = (0, u.Z)([h]),
        w = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        [k, T] = l.useState(!1),
        [D, R] = l.useState(''),
        [M, I] = l.useState('');
    l.useEffect(() => {
        I(
            (0, o.H)({
                applicationId: h,
                referrerId: null == w ? void 0 : w.id,
                customId: O,
                linkId: _
            })
        );
    }, [h, w, O, _, I]);
    let A = l.useRef(0),
        [U, z] = l.useState([]),
        H = U.length,
        q = H >= 5;
    l.useEffect(() => {
        if ('' === D) {
            var e;
            null == (e = B.current) || e.focus();
        }
    }, [D]);
    let F = l.useCallback(() => {
            R('');
        }, [R]),
        B = l.useRef(null),
        { results: W, updateSearchText: G } = (0, f.s)({
            selectedDestinations: U,
            includeMissingDMs: !0
        }),
        X = l.useCallback(
            (e) => {
                R(e), G(e);
            },
            [R, G]
        ),
        V = l.useCallback(
            (e) => {
                z((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return q ? t : (R(''), (A.current += 1), [e, ...t]);
                    let r = [...t];
                    return r.splice(n, 1), (A.current += 1), r;
                });
            },
            [q]
        ),
        J = l.useCallback(
            async (e) => {
                if (null == N) return;
                let t = g.intl.formatToMarkdownString(g.t.dZJpdH, {
                        applicationName: N.name,
                        link: M
                    }),
                    n = ''.concat(S, '\n\n').concat(t);
                T(!0),
                    (await Promise.all(e.map(d.qx))).filter(m.lm).forEach(async (e) => {
                        let t = b.Z.getChannel(e);
                        null != t && (await a.Z.sendMessage(e, c.ZP.parse(t, n), !1));
                    }),
                    (0, i.showToast)((0, i.createToast)(g.intl.formatToPlainString(g.t.jQULqK, { applicationName: N.name }), i.ToastType.SUCCESS)),
                    Z(!0),
                    E();
            },
            [S, M, E, Z, N]
        ),
        K =
            W.length > 0
                ? (0, r.jsx)(y.Q, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: W,
                      handleToggleDestination: V,
                      selectedDestinations: U,
                      disableSelection: q
                  })
                : (0, r.jsxs)(i.hzk, {
                      className: j.noResults,
                      children: [
                          (0, r.jsx)('img', {
                              className: j.noResultsImg,
                              src: x,
                              alt: ''
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: g.intl.string(g.t.V6nAfH)
                          })
                      ]
                  });
    return (0, r.jsxs)(
        i.Y0X,
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
                    (0, r.jsxs)(i.xBx, {
                        className: j.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.titleLine,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: j.title,
                                        children: (0, r.jsx)(i.y5t, {
                                            component: (0, r.jsx)(i.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: g.intl.string(g.t.r9qKo6)
                                            }),
                                            children: (0, r.jsx)(i.Text, {
                                                className: j.message,
                                                lineClamp: 1,
                                                variant: 'text-sm/medium',
                                                color: 'text-secondary',
                                                children: S
                                            })
                                        })
                                    }),
                                    (0, r.jsx)(i.olH, {
                                        className: j.closeButton,
                                        onClick: E
                                    })
                                ]
                            }),
                            (0, r.jsx)(i.E1j, {
                                ref: B,
                                size: i.E1j.Sizes.MEDIUM,
                                query: D,
                                onChange: X,
                                onClear: F,
                                placeholder: g.intl.string(g.t['5h0QOD']),
                                'aria-label': g.intl.string(g.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    K,
                    (0, r.jsx)(i.mzw, {
                        className: j.footer,
                        children: (0, r.jsxs)('div', {
                            className: j.copySendBar,
                            children: [
                                (0, r.jsx)(v, {
                                    link: M,
                                    onCopyLink: P
                                }),
                                (0, r.jsx)(i.zxk, {
                                    className: j.sendWithMessage,
                                    onClick: () => J(U),
                                    submitting: k,
                                    disabled: !(H > 0),
                                    children: g.intl.string(g.t.TXNS7e)
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
        [s, a] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e;
            return (
                s &&
                    (e = setTimeout(() => {
                        a(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [s]),
        (0, r.jsxs)(i.zxk, {
            look: i.zxk.Looks.LINK,
            color: i.zxk.Colors.LINK,
            onClick: function () {
                (0, h.JG)(t, () => {
                    n(), a(!0);
                });
            },
            innerClassName: j.copyButton,
            children: [
                s
                    ? (0, r.jsx)(i.owK, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, r.jsx)(i.TIy, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                s ? g.intl.string(g.t['t5VZ8/']) : g.intl.string(g.t.WqhZsr)
            ]
        })
    );
}
