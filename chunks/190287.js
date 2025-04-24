n.d(t, { Z: () => f }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(596454),
    o = n(318766),
    c = n(907040),
    u = n(456268),
    d = n(999382),
    m = n(185923),
    g = n(388032),
    p = n(727138);
let h = (e) => {
        var t;
        let { reason: n = '', emoji_name: u, onSetReason: g, onSelectEmoji: h, onClearPressed: f, reasonMinLength: x, reasonMaxLength: b, placeholder: j, position: _ } = e,
            [v, O] = i.useState(!1),
            C = (0, l.e7)([d.Z], () => d.Z.isGuildMetadataLoaded());
        return (0, r.jsxs)('div', {
            className: p.reasonContainer,
            children: [
                (0, r.jsx)(s.yRy, {
                    onRequestClose: () => {
                        O(!1);
                    },
                    shouldShow: v,
                    position: 'right',
                    align: 'top',
                    animation: s.yRy.Animation.NONE,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(c.Z, {
                            pickerIntention: m.Hz.COMMUNITY_CONTENT,
                            closePopout: t,
                            onSelectEmoji: (e, n) => {
                                null != e && h(e), n && t();
                            }
                        });
                    },
                    children: () =>
                        (0, r.jsx)('div', {
                            className: p.background,
                            children: (0, r.jsx)(o.Z, {
                                active: !1,
                                onClick: () => {
                                    O(!0);
                                },
                                tabIndex: 0,
                                renderButtonContents:
                                    null != u
                                        ? () =>
                                              (0, r.jsx)(a.Z, {
                                                  emojiName: u,
                                                  animated: !1
                                              })
                                        : null
                            })
                        })
                }),
                (0, r.jsxs)('div', {
                    className: p.inputContainer,
                    children: [
                        (0, r.jsx)(
                            s.oil,
                            {
                                inputClassName: p.reason,
                                placeholder: j,
                                value: n,
                                minLength: x,
                                maxLength: b,
                                onChange: (e) => {
                                    g(e);
                                },
                                defaultDirty: (null == n ? void 0 : n.length) > 0
                            },
                            'text-input-'.concat(_, '-').concat(C)
                        ),
                        (null != (t = null == n ? void 0 : n.length) ? t : 0) > 0 || null != u
                            ? (0, r.jsx)(s.zxk, {
                                  className: p.clearStatusButton,
                                  onClick: f,
                                  look: s.zxk.Looks.BLANK,
                                  size: s.zxk.Sizes.NONE,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  children: (0, r.jsx)(s.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: p.clearStatusIcon
                                  })
                              })
                            : null
                    ]
                })
            ]
        });
    },
    f = (e) => {
        let { reasonMinLength: t, reasonMaxLength: n, guildId: i, reasons: l } = e,
            s = [g.intl.string(g.t['9dhBGh']), g.intl.string(g.t['8RmhKC']), g.intl.string(g.t['2t0V8/']), g.intl.string(g.t.l8WqCQ)],
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
                                (n[e] = r), (0, u.P$)(i, n);
                            },
                            onSelectEmoji: (t) => {
                                let n = [...l],
                                    r = Object.assign({}, l[e], { emoji_name: t.optionallyDiverseSequence });
                                (n[e] = r), (0, u.P$)(i, n);
                            },
                            onClearPressed: () => {
                                let t = [...l],
                                    n = {
                                        reason: '',
                                        emoji_name: null
                                    };
                                (t[e] = n), (0, u.P$)(i, t);
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
