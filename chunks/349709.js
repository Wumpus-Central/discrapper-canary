t.d(n, { Z: () => x });
var a = t(951288),
    l = t(647438),
    i = t(442837),
    r = t(74655),
    o = t(481060),
    s = t(596454),
    u = t(225433),
    c = t(104505),
    d = t(318766),
    f = t(907040),
    m = t(984933),
    g = t(903749),
    h = t(185923),
    p = t(388032),
    y = t(239336);
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
function v(e, n) {
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
function x(e) {
    let {
            className: n,
            guildId: t,
            error: x,
            emojiId: j,
            emojiName: w,
            isRequiredField: _ = !0,
            shouldUpdateBothEmojiFields: N = !1,
            setEmojiId: C,
            setEmojiName: S,
        } = e,
        O = (0, g.Z)({
            emojiId: j,
            emojiName: w,
        }),
        E = (0, i.e7)([m.ZP], () => (null != t ? m.ZP.getDefaultChannel(t) : null)),
        P = l.useRef(null),
        { isHoveringOrFocusing: I } = (0, c.Z)(P),
        Z = () => {
            S(void 0), C(void 0);
        },
        k = (e) => {
            e.stopPropagation(), Z();
        },
        M = l.useMemo(() => {
            let e = null != j && "" !== j,
                n = null != w && "" !== w,
                t = null != O && "" !== O,
                a = n && !Number.isNaN(parseInt(w)) && !t && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: n,
                hasEmojiDisplayName: t,
                isDeletedCustomEmoji: a,
            };
        }, [j, w, O]),
        T = !M.isDeletedCustomEmoji && M.hasEmojiDisplayName;
    return (0, a.jsx)("div", {
        className: n,
        children: (0, a.jsx)(o.gNt, {
            required: _,
            label: p.intl.string(p.t["3BQmiI"]),
            errorMessage: null != x ? x : void 0,
            children: (0, a.jsx)(o.yRy, {
                targetElementRef: P,
                animation: o.yRy.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(f.Z, {
                        closePopout: n,
                        pickerIntention: h.Hz.SOUNDBOARD,
                        onNavigateAway: n,
                        onSelectEmoji: (e) => {
                            let { emoji: t, willClose: a } = e,
                                l = (null == t ? void 0 : t.id) == null;
                            Z(),
                                l
                                    ? S(null == t ? void 0 : t.optionallyDiverseSequence)
                                    : (N && S(null == t ? void 0 : t.name), C(null == t ? void 0 : t.id)),
                                a && n();
                        },
                        guildId: t,
                        channel: E,
                    });
                },
                children: (e, n) => {
                    let { isShown: t } = n;
                    return (0, a.jsxs)(
                        r.U,
                        v(b({}, e), {
                            className: y.emojiInput,
                            ref: P,
                            children: [
                                (0, a.jsx)(d.Z, {
                                    active: t,
                                    tabIndex: 0,
                                    renderButtonContents:
                                        !M.isDeletedCustomEmoji && (M.hasEmojiId || M.hasEmojiName)
                                            ? () =>
                                                  (0, a.jsx)(s.Z, {
                                                      emojiName: w,
                                                      emojiId: j,
                                                  })
                                            : null,
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    lineClamp: 1,
                                    color: T ? "text-default" : "text-muted",
                                    children: T ? ":".concat(O, ":") : p.intl.string(p.t.QTK0TE),
                                }),
                                T && I && (0, a.jsx)(u.Z, v(b({}, e), { onClick: k })),
                            ],
                        }),
                    );
                },
            }),
        }),
    });
}
