(t.d(n, { default: () => f }), t(388685));
var l = t(255367),
    i = t(73800),
    o = t(442837),
    a = t(755721),
    r = t(481060),
    u = t(596454),
    c = t(493773),
    s = t(313201),
    d = t(318766),
    m = t(907040),
    j = t(339085),
    p = t(984933),
    v = t(883429),
    x = t(981631),
    b = t(185923),
    g = t(388032),
    h = t(875485);
function f(e) {
    var n;
    let { transitionState: t, onClose: f, channelId: y, guildId: C, tag: N } = e,
        O = i.useRef(null),
        k = (0, s.Dt)(),
        _ = null != N,
        [P, I] = i.useState(null != (n = null == N ? void 0 : N.name) ? n : ''),
        [w, B] = i.useState(
            null != N
                ? {
                      id: N.emojiId,
                      name: N.emojiName
                  }
                : null
        ),
        [E, z] = i.useState(null == N ? void 0 : N.moderated),
        T = (0, o.e7)([j.ZP], () => ((null == w ? void 0 : w.id) != null ? j.ZP.getUsableCustomEmojiById(w.id) : null)),
        Z = (null == N ? void 0 : N.name) !== P || (null == N ? void 0 : N.emojiId) !== (null == w ? void 0 : w.id) || (null == N ? void 0 : N.emojiName) !== (null == w ? void 0 : w.name) || E !== (null == N ? void 0 : N.moderated),
        S = () => {
            if (null != P && Z) {
                if (_) {
                    (v.Z.updateForumTag(
                        {
                            id: N.id,
                            name: P,
                            emojiId: null == w ? void 0 : w.id,
                            emojiName: null == w ? void 0 : w.name,
                            moderated: E
                        },
                        y
                    ),
                        f());
                    return;
                }
                (v.Z.createForumTag(
                    {
                        name: P,
                        emojiId: null == w ? void 0 : w.id,
                        emojiName: null == w ? void 0 : w.name,
                        moderated: E
                    },
                    y
                ),
                    f());
            }
        },
        D = (e) => {
            null != e &&
                B(
                    null != e.id
                        ? {
                              id: e.id,
                              name: e.name
                          }
                        : {
                              id: void 0,
                              name: e.optionallyDiverseSequence
                          }
                );
        },
        R = i.useCallback((e) => I(e), []),
        F = i.useRef(null);
    return (
        (0, c.ZP)(() => {
            null != F.current && F.current.focus();
        }),
        (0, l.jsxs)(r.Y0X, {
            transitionState: t,
            'aria-labelledby': k,
            parentComponent: 'CreateTagModal',
            children: [
                (0, l.jsx)(r.xBx, {
                    separator: !1,
                    children: (0, l.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        children: _ ? g.intl.string(g.t.zeVg5e) : g.intl.string(g.t['/jubeH'])
                    })
                }),
                (0, l.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: g.intl.string(g.t['3v8kZG'])
                        }),
                        (0, l.jsxs)('div', {
                            className: h.inputContainer,
                            children: [
                                (0, l.jsx)('div', {
                                    className: h.emojiButtonContainer,
                                    children: (0, l.jsx)(r.yRy, {
                                        targetElementRef: O,
                                        renderPopout: (e) => {
                                            let { closePopout: n } = e,
                                                t = p.ZP.getDefaultChannel(C);
                                            return (0, l.jsx)(m.Z, {
                                                guildId: C,
                                                closePopout: n,
                                                onSelectEmoji: (e) => {
                                                    let { emoji: t, willClose: l } = e;
                                                    (D(t), l && n());
                                                },
                                                pickerIntention: b.Hz.COMMUNITY_CONTENT,
                                                onNavigateAway: f,
                                                channel: t
                                            });
                                        },
                                        position: 'left',
                                        animation: r.yRy.Animation.NONE,
                                        align: 'bottom',
                                        children: (e, n) => {
                                            var t, i;
                                            let { isShown: o } = n;
                                            return (0, l.jsx)(
                                                d.Z,
                                                ((t = (function (e) {
                                                    for (var n = 1; n < arguments.length; n++) {
                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                            l = Object.keys(t);
                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                            (l = l.concat(
                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                })
                                                            )),
                                                            l.forEach(function (n) {
                                                                var l;
                                                                ((l = t[n]),
                                                                    n in e
                                                                        ? Object.defineProperty(e, n, {
                                                                              value: l,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[n] = l));
                                                            }));
                                                    }
                                                    return e;
                                                })({}, e)),
                                                (i = i =
                                                    {
                                                        ref: O,
                                                        onClick: (n) => {
                                                            var t;
                                                            null == (t = e.onClick) || t.call(e, n);
                                                        },
                                                        active: o,
                                                        className: h.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents:
                                                            null != w && (null != w.id || null != w.name)
                                                                ? () =>
                                                                      (0, l.jsx)(u.Z, {
                                                                          className: h.emoji,
                                                                          emojiId: w.id,
                                                                          emojiName: w.name,
                                                                          animated: !!(null == T ? void 0 : T.animated)
                                                                      })
                                                                : null
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                                    : (function (e, n) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var l = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, l);
                                                          }
                                                          return t;
                                                      })(Object(i)).forEach(function (e) {
                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                                      }),
                                                t)
                                            );
                                        }
                                    })
                                }),
                                (0, l.jsx)(a.Is, {
                                    inputRef: F,
                                    maxLength: 20,
                                    value: P,
                                    inputClassName: h.input,
                                    placeholder: g.intl.string(g.t['5vpeb2']),
                                    onChange: R,
                                    autoFocus: !0,
                                    onKeyDown: (e) => {
                                        e.keyCode === x.yXg.ENTER && P.length > 0 && (P.length > 0 && S(), e.preventDefault());
                                    }
                                }),
                                P.length > 0 || null != w
                                    ? (0, l.jsx)(a.zx, {
                                          'aria-label': g.intl.string(g.t.o8lsHR),
                                          className: h.clearButton,
                                          onClick: () => {
                                              (I(''), B(null));
                                          },
                                          look: a.zx.Looks.BLANK,
                                          size: a.zx.Sizes.NONE,
                                          children: (0, l.jsx)(r.k$p, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: h.clearIcon
                                          })
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, l.jsx)(r.XZJ, {
                    type: r.XZJ.Types.INVERTED,
                    size: 18,
                    value: null != E && E,
                    onChange: (e, n) => z(n || ((null == N ? void 0 : N.moderated) == null && void 0)),
                    className: h.moderatedCheckbox,
                    children: (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: g.intl.string(g.t['rMH+rq'])
                    })
                }),
                (0, l.jsxs)(r.mzw, {
                    className: h.footer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: h.buttons,
                            children: [
                                (0, l.jsx)(r.zxk, {
                                    variant: 'secondary',
                                    text: g.intl.string(g.t['ETE/oK']),
                                    onClick: () => {
                                        f();
                                    }
                                }),
                                (0, l.jsx)(r.zxk, {
                                    variant: 'primary',
                                    text: g.intl.string(g.t.R3BPHx),
                                    onClick: S,
                                    disabled: 0 === P.length || !Z,
                                    autoFocus: !0
                                })
                            ]
                        }),
                        _ &&
                            (0, l.jsx)(r.zxk, {
                                variant: 'critical-secondary',
                                text: g.intl.string(g.t.huYSMj),
                                onClick: () => {
                                    _ && (v.Z.deleteForumTag(y, N.id), f());
                                }
                            })
                    ]
                })
            ]
        })
    );
}
