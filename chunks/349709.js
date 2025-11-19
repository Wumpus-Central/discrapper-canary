t.d(n, { Z: () => y });
var l = t(54381),
    a = t(473749),
    i = t(442837),
    r = t(481060),
    s = t(596454),
    o = t(225433),
    u = t(104505),
    c = t(318766),
    d = t(907040),
    f = t(984933),
    m = t(903749),
    g = t(185923),
    h = t(388032),
    v = t(739359);
function p(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function b(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function y(e) {
    let {
            className: n,
            guildId: t,
            error: y,
            emojiId: j,
            emojiName: x,
            isRequiredField: N = !0,
            shouldUpdateBothEmojiFields: w = !1,
            setEmojiId: C,
            setEmojiName: S,
        } = e,
        O = (0, m.Z)({
            emojiId: j,
            emojiName: x,
        }),
        Z = (0, i.e7)([f.ZP], () => (null != t ? f.ZP.getDefaultChannel(t) : null)),
        P = a.useRef(null),
        { isHoveringOrFocusing: M } = (0, u.Z)(P),
        E = () => {
            S(void 0), C(void 0);
        },
        k = (e) => {
            e.stopPropagation(), E();
        },
        I = a.useMemo(() => {
            let e = null != j && "" !== j,
                n = null != x && "" !== x,
                t = null != O && "" !== O,
                l = n && !Number.isNaN(parseInt(x)) && !t && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: n,
                hasEmojiDisplayName: t,
                isDeletedCustomEmoji: l,
            };
        }, [j, x, O]),
        T = !I.isDeletedCustomEmoji && I.hasEmojiDisplayName;
    return (0, l.jsx)("div", {
        className: n,
        children: (0, l.jsx)(r.gNt, {
            required: N,
            label: h.intl.string(h.t["3BQmiC"]),
            errorMessage: null != y ? y : void 0,
            children: (0, l.jsx)(r.yRy, {
                targetElementRef: P,
                animation: r.yRy.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, l.jsx)(d.Z, {
                        closePopout: n,
                        pickerIntention: g.Hz.SOUNDBOARD,
                        onNavigateAway: n,
                        onSelectEmoji: (e) => {
                            let { emoji: t, willClose: l } = e,
                                a = (null == t ? void 0 : t.id) == null;
                            E(),
                                a
                                    ? S(null == t ? void 0 : t.optionallyDiverseSequence)
                                    : (w && S(null == t ? void 0 : t.name), C(null == t ? void 0 : t.id)),
                                l && n();
                        },
                        guildId: t,
                        channel: Z,
                    });
                },
                children: (e, n) => {
                    let { isShown: t } = n;
                    return (0, l.jsxs)(
                        r.UPk,
                        b(p({}, e), {
                            className: v.emojiInput,
                            ref: P,
                            children: [
                                (0, l.jsx)(c.Z, {
                                    active: t,
                                    tabIndex: 0,
                                    renderButtonContents:
                                        !I.isDeletedCustomEmoji && (I.hasEmojiId || I.hasEmojiName)
                                            ? () =>
                                                  (0, l.jsx)(s.Z, {
                                                      emojiName: x,
                                                      emojiId: j,
                                                  })
                                            : null,
                                }),
                                (0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    lineClamp: 1,
                                    color: T ? "text-default" : "text-muted",
                                    children: T ? ":".concat(O, ":") : h.intl.string(h.t.QTK0TJ),
                                }),
                                T && M && (0, l.jsx)(o.Z, b(p({}, e), { onClick: k })),
                            ],
                        }),
                    );
                },
            }),
        }),
    });
}
