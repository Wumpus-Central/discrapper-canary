"use strict";
n.d(e, { default: () => S });
var r = n(627968),
    o = n(64700),
    i = n(522579),
    a = n(311907),
    s = n(397927),
    u = n(157559),
    l = n(442433),
    c = n(847767),
    d = n(358367),
    f = n(793574),
    p = n(50268),
    w = n(576705),
    b = n(723702),
    y = n(837921),
    g = n(102597),
    v = n(629788);
n(980504);
var h = n(652215),
    m = n(985018);
let S = (0, d.A)(
    (0, c.A)(
        function (t) {
            let { soundGuild: e, sound: c, activeCallGuildId: d, onSelect: f } = t,
                h = (function (t, e) {
                    let { canManageGuildExpressions: i } = (0, a.cf)(
                            [w.A],
                            () => (null == e ? { canManageGuildExpressions: !1 } : w.A.getGuildPermissionProps(e)),
                            [e],
                        ),
                        u = o.useCallback(() => {
                            if (e?.id == null) return null;
                            (0, s.mMO)(async () => {
                                let { default: o } = await Promise.all([n.e("8555"), n.e("40556"), n.e("99256")]).then(
                                    n.bind(n, 228884),
                                );
                                return (n) => (0, r.jsx)(o, { ...n, existingSound: t, guildId: e.id });
                            });
                        }, [e, t]);
                    return i
                        ? (0, r.jsx)(
                              s.Drp,
                              { id: "edit-soundboard-sound", label: m.intl.string(m.t.ponZcG), action: u },
                              "edit-soundboard-sound",
                          )
                        : null;
                })(c, e),
                S = (function (t) {
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
                                    a = `${e}.${o}`;
                                b.isPlatformEmbedded ? await y.Ay.saveFile(t, a) : (0, i.saveAs)(r, a);
                            } catch (t) {
                                u.A.show({
                                    title: m.intl.string(m.t.mK3tDH),
                                    body: m.intl.string(m.t.jLlfDN),
                                    confirmText: m.intl.string(m.t.BddRzS),
                                });
                            }
                        }, [e]);
                    return "0" === t.guildId
                        ? null
                        : (0, r.jsx)(
                              s.Drp,
                              { id: "download-soundboard-sound", label: m.intl.string(m.t["/fzLLK"]), action: n },
                              "download-soundboard-sound",
                          );
                })(c),
                A = (0, v.A)(c, d),
                O = (0, p.A)({ id: c.soundId, label: m.intl.string(m.t.HJikXp) });
            return (0, r.jsx)(s.W1t, {
                "data-menu-migrated": !0,
                navId: "sound-button-context",
                onClose: l.Z_,
                "aria-label": m.intl.string(m.t.liqwPJ),
                onSelect: f,
                children: (0, r.jsxs)(s.rXV, { children: [h, A, S, O] }),
            });
        },
        { object: h.ZSU.CONTEXT_MENU },
    ),
    [f.A.CONTEXT_MENU, f.A.SOUNDBOARD_BUTTON],
);
