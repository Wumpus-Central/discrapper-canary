(n.d(t, { default: () => j }), n(388685));
var i = n(255367),
    o = n(73800),
    l = n(82659),
    r = n(481060),
    a = n(787014),
    c = n(907040),
    s = n(946458),
    d = n(185923),
    u = n(388032),
    m = n(815461);
let j = (e) => {
    var t, n, j, p, b, x, h;
    let { channel: v, onClose: f, transitionState: y } = e,
        [g, O] = o.useState(null != (j = v.defaultReactionEmoji) ? j : null),
        [N, w] = o.useState(!1),
        [E, P] = o.useState(!1),
        k = o.useRef(null),
        _ = (null != (p = null == (t = v.defaultReactionEmoji) ? void 0 : t.emojiId) ? p : null) !== (null != (b = null == g ? void 0 : g.emojiId) ? b : null),
        R = (null != (x = null == (n = v.defaultReactionEmoji) ? void 0 : n.emojiName) ? x : null) !== (null != (h = null == g ? void 0 : g.emojiName) ? h : null),
        C = _ || R,
        I = (e) => {
            O(null == e ? null : (null == e ? void 0 : e.id) != null ? { emojiId: e.id } : { emojiName: e.optionallyDiverseSequence });
        },
        S = async () => {
            if (C) {
                (w(!0), P(!1));
                try {
                    (await (0, a.wk)(v.id, { defaultReactionEmoji: g }), f());
                } catch (e) {
                    P(!0);
                } finally {
                    w(!1);
                }
            }
        };
    return (0, i.jsxs)(l.u, {
        title: u.intl.string(u.t.XlDE3t),
        subtitle: u.intl.string(u.t.lVqhdX),
        transitionState: y,
        onClose: f,
        actions: [
            {
                variant: 'secondary',
                text: u.intl.string(u.t['ETE/oK']),
                onClick: f
            },
            {
                variant: 'primary',
                text: u.intl.string(u.t.R3BPHx),
                loading: N,
                disabled: !C,
                onClick: S,
                autoFocus: !0
            }
        ],
        children: [
            (0, i.jsx)(s.Z, { reactionEmoji: g }),
            (0, i.jsxs)(r.hE2, {
                size: 'sm',
                className: m.buttonRow,
                children: [
                    (0, i.jsx)(r.yRy, {
                        targetElementRef: k,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(c.Z, {
                                guildId: null == v ? void 0 : v.guild_id,
                                closePopout: t,
                                onSelectEmoji: (e) => {
                                    let { emoji: n, willClose: i } = e;
                                    (I(n), i && t());
                                },
                                pickerIntention: d.Hz.COMMUNITY_CONTENT,
                                channel: v
                            });
                        },
                        position: 'right',
                        animation: r.yRy.Animation.NONE,
                        align: 'center',
                        children: (e) => {
                            var t, n;
                            return (0, i.jsx)(
                                r.zxk,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                ((i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        buttonRef: k,
                                        text: u.intl.string(u.t['59QgaG']),
                                        variant: 'primary',
                                        onClick: (t) => {
                                            var n;
                                            null == (n = e.onClick) || n.call(e, t);
                                        }
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t)
                            );
                        }
                    }),
                    null != g &&
                        (0, i.jsx)(r.zxk, {
                            text: u.intl.string(u.t.N86XcH),
                            variant: 'critical-secondary',
                            onClick: () => I(null)
                        })
                ]
            }),
            E
                ? (0, i.jsx)(r.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-danger',
                      children: u.intl.string(u.t.F75nNj)
                  })
                : null
        ]
    });
};
