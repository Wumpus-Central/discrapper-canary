l.d(t, { Z: () => E });
var n = l(255367),
    i = l(73800),
    s = l(120356),
    r = l.n(s),
    a = l(442837),
    o = l(755721),
    u = l(481060),
    c = l(596454),
    d = l(225433),
    m = l(727637),
    f = l(318766),
    g = l(907040),
    p = l(984933),
    j = l(903749),
    v = l(185923),
    x = l(388032),
    h = l(705462);
function b(e) {
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
function y(e, t) {
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
function E(e) {
    let { className: t, guildId: l, error: s, emojiId: E, emojiName: I, isRequiredField: N = !0, shouldUpdateBothEmojiFields: O = !1, setEmojiId: S, setEmojiName: w } = e,
        C = (0, j.Z)({
            emojiId: E,
            emojiName: I
        }),
        P = (0, a.e7)([p.ZP], () => (null != l ? p.ZP.getDefaultChannel(l) : null)),
        D = i.useRef(null),
        k = (0, m.Z)(D),
        Z = () => {
            (w(void 0), S(void 0));
        },
        R = (e) => (t) => {
            let { emoji: l, willClose: n } = t,
                i = (null == l ? void 0 : l.id) == null;
            (Z(), i ? w(null == l ? void 0 : l.optionallyDiverseSequence) : (O && w(null == l ? void 0 : l.name), S(null == l ? void 0 : l.id)), n && e());
        },
        T = (e) => {
            (e.stopPropagation(), Z());
        },
        _ = i.useMemo(() => {
            let e = null != E && '' !== E,
                t = null != I && '' !== I,
                l = null != C && '' !== C,
                n = t && !Number.isNaN(parseInt(I)) && !l && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: l,
                isDeletedCustomEmoji: n
            };
        }, [E, I, C]);
    return (0, n.jsx)(u.xJW, {
        required: N,
        title: x.intl.string(x.t['3BQmiI']),
        className: r()(t, h.section),
        error: s,
        children: (0, n.jsx)(u.yRy, {
            targetElementRef: D,
            animation: u.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(g.Z, {
                    closePopout: t,
                    pickerIntention: v.Hz.SOUNDBOARD,
                    onNavigateAway: t,
                    onSelectEmoji: R(t),
                    guildId: l,
                    channel: P
                });
            },
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, n.jsxs)(
                    'div',
                    y(b({}, e), {
                        className: h.emojiInput,
                        ref: D,
                        children: [
                            (0, n.jsx)(f.Z, {
                                className: h.emojiButton,
                                active: l,
                                tabIndex: 0,
                                renderButtonContents:
                                    !_.isDeletedCustomEmoji && (_.hasEmojiId || _.hasEmojiName)
                                        ? () =>
                                              (0, n.jsx)(c.Z, {
                                                  emojiName: I,
                                                  emojiId: E
                                              })
                                        : null
                            }),
                            (0, n.jsx)(o.Is, {
                                inputClassName: h.emojiText,
                                placeholder: x.intl.string(x.t.QTK0TE),
                                value: !_.isDeletedCustomEmoji && _.hasEmojiDisplayName ? ':'.concat(C, ':') : '',
                                readOnly: !0
                            }),
                            !_.isDeletedCustomEmoji &&
                                _.hasEmojiDisplayName &&
                                k &&
                                (0, n.jsx)(
                                    d.Z,
                                    y(b({}, e), {
                                        onClick: T,
                                        className: h.removeButton
                                    })
                                )
                        ]
                    })
                );
            }
        })
    });
}
