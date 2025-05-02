n.d(t, {
    DI: () => I,
    x3: () => N
}),
    n(388685),
    n(953529);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    u = n(600164),
    d = n(313201),
    m = n(318766),
    g = n(907040),
    p = n(339085),
    f = n(633302),
    h = n(984933),
    x = n(691886),
    b = n(185923),
    j = n(388032),
    _ = n(656147);
function v(e) {
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
}
function O(e, t) {
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
function C(e) {
    let { guildId: t, emojiData: n, 'aria-labelledby': l, onSelectEmoji: s } = e,
        u = (0, a.e7)([p.ZP], () => (null != n.id ? p.ZP.getCustomEmojiById(n.id) : void 0)),
        d = (0, a.e7)([h.ZP], () => h.ZP.getDefaultChannel(t)),
        x = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.Z, {
                    pickerIntention: b.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: d,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e, n) => {
                        null != e &&
                            s(
                                null != e.id
                                    ? {
                                          id: e.id,
                                          name: void 0
                                      }
                                    : {
                                          id: void 0,
                                          name: e.optionallyDiverseSequence
                                      }
                            ),
                            n && t();
                    }
                });
            },
            [s, d]
        ),
        C = i.useMemo(
            () =>
                null == u && null == n.name
                    ? null
                    : function () {
                          return (0, r.jsx)(c.Z, {
                              className: _.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == u ? void 0 : u.animated
                          });
                      },
            [n, u]
        ),
        y = '';
    return (
        null != u ? (y = ':'.concat(u.name, ':')) : null != n.name && (y = f.ZP.convertSurrogateToName(n.name)),
        (0, r.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: x,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsxs)(
                    'div',
                    O(v({ className: _.emojiInputContainer }, e), {
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: _.emojiButton,
                                active: n,
                                tabIndex: 0,
                                renderButtonContents: C
                            }),
                            (0, r.jsx)(o.oil, {
                                inputClassName: _.emojiText,
                                placeholder: j.intl.string(j.t.qJPLNT),
                                value: y,
                                'aria-labelledby': l,
                                readOnly: !0
                            })
                        ]
                    })
                );
            }
        })
    );
}
function y(e) {
    var t;
    let { guildId: n, initialData: l, benefitTypeInput: s, descriptionPlaceholder: a, canSubmit: c, onSave: m, onDelete: g, transitionState: p, onClose: f } = e,
        h = (0, d.Dt)(),
        x = (0, d.Dt)(),
        b = (0, d.Dt)(),
        [v, O] = i.useState(null != (t = null == l ? void 0 : l.description) ? t : ''),
        [y, N] = i.useState(() => ({
            id: null == l ? void 0 : l.emoji_id,
            name: null == l ? void 0 : l.emoji_name
        })),
        I = c && '' !== v && (null != y.id || null != y.name);
    return (0, r.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(),
                I &&
                    (m({
                        description: v,
                        emojiId: y.id,
                        emojiName: y.name
                    }),
                    f());
        },
        children: (0, r.jsxs)(o.Y0X, {
            transitionState: p,
            'aria-labelledby': h,
            children: [
                (0, r.jsxs)(o.xBx, {
                    children: [
                        (0, r.jsx)(o.X6q, {
                            id: h,
                            variant: 'heading-md/semibold',
                            children: j.intl.string(j.t['2qf9EB'])
                        }),
                        (0, r.jsx)(o.olH, {
                            className: _.closeButton,
                            onClick: f
                        })
                    ]
                }),
                (0, r.jsxs)(o.hzk, {
                    className: _.modalContent,
                    children: [
                        s,
                        (0, r.jsx)(o.LZC, { size: 24 }),
                        (0, r.jsx)(o.hjN, {
                            title: j.intl.string(j.t['1Ts7QE']),
                            titleId: x,
                            children: (0, r.jsx)(o.Kx8, {
                                placeholder: a,
                                value: v,
                                rows: 1,
                                autosize: !0,
                                onChange: O,
                                'aria-labelledby': x
                            })
                        }),
                        (0, r.jsx)(o.LZC, { size: 24 }),
                        (0, r.jsx)(o.hjN, {
                            title: j.intl.string(j.t.sMOuub),
                            titleId: b,
                            children: (0, r.jsx)(C, {
                                guildId: n,
                                emojiData: y,
                                onSelectEmoji: N,
                                'aria-labelledby': b
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(o.mzw, {
                    justify: u.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsxs)('div', {
                            className: _.primaryButtons,
                            children: [
                                (0, r.jsx)(o.zxk, {
                                    type: 'submit',
                                    disabled: !I,
                                    children: null == l ? j.intl.string(j.t.OYkgVl) : j.intl.string(j.t.R3BPHx)
                                }),
                                null != g &&
                                    (0, r.jsx)(o.zxk, {
                                        look: o.zxk.Looks.BLANK,
                                        size: o.zxk.Sizes.ICON,
                                        className: _.deleteButton,
                                        onClick: () => {
                                            g(), f();
                                        },
                                        children: (0, r.jsx)(o.XHJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            'aria-label': j.intl.string(j.t.oyYWHB)
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            className: _.cancelButton,
                            onClick: f,
                            children: j.intl.string(j.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function N(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: a, onDelete: c, transitionState: u, onClose: m } = e,
        [g, p] = i.useState(null == l ? void 0 : l.ref_id),
        f = (0, d.Dt)(),
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Wn, {
                    messageType: o.QYI.WARNING,
                    children: j.intl.string(j.t.xunxCg)
                }),
                (0, r.jsx)(o.LZC, { size: 24 }),
                (0, r.jsx)(o.hjN, {
                    title: j.intl.string(j.t.GK18KC),
                    titleId: f,
                    children: (0, r.jsx)(x.Z, {
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
    return (0, r.jsx)(y, {
        guildId: t,
        initialData: l,
        benefitTypeInput: h,
        descriptionPlaceholder: j.intl.string(j.t.J8O1Li),
        canSubmit: null != g,
        onSave: function (e) {
            s()(null != g, 'Cannot submit null channel'), a(O(v({}, e), { channelId: g }));
        },
        transitionState: u,
        onClose: m,
        onDelete: c
    });
}
function I(e) {
    var t;
    let { initialData: n, onSave: l, transitionState: a, onClose: c, onDelete: u, guildId: m } = e,
        [g, p] = i.useState(null != (t = null == n ? void 0 : n.name) ? t : ''),
        f = (0, d.Dt)(),
        h = (0, r.jsx)(o.hjN, {
            title: j.intl.string(j.t.NPOJra),
            titleId: f,
            children: (0, r.jsx)(o.Kx8, {
                placeholder: j.intl.string(j.t.NPOJra),
                value: g,
                rows: 1,
                onChange: function (e) {
                    p(e);
                },
                'aria-labelledby': f
            })
        });
    return (0, r.jsx)(y, {
        guildId: m,
        initialData: n,
        benefitTypeInput: h,
        descriptionPlaceholder: j.intl.string(j.t.ucP4Tk),
        canSubmit: '' !== g,
        onSave: function (e) {
            s()('' !== g, 'Cannot submit empty name'), l(O(v({}, e), { name: g }));
        },
        transitionState: a,
        onClose: c,
        onDelete: u
    });
}
