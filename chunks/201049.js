t.d(n, { default: () => g }), t(47120);
var o = t(200651),
    l = t(192379),
    i = t(442837),
    r = t(481060),
    a = t(596454),
    c = t(493773),
    s = t(313201),
    u = t(318766),
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
    let { transitionState: t, onClose: g, channelId: N, guildId: k, tag: f } = e,
        y = (0, s.Dt)(),
        C = null != f,
        [O, _] = l.useState(null != (n = null == f ? void 0 : f.name) ? n : ''),
        [P, z] = l.useState(
            null != f
                ? {
                      id: f.emojiId,
                      name: f.emojiName
                  }
                : null
        ),
        [I, w] = l.useState(null == f ? void 0 : f.moderated),
        B = (0, i.e7)([m.ZP], () => ((null == P ? void 0 : P.id) != null ? m.ZP.getUsableCustomEmojiById(P.id) : null)),
        E = (null == f ? void 0 : f.name) !== O || (null == f ? void 0 : f.emojiId) !== (null == P ? void 0 : P.id) || (null == f ? void 0 : f.emojiName) !== (null == P ? void 0 : P.name) || I !== (null == f ? void 0 : f.moderated),
        Z = () => {
            if (null != O && E) {
                if (C) {
                    p.Z.updateForumTag(
                        {
                            id: f.id,
                            name: O,
                            emojiId: null == P ? void 0 : P.id,
                            emojiName: null == P ? void 0 : P.name,
                            moderated: I
                        },
                        N
                    ),
                        g();
                    return;
                }
                p.Z.createForumTag(
                    {
                        name: O,
                        emojiId: null == P ? void 0 : P.id,
                        emojiName: null == P ? void 0 : P.name,
                        moderated: I
                    },
                    N
                ),
                    g();
            }
        },
        S = (e) => {
            null != e &&
                z(
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
        T = l.useCallback((e) => _(e), []),
        D = l.createRef();
    return (
        (0, c.ZP)(() => {
            null != D.current && D.current.focus();
        }),
        (0, o.jsxs)(r.Y0X, {
            transitionState: t,
            'aria-labelledby': y,
            children: [
                (0, o.jsx)(r.xBx, {
                    separator: !1,
                    children: (0, o.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        children: C ? b.NW.string(b.t.zeVg5e) : b.NW.string(b.t['/jubeH'])
                    })
                }),
                (0, o.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, o.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: b.NW.string(b.t['3v8kZG'])
                        }),
                        (0, o.jsxs)('div', {
                            className: h.inputContainer,
                            children: [
                                (0, o.jsx)('div', {
                                    className: h.emojiButtonContainer,
                                    children: (0, o.jsx)(r.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: n } = e,
                                                t = j.ZP.getDefaultChannel(k);
                                            return (0, o.jsx)(d.Z, {
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
                                            var t, l;
                                            let { isShown: i } = n;
                                            return (0, o.jsx)(
                                                u.Z,
                                                ((t = (function (e) {
                                                    for (var n = 1; n < arguments.length; n++) {
                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                            o = Object.keys(t);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (o = o.concat(
                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                })
                                                            )),
                                                            o.forEach(function (n) {
                                                                var o;
                                                                (o = t[n]),
                                                                    n in e
                                                                        ? Object.defineProperty(e, n, {
                                                                              value: o,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[n] = o);
                                                            });
                                                    }
                                                    return e;
                                                })({}, e)),
                                                (l = l =
                                                    {
                                                        onClick: (n) => {
                                                            var t;
                                                            null == (t = e.onClick) || t.call(e, n);
                                                        },
                                                        active: i,
                                                        className: h.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents:
                                                            null != P && (null != P.id || null != P.name)
                                                                ? () =>
                                                                      (0, o.jsx)(a.Z, {
                                                                          className: h.emoji,
                                                                          emojiId: P.id,
                                                                          emojiName: P.name,
                                                                          animated: !!(null == B ? void 0 : B.animated)
                                                                      })
                                                                : null
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                                    : (function (e, n) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var o = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, o);
                                                          }
                                                          return t;
                                                      })(Object(l)).forEach(function (e) {
                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                                      }),
                                                t)
                                            );
                                        }
                                    })
                                }),
                                (0, o.jsx)(r.oil, {
                                    inputRef: D,
                                    maxLength: 20,
                                    value: O,
                                    inputClassName: h.input,
                                    placeholder: b.NW.string(b.t['5vpeb2']),
                                    onChange: T,
                                    autoFocus: !0,
                                    onKeyDown: (e) => {
                                        e.keyCode === x.yXg.ENTER && O.length > 0 && (O.length > 0 && Z(), e.preventDefault());
                                    }
                                }),
                                O.length > 0 || null != P
                                    ? (0, o.jsx)(r.zxk, {
                                          'aria-label': b.NW.string(b.t.o8lsHR),
                                          className: h.clearButton,
                                          onClick: () => {
                                              _(''), z(null);
                                          },
                                          look: r.zxk.Looks.BLANK,
                                          size: r.zxk.Sizes.NONE,
                                          children: (0, o.jsx)(r.k$p, {
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
                (0, o.jsx)(r.XZJ, {
                    type: r.XZJ.Types.INVERTED,
                    size: 18,
                    value: null != I && I,
                    onChange: (e, n) => w(n || ((null == f ? void 0 : f.moderated) == null && void 0)),
                    className: h.moderatedCheckbox,
                    children: (0, o.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: b.NW.string(b.t['rMH+rq'])
                    })
                }),
                (0, o.jsxs)(r.mzw, {
                    className: h.footer,
                    children: [
                        (0, o.jsxs)('div', {
                            className: h.buttons,
                            children: [
                                (0, o.jsx)(r.zxk, {
                                    color: r.zxk.Colors.PRIMARY,
                                    onClick: () => {
                                        g();
                                    },
                                    children: b.NW.string(b.t['ETE/oK'])
                                }),
                                (0, o.jsx)(r.zxk, {
                                    onClick: Z,
                                    disabled: 0 === O.length || !E,
                                    autoFocus: !0,
                                    children: b.NW.string(b.t.R3BPHx)
                                })
                            ]
                        }),
                        C &&
                            (0, o.jsx)(r.zxk, {
                                color: r.zxk.Colors.RED,
                                look: r.zxk.Looks.LINK,
                                onClick: () => {
                                    C && (p.Z.deleteForumTag(N, f.id), g());
                                },
                                children: b.NW.string(b.t.huYSMj)
                            })
                    ]
                })
            ]
        })
    );
}
