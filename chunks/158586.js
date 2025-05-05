i.d(t, { default: () => u }), i(388685);
var o = i(255367),
    n = i(73800),
    l = i(481060),
    r = i(787014),
    a = i(907040),
    s = i(946458),
    c = i(185923),
    d = i(388032),
    m = i(815461);
let u = (e) => {
    var t, i, u;
    let { channel: j, onClose: x, transitionState: b } = e,
        [h, p] = n.useState(null != (u = j.defaultReactionEmoji) ? u : null),
        [v, f] = n.useState(!1),
        [N, g] = n.useState(!1),
        y = (null == (t = j.defaultReactionEmoji) ? void 0 : t.emojiId) !== (null == h ? void 0 : h.emojiId) || (null == (i = j.defaultReactionEmoji) ? void 0 : i.emojiName) !== (null == h ? void 0 : h.emojiName),
        k = (e) => {
            p(
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
        O = async () => {
            if (y) {
                f(!0), g(!1);
                try {
                    await (0, r.wk)(j.id, { defaultReactionEmoji: h }), x();
                } catch (e) {
                    g(!0);
                } finally {
                    f(!1);
                }
            }
        };
    return (0, o.jsxs)(l.Y0X, {
        transitionState: b,
        'aria-label': d.intl.string(d.t.XlDE3t),
        children: [
            (0, o.jsx)(l.xBx, {
                separator: !1,
                className: m.modalHeader,
                children: (0, o.jsx)(l.X6q, {
                    variant: 'heading-md/semibold',
                    children: d.intl.string(d.t.XlDE3t)
                })
            }),
            (0, o.jsxs)(l.hzk, {
                children: [
                    (0, o.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        className: m.subtitle,
                        children: d.intl.string(d.t.lVqhdX)
                    }),
                    (0, o.jsx)(s.Z, { reactionEmoji: h }),
                    (0, o.jsxs)('div', {
                        className: m.buttonRow,
                        children: [
                            (0, o.jsx)(l.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, o.jsx)(a.Z, {
                                        guildId: null == j ? void 0 : j.guild_id,
                                        closePopout: t,
                                        onSelectEmoji: (e, i) => {
                                            k(e), i && t();
                                        },
                                        pickerIntention: c.Hz.COMMUNITY_CONTENT,
                                        channel: j
                                    });
                                },
                                position: 'right',
                                animation: l.yRy.Animation.NONE,
                                align: 'center',
                                children: (e) => {
                                    var t, i;
                                    return (0, o.jsx)(
                                        l.zxk,
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var i = null != arguments[t] ? arguments[t] : {},
                                                    o = Object.keys(i);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (o = o.concat(
                                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                                        })
                                                    )),
                                                    o.forEach(function (t) {
                                                        var o;
                                                        (o = i[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: o,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = o);
                                                    });
                                            }
                                            return e;
                                        })({}, e)),
                                        (i = i =
                                            {
                                                size: l.zxk.Sizes.SMALL,
                                                onClick: (t) => {
                                                    var i;
                                                    null == (i = e.onClick) || i.call(e, t);
                                                },
                                                children: d.intl.string(d.t['59QgaG'])
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var i = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var o = Object.getOwnPropertySymbols(e);
                                                      i.push.apply(i, o);
                                                  }
                                                  return i;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        t)
                                    );
                                }
                            }),
                            null != j.defaultReactionEmoji
                                ? (0, o.jsx)(l.zxk, {
                                      className: m.removeButton,
                                      onClick: () => k(null),
                                      size: l.zxk.Sizes.MIN,
                                      look: l.zxk.Looks.LINK,
                                      color: l.zxk.Colors.RED,
                                      children: d.intl.string(d.t.N86XcH)
                                  })
                                : null
                        ]
                    }),
                    N
                        ? (0, o.jsx)('div', {
                              className: m.__invalid_row,
                              children: (0, o.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-danger',
                                  children: d.intl.string(d.t.F75nNj)
                              })
                          })
                        : null
                ]
            }),
            (0, o.jsxs)(l.mzw, {
                className: m.__invalid_footer,
                children: [
                    (0, o.jsx)(l.zxk, {
                        type: 'submit',
                        color: l.zxk.Colors.BRAND,
                        size: l.zxk.Sizes.SMALL,
                        className: m.button,
                        onClick: O,
                        disabled: !y,
                        submitting: v,
                        autoFocus: !0,
                        children: d.intl.string(d.t.R3BPHx)
                    }),
                    (0, o.jsx)(l.zxk, {
                        color: l.zxk.Colors.PRIMARY,
                        size: l.zxk.Sizes.SMALL,
                        className: m.button,
                        onClick: x,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
