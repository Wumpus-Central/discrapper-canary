t.d(n, { Z: () => j });
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    s = t(442837),
    o = t(481060),
    u = t(596454),
    c = t(225433),
    d = t(727637),
    f = t(318766),
    m = t(907040),
    h = t(984933),
    g = t(903749),
    p = t(185923),
    b = t(388032),
    y = t(705462);
function v(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function j(e) {
    let { className: n, guildId: t, error: i, emojiId: j, emojiName: N, isRequiredField: w = !0, shouldUpdateBothEmojiFields: C = !1, setEmojiId: S, setEmojiName: O } = e,
        P = (0, g.Z)({
            emojiId: j,
            emojiName: N
        }),
        k = (0, s.e7)([h.ZP], () => (null != t ? h.ZP.getDefaultChannel(t) : null)),
        E = a.createRef(),
        Z = (0, d.Z)(E),
        M = () => {
            O(void 0), S(void 0);
        },
        I = (e) => (n, t) => {
            let l = (null == n ? void 0 : n.id) == null;
            M(), l ? O(null == n ? void 0 : n.optionallyDiverseSequence) : (C && O(null == n ? void 0 : n.name), S(null == n ? void 0 : n.id)), t && e();
        },
        _ = (e) => {
            e.stopPropagation(), M();
        },
        D = a.useMemo(() => {
            let e = null != j && '' !== j,
                n = null != N && '' !== N,
                t = null != P && '' !== P,
                l = n && !Number.isNaN(parseInt(N)) && !t && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: n,
                hasEmojiDisplayName: t,
                isDeletedCustomEmoji: l
            };
        }, [j, N, P]);
    return (0, l.jsx)(o.xJW, {
        required: w,
        title: b.NW.string(b.t['3BQmiI']),
        className: r()(n, y.section),
        error: i,
        children: (0, l.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, l.jsx)(m.Z, {
                    closePopout: n,
                    pickerIntention: p.Hz.SOUNDBOARD,
                    onNavigateAway: n,
                    onSelectEmoji: I(n),
                    guildId: t,
                    channel: k
                });
            },
            children: (e, n) => {
                let { isShown: t } = n;
                return (0, l.jsxs)(
                    'div',
                    x(v({}, e), {
                        className: y.emojiInput,
                        ref: E,
                        children: [
                            (0, l.jsx)(f.Z, {
                                className: y.emojiButton,
                                active: t,
                                tabIndex: 0,
                                renderButtonContents:
                                    !D.isDeletedCustomEmoji && (D.hasEmojiId || D.hasEmojiName)
                                        ? () =>
                                              (0, l.jsx)(u.Z, {
                                                  emojiName: N,
                                                  emojiId: j
                                              })
                                        : null
                            }),
                            (0, l.jsx)(o.oil, {
                                inputClassName: y.emojiText,
                                placeholder: b.NW.string(b.t.QTK0TE),
                                value: !D.isDeletedCustomEmoji && D.hasEmojiDisplayName ? ':'.concat(P, ':') : '',
                                readOnly: !0
                            }),
                            !D.isDeletedCustomEmoji &&
                                D.hasEmojiDisplayName &&
                                Z &&
                                (0, l.jsx)(
                                    c.Z,
                                    x(v({}, e), {
                                        onClick: _,
                                        className: y.removeButton
                                    })
                                )
                        ]
                    })
                );
            }
        })
    });
}
