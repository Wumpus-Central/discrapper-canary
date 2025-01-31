n.d(t, {
    DI: () => E,
    x3: () => I
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(600164),
    u = n(313201),
    m = n(318766),
    h = n(907040),
    g = n(339085),
    x = n(633302),
    p = n(984933),
    _ = n(691886),
    C = n(185923),
    f = n(388032),
    v = n(575769);
function N(e) {
    let { guildId: t, emojiData: n, 'aria-labelledby': l, onSelectEmoji: s } = e,
        d = (0, a.e7)([g.ZP], () => (null != n.id ? g.ZP.getCustomEmojiById(n.id) : void 0)),
        u = (0, a.e7)([p.ZP], () => p.ZP.getDefaultChannel(t)),
        _ = r.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(h.Z, {
                    pickerIntention: C.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: u,
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
            [s, u]
        ),
        N = r.useMemo(
            () =>
                null == d && null == n.name
                    ? null
                    : function () {
                          return (0, i.jsx)(c.Z, {
                              className: v.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == d ? void 0 : d.animated
                          });
                      },
            [n, d]
        ),
        j = '';
    return (
        null != d ? (j = ':'.concat(d.name, ':')) : null != n.name && (j = x.ZP.convertSurrogateToName(n.name)),
        (0, i.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: _,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsxs)('div', {
                    className: v.emojiInputContainer,
                    ...e,
                    children: [
                        (0, i.jsx)(m.Z, {
                            className: v.emojiButton,
                            active: n,
                            tabIndex: 0,
                            renderButtonContents: N
                        }),
                        (0, i.jsx)(o.oil, {
                            inputClassName: v.emojiText,
                            placeholder: f.intl.string(f.t.qJPLNT),
                            value: j,
                            'aria-labelledby': l,
                            readOnly: !0
                        })
                    ]
                });
            }
        })
    );
}
function j(e) {
    var t;
    let { guildId: n, initialData: l, benefitTypeInput: s, descriptionPlaceholder: a, canSubmit: c, onSave: m, onDelete: h, transitionState: g, onClose: x } = e,
        p = (0, u.Dt)(),
        _ = (0, u.Dt)(),
        C = (0, u.Dt)(),
        [j, I] = r.useState(null !== (t = null == l ? void 0 : l.description) && void 0 !== t ? t : ''),
        [E, b] = r.useState(() => ({
            id: null == l ? void 0 : l.emoji_id,
            name: null == l ? void 0 : l.emoji_name
        })),
        T = c && '' !== j && (null != E.id || null != E.name);
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(),
                T &&
                    (m({
                        description: j,
                        emojiId: E.id,
                        emojiName: E.name
                    }),
                    x());
        },
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: g,
            'aria-labelledby': p,
            children: [
                (0, i.jsxs)(o.xBx, {
                    children: [
                        (0, i.jsx)(o.X6q, {
                            id: p,
                            variant: 'heading-md/semibold',
                            children: f.intl.string(f.t['2qf9EB'])
                        }),
                        (0, i.jsx)(o.olH, {
                            className: v.closeButton,
                            onClick: x
                        })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    className: v.modalContent,
                    children: [
                        s,
                        (0, i.jsx)(o.LZC, { size: 24 }),
                        (0, i.jsx)(o.hjN, {
                            title: f.intl.string(f.t['1Ts7QE']),
                            titleId: _,
                            children: (0, i.jsx)(o.Kx8, {
                                placeholder: a,
                                value: j,
                                rows: 1,
                                autosize: !0,
                                onChange: I,
                                'aria-labelledby': _
                            })
                        }),
                        (0, i.jsx)(o.LZC, { size: 24 }),
                        (0, i.jsx)(o.hjN, {
                            title: f.intl.string(f.t.sMOuub),
                            titleId: C,
                            children: (0, i.jsx)(N, {
                                guildId: n,
                                emojiData: E,
                                onSelectEmoji: b,
                                'aria-labelledby': C
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    justify: d.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsxs)('div', {
                            className: v.primaryButtons,
                            children: [
                                (0, i.jsx)(o.zxk, {
                                    type: 'submit',
                                    disabled: !T,
                                    children: null == l ? f.intl.string(f.t.OYkgVl) : f.intl.string(f.t.R3BPHx)
                                }),
                                null != h &&
                                    (0, i.jsx)(o.zxk, {
                                        look: o.zxk.Looks.BLANK,
                                        size: o.zxk.Sizes.ICON,
                                        className: v.deleteButton,
                                        onClick: () => {
                                            h(), x();
                                        },
                                        children: (0, i.jsx)(o.XHJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            'aria-label': f.intl.string(f.t.oyYWHB)
                                        })
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            className: v.cancelButton,
                            onClick: x,
                            children: f.intl.string(f.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function I(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: a, onDelete: c, transitionState: d, onClose: m } = e,
        [h, g] = r.useState(null == l ? void 0 : l.ref_id),
        x = (0, u.Dt)(),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Wn, {
                    messageType: o.QYI.WARNING,
                    children: f.intl.string(f.t.xunxCg)
                }),
                (0, i.jsx)(o.LZC, { size: 24 }),
                (0, i.jsx)(o.hjN, {
                    title: f.intl.string(f.t.GK18KC),
                    titleId: x,
                    children: (0, i.jsx)(_.Z, {
                        guildId: t,
                        value: h,
                        initialChannelId: null == l ? void 0 : l.ref_id,
                        omitChannelIds: n,
                        onChange: function (e) {
                            g(e);
                        },
                        'aria-labelledby': x
                    })
                })
            ]
        });
    return (0, i.jsx)(j, {
        guildId: t,
        initialData: l,
        benefitTypeInput: p,
        descriptionPlaceholder: f.intl.string(f.t.J8O1Li),
        canSubmit: null != h,
        onSave: function (e) {
            s()(null != h, 'Cannot submit null channel'),
                a({
                    ...e,
                    channelId: h
                });
        },
        transitionState: d,
        onClose: m,
        onDelete: c
    });
}
function E(e) {
    var t;
    let { initialData: n, onSave: l, transitionState: a, onClose: c, onDelete: d, guildId: m } = e,
        [h, g] = r.useState(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ''),
        x = (0, u.Dt)(),
        p = (0, i.jsx)(o.hjN, {
            title: f.intl.string(f.t.NPOJra),
            titleId: x,
            children: (0, i.jsx)(o.Kx8, {
                placeholder: f.intl.string(f.t.NPOJra),
                value: h,
                rows: 1,
                onChange: function (e) {
                    g(e);
                },
                'aria-labelledby': x
            })
        });
    return (0, i.jsx)(j, {
        guildId: m,
        initialData: n,
        benefitTypeInput: p,
        descriptionPlaceholder: f.intl.string(f.t.ucP4Tk),
        canSubmit: '' !== h,
        onSave: function (e) {
            s()('' !== h, 'Cannot submit empty name'),
                l({
                    ...e,
                    name: h
                });
        },
        transitionState: a,
        onClose: c,
        onDelete: d
    });
}
