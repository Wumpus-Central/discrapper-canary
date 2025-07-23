n.d(t, { Z: () => w });
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    o = n(755721),
    u = n(481060),
    c = n(596454),
    d = n(225433),
    f = n(727637),
    m = n(318766),
    h = n(907040),
    g = n(984933),
    p = n(903749),
    y = n(185923),
    b = n(388032),
    v = n(705462);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { className: t, guildId: n, error: i, emojiId: w, emojiName: N, isRequiredField: C = !0, shouldUpdateBothEmojiFields: S = !1, setEmojiId: O, setEmojiName: E } = e,
        P = (0, p.Z)({
            emojiId: w,
            emojiName: N
        }),
        Z = (0, s.e7)([g.ZP], () => (null != n ? g.ZP.getDefaultChannel(n) : null)),
        M = a.useRef(null),
        k = (0, f.Z)(M),
        I = () => {
            (E(void 0), O(void 0));
        },
        T = (e) => (t) => {
            let { emoji: n, willClose: l } = t,
                a = (null == n ? void 0 : n.id) == null;
            (I(), a ? E(null == n ? void 0 : n.optionallyDiverseSequence) : (S && E(null == n ? void 0 : n.name), O(null == n ? void 0 : n.id)), l && e());
        },
        D = (e) => {
            (e.stopPropagation(), I());
        },
        R = a.useMemo(() => {
            let e = null != w && '' !== w,
                t = null != N && '' !== N,
                n = null != P && '' !== P,
                l = t && !Number.isNaN(parseInt(N)) && !n && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: n,
                isDeletedCustomEmoji: l
            };
        }, [w, N, P]);
    return (0, l.jsx)(u.xJW, {
        required: C,
        title: b.intl.string(b.t['3BQmiI']),
        className: r()(t, v.section),
        error: i,
        children: (0, l.jsx)(u.yRy, {
            targetElementRef: M,
            animation: u.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(h.Z, {
                    closePopout: t,
                    pickerIntention: y.Hz.SOUNDBOARD,
                    onNavigateAway: t,
                    onSelectEmoji: T(t),
                    guildId: n,
                    channel: Z
                });
            },
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, l.jsxs)(
                    'div',
                    j(x({}, e), {
                        className: v.emojiInput,
                        ref: M,
                        children: [
                            (0, l.jsx)(m.Z, {
                                className: v.emojiButton,
                                active: n,
                                tabIndex: 0,
                                renderButtonContents:
                                    !R.isDeletedCustomEmoji && (R.hasEmojiId || R.hasEmojiName)
                                        ? () =>
                                              (0, l.jsx)(c.Z, {
                                                  emojiName: N,
                                                  emojiId: w
                                              })
                                        : null
                            }),
                            (0, l.jsx)(o.Is, {
                                inputClassName: v.emojiText,
                                placeholder: b.intl.string(b.t.QTK0TE),
                                value: !R.isDeletedCustomEmoji && R.hasEmojiDisplayName ? ':'.concat(P, ':') : '',
                                readOnly: !0
                            }),
                            !R.isDeletedCustomEmoji &&
                                R.hasEmojiDisplayName &&
                                k &&
                                (0, l.jsx)(
                                    d.Z,
                                    j(x({}, e), {
                                        onClick: D,
                                        className: v.removeButton
                                    })
                                )
                        ]
                    })
                );
            }
        })
    });
}
