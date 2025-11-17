n.d(e, { default: () => P }), n(415506);
var r = n(54381),
    o = n(473749),
    i = n(817080),
    l = n(442837),
    c = n(481060),
    a = n(668781),
    u = n(239091),
    s = n(883385),
    d = n(108843),
    b = n(100527),
    f = n(299206),
    p = n(496675),
    y = n(358085),
    g = n(998502),
    j = n(22382),
    O = n(51078),
    h = n(710111),
    w = n(981631),
    v = n(388032);
let P = (0, d.Z)(
    (0, s.Z)(
        function (t) {
            let { soundGuild: e, sound: s, activeCallGuildId: d, onSelect: b } = t,
                w = (function (t, e) {
                    let { canManageGuildExpressions: i } = (0, l.cj)(
                            [p.Z],
                            () => (null == e ? { canManageGuildExpressions: !1 } : p.Z.getGuildPermissionProps(e)),
                            [e],
                        ),
                        a = o.useCallback(() => {
                            if ((null == e ? void 0 : e.id) == null) return null;
                            (0, c.ZDy)(async () => {
                                let { default: o } = await Promise.all([n.e("56035"), n.e("87262")]).then(
                                    n.bind(n, 758961),
                                );
                                return (n) => {
                                    var i, l;
                                    return (0, r.jsx)(
                                        o,
                                        ((i = (function (t) {
                                            for (var e = 1; e < arguments.length; e++) {
                                                var n = null != arguments[e] ? arguments[e] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                        }),
                                                    )),
                                                    r.forEach(function (e) {
                                                        var r;
                                                        (r = n[e]),
                                                            e in t
                                                                ? Object.defineProperty(t, e, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (t[e] = r);
                                                    });
                                            }
                                            return t;
                                        })({}, n)),
                                        (l = l =
                                            {
                                                existingSound: t,
                                                guildId: e.id,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                            : (function (t, e) {
                                                  var n = Object.keys(t);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(t);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(l)).forEach(function (t) {
                                                  Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t));
                                              }),
                                        i),
                                    );
                                };
                            });
                        }, [e, t]);
                    return i
                        ? (0, r.jsx)(
                              c.sNh,
                              {
                                  id: "edit-soundboard-sound",
                                  label: v.intl.string(v.t.ponZcG),
                                  action: a,
                              },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(s, e),
                P = (function (t) {
                    let { soundId: e } = t,
                        n = o.useCallback(async () => {
                            try {
                                let t = (0, j.Z)(e),
                                    n = await fetch(t),
                                    r = await n.blob(),
                                    o = (function (t) {
                                        switch (t.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw Error("unable to determine file type");
                                        }
                                    })(r),
                                    l = "".concat(e, ".").concat(o);
                                y.isPlatformEmbedded ? await g.ZP.saveFile(t, l) : (0, i.saveAs)(r, l);
                            } catch (t) {
                                a.Z.show({
                                    title: v.intl.string(v.t.mK3tDH),
                                    body: v.intl.string(v.t.jLlfDN),
                                    confirmText: v.intl.string(v.t.BddRzS),
                                });
                            }
                        }, [e]);
                    return t.guildId === h.X8
                        ? null
                        : (0, r.jsx)(
                              c.sNh,
                              {
                                  id: "download-soundboard-sound",
                                  label: v.intl.string(v.t["/fzLLK"]),
                                  action: n,
                              },
                              "download-soundboard-sound",
                          );
                })(s),
                m = (0, O.Z)(s, d),
                Z = (0, f.Z)({
                    id: s.soundId,
                    label: v.intl.string(v.t.HJikXp),
                });
            return (0, r.jsx)(c.v2r, {
                navId: "sound-button-context",
                onClose: u.Zy,
                "aria-label": v.intl.string(v.t.liqwPJ),
                onSelect: b,
                children: (0, r.jsxs)(c.kSQ, {
                    children: [w, m, P, Z],
                }),
            });
        },
        { object: w.qAy.CONTEXT_MENU },
    ),
    [b.Z.CONTEXT_MENU, b.Z.SOUNDBOARD_BUTTON],
);
