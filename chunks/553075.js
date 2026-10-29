e.d(i, { default: () => K });
var t = e(477900);
e(582128);
var l = e(980707),
    o = e(477782),
    r = e(442433),
    a = e(793574),
    c = e(688810),
    s = e(253799),
    d = e(17928),
    u = e(192308),
    p = e(138134),
    f = e(540999),
    y = e(858899),
    g = e(624479),
    h = e(77729),
    A = e(696016),
    _ = e(507216),
    b = e(105292),
    x = e(241326),
    E = e(645655),
    I = e(549685),
    C = e(32880),
    D = e(983069),
    O = e(614584),
    j = e(589553),
    w = e(264572).Buffer,
    T = e(7807),
    v = e(931991),
    F = e(71393),
    P = e(576705),
    Z = e(711014),
    L = e(287809),
    N = e(105009),
    R = e(505930),
    S = e(807072),
    m = e(274372),
    H = e(74847),
    X = e(686320),
    k = e(406980),
    B = e(346411),
    G = e(781710),
    M = e(678708);
function W(n) {
    let {
            clips: i,
            channelId: W,
            onShare: K,
            onMainAction: U,
            mainAction: V,
            onEdit: Q,
            onBeforeDelete: Y,
            onAfterDelete: q,
            actionsDisabled: z = !1,
            displayConfiguration: J = s.I,
        } = n,
        $ = (function (n) {
            let { clips: i, channelId: e, onShare: l, onMainAction: a, mainAction: s, actionsDisabled: u = !1 } = n,
                { analyticsLocations: p } = (0, c.Ay)(),
                { label: f, icon: y } = (0, X.$)(null != a ? s : void 0),
                g = (0, d.bG)([m.Ay], () => i.some((n) => m.Ay.isClipExporting(n.id)));
            async function h() {
                if (((0, r.Z_)(), null != a)) {
                    (a(), l?.());
                    return;
                }
                let n = (0, H.t)(e);
                (0, O.H1)(i.map((n) => n.id));
                try {
                    await (0, k.K)(i, { channelId: n ? e : void 0, analyticsLocations: p });
                } catch (n) {
                } finally {
                    (0, O.H1)(null);
                }
                l?.();
            }
            return (0, t.jsx)(o.Dr, {
                id: "share",
                label: f,
                leadingAccessory: { type: "icon", icon: y },
                disabled: u && !g,
                action: h,
            });
        })({ clips: i, channelId: W, onShare: K, onMainAction: U, mainAction: V, actionsDisabled: z }),
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
                          ((0, r.Z_)(), e?.());
                      },
                  });
        })({ clips: i, onEdit: Q, actionsDisabled: z }),
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
                          ((0, r.Z_)(), i.forEach((n) => (0, O.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: z }),
        ne = (function (n) {
            let { clips: i, channelId: e } = n,
                { analyticsLocations: l } = (0, c.Ay)(),
                a = (0, d.bG)([Z.Ay, P.A, L.default, F.A], () =>
                    Z.Ay.getFlattenedGuildIds().some((n) => {
                        let i = F.A.getGuild(n);
                        return null != i && (0, v.ie)(i, P.A, L.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            if (i.length > 1 || !a || s.type === A.nQ.SCREENSHOT) return null;
            async function u() {
                ((0, r.Z_)(), await (0, N.n)(s, { analyticsLocations: l, channelId: e }));
            }
            return (0, t.jsx)(o.Dr, {
                id: "clips-export-soundboard",
                label: b.intl.string(_.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: T.J },
                action: u,
            });
        })({ clips: i, channelId: W }),
        nt = (function (n) {
            let { clips: i } = n,
                e = i[0];
            if (i.length > 1 || null == h.A.clipboard.copyFile) return null;
            async function l() {
                (0, r.Z_)();
                let n = h.A.clipboard.copyFile(e.filepath);
                if (null != n)
                    try {
                        await n;
                    } catch (n) {
                        (A.nx.error("Error copying clip to clipboard", n),
                            (0, y.P0)({ text: b.intl.string(b.t.iufib1), variant: "critical" }));
                        return;
                    }
                (0, y.P0)({ text: b.intl.string(b.t.mGZ66D), variant: "success" });
            }
            return (0, t.jsx)(o.Dr, {
                id: "clips-copy-video",
                label: b.intl.string(_.default.tv7emB),
                leadingAccessory: { type: "icon", icon: g.CopyIcon },
                action: l,
            });
        })({ clips: i }),
        nl = (function (n) {
            let { clips: i } = n,
                { analyticsLocations: e } = (0, c.Ay)(),
                l = i[0];
            if (i.length > 1) return null;
            let s = l.type === A.nQ.SCREENSHOT;
            async function d() {
                ((0, r.Z_)(), (0, O.H1)([l.id]));
                try {
                    let n = await (0, O.VO)(l, { analyticsLocations: [...e, a.A.CLIPS_EXPORT_TO_FILE] }),
                        i = await n.arrayBuffer(),
                        t = (0, j.A)(l, s ? "jpeg" : "mp4");
                    await h.A.fileManager.saveWithDialog(w.from(i), t);
                } catch (n) {
                    A.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, O.H1)(null);
                }
            }
            async function u() {
                ((0, r.Z_)(), (0, O.H1)([l.id]));
                try {
                    let n = await (0, O.VO)(l, { analyticsLocations: [...e, a.A.CLIPS_EXPORT_TO_SOUND_FILE] }),
                        i = await (0, D.R_)(n),
                        t = await i.arrayBuffer(),
                        o = (0, j.A)(l, "ogg");
                    await h.A.fileManager.saveWithDialog(w.from(t), o);
                } catch (n) {
                    A.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, O.H1)(null);
                }
            }
            return (0, t.jsxs)(o.Dr, {
                id: "clips-export-group",
                label: b.intl.string(b.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                children: [
                    (0, t.jsx)(o.Dr, {
                        id: "clips-export-file",
                        label: s ? b.intl.string(b.t.y5FgMk) : b.intl.string(b.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                        action: d,
                    }),
                    !s &&
                        (0, t.jsx)(o.Dr, {
                            id: "clips-export-sound-file",
                            label: b.intl.string(b.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: C.DownloadIcon },
                            action: u,
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
                          ((0, r.Z_)(), i.forEach((n) => (0, O.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: z }),
        nr = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: a = !1 } = n;
            return (0, t.jsx)(o.Dr, {
                id: "clips-delete",
                label: b.intl.string(b.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: x.TrashIcon },
                color: "danger",
                disabled: a,
                action: function (n) {
                    ((0, r.Z_)(), (0, E.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l }));
                },
            });
        })({ clips: i, onBeforeDelete: Y, onAfterDelete: q, actionsDisabled: z }),
        na = (function (n) {
            let { clips: i } = n;
            return (0, t.jsx)(o.Dr, {
                leadingAccessory: { type: "icon", icon: M.FolderIcon },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    ((0, r.Z_)(), h.A.fileManager.showItemInFolder(i[0].filepath));
                },
            });
        })({ clips: i }),
        nc = (function (n) {
            let { clips: i } = n;
            return (0, d.bG)([f.A], () => f.A.isDeveloper)
                ? (0, t.jsx)(o.Dr, {
                      leadingAccessory: { type: "icon", icon: B.WrenchIcon },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          ((0, r.Z_)(), (0, u.closeAllModals)(), (0, G.h)(i[0].filepath));
                      },
                  })
                : null;
        })({ clips: i }),
        ns = (function (n) {
            let { clips: i } = n,
                l = (0, d.bG)([f.A], () => f.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: p.FlagIcon },
                      action: function () {
                          ((0, r.Z_)(),
                              (0, u.openModalLazy)(
                                  async () => {
                                      let { default: n } = await Promise.all([
                                          e.e("142753"),
                                          e.e("268582"),
                                          e.e("161379"),
                                          e.e("736585"),
                                      ]).then(e.bind(e, 885168));
                                      return (e) => (0, t.jsx)(n, { ...e, clip: i[0] });
                                  },
                                  { stackingBehavior: "stack" },
                              ));
                      },
                  });
        })({ clips: i }),
        nd = J.has(s.C.MAIN_ACTION),
        nu = J.has(s.C.EDIT),
        np = J.has(s.C.FAVORITE),
        nf = J.has(s.C.EXPORT_TO_SOUNDBOARD),
        ny = J.has(s.C.COPY_TO_CLIPBOARD),
        ng = J.has(s.C.EXPORT_TO_FILE),
        nh = J.has(s.C.DELETE),
        nA = J.has(s.C.SHOW_IN_FOLDER),
        n_ = J.has(s.C.OPEN_IN_INSPECTOR),
        nb = J.has(s.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": b.intl.string(b.t.PdRCRg),
        onClose: r.Z_,
        onSelect: r.Z_,
        children: [
            (0, t.jsxs)(o.rX, { children: [nd && $, nu && nn] }),
            (0, t.jsxs)(o.rX, { children: [np && ni, nf && ne, ny && nt, ng && nl] }),
            (0, t.jsxs)(o.rX, { children: [nA && na, n_ && nc, nb && ns] }),
            (0, t.jsxs)(o.rX, { children: [np && no, nh && nr] }),
        ],
    });
}
function K(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, c.Ay)(...i, a.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(c.f5, { value: l, children: (0, t.jsx)(W, { ...e }) });
}
