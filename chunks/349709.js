l.d(t, { Z: () => y });
var n = l(255367),
    i = l(73800),
    s = l(120356),
    a = l.n(s),
    r = l(442837),
    o = l(481060),
    u = l(596454),
    c = l(225433),
    d = l(727637),
    m = l(318766),
    f = l(907040),
    g = l(984933),
    p = l(903749),
    j = l(185923),
    x = l(388032),
    v = l(705462);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
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
    let { className: t, guildId: l, error: s, emojiId: y, emojiName: N, isRequiredField: I = !0, shouldUpdateBothEmojiFields: E = !1, setEmojiId: O, setEmojiName: w } = e,
        S = (0, p.Z)({
            emojiId: y,
            emojiName: N
        }),
        k = (0, r.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l) : null)),
        C = i.createRef(),
        D = (0, d.Z)(C),
        P = () => {
            w(void 0), O(void 0);
        },
        Z = (e) => (t, l) => {
            let n = (null == t ? void 0 : t.id) == null;
            P(), n ? w(null == t ? void 0 : t.optionallyDiverseSequence) : (E && w(null == t ? void 0 : t.name), O(null == t ? void 0 : t.id)), l && e();
        },
        T = (e) => {
            e.stopPropagation(), P();
        },
        z = i.useMemo(() => {
            let e = null != y && '' !== y,
                t = null != N && '' !== N,
                l = null != S && '' !== S,
                n = t && !Number.isNaN(parseInt(N)) && !l && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: l,
                isDeletedCustomEmoji: n
            };
        }, [y, N, S]);
    return (0, n.jsx)(o.xJW, {
        required: I,
        title: x.intl.string(x.t['3BQmiI']),
        className: a()(t, v.section),
        error: s,
        children: (0, n.jsx)(o.yRy, {
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
                    channel: k
                });
            },
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, n.jsxs)(
                    'div',
                    b(h({}, e), {
                        className: v.emojiInput,
                        ref: C,
                        children: [
                            (0, n.jsx)(m.Z, {
                                className: v.emojiButton,
                                active: l,
                                tabIndex: 0,
                                renderButtonContents:
                                    !z.isDeletedCustomEmoji && (z.hasEmojiId || z.hasEmojiName)
                                        ? () =>
                                              (0, n.jsx)(u.Z, {
                                                  emojiName: N,
                                                  emojiId: y
                                              })
                                        : null
                            }),
                            (0, n.jsx)(o.oil, {
                                inputClassName: v.emojiText,
                                placeholder: x.intl.string(x.t.QTK0TE),
                                value: !z.isDeletedCustomEmoji && z.hasEmojiDisplayName ? ':'.concat(S, ':') : '',
                                readOnly: !0
                            }),
                            !z.isDeletedCustomEmoji &&
                                z.hasEmojiDisplayName &&
                                D &&
                                (0, n.jsx)(
                                    c.Z,
                                    b(h({}, e), {
                                        onClick: T,
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
