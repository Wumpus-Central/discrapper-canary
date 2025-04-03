n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(393238),
    d = n(493773),
    p = n(100527),
    m = n(318766),
    h = n(907040),
    f = n(594174),
    b = n(626135),
    j = n(368326),
    x = n(720449),
    S = n(684269),
    g = n(429467),
    v = n(676035),
    O = n(926563),
    _ = n(875425),
    y = n(981631),
    N = n(185923),
    C = n(388032),
    w = n(782628);
function P(e) {
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
function I(e, t) {
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
let k = [_.HO.ADD_STATUS, _.HO.WHATS_ON_YOUR_MIND];
function E(e) {
    var t, n;
    let { transitionState: a, onClose: E, sourceAnalyticsContext: T, sourceAnalyticsLocations: D, prompt: B = null } = e,
        Z = (0, j.p)({ location: 'CustomStatusModalWithPreview' }),
        A = (0, o.e7)([f.default], () => {
            var e;
            return null != (e = f.default.getCurrentUser()) ? e : null;
        }),
        z = (0, v.a)(),
        [M, R] = l.useState(null != (t = null == z ? void 0 : z.state) ? t : ''),
        [W, L] = l.useState(null != (n = null == z ? void 0 : z.emoji) ? n : null),
        [U, H] = l.useState((0, S.Z)()),
        F = l.useRef(null),
        Y = l.useRef(null),
        K = l.useRef(null),
        [q, G] = l.useState(null != B ? B : null),
        V = M.length > 0 || null != W,
        X = Z && null != q ? q.label() : C.NW.string(C.t['xod36+']),
        [$, Q] = l.useState(X),
        { ref: J, width: ee } = (0, c.Z)(X);
    l.useEffect(() => {
        let e = K.current;
        if (null == ee || null == e) return;
        let t = ee - 78;
        e.textContent = X;
        let n = e.getBoundingClientRect().width;
        if (n <= t) Q(X);
        else {
            let e = n / X.length,
                r = Math.floor((t - 3 * e) / e);
            Q(''.concat(X.substring(0, r)).concat('...'));
        }
    }, [ee, X]),
        l.useEffect(() => {
            b.default.track(y.rMx.OPEN_MODAL, {
                type: p.Z.CUSTOM_STATUS_MODAL,
                location_stack: D
            });
        }, [D]),
        (0, d.ZP)(() => {
            var e, t;
            null == (e = F.current) || e.focus(), null == (t = F.current) || t.setSelection(M.length, M.length);
        });
    let et = (e) => {
            null != e &&
                L(
                    null != e.id
                        ? {
                              id: e.id,
                              name: e.name,
                              animated: e.animated
                          }
                        : {
                              id: null,
                              name: e.optionallyDiverseSequence,
                              animated: !1
                          }
                );
        },
        en = () => {
            (0, x.Z)({
                text: M,
                emojiInfo: W,
                clearAfter: U,
                analyticsContext: T,
                prompt: q
            }),
                E();
        },
        er = () =>
            null == W
                ? null
                : () =>
                      (0, r.jsx)(u.Z, {
                          className: w.emoji,
                          emojiId: W.id,
                          emojiName: W.name,
                          animated: !!W.animated
                      }),
        el = Z ? C.NW.string(C.t.rp0aho) : C.NW.string(C.t.UcdRn5),
        ea = 'custom-status-placeholder-text';
    return (0, r.jsxs)(s.Y0X, {
        transitionState: a,
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                className: w.header,
                children: [
                    (0, r.jsx)('div', {
                        className: w.headerTitle,
                        children: (0, r.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: C.NW.string(C.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: w.headerCloseButton,
                        children: (0, r.jsx)(s.olH, { onClick: E })
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                children: [
                    null != A &&
                        (0, r.jsx)('div', {
                            className: w.profilePreview,
                            children: (0, r.jsx)(O.Z, {
                                user: A,
                                previewText: M,
                                previewEmoji: W,
                                placeHolderText: X,
                                transitionState: a
                            })
                        }),
                    (0, r.jsxs)(s.hjN, {
                        className: w.formGroup,
                        titleClassName: w.customStatusInputTitle,
                        title: el,
                        children: [
                            (0, r.jsxs)('div', {
                                className: w.inputContainer,
                                ref: J,
                                children: [
                                    (0, r.jsx)('span', {
                                        ref: K,
                                        className: w.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, r.jsx)('div', {
                                        className: w.emojiButtonContainer,
                                        children: (0, r.jsx)(s.yRy, {
                                            targetElementRef: Y,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, r.jsx)(h.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        et(e), n && t();
                                                    },
                                                    pickerIntention: N.Hz.STATUS,
                                                    onNavigateAway: E
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (e, t) => {
                                                let { isShown: n } = t;
                                                return (0, r.jsx)(
                                                    m.Z,
                                                    I(P({}, e), {
                                                        ref: Y,
                                                        active: n,
                                                        className: w.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents: er()
                                                    })
                                                );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(s.Kx8, {
                                        autosize: !0,
                                        'aria-describedby': ea,
                                        value: M,
                                        maxLength: _.s0,
                                        rows: 1,
                                        showRemainingCharacterCount: !1,
                                        placeholder: $,
                                        onChange: (e) => {
                                            R(e);
                                        },
                                        onKeyDown: (e) => {
                                            'Enter' === e.key && en();
                                        },
                                        className: w.input,
                                        inputRef: F
                                    }),
                                    (0, r.jsx)(s.nn4, {
                                        id: ea,
                                        children: ''.concat(C.NW.string(C.t.EVV6ub), ': ').concat(X)
                                    }),
                                    (M.length > 0 || null != W) &&
                                        (0, r.jsx)('div', {
                                            className: w.clearButtonWrapper,
                                            children: (0, r.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: w.clearButton,
                                                onClick: () => {
                                                    R(''), L(null);
                                                },
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.NONE,
                                                children: (0, r.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: w.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            Z &&
                                (0, r.jsxs)(s.P3F, {
                                    ignoreKeyPress: V,
                                    'aria-disabled': V,
                                    className: i()(w.needInspiration, V && w.needInspirationDisabled),
                                    onClick: V
                                        ? void 0
                                        : () => {
                                              let e = (0, g.Z)((null == q ? void 0 : q.value) != null ? new Set([q.value, ...k]) : void 0);
                                              b.default.track(y.rMx.CUSTOM_STATUS_RANDOMIZER_CLICKED, {
                                                  previous_prompt_type: null == q ? void 0 : q.value,
                                                  new_prompt_type: null == e ? void 0 : e.value,
                                                  location_stack: D
                                              }),
                                                  R(''),
                                                  G(e),
                                                  null != e && s.uvj.announce(e.label());
                                          },
                                    children: [
                                        (0, r.jsx)(s.$2U, { size: 'xs' }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            children: C.NW.string(C.t.UH6ieX)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsxs)('div', {
                    className: w.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: w.clearAfterSelectContainer,
                            children: (0, r.jsx)(s.q4e, {
                                maxVisibleItems: _.Q9.length,
                                value: U,
                                options: _.Q9.map((e) =>
                                    I(P({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: H,
                                look: s.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: en,
                            children: C.NW.string(C.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
