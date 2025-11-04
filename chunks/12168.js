n.d(t, {
    Z: () => D,
    u: () => P,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(358458),
    c = n(481060),
    u = n(596454),
    d = n(313201),
    f = n(104505),
    _ = n(543241),
    p = n(318766),
    h = n(907040),
    m = n(633302),
    g = n(806966),
    E = n(176354),
    b = n(823379),
    y = n(354459),
    O = n(185923),
    v = n(295907),
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
function S(e) {
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
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = O.Hz.CHAT,
    R = [
        m.ZP.getByName("thumbsup"),
        m.ZP.getByName("eyes"),
        m.ZP.getByName("laughing"),
        m.ZP.getByName("watermelon"),
        m.ZP.getByName("fork_and_knife"),
        m.ZP.getByName("yum"),
    ].filter(b.lm);
function P(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: s } = e,
        d = i.useRef(null),
        _ = (0, f.X)(d);
    return (0, r.jsx)("span", {
        ref: d,
        children: (0, r.jsx)(c.P3F, {
            onClick: a,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(c.AMe, {
                config: p.u,
                from: { value: 0 },
                to: { value: +!!_ },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(l.animated.div, {
                        style: {
                            transform: i.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                        },
                        children: (0, r.jsx)(u.Z, {
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
function w(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: i, onFocus: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(c.P3F, {
                className: I.dropDownContainer,
                onClick: () => {
                    i(!n), a();
                },
                children: (0, r.jsx)(c.CJ0, {
                    size: "md",
                    color: "currentColor",
                    className: o()(I.dropDown, { [I.dropDownOpen]: n }),
                }),
            }),
        ],
    });
}
function D(e) {
    let {
            channel: t,
            title: n,
            closePopout: a,
            onFocus: l,
            onSelectEmoji: u,
            onSelectDisabledEmoji: f,
            onExpandedToggle: p,
            emojiSearchProps: m,
            recentlyUsedEmojis: b,
            analyticsOverride: T,
            ref: A,
        } = e,
        D = (0, d.Dt)(),
        [x, L] = i.useState(!1),
        M = (0, _.wC)(t.guild_id),
        j = (0, s.uniqBy)([...M, ...R], "name")
            .filter(
                (e) =>
                    !E.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: N,
                    }),
            )
            .slice(0, y.e5);
    null != b && b.length > 0 && j.splice(j.length - 1, 1, b[0]);
    let k = (e) => {
            L(e), null == p || p(e);
        },
        U = (e) => {
            let { emoji: t, willClose: n } = e;
            if (null == t && n) return void a();
            null != t && u(t), k(!n), n && g.kJ.setSearchPlaceholder(null);
        },
        G = (e) => {
            null != e && e.key !== v.vn.TAB && (e.key !== v.vn.ENTER || e.shiftKey ? k(!0) : k(!x));
        };
    return (0, r.jsxs)(c.VqE, {
        "aria-labelledby": D,
        ref: A,
        children: [
            (0, r.jsx)(c.y5t, {
                forceLevel: 2,
                children: (0, r.jsx)(c.nn4, {
                    children: (0, r.jsx)(c.H, {
                        id: D,
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
                        className: o()(I.animatedPicker, { [I.animatedPickerTall]: x }),
                        headerClassName: o()(I.emojiPickerHeader, { [I.emojiPickerHeaderExpanded]: x }),
                        closePopout: a,
                        onSelectEmoji: x ? U : () => {},
                        shouldHidePickerActions: !x,
                        wrapper: "div",
                        pickerIntention: N,
                        searchProps: C(S({}, m), {
                            accessory: (0, r.jsx)(w, {
                                otherAccessories: null == m ? void 0 : m.accessory,
                                isEmojiPickerExpanded: x,
                                onSetExpanded: k,
                                onFocus: l,
                            }),
                            onKeyDown: G,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: I.slotsContainer,
                        children: (0, r.jsx)("div", {
                            className: o()(I.slots, I.slotsWide),
                            children: j.map((e) => {
                                let n = E.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: O.Hz.CHAT,
                                });
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        className: I.slot,
                                        children: (0, r.jsx)(c.jSM, {
                                            text: e.name,
                                            position: "top",
                                            "aria-label": e.name,
                                            tooltipClassName: I.tooltipContainer,
                                            color: c.aML.Colors.BRAND,
                                            children: (0, r.jsx)(P, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n
                                                        ? null == f || f(e)
                                                        : U({
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
