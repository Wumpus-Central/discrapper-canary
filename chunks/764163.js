n.d(t, {
    DI: () => I,
    x3: () => y
}),
    n(388685),
    n(953529);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(600164),
    u = n(313201),
    m = n(318766),
    g = n(907040),
    p = n(339085),
    h = n(633302),
    f = n(984933),
    x = n(691886),
    b = n(185923),
    j = n(388032),
    N = n(876378);
function _(e) {
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
function v(e, t) {
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
function O(e) {
    let { guildId: t, emojiData: n, 'aria-labelledby': s, onSelectEmoji: l } = e,
        d = (0, a.e7)([p.ZP], () => (null != n.id ? p.ZP.getCustomEmojiById(n.id) : void 0)),
        u = (0, a.e7)([f.ZP], () => f.ZP.getDefaultChannel(t)),
        x = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.Z, {
                    pickerIntention: b.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: u,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e, n) => {
                        null != e &&
                            l(
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
            [l, u]
        ),
        O = i.useMemo(
            () =>
                null == d && null == n.name
                    ? null
                    : function () {
                          return (0, r.jsx)(c.Z, {
                              className: N.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == d ? void 0 : d.animated
                          });
                      },
            [n, d]
        ),
        C = '';
    return (
        null != d ? (C = ':'.concat(d.name, ':')) : null != n.name && (C = h.ZP.convertSurrogateToName(n.name)),
        (0, r.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: x,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsxs)(
                    'div',
                    v(_({ className: N.emojiInputContainer }, e), {
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: N.emojiButton,
                                active: n,
                                tabIndex: 0,
                                renderButtonContents: O
                            }),
                            (0, r.jsx)(o.oil, {
                                inputClassName: N.emojiText,
                                placeholder: j.NW.string(j.t.qJPLNT),
                                value: C,
                                'aria-labelledby': s,
                                readOnly: !0
                            })
                        ]
                    })
                );
            }
        })
    );
}
function C(e) {
    var t;
    let { guildId: n, initialData: s, benefitTypeInput: l, descriptionPlaceholder: a, canSubmit: c, onSave: m, onDelete: g, transitionState: p, onClose: h } = e,
        f = (0, u.Dt)(),
        x = (0, u.Dt)(),
        b = (0, u.Dt)(),
        [_, v] = i.useState(null != (t = null == s ? void 0 : s.description) ? t : ''),
        [C, y] = i.useState(() => ({
            id: null == s ? void 0 : s.emoji_id,
            name: null == s ? void 0 : s.emoji_name
        })),
        I = c && '' !== _ && (null != C.id || null != C.name);
    return (0, r.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(),
                I &&
                    (m({
                        description: _,
                        emojiId: C.id,
                        emojiName: C.name
                    }),
                    h());
        },
        children: (0, r.jsxs)(o.Y0X, {
            transitionState: p,
            'aria-labelledby': f,
            children: [
                (0, r.jsxs)(o.xBx, {
                    children: [
                        (0, r.jsx)(o.X6q, {
                            id: f,
                            variant: 'heading-md/semibold',
                            children: j.NW.string(j.t['2qf9EB'])
                        }),
                        (0, r.jsx)(o.olH, {
                            className: N.closeButton,
                            onClick: h
                        })
                    ]
                }),
                (0, r.jsxs)(o.hzk, {
                    className: N.modalContent,
                    children: [
                        l,
                        (0, r.jsx)(o.LZC, { size: 24 }),
                        (0, r.jsx)(o.hjN, {
                            title: j.NW.string(j.t['1Ts7QE']),
                            titleId: x,
                            children: (0, r.jsx)(o.Kx8, {
                                placeholder: a,
                                value: _,
                                rows: 1,
                                autosize: !0,
                                onChange: v,
                                'aria-labelledby': x
                            })
                        }),
                        (0, r.jsx)(o.LZC, { size: 24 }),
                        (0, r.jsx)(o.hjN, {
                            title: j.NW.string(j.t.sMOuub),
                            titleId: b,
                            children: (0, r.jsx)(O, {
                                guildId: n,
                                emojiData: C,
                                onSelectEmoji: y,
                                'aria-labelledby': b
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(o.mzw, {
                    justify: d.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.primaryButtons,
                            children: [
                                (0, r.jsx)(o.zxk, {
                                    type: 'submit',
                                    disabled: !I,
                                    children: null == s ? j.NW.string(j.t.OYkgVl) : j.NW.string(j.t.R3BPHx)
                                }),
                                null != g &&
                                    (0, r.jsx)(o.zxk, {
                                        look: o.zxk.Looks.BLANK,
                                        size: o.zxk.Sizes.ICON,
                                        className: N.deleteButton,
                                        onClick: () => {
                                            g(), h();
                                        },
                                        children: (0, r.jsx)(o.XHJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            'aria-label': j.NW.string(j.t.oyYWHB)
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            className: N.cancelButton,
                            onClick: h,
                            children: j.NW.string(j.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function y(e) {
    let { guildId: t, omitChannelIds: n, initialData: s, onSave: a, onDelete: c, transitionState: d, onClose: m } = e,
        [g, p] = i.useState(null == s ? void 0 : s.ref_id),
        h = (0, u.Dt)(),
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Wn, {
                    messageType: o.QYI.WARNING,
                    children: j.NW.string(j.t.xunxCg)
                }),
                (0, r.jsx)(o.LZC, { size: 24 }),
                (0, r.jsx)(o.hjN, {
                    title: j.NW.string(j.t.GK18KC),
                    titleId: h,
                    children: (0, r.jsx)(x.Z, {
                        guildId: t,
                        value: g,
                        initialChannelId: null == s ? void 0 : s.ref_id,
                        omitChannelIds: n,
                        onChange: function (e) {
                            p(e);
                        },
                        'aria-labelledby': h
                    })
                })
            ]
        });
    return (0, r.jsx)(C, {
        guildId: t,
        initialData: s,
        benefitTypeInput: f,
        descriptionPlaceholder: j.NW.string(j.t.J8O1Li),
        canSubmit: null != g,
        onSave: function (e) {
            l()(null != g, 'Cannot submit null channel'), a(v(_({}, e), { channelId: g }));
        },
        transitionState: d,
        onClose: m,
        onDelete: c
    });
}
function I(e) {
    var t;
    let { initialData: n, onSave: s, transitionState: a, onClose: c, onDelete: d, guildId: m } = e,
        [g, p] = i.useState(null != (t = null == n ? void 0 : n.name) ? t : ''),
        h = (0, u.Dt)(),
        f = (0, r.jsx)(o.hjN, {
            title: j.NW.string(j.t.NPOJra),
            titleId: h,
            children: (0, r.jsx)(o.Kx8, {
                placeholder: j.NW.string(j.t.NPOJra),
                value: g,
                rows: 1,
                onChange: function (e) {
                    p(e);
                },
                'aria-labelledby': h
            })
        });
    return (0, r.jsx)(C, {
        guildId: m,
        initialData: n,
        benefitTypeInput: f,
        descriptionPlaceholder: j.NW.string(j.t.ucP4Tk),
        canSubmit: '' !== g,
        onSave: function (e) {
            l()('' !== g, 'Cannot submit empty name'), s(v(_({}, e), { name: g }));
        },
        transitionState: a,
        onClose: c,
        onDelete: d
    });
}
