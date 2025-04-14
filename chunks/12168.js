n.d(t, {
    Z: () => D,
    u: () => P
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(200100),
    c = n(481060),
    u = n(596454),
    d = n(727637),
    f = n(313201),
    _ = n(543241),
    p = n(318766),
    h = n(907040),
    m = n(633302),
    g = n(806966),
    E = n(176354),
    b = n(823379),
    y = n(354459),
    v = n(185923),
    O = n(420212),
    I = n(105085);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = v.Hz.CHAT,
    R = [m.ZP.getByName('thumbsup'), m.ZP.getByName('eyes'), m.ZP.getByName('laughing'), m.ZP.getByName('watermelon'), m.ZP.getByName('fork_and_knife'), m.ZP.getByName('yum')].filter(b.lm);
function P(e) {
    let { emoji: t, isDisabled: n = !1, onClick: o, className: s } = e,
        f = i.useRef(null),
        _ = (0, d.Z)(f);
    return (0, r.jsx)('span', {
        ref: f,
        children: (0, r.jsx)(c.zxk, {
            onClick: o,
            look: c.zxk.Looks.BLANK,
            size: c.zxk.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(c.AMe, {
                config: p.u,
                from: { value: 0 },
                to: { value: +!!_ },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(l.animated.div, {
                        style: {
                            transform: i.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, r.jsx)(u.Z, {
                            className: a()(I.emoji, s, { [I.emojiItemDisabled]: n }),
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
function w(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: i, onFocus: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(c.P3F, {
                className: I.dropDownContainer,
                onClick: () => {
                    i(!n), o();
                },
                children: (0, r.jsx)(c.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: a()(I.dropDown, { [I.dropDownOpen]: n })
                })
            })
        ]
    });
}
function D(e) {
    let { channel: t, title: n, closePopout: o, onFocus: l, onSelectEmoji: u, onSelectDisabledEmoji: d, onExpandedToggle: p, emojiSearchProps: m, recentlyUsedEmojis: b, analyticsOverride: S } = e,
        N = (0, f.Dt)(),
        [D, L] = i.useState(!1),
        x = (0, _.wC)(t.guild_id),
        M = (0, s.uniqBy)([...x, ...R], 'name')
            .filter(
                (e) =>
                    !E.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: C
                    })
            )
            .slice(0, y.e5);
    null != b && b.length > 0 && M.splice(M.length - 1, 1, b[0]);
    let k = (e) => {
            L(e), null == p || p(e);
        },
        j = (e, t) => {
            if (null == e && t) return void o();
            null != e && u(e), k(!t), t && g.kJ.setSearchPlaceholder(null);
        },
        U = (e) => {
            null != e && e.key !== O.vn.TAB && (e.key !== O.vn.ENTER || e.shiftKey ? k(!0) : k(!D));
        };
    return (0, r.jsxs)(c.VqE, {
        'aria-labelledby': N,
        children: [
            (0, r.jsx)(c.y5t, {
                forceLevel: 2,
                children: (0, r.jsx)(c.nn4, {
                    children: (0, r.jsx)(c.H, {
                        id: N,
                        children: n
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: I.container,
                children: [
                    (0, r.jsx)(h.Z, {
                        analyticsOverride: S,
                        channel: t,
                        className: a()(I.animatedPicker, { [I.animatedPickerTall]: D }),
                        headerClassName: a()(I.emojiPickerHeader, { [I.emojiPickerHeaderExpanded]: D }),
                        closePopout: o,
                        onSelectEmoji: D ? j : () => {},
                        shouldHidePickerActions: !D,
                        wrapper: 'div',
                        pickerIntention: C,
                        searchProps: A(T({}, m), {
                            accessory: (0, r.jsx)(w, {
                                otherAccessories: null == m ? void 0 : m.accessory,
                                isEmojiPickerExpanded: D,
                                onSetExpanded: k,
                                onFocus: l
                            }),
                            onKeyDown: U
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: I.slotsContainer,
                        children: (0, r.jsx)('div', {
                            className: a()(I.slots, I.slotsWide),
                            children: M.map((e) => {
                                let n = E.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: v.Hz.CHAT
                                });
                                return (0, r.jsx)(
                                    'div',
                                    {
                                        className: I.slot,
                                        children: (0, r.jsx)(c.DY3, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: I.tooltipContainer,
                                            color: c.ua7.Colors.BRAND,
                                            children: (0, r.jsx)(P, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n ? null == d || d(e) : j(e, !0);
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
