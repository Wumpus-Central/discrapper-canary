(n.d(t, { Z: () => x }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(755721),
    a = n(481060),
    o = n(596454),
    c = n(318766),
    d = n(907040),
    u = n(456268),
    m = n(999382),
    g = n(185923),
    p = n(388032),
    f = n(727138);
let h = (e) => {
        var t;
        let { reason: n = '', emoji_name: u, onSetReason: p, onSelectEmoji: h, onClearPressed: x, reasonMinLength: b, reasonMaxLength: j, placeholder: v, position: _ } = e,
            O = i.useRef(null),
            [C, y] = i.useState(!1),
            N = (0, l.e7)([m.Z], () => m.Z.isGuildMetadataLoaded());
        return (0, r.jsxs)('div', {
            className: f.reasonContainer,
            children: [
                (0, r.jsx)(a.yRy, {
                    targetElementRef: O,
                    onRequestClose: () => {
                        y(!1);
                    },
                    shouldShow: C,
                    position: 'right',
                    align: 'top',
                    animation: a.yRy.Animation.NONE,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(d.Z, {
                            pickerIntention: g.Hz.COMMUNITY_CONTENT,
                            closePopout: t,
                            onSelectEmoji: (e) => {
                                let { emoji: n, willClose: r } = e;
                                (null != n && h(n), r && t());
                            }
                        });
                    },
                    children: () =>
                        (0, r.jsx)('div', {
                            className: f.background,
                            ref: O,
                            children: (0, r.jsx)(c.Z, {
                                active: !1,
                                onClick: () => {
                                    y(!0);
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
                    className: f.inputContainer,
                    children: [
                        (0, r.jsx)(
                            s.Is,
                            {
                                inputClassName: f.reason,
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
                            ? (0, r.jsx)(s.zx, {
                                  className: f.clearStatusButton,
                                  onClick: x,
                                  look: s.zx.Looks.BLANK,
                                  size: s.zx.Sizes.NONE,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  children: (0, r.jsx)(a.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: f.clearStatusIcon
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
            s = [p.intl.string(p.t['9dhBGh']), p.intl.string(p.t['8RmhKC']), p.intl.string(p.t['2t0V8/']), p.intl.string(p.t.l8WqCQ)],
            a = [];
        for (let e = 0; e < 4; e++)
            a.push(
                (0, r.jsx)(
                    h,
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
                                placeholder: s[e]
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
        return (0, r.jsx)('div', { children: a });
    };
