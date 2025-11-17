n.d(t, { default: () => j }), n(388685);
var i = n(54381),
    o = n(473749),
    l = n(793030),
    r = n(481060),
    a = n(787014),
    c = n(907040),
    s = n(946458),
    d = n(185923),
    u = n(388032),
    m = n(172107);
let j = (e) => {
    var t, n, j, p, b, h, x;
    let { channel: v, onClose: f, transitionState: y } = e,
        [g, O] = o.useState(null != (j = v.defaultReactionEmoji) ? j : null),
        [N, w] = o.useState(!1),
        [E, P] = o.useState(!1),
        k = o.useRef(null),
        _ =
            (null != (p = null == (t = v.defaultReactionEmoji) ? void 0 : t.emojiId) ? p : null) !==
            (null != (b = null == g ? void 0 : g.emojiId) ? b : null),
        C =
            (null != (h = null == (n = v.defaultReactionEmoji) ? void 0 : n.emojiName) ? h : null) !==
            (null != (x = null == g ? void 0 : g.emojiName) ? x : null),
        R = _ || C,
        B = (e) => {
            O(
                null == e
                    ? null
                    : (null == e ? void 0 : e.id) != null
                      ? { emojiId: e.id }
                      : { emojiName: e.optionallyDiverseSequence },
            );
        },
        I = async () => {
            if (R) {
                w(!0), P(!1);
                try {
                    await (0, a.wk)(v.id, { defaultReactionEmoji: g }), f();
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
        onClose: f,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: f,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t["R3BPH+"]),
                loading: N,
                disabled: !R,
                onClick: I,
                autoFocus: !0,
            },
        ],
        children: [
            (0, i.jsx)(s.Z, { reactionEmoji: g }),
            (0, i.jsxs)(r.ButtonGroup, {
                size: "sm",
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
                                    B(n), i && t();
                                },
                                pickerIntention: d.Hz.COMMUNITY_CONTENT,
                                channel: v,
                            });
                        },
                        position: "right",
                        animation: r.yRy.Animation.NONE,
                        align: "center",
                        children: (e) => {
                            var t, n;
                            return (0, i.jsx)(
                                r.Button,
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
                        (0, i.jsx)(r.Button, {
                            text: u.intl.string(u.t.N86XcP),
                            variant: "critical-secondary",
                            onClick: () => B(null),
                        }),
                ],
            }),
            E
                ? (0, i.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "text-danger",
                      children: u.intl.string(u.t.F75nNl),
                  })
                : null,
        ],
    });
};
