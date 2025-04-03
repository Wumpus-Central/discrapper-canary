o.d(t, { default: () => u }), o(47120);
var i = o(200651),
    n = o(192379),
    l = o(481060),
    r = o(787014),
    a = o(907040),
    s = o(946458),
    c = o(185923),
    d = o(388032),
    m = o(815461);
let u = (e) => {
    var t, o, u;
    let { channel: j, onClose: x, transitionState: b } = e,
        [h, p] = n.useState(null != (u = j.defaultReactionEmoji) ? u : null),
        [v, N] = n.useState(!1),
        [f, g] = n.useState(!1),
        y = (null == (t = j.defaultReactionEmoji) ? void 0 : t.emojiId) !== (null == h ? void 0 : h.emojiId) || (null == (o = j.defaultReactionEmoji) ? void 0 : o.emojiName) !== (null == h ? void 0 : h.emojiName),
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
                N(!0), g(!1);
                try {
                    await (0, r.wk)(j.id, { defaultReactionEmoji: h }), x();
                } catch (e) {
                    g(!0);
                } finally {
                    N(!1);
                }
            }
        };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: b,
        'aria-label': d.NW.string(d.t.XlDE3t),
        children: [
            (0, i.jsx)(l.xBx, {
                separator: !1,
                className: m.modalHeader,
                children: (0, i.jsx)(l.X6q, {
                    variant: 'heading-md/semibold',
                    children: d.NW.string(d.t.XlDE3t)
                })
            }),
            (0, i.jsxs)(l.hzk, {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        className: m.subtitle,
                        children: d.NW.string(d.t.lVqhdX)
                    }),
                    (0, i.jsx)(s.Z, { reactionEmoji: h }),
                    (0, i.jsxs)('div', {
                        className: m.buttonRow,
                        children: [
                            (0, i.jsx)(l.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(a.Z, {
                                        guildId: null == j ? void 0 : j.guild_id,
                                        closePopout: t,
                                        onSelectEmoji: (e, o) => {
                                            k(e), o && t();
                                        },
                                        pickerIntention: c.Hz.COMMUNITY_CONTENT,
                                        channel: j
                                    });
                                },
                                position: 'right',
                                animation: l.yRy.Animation.NONE,
                                align: 'center',
                                children: (e) => {
                                    var t, o;
                                    return (0, i.jsx)(
                                        l.zxk,
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var o = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(o);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(o).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(o, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = o[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({}, e)),
                                        (o = o =
                                            {
                                                size: l.zxk.Sizes.SMALL,
                                                onClick: (t) => {
                                                    var o;
                                                    null == (o = e.onClick) || o.call(e, t);
                                                },
                                                children: d.NW.string(d.t['59QgaG'])
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                                            : (function (e, t) {
                                                  var o = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      o.push.apply(o, i);
                                                  }
                                                  return o;
                                              })(Object(o)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                                              }),
                                        t)
                                    );
                                }
                            }),
                            null != j.defaultReactionEmoji
                                ? (0, i.jsx)(l.zxk, {
                                      className: m.removeButton,
                                      onClick: () => k(null),
                                      size: l.zxk.Sizes.MIN,
                                      look: l.zxk.Looks.LINK,
                                      color: l.zxk.Colors.RED,
                                      children: d.NW.string(d.t.N86XcH)
                                  })
                                : null
                        ]
                    }),
                    f
                        ? (0, i.jsx)('div', {
                              className: m.__invalid_row,
                              children: (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-danger',
                                  children: d.NW.string(d.t.F75nNj)
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(l.mzw, {
                className: m.__invalid_footer,
                children: [
                    (0, i.jsx)(l.zxk, {
                        type: 'submit',
                        color: l.zxk.Colors.BRAND,
                        size: l.zxk.Sizes.SMALL,
                        className: m.button,
                        onClick: O,
                        disabled: !y,
                        submitting: v,
                        autoFocus: !0,
                        children: d.NW.string(d.t.R3BPHx)
                    }),
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.PRIMARY,
                        size: l.zxk.Sizes.SMALL,
                        className: m.button,
                        onClick: x,
                        children: d.NW.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
