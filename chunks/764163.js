(n.d(t, {
    DI: () => E,
    x3: () => I
}),
    n(388685),
    n(953529),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(82659),
    c = n(755721),
    d = n(481060),
    u = n(596454),
    m = n(313201),
    g = n(318766),
    p = n(907040),
    h = n(339085),
    f = n(633302),
    x = n(984933),
    b = n(691886),
    j = n(185923),
    v = n(388032),
    _ = n(656147);
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
function y(e, t) {
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
    let { guildId: t, emojiData: n, 'aria-labelledby': l, onSelectEmoji: a } = e,
        o = i.useRef(null),
        m = (0, s.e7)([h.ZP], () => (null != n.id ? h.ZP.getCustomEmojiById(n.id) : void 0)),
        b = (0, s.e7)([x.ZP], () => x.ZP.getDefaultChannel(t)),
        C = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(p.Z, {
                    pickerIntention: j.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: b,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: r } = e;
                        (null != n &&
                            a(
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
            [a, b]
        ),
        N = i.useMemo(
            () =>
                null == m && null == n.name
                    ? null
                    : function () {
                          return (0, r.jsx)(u.Z, {
                              className: _.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == m ? void 0 : m.animated
                          });
                      },
            [n, m]
        ),
        I = '';
    return (
        null != m ? (I = ':'.concat(m.name, ':')) : null != n.name && (I = f.ZP.convertSurrogateToName(n.name)),
        (0, r.jsx)(d.yRy, {
            targetElementRef: o,
            animation: d.yRy.Animation.NONE,
            position: 'top',
            renderPopout: C,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsxs)(
                    'div',
                    y(
                        O(
                            {
                                ref: o,
                                className: _.emojiInputContainer
                            },
                            e
                        ),
                        {
                            children: [
                                (0, r.jsx)(g.Z, {
                                    className: _.emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: N
                                }),
                                (0, r.jsx)(c.Is, {
                                    inputClassName: _.emojiText,
                                    placeholder: v.intl.string(v.t.qJPLNT),
                                    value: I,
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
    let { guildId: n, initialData: l, benefitTypeInput: a, descriptionPlaceholder: s, canSubmit: c, onSave: u, onDelete: g, transitionState: p, onClose: h } = e,
        f = (0, m.Dt)(),
        x = (0, m.Dt)(),
        [b, j] = i.useState(null != (t = null == l ? void 0 : l.description) ? t : ''),
        [_, O] = i.useState(() => ({
            id: null == l ? void 0 : l.emoji_id,
            name: null == l ? void 0 : l.emoji_name
        })),
        y = c && '' !== b && (null != _.id || null != _.name);
    function N(e) {
        (e.preventDefault(),
            y &&
                (u({
                    description: b,
                    emojiId: _.id,
                    emojiName: _.name
                }),
                h()));
    }
    let I = [
        {
            text: v.intl.string(v.t['ETE/oK']),
            variant: 'secondary',
            onClick: h
        }
    ];
    return (
        null != g &&
            I.push({
                text: v.intl.string(v.t.oyYWHB),
                variant: 'critical-secondary',
                onClick: () => {
                    (g(), h());
                },
                icon: d.XHJ
            }),
        I.push({
            text: null == l ? v.intl.string(v.t.OYkgVl) : v.intl.string(v.t.R3BPHx),
            variant: 'primary',
            onClick: N,
            disabled: !y
        }),
        (0, r.jsx)('form', {
            onSubmit: N,
            children: (0, r.jsx)(o.Modal, {
                transitionState: p,
                onClose: h,
                title: v.intl.string(v.t['2qf9EB']),
                actions: I,
                children: (0, r.jsxs)(d.Kqy, {
                    gap: 'md',
                    children: [
                        a,
                        (0, r.jsx)(d.hjN, {
                            title: v.intl.string(v.t['1Ts7QE']),
                            titleId: f,
                            children: (0, r.jsx)(d.Kx8, {
                                placeholder: s,
                                value: b,
                                rows: 1,
                                autosize: !0,
                                onChange: j,
                                'aria-labelledby': f
                            })
                        }),
                        (0, r.jsx)(d.hjN, {
                            title: v.intl.string(v.t.sMOuub),
                            titleId: x,
                            children: (0, r.jsx)(C, {
                                guildId: n,
                                emojiData: _,
                                onSelectEmoji: O,
                                'aria-labelledby': x
                            })
                        })
                    ]
                })
            })
        })
    );
}
function I(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: s, onDelete: o, transitionState: c, onClose: u } = e,
        [g, p] = i.useState(null == l ? void 0 : l.ref_id),
        h = (0, m.Dt)(),
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.WARNING,
                    children: v.intl.string(v.t.xunxCg)
                }),
                (0, r.jsx)(d.LZC, { size: 24 }),
                (0, r.jsx)(d.hjN, {
                    title: v.intl.string(v.t.GK18KC),
                    titleId: h,
                    children: (0, r.jsx)(b.Z, {
                        guildId: t,
                        value: g,
                        initialChannelId: null == l ? void 0 : l.ref_id,
                        omitChannelIds: n,
                        onChange: function (e) {
                            p(e);
                        },
                        'aria-labelledby': h
                    })
                })
            ]
        });
    return (0, r.jsx)(N, {
        guildId: t,
        initialData: l,
        benefitTypeInput: f,
        descriptionPlaceholder: v.intl.string(v.t.J8O1Li),
        canSubmit: null != g,
        onSave: function (e) {
            (a()(null != g, 'Cannot submit null channel'), s(y(O({}, e), { channelId: g })));
        },
        transitionState: c,
        onClose: u,
        onDelete: o
    });
}
function E(e) {
    var t;
    let { initialData: n, onSave: l, transitionState: s, onClose: o, onDelete: c, guildId: u } = e,
        [g, p] = i.useState(null != (t = null == n ? void 0 : n.name) ? t : ''),
        h = (0, m.Dt)(),
        f = (0, r.jsx)(d.hjN, {
            title: v.intl.string(v.t.NPOJra),
            titleId: h,
            children: (0, r.jsx)(d.Kx8, {
                placeholder: v.intl.string(v.t.NPOJra),
                value: g,
                rows: 1,
                onChange: function (e) {
                    p(e);
                },
                'aria-labelledby': h
            })
        });
    return (0, r.jsx)(N, {
        guildId: u,
        initialData: n,
        benefitTypeInput: f,
        descriptionPlaceholder: v.intl.string(v.t.ucP4Tk),
        canSubmit: '' !== g,
        onSave: function (e) {
            (a()('' !== g, 'Cannot submit empty name'), l(y(O({}, e), { name: g })));
        },
        transitionState: s,
        onClose: o,
        onDelete: c
    });
}
