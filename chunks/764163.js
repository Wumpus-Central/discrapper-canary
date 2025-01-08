n.d(t, {
    DI: function () {
        return j;
    },
    x3: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(600164),
    u = n(313201),
    m = n(318766),
    h = n(907040),
    g = n(339085),
    x = n(633302),
    p = n(984933),
    f = n(691886),
    C = n(185923),
    v = n(388032),
    _ = n(575769);
function N(e) {
    let { guildId: t, emojiData: n, 'aria-labelledby': l, onSelectEmoji: a } = e,
        d = (0, s.e7)([g.ZP], () => (null != n.id ? g.ZP.getCustomEmojiById(n.id) : void 0)),
        u = (0, s.e7)([p.ZP], () => p.ZP.getDefaultChannel(t)),
        f = r.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(h.Z, {
                    pickerIntention: C.Hz.GUILD_ROLE_BENEFIT_EMOJI,
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
        N = r.useMemo(
            () =>
                null == d && null == n.name
                    ? null
                    : function () {
                          return (0, i.jsx)(c.Z, {
                              className: _.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == d ? void 0 : d.animated
                          });
                      },
            [n, d]
        ),
        I = '';
    return (
        null != d ? (I = ':'.concat(d.name, ':')) : null != n.name && (I = x.ZP.convertSurrogateToName(n.name)),
        (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: 'top',
            renderPopout: f,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsxs)('div', {
                    className: _.emojiInputContainer,
                    ...e,
                    children: [
                        (0, i.jsx)(m.Z, {
                            className: _.emojiButton,
                            active: n,
                            tabIndex: 0,
                            renderButtonContents: N
                        }),
                        (0, i.jsx)(o.TextInput, {
                            inputClassName: _.emojiText,
                            placeholder: v.intl.string(v.t.qJPLNT),
                            value: I,
                            'aria-labelledby': l,
                            readOnly: !0
                        })
                    ]
                });
            }
        })
    );
}
function I(e) {
    var t;
    let { guildId: n, initialData: l, benefitTypeInput: a, descriptionPlaceholder: s, canSubmit: c, onSave: m, onDelete: h, transitionState: g, onClose: x } = e,
        p = (0, u.Dt)(),
        f = (0, u.Dt)(),
        C = (0, u.Dt)(),
        [I, T] = r.useState(null !== (t = null == l ? void 0 : l.description) && void 0 !== t ? t : ''),
        [j, b] = r.useState(() => ({
            id: null == l ? void 0 : l.emoji_id,
            name: null == l ? void 0 : l.emoji_name
        })),
        S = c && '' !== I && (null != j.id || null != j.name);
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(),
                S &&
                    (m({
                        description: I,
                        emojiId: j.id,
                        emojiName: j.name
                    }),
                    x());
        },
        children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: g,
            'aria-labelledby': p,
            children: [
                (0, i.jsxs)(o.ModalHeader, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            id: p,
                            variant: 'heading-md/semibold',
                            children: v.intl.string(v.t['2qf9EB'])
                        }),
                        (0, i.jsx)(o.ModalCloseButton, {
                            className: _.closeButton,
                            onClick: x
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalContent, {
                    className: _.modalContent,
                    children: [
                        a,
                        (0, i.jsx)(o.Spacer, { size: 24 }),
                        (0, i.jsx)(o.FormSection, {
                            title: v.intl.string(v.t['1Ts7QE']),
                            titleId: f,
                            children: (0, i.jsx)(o.TextArea, {
                                placeholder: s,
                                value: I,
                                rows: 1,
                                autosize: !0,
                                onChange: T,
                                'aria-labelledby': f
                            })
                        }),
                        (0, i.jsx)(o.Spacer, { size: 24 }),
                        (0, i.jsx)(o.FormSection, {
                            title: v.intl.string(v.t.sMOuub),
                            titleId: C,
                            children: (0, i.jsx)(N, {
                                guildId: n,
                                emojiData: j,
                                onSelectEmoji: b,
                                'aria-labelledby': C
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    justify: d.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.primaryButtons,
                            children: [
                                (0, i.jsx)(o.Button, {
                                    type: 'submit',
                                    disabled: !S,
                                    children: null == l ? v.intl.string(v.t.OYkgVl) : v.intl.string(v.t.R3BPHx)
                                }),
                                null != h &&
                                    (0, i.jsx)(o.Button, {
                                        look: o.Button.Looks.BLANK,
                                        size: o.Button.Sizes.ICON,
                                        className: _.deleteButton,
                                        onClick: () => {
                                            h(), x();
                                        },
                                        children: (0, i.jsx)(o.TrashIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            'aria-label': v.intl.string(v.t.oyYWHB)
                                        })
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            className: _.cancelButton,
                            onClick: x,
                            children: v.intl.string(v.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function T(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: s, onDelete: c, transitionState: d, onClose: m } = e,
        [h, g] = r.useState(null == l ? void 0 : l.ref_id),
        x = (0, u.Dt)(),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.HelpMessage, {
                    messageType: o.HelpMessageTypes.WARNING,
                    children: v.intl.string(v.t.xunxCg)
                }),
                (0, i.jsx)(o.Spacer, { size: 24 }),
                (0, i.jsx)(o.FormSection, {
                    title: v.intl.string(v.t.GK18KC),
                    titleId: x,
                    children: (0, i.jsx)(f.Z, {
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
    return (0, i.jsx)(I, {
        guildId: t,
        initialData: l,
        benefitTypeInput: p,
        descriptionPlaceholder: v.intl.string(v.t.J8O1Li),
        canSubmit: null != h,
        onSave: function (e) {
            a()(null != h, 'Cannot submit null channel'),
                s({
                    ...e,
                    channelId: h
                });
        },
        transitionState: d,
        onClose: m,
        onDelete: c
    });
}
function j(e) {
    var t;
    let { initialData: n, onSave: l, transitionState: s, onClose: c, onDelete: d, guildId: m } = e,
        [h, g] = r.useState(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ''),
        x = (0, u.Dt)(),
        p = (0, i.jsx)(o.FormSection, {
            title: v.intl.string(v.t.NPOJra),
            titleId: x,
            children: (0, i.jsx)(o.TextArea, {
                placeholder: v.intl.string(v.t.NPOJra),
                value: h,
                rows: 1,
                onChange: function (e) {
                    g(e);
                },
                'aria-labelledby': x
            })
        });
    return (0, i.jsx)(I, {
        guildId: m,
        initialData: n,
        benefitTypeInput: p,
        descriptionPlaceholder: v.intl.string(v.t.ucP4Tk),
        canSubmit: '' !== h,
        onSave: function (e) {
            a()('' !== h, 'Cannot submit empty name'),
                l({
                    ...e,
                    name: h
                });
        },
        transitionState: s,
        onClose: c,
        onDelete: d
    });
}
