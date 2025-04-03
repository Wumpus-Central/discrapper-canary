n.d(t, { Z: () => f }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(596454),
    o = n(318766),
    c = n(907040),
    d = n(456268),
    u = n(999382),
    m = n(185923),
    g = n(388032),
    p = n(727138);
let h = (e) => {
        var t;
        let { reason: n = '', emoji_name: d, onSetReason: g, onSelectEmoji: h, onClearPressed: f, reasonMinLength: b, reasonMaxLength: x, placeholder: j, position: N } = e,
            [_, v] = i.useState(!1),
            C = (0, s.e7)([u.Z], () => u.Z.isGuildMetadataLoaded());
        return (0, r.jsxs)('div', {
            className: p.reasonContainer,
            children: [
                (0, r.jsx)(a.yRy, {
                    onRequestClose: () => {
                        v(!1);
                    },
                    shouldShow: _,
                    position: 'right',
                    align: 'top',
                    animation: a.yRy.Animation.NONE,
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
                                    v(!0);
                                },
                                tabIndex: 0,
                                renderButtonContents:
                                    null != d
                                        ? () =>
                                              (0, r.jsx)(l.Z, {
                                                  emojiName: d,
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
                            a.oil,
                            {
                                inputClassName: p.reason,
                                placeholder: j,
                                value: n,
                                minLength: b,
                                maxLength: x,
                                onChange: (e) => {
                                    g(e);
                                },
                                defaultDirty: (null == n ? void 0 : n.length) > 0
                            },
                            'text-input-'.concat(N, '-').concat(C)
                        ),
                        (null != (t = null == n ? void 0 : n.length) ? t : 0) > 0 || null != d
                            ? (0, r.jsx)(a.zxk, {
                                  className: p.clearStatusButton,
                                  onClick: f,
                                  look: a.zxk.Looks.BLANK,
                                  size: a.zxk.Sizes.NONE,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  children: (0, r.jsx)(a.k$p, {
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
        let { reasonMinLength: t, reasonMaxLength: n, guildId: i, reasons: s } = e,
            a = [g.NW.string(g.t['9dhBGh']), g.NW.string(g.t['8RmhKC']), g.NW.string(g.t['2t0V8/']), g.NW.string(g.t.l8WqCQ)],
            l = [];
        for (let e = 0; e < 4; e++)
            l.push(
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
                                placeholder: a[e]
                            },
                            s[e]
                        ),
                        {
                            onSetReason: (t) => {
                                let n = [...s],
                                    r = Object.assign({}, s[e], { reason: t });
                                (n[e] = r), (0, d.P$)(i, n);
                            },
                            onSelectEmoji: (t) => {
                                let n = [...s],
                                    r = Object.assign({}, s[e], { emoji_name: t.optionallyDiverseSequence });
                                (n[e] = r), (0, d.P$)(i, n);
                            },
                            onClearPressed: () => {
                                let t = [...s],
                                    n = {
                                        reason: '',
                                        emoji_name: null
                                    };
                                (t[e] = n), (0, d.P$)(i, t);
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
