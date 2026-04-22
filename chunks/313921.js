"use strict";
n.d(e, { default: () => x });
var r = n(627968),
    o = n(64700),
    i = n(522579),
    a = n(311907),
    s = n(477782),
    u = n(192308),
    l = n(861672),
    c = n(157559),
    d = n(442433),
    f = n(847767),
    p = n(358367),
    w = n(793574),
    y = n(50268),
    b = n(576705),
    g = n(723702),
    v = n(837921),
    h = n(102597),
    m = n(629788);
n(980504);
var S = n(652215),
    A = n(985018);
let x = (0, p.A)(
    (0, f.A)(
        function (t) {
            let { soundGuild: e, sound: f, activeCallGuildId: p, onSelect: w } = t,
                S = (function (t, e) {
                    let { canManageGuildExpressions: i } = (0, a.cf)(
                            [b.A],
                            () => (null == e ? { canManageGuildExpressions: !1 } : b.A.getGuildPermissionProps(e)),
                            [e],
                        ),
                        l = o.useCallback(() => {
                            if (e?.id == null) return null;
                            (0, u.openModalLazy)(async () => {
                                let { default: o } = await Promise.all([n.e("8555"), n.e("40556"), n.e("36658")]).then(
                                    n.bind(n, 6503),
                                );
                                return (n) => (0, r.jsx)(o, { ...n, existingSound: t, guildId: e.id });
                            });
                        }, [e, t]);
                    return i
                        ? (0, r.jsx)(
                              s.Dr,
                              { id: "edit-soundboard-sound", label: A.intl.string(A.t.ponZcG), action: l },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(f, e),
                x = (function (t) {
                    let { soundId: e } = t,
                        n = o.useCallback(async () => {
                            try {
                                let t = (0, h.A)(e),
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
                                g.isPlatformEmbedded ? await v.Ay.saveFile(t, a) : (0, i.saveAs)(r, a);
                            } catch (t) {
                                c.A.show({
                                    title: A.intl.string(A.t.mK3tDH),
                                    body: A.intl.string(A.t.jLlfDN),
                                    confirmText: A.intl.string(A.t.BddRzS),
                                });
                            }
                        }, [e]);
                    return "0" === t.guildId
                        ? null
                        : (0, r.jsx)(
                              s.Dr,
                              { id: "download-soundboard-sound", label: A.intl.string(A.t["/fzLLK"]), action: n },
                              "download-soundboard-sound",
                          );
                })(f),
                O = (0, m.A)(f, p),
                E = (0, y.A)({ id: f.soundId, label: A.intl.string(A.t.HJikXp) });
            return (0, r.jsx)(l.W, {
                "data-menu-migrated": !0,
                navId: "sound-button-context",
                onClose: d.Z_,
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: w,
                children: (0, r.jsxs)(s.rX, { children: [S, O, x, E] }),
            });
        },
        { object: S.ZSU.CONTEXT_MENU },
    ),
    [w.A.CONTEXT_MENU, w.A.SOUNDBOARD_BUTTON],
);
