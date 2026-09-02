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
    h = e(97483),
    A = e(624479),
    _ = e(77729),
    b = e(268378),
    E = e(375708),
    C = e(241326),
    x = e(645655),
    D = e(549685),
    I = e(32880),
    O = e(983069),
    j = e(406064),
    w = e(589553),
    S = e(696016),
    T = e(264572).Buffer,
    F = e(7807),
    P = e(931991),
    v = e(71393),
    R = e(576705),
    Z = e(711014),
    H = e(287809),
    L = e(105009),
    m = e(505930),
    N = e(807072),
    X = e(346411),
    k = e(781710),
    B = e(405433),
    G = e(915725),
    M = e(74847),
    W = e(406980),
    K = e(678708);
function U(n) {
    let {
            clips: i,
            channelId: U,
            onShare: V,
            onSelectClip: Q,
            onEdit: Y,
            onBeforeDelete: q,
            onAfterDelete: z,
            actionsDisabled: J = !1,
            displayConfiguration: $ = s.I,
        } = n,
        nn = (function (n) {
            let { clips: i, channelId: e, onShare: l, onSelectClip: c, actionsDisabled: s = !1 } = n,
                { analyticsLocations: u } = (0, r.Ay)(),
                p = (0, d.bG)([G.Ay], () => i.some((n) => G.Ay.isClipExporting(n.id)));
            async function f() {
                if (((0, a.Z_)(), null != c)) {
                    c(), l?.();
                    return;
                }
                let n = (0, M.t)(e);
                (0, j.H1)(i.map((n) => n.id));
                try {
                    await (0, W.K)(i, { channelId: n ? e : void 0, analyticsLocations: u });
                } catch (n) {
                } finally {
                    (0, j.H1)(null);
                }
                l?.();
            }
            return (0, t.jsx)(o.Dr, {
                id: "share",
                label: E.intl.string(E.t.RDE0Sc),
                leadingAccessory: { type: "icon", icon: B.ShareIcon },
                disabled: s && !p,
                action: f,
            });
        })({ clips: i, channelId: U, onShare: V, onSelectClip: Q, actionsDisabled: J }),
        ni = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "edit",
                      label: E.intl.string(E.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: D.A },
                      disabled: l,
                      action: function () {
                          (0, a.Z_)(), e?.();
                      },
                  });
        })({ clips: i, onEdit: Y, actionsDisabled: J }),
        ne = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "favorite",
                      label: E.intl.string(E.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: m.y },
                      disabled: e,
                      action: function () {
                          (0, a.Z_)(), i.forEach((n) => (0, j.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        nt = (function (n) {
            let { clips: i, channelId: e } = n,
                { analyticsLocations: l } = (0, r.Ay)(),
                c = (0, d.bG)([Z.Ay, R.A, H.default, v.A], () =>
                    Z.Ay.getFlattenedGuildIds().some((n) => {
                        let i = v.A.getGuild(n);
                        return null != i && (0, P.ie)(i, R.A, H.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            if (i.length > 1 || !c || s.type === S.nQ.SCREENSHOT) return null;
            async function u() {
                (0, a.Z_)(), await (0, L.n)(s, { analyticsLocations: l, channelId: e });
            }
            return (0, t.jsx)(o.Dr, {
                id: "clips-export-soundboard",
                label: E.intl.string(b.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: F.J },
                action: u,
            });
        })({ clips: i, channelId: U }),
        nl = (function (n) {
            let { clips: i } = n,
                e = i[0];
            return i.length > 1 || null == _.A.clipboard.copyFile
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-copy-video",
                      label: E.intl.string(b.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: A.CopyIcon },
                      action: function () {
                          (0, a.Z_)(),
                              _.A.clipboard.copyFile(e.filepath),
                              (0, y.P0)((0, g.o)(E.intl.string(E.t.mGZ66D), h.Ck.SUCCESS));
                      },
                  });
        })({ clips: i }),
        no = (function (n) {
            let { clips: i } = n,
                { analyticsLocations: e } = (0, r.Ay)(),
                l = i[0];
            if (i.length > 1) return null;
            let s = l.type === S.nQ.SCREENSHOT;
            async function d() {
                (0, a.Z_)(), (0, j.H1)([l.id]);
                try {
                    let n = await (0, j.VO)(l, { analyticsLocations: [...e, c.A.CLIPS_EXPORT_TO_FILE] }),
                        i = await n.arrayBuffer(),
                        t = (0, w.A)(l, s ? "jpeg" : "mp4");
                    await _.A.fileManager.saveWithDialog(T.from(i), t);
                } catch (n) {
                    S.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, j.H1)(null);
                }
            }
            async function u() {
                (0, a.Z_)(), (0, j.H1)([l.id]);
                try {
                    let n = await (0, j.VO)(l, { analyticsLocations: [...e, c.A.CLIPS_EXPORT_TO_SOUND_FILE] }),
                        i = await (0, O.R_)(n),
                        t = await i.arrayBuffer(),
                        o = (0, w.A)(l, "ogg");
                    await _.A.fileManager.saveWithDialog(T.from(t), o);
                } catch (n) {
                    S.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, j.H1)(null);
                }
            }
            return (0, t.jsxs)(o.Dr, {
                id: "clips-export-group",
                label: E.intl.string(E.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: I.DownloadIcon },
                children: [
                    (0, t.jsx)(o.Dr, {
                        id: "clips-export-file",
                        label: s ? E.intl.string(E.t.y5FgMk) : E.intl.string(E.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: I.DownloadIcon },
                        action: d,
                    }),
                    !s &&
                        (0, t.jsx)(o.Dr, {
                            id: "clips-export-sound-file",
                            label: E.intl.string(E.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: I.DownloadIcon },
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
                      label: E.intl.string(b.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: N.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          (0, a.Z_)(), i.forEach((n) => (0, j.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        nc = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: c = !1 } = n;
            return (0, t.jsx)(o.Dr, {
                id: "clips-delete",
                label: E.intl.string(E.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: C.TrashIcon },
                color: "danger",
                disabled: c,
                action: function (n) {
                    (0, a.Z_)(), (0, x.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l });
                },
            });
        })({ clips: i, onBeforeDelete: q, onAfterDelete: z, actionsDisabled: J }),
        nr = (function (n) {
            let { clips: i } = n;
            return (0, t.jsx)(o.Dr, {
                leadingAccessory: { type: "icon", icon: K.FolderIcon },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    (0, a.Z_)(), _.A.fileManager.showItemInFolder(i[0].filepath);
                },
            });
        })({ clips: i }),
        ns = (function (n) {
            let { clips: i } = n;
            return (0, d.bG)([f.A], () => f.A.isDeveloper)
                ? (0, t.jsx)(o.Dr, {
                      leadingAccessory: { type: "icon", icon: X.WrenchIcon },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          (0, a.Z_)(), (0, u.closeAllModals)(), (0, k.h)(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        nd = (function (n) {
            let { clips: i } = n,
                l = (0, d.bG)([f.A], () => f.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, t.jsx)(o.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: p.FlagIcon },
                      action: function () {
                          (0, a.Z_)(),
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
                              );
                      },
                  });
        })({ clips: i }),
        nu = $.has(s.C.SHARE),
        np = $.has(s.C.EDIT),
        nf = $.has(s.C.FAVORITE),
        ny = $.has(s.C.EXPORT_TO_SOUNDBOARD),
        ng = $.has(s.C.COPY_TO_CLIPBOARD),
        nh = $.has(s.C.EXPORT_TO_FILE),
        nA = $.has(s.C.DELETE),
        n_ = $.has(s.C.SHOW_IN_FOLDER),
        nb = $.has(s.C.OPEN_IN_INSPECTOR),
        nE = $.has(s.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": E.intl.string(E.t.PdRCRg),
        onClose: a.Z_,
        onSelect: a.Z_,
        children: [
            (0, t.jsxs)(o.rX, { children: [nu && nn, np && ni] }),
            (0, t.jsxs)(o.rX, { children: [nf && ne, ny && nt, ng && nl, nh && no] }),
            (0, t.jsxs)(o.rX, { children: [n_ && nr, nb && ns, nE && nd] }),
            (0, t.jsxs)(o.rX, { children: [nf && na, nA && nc] }),
        ],
    });
}
function V(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, r.Ay)(...i, c.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(r.f5, { value: l, children: (0, t.jsx)(U, { ...e }) });
}
