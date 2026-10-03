e.d(i, { default: () => V });
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
    y = e(739187),
    g = e(857250),
    A = e(97483),
    h = e(624479),
    _ = e(77729),
    b = e(696016),
    C = e(268378),
    E = e(375708),
    x = e(241326),
    I = e(645655),
    D = e(549685),
    O = e(32880),
    j = e(983069),
    w = e(614584),
    T = e(589553),
    F = e(264572).Buffer,
    P = e(7807),
    v = e(931991),
    S = e(71393),
    Z = e(576705),
    L = e(711014),
    R = e(287809),
    N = e(105009),
    m = e(505930),
    H = e(807072),
    k = e(915725),
    X = e(74847),
    B = e(686320),
    G = e(406980),
    M = e(346411),
    W = e(781710),
    U = e(678708);
function K(n) {
    let {
            clips: i,
            channelId: K,
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
            let { clips: i, channelId: e, onShare: l, onMainAction: a, mainAction: s, actionsDisabled: u = !1 } = n,
                { analyticsLocations: p } = (0, c.Ay)(),
                { label: f, icon: y } = (0, B.$)(null != a ? s : void 0),
                g = (0, d.bG)([k.Ay], () => i.some((n) => k.Ay.isClipExporting(n.id)));
            async function A() {
                if (((0, r.Z_)(), null != a)) {
                    (a(), l?.());
                    return;
                }
                let n = (0, X.t)(e);
                (0, w.H1)(i.map((n) => n.id));
                try {
                    await (0, G.K)(i, { channelId: n ? e : void 0, analyticsLocations: p });
                } catch (n) {
                } finally {
                    (0, w.H1)(null);
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
        })({ clips: i, channelId: K, onShare: V, onMainAction: Q, mainAction: Y, actionsDisabled: $ }),
        ne = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "edit",
                      label: E.intl.string(E.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: D.A },
                      disabled: l,
                      action: function () {
                          ((0, r.Z_)(), e?.());
                      },
                  });
        })({ clips: i, onEdit: q, actionsDisabled: $ }),
        nt = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "favorite",
                      label: E.intl.string(E.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: m.y },
                      disabled: e,
                      action: function () {
                          ((0, r.Z_)(), i.forEach((n) => (0, w.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: $ }),
        nl = (function (n) {
            let { clips: i, channelId: e } = n,
                { analyticsLocations: l } = (0, c.Ay)(),
                a = (0, d.bG)([L.Ay, Z.A, R.default, S.A], () =>
                    L.Ay.getFlattenedGuildIds().some((n) => {
                        let i = S.A.getGuild(n);
                        return null != i && (0, v.ie)(i, Z.A, R.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            if (i.length > 1 || !a || s.type === b.nQ.SCREENSHOT) return null;
            async function u() {
                ((0, r.Z_)(), await (0, N.n)(s, { analyticsLocations: l, channelId: e }));
            }
            return (0, t.jsx)(o.Dr, {
                id: "clips-export-soundboard",
                label: E.intl.string(C.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: P.J },
                action: u,
            });
        })({ clips: i, channelId: K }),
        no = (function (n) {
            let { clips: i } = n,
                e = i[0];
            if (i.length > 1 || null == _.A.clipboard.copyFile) return null;
            async function l() {
                (0, r.Z_)();
                let n = _.A.clipboard.copyFile(e.filepath);
                if (null != n)
                    try {
                        await n;
                    } catch (n) {
                        (b.nx.error("Error copying clip to clipboard", n),
                            (0, y.P)((0, g.o)(E.intl.string(E.t.iufib1), A.Ck.FAILURE)));
                        return;
                    }
                (0, y.P)((0, g.o)(E.intl.string(E.t.mGZ66D), A.Ck.SUCCESS));
            }
            return (0, t.jsx)(o.Dr, {
                id: "clips-copy-video",
                label: E.intl.string(C.default.tv7emB),
                leadingAccessory: { type: "icon", icon: h.CopyIcon },
                action: l,
            });
        })({ clips: i }),
        nr = (function (n) {
            let { clips: i } = n,
                { analyticsLocations: e } = (0, c.Ay)(),
                l = i[0];
            if (i.length > 1) return null;
            let s = l.type === b.nQ.SCREENSHOT;
            async function d() {
                ((0, r.Z_)(), (0, w.H1)([l.id]));
                try {
                    let n = await (0, w.VO)(l, { analyticsLocations: [...e, a.A.CLIPS_EXPORT_TO_FILE] }),
                        i = await n.arrayBuffer(),
                        t = (0, T.A)(l, s ? "jpeg" : "mp4");
                    await _.A.fileManager.saveWithDialog(F.from(i), t);
                } catch (n) {
                    b.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, w.H1)(null);
                }
            }
            async function u() {
                ((0, r.Z_)(), (0, w.H1)([l.id]));
                try {
                    let n = await (0, w.VO)(l, { analyticsLocations: [...e, a.A.CLIPS_EXPORT_TO_SOUND_FILE] }),
                        i = await (0, j.R_)(n),
                        t = await i.arrayBuffer(),
                        o = (0, T.A)(l, "ogg");
                    await _.A.fileManager.saveWithDialog(F.from(t), o);
                } catch (n) {
                    b.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, w.H1)(null);
                }
            }
            return (0, t.jsxs)(o.Dr, {
                id: "clips-export-group",
                label: E.intl.string(E.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: O.DownloadIcon },
                children: [
                    (0, t.jsx)(o.Dr, {
                        id: "clips-export-file",
                        label: s ? E.intl.string(E.t.y5FgMk) : E.intl.string(E.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: O.DownloadIcon },
                        action: d,
                    }),
                    !s &&
                        (0, t.jsx)(o.Dr, {
                            id: "clips-export-sound-file",
                            label: E.intl.string(E.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: O.DownloadIcon },
                            action: u,
                        }),
                ],
            });
        })({ clips: i }),
        na = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "unfavorite",
                      label: E.intl.string(C.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: H.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          ((0, r.Z_)(), i.forEach((n) => (0, w.XK)(n)));
                      },
                  });
        })({ clips: i, actionsDisabled: $ }),
        nc = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: a = !1 } = n;
            return (0, t.jsx)(o.Dr, {
                id: "clips-delete",
                label: E.intl.string(E.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: x.TrashIcon },
                color: "danger",
                disabled: a,
                action: function (n) {
                    ((0, r.Z_)(), (0, I.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l }));
                },
            });
        })({ clips: i, onBeforeDelete: z, onAfterDelete: J, actionsDisabled: $ }),
        ns = (function (n) {
            let { clips: i } = n;
            return (0, t.jsx)(o.Dr, {
                leadingAccessory: { type: "icon", icon: U.FolderIcon },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    ((0, r.Z_)(), _.A.fileManager.showItemInFolder(i[0].filepath));
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
                          ((0, r.Z_)(), (0, u.closeAllModals)(), (0, W.h)(i[0].filepath));
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
        np = nn.has(s.C.MAIN_ACTION),
        nf = nn.has(s.C.EDIT),
        ny = nn.has(s.C.FAVORITE),
        ng = nn.has(s.C.EXPORT_TO_SOUNDBOARD),
        nA = nn.has(s.C.COPY_TO_CLIPBOARD),
        nh = nn.has(s.C.EXPORT_TO_FILE),
        n_ = nn.has(s.C.DELETE),
        nb = nn.has(s.C.SHOW_IN_FOLDER),
        nC = nn.has(s.C.OPEN_IN_INSPECTOR),
        nE = nn.has(s.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": E.intl.string(E.t.PdRCRg),
        onClose: r.Z_,
        onSelect: r.Z_,
        children: [
            (0, t.jsxs)(o.rX, { children: [np && ni, nf && ne] }),
            (0, t.jsxs)(o.rX, { children: [ny && nt, ng && nl, nA && no, nh && nr] }),
            (0, t.jsxs)(o.rX, { children: [nb && ns, nC && nd, nE && nu] }),
            (0, t.jsxs)(o.rX, { children: [ny && na, n_ && nc] }),
        ],
    });
}
function V(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, c.Ay)(...i, a.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(c.f5, { value: l, children: (0, t.jsx)(K, { ...e }) });
}
