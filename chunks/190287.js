(n.d(t, { Z: () => x }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    s = n(481060),
    o = n(596454),
    c = n(318766),
    d = n(907040),
    u = n(456268),
    m = n(999382),
    g = n(185923),
    p = n(388032),
    h = n(727138);
let f = (e) => {
        var t;
        let { reason: n = '', emoji_name: u, onSetReason: p, onSelectEmoji: f, onClearPressed: x, reasonMinLength: b, reasonMaxLength: j, placeholder: v, position: _ } = e,
            O = i.useRef(null),
            [y, C] = i.useState(!1),
            N = (0, l.e7)([m.Z], () => m.Z.isGuildMetadataLoaded());
        return (0, r.jsxs)('div', {
            className: h.reasonContainer,
            children: [
                (0, r.jsx)(s.yRy, {
                    targetElementRef: O,
                    onRequestClose: () => {
                        C(!1);
                    },
                    shouldShow: y,
                    position: 'right',
                    align: 'top',
                    animation: s.yRy.Animation.NONE,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(d.Z, {
                            pickerIntention: g.Hz.COMMUNITY_CONTENT,
                            closePopout: t,
                            onSelectEmoji: (e) => {
                                let { emoji: n, willClose: r } = e;
                                (null != n && f(n), r && t());
                            }
                        });
                    },
                    children: () =>
                        (0, r.jsx)('div', {
                            className: h.background,
                            ref: O,
                            children: (0, r.jsx)(c.Z, {
                                active: !1,
                                onClick: () => {
                                    C(!0);
                                },
                                tabIndex: 0,
                                renderButtonContents:
                                    null != u
                                        ? () =>
                                              (0, r.jsx)(o.Z, {
                                                  emojiName: u,
                                                  animated: !1
                                              })
                                        : null
                            })
                        })
                }),
                (0, r.jsxs)('div', {
                    className: h.inputContainer,
                    children: [
                        (0, r.jsx)(
                            a.Is,
                            {
                                inputClassName: h.reason,
                                placeholder: v,
                                value: n,
                                minLength: b,
                                maxLength: j,
                                onChange: (e) => {
                                    p(e);
                                },
                                defaultDirty: (null == n ? void 0 : n.length) > 0
                            },
                            'text-input-'.concat(_, '-').concat(N)
                        ),
                        (null != (t = null == n ? void 0 : n.length) ? t : 0) > 0 || null != u
                            ? (0, r.jsx)(a.zx, {
                                  className: h.clearStatusButton,
                                  onClick: x,
                                  look: a.zx.Looks.BLANK,
                                  size: a.zx.Sizes.NONE,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  children: (0, r.jsx)(s.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: h.clearStatusIcon
                                  })
                              })
                            : null
                    ]
                })
            ]
        });
    },
    x = (e) => {
        let { reasonMinLength: t, reasonMaxLength: n, guildId: i, reasons: l } = e,
            a = [p.intl.string(p.t['9dhBGh']), p.intl.string(p.t['8RmhKC']), p.intl.string(p.t['2t0V8/']), p.intl.string(p.t.l8WqCQ)],
            s = [];
        for (let e = 0; e < 4; e++)
            s.push(
                (0, r.jsx)(
                    f,
                    (function (e, t) {
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
                    })(
                        (function (e) {
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
                        })(
                            {
                                position: e,
                                placeholder: a[e]
                            },
                            l[e]
                        ),
                        {
                            onSetReason: (t) => {
                                let n = [...l],
                                    r = Object.assign({}, l[e], { reason: t });
                                ((n[e] = r), (0, u.P$)(i, n));
                            },
                            onSelectEmoji: (t) => {
                                let n = [...l],
                                    r = Object.assign({}, l[e], { emoji_name: t.optionallyDiverseSequence });
                                ((n[e] = r), (0, u.P$)(i, n));
                            },
                            onClearPressed: () => {
                                let t = [...l],
                                    n = {
                                        reason: '',
                                        emoji_name: null
                                    };
                                ((t[e] = n), (0, u.P$)(i, t));
                            },
                            reasonMinLength: t,
                            reasonMaxLength: n
                        }
                    ),
                    'reasonListItem-' + e
                )
            );
        return (0, r.jsx)('div', { children: s });
    };
