n.d(t, { A: () => b });
var i = n(951288),
    r = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(596454),
    s = n(318766),
    c = n(907040),
    u = n(314897),
    d = n(592125),
    p = n(944486),
    h = n(223135),
    f = n(981631),
    m = n(185923),
    g = n(787267);
function b(e) {
    let {
            customStatusEmoji: t,
            setCustomStatusEmoji: n,
            selectedDefaultStatus: b,
            setIsEmojiPickerOpen: y,
            defaultStatusVariant: C,
        } = e,
        v = r.useRef(null),
        _ = (0, l.e7)([p.Z, d.Z], () => d.Z.getChannel(p.Z.getVoiceChannelId())),
        x = r.useCallback(
            () =>
                null != t
                    ? (0, i.jsx)(o.Z, {
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: !!t.animated,
                      })
                    : null != b
                      ? (0, i.jsx)(h.Z, {
                            className: g.icon,
                            userId: u.default.getId(),
                            size: 20,
                            hangStatusActivity: {
                                type: f.IIU.HANG_STATUS,
                                state: b,
                            },
                            fallbackVariant: C,
                        })
                      : null,
            [t, C, b],
        );
    return (0, i.jsx)(a.yRy, {
        targetElementRef: v,
        onRequestOpen: () => y(!0),
        onRequestClose: () => y(!1),
        renderPopout: (e) => {
            var t;
            let { closePopout: r } = e;
            return (0, i.jsx)(c.Z, {
                channel: _,
                guildId: null != (t = null == _ ? void 0 : _.guild_id) ? t : void 0,
                closePopout: r,
                onSelectEmoji: (e) => {
                    let { emoji: t, willClose: i } = e;
                    ((e) => {
                        var t;
                        if (null == e) return n(null);
                        n(
                            null != e.id
                                ? {
                                      id: e.id,
                                      name: e.name,
                                      animated: e.animated,
                                  }
                                : {
                                      id: null,
                                      name: null != (t = e.optionallyDiverseSequence) ? t : "",
                                      animated: !1,
                                  },
                        );
                    })(t),
                        i && r();
                },
                pickerIntention: m.Hz.STATUS,
            });
        },
        position: "left",
        animation: a.yRy.Animation.NONE,
        align: "top",
        children: (e, n) => {
            var r, l;
            let { isShown: a } = n;
            return (0, i.jsx)(
                s.Z,
                ((r = (function (e) {
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
                (l = l =
                    {
                        ref: v,
                        active: a,
                        tabIndex: 0,
                        renderButtonContents: null == t && null == b ? null : x,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                r),
            );
        },
    });
}
