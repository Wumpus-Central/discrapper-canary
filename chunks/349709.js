t.d(n, { Z: () => w });
var a = t(951288),
    l = t(647438),
    i = t(442837),
    r = t(74655),
    o = t(886025),
    s = t(481060),
    u = t(596454),
    c = t(225433),
    d = t(727637),
    f = t(318766),
    m = t(907040),
    g = t(984933),
    h = t(903749),
    p = t(185923),
    y = t(388032),
    b = t(239336);
function v(e) {
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
function x(e, n) {
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
function w(e) {
    let {
            className: n,
            guildId: t,
            error: w,
            emojiId: j,
            emojiName: _,
            isRequiredField: N = !0,
            shouldUpdateBothEmojiFields: C = !1,
            setEmojiId: S,
            setEmojiName: O,
        } = e,
        E = (0, h.Z)({
            emojiId: j,
            emojiName: _,
        }),
        P = (0, i.e7)([g.ZP], () => (null != t ? g.ZP.getDefaultChannel(t) : null)),
        I = l.useRef(null),
        k = (0, d.Z)(I),
        M = () => {
            O(void 0), S(void 0);
        },
        Z = (e) => {
            e.stopPropagation(), M();
        },
        T = l.useMemo(() => {
            let e = null != j && "" !== j,
                n = null != _ && "" !== _,
                t = null != E && "" !== E,
                a = n && !Number.isNaN(parseInt(_)) && !t && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: n,
                hasEmojiDisplayName: t,
                isDeletedCustomEmoji: a,
            };
        }, [j, _, E]),
        F = !T.isDeletedCustomEmoji && T.hasEmojiDisplayName;
    return (0, a.jsx)("div", {
        className: n,
        children: (0, a.jsx)(o.N, {
            required: N,
            label: y.intl.string(y.t["3BQmiI"]),
            errorMessage: null != w ? w : void 0,
            children: (0, a.jsx)(s.yRy, {
                targetElementRef: I,
                animation: s.yRy.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(m.Z, {
                        closePopout: n,
                        pickerIntention: p.Hz.SOUNDBOARD,
                        onNavigateAway: n,
                        onSelectEmoji: (e) => {
                            let { emoji: t, willClose: a } = e,
                                l = (null == t ? void 0 : t.id) == null;
                            M(),
                                l
                                    ? O(null == t ? void 0 : t.optionallyDiverseSequence)
                                    : (C && O(null == t ? void 0 : t.name), S(null == t ? void 0 : t.id)),
                                a && n();
                        },
                        guildId: t,
                        channel: P,
                    });
                },
                children: (e, n) => {
                    let { isShown: t } = n;
                    return (0, a.jsxs)(
                        r.U,
                        x(v({}, e), {
                            className: b.emojiInput,
                            ref: I,
                            children: [
                                (0, a.jsx)(f.Z, {
                                    active: t,
                                    tabIndex: 0,
                                    renderButtonContents:
                                        !T.isDeletedCustomEmoji && (T.hasEmojiId || T.hasEmojiName)
                                            ? () =>
                                                  (0, a.jsx)(u.Z, {
                                                      emojiName: _,
                                                      emojiId: j,
                                                  })
                                            : null,
                                }),
                                (0, a.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    lineClamp: 1,
                                    color: F ? "text-default" : "text-muted",
                                    children: F ? ":".concat(E, ":") : y.intl.string(y.t.QTK0TE),
                                }),
                                F && k && (0, a.jsx)(c.Z, x(v({}, e), { onClick: Z })),
                            ],
                        }),
                    );
                },
            }),
        }),
    });
}
