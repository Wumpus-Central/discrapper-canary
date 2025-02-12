t.d(i, { default: () => u }), t(47120);
var o = t(200651),
    l = t(192379),
    n = t(481060),
    a = t(787014),
    s = t(907040),
    d = t(946458),
    r = t(185923),
    c = t(388032),
    m = t(148387);
let u = (e) => {
    var i, t, u;
    let { channel: x, onClose: j, transitionState: h } = e,
        [v, b] = l.useState(null !== (u = x.defaultReactionEmoji) && void 0 !== u ? u : null),
        [N, p] = l.useState(!1),
        [k, z] = l.useState(!1),
        _ = (null === (i = x.defaultReactionEmoji) || void 0 === i ? void 0 : i.emojiId) !== (null == v ? void 0 : v.emojiId) || (null === (t = x.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiName) !== (null == v ? void 0 : v.emojiName),
        g = (e) => {
            b(
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
            if (_) {
                p(!0), z(!1);
                try {
                    await (0, a.wk)(x.id, { defaultReactionEmoji: v }), j();
                } catch (e) {
                    z(!0);
                } finally {
                    p(!1);
                }
            }
        };
    return (0, o.jsxs)(n.Y0X, {
        transitionState: h,
        'aria-label': c.intl.string(c.t.XlDE3t),
        children: [
            (0, o.jsx)(n.xBx, {
                separator: !1,
                className: m.modalHeader,
                children: (0, o.jsx)(n.X6q, {
                    variant: 'heading-md/semibold',
                    children: c.intl.string(c.t.XlDE3t)
                })
            }),
            (0, o.jsxs)(n.hzk, {
                children: [
                    (0, o.jsx)(n.Text, {
                        variant: 'text-sm/medium',
                        className: m.subtitle,
                        children: c.intl.string(c.t.lVqhdX)
                    }),
                    (0, o.jsx)(d.Z, { reactionEmoji: v }),
                    (0, o.jsxs)('div', {
                        className: m.buttonRow,
                        children: [
                            (0, o.jsx)(n.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: i } = e;
                                    return (0, o.jsx)(s.Z, {
                                        guildId: null == x ? void 0 : x.guild_id,
                                        closePopout: i,
                                        onSelectEmoji: (e, t) => {
                                            g(e), t && i();
                                        },
                                        pickerIntention: r.Hz.COMMUNITY_CONTENT,
                                        channel: x
                                    });
                                },
                                position: 'right',
                                animation: n.yRy.Animation.NONE,
                                align: 'center',
                                children: (e) =>
                                    (0, o.jsx)(n.zxk, {
                                        ...e,
                                        size: n.zxk.Sizes.SMALL,
                                        onClick: (i) => {
                                            var t;
                                            null === (t = e.onClick) || void 0 === t || t.call(e, i);
                                        },
                                        children: c.intl.string(c.t['59QgaG'])
                                    })
                            }),
                            null != x.defaultReactionEmoji
                                ? (0, o.jsx)(n.zxk, {
                                      className: m.removeButton,
                                      onClick: () => g(null),
                                      size: n.zxk.Sizes.MIN,
                                      look: n.zxk.Looks.LINK,
                                      color: n.zxk.Colors.RED,
                                      children: c.intl.string(c.t.N86XcH)
                                  })
                                : null
                        ]
                    }),
                    k
                        ? (0, o.jsx)('div', {
                              className: m.__invalid_row,
                              children: (0, o.jsx)(n.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-danger',
                                  children: c.intl.string(c.t.F75nNj)
                              })
                          })
                        : null
                ]
            }),
            (0, o.jsxs)(n.mzw, {
                className: m.__invalid_footer,
                children: [
                    (0, o.jsx)(n.zxk, {
                        type: 'submit',
                        color: n.zxk.Colors.BRAND,
                        size: n.zxk.Sizes.SMALL,
                        className: m.button,
                        onClick: E,
                        disabled: !_,
                        submitting: N,
                        autoFocus: !0,
                        children: c.intl.string(c.t.R3BPHx)
                    }),
                    (0, o.jsx)(n.zxk, {
                        color: n.zxk.Colors.PRIMARY,
                        size: n.zxk.Sizes.SMALL,
                        className: m.button,
                        onClick: j,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
