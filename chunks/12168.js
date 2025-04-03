n.d(t, {
    Z: () => w,
    u: () => I
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(642128),
    c = n(481060),
    u = n(596454),
    d = n(727637),
    m = n(313201),
    p = n(543241),
    h = n(318766),
    f = n(907040),
    g = n(633302),
    x = n(806966),
    v = n(176354),
    y = n(823379),
    j = n(354459),
    P = n(185923),
    O = n(420212),
    b = n(105085);
let C = P.Hz.CHAT,
    N = [g.ZP.getByName('thumbsup'), g.ZP.getByName('eyes'), g.ZP.getByName('laughing'), g.ZP.getByName('watermelon'), g.ZP.getByName('fork_and_knife'), g.ZP.getByName('yum')].filter(y.lm);
function I(e) {
    let { emoji: t, isDisabled: n = !1, onClick: l, className: o } = e,
        m = a.useRef(null),
        p = (0, d.Z)(m);
    return (0, r.jsx)('span', {
        ref: m,
        children: (0, r.jsx)(c.zxk, {
            onClick: l,
            look: c.zxk.Looks.BLANK,
            size: c.zxk.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(c.AMe, {
                config: h.u,
                from: { value: 0 },
                to: { value: +!!p },
                children: (e) => {
                    let { value: a } = e;
                    return (0, r.jsx)(s.animated.div, {
                        style: {
                            transform: a.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, r.jsx)(u.Z, {
                            className: i()(b.emoji, o, { [b.emojiItemDisabled]: n }),
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
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: a, onFocus: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(c.P3F, {
                className: b.dropDownContainer,
                onClick: () => {
                    a(!n), l();
                },
                children: (0, r.jsx)(c.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: i()(b.dropDown, { [b.dropDownOpen]: n })
                })
            })
        ]
    });
}
function w(e) {
    var t, n;
    let { channel: l, title: s, closePopout: u, onFocus: d, onSelectEmoji: h, onSelectDisabledEmoji: g, onExpandedToggle: y, emojiSearchProps: w, recentlyUsedEmojis: Z, analyticsOverride: S } = e,
        T = (0, m.Dt)(),
        [A, _] = a.useState(!1),
        k = (0, p.wC)(l.guild_id),
        R = (0, o.uniqBy)([...k, ...N], 'name')
            .filter(
                (e) =>
                    !v.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: l,
                        intention: C
                    })
            )
            .slice(0, j.e5);
    null != Z && Z.length > 0 && R.splice(R.length - 1, 1, Z[0]);
    let M = (e) => {
            _(e), null == y || y(e);
        },
        D = (e, t) => {
            if (null == e && t) return void u();
            null != e && h(e), M(!t), t && x.kJ.setSearchPlaceholder(null);
        };
    return (0, r.jsxs)(c.VqE, {
        'aria-labelledby': T,
        children: [
            (0, r.jsx)(c.y5t, {
                forceLevel: 2,
                children: (0, r.jsx)(c.nn4, {
                    children: (0, r.jsx)(c.H, {
                        id: T,
                        children: s
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: b.container,
                children: [
                    (0, r.jsx)(f.Z, {
                        analyticsOverride: S,
                        channel: l,
                        className: i()(b.animatedPicker, { [b.animatedPickerTall]: A }),
                        headerClassName: i()(b.emojiPickerHeader, { [b.emojiPickerHeaderExpanded]: A }),
                        closePopout: u,
                        onSelectEmoji: A ? D : () => {},
                        shouldHidePickerActions: !A,
                        wrapper: 'div',
                        pickerIntention: C,
                        searchProps:
                            ((t = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, w)),
                            (n = n =
                                {
                                    accessory: (0, r.jsx)(E, {
                                        otherAccessories: null == w ? void 0 : w.accessory,
                                        isEmojiPickerExpanded: A,
                                        onSetExpanded: M,
                                        onFocus: d
                                    }),
                                    onKeyDown: (e) => {
                                        null != e && e.key !== O.vn.TAB && (e.key !== O.vn.ENTER || e.shiftKey ? M(!0) : M(!A));
                                    }
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                    }),
                    (0, r.jsx)('div', {
                        className: b.slotsContainer,
                        children: (0, r.jsx)('div', {
                            className: i()(b.slots, b.slotsWide),
                            children: R.map((e) => {
                                let t = v.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: l,
                                    intention: P.Hz.CHAT
                                });
                                return (0, r.jsx)(
                                    'div',
                                    {
                                        className: b.slot,
                                        children: (0, r.jsx)(c.DY3, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: b.tooltipContainer,
                                            color: c.ua7.Colors.BRAND,
                                            children: (0, r.jsx)(I, {
                                                emoji: e,
                                                isDisabled: t,
                                                onClick: () => {
                                                    t ? null == g || g(e) : D(e, !0);
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
