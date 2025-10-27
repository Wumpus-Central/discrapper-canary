t.d(n, { Z: () => v });
var a = t(951288),
    l = t(647438),
    r = t(442837),
    i = t(481060),
    o = t(596454),
    s = t(225433),
    u = t(104505),
    c = t(318766),
    d = t(907040),
    f = t(984933),
    m = t(903749),
    g = t(185923),
    h = t(388032),
    p = t(239336);
function b(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
            });
    }
    return e;
}
function y(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function v(e) {
    let {
            className: n,
            guildId: t,
            error: v,
            emojiId: x,
            emojiName: j,
            isRequiredField: w = !0,
            shouldUpdateBothEmojiFields: _ = !1,
            setEmojiId: C,
            setEmojiName: N,
        } = e,
        S = (0, m.Z)({
            emojiId: x,
            emojiName: j,
        }),
        O = (0, r.e7)([f.ZP], () => (null != t ? f.ZP.getDefaultChannel(t) : null)),
        P = l.useRef(null),
        { isHoveringOrFocusing: E } = (0, u.Z)(P),
        I = () => {
            N(void 0), C(void 0);
        },
        M = (e) => {
            e.stopPropagation(), I();
        },
        Z = l.useMemo(() => {
            let e = null != x && "" !== x,
                n = null != j && "" !== j,
                t = null != S && "" !== S,
                a = n && !Number.isNaN(parseInt(j)) && !t && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: n,
                hasEmojiDisplayName: t,
                isDeletedCustomEmoji: a,
            };
        }, [x, j, S]),
        k = !Z.isDeletedCustomEmoji && Z.hasEmojiDisplayName;
    return (0, a.jsx)("div", {
        className: n,
        children: (0, a.jsx)(i.gNt, {
            required: w,
            label: h.intl.string(h.t["3BQmiC"]),
            errorMessage: null != v ? v : void 0,
            children: (0, a.jsx)(i.yRy, {
                targetElementRef: P,
                animation: i.yRy.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(d.Z, {
                        closePopout: n,
                        pickerIntention: g.Hz.SOUNDBOARD,
                        onNavigateAway: n,
                        onSelectEmoji: (e) => {
                            let { emoji: t, willClose: a } = e,
                                l = (null == t ? void 0 : t.id) == null;
                            I(),
                                l
                                    ? N(null == t ? void 0 : t.optionallyDiverseSequence)
                                    : (_ && N(null == t ? void 0 : t.name), C(null == t ? void 0 : t.id)),
                                a && n();
                        },
                        guildId: t,
                        channel: O,
                    });
                },
                children: (e, n) => {
                    let { isShown: t } = n;
                    return (0, a.jsxs)(
                        i.UPk,
                        y(b({}, e), {
                            className: p.emojiInput,
                            ref: P,
                            children: [
                                (0, a.jsx)(c.Z, {
                                    active: t,
                                    tabIndex: 0,
                                    renderButtonContents:
                                        !Z.isDeletedCustomEmoji && (Z.hasEmojiId || Z.hasEmojiName)
                                            ? () =>
                                                  (0, a.jsx)(o.Z, {
                                                      emojiName: j,
                                                      emojiId: x,
                                                  })
                                            : null,
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    lineClamp: 1,
                                    color: k ? "text-default" : "text-muted",
                                    children: k ? ":".concat(S, ":") : h.intl.string(h.t.QTK0TJ),
                                }),
                                k && E && (0, a.jsx)(s.Z, y(b({}, e), { onClick: M })),
                            ],
                        }),
                    );
                },
            }),
        }),
    });
}
