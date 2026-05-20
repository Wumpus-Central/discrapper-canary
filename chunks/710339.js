n.d(e, { default: () => E });
var l = n(627968),
    i = n(64700),
    a = n(522579),
    d = n(17928),
    r = n(477782),
    s = n(192308),
    o = n(980707),
    u = n(157559),
    c = n(442433),
    b = n(847767),
    g = n(358367),
    f = n(793574),
    p = n(50268),
    h = n(576705),
    A = n(723702),
    m = n(19575),
    w = n(102597),
    x = n(688810),
    y = n(915089),
    j = n(287809),
    C = n(428262),
    D = n(813564);
n(980504);
var U = n(375708),
    k = n(652215);
let E = (0, g.A)(
    (0, b.A)(
        function (t) {
            let { soundGuild: e, sound: b, activeCallGuildId: g, onSelect: f } = t,
                k = (function (t, e) {
                    let { canManageGuildExpressions: a } = (0, d.cf)(
                            [h.A],
                            () => (null == e ? { canManageGuildExpressions: !1 } : h.A.getGuildPermissionProps(e)),
                            [e],
                        ),
                        o = i.useCallback(() => {
                            if (e?.id == null) return null;
                            (0, s.openModalLazy)(async () => {
                                let { default: i } = await Promise.all([
                                    n.e("19397"),
                                    n.e("67485"),
                                    n.e("60909"),
                                    n.e("8516"),
                                    n.e("25652"),
                                    n.e("8555"),
                                    n.e("20287"),
                                    n.e("83952"),
                                    n.e("66580"),
                                    n.e("8979"),
                                    n.e("20643"),
                                    n.e("80559"),
                                    n.e("98913"),
                                    n.e("74049"),
                                    n.e("69006"),
                                    n.e("12811"),
                                ]).then(n.bind(n, 191110));
                                return (n) => (0, l.jsx)(i, { ...n, existingSound: t, guildId: e.id });
                            });
                        }, [e, t]);
                    return a
                        ? (0, l.jsx)(
                              r.Dr,
                              { id: "edit-soundboard-sound", label: U.intl.string(U.t.ponZcG), action: o },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(b, e),
                E = (function (t) {
                    let { soundId: e } = t,
                        n = i.useCallback(async () => {
                            try {
                                let t = (0, w.A)(e),
                                    n = await fetch(t),
                                    l = await n.blob(),
                                    i = (function (t) {
                                        switch (t.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw Error("unable to determine file type");
                                        }
                                    })(l),
                                    d = `${e}.${i}`;
                                A.isPlatformEmbedded ? await m.Ay.saveFile(t, d) : (0, a.saveAs)(l, d);
                            } catch (t) {
                                u.A.show({
                                    title: U.intl.string(U.t.mK3tDH),
                                    body: U.intl.string(U.t.jLlfDN),
                                    confirmText: U.intl.string(U.t.BddRzS),
                                });
                            }
                        }, [e]);
                    return "0" === t.guildId
                        ? null
                        : (0, l.jsx)(
                              r.Dr,
                              { id: "download-soundboard-sound", label: U.intl.string(U.t["/fzLLK"]), action: n },
                              "download-soundboard-sound",
                          );
                })(b),
                N = (function (t, e) {
                    let { analyticsLocations: n } = (0, x.Ay)(),
                        i = (0, d.bG)([j.default], () => j.default.getCurrentUser()),
                        a = (0, y.GV)(),
                        s = (0, y.GV)();
                    return null != e && C.Ay.canUseCustomCallSounds(i)
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(r.Dr, {
                                      id: a,
                                      label: U.intl.string(U.t.p2hUt7),
                                      action: () => (0, D.un)(e, t, n),
                                  }),
                                  (0, l.jsx)(r.Dr, {
                                      id: s,
                                      label: U.intl.string(U.t["/yA6Qd"]),
                                      action: () => (0, D.un)("0", t, n),
                                  }),
                              ],
                          })
                        : null;
                })(b, g),
                T = (0, p.A)({ id: b.soundId, label: U.intl.string(U.t.HJikXp) });
            return (0, l.jsx)(o.W, {
                "data-menu-migrated": !0,
                navId: "sound-button-context",
                onClose: c.Z_,
                "aria-label": U.intl.string(U.t.liqwPJ),
                onSelect: f,
                children: (0, l.jsxs)(r.rX, { children: [k, N, E, T] }),
            });
        },
        { object: k.ZSU.CONTEXT_MENU },
    ),
    [f.A.CONTEXT_MENU, f.A.SOUNDBOARD_BUTTON],
);
