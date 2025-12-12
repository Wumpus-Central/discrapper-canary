n.d(t, { default: () => f }), n(388685);
var i = n(54381),
    o = n(473749),
    l = n(793030),
    a = n(481060),
    r = n(787014),
    c = n(907040),
    s = n(946458),
    d = n(185923),
    u = n(388032),
    m = n(47945);
let f = (e) => {
    var t, n, f, j, b, p, x;
    let { channel: h, onClose: v, transitionState: y } = e,
        [g, O] = o.useState(null != (f = h.defaultReactionEmoji) ? f : null),
        [N, w] = o.useState(!1),
        [E, P] = o.useState(!1),
        k = o.useRef(null),
        C =
            (null != (j = null == (t = h.defaultReactionEmoji) ? void 0 : t.emojiId) ? j : null) !==
            (null != (b = null == g ? void 0 : g.emojiId) ? b : null),
        R =
            (null != (p = null == (n = h.defaultReactionEmoji) ? void 0 : n.emojiName) ? p : null) !==
            (null != (x = null == g ? void 0 : g.emojiName) ? x : null),
        B = C || R,
        I = (e) => {
            O(
                null == e
                    ? null
                    : (null == e ? void 0 : e.id) != null
                      ? { emojiId: e.id }
                      : { emojiName: e.optionallyDiverseSequence },
            );
        },
        S = async () => {
            if (B) {
                w(!0), P(!1);
                try {
                    await (0, r.wk)(h.id, { defaultReactionEmoji: g }), v();
                } catch (e) {
                    P(!0);
                } finally {
                    w(!1);
                }
            }
        };
    return (0, i.jsxs)(l.Modal, {
        title: u.intl.string(u.t.XlDE3k),
        subtitle: u.intl.string(u.t.lVqhdd),
        transitionState: y,
        onClose: v,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: v,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t["R3BPH+"]),
                loading: N,
                disabled: !B,
                onClick: S,
                autoFocus: !0,
            },
        ],
        children: [
            (0, i.jsx)(s.Z, { reactionEmoji: g }),
            (0, i.jsxs)(a.ButtonGroup, {
                size: "sm",
                className: m.buttonRow,
                children: [
                    (0, i.jsx)(a.yRy, {
                        targetElementRef: k,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(c.Z, {
                                guildId: null == h ? void 0 : h.guild_id,
                                closePopout: t,
                                onSelectEmoji: (e) => {
                                    let { emoji: n, willClose: i } = e;
                                    I(n), i && t();
                                },
                                pickerIntention: d.Hz.COMMUNITY_CONTENT,
                                channel: h,
                            });
                        },
                        position: "right",
                        animation: a.yRy.Animation.NONE,
                        align: "center",
                        children: (e) => {
                            var t, n;
                            return (0, i.jsx)(
                                a.Button,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        buttonRef: k,
                                        text: u.intl.string(u.t["59QgaD"]),
                                        variant: "primary",
                                        onClick: (t) => {
                                            var n;
                                            null == (n = e.onClick) || n.call(e, t);
                                        },
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
                                t),
                            );
                        },
                    }),
                    null != g &&
                        (0, i.jsx)(a.Button, {
                            text: u.intl.string(u.t.N86XcP),
                            variant: "critical-secondary",
                            onClick: () => I(null),
                        }),
                ],
            }),
            E
                ? (0, i.jsx)(a.Text, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      children: u.intl.string(u.t.F75nNl),
                  })
                : null,
        ],
    });
};
