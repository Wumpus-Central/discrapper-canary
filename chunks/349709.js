l.d(t, { Z: () => y });
var n = l(255367),
    i = l(73800),
    s = l(120356),
    r = l.n(s),
    a = l(442837),
    o = l(481060),
    u = l(596454),
    c = l(225433),
    d = l(727637),
    m = l(318766),
    f = l(907040),
    g = l(984933),
    p = l(903749),
    j = l(185923),
    v = l(388032),
    x = l(705462);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function b(e, t) {
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
function y(e) {
    let { className: t, guildId: l, error: s, emojiId: y, emojiName: E, isRequiredField: I = !0, shouldUpdateBothEmojiFields: N = !1, setEmojiId: O, setEmojiName: S } = e,
        w = (0, p.Z)({
            emojiId: y,
            emojiName: E
        }),
        C = (0, a.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l) : null)),
        P = i.useRef(null),
        D = (0, d.Z)(P),
        k = () => {
            (S(void 0), O(void 0));
        },
        Z = (e) => (t) => {
            let { emoji: l, willClose: n } = t,
                i = (null == l ? void 0 : l.id) == null;
            (k(), i ? S(null == l ? void 0 : l.optionallyDiverseSequence) : (N && S(null == l ? void 0 : l.name), O(null == l ? void 0 : l.id)), n && e());
        },
        R = (e) => {
            (e.stopPropagation(), k());
        },
        T = i.useMemo(() => {
            let e = null != y && '' !== y,
                t = null != E && '' !== E,
                l = null != w && '' !== w,
                n = t && !Number.isNaN(parseInt(E)) && !l && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: l,
                isDeletedCustomEmoji: n
            };
        }, [y, E, w]);
    return (0, n.jsx)(o.xJW, {
        required: I,
        title: v.intl.string(v.t['3BQmiI']),
        className: r()(t, x.section),
        error: s,
        children: (0, n.jsx)(o.yRy, {
            targetElementRef: P,
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(f.Z, {
                    closePopout: t,
                    pickerIntention: j.Hz.SOUNDBOARD,
                    onNavigateAway: t,
                    onSelectEmoji: Z(t),
                    guildId: l,
                    channel: C
                });
            },
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, n.jsxs)(
                    'div',
                    b(h({}, e), {
                        className: x.emojiInput,
                        ref: P,
                        children: [
                            (0, n.jsx)(m.Z, {
                                className: x.emojiButton,
                                active: l,
                                tabIndex: 0,
                                renderButtonContents:
                                    !T.isDeletedCustomEmoji && (T.hasEmojiId || T.hasEmojiName)
                                        ? () =>
                                              (0, n.jsx)(u.Z, {
                                                  emojiName: E,
                                                  emojiId: y
                                              })
                                        : null
                            }),
                            (0, n.jsx)(o.oil, {
                                inputClassName: x.emojiText,
                                placeholder: v.intl.string(v.t.QTK0TE),
                                value: !T.isDeletedCustomEmoji && T.hasEmojiDisplayName ? ':'.concat(w, ':') : '',
                                readOnly: !0
                            }),
                            !T.isDeletedCustomEmoji &&
                                T.hasEmojiDisplayName &&
                                D &&
                                (0, n.jsx)(
                                    c.Z,
                                    b(h({}, e), {
                                        onClick: R,
                                        className: x.removeButton
                                    })
                                )
                        ]
                    })
                );
            }
        })
    });
}
