n.d(t, { default: () => h }), n(65821);
var r = n(627968),
    o = n(64700),
    i = n(522579),
    l = n(311907),
    c = n(397927),
    a = n(157559),
    u = n(442433),
    s = n(847767),
    d = n(358367),
    b = n(793574),
    f = n(50268),
    p = n(576705),
    y = n(723702),
    g = n(837921),
    O = n(102597),
    j = n(629788),
    w = n(980504),
    m = n(652215),
    v = n(985018);
let h = (0, d.A)(
    (0, s.A)(
        function (e) {
            let { soundGuild: t, sound: s, activeCallGuildId: d, onSelect: b } = e,
                m = (function (e, t) {
                    let { canManageGuildExpressions: i } = (0, l.cf)(
                            [p.A],
                            () => (null == t ? { canManageGuildExpressions: !1 } : p.A.getGuildPermissionProps(t)),
                            [t],
                        ),
                        a = o.useCallback(() => {
                            if ((null == t ? void 0 : t.id) == null) return null;
                            (0, c.mMO)(async () => {
                                let { default: o } = await Promise.all([n.e("40556"), n.e("61274")]).then(
                                    n.bind(n, 6503),
                                );
                                return (n) => {
                                    var i, l;
                                    return (0, r.jsx)(
                                        o,
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
                                        })({}, n)),
                                        (l = l =
                                            {
                                                existingSound: e,
                                                guildId: t.id,
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
                                };
                            });
                        }, [t, e]);
                    return i
                        ? (0, r.jsx)(
                              c.Drp,
                              {
                                  id: "edit-soundboard-sound",
                                  label: v.intl.string(v.t.ponZcG),
                                  action: a,
                              },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(s, t),
                h = (function (e) {
                    let { soundId: t } = e,
                        n = o.useCallback(async () => {
                            try {
                                let e = (0, O.A)(t),
                                    n = await fetch(e),
                                    r = await n.blob(),
                                    o = (function (e) {
                                        switch (e.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw Error("unable to determine file type");
                                        }
                                    })(r),
                                    l = "".concat(t, ".").concat(o);
                                y.isPlatformEmbedded ? await g.Ay.saveFile(e, l) : (0, i.saveAs)(r, l);
                            } catch (e) {
                                a.A.show({
                                    title: v.intl.string(v.t.mK3tDH),
                                    body: v.intl.string(v.t.jLlfDN),
                                    confirmText: v.intl.string(v.t.BddRzS),
                                });
                            }
                        }, [t]);
                    return e.guildId === w.mV
                        ? null
                        : (0, r.jsx)(
                              c.Drp,
                              {
                                  id: "download-soundboard-sound",
                                  label: v.intl.string(v.t["/fzLLK"]),
                                  action: n,
                              },
                              "download-soundboard-sound",
                          );
                })(s),
                P = (0, j.A)(s, d),
                A = (0, f.A)({
                    id: s.soundId,
                    label: v.intl.string(v.t.HJikXp),
                });
            return (0, r.jsx)(c.W1t, {
                navId: "sound-button-context",
                onClose: u.Z_,
                "aria-label": v.intl.string(v.t.liqwPJ),
                onSelect: b,
                children: (0, r.jsxs)(c.rXV, {
                    children: [m, P, h, A],
                }),
            });
        },
        { object: m.ZSU.CONTEXT_MENU },
    ),
    [b.A.CONTEXT_MENU, b.A.SOUNDBOARD_BUTTON],
);
