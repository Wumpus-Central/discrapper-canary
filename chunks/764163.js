(n.d(t, {
    DI: () => E,
    x3: () => I
}),
    n(388685),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(596454),
    u = n(600164),
    m = n(313201),
    g = n(318766),
    p = n(907040),
    f = n(339085),
    h = n(633302),
    x = n(984933),
    b = n(691886),
    j = n(185923),
    _ = n(388032),
    v = n(656147);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function C(e, t) {
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
}
function y(e) {
    let { guildId: t, emojiData: n, 'aria-labelledby': l, onSelectEmoji: s } = e,
        o = i.useRef(null),
        u = (0, a.e7)([f.ZP], () => (null != n.id ? f.ZP.getCustomEmojiById(n.id) : void 0)),
        m = (0, a.e7)([x.ZP], () => x.ZP.getDefaultChannel(t)),
        b = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(p.Z, {
                    pickerIntention: j.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: m,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: r } = e;
                        (null != n &&
                            s(
                                null != n.id
                                    ? {
                                          id: n.id,
                                          name: void 0
                                      }
                                    : {
                                          id: void 0,
                                          name: n.optionallyDiverseSequence
                                      }
                            ),
                            r && t());
                    }
                });
            },
            [s, m]
        ),
        y = i.useMemo(
            () =>
                null == u && null == n.name
                    ? null
                    : function () {
                          return (0, r.jsx)(d.Z, {
                              className: v.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == u ? void 0 : u.animated
                          });
                      },
            [n, u]
        ),
        N = '';
    return (
        null != u ? (N = ':'.concat(u.name, ':')) : null != n.name && (N = h.ZP.convertSurrogateToName(n.name)),
        (0, r.jsx)(c.yRy, {
            targetElementRef: o,
            animation: c.yRy.Animation.NONE,
            position: 'top',
            renderPopout: b,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsxs)(
                    'div',
                    C(
                        O(
                            {
                                ref: o,
                                className: v.emojiInputContainer
                            },
                            e
                        ),
                        {
                            children: [
                                (0, r.jsx)(g.Z, {
                                    className: v.emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: y
                                }),
                                (0, r.jsx)(c.oil, {
                                    inputClassName: v.emojiText,
                                    placeholder: _.intl.string(_.t.qJPLNT),
                                    value: N,
                                    'aria-labelledby': l,
                                    readOnly: !0
                                })
                            ]
                        }
                    )
                );
            }
        })
    );
}
function N(e) {
    var t;
    let { guildId: n, initialData: l, benefitTypeInput: s, descriptionPlaceholder: a, canSubmit: d, onSave: g, onDelete: p, transitionState: f, onClose: h } = e,
        x = (0, m.Dt)(),
        b = (0, m.Dt)(),
        j = (0, m.Dt)(),
        [O, C] = i.useState(null != (t = null == l ? void 0 : l.description) ? t : ''),
        [N, I] = i.useState(() => ({
            id: null == l ? void 0 : l.emoji_id,
            name: null == l ? void 0 : l.emoji_name
        })),
        E = d && '' !== O && (null != N.id || null != N.name);
    return (0, r.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(),
                E &&
                    (g({
                        description: O,
                        emojiId: N.id,
                        emojiName: N.name
                    }),
                    h()));
        },
        children: (0, r.jsxs)(c.Y0X, {
            transitionState: f,
            'aria-labelledby': x,
            parentComponent: 'EditBenefitModal',
            children: [
                (0, r.jsxs)(c.xBx, {
                    children: [
                        (0, r.jsx)(c.X6q, {
                            id: x,
                            variant: 'heading-md/semibold',
                            children: _.intl.string(_.t['2qf9EB'])
                        }),
                        (0, r.jsx)(c.olH, {
                            className: v.closeButton,
                            onClick: h
                        })
                    ]
                }),
                (0, r.jsxs)(c.hzk, {
                    className: v.modalContent,
                    children: [
                        s,
                        (0, r.jsx)(c.LZC, { size: 24 }),
                        (0, r.jsx)(c.hjN, {
                            title: _.intl.string(_.t['1Ts7QE']),
                            titleId: b,
                            children: (0, r.jsx)(c.Kx8, {
                                placeholder: a,
                                value: O,
                                rows: 1,
                                autosize: !0,
                                onChange: C,
                                'aria-labelledby': b
                            })
                        }),
                        (0, r.jsx)(c.LZC, { size: 24 }),
                        (0, r.jsx)(c.hjN, {
                            title: _.intl.string(_.t.sMOuub),
                            titleId: j,
                            children: (0, r.jsx)(y, {
                                guildId: n,
                                emojiData: N,
                                onSelectEmoji: I,
                                'aria-labelledby': j
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(c.mzw, {
                    justify: u.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.primaryButtons,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: null == l ? _.intl.string(_.t.OYkgVl) : _.intl.string(_.t.R3BPHx),
                                    type: 'submit',
                                    disabled: !E
                                }),
                                null != p &&
                                    (0, r.jsx)(o.zx, {
                                        look: o.zx.Looks.BLANK,
                                        size: o.zx.Sizes.ICON,
                                        className: v.deleteButton,
                                        onClick: () => {
                                            (p(), h());
                                        },
                                        children: (0, r.jsx)(c.XHJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            'aria-label': _.intl.string(_.t.oyYWHB)
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)(o.zx, {
                            look: o.zx.Looks.LINK,
                            color: o.zx.Colors.PRIMARY,
                            className: v.cancelButton,
                            onClick: h,
                            children: _.intl.string(_.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function I(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: a, onDelete: o, transitionState: d, onClose: u } = e,
        [g, p] = i.useState(null == l ? void 0 : l.ref_id),
        f = (0, m.Dt)(),
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Wn, {
                    messageType: c.QYI.WARNING,
                    children: _.intl.string(_.t.xunxCg)
                }),
                (0, r.jsx)(c.LZC, { size: 24 }),
                (0, r.jsx)(c.hjN, {
                    title: _.intl.string(_.t.GK18KC),
                    titleId: f,
                    children: (0, r.jsx)(b.Z, {
                        guildId: t,
                        value: g,
                        initialChannelId: null == l ? void 0 : l.ref_id,
                        omitChannelIds: n,
                        onChange: function (e) {
                            p(e);
                        },
                        'aria-labelledby': f
                    })
                })
            ]
        });
    return (0, r.jsx)(N, {
        guildId: t,
        initialData: l,
        benefitTypeInput: h,
        descriptionPlaceholder: _.intl.string(_.t.J8O1Li),
        canSubmit: null != g,
        onSave: function (e) {
            (s()(null != g, 'Cannot submit null channel'), a(C(O({}, e), { channelId: g })));
        },
        transitionState: d,
        onClose: u,
        onDelete: o
    });
}
function E(e) {
    var t;
    let { initialData: n, onSave: l, transitionState: a, onClose: o, onDelete: d, guildId: u } = e,
        [g, p] = i.useState(null != (t = null == n ? void 0 : n.name) ? t : ''),
        f = (0, m.Dt)(),
        h = (0, r.jsx)(c.hjN, {
            title: _.intl.string(_.t.NPOJra),
            titleId: f,
            children: (0, r.jsx)(c.Kx8, {
                placeholder: _.intl.string(_.t.NPOJra),
                value: g,
                rows: 1,
                onChange: function (e) {
                    p(e);
                },
                'aria-labelledby': f
            })
        });
    return (0, r.jsx)(N, {
        guildId: u,
        initialData: n,
        benefitTypeInput: h,
        descriptionPlaceholder: _.intl.string(_.t.ucP4Tk),
        canSubmit: '' !== g,
        onSave: function (e) {
            (s()('' !== g, 'Cannot submit empty name'), l(C(O({}, e), { name: g })));
        },
        transitionState: a,
        onClose: o,
        onDelete: d
    });
}
