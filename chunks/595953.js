n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(827734),
    a = n(397927),
    o = n(565645),
    c = n(287809),
    d = n(927578),
    u = n(536432),
    _ = n(792348),
    p = n(674168),
    m = n(989799),
    g = n(69217),
    A = n(985018),
    f = n(443669);

function h(e) {
    let { onSelect: t } = e,
        [n, s] = i.useState(!1),
        o = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        u = d.Ay.canUseCustomCallSounds(o),
        _ = i.useRef(null);

    function h(e) {
        u && (s(!1), null == t || t(e));
    }
    return (0, r.jsx)(a.YNO, {
        targetElementRef: _,
        shouldShow: n,
        position: "left",
        onRequestClose: () => s(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.lGe, {
                children: (0, r.jsx)(m.A, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: h,
                    gridNotice: u ? null : (0, r.jsx)(p.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                g.dT,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        ref: _,
                        onClick: () => {
                            s(!n);
                        },
                        text: A.intl.string(A.t.uOe0Az),
                        children: (0, r.jsx)(a.R2l, {
                            size: "md",
                            color: "currentColor",
                            className: f.Wo,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t),
            );
        },
    });
}

function b(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, _.A)(t, null),
        i =
            0 === (0, u.wH)()
                ? A.intl.string(A.t.OASXjt)
                : A.intl.formatToPlainString(A.t["/8fYO5"], {
                      emojiName: t.emojiName,
                      soundName: t.name,
                  });
    return (0, r.jsx)(g.dT, {
        onClick: n,
        text: i,
        children: (0, r.jsx)(a.HKD, {
            size: "md",
            color: "currentColor",
            className: f.wg,
        }),
    });
}

function E(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        c = null == t ? void 0 : t.emojiId,
        d = null == t ? void 0 : t.emojiName,
        u = l && (null != d || null != c);
    return (0, r.jsxs)("div", {
        className: f.D6,
        children: [
            (0, r.jsxs)("div", {
                className: f.kL,
                children: [
                    u &&
                        (0, r.jsx)(o.A, {
                            emojiId: c,
                            emojiName: d,
                            className: f.Zg,
                        }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        className: f.dj,
                        children:
                            null == t
                                ? A.intl.string(A.t.PoWNfe)
                                : n
                                  ? A.intl.format(A.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, r.jsx)(a.Text, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, r.jsx)(b, {
                              sound: t,
                          })
                        : (0, r.jsx)(a.HKD, {
                              size: "md",
                              color: "currentColor",
                              className: f.Gk,
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: f.kL,
                children: [
                    (0, r.jsx)(h, {
                        onSelect: i,
                    }),
                    l &&
                        !n &&
                        (0, r.jsx)(g.dT, {
                            onClick: () => i(null),
                            text: A.intl.string(A.t.jmtcGA),
                            children: (0, r.jsx)(a.ucK, {
                                size: "md",
                                color: s.A.unsafe_rawColors.RED_400.css,
                                className: f.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
