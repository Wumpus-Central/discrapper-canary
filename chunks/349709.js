t.d(n, { Z: () => _ });
var a = t(951288),
    l = t(647438),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    s = t(755721),
    u = t(481060),
    c = t(596454),
    d = t(225433),
    f = t(727637),
    m = t(318766),
    h = t(907040),
    g = t(984933),
    p = t(903749),
    y = t(185923),
    b = t(388032),
    v = t(239336);
function x(e) {
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
function j(e, n) {
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
function _(e) {
    let {
            className: n,
            guildId: t,
            error: i,
            emojiId: _,
            emojiName: w,
            isRequiredField: N = !0,
            shouldUpdateBothEmojiFields: C = !1,
            setEmojiId: S,
            setEmojiName: O,
        } = e,
        E = (0, p.Z)({
            emojiId: _,
            emojiName: w,
        }),
        I = (0, o.e7)([g.ZP], () => (null != t ? g.ZP.getDefaultChannel(t) : null)),
        P = l.useRef(null),
        k = (0, f.Z)(P),
        Z = () => {
            O(void 0), S(void 0);
        },
        M = (e) => {
            e.stopPropagation(), Z();
        },
        T = l.useMemo(() => {
            let e = null != _ && "" !== _,
                n = null != w && "" !== w,
                t = null != E && "" !== E,
                a = n && !Number.isNaN(parseInt(w)) && !t && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: n,
                hasEmojiDisplayName: t,
                isDeletedCustomEmoji: a,
            };
        }, [_, w, E]);
    return (0, a.jsx)(u.xJW, {
        required: N,
        title: b.intl.string(b.t["3BQmiI"]),
        className: r()(n, v.section),
        error: i,
        children: (0, a.jsx)(u.yRy, {
            targetElementRef: P,
            animation: u.yRy.Animation.NONE,
            position: "top",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, a.jsx)(h.Z, {
                    closePopout: n,
                    pickerIntention: y.Hz.SOUNDBOARD,
                    onNavigateAway: n,
                    onSelectEmoji: (e) => {
                        let { emoji: t, willClose: a } = e,
                            l = (null == t ? void 0 : t.id) == null;
                        Z(),
                            l
                                ? O(null == t ? void 0 : t.optionallyDiverseSequence)
                                : (C && O(null == t ? void 0 : t.name), S(null == t ? void 0 : t.id)),
                            a && n();
                    },
                    guildId: t,
                    channel: I,
                });
            },
            children: (e, n) => {
                let { isShown: t } = n;
                return (0, a.jsxs)(
                    "div",
                    j(x({}, e), {
                        className: v.emojiInput,
                        ref: P,
                        children: [
                            (0, a.jsx)(m.Z, {
                                className: v.emojiButton,
                                active: t,
                                tabIndex: 0,
                                renderButtonContents:
                                    !T.isDeletedCustomEmoji && (T.hasEmojiId || T.hasEmojiName)
                                        ? () =>
                                              (0, a.jsx)(c.Z, {
                                                  emojiName: w,
                                                  emojiId: _,
                                              })
                                        : null,
                            }),
                            (0, a.jsx)(s.Is, {
                                inputClassName: v.emojiText,
                                placeholder: b.intl.string(b.t.QTK0TE),
                                value: !T.isDeletedCustomEmoji && T.hasEmojiDisplayName ? ":".concat(E, ":") : "",
                                readOnly: !0,
                            }),
                            !T.isDeletedCustomEmoji &&
                                T.hasEmojiDisplayName &&
                                k &&
                                (0, a.jsx)(
                                    d.Z,
                                    j(x({}, e), {
                                        onClick: M,
                                        className: v.removeButton,
                                    }),
                                ),
                        ],
                    }),
                );
            },
        }),
    });
}
