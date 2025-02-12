n.d(t, {
    Z: () => A,
    u: () => T
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    s = n(642128),
    c = n(481060),
    d = n(596454),
    u = n(727637),
    m = n(313201),
    x = n(543241),
    h = n(318766),
    p = n(907040),
    g = n(633302),
    v = n(806966),
    C = n(176354),
    j = n(823379),
    I = n(354459),
    f = n(185923),
    P = n(420212),
    y = n(789239);
let N = f.Hz.CHAT,
    Z = [g.ZP.getByName('thumbsup'), g.ZP.getByName('eyes'), g.ZP.getByName('laughing'), g.ZP.getByName('watermelon'), g.ZP.getByName('fork_and_knife'), g.ZP.getByName('yum')].filter(j.lm);
function T(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: o } = e,
        m = a.useRef(null),
        x = (0, u.Z)(m);
    return (0, l.jsx)('span', {
        ref: m,
        children: (0, l.jsx)(c.zxk, {
            onClick: i,
            look: c.zxk.Looks.BLANK,
            size: c.zxk.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(c.AMe, {
                config: h.u,
                from: { value: 0 },
                to: { value: x ? 1 : 0 },
                children: (e) => {
                    let { value: a } = e;
                    return (0, l.jsx)(s.animated.div, {
                        style: {
                            transform: a.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, l.jsx)(d.Z, {
                            className: r()(y.emoji, o, { [y.emojiItemDisabled]: n }),
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
function E(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: a, onFocus: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t,
            (0, l.jsx)(c.P3F, {
                className: y.dropDownContainer,
                onClick: () => {
                    a(!n), i();
                },
                children: (0, l.jsx)(c.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(y.dropDown, { [y.dropDownOpen]: n })
                })
            })
        ]
    });
}
function A(e) {
    let { channel: t, title: n, closePopout: i, onFocus: s, onSelectEmoji: d, onSelectDisabledEmoji: u, onExpandedToggle: h, emojiSearchProps: g, recentlyUsedEmojis: j, analyticsOverride: A } = e,
        _ = (0, m.Dt)(),
        [S, R] = a.useState(!1),
        k = (0, x.wC)(t.guild_id),
        w = (0, o.uniqBy)([...k, ...Z], 'name')
            .filter(
                (e) =>
                    !C.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: N
                    })
            )
            .slice(0, I.e5);
    null != j && j.length > 0 && w.splice(w.length - 1, 1, j[0]);
    let O = (e) => {
            R(e), null == h || h(e);
        },
        b = (e, t) => {
            if (null == e && t) {
                i();
                return;
            }
            null != e && d(e), O(!t), t && v.kJ.setSearchPlaceholder(null);
        };
    return (0, l.jsxs)(c.VqE, {
        'aria-labelledby': _,
        children: [
            (0, l.jsx)(c.y5t, {
                forceLevel: 2,
                children: (0, l.jsx)(c.nn4, {
                    children: (0, l.jsx)(c.H, {
                        id: _,
                        children: n
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: y.container,
                children: [
                    (0, l.jsx)(p.Z, {
                        analyticsOverride: A,
                        channel: t,
                        className: r()(y.animatedPicker, { [y.animatedPickerTall]: S }),
                        headerClassName: r()(y.emojiPickerHeader, { [y.emojiPickerHeaderExpanded]: S }),
                        closePopout: i,
                        onSelectEmoji: S ? b : () => {},
                        shouldHidePickerActions: !S,
                        wrapper: 'div',
                        pickerIntention: N,
                        searchProps: {
                            ...g,
                            accessory: (0, l.jsx)(E, {
                                otherAccessories: null == g ? void 0 : g.accessory,
                                isEmojiPickerExpanded: S,
                                onSetExpanded: O,
                                onFocus: s
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== P.vn.TAB && (e.key !== P.vn.ENTER || e.shiftKey ? O(!0) : O(!S));
                            }
                        }
                    }),
                    (0, l.jsx)('div', {
                        className: y.slotsContainer,
                        children: (0, l.jsx)('div', {
                            className: r()(y.slots, y.slotsWide),
                            children: w.map((e) => {
                                let n = C.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: f.Hz.CHAT
                                });
                                return (0, l.jsx)(
                                    'div',
                                    {
                                        className: y.slot,
                                        children: (0, l.jsx)(c.DY3, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: y.tooltipContainer,
                                            color: c.ua7.Colors.BRAND,
                                            children: (0, l.jsx)(T, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n ? null == u || u(e) : b(e, !0);
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
