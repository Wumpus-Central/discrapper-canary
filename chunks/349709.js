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
    v = l(185923),
    j = l(388032),
    x = l(247359);
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
    let { className: t, guildId: l, error: r, emojiId: b, emojiName: y, isRequiredField: I = !0, shouldUpdateBothEmojiFields: O = !1, setEmojiId: k, setEmojiName: E } = e,
        w = (0, p.Z)({
            emojiId: b,
            emojiName: y
        }),
        S = (0, a.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l) : null)),
        P = i.createRef(),
        C = (0, d.Z)(P),
        Z = () => {
            E(void 0), k(void 0);
        },
        D = (e) => (t, l) => {
            let n = (null == t ? void 0 : t.id) == null;
            Z(), n ? E(null == t ? void 0 : t.optionallyDiverseSequence) : (O && E(null == t ? void 0 : t.name), k(null == t ? void 0 : t.id)), l && e();
        },
        z = (e) => {
            e.stopPropagation(), Z();
        };
    return (0, n.jsx)(o.xJW, {
        required: I,
        title: j.NW.string(j.t['3BQmiI']),
        className: s()(t, x.section),
        error: r,
        children: (0, n.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(f.Z, {
                    closePopout: t,
                    pickerIntention: v.Hz.SOUNDBOARD,
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
                        className: x.emojiInput,
                        ref: P,
                        children: [
                            (0, n.jsx)(m.Z, {
                                className: x.emojiButton,
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
                                inputClassName: x.emojiText,
                                placeholder: j.NW.string(j.t.QTK0TE),
                                value: null != w ? ':'.concat(w, ':') : '',
                                readOnly: !0
                            }),
                            C &&
                                null != w &&
                                (0, n.jsx)(
                                    c.Z,
                                    h(N({}, e), {
                                        onClick: z,
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
