(n.d(t, { default: () => S }), n(388685), n(781311));
var l = n(255367),
    o = n(73800),
    i = n(442837),
    r = n(82659),
    u = n(481060),
    a = n(596454),
    s = n(318766),
    c = n(907040),
    d = n(339085),
    m = n(592125),
    p = n(944486),
    j = n(594174),
    f = n(74538),
    b = n(906605),
    g = n(106301),
    v = n(505905),
    y = n(185923),
    O = n(388032),
    h = n(737113);
function C(e) {
    let { customStatusEmoji: t, setCustomStatusEmoji: n, onClose: r } = e,
        d = o.useRef(null),
        j = (0, i.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getVoiceChannelId())),
        f = (e) => {
            var t;
            if (null == e) return void n(null);
            n(
                null != e.id
                    ? {
                          id: e.id,
                          name: e.name,
                          animated: e.animated
                      }
                    : {
                          id: null,
                          name: null != (t = e.optionallyDiverseSequence) ? t : '',
                          animated: !1
                      }
            );
        };
    return (0, l.jsx)(u.yRy, {
        targetElementRef: d,
        renderPopout: (e) => {
            var t;
            let { closePopout: n } = e;
            return (0, l.jsx)(c.Z, {
                channel: j,
                guildId: null != (t = null == j ? void 0 : j.guild_id) ? t : void 0,
                closePopout: n,
                onSelectEmoji: (e) => {
                    let { emoji: t, willClose: l } = e;
                    (f(t), l && n());
                },
                pickerIntention: y.Hz.STATUS,
                onNavigateAway: r
            });
        },
        position: 'left',
        animation: u.yRy.Animation.NONE,
        align: 'top',
        children: (e, n) => {
            var o, i;
            let { isShown: r } = n;
            return (0, l.jsx)(
                s.Z,
                ((o = (function (e) {
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
                })({}, e)),
                (i = i =
                    {
                        ref: d,
                        active: r,
                        className: h.emojiButton,
                        tabIndex: 0,
                        renderButtonContents:
                            null == t
                                ? null
                                : () =>
                                      (0, l.jsx)(a.Z, {
                                          className: h.emoji,
                                          emojiId: t.id,
                                          emojiName: t.name,
                                          animated: !!t.animated
                                      })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                o)
            );
        }
    });
}
function S(e) {
    var t, n;
    let { transitionState: i, onClose: a, startingText: s, startingEmoji: c } = e,
        m = g.Z.getCustomHangStatus(),
        p = null != s ? s : null != (t = null == m ? void 0 : m.status) ? t : '',
        y = null != (n = null == m ? void 0 : m.emoji) ? n : null;
    (null == c ? void 0 : c.id) != null ? (y = f.ZP.canUseEmojisEverywhere(j.default.getCurrentUser()) && null != d.ZP.getUsableCustomEmojiById(c.id) ? c : null) : (null == c ? void 0 : c.name) != null && (y = c);
    let [S, x] = o.useState(p),
        [P, w] = o.useState(y),
        _ = o.useCallback(() => {
            let e = S.trim();
            '' !== e && null != P && ((0, b._s)(e, P, !0), a());
        }, [P, a, S]),
        k = o.useMemo(
            () => [
                {
                    text: O.intl.string(O.t.S0ajKC),
                    onClick: _
                }
            ],
            [_]
        );
    return (0, l.jsx)(r.u, {
        onClose: a,
        actions: k,
        transitionState: i,
        title: O.intl.string(O.t.DD4vJC),
        subtitle: O.intl.string(O.t.YVM22t),
        children: (0, l.jsxs)('div', {
            className: h.form,
            children: [
                (0, l.jsx)(C, {
                    customStatusEmoji: P,
                    setCustomStatusEmoji: w,
                    onClose: a
                }),
                (0, l.jsxs)('div', {
                    className: h.customInputGroup,
                    children: [
                        (0, l.jsx)(u.Text, {
                            variant: 'eyebrow',
                            color: 'text-muted',
                            children: O.intl.string(O.t['74vS//'])
                        }),
                        (0, l.jsx)(u.oil, {
                            value: S,
                            onChange: (e) => x(e.substring(0, v.s)),
                            placeholder: O.intl.string(O.t.k6lfDg)
                        })
                    ]
                })
            ]
        })
    });
}
