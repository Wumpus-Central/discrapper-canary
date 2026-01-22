n.d(t, {
    R: () => m,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(565645),
    o = n(375499),
    c = n(937773),
    u = n(961350),
    d = n(734057),
    f = n(309010),
    p = n(559405),
    h = n(652215),
    b = n(307731),
    g = n(680930);

function m(e) {
    let {
            customStatusEmoji: t,
            setCustomStatusEmoji: n,
            selectedDefaultStatus: m,
            setIsEmojiPickerOpen: A,
            defaultStatusVariant: y,
        } = e,
        O = l.useRef(null),
        j = (0, i.bG)([f.A, d.A], () => d.A.getChannel(f.A.getVoiceChannelId())),
        v = l.useCallback(
            () =>
                null != t
                    ? (0, r.jsx)(s.A, {
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: !!t.animated,
                      })
                    : null != m
                      ? (0, r.jsx)(p.A, {
                            className: g.Kk,
                            userId: u.default.getId(),
                            size: 20,
                            hangStatusActivity: {
                                type: h.$pd.HANG_STATUS,
                                state: m,
                            },
                            fallbackVariant: y,
                        })
                      : null,
            [t, y, m],
        );
    return (0, r.jsx)(a.YNO, {
        targetElementRef: O,
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            var t;
            let { closePopout: l } = e;
            return (0, r.jsx)(c.A, {
                channel: j,
                guildId: null != (t = null == j ? void 0 : j.guild_id) ? t : void 0,
                closePopout: l,
                onSelectEmoji: (e) => {
                    var t;
                    let { emoji: r, willClose: i } = e;
                    null == r
                        ? n(null)
                        : n(
                              null != r.id
                                  ? {
                                        id: r.id,
                                        name: r.name,
                                        animated: r.animated,
                                    }
                                  : {
                                        id: null,
                                        name: null != (t = r.optionallyDiverseSequence) ? t : "",
                                        animated: !1,
                                    },
                          ),
                        i && l();
                },
                pickerIntention: b.b_.STATUS,
            });
        },
        position: "left",
        animation: a.YNO.Animation.NONE,
        align: "top",
        children: (e, n) => {
            var l, i;
            let { isShown: a } = n;
            return (0, r.jsx)(
                o.A,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        ref: O,
                        active: a,
                        tabIndex: 0,
                        renderButtonContents: null == t && null == m ? null : v,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l),
            );
        },
    });
}
