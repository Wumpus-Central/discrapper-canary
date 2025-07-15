n.d(t, { Z: () => j });
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(596454),
    c = n(225433),
    d = n(727637),
    f = n(318766),
    m = n(907040),
    h = n(984933),
    g = n(903749),
    p = n(185923),
    y = n(388032),
    b = n(705462);
function v(e) {
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
function x(e, t) {
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
function j(e) {
    let { className: t, guildId: n, error: i, emojiId: j, emojiName: w, isRequiredField: N = !0, shouldUpdateBothEmojiFields: C = !1, setEmojiId: S, setEmojiName: O } = e,
        E = (0, g.Z)({
            emojiId: j,
            emojiName: w
        }),
        P = (0, s.e7)([h.ZP], () => (null != n ? h.ZP.getDefaultChannel(n) : null)),
        Z = a.useRef(null),
        M = (0, d.Z)(Z),
        k = () => {
            (O(void 0), S(void 0));
        },
        I = (e) => (t) => {
            let { emoji: n, willClose: l } = t,
                a = (null == n ? void 0 : n.id) == null;
            (k(), a ? O(null == n ? void 0 : n.optionallyDiverseSequence) : (C && O(null == n ? void 0 : n.name), S(null == n ? void 0 : n.id)), l && e());
        },
        T = (e) => {
            (e.stopPropagation(), k());
        },
        D = a.useMemo(() => {
            let e = null != j && '' !== j,
                t = null != w && '' !== w,
                n = null != E && '' !== E,
                l = t && !Number.isNaN(parseInt(w)) && !n && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: n,
                isDeletedCustomEmoji: l
            };
        }, [j, w, E]);
    return (0, l.jsx)(o.xJW, {
        required: N,
        title: y.intl.string(y.t['3BQmiI']),
        className: r()(t, b.section),
        error: i,
        children: (0, l.jsx)(o.yRy, {
            targetElementRef: Z,
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(m.Z, {
                    closePopout: t,
                    pickerIntention: p.Hz.SOUNDBOARD,
                    onNavigateAway: t,
                    onSelectEmoji: I(t),
                    guildId: n,
                    channel: P
                });
            },
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, l.jsxs)(
                    'div',
                    x(v({}, e), {
                        className: b.emojiInput,
                        ref: Z,
                        children: [
                            (0, l.jsx)(f.Z, {
                                className: b.emojiButton,
                                active: n,
                                tabIndex: 0,
                                renderButtonContents:
                                    !D.isDeletedCustomEmoji && (D.hasEmojiId || D.hasEmojiName)
                                        ? () =>
                                              (0, l.jsx)(u.Z, {
                                                  emojiName: w,
                                                  emojiId: j
                                              })
                                        : null
                            }),
                            (0, l.jsx)(o.oil, {
                                inputClassName: b.emojiText,
                                placeholder: y.intl.string(y.t.QTK0TE),
                                value: !D.isDeletedCustomEmoji && D.hasEmojiDisplayName ? ':'.concat(E, ':') : '',
                                readOnly: !0
                            }),
                            !D.isDeletedCustomEmoji &&
                                D.hasEmojiDisplayName &&
                                M &&
                                (0, l.jsx)(
                                    c.Z,
                                    x(v({}, e), {
                                        onClick: T,
                                        className: b.removeButton
                                    })
                                )
                        ]
                    })
                );
            }
        })
    });
}
