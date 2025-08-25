n.d(t, { A: () => h });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(596454),
    s = n(318766),
    c = n(907040),
    u = n(592125),
    d = n(944486),
    p = n(185923);
function h(e) {
    let { customStatusEmoji: t, setCustomStatusEmoji: n } = e,
        h = i.useRef(null),
        f = (0, l.e7)([d.Z, u.Z], () => u.Z.getChannel(d.Z.getVoiceChannelId()));
    return (0, r.jsx)(a.yRy, {
        targetElementRef: h,
        renderPopout: (e) => {
            var t;
            let { closePopout: i } = e;
            return (0, r.jsx)(c.Z, {
                channel: f,
                guildId: null != (t = null == f ? void 0 : f.guild_id) ? t : void 0,
                closePopout: i,
                onSelectEmoji: (e) => {
                    let { emoji: t, willClose: r } = e;
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
                        r && i();
                },
                pickerIntention: p.Hz.STATUS,
            });
        },
        position: "left",
        animation: a.yRy.Animation.NONE,
        align: "top",
        children: (e, n) => {
            var i, l;
            let { isShown: a } = n;
            return (0, r.jsx)(
                s.Z,
                ((i = (function (e) {
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
                (l = l =
                    {
                        ref: h,
                        active: a,
                        tabIndex: 0,
                        renderButtonContents:
                            null == t
                                ? null
                                : () =>
                                      (0, r.jsx)(o.Z, {
                                          emojiId: t.id,
                                          emojiName: t.name,
                                          animated: !!t.animated,
                                      }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i),
            );
        },
    });
}
