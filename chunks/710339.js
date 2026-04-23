"use strict";
n.d(e, { default: () => R });
var r = n(627968),
    o = n(64700),
    i = n(522579),
    a = n(17928),
    s = n(477782),
    u = n(192308),
    l = n(550079),
    c = n(157559),
    d = n(442433),
    f = n(847767),
    p = n(358367),
    w = n(793574),
    y = n(50268),
    b = n(576705),
    g = n(723702),
    h = n(19575),
    v = n(102597),
    m = n(688810),
    S = n(915089),
    A = n(287809),
    x = n(927578),
    O = n(536432);
n(980504);
var E = n(985018),
    N = n(652215);
let R = (0, p.A)(
    (0, f.A)(
        function (t) {
            let { soundGuild: e, sound: f, activeCallGuildId: p, onSelect: w } = t,
                N = (function (t, e) {
                    let { canManageGuildExpressions: i } = (0, a.cf)(
                            [b.A],
                            () => (null == e ? { canManageGuildExpressions: !1 } : b.A.getGuildPermissionProps(e)),
                            [e],
                        ),
                        l = o.useCallback(() => {
                            if (e?.id == null) return null;
                            (0, u.openModalLazy)(async () => {
                                let { default: o } = await Promise.all([n.e("8555"), n.e("12811"), n.e("28000")]).then(
                                    n.bind(n, 191110),
                                );
                                return (n) => (0, r.jsx)(o, { ...n, existingSound: t, guildId: e.id });
                            });
                        }, [e, t]);
                    return i
                        ? (0, r.jsx)(
                              s.Dr,
                              { id: "edit-soundboard-sound", label: E.intl.string(E.t.ponZcG), action: l },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(f, e),
                R = (function (t) {
                    let { soundId: e } = t,
                        n = o.useCallback(async () => {
                            try {
                                let t = (0, v.A)(e),
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
                                    a = `${e}.${o}`;
                                g.isPlatformEmbedded ? await h.Ay.saveFile(t, a) : (0, i.saveAs)(r, a);
                            } catch (t) {
                                c.A.show({
                                    title: E.intl.string(E.t.mK3tDH),
                                    body: E.intl.string(E.t.jLlfDN),
                                    confirmText: E.intl.string(E.t.BddRzS),
                                });
                            }
                        }, [e]);
                    return "0" === t.guildId
                        ? null
                        : (0, r.jsx)(
                              s.Dr,
                              { id: "download-soundboard-sound", label: E.intl.string(E.t["/fzLLK"]), action: n },
                              "download-soundboard-sound",
                          );
                })(f),
                j = (function (t, e) {
                    let { analyticsLocations: n } = (0, m.Ay)(),
                        o = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
                        i = (0, S.GV)(),
                        u = (0, S.GV)();
                    return null != e && x.Ay.canUseCustomCallSounds(o)
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(s.Dr, {
                                      id: i,
                                      label: E.intl.string(E.t.p2hUt7),
                                      action: () => (0, O.un)(e, t, n),
                                  }),
                                  (0, r.jsx)(s.Dr, {
                                      id: u,
                                      label: E.intl.string(E.t["/yA6Qd"]),
                                      action: () => (0, O.un)("0", t, n),
                                  }),
                              ],
                          })
                        : null;
                })(f, p),
                T = (0, y.A)({ id: f.soundId, label: E.intl.string(E.t.HJikXp) });
            return (0, r.jsx)(l.W, {
                "data-menu-migrated": !0,
                navId: "sound-button-context",
                onClose: d.Z_,
                "aria-label": E.intl.string(E.t.liqwPJ),
                onSelect: w,
                children: (0, r.jsxs)(s.rX, { children: [N, j, R, T] }),
            });
        },
        { object: N.ZSU.CONTEXT_MENU },
    ),
    [w.A.CONTEXT_MENU, w.A.SOUNDBOARD_BUTTON],
);
