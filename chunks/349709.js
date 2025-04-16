l.d(t, { Z: () => b });
var n = l(200651),
    i = l(192379),
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
function N(e) {
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
function h(e, t) {
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
function b(e) {
    let { className: t, guildId: l, error: s, emojiId: b, emojiName: y, isRequiredField: I = !0, shouldUpdateBothEmojiFields: E = !1, setEmojiId: O, setEmojiName: k } = e,
        w = (0, p.Z)({
            emojiId: b,
            emojiName: y
        }),
        S = (0, r.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l) : null)),
        C = i.createRef(),
        D = (0, d.Z)(C),
        P = () => {
            k(void 0), O(void 0);
        },
        Z = (e) => (t, l) => {
            let n = (null == t ? void 0 : t.id) == null;
            P(), n ? k(null == t ? void 0 : t.optionallyDiverseSequence) : (E && k(null == t ? void 0 : t.name), O(null == t ? void 0 : t.id)), l && e();
        },
        z = (e) => {
            e.stopPropagation(), P();
        },
        R = i.useMemo(() => {
            let e = null != b && '' !== b,
                t = null != y && '' !== y,
                l = null != w && '' !== w,
                n = t && !Number.isNaN(parseInt(y)) && !l && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: l,
                isDeletedCustomEmoji: n
            };
        }, [b, y, w]);
    return (0, n.jsx)(o.xJW, {
        required: I,
        title: x.NW.string(x.t['3BQmiI']),
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
                    channel: S
                });
            },
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, n.jsxs)(
                    'div',
                    h(N({}, e), {
                        className: v.emojiInput,
                        ref: C,
                        children: [
                            (0, n.jsx)(m.Z, {
                                className: v.emojiButton,
                                active: l,
                                tabIndex: 0,
                                renderButtonContents:
                                    !R.isDeletedCustomEmoji && (R.hasEmojiId || R.hasEmojiName)
                                        ? () =>
                                              (0, n.jsx)(u.Z, {
                                                  emojiName: y,
                                                  emojiId: b
                                              })
                                        : null
                            }),
                            (0, n.jsx)(o.oil, {
                                inputClassName: v.emojiText,
                                placeholder: x.NW.string(x.t.QTK0TE),
                                value: !R.isDeletedCustomEmoji && R.hasEmojiDisplayName ? ':'.concat(w, ':') : '',
                                readOnly: !0
                            }),
                            !R.isDeletedCustomEmoji &&
                                R.hasEmojiDisplayName &&
                                D &&
                                (0, n.jsx)(
                                    c.Z,
                                    h(N({}, e), {
                                        onClick: z,
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
