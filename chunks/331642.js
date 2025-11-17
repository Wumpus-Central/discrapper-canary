n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(692547),
    s = n(481060),
    l = n(596454),
    c = n(594174),
    u = n(74538),
    d = n(242291),
    f = n(830253),
    _ = n(792165),
    p = n(603074),
    h = n(294206),
    m = n(388032),
    g = n(298879);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { onSelect: t } = e,
        [n, o] = i.useState(!1),
        l = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        d = u.ZP.canUseCustomCallSounds(l),
        f = i.useRef(null);
    function E(e) {
        d && (o(!1), null == t || t(e));
    }
    return (0, r.jsx)(s.yRy, {
        targetElementRef: f,
        shouldShow: n,
        position: "left",
        onRequestClose: () => o(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.VqE, {
                children: (0, r.jsx)(p.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: E,
                    gridNotice: d ? null : (0, r.jsx)(_.o, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                h.hU,
                O(b({}, e), {
                    ref: f,
                    onClick: () => {
                        o(!n);
                    },
                    text: m.intl.string(m.t.uOe0Az),
                    children: (0, r.jsx)(s.vdY, {
                        size: "md",
                        color: "currentColor",
                        className: g.secondaryIcon,
                    }),
                }),
            ),
    });
}
function I(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, f.Z)(t, null),
        i =
            0 === (0, d.pI)()
                ? m.intl.string(m.t.OASXjt)
                : m.intl.formatToPlainString(m.t["/8fYO5"], {
                      emojiName: t.emojiName,
                      soundName: t.name,
                  });
    return (0, r.jsx)(h.hU, {
        onClick: n,
        text: i,
        children: (0, r.jsx)(s.gj8, {
            size: "md",
            color: "currentColor",
            className: g.secondaryIconActive,
        }),
    });
}
function T(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        a = null != t,
        c = null == t ? void 0 : t.emojiId,
        u = null == t ? void 0 : t.emojiName,
        d = a && (null != u || null != c),
        f = (e) =>
            (0, r.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "header-secondary",
                tag: "span",
                children: e,
            });
    function _() {
        return null == t
            ? m.intl.string(m.t.PoWNfe)
            : n
              ? m.intl.format(m.t.B6HU6O, {
                    soundName: t.name,
                    subtextHook: f,
                })
              : t.name;
    }
    return (0, r.jsxs)("div", {
        className: g.soundButtonSettingContainer,
        children: [
            (0, r.jsxs)("div", {
                className: g.container,
                children: [
                    d &&
                        (0, r.jsx)(l.Z, {
                            emojiId: c,
                            emojiName: u,
                            className: g.emoji,
                        }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        className: g.soundText,
                        children: _(),
                    }),
                    a
                        ? (0, r.jsx)(I, { sound: t })
                        : (0, r.jsx)(s.gj8, {
                              size: "md",
                              color: "currentColor",
                              className: g.secondaryIconDisabled,
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: g.container,
                children: [
                    (0, r.jsx)(v, { onSelect: i }),
                    a &&
                        !n &&
                        (0, r.jsx)(h.hU, {
                            onClick: () => i(null),
                            text: m.intl.string(m.t.jmtcGA),
                            children: (0, r.jsx)(s.XHJ, {
                                size: "md",
                                color: o.Z.unsafe_rawColors.RED_400.css,
                                className: g.secondaryIcon,
                            }),
                        }),
                ],
            }),
        ],
    });
}
