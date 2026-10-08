e.d(i, { default: () => U });
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
    y = e(376357),
    g = e(624479),
    A = e(77729),
    h = e(696016),
    _ = e(268378),
    b = e(660183),
    x = e(241326),
    C = e(645655),
    E = e(549685),
    I = e(32880),
    D = e(983069),
    O = e(614584),
    j = e(589553),
    w = e(264572).Buffer,
    T = e(7807),
    F = e(931991),
    P = e(71393),
    v = e(576705),
    S = e(711014),
    Z = e(287809),
    L = e(105009),
    R = e(505930),
    N = e(807072),
    m = e(915725),
    H = e(74847),
    k = e(686320),
    X = e(406980),
    B = e(346411),
    G = e(781710),
    M = e(678708);
function W(n) {
    let {
            clips: i,
            channelId: W,
            onShare: U,
            onMainAction: K,
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
                { label: f, icon: y } = (0, k.$)(null != a ? s : void 0),
                g = (0, d.bG)([m.Ay], () => i.some((n) => m.Ay.isClipExporting(n.id)));
            async function A() {
                if (((0, r.Z_)(), null != a)) {
                    (a(), l?.());
                    return;
                }
                let n = (0, H.t)(e);
                (0, O.H1)(i.map((n) => n.id));
                try {
                    await (0, X.K)(i, { channelId: n ? e : void 0, analyticsLocations: p });
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
                action: A,
            });
        })({ clips: i, channelId: W, onShare: U, onMainAction: K, mainAction: V, actionsDisabled: z }),
        nn = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "edit",
                      label: b.intl.string(b.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: E.A },
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
                a = (0, d.bG)([S.Ay, v.A, Z.default, P.A], () =>
                    S.Ay.getFlattenedGuildIds().some((n) => {
                        let i = P.A.getGuild(n);
                        return null != i && (0, F.ie)(i, v.A, Z.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            if (i.length > 1 || !a || s.type === h.nQ.SCREENSHOT) return null;
            async function u() {
                ((0, r.Z_)(), await (0, L.n)(s, { analyticsLocations: l, channelId: e }));
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
            if (i.length > 1 || null == A.A.clipboard.copyFile) return null;
            async function l() {
                (0, r.Z_)();
                let n = A.A.clipboard.copyFile(e.filepath);
                if (null != n)
                    try {
                        await n;
                    } catch (n) {
                        (h.nx.error("Error copying clip to clipboard", n),
                            (0, y.P0)((0, y.ox)(b.intl.string(b.t.iufib1), y.Ck.FAILURE)));
                        return;
                    }
                (0, y.P0)((0, y.ox)(b.intl.string(b.t.mGZ66D), y.Ck.SUCCESS));
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
            let s = l.type === h.nQ.SCREENSHOT;
            async function d() {
                ((0, r.Z_)(), (0, O.H1)([l.id]));
                try {
                    let n = await (0, O.VO)(l, { analyticsLocations: [...e, a.A.CLIPS_EXPORT_TO_FILE] }),
                        i = await n.arrayBuffer(),
                        t = (0, j.A)(l, s ? "jpeg" : "mp4");
                    await A.A.fileManager.saveWithDialog(w.from(i), t);
                } catch (n) {
                    h.nx.error("Error exporting clip to file", n);
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
                    await A.A.fileManager.saveWithDialog(w.from(t), o);
                } catch (n) {
                    h.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, O.H1)(null);
                }
            }
            return (0, t.jsxs)(o.Dr, {
                id: "clips-export-group",
                label: b.intl.string(b.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: I.DownloadIcon },
                children: [
                    (0, t.jsx)(o.Dr, {
                        id: "clips-export-file",
                        label: s ? b.intl.string(b.t.y5FgMk) : b.intl.string(b.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: I.DownloadIcon },
                        action: d,
                    }),
                    !s &&
                        (0, t.jsx)(o.Dr, {
                            id: "clips-export-sound-file",
                            label: b.intl.string(b.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: I.DownloadIcon },
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
                      leadingAccessory: { type: "icon", icon: N.U },
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
                    ((0, r.Z_)(), (0, C.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l }));
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
                    ((0, r.Z_)(), A.A.fileManager.showItemInFolder(i[0].filepath));
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
        nA = J.has(s.C.DELETE),
        nh = J.has(s.C.SHOW_IN_FOLDER),
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
            (0, t.jsxs)(o.rX, { children: [nh && na, n_ && nc, nb && ns] }),
            (0, t.jsxs)(o.rX, { children: [np && no, nA && nr] }),
        ],
    });
}
function U(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, c.Ay)(...i, a.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(c.f5, { value: l, children: (0, t.jsx)(W, { ...e }) });
}
