n.d(t, {
    Z: function () {
        return _;
    },
    u: function () {
        return N;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    s = n(666912),
    c = n(481060),
    u = n(596454),
    d = n(727637),
    m = n(313201),
    x = n(543241),
    h = n(318766),
    p = n(907040),
    C = n(633302),
    v = n(806966),
    g = n(176354),
    f = n(823379),
    I = n(354459),
    j = n(185923),
    Z = n(420212),
    P = n(191315);
let L = j.Hz.CHAT,
    T = [C.ZP.getByName('thumbsup'), C.ZP.getByName('eyes'), C.ZP.getByName('laughing'), C.ZP.getByName('watermelon'), C.ZP.getByName('fork_and_knife'), C.ZP.getByName('yum')].filter(f.lm);
function N(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: o } = e,
        m = a.useRef(null),
        x = (0, d.Z)(m);
    return (0, l.jsx)('span', {
        ref: m,
        children: (0, l.jsx)(c.Button, {
            onClick: i,
            look: c.Button.Looks.BLANK,
            size: c.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(c.Spring, {
                config: h.u,
                from: { value: 0 },
                to: { value: x ? 1 : 0 },
                children: (e) => {
                    let { value: a } = e;
                    return (0, l.jsx)(s.animated.div, {
                        style: {
                            transform: a.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, l.jsx)(u.Z, {
                            className: r()(P.emoji, o, { [P.emojiItemDisabled]: n }),
                            emojiId: t.id,
                            emojiName: null == t ? void 0 : t.surrogates,
                            animated: t.animated
                        })
                    });
                }
            })
        })
    });
}
function y(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: a, onFocus: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t,
            (0, l.jsx)(c.Clickable, {
                className: P.dropDownContainer,
                onClick: () => {
                    a(!n), i();
                },
                children: (0, l.jsx)(c.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(P.dropDown, { [P.dropDownOpen]: n })
                })
            })
        ]
    });
}
function _(e) {
    let { channel: t, title: n, closePopout: i, onFocus: s, onSelectEmoji: u, onSelectDisabledEmoji: d, onExpandedToggle: h, emojiSearchProps: C, recentlyUsedEmojis: f, analyticsOverride: _ } = e,
        A = (0, m.Dt)(),
        [E, S] = a.useState(!1),
        R = (0, x.wC)(t.guild_id),
        M = (0, o.uniqBy)([...R, ...T], 'name')
            .filter(
                (e) =>
                    !g.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: L
                    })
            )
            .slice(0, I.e5);
    null != f && f.length > 0 && M.splice(M.length - 1, 1, f[0]);
    let k = (e) => {
            S(e), null == h || h(e);
        },
        w = (e, t) => {
            if (null == e && t) {
                i();
                return;
            }
            null != e && u(e);
            k(!t), t && v.kJ.setSearchPlaceholder(null);
        };
    return (0, l.jsxs)(c.Dialog, {
        'aria-labelledby': A,
        children: [
            (0, l.jsx)(c.HeadingLevel, {
                forceLevel: 2,
                children: (0, l.jsx)(c.HiddenVisually, {
                    children: (0, l.jsx)(c.H, {
                        id: A,
                        children: n
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: P.container,
                children: [
                    (0, l.jsx)(p.Z, {
                        analyticsOverride: _,
                        channel: t,
                        className: r()(P.animatedPicker, { [P.animatedPickerTall]: E }),
                        headerClassName: r()(P.emojiPickerHeader, { [P.emojiPickerHeaderExpanded]: E }),
                        closePopout: i,
                        onSelectEmoji: E ? w : () => {},
                        shouldHidePickerActions: !E,
                        wrapper: 'div',
                        pickerIntention: L,
                        searchProps: {
                            ...C,
                            accessory: (0, l.jsx)(y, {
                                otherAccessories: null == C ? void 0 : C.accessory,
                                isEmojiPickerExpanded: E,
                                onSetExpanded: k,
                                onFocus: s
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== Z.vn.TAB && (e.key !== Z.vn.ENTER || e.shiftKey ? k(!0) : k(!E));
                            }
                        }
                    }),
                    (0, l.jsx)('div', {
                        className: P.slotsContainer,
                        children: (0, l.jsx)('div', {
                            className: r()(P.slots, P.slotsWide),
                            children: M.map((e) => {
                                let n = g.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: j.Hz.CHAT
                                });
                                return (0, l.jsx)(
                                    'div',
                                    {
                                        className: P.slot,
                                        children: (0, l.jsx)(c.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: P.tooltipContainer,
                                            color: c.Tooltip.Colors.BRAND,
                                            children: (0, l.jsx)(N, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n ? null == d || d(e) : w(e, !0);
                                                }
                                            })
                                        })
                                    },
                                    e.name
                                );
                            })
                        })
                    })
                ]
            })
        ]
    });
}
