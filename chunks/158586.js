o.r(t), o(47120);
var i = o(200651),
    n = o(192379),
    l = o(481060),
    a = o(787014),
    s = o(907040),
    d = o(946458),
    r = o(185923),
    c = o(388032),
    m = o(581898);
t.default = (e) => {
    var t, o, u;
    let { channel: j, onClose: h, transitionState: x } = e,
        [v, N] = n.useState(null !== (u = j.defaultReactionEmoji) && void 0 !== u ? u : null),
        [b, p] = n.useState(!1),
        [g, B] = n.useState(!1),
        _ = (null === (t = j.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId) !== (null == v ? void 0 : v.emojiId) || (null === (o = j.defaultReactionEmoji) || void 0 === o ? void 0 : o.emojiName) !== (null == v ? void 0 : v.emojiName),
        f = (e) => {
            N(
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
            if (!!_) {
                p(!0), B(!1);
                try {
                    await (0, a.wk)(j.id, { defaultReactionEmoji: v }), h();
                } catch (e) {
                    B(!0);
                } finally {
                    p(!1);
                }
            }
        };
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: x,
        'aria-label': c.intl.string(c.t.XlDE3t),
        children: [
            (0, i.jsx)(l.ModalHeader, {
                separator: !1,
                className: m.modalHeader,
                children: (0, i.jsx)(l.Heading, {
                    variant: 'heading-md/semibold',
                    children: c.intl.string(c.t.XlDE3t)
                })
            }),
            (0, i.jsxs)(l.ModalContent, {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        className: m.subtitle,
                        children: c.intl.string(c.t.lVqhdX)
                    }),
                    (0, i.jsx)(d.Z, { reactionEmoji: v }),
                    (0, i.jsxs)('div', {
                        className: m.buttonRow,
                        children: [
                            (0, i.jsx)(l.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(s.Z, {
                                        guildId: null == j ? void 0 : j.guild_id,
                                        closePopout: t,
                                        onSelectEmoji: (e, o) => {
                                            f(e), o && t();
                                        },
                                        pickerIntention: r.Hz.COMMUNITY_CONTENT,
                                        channel: j
                                    });
                                },
                                position: 'right',
                                animation: l.Popout.Animation.NONE,
                                align: 'center',
                                children: (e) =>
                                    (0, i.jsx)(l.Button, {
                                        ...e,
                                        size: l.Button.Sizes.SMALL,
                                        onClick: (t) => {
                                            var o;
                                            null === (o = e.onClick) || void 0 === o || o.call(e, t);
                                        },
                                        children: c.intl.string(c.t['59QgaG'])
                                    })
                            }),
                            null != j.defaultReactionEmoji
                                ? (0, i.jsx)(l.Button, {
                                      className: m.removeButton,
                                      onClick: () => f(null),
                                      size: l.Button.Sizes.MIN,
                                      look: l.Button.Looks.LINK,
                                      color: l.Button.Colors.RED,
                                      children: c.intl.string(c.t.N86XcH)
                                  })
                                : null
                        ]
                    }),
                    g
                        ? (0, i.jsx)('div', {
                              className: m.__invalid_row,
                              children: (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-danger',
                                  children: c.intl.string(c.t.F75nNj)
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(l.ModalFooter, {
                className: m.__invalid_footer,
                children: [
                    (0, i.jsx)(l.Button, {
                        type: 'submit',
                        color: l.Button.Colors.BRAND,
                        size: l.Button.Sizes.SMALL,
                        className: m.button,
                        onClick: E,
                        disabled: !_,
                        submitting: b,
                        autoFocus: !0,
                        children: c.intl.string(c.t.R3BPHx)
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        size: l.Button.Sizes.SMALL,
                        className: m.button,
                        onClick: h,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
