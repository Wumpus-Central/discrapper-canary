e.d(i, { default: () => V });
var t = e(477900);
e(582128);
var l = e(980707),
    o = e(477782),
    a = e(442433),
    c = e(793574),
    r = e(688810),
    s = e(253799),
    d = e(17928),
    u = e(192308),
    p = e(138134),
    f = e(540999),
    y = e(691540),
    g = e(857250),
    A = e(97483),
    h = e(624479),
    _ = e(77729),
    b = e(268378),
    C = e(375708),
    x = e(241326),
    E = e(645655),
    I = e(549685),
    D = e(32880),
    O = e(983069),
    j = e(614584),
    w = e(589553),
    T = e(696016),
    F = e(264572).Buffer,
    v = e(7807),
    P = e(931991),
    S = e(71393),
    Z = e(576705),
    L = e(711014),
    N = e(287809),
    R = e(105009),
    m = e(505930),
    H = e(807072),
    X = e(915725),
    k = e(74847),
    B = e(686320),
    G = e(406980),
    M = e(346411),
    W = e(781710),
    K = e(678708);
function U(n) {
    let {
            clips: i,
            channelId: U,
            onShare: V,
            onMainAction: Q,
            mainAction: Y,
            onEdit: q,
            onBeforeDelete: z,
            onAfterDelete: J,
            actionsDisabled: $ = !1,
            displayConfiguration: nn = s.I,
        } = n,
        ni = (function (n) {
            let { clips: i, channelId: e, onShare: l, onMainAction: c, mainAction: s, actionsDisabled: u = !1 } = n,
                { analyticsLocations: p } = (0, r.Ay)(),
                { label: f, icon: y } = (0, B.$)(null != c ? s : void 0),
                g = (0, d.bG)([X.Ay], () => i.some((n) => X.Ay.isClipExporting(n.id)));
            async function A() {
                if (((0, a.Z_)(), null != c)) {
                    (c(), l?.());
                    return;
                }
                let n = (0, k.t)(e);
                (0, j.H1)(i.map((n) => n.id));
                try {
                    await (0, G.K)(i, { channelId: n ? e : void 0, analyticsLocations: p });
                } catch (n) {
                } finally {
                    (0, j.H1)(null);
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
        })({ clips: i, channelId: U, onShare: V, onMainAction: Q, mainAction: Y, actionsDisabled: $ }),
        ne = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "edit",
                      label: C.intl.string(C.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: I.A },
                      disabled: l,
                      action: function () {
                          ((0, a.Z_)(), e?.());
                      },
                  });
        })({ clips: i, onEdit: q, actionsDisabled: $ }),
        nt = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "favorite",
                      label: C.intl.string(C.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: m.y },
                      disabled: e,
                      action: function () {
                          ((0, a.Z_)(), i.forEach((n) => (0, j.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: $ }),
        nl = (function (n) {
            let { clips: i, channelId: e } = n,
                { analyticsLocations: l } = (0, r.Ay)(),
                c = (0, d.bG)([L.Ay, Z.A, N.default, S.A], () =>
                    L.Ay.getFlattenedGuildIds().some((n) => {
                        let i = S.A.getGuild(n);
                        return null != i && (0, P.ie)(i, Z.A, N.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            if (i.length > 1 || !c || s.type === T.nQ.SCREENSHOT) return null;
            async function u() {
                ((0, a.Z_)(), await (0, R.n)(s, { analyticsLocations: l, channelId: e }));
            }
            return (0, t.jsx)(o.Dr, {
                id: "clips-export-soundboard",
                label: C.intl.string(b.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: v.J },
                action: u,
            });
        })({ clips: i, channelId: U }),
        no = (function (n) {
            let { clips: i } = n,
                e = i[0];
            return i.length > 1 || null == _.A.clipboard.copyFile
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-copy-video",
                      label: C.intl.string(b.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: h.CopyIcon },
                      action: function () {
                          ((0, a.Z_)(),
                              _.A.clipboard.copyFile(e.filepath),
                              (0, y.P0)((0, g.o)(C.intl.string(C.t.mGZ66D), A.Ck.SUCCESS)));
                      },
                  });
        })({ clips: i }),
        na = (function (n) {
            let { clips: i } = n,
                { analyticsLocations: e } = (0, r.Ay)(),
                l = i[0];
            if (i.length > 1) return null;
            let s = l.type === T.nQ.SCREENSHOT;
            async function d() {
                ((0, a.Z_)(), (0, j.H1)([l.id]));
                try {
                    let n = await (0, j.VO)(l, { analyticsLocations: [...e, c.A.CLIPS_EXPORT_TO_FILE] }),
                        i = await n.arrayBuffer(),
                        t = (0, w.A)(l, s ? "jpeg" : "mp4");
                    await _.A.fileManager.saveWithDialog(F.from(i), t);
                } catch (n) {
                    T.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, j.H1)(null);
                }
            }
            async function u() {
                ((0, a.Z_)(), (0, j.H1)([l.id]));
                try {
                    let n = await (0, j.VO)(l, { analyticsLocations: [...e, c.A.CLIPS_EXPORT_TO_SOUND_FILE] }),
                        i = await (0, O.R_)(n),
                        t = await i.arrayBuffer(),
                        o = (0, w.A)(l, "ogg");
                    await _.A.fileManager.saveWithDialog(F.from(t), o);
                } catch (n) {
                    T.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, j.H1)(null);
                }
            }
            return (0, t.jsxs)(o.Dr, {
                id: "clips-export-group",
                label: C.intl.string(C.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: D.DownloadIcon },
                children: [
                    (0, t.jsx)(o.Dr, {
                        id: "clips-export-file",
                        label: s ? C.intl.string(C.t.y5FgMk) : C.intl.string(C.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: D.DownloadIcon },
                        action: d,
                    }),
                    !s &&
                        (0, t.jsx)(o.Dr, {
                            id: "clips-export-sound-file",
                            label: C.intl.string(C.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: D.DownloadIcon },
                            action: u,
                        }),
                ],
            });
        })({ clips: i }),
        nc = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "unfavorite",
                      label: C.intl.string(b.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: H.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          ((0, a.Z_)(), i.forEach((n) => (0, j.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: $ }),
        nr = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: c = !1 } = n;
            return (0, t.jsx)(o.Dr, {
                id: "clips-delete",
                label: C.intl.string(C.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: x.TrashIcon },
                color: "danger",
                disabled: c,
                action: function (n) {
                    ((0, a.Z_)(), (0, E.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l }));
                },
            });
        })({ clips: i, onBeforeDelete: z, onAfterDelete: J, actionsDisabled: $ }),
        ns = (function (n) {
            let { clips: i } = n;
            return (0, t.jsx)(o.Dr, {
                leadingAccessory: { type: "icon", icon: K.FolderIcon },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    ((0, a.Z_)(), _.A.fileManager.showItemInFolder(i[0].filepath));
                },
            });
        })({ clips: i }),
        nd = (function (n) {
            let { clips: i } = n;
            return (0, d.bG)([f.A], () => f.A.isDeveloper)
                ? (0, t.jsx)(o.Dr, {
                      leadingAccessory: { type: "icon", icon: M.WrenchIcon },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          ((0, a.Z_)(), (0, u.closeAllModals)(), (0, W.h)(i[0].filepath));
                      },
                  })
                : null;
        })({ clips: i }),
        nu = (function (n) {
            let { clips: i } = n,
                l = (0, d.bG)([f.A], () => f.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: p.FlagIcon },
                      action: function () {
                          ((0, a.Z_)(),
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
        np = nn.has(s.C.MAIN_ACTION),
        nf = nn.has(s.C.EDIT),
        ny = nn.has(s.C.FAVORITE),
        ng = nn.has(s.C.EXPORT_TO_SOUNDBOARD),
        nA = nn.has(s.C.COPY_TO_CLIPBOARD),
        nh = nn.has(s.C.EXPORT_TO_FILE),
        n_ = nn.has(s.C.DELETE),
        nb = nn.has(s.C.SHOW_IN_FOLDER),
        nC = nn.has(s.C.OPEN_IN_INSPECTOR),
        nx = nn.has(s.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": C.intl.string(C.t.PdRCRg),
        onClose: a.Z_,
        onSelect: a.Z_,
        children: [
            (0, t.jsxs)(o.rX, { children: [np && ni, nf && ne] }),
            (0, t.jsxs)(o.rX, { children: [ny && nt, ng && nl, nA && no, nh && na] }),
            (0, t.jsxs)(o.rX, { children: [nb && ns, nC && nd, nx && nu] }),
            (0, t.jsxs)(o.rX, { children: [ny && nc, n_ && nr] }),
        ],
    });
}
function V(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, r.Ay)(...i, c.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(r.f5, { value: l, children: (0, t.jsx)(U, { ...e }) });
}
