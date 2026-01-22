n.d(t, { A: () => S }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(827734),
    o = n(397927),
    l = n(565645),
    c = n(287809),
    u = n(927578),
    d = n(536432),
    f = n(792348),
    p = n(674168),
    _ = n(989799),
    h = n(69217),
    m = n(985018),
    g = n(443669);
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
function A(e) {
    let { onSelect: t } = e,
        [n, s] = i.useState(!1),
        l = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        d = u.Ay.canUseCustomCallSounds(l),
        f = i.useRef(null);
    function E(e) {
        d && (s(!1), null == t || t(e));
    }
    return (0, r.jsx)(o.YNO, {
        targetElementRef: f,
        shouldShow: n,
        position: "left",
        onRequestClose: () => s(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.lGe, {
                children: (0, r.jsx)(_.A, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: E,
                    gridNotice: d ? null : (0, r.jsx)(p.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                h.dT,
                O(b({}, e), {
                    ref: f,
                    onClick: () => {
                        s(!n);
                    },
                    text: m.intl.string(m.t.uOe0Az),
                    children: (0, r.jsx)(o.R2l, {
                        size: "md",
                        color: "currentColor",
                        className: g.Wo,
                    }),
                }),
            ),
    });
}
function v(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, f.A)(t, null),
        i =
            0 === (0, d.wH)()
                ? m.intl.string(m.t.OASXjt)
                : m.intl.formatToPlainString(m.t["/8fYO5"], {
                      emojiName: t.emojiName,
                      soundName: t.name,
                  });
    return (0, r.jsx)(h.dT, {
        onClick: n,
        text: i,
        children: (0, r.jsx)(o.HKD, {
            size: "md",
            color: "currentColor",
            className: g.wg,
        }),
    });
}
function S(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        a = null != t,
        c = null == t ? void 0 : t.emojiId,
        u = null == t ? void 0 : t.emojiName,
        d = a && (null != u || null != c),
        f = (e) =>
            (0, r.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                tag: "span",
                children: e,
            });
    function p() {
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
        className: g.D6,
        children: [
            (0, r.jsxs)("div", {
                className: g.kL,
                children: [
                    d &&
                        (0, r.jsx)(l.A, {
                            emojiId: c,
                            emojiName: u,
                            className: g.Zg,
                        }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        className: g.dj,
                        children: p(),
                    }),
                    a
                        ? (0, r.jsx)(v, { sound: t })
                        : (0, r.jsx)(o.HKD, {
                              size: "md",
                              color: "currentColor",
                              className: g.Gk,
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: g.kL,
                children: [
                    (0, r.jsx)(A, { onSelect: i }),
                    a &&
                        !n &&
                        (0, r.jsx)(h.dT, {
                            onClick: () => i(null),
                            text: m.intl.string(m.t.jmtcGA),
                            children: (0, r.jsx)(o.ucK, {
                                size: "md",
                                color: s.A.unsafe_rawColors.RED_400.css,
                                className: g.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
