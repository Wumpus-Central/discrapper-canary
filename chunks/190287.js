n.d(t, { Z: () => x }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(318766),
    u = n(907040),
    m = n(456268),
    p = n(999382),
    g = n(185923),
    h = n(388032),
    f = n(561549);
let b = (e) => {
        var t;
        let { reason: n = '', emoji_name: s, onSetReason: m, onSelectEmoji: h, onClearPressed: b, reasonMinLength: x, reasonMaxLength: j, placeholder: N, position: v } = e,
            [_, O] = i.useState(!1),
            y = (0, l.e7)([p.Z], () => p.Z.isGuildMetadataLoaded());
        return (0, r.jsxs)('div', {
            className: a()(f.reasonContainer),
            children: [
                (0, r.jsx)(o.yRy, {
                    onRequestClose: () => {
                        O(!1);
                    },
                    shouldShow: _,
                    position: 'right',
                    align: 'top',
                    animation: o.yRy.Animation.NONE,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(u.Z, {
                            pickerIntention: g.Hz.COMMUNITY_CONTENT,
                            closePopout: t,
                            onSelectEmoji: (e, n) => {
                                null != e && h(e), n && t();
                            }
                        });
                    },
                    children: () =>
                        (0, r.jsx)('div', {
                            className: f.background,
                            children: (0, r.jsx)(d.Z, {
                                active: !1,
                                onClick: () => {
                                    O(!0);
                                },
                                tabIndex: 0,
                                renderButtonContents:
                                    null != s
                                        ? () =>
                                              (0, r.jsx)(c.Z, {
                                                  emojiName: s,
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
                            o.oil,
                            {
                                inputClassName: f.reason,
                                placeholder: N,
                                value: n,
                                minLength: x,
                                maxLength: j,
                                onChange: (e) => {
                                    m(e);
                                },
                                defaultDirty: (null == n ? void 0 : n.length) > 0
                            },
                            'text-input-'.concat(v, '-').concat(y)
                        ),
                        (null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0 || null != s
                            ? (0, r.jsx)(o.zxk, {
                                  className: f.clearStatusButton,
                                  onClick: b,
                                  look: o.zxk.Looks.BLANK,
                                  size: o.zxk.Sizes.NONE,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  children: (0, r.jsx)(o.k$p, {
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
        let { reasonMinLength: t, reasonMaxLength: n, guildId: i, reasons: s } = e,
            a = [h.NW.string(h.t['9dhBGh']), h.NW.string(h.t['8RmhKC']), h.NW.string(h.t['2t0V8/']), h.NW.string(h.t.l8WqCQ)],
            l = [];
        for (let e = 0; e < 4; e++)
            l.push(
                (0, r.jsx)(
                    b,
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
                                placeholder: a[e]
                            },
                            s[e]
                        ),
                        {
                            onSetReason: (t) => {
                                let n = [...s],
                                    r = Object.assign({}, s[e], { reason: t });
                                (n[e] = r), (0, m.P$)(i, n);
                            },
                            onSelectEmoji: (t) => {
                                let n = [...s],
                                    r = Object.assign({}, s[e], { emoji_name: t.optionallyDiverseSequence });
                                (n[e] = r), (0, m.P$)(i, n);
                            },
                            onClearPressed: () => {
                                let t = [...s],
                                    n = {
                                        reason: '',
                                        emoji_name: null
                                    };
                                (t[e] = n), (0, m.P$)(i, t);
                            },
                            reasonMinLength: t,
                            reasonMaxLength: n
                        }
                    ),
                    'reasonListItem-' + e
                )
            );
        return (0, r.jsx)('div', { children: l });
    };
