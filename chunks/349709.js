l.d(t, { Z: () => b });
var n = l(200651),
    i = l(192379),
    r = l(120356),
    s = l.n(r),
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
    let { className: t, guildId: l, error: r, emojiId: b, emojiName: y, isRequiredField: I = !0, shouldUpdateBothEmojiFields: O = !1, setEmojiId: k, setEmojiName: w } = e,
        E = (0, p.Z)({
            emojiId: b,
            emojiName: y
        }),
        S = (0, a.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l) : null)),
        C = i.createRef(),
        P = (0, d.Z)(C),
        Z = () => {
            w(void 0), k(void 0);
        },
        D = (e) => (t, l) => {
            let n = (null == t ? void 0 : t.id) == null;
            Z(), n ? w(null == t ? void 0 : t.optionallyDiverseSequence) : (O && w(null == t ? void 0 : t.name), k(null == t ? void 0 : t.id)), l && e();
        },
        z = (e) => {
            e.stopPropagation(), Z();
        };
    return (0, n.jsx)(o.xJW, {
        required: I,
        title: x.NW.string(x.t['3BQmiI']),
        className: s()(t, v.section),
        error: r,
        children: (0, n.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(f.Z, {
                    closePopout: t,
                    pickerIntention: j.Hz.SOUNDBOARD,
                    onNavigateAway: t,
                    onSelectEmoji: D(t),
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
                                    null != b || null != y
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
                                value: null != E ? ':'.concat(E, ':') : '',
                                readOnly: !0
                            }),
                            P &&
                                null != E &&
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
