n.d(t, {
    Z: () => x,
    u: () => w,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(666917),
    c = n(681715),
    u = n(481060),
    d = n(596454),
    f = n(313201),
    p = n(104505),
    _ = n(543241),
    m = n(318766),
    h = n(907040),
    g = n(633302),
    E = n(806966),
    b = n(176354),
    y = n(823379),
    O = n(354459),
    v = n(185923),
    S = n(295907),
    I = n(339051);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = v.Hz.CHAT,
    R = [
        g.ZP.getByName("thumbsup"),
        g.ZP.getByName("eyes"),
        g.ZP.getByName("laughing"),
        g.ZP.getByName("watermelon"),
        g.ZP.getByName("fork_and_knife"),
        g.ZP.getByName("yum"),
    ].filter(y.lm);
function w(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: s } = e,
        c = i.useRef(null),
        f = (0, p.X)(c);
    return (0, r.jsx)("span", {
        ref: c,
        children: (0, r.jsx)(u.P3F, {
            onClick: a,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(u.AMe, {
                config: m.u,
                from: { value: 0 },
                to: { value: +!!f },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(l.animated.div, {
                        style: {
                            transform: i.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                        },
                        children: (0, r.jsx)(d.Z, {
                            className: o()(I.emoji, s, { [I.emojiItemDisabled]: n }),
                            emojiId: t.id,
                            emojiName: null == t ? void 0 : t.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
function D(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: i, onFocus: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(u.P3F, {
                className: I.dropDownContainer,
                onClick: () => {
                    i(!n), a();
                },
                children: (0, r.jsx)(u.CJ0, {
                    size: "md",
                    color: "currentColor",
                    className: o()(I.dropDown, { [I.dropDownOpen]: n }),
                }),
            }),
        ],
    });
}
function x(e) {
    let {
            channel: t,
            title: n,
            closePopout: a,
            onFocus: l,
            onSelectEmoji: d,
            onSelectDisabledEmoji: p,
            onExpandedToggle: m,
            emojiSearchProps: g,
            recentlyUsedEmojis: y,
            analyticsOverride: T,
            ref: C,
        } = e,
        x = (0, f.Dt)(),
        [L, j] = i.useState(!1),
        M = (0, _.wC)(t.guild_id),
        k = (0, s.uniqBy)([...M, ...R], "name")
            .filter(
                (e) =>
                    !b.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: P,
                    }),
            )
            .slice(0, O.e5);
    null != y && y.length > 0 && k.splice(k.length - 1, 1, y[0]);
    let U = (e) => {
            j(e), null == m || m(e);
        },
        G = (e) => {
            let { emoji: t, willClose: n } = e;
            if (null == t && n) return void a();
            null != t && d(t), U(!n), n && E.kJ.setSearchPlaceholder(null);
        },
        Z = (e) => {
            null != e && e.key !== S.vn.TAB && (e.key !== S.vn.ENTER || e.shiftKey ? U(!0) : U(!L));
        };
    return (0, r.jsxs)(u.VqE, {
        "aria-labelledby": x,
        ref: C,
        children: [
            (0, r.jsx)(u.y5t, {
                forceLevel: 2,
                children: (0, r.jsx)(u.nn4, {
                    children: (0, r.jsx)(u.H, {
                        id: x,
                        children: n,
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: I.container,
                children: [
                    (0, r.jsx)(h.Z, {
                        analyticsOverride: T,
                        channel: t,
                        className: o()(I.animatedPicker, { [I.animatedPickerTall]: L }),
                        headerClassName: o()(I.emojiPickerHeader, { [I.emojiPickerHeaderExpanded]: L }),
                        closePopout: a,
                        onSelectEmoji: L ? G : () => {},
                        shouldHidePickerActions: !L,
                        wrapper: "div",
                        pickerIntention: P,
                        searchProps: N(A({}, g), {
                            accessory: (0, r.jsx)(D, {
                                otherAccessories: null == g ? void 0 : g.accessory,
                                isEmojiPickerExpanded: L,
                                onSetExpanded: U,
                                onFocus: l,
                            }),
                            onKeyDown: Z,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: I.slotsContainer,
                        children: (0, r.jsx)("div", {
                            className: o()(I.slots, I.slotsWide),
                            children: k.map((e) => {
                                let n = b.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: v.Hz.CHAT,
                                });
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        className: I.slot,
                                        children: (0, r.jsx)(c.u, {
                                            text: e.name,
                                            position: "top",
                                            asContainer: !0,
                                            children: (0, r.jsx)(w, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n
                                                        ? null == p || p(e)
                                                        : G({
                                                              emoji: e,
                                                              willClose: !0,
                                                          });
                                                },
                                            }),
                                        }),
                                    },
                                    e.name,
                                );
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
