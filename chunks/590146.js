t.d(i, { default: () => K });
var e = t(477900);
t(582128);
var l = t(165862),
    a = t(477782),
    r = t(442433),
    o = t(793574),
    c = t(688810),
    s = t(253799),
    d = t(855986),
    u = t(192308),
    p = t(138134),
    f = t(540999),
    y = t(858899),
    g = t(624479),
    h = t(77729),
    A = t(696016),
    b = t(683825),
    _ = t(792996),
    x = t(241326),
    I = t(645655),
    E = t(549685),
    C = t(32880),
    D = t(903259),
    O = t(341923),
    j = t(489496),
    w = t(589553),
    v = t(264572).hp,
    T = t(7807),
    P = t(931991),
    F = t(71393),
    m = t(576705),
    S = t(711014),
    Z = t(287809),
    L = t(105009),
    N = t(505930),
    R = t(807072),
    k = t(419490),
    H = t(74847),
    G = t(686320),
    X = t(829903),
    B = t(346411),
    M = t(781710),
    U = t(678708);
function W(n) {
    let {
            clips: i,
            channelId: W,
            onShare: K,
            onMainAction: V,
            mainAction: Q,
            onEdit: Y,
            onBeforeDelete: q,
            onAfterDelete: $,
            actionsDisabled: z = !1,
            displayConfiguration: J = s.I,
            showExportingModal: nn = !1,
        } = n,
        ni = (function (n) {
            let { clips: i, channelId: t, onShare: l, onMainAction: o, mainAction: s, actionsDisabled: u = !1 } = n,
                { analyticsLocations: p } = (0, c.Ay)(),
                { label: f, icon: y } = (0, G.$)(null != o ? s : void 0),
                g = (0, d.bG)([k.Ay], () => i.some((n) => k.Ay.isClipExporting(n.id)));
            return (0, e.jsx)(a.Dr, {
                id: "share",
                label: f,
                leadingAccessory: { type: "icon", icon: y },
                disabled: u && !g,
                action: async function () {
                    if (((0, r.Z_)(), null != o)) {
                        (o(), l?.());
                        return;
                    }
                    let n = (0, H.t)(t);
                    (0, j.H1)(i.map((n) => n.id));
                    try {
                        await (0, X.K)(i, { channelId: n ? t : void 0, analyticsLocations: p });
                    } catch (n) {
                    } finally {
                        (0, j.H1)(null);
                    }
                    l?.();
                },
            });
        })({ clips: i, channelId: W, onShare: K, onMainAction: V, mainAction: Q, actionsDisabled: z }),
        nt = (function (n) {
            let { clips: i, onEdit: t, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, e.jsx)(a.Dr, {
                      id: "edit",
                      label: _.intl.string(_.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: E.A },
                      disabled: l,
                      action: function () {
                          ((0, r.Z_)(), t?.());
                      },
                  });
        })({ clips: i, onEdit: Y, actionsDisabled: z }),
        ne = (function (n) {
            let { clips: i, actionsDisabled: t = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, e.jsx)(a.Dr, {
                      id: "favorite",
                      label: _.intl.string(_.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: N.StarOutlineIcon },
                      disabled: t,
                      action: function () {
                          ((0, r.Z_)(), i.forEach((n) => (0, j.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: z }),
        nl = (function (n) {
            let { clips: i, channelId: t } = n,
                { analyticsLocations: l } = (0, c.Ay)(),
                o = (0, d.bG)([S.Ay, m.A, Z.default, F.A], () =>
                    S.Ay.getFlattenedGuildIds().some((n) => {
                        let i = F.A.getGuild(n);
                        return null != i && (0, P.ie)(i, m.A, Z.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            return i.length > 1 || !o || s.type === A.nQ.SCREENSHOT
                ? null
                : (0, e.jsx)(a.Dr, {
                      id: "clips-export-soundboard",
                      label: _.intl.string(b.default.HH4Tjj),
                      leadingAccessory: { type: "icon", icon: T.SoundboardIcon },
                      action: async function () {
                          ((0, r.Z_)(), await (0, L.n)(s, { analyticsLocations: l, channelId: t }));
                      },
                  });
        })({ clips: i, channelId: W }),
        na = (function (n) {
            let { clips: i } = n,
                t = i[0];
            return i.length > 1 || null == h.A.clipboard.copyFile
                ? null
                : (0, e.jsx)(a.Dr, {
                      id: "clips-copy-video",
                      label: _.intl.string(b.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: g.CopyIcon },
                      action: async function () {
                          (0, r.Z_)();
                          let n = h.A.clipboard.copyFile(t.filepath);
                          if (null != n)
                              try {
                                  await n;
                              } catch (n) {
                                  (A.GU.error("Error copying clip to clipboard", n),
                                      (0, y.P0)({ text: _.intl.string(_.t.iufib1), variant: "critical" }));
                                  return;
                              }
                          (0, y.P0)({ text: _.intl.string(_.t.mGZ66D), variant: "success" });
                      },
                  });
        })({ clips: i }),
        nr = (function (n) {
            let { clips: i, showExportingModal: l = !1 } = n,
                { analyticsLocations: s } = (0, c.Ay)(),
                d = i[0];
            if (i.length > 1) return null;
            let p = d.type === A.nQ.SCREENSHOT;
            return (0, e.jsxs)(a.Dr, {
                id: "clips-export-group",
                label: _.intl.string(_.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                children: [
                    (0, e.jsx)(a.Dr, {
                        id: "clips-export-file",
                        label: p ? _.intl.string(_.t.y5FgMk) : _.intl.string(_.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                        action: async function () {
                            ((0, r.Z_)(), (0, j.H1)([d.id]));
                            let n = (0, O.s)(),
                                i = null;
                            try {
                                let a;
                                try {
                                    (l &&
                                        n &&
                                        !p &&
                                        (i = await (0, u.mM)(
                                            async () => {
                                                let { default: n } = await t.e(372938).then(t.bind(t, 293265));
                                                return (i) => (0, e.jsx)(n, { ...i });
                                            },
                                            { stackingBehavior: "stack" },
                                        )),
                                        (a = await (0, j.VO)(d, {
                                            analyticsLocations: [...s, o.A.CLIPS_EXPORT_TO_FILE],
                                            watermark: n,
                                        })));
                                } catch (i) {
                                    (A.GU.error("Error exporting clip to file", i),
                                        n && (0, y.P0)({ text: _.intl.string(_.t.iufib1), variant: "critical" }));
                                    return;
                                } finally {
                                    null != i && (0, u.Oo)(i);
                                }
                                let r = await a.arrayBuffer(),
                                    c = (0, w.A)(d, p ? "jpeg" : "mp4");
                                await h.A.fileManager.saveWithDialog(v.from(r), c);
                            } catch (n) {
                                A.GU.error("Error saving exported clip to file", n);
                            } finally {
                                (0, j.H1)(null);
                            }
                        },
                    }),
                    !p &&
                        (0, e.jsx)(a.Dr, {
                            id: "clips-export-sound-file",
                            label: _.intl.string(_.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                            action: async function () {
                                ((0, r.Z_)(), (0, j.H1)([d.id]));
                                try {
                                    let n = await (0, j.VO)(d, {
                                            analyticsLocations: [...s, o.A.CLIPS_EXPORT_TO_SOUND_FILE],
                                            watermark: !1,
                                        }),
                                        i = await (0, D.R_)(n),
                                        t = await i.arrayBuffer(),
                                        e = (0, w.A)(d, "ogg");
                                    await h.A.fileManager.saveWithDialog(v.from(t), e);
                                } catch (n) {
                                    A.GU.error("Error exporting clip to sound file", n);
                                } finally {
                                    (0, j.H1)(null);
                                }
                            },
                        }),
                ],
            });
        })({ clips: i, showExportingModal: nn }),
        no = (function (n) {
            let { clips: i, actionsDisabled: t = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, e.jsx)(a.Dr, {
                      id: "unfavorite",
                      label: _.intl.string(b.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: R.XLargeBoldIcon },
                      color: "danger",
                      disabled: t,
                      action: function () {
                          ((0, r.Z_)(), i.forEach((n) => (0, j.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: z }),
        nc = (function (n) {
            let { clips: i, onBeforeDelete: t, onAfterDelete: l, actionsDisabled: o = !1 } = n;
            return (0, e.jsx)(a.Dr, {
                id: "clips-delete",
                label: _.intl.string(_.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: x.TrashIcon },
                color: "danger",
                disabled: o,
                action: function (n) {
                    ((0, r.Z_)(), (0, I.A)(n, { clips: i, onBeforeDelete: t, onAfterDelete: l }));
                },
            });
        })({ clips: i, onBeforeDelete: q, onAfterDelete: $, actionsDisabled: z }),
        ns = (function (n) {
            let { clips: i } = n;
            return (0, e.jsx)(a.Dr, {
                leadingAccessory: { type: "icon", icon: U.FolderIcon },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    ((0, r.Z_)(), h.A.fileManager.showItemInFolder(i[0].filepath));
                },
            });
        })({ clips: i }),
        nd = (function (n) {
            let { clips: i } = n;
            return (0, d.bG)([f.A], () => f.A.isDeveloper)
                ? (0, e.jsx)(a.Dr, {
                      leadingAccessory: { type: "icon", icon: B.WrenchIcon },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          ((0, r.Z_)(), (0, u.s7)(), (0, M.h)(i[0].filepath));
                      },
                  })
                : null;
        })({ clips: i }),
        nu = (function (n) {
            let { clips: i } = n,
                l = (0, d.bG)([f.A], () => f.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, e.jsx)(a.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: p.FlagIcon },
                      action: function () {
                          ((0, r.Z_)(),
                              (0, u.mM)(
                                  async () => {
                                      let { default: n } = await Promise.all([
                                          t.e(142753),
                                          t.e(508702),
                                          t.e(268582),
                                          t.e(161379),
                                          t.e(153496),
                                      ]).then(t.bind(t, 490059));
                                      return (t) => (0, e.jsx)(n, { ...t, clip: i[0] });
                                  },
                                  { stackingBehavior: "stack" },
                              ));
                      },
                  });
        })({ clips: i }),
        np = J.has(s.C.MAIN_ACTION),
        nf = J.has(s.C.EDIT),
        ny = J.has(s.C.FAVORITE),
        ng = J.has(s.C.EXPORT_TO_SOUNDBOARD),
        nh = J.has(s.C.COPY_TO_CLIPBOARD),
        nA = J.has(s.C.EXPORT_TO_FILE),
        nb = J.has(s.C.DELETE),
        n_ = J.has(s.C.SHOW_IN_FOLDER),
        nx = J.has(s.C.OPEN_IN_INSPECTOR),
        nI = J.has(s.C.CLIP_FEEDBACK);
    return (0, e.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": _.intl.string(_.t.PdRCRg),
        onClose: r.Z_,
        onSelect: r.Z_,
        children: [
            (0, e.jsxs)(a.rX, { children: [np && ni, nf && nt] }),
            (0, e.jsxs)(a.rX, { children: [ny && ne, ng && nl, nh && na, nA && nr] }),
            (0, e.jsxs)(a.rX, { children: [n_ && ns, nx && nd, nI && nu] }),
            (0, e.jsxs)(a.rX, { children: [ny && no, nb && nc] }),
        ],
    });
}
function K(n) {
    let { analyticsLocations: i, ...t } = n,
        { analyticsLocations: l } = (0, c.Ay)(...i, o.A.CLIPS_CONTEXT_MENU);
    return (0, e.jsx)(c.f5, { value: l, children: (0, e.jsx)(W, { ...t }) });
}
