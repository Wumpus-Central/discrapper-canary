l.d(t, { Z: () => h });
var n = l(54381),
    i = l(473749),
    r = l(442837),
    a = l(481060),
    s = l(596454),
    o = l(225433),
    u = l(104505),
    d = l(318766),
    c = l(907040),
    m = l(984933),
    g = l(903749),
    f = l(185923),
    p = l(388032),
    j = l(74139);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function h(e) {
    let {
            className: t,
            guildId: l,
            error: h,
            emojiId: b,
            emojiName: y,
            isRequiredField: E = !0,
            shouldUpdateBothEmojiFields: S = !1,
            setEmojiId: w,
            setEmojiName: C,
        } = e,
        I = (0, g.Z)({
            emojiId: b,
            emojiName: y,
        }),
        N = (0, r.e7)([m.ZP], () => (null != l ? m.ZP.getDefaultChannel(l) : null)),
        O = i.useRef(null),
        { isHoveringOrFocusing: k } = (0, u.Z)(O),
        P = () => {
            C(void 0), w(void 0);
        },
        D = (e) => {
            e.stopPropagation(), P();
        },
        Z = i.useMemo(() => {
            let e = null != b && "" !== b,
                t = null != y && "" !== y,
                l = null != I && "" !== I,
                n = t && !Number.isNaN(parseInt(y)) && !l && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: l,
                isDeletedCustomEmoji: n,
            };
        }, [b, y, I]),
        T = !Z.isDeletedCustomEmoji && Z.hasEmojiDisplayName;
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(a.gNt, {
            required: E,
            label: p.intl.string(p.t["3BQmiC"]),
            errorMessage: null != h ? h : void 0,
            children: (0, n.jsx)(a.yRy, {
                targetElementRef: O,
                animation: a.yRy.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(c.Z, {
                        closePopout: t,
                        pickerIntention: f.Hz.SOUNDBOARD,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: l, willClose: n } = e,
                                i = (null == l ? void 0 : l.id) == null;
                            P(),
                                i
                                    ? C(null == l ? void 0 : l.optionallyDiverseSequence)
                                    : (S && C(null == l ? void 0 : l.name), w(null == l ? void 0 : l.id)),
                                n && t();
                        },
                        guildId: l,
                        channel: N,
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsxs)(
                        a.UPk,
                        x(v({}, e), {
                            className: j.emojiInput,
                            ref: O,
                            children: [
                                (0, n.jsx)(d.Z, {
                                    active: l,
                                    tabIndex: 0,
                                    renderButtonContents:
                                        !Z.isDeletedCustomEmoji && (Z.hasEmojiId || Z.hasEmojiName)
                                            ? () =>
                                                  (0, n.jsx)(s.Z, {
                                                      emojiName: y,
                                                      emojiId: b,
                                                  })
                                            : null,
                                }),
                                (0, n.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    lineClamp: 1,
                                    color: T ? "text-default" : "text-muted",
                                    children: T ? ":".concat(I, ":") : p.intl.string(p.t.QTK0TJ),
                                }),
                                T && k && (0, n.jsx)(o.Z, x(v({}, e), { onClick: D })),
                            ],
                        }),
                    );
                },
            }),
        }),
    });
}
