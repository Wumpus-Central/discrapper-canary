(i.d(t, { default: () => j }), i(388685));
var n = i(255367),
    o = i(73800),
    a = i(755721),
    l = i(481060),
    r = i(787014),
    s = i(907040),
    d = i(946458),
    c = i(185923),
    m = i(388032),
    u = i(815461);
let j = (e) => {
    var t, i, j;
    let { channel: b, onClose: x, transitionState: h } = e,
        [p, v] = o.useState(null != (j = b.defaultReactionEmoji) ? j : null),
        [f, g] = o.useState(!1),
        [y, N] = o.useState(!1),
        w = o.useRef(null),
        O = (null == (t = b.defaultReactionEmoji) ? void 0 : t.emojiId) !== (null == p ? void 0 : p.emojiId) || (null == (i = b.defaultReactionEmoji) ? void 0 : i.emojiName) !== (null == p ? void 0 : p.emojiName),
        _ = (e) => {
            v(
                null == e
                    ? null
                    : (null == e ? void 0 : e.id) != null
                      ? {
                            emojiId: e.id,
                            emojiName: void 0
                        }
                      : {
                            emojiId: void 0,
                            emojiName: e.optionallyDiverseSequence
                        }
            );
        },
        E = async () => {
            if (O) {
                (g(!0), N(!1));
                try {
                    (await (0, r.wk)(b.id, { defaultReactionEmoji: p }), x());
                } catch (e) {
                    N(!0);
                } finally {
                    g(!1);
                }
            }
        };
    return (0, n.jsxs)(l.Y0X, {
        transitionState: h,
        'aria-label': m.intl.string(m.t.XlDE3t),
        parentComponent: 'ChooseDefaultReactionModal',
        children: [
            (0, n.jsx)(l.xBx, {
                separator: !1,
                className: u.modalHeader,
                children: (0, n.jsx)(l.X6q, {
                    variant: 'heading-md/semibold',
                    children: m.intl.string(m.t.XlDE3t)
                })
            }),
            (0, n.jsxs)(l.hzk, {
                children: [
                    (0, n.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        className: u.subtitle,
                        children: m.intl.string(m.t.lVqhdX)
                    }),
                    (0, n.jsx)(d.Z, { reactionEmoji: p }),
                    (0, n.jsxs)('div', {
                        className: u.buttonRow,
                        children: [
                            (0, n.jsx)(l.yRy, {
                                targetElementRef: w,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, n.jsx)(s.Z, {
                                        guildId: null == b ? void 0 : b.guild_id,
                                        closePopout: t,
                                        onSelectEmoji: (e) => {
                                            let { emoji: i, willClose: n } = e;
                                            (_(i), n && t());
                                        },
                                        pickerIntention: c.Hz.COMMUNITY_CONTENT,
                                        channel: b
                                    });
                                },
                                position: 'right',
                                animation: l.yRy.Animation.NONE,
                                align: 'center',
                                children: (e) => {
                                    var t, i;
                                    return (0, n.jsx)(
                                        a.zx,
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var i = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(i);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                                        })
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        ((n = i[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = n));
                                                    }));
                                            }
                                            return e;
                                        })({}, e)),
                                        (i = i =
                                            {
                                                buttonRef: w,
                                                size: a.zx.Sizes.SMALL,
                                                onClick: (t) => {
                                                    var i;
                                                    null == (i = e.onClick) || i.call(e, t);
                                                },
                                                children: m.intl.string(m.t['59QgaG'])
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var i = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      i.push.apply(i, n);
                                                  }
                                                  return i;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        t)
                                    );
                                }
                            }),
                            null != b.defaultReactionEmoji
                                ? (0, n.jsx)(a.zx, {
                                      className: u.removeButton,
                                      onClick: () => _(null),
                                      size: a.zx.Sizes.MIN,
                                      look: a.zx.Looks.LINK,
                                      color: a.zx.Colors.RED,
                                      children: m.intl.string(m.t.N86XcH)
                                  })
                                : null
                        ]
                    }),
                    y
                        ? (0, n.jsx)('div', {
                              className: u.__invalid_row,
                              children: (0, n.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-danger',
                                  children: m.intl.string(m.t.F75nNj)
                              })
                          })
                        : null
                ]
            }),
            (0, n.jsxs)(l.mzw, {
                className: u.__invalid_footer,
                children: [
                    (0, n.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: u.button,
                        children: (0, n.jsx)(l.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: m.intl.string(m.t.R3BPHx),
                            type: 'submit',
                            onClick: E,
                            disabled: !O,
                            loading: f,
                            autoFocus: !0
                        })
                    }),
                    (0, n.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: u.button,
                        children: (0, n.jsx)(l.zxk, {
                            variant: 'secondary',
                            size: 'sm',
                            text: m.intl.string(m.t['ETE/oK']),
                            onClick: x
                        })
                    })
                ]
            })
        ]
    });
};
