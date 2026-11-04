e.d(i, { default: () => W });
var t = e(477900);
e(582128);
var l = e(165862),
    o = e(477782),
    a = e(442433),
    r = e(793574),
    c = e(688810),
    s = e(253799),
    d = e(855986),
    u = e(192308),
    p = e(138134),
    y = e(540999),
    f = e(858899),
    g = e(624479),
    h = e(77729),
    A = e(696016),
    _ = e(683825),
    b = e(792996),
    x = e(241326),
    E = e(645655),
    I = e(549685),
    C = e(32880),
    D = e(903259),
    O = e(489496),
    j = e(589553),
    w = e(264572).hp,
    T = e(7807),
    v = e(931991),
    F = e(71393),
    P = e(576705),
    Z = e(711014),
    m = e(287809),
    N = e(105009),
    R = e(505930),
    S = e(807072),
    H = e(419490),
    L = e(74847),
    G = e(686320),
    X = e(829903),
    k = e(346411),
    B = e(781710),
    M = e(678708);
function U(n) {
    let {
            clips: i,
            channelId: U,
            onShare: W,
            onMainAction: K,
            mainAction: V,
            onEdit: Q,
            onBeforeDelete: Y,
            onAfterDelete: q,
            actionsDisabled: J = !1,
            displayConfiguration: $ = s.I,
        } = n,
        z = (function (n) {
            let { clips: i, channelId: e, onShare: l, onMainAction: r, mainAction: s, actionsDisabled: u = !1 } = n,
                { analyticsLocations: p } = (0, c.Ay)(),
                { label: y, icon: f } = (0, G.$)(null != r ? s : void 0),
                g = (0, d.bG)([H.Ay], () => i.some((n) => H.Ay.isClipExporting(n.id)));
            return (0, t.jsx)(o.Dr, {
                id: "share",
                label: y,
                leadingAccessory: { type: "icon", icon: f },
                disabled: u && !g,
                action: async function () {
                    if (((0, a.Z_)(), null != r)) {
                        (r(), l?.());
                        return;
                    }
                    let n = (0, L.t)(e);
                    (0, O.H1)(i.map((n) => n.id));
                    try {
                        await (0, X.K)(i, { channelId: n ? e : void 0, analyticsLocations: p });
                    } catch (n) {
                    } finally {
                        (0, O.H1)(null);
                    }
                    l?.();
                },
            });
        })({ clips: i, channelId: U, onShare: W, onMainAction: K, mainAction: V, actionsDisabled: J }),
        nn = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "edit",
                      label: b.intl.string(b.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: I.A },
                      disabled: l,
                      action: function () {
                          ((0, a.Z_)(), e?.());
                      },
                  });
        })({ clips: i, onEdit: Q, actionsDisabled: J }),
        ni = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "favorite",
                      label: b.intl.string(b.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: R.y },
                      disabled: e,
                      action: function () {
                          ((0, a.Z_)(), i.forEach((n) => (0, O.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        ne = (function (n) {
            let { clips: i, channelId: e } = n,
                { analyticsLocations: l } = (0, c.Ay)(),
                r = (0, d.bG)([Z.Ay, P.A, m.default, F.A], () =>
                    Z.Ay.getFlattenedGuildIds().some((n) => {
                        let i = F.A.getGuild(n);
                        return null != i && (0, v.ie)(i, P.A, m.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            return i.length > 1 || !r || s.type === A.nQ.SCREENSHOT
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-export-soundboard",
                      label: b.intl.string(_.default.HH4Tjj),
                      leadingAccessory: { type: "icon", icon: T.J },
                      action: async function () {
                          ((0, a.Z_)(), await (0, N.n)(s, { analyticsLocations: l, channelId: e }));
                      },
                  });
        })({ clips: i, channelId: U }),
        nt = (function (n) {
            let { clips: i } = n,
                e = i[0];
            return i.length > 1 || null == h.A.clipboard.copyFile
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-copy-video",
                      label: b.intl.string(_.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: g.CopyIcon },
                      action: async function () {
                          (0, a.Z_)();
                          let n = h.A.clipboard.copyFile(e.filepath);
                          if (null != n)
                              try {
                                  await n;
                              } catch (n) {
                                  (A.GU.error("Error copying clip to clipboard", n),
                                      (0, f.P0)({ text: b.intl.string(b.t.iufib1), variant: "critical" }));
                                  return;
                              }
                          (0, f.P0)({ text: b.intl.string(b.t.mGZ66D), variant: "success" });
                      },
                  });
        })({ clips: i }),
        nl = (function (n) {
            let { clips: i } = n,
                { analyticsLocations: e } = (0, c.Ay)(),
                l = i[0];
            if (i.length > 1) return null;
            let s = l.type === A.nQ.SCREENSHOT;
            return (0, t.jsxs)(o.Dr, {
                id: "clips-export-group",
                label: b.intl.string(b.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                children: [
                    (0, t.jsx)(o.Dr, {
                        id: "clips-export-file",
                        label: s ? b.intl.string(b.t.y5FgMk) : b.intl.string(b.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                        action: async function () {
                            ((0, a.Z_)(), (0, O.H1)([l.id]));
                            try {
                                let n = await (0, O.VO)(l, { analyticsLocations: [...e, r.A.CLIPS_EXPORT_TO_FILE] }),
                                    i = await n.arrayBuffer(),
                                    t = (0, j.A)(l, s ? "jpeg" : "mp4");
                                await h.A.fileManager.saveWithDialog(w.from(i), t);
                            } catch (n) {
                                A.GU.error("Error exporting clip to file", n);
                            } finally {
                                (0, O.H1)(null);
                            }
                        },
                    }),
                    !s &&
                        (0, t.jsx)(o.Dr, {
                            id: "clips-export-sound-file",
                            label: b.intl.string(b.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                            action: async function () {
                                ((0, a.Z_)(), (0, O.H1)([l.id]));
                                try {
                                    let n = await (0, O.VO)(l, {
                                            analyticsLocations: [...e, r.A.CLIPS_EXPORT_TO_SOUND_FILE],
                                        }),
                                        i = await (0, D.R_)(n),
                                        t = await i.arrayBuffer(),
                                        o = (0, j.A)(l, "ogg");
                                    await h.A.fileManager.saveWithDialog(w.from(t), o);
                                } catch (n) {
                                    A.GU.error("Error exporting clip to sound file", n);
                                } finally {
                                    (0, O.H1)(null);
                                }
                            },
                        }),
                ],
            });
        })({ clips: i }),
        no = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "unfavorite",
                      label: b.intl.string(_.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: S.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          ((0, a.Z_)(), i.forEach((n) => (0, O.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        na = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: r = !1 } = n;
            return (0, t.jsx)(o.Dr, {
                id: "clips-delete",
                label: b.intl.string(b.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: x.TrashIcon },
                color: "danger",
                disabled: r,
                action: function (n) {
                    ((0, a.Z_)(), (0, E.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l }));
                },
            });
        })({ clips: i, onBeforeDelete: Y, onAfterDelete: q, actionsDisabled: J }),
        nr = (function (n) {
            let { clips: i } = n;
            return (0, t.jsx)(o.Dr, {
                leadingAccessory: { type: "icon", icon: M.FolderIcon },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    ((0, a.Z_)(), h.A.fileManager.showItemInFolder(i[0].filepath));
                },
            });
        })({ clips: i }),
        nc = (function (n) {
            let { clips: i } = n;
            return (0, d.bG)([y.A], () => y.A.isDeveloper)
                ? (0, t.jsx)(o.Dr, {
                      leadingAccessory: { type: "icon", icon: k.WrenchIcon },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          ((0, a.Z_)(), (0, u.s7)(), (0, B.h)(i[0].filepath));
                      },
                  })
                : null;
        })({ clips: i }),
        ns = (function (n) {
            let { clips: i } = n,
                l = (0, d.bG)([y.A], () => y.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: p.FlagIcon },
                      action: function () {
                          ((0, a.Z_)(),
                              (0, u.mM)(
                                  async () => {
                                      let { default: n } = await Promise.all([
                                          e.e(142753),
                                          e.e(508702),
                                          e.e(268582),
                                          e.e(161379),
                                          e.e(153496),
                                      ]).then(e.bind(e, 490059));
                                      return (e) => (0, t.jsx)(n, { ...e, clip: i[0] });
                                  },
                                  { stackingBehavior: "stack" },
                              ));
                      },
                  });
        })({ clips: i }),
        nd = $.has(s.C.MAIN_ACTION),
        nu = $.has(s.C.EDIT),
        np = $.has(s.C.FAVORITE),
        ny = $.has(s.C.EXPORT_TO_SOUNDBOARD),
        nf = $.has(s.C.COPY_TO_CLIPBOARD),
        ng = $.has(s.C.EXPORT_TO_FILE),
        nh = $.has(s.C.DELETE),
        nA = $.has(s.C.SHOW_IN_FOLDER),
        n_ = $.has(s.C.OPEN_IN_INSPECTOR),
        nb = $.has(s.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": b.intl.string(b.t.PdRCRg),
        onClose: a.Z_,
        onSelect: a.Z_,
        children: [
            (0, t.jsxs)(o.rX, { children: [nd && z, nu && nn] }),
            (0, t.jsxs)(o.rX, { children: [np && ni, ny && ne, nf && nt, ng && nl] }),
            (0, t.jsxs)(o.rX, { children: [nA && nr, n_ && nc, nb && ns] }),
            (0, t.jsxs)(o.rX, { children: [np && no, nh && na] }),
        ],
    });
}
function W(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, c.Ay)(...i, r.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(c.f5, { value: l, children: (0, t.jsx)(U, { ...e }) });
}
