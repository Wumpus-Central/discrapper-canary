(n.d(t, {
    Z: () => L,
    u: () => w
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(264738),
    c = n(755721),
    u = n(481060),
    d = n(596454),
    f = n(727637),
    _ = n(313201),
    p = n(543241),
    h = n(318766),
    m = n(907040),
    g = n(633302),
    E = n(806966),
    b = n(176354),
    y = n(823379),
    O = n(354459),
    v = n(185923),
    I = n(420212),
    T = n(105085);
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
function A(e) {
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
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function C(e, t) {
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
let R = v.Hz.CHAT,
    P = [g.ZP.getByName('thumbsup'), g.ZP.getByName('eyes'), g.ZP.getByName('laughing'), g.ZP.getByName('watermelon'), g.ZP.getByName('fork_and_knife'), g.ZP.getByName('yum')].filter(y.lm);
function w(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: s } = e,
        _ = i.useRef(null),
        p = (0, f.Z)(_);
    return (0, r.jsx)('span', {
        ref: _,
        children: (0, r.jsx)(c.zx, {
            onClick: a,
            look: c.zx.Looks.BLANK,
            size: c.zx.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(u.AMe, {
                config: h.u,
                from: { value: 0 },
                to: { value: +!!p },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(l.animated.div, {
                        style: {
                            transform: i.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, r.jsx)(d.Z, {
                            className: o()(T.emoji, s, { [T.emojiItemDisabled]: n }),
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
function D(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: i, onFocus: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(u.P3F, {
                className: T.dropDownContainer,
                onClick: () => {
                    (i(!n), a());
                },
                children: (0, r.jsx)(u.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: o()(T.dropDown, { [T.dropDownOpen]: n })
                })
            })
        ]
    });
}
function L(e) {
    let { channel: t, title: n, closePopout: a, onFocus: l, onSelectEmoji: c, onSelectDisabledEmoji: d, onExpandedToggle: f, emojiSearchProps: h, recentlyUsedEmojis: g, analyticsOverride: y, ref: S } = e,
        N = (0, _.Dt)(),
        [L, x] = i.useState(!1),
        k = (0, p.wC)(t.guild_id),
        M = (0, s.uniqBy)([...k, ...P], 'name')
            .filter(
                (e) =>
                    !b.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: R
                    })
            )
            .slice(0, O.e5);
    null != g && g.length > 0 && M.splice(M.length - 1, 1, g[0]);
    let j = (e) => {
            (x(e), null == f || f(e));
        },
        U = (e) => {
            let { emoji: t, willClose: n } = e;
            if (null == t && n) return void a();
            (null != t && c(t), j(!n), n && E.kJ.setSearchPlaceholder(null));
        },
        G = (e) => {
            null != e && e.key !== I.vn.TAB && (e.key !== I.vn.ENTER || e.shiftKey ? j(!0) : j(!L));
        };
    return (0, r.jsxs)(u.VqE, {
        'aria-labelledby': N,
        ref: S,
        children: [
            (0, r.jsx)(u.y5t, {
                forceLevel: 2,
                children: (0, r.jsx)(u.nn4, {
                    children: (0, r.jsx)(u.H, {
                        id: N,
                        children: n
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: T.container,
                children: [
                    (0, r.jsx)(m.Z, {
                        analyticsOverride: y,
                        channel: t,
                        className: o()(T.animatedPicker, { [T.animatedPickerTall]: L }),
                        headerClassName: o()(T.emojiPickerHeader, { [T.emojiPickerHeaderExpanded]: L }),
                        closePopout: a,
                        onSelectEmoji: L ? U : () => {},
                        shouldHidePickerActions: !L,
                        wrapper: 'div',
                        pickerIntention: R,
                        searchProps: C(A({}, h), {
                            accessory: (0, r.jsx)(D, {
                                otherAccessories: null == h ? void 0 : h.accessory,
                                isEmojiPickerExpanded: L,
                                onSetExpanded: j,
                                onFocus: l
                            }),
                            onKeyDown: G
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: T.slotsContainer,
                        children: (0, r.jsx)('div', {
                            className: o()(T.slots, T.slotsWide),
                            children: M.map((e) => {
                                let n = b.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: v.Hz.CHAT
                                });
                                return (0, r.jsx)(
                                    'div',
                                    {
                                        className: T.slot,
                                        children: (0, r.jsx)(u.DY3, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: T.tooltipContainer,
                                            color: u.ua7.Colors.BRAND,
                                            children: (0, r.jsx)(w, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n
                                                        ? null == d || d(e)
                                                        : U({
                                                              emoji: e,
                                                              willClose: !0
                                                          });
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
