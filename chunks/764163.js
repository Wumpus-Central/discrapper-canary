n.d(t, {
    DI: () => I,
    x3: () => C
}),
    n(47120),
    n(266796);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(600164),
    u = n(313201),
    m = n(318766),
    p = n(907040),
    g = n(339085),
    h = n(633302),
    f = n(984933),
    b = n(691886),
    x = n(185923),
    j = n(388032),
    N = n(135946);
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
function _(e, t) {
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
    let { guildId: t, emojiData: n, 'aria-labelledby': s, onSelectEmoji: a } = e,
        d = (0, l.e7)([g.ZP], () => (null != n.id ? g.ZP.getCustomEmojiById(n.id) : void 0)),
        u = (0, l.e7)([f.ZP], () => f.ZP.getDefaultChannel(t)),
        b = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(p.Z, {
                    pickerIntention: x.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: u,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e, n) => {
                        null != e &&
                            a(
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
            [a, u]
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
        y = '';
    return (
        null != d ? (y = ':'.concat(d.name, ':')) : null != n.name && (y = h.ZP.convertSurrogateToName(n.name)),
        (0, r.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: b,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsxs)(
                    'div',
                    _(v({ className: N.emojiInputContainer }, e), {
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
                                value: y,
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
function y(e) {
    var t;
    let { guildId: n, initialData: s, benefitTypeInput: a, descriptionPlaceholder: l, canSubmit: c, onSave: m, onDelete: p, transitionState: g, onClose: h } = e,
        f = (0, u.Dt)(),
        b = (0, u.Dt)(),
        x = (0, u.Dt)(),
        [v, _] = i.useState(null !== (t = null == s ? void 0 : s.description) && void 0 !== t ? t : ''),
        [y, C] = i.useState(() => ({
            id: null == s ? void 0 : s.emoji_id,
            name: null == s ? void 0 : s.emoji_name
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
                    h());
        },
        children: (0, r.jsxs)(o.Y0X, {
            transitionState: g,
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
                        a,
                        (0, r.jsx)(o.LZC, { size: 24 }),
                        (0, r.jsx)(o.hjN, {
                            title: j.NW.string(j.t['1Ts7QE']),
                            titleId: b,
                            children: (0, r.jsx)(o.Kx8, {
                                placeholder: l,
                                value: v,
                                rows: 1,
                                autosize: !0,
                                onChange: _,
                                'aria-labelledby': b
                            })
                        }),
                        (0, r.jsx)(o.LZC, { size: 24 }),
                        (0, r.jsx)(o.hjN, {
                            title: j.NW.string(j.t.sMOuub),
                            titleId: x,
                            children: (0, r.jsx)(O, {
                                guildId: n,
                                emojiData: y,
                                onSelectEmoji: C,
                                'aria-labelledby': x
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
                                null != p &&
                                    (0, r.jsx)(o.zxk, {
                                        look: o.zxk.Looks.BLANK,
                                        size: o.zxk.Sizes.ICON,
                                        className: N.deleteButton,
                                        onClick: () => {
                                            p(), h();
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
function C(e) {
    let { guildId: t, omitChannelIds: n, initialData: s, onSave: l, onDelete: c, transitionState: d, onClose: m } = e,
        [p, g] = i.useState(null == s ? void 0 : s.ref_id),
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
                    children: (0, r.jsx)(b.Z, {
                        guildId: t,
                        value: p,
                        initialChannelId: null == s ? void 0 : s.ref_id,
                        omitChannelIds: n,
                        onChange: function (e) {
                            g(e);
                        },
                        'aria-labelledby': h
                    })
                })
            ]
        });
    return (0, r.jsx)(y, {
        guildId: t,
        initialData: s,
        benefitTypeInput: f,
        descriptionPlaceholder: j.NW.string(j.t.J8O1Li),
        canSubmit: null != p,
        onSave: function (e) {
            a()(null != p, 'Cannot submit null channel'), l(_(v({}, e), { channelId: p }));
        },
        transitionState: d,
        onClose: m,
        onDelete: c
    });
}
function I(e) {
    var t;
    let { initialData: n, onSave: s, transitionState: l, onClose: c, onDelete: d, guildId: m } = e,
        [p, g] = i.useState(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ''),
        h = (0, u.Dt)(),
        f = (0, r.jsx)(o.hjN, {
            title: j.NW.string(j.t.NPOJra),
            titleId: h,
            children: (0, r.jsx)(o.Kx8, {
                placeholder: j.NW.string(j.t.NPOJra),
                value: p,
                rows: 1,
                onChange: function (e) {
                    g(e);
                },
                'aria-labelledby': h
            })
        });
    return (0, r.jsx)(y, {
        guildId: m,
        initialData: n,
        benefitTypeInput: f,
        descriptionPlaceholder: j.NW.string(j.t.ucP4Tk),
        canSubmit: '' !== p,
        onSave: function (e) {
            a()('' !== p, 'Cannot submit empty name'), s(_(v({}, e), { name: p }));
        },
        transitionState: l,
        onClose: c,
        onDelete: d
    });
}
