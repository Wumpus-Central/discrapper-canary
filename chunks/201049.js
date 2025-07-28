(t.d(n, { default: () => h }), t(388685));
var i = t(255367),
    l = t(73800),
    o = t(442837),
    a = t(82659),
    r = t(755721),
    u = t(481060),
    c = t(596454),
    s = t(493773),
    d = t(318766),
    m = t(907040),
    j = t(339085),
    p = t(984933),
    v = t(883429),
    g = t(981631),
    b = t(185923),
    y = t(388032),
    f = t(875485);
function h(e) {
    var n;
    let { transitionState: t, onClose: h, channelId: x, guildId: C, tag: O } = e,
        N = l.useRef(null),
        k = null != O,
        [P, _] = l.useState(null != (n = null == O ? void 0 : O.name) ? n : ''),
        [I, B] = l.useState(
            null != O
                ? {
                      id: O.emojiId,
                      name: O.emojiName
                  }
                : null
        ),
        [E, Z] = l.useState(null == O ? void 0 : O.moderated),
        w = (0, o.e7)([j.ZP], () => ((null == I ? void 0 : I.id) != null ? j.ZP.getUsableCustomEmojiById(I.id) : null)),
        S = (null == O ? void 0 : O.name) !== P || (null == O ? void 0 : O.emojiId) !== (null == I ? void 0 : I.id) || (null == O ? void 0 : O.emojiName) !== (null == I ? void 0 : I.name) || E !== (null == O ? void 0 : O.moderated),
        z = () => {
            if (null != P && S) {
                if (k) {
                    (v.Z.updateForumTag(
                        {
                            id: O.id,
                            name: P,
                            emojiId: null == I ? void 0 : I.id,
                            emojiName: null == I ? void 0 : I.name,
                            moderated: E
                        },
                        x
                    ),
                        h());
                    return;
                }
                (v.Z.createForumTag(
                    {
                        name: P,
                        emojiId: null == I ? void 0 : I.id,
                        emojiName: null == I ? void 0 : I.name,
                        moderated: E
                    },
                    x
                ),
                    h());
            }
        },
        T = (e) => {
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
        R = l.useCallback((e) => _(e), []),
        D = l.useRef(null);
    return (
        (0, s.ZP)(() => {
            null != D.current && D.current.focus();
        }),
        (0, i.jsxs)(a.Modal, {
            title: k ? y.intl.string(y.t.zeVg5e) : y.intl.string(y.t['/jubeH']),
            subtitle: y.intl.string(y.t['3v8kZG']),
            transitionState: t,
            onClose: h,
            actions: [
                {
                    variant: 'secondary',
                    text: y.intl.string(y.t['ETE/oK']),
                    onClick: () => {
                        h();
                    }
                },
                {
                    variant: 'primary',
                    text: y.intl.string(y.t.R3BPHx),
                    onClick: z,
                    disabled: 0 === P.length || !S,
                    autoFocus: !0
                }
            ],
            actionBarInput: k
                ? (0, i.jsx)(u.zxk, {
                      variant: 'critical-secondary',
                      text: y.intl.string(y.t.huYSMj),
                      onClick: () => {
                          k && (v.Z.deleteForumTag(x, O.id), h());
                      }
                  })
                : void 0,
            children: [
                (0, i.jsxs)('div', {
                    className: f.inputContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.emojiButtonContainer,
                            children: (0, i.jsx)(u.yRy, {
                                targetElementRef: N,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e,
                                        t = p.ZP.getDefaultChannel(C);
                                    return (0, i.jsx)(m.Z, {
                                        guildId: C,
                                        closePopout: n,
                                        onSelectEmoji: (e) => {
                                            let { emoji: t, willClose: i } = e;
                                            (T(t), i && n());
                                        },
                                        pickerIntention: b.Hz.COMMUNITY_CONTENT,
                                        onNavigateAway: h,
                                        channel: t
                                    });
                                },
                                position: 'left',
                                animation: u.yRy.Animation.NONE,
                                align: 'bottom',
                                children: (e, n) => {
                                    var t, l;
                                    let { isShown: o } = n;
                                    return (0, i.jsx)(
                                        d.Z,
                                        ((t = (function (e) {
                                            for (var n = 1; n < arguments.length; n++) {
                                                var t = null != arguments[n] ? arguments[n] : {},
                                                    i = Object.keys(t);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (n) {
                                                        var i;
                                                        ((i = t[n]),
                                                            n in e
                                                                ? Object.defineProperty(e, n, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[n] = i));
                                                    }));
                                            }
                                            return e;
                                        })({}, e)),
                                        (l = l =
                                            {
                                                ref: N,
                                                onClick: (n) => {
                                                    var t;
                                                    null == (t = e.onClick) || t.call(e, n);
                                                },
                                                active: o,
                                                className: f.emojiButton,
                                                tabIndex: 0,
                                                renderButtonContents:
                                                    null != I && (null != I.id || null != I.name)
                                                        ? () =>
                                                              (0, i.jsx)(c.Z, {
                                                                  className: f.emoji,
                                                                  emojiId: I.id,
                                                                  emojiName: I.name,
                                                                  animated: !!(null == w ? void 0 : w.animated)
                                                              })
                                                        : null
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                            : (function (e, n) {
                                                  var t = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      t.push.apply(t, i);
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
                        (0, i.jsx)(r.Is, {
                            inputRef: D,
                            maxLength: 20,
                            value: P,
                            inputClassName: f.input,
                            placeholder: y.intl.string(y.t['5vpeb2']),
                            onChange: R,
                            autoFocus: !0,
                            onKeyDown: (e) => {
                                e.keyCode === g.yXg.ENTER && P.length > 0 && (P.length > 0 && z(), e.preventDefault());
                            }
                        }),
                        P.length > 0 || null != I
                            ? (0, i.jsx)(r.zx, {
                                  'data-migration-pending': !0,
                                  'aria-label': y.intl.string(y.t.o8lsHR),
                                  className: f.clearButton,
                                  onClick: () => {
                                      (_(''), B(null));
                                  },
                                  look: r.zx.Looks.BLANK,
                                  size: r.zx.Sizes.NONE,
                                  children: (0, i.jsx)(u.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: f.clearIcon
                                  })
                              })
                            : null
                    ]
                }),
                (0, i.jsx)(u.LZC, { size: 16 }),
                (0, i.jsx)(u.XZJ, {
                    type: u.XZJ.Types.INVERTED,
                    size: 18,
                    value: null != E && E,
                    onChange: (e, n) => Z(n || ((null == O ? void 0 : O.moderated) == null && void 0)),
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        children: y.intl.string(y.t['rMH+rq'])
                    })
                })
            ]
        })
    );
}
