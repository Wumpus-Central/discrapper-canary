t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120),
    t(757143);
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(596454),
    o = t(907040),
    s = t(981631),
    u = t(185923),
    c = t(388032),
    d = t(918491);
let m = {
        section: s.jXE.MESSAGE_CONFETTI_EMOJI_PICKER_POPOUT,
        openPopoutType: 'message_confetti_emoji_picker'
    },
    g = u.Hz.MESSAGE_CONFETTI;
function f(e) {
    let { channel: n, setEmojiConfetti: t, emojiConfetti: s } = e,
        [u, f] = l.useState(!1),
        h = l.useCallback(
            (e) => {
                t(e), f(!1);
            },
            [t]
        ),
        { emojiName: E, selectionText: I } = l.useMemo(
            () =>
                null == s
                    ? {
                          emojiName: null,
                          selectionText: c.intl.string(c.t.KgK5qq)
                      }
                    : {
                          emojiName: null == s.id ? s.optionallyDiverseSequence : s.name,
                          selectionText: s.name.replace(/_/g, ' ')
                      },
            [s]
        );
    return (0, i.jsx)(r.Popout, {
        shouldShow: u,
        position: 'left',
        align: 'top',
        autoInvert: !1,
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.Z, {
                analyticsOverride: m,
                channel: n,
                closePopout: t,
                onSelectEmoji: h,
                pickerIntention: g
            });
        },
        children: () =>
            (0, i.jsx)(r.Clickable, {
                role: 'button',
                onClick: () => f(!u),
                className: d.select,
                children: (0, i.jsxs)('div', {
                    className: d.innerSelect,
                    children: [
                        (0, i.jsxs)('div', {
                            className: d.emojiWrapper,
                            children: [
                                null == s
                                    ? (0, i.jsx)(r.ReactionIcon, {
                                          color: 'currentColor',
                                          size: 'custom',
                                          className: d.emoji
                                      })
                                    : (0, i.jsx)(a.Z, {
                                          animated: !1,
                                          emojiId: s.id,
                                          emojiName: E,
                                          className: d.emoji
                                      }),
                                (0, i.jsx)(r.Text, {
                                    color: 'interactive-active',
                                    variant: 'text-sm/normal',
                                    children: I
                                })
                            ]
                        }),
                        u
                            ? (0, i.jsx)(r.ChevronSmallUpIcon, {
                                  color: 'currentColor',
                                  size: 'custom',
                                  className: d.chevron
                              })
                            : (0, i.jsx)(r.ChevronSmallDownIcon, {
                                  color: 'currentColor',
                                  size: 'custom',
                                  className: d.chevron
                              })
                    ]
                })
            })
    });
}
