n.d(e, {
    default: () => j,
}),
    n(65821);
var r = n(627968),
    o = n(64700),
    i = n(522579),
    a = n(311907),
    c = n(397927),
    u = n(157559),
    l = n(442433),
    s = n(847767),
    d = n(358367),
    f = n(793574),
    p = n(50268),
    b = n(576705),
    y = n(723702),
    O = n(837921),
    g = n(102597),
    w = n(629788),
    v = n(980504),
    m = n(652215),
    h = n(985018);
let j = (0, d.A)(
    (0, s.A)(
        function (t) {
            let { soundGuild: e, sound: s, activeCallGuildId: d, onSelect: f } = t,
                m = (function (t, e) {
                    let { canManageGuildExpressions: i } = (0, a.cf)(
                            [b.A],
                            () =>
                                null == e
                                    ? {
                                          canManageGuildExpressions: !1,
                                      }
                                    : b.A.getGuildPermissionProps(e),
                            [e],
                        ),
                        u = o.useCallback(() => {
                            if ((null == e ? void 0 : e.id) == null) return null;
                            (0, c.mMO)(async () => {
                                let { default: o } = await Promise.all([n.e("40556"), n.e("74152")]).then(
                                    n.bind(n, 6503),
                                );
                                return (n) => {
                                    var i, a;
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
                                        (a = a =
                                            {
                                                existingSound: t,
                                                guildId: e.id,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                            : (function (t, e) {
                                                  var n = Object.keys(t);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(t);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(a)).forEach(function (t) {
                                                  Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(a, t));
                                              }),
                                        i),
                                    );
                                };
                            });
                        }, [e, t]);
                    return i
                        ? (0, r.jsx)(
                              c.Drp,
                              {
                                  id: "edit-soundboard-sound",
                                  label: h.intl.string(h.t.ponZcG),
                                  action: u,
                              },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(s, e),
                j = (function (t) {
                    let { soundId: e } = t,
                        n = o.useCallback(async () => {
                            try {
                                let t = (0, g.A)(e),
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
                                    a = "".concat(e, ".").concat(o);
                                y.isPlatformEmbedded ? await O.Ay.saveFile(t, a) : (0, i.saveAs)(r, a);
                            } catch (t) {
                                u.A.show({
                                    title: h.intl.string(h.t.mK3tDH),
                                    body: h.intl.string(h.t.jLlfDN),
                                    confirmText: h.intl.string(h.t.BddRzS),
                                });
                            }
                        }, [e]);
                    return t.guildId === v.mV
                        ? null
                        : (0, r.jsx)(
                              c.Drp,
                              {
                                  id: "download-soundboard-sound",
                                  label: h.intl.string(h.t["/fzLLK"]),
                                  action: n,
                              },
                              "download-soundboard-sound",
                          );
                })(s),
                S = (0, w.A)(s, d),
                A = (0, p.A)({
                    id: s.soundId,
                    label: h.intl.string(h.t.HJikXp),
                });
            return (0, r.jsx)(c.W1t, {
                "data-menu-migrated": !0,
                navId: "sound-button-context",
                onClose: l.Z_,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: f,
                children: (0, r.jsxs)(c.rXV, {
                    children: [m, S, j, A],
                }),
            });
        },
        {
            object: m.ZSU.CONTEXT_MENU,
        },
    ),
    [f.A.CONTEXT_MENU, f.A.SOUNDBOARD_BUTTON],
);
