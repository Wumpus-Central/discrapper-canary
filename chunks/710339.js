n.d(t, { default: () => E });
var l = n(477900),
    i = n(582128),
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
    C = n(158045),
    D = n(813564);
n(980504);
var U = n(375708),
    k = n(652215);
let E = (0, g.A)(
    (0, b.A)(
        function (e) {
            let { soundGuild: t, sound: b, activeCallGuildId: g, onSelect: f } = e,
                k = (function (e, t) {
                    let { canManageGuildExpressions: a } = (0, d.cf)(
                            [h.A],
                            () => (null == t ? { canManageGuildExpressions: !1 } : h.A.getGuildPermissionProps(t)),
                            [t],
                        ),
                        o = i.useCallback(() => {
                            if (t?.id == null) return null;
                            (0, s.openModalLazy)(async () => {
                                let { default: i } = await Promise.all([
                                    n.e("860350"),
                                    n.e("207998"),
                                    n.e("720210"),
                                    n.e("82389"),
                                    n.e("132502"),
                                    n.e("230029"),
                                    n.e("891089"),
                                    n.e("174554"),
                                    n.e("196063"),
                                    n.e("392028"),
                                    n.e("124054"),
                                    n.e("441674"),
                                    n.e("152862"),
                                    n.e("148326"),
                                    n.e("148729"),
                                    n.e("650195"),
                                    n.e("401317"),
                                    n.e("311580"),
                                    n.e("67702"),
                                    n.e("702154"),
                                    n.e("296956"),
                                    n.e("334168"),
                                    n.e("179652"),
                                    n.e("775417"),
                                    n.e("67491"),
                                    n.e("424199"),
                                    n.e("342551"),
                                    n.e("264236"),
                                    n.e("721690"),
                                    n.e("536200"),
                                    n.e("136022"),
                                    n.e("417286"),
                                    n.e("832817"),
                                    n.e("425544"),
                                    n.e("416143"),
                                    n.e("844695"),
                                    n.e("92124"),
                                    n.e("988077"),
                                    n.e("776750"),
                                    n.e("308555"),
                                    n.e("428296"),
                                    n.e("561216"),
                                    n.e("50015"),
                                    n.e("313681"),
                                    n.e("343550"),
                                    n.e("552712"),
                                    n.e("829177"),
                                    n.e("106943"),
                                    n.e("232551"),
                                    n.e("631644"),
                                    n.e("892340"),
                                    n.e("14962"),
                                    n.e("786751"),
                                    n.e("588940"),
                                    n.e("770697"),
                                    n.e("561279"),
                                    n.e("894747"),
                                    n.e("790244"),
                                    n.e("121435"),
                                    n.e("592731"),
                                    n.e("718573"),
                                    n.e("346102"),
                                    n.e("486792"),
                                    n.e("537894"),
                                    n.e("548974"),
                                    n.e("273232"),
                                    n.e("799657"),
                                    n.e("240511"),
                                    n.e("817852"),
                                    n.e("831145"),
                                    n.e("187856"),
                                    n.e("332470"),
                                    n.e("400954"),
                                    n.e("610449"),
                                    n.e("810034"),
                                    n.e("32781"),
                                    n.e("773192"),
                                    n.e("73500"),
                                    n.e("565065"),
                                    n.e("662355"),
                                    n.e("622825"),
                                    n.e("616592"),
                                    n.e("883952"),
                                    n.e("220287"),
                                    n.e("66580"),
                                    n.e("808979"),
                                    n.e("420643"),
                                    n.e("974049"),
                                    n.e("280559"),
                                    n.e("669006"),
                                    n.e("98913"),
                                    n.e("612811"),
                                ]).then(n.bind(n, 191110));
                                return (n) => (0, l.jsx)(i, { ...n, existingSound: e, guildId: t.id });
                            });
                        }, [t, e]);
                    return a
                        ? (0, l.jsx)(
                              r.Dr,
                              { id: "edit-soundboard-sound", label: U.intl.string(U.t.ponZcG), action: o },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(b, t),
                E = (function (e) {
                    let { soundId: t } = e,
                        n = i.useCallback(async () => {
                            try {
                                let e = (0, w.A)(t),
                                    n = await fetch(e),
                                    l = await n.blob(),
                                    i = (function (e) {
                                        switch (e.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw Error("unable to determine file type");
                                        }
                                    })(l),
                                    d = `${t}.${i}`;
                                A.isPlatformEmbedded ? await m.Ay.saveFile(e, d) : (0, a.saveAs)(l, d);
                            } catch (e) {
                                u.A.show({
                                    title: U.intl.string(U.t.mK3tDH),
                                    body: U.intl.string(U.t.jLlfDN),
                                    confirmText: U.intl.string(U.t.BddRzS),
                                });
                            }
                        }, [t]);
                    return "0" === e.guildId
                        ? null
                        : (0, l.jsx)(
                              r.Dr,
                              { id: "download-soundboard-sound", label: U.intl.string(U.t["/fzLLK"]), action: n },
                              "download-soundboard-sound",
                          );
                })(b),
                N = (function (e, t) {
                    let { analyticsLocations: n } = (0, x.Ay)(),
                        i = (0, d.bG)([j.default], () => j.default.getCurrentUser()),
                        a = (0, y.GV)(),
                        s = (0, y.GV)();
                    return null != t && C.Ay.canUseCustomCallSounds(i)
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(r.Dr, {
                                      id: a,
                                      label: U.intl.string(U.t.p2hUt7),
                                      action: () => (0, D.un)(t, e, n),
                                  }),
                                  (0, l.jsx)(r.Dr, {
                                      id: s,
                                      label: U.intl.string(U.t["/yA6Qd"]),
                                      action: () => (0, D.un)("0", e, n),
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
