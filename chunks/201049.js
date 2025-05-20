t.d(n, { default: () => g }), t(388685);
var l = t(255367),
    o = t(73800),
    i = t(442837),
    r = t(481060),
    a = t(596454),
    c = t(493773),
    u = t(313201),
    s = t(318766),
    d = t(907040),
    m = t(339085),
    j = t(984933),
    p = t(883429),
    x = t(981631),
    v = t(185923),
    b = t(388032),
    h = t(875485);
function g(e) {
    var n;
    let { transitionState: t, onClose: g, channelId: f, guildId: k, tag: y } = e,
        C = o.useRef(null),
        N = (0, u.Dt)(),
        O = null != y,
        [_, P] = o.useState(null != (n = null == y ? void 0 : y.name) ? n : ''),
        [z, I] = o.useState(
            null != y
                ? {
                      id: y.emojiId,
                      name: y.emojiName
                  }
                : null
        ),
        [E, w] = o.useState(null == y ? void 0 : y.moderated),
        B = (0, i.e7)([m.ZP], () => ((null == z ? void 0 : z.id) != null ? m.ZP.getUsableCustomEmojiById(z.id) : null)),
        R = (null == y ? void 0 : y.name) !== _ || (null == y ? void 0 : y.emojiId) !== (null == z ? void 0 : z.id) || (null == y ? void 0 : y.emojiName) !== (null == z ? void 0 : z.name) || E !== (null == y ? void 0 : y.moderated),
        Z = () => {
            if (null != _ && R) {
                if (O) {
                    p.Z.updateForumTag(
                        {
                            id: y.id,
                            name: _,
                            emojiId: null == z ? void 0 : z.id,
                            emojiName: null == z ? void 0 : z.name,
                            moderated: E
                        },
                        f
                    ),
                        g();
                    return;
                }
                p.Z.createForumTag(
                    {
                        name: _,
                        emojiId: null == z ? void 0 : z.id,
                        emojiName: null == z ? void 0 : z.name,
                        moderated: E
                    },
                    f
                ),
                    g();
            }
        },
        S = (e) => {
            null != e &&
                I(
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
        T = o.useCallback((e) => P(e), []),
        D = o.useRef(null);
    return (
        (0, c.ZP)(() => {
            null != D.current && D.current.focus();
        }),
        (0, l.jsxs)(r.Y0X, {
            transitionState: t,
            'aria-labelledby': N,
            children: [
                (0, l.jsx)(r.xBx, {
                    separator: !1,
                    children: (0, l.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        children: O ? b.intl.string(b.t.zeVg5e) : b.intl.string(b.t['/jubeH'])
                    })
                }),
                (0, l.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: b.intl.string(b.t['3v8kZG'])
                        }),
                        (0, l.jsxs)('div', {
                            className: h.inputContainer,
                            children: [
                                (0, l.jsx)('div', {
                                    className: h.emojiButtonContainer,
                                    children: (0, l.jsx)(r.yRy, {
                                        targetElementRef: C,
                                        renderPopout: (e) => {
                                            let { closePopout: n } = e,
                                                t = j.ZP.getDefaultChannel(k);
                                            return (0, l.jsx)(d.Z, {
                                                guildId: k,
                                                closePopout: n,
                                                onSelectEmoji: (e, t) => {
                                                    S(e), t && n();
                                                },
                                                pickerIntention: v.Hz.COMMUNITY_CONTENT,
                                                onNavigateAway: g,
                                                channel: t
                                            });
                                        },
                                        position: 'left',
                                        animation: r.yRy.Animation.NONE,
                                        align: 'bottom',
                                        children: (e, n) => {
                                            var t, o;
                                            let { isShown: i } = n;
                                            return (0, l.jsx)(
                                                s.Z,
                                                ((t = (function (e) {
                                                    for (var n = 1; n < arguments.length; n++) {
                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                            l = Object.keys(t);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (l = l.concat(
                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                })
                                                            )),
                                                            l.forEach(function (n) {
                                                                var l;
                                                                (l = t[n]),
                                                                    n in e
                                                                        ? Object.defineProperty(e, n, {
                                                                              value: l,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[n] = l);
                                                            });
                                                    }
                                                    return e;
                                                })({}, e)),
                                                (o = o =
                                                    {
                                                        ref: C,
                                                        onClick: (n) => {
                                                            var t;
                                                            null == (t = e.onClick) || t.call(e, n);
                                                        },
                                                        active: i,
                                                        className: h.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents:
                                                            null != z && (null != z.id || null != z.name)
                                                                ? () =>
                                                                      (0, l.jsx)(a.Z, {
                                                                          className: h.emoji,
                                                                          emojiId: z.id,
                                                                          emojiName: z.name,
                                                                          animated: !!(null == B ? void 0 : B.animated)
                                                                      })
                                                                : null
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                                                    : (function (e, n) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var l = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, l);
                                                          }
                                                          return t;
                                                      })(Object(o)).forEach(function (e) {
                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                                                      }),
                                                t)
                                            );
                                        }
                                    })
                                }),
                                (0, l.jsx)(r.oil, {
                                    inputRef: D,
                                    maxLength: 20,
                                    value: _,
                                    inputClassName: h.input,
                                    placeholder: b.intl.string(b.t['5vpeb2']),
                                    onChange: T,
                                    autoFocus: !0,
                                    onKeyDown: (e) => {
                                        e.keyCode === x.yXg.ENTER && _.length > 0 && (_.length > 0 && Z(), e.preventDefault());
                                    }
                                }),
                                _.length > 0 || null != z
                                    ? (0, l.jsx)(r.zxk, {
                                          'aria-label': b.intl.string(b.t.o8lsHR),
                                          className: h.clearButton,
                                          onClick: () => {
                                              P(''), I(null);
                                          },
                                          look: r.zxk.Looks.BLANK,
                                          size: r.zxk.Sizes.NONE,
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
                    onChange: (e, n) => w(n || ((null == y ? void 0 : y.moderated) == null && void 0)),
                    className: h.moderatedCheckbox,
                    children: (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: b.intl.string(b.t['rMH+rq'])
                    })
                }),
                (0, l.jsxs)(r.mzw, {
                    className: h.footer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: h.buttons,
                            children: [
                                (0, l.jsx)(r.zxk, {
                                    color: r.zxk.Colors.PRIMARY,
                                    onClick: () => {
                                        g();
                                    },
                                    children: b.intl.string(b.t['ETE/oK'])
                                }),
                                (0, l.jsx)(r.zxk, {
                                    onClick: Z,
                                    disabled: 0 === _.length || !R,
                                    autoFocus: !0,
                                    children: b.intl.string(b.t.R3BPHx)
                                })
                            ]
                        }),
                        O &&
                            (0, l.jsx)(r.zxk, {
                                color: r.zxk.Colors.RED,
                                look: r.zxk.Looks.LINK,
                                onClick: () => {
                                    O && (p.Z.deleteForumTag(f, y.id), g());
                                },
                                children: b.intl.string(b.t.huYSMj)
                            })
                    ]
                })
            ]
        })
    );
}
