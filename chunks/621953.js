e.d(i, { default: () => V });
var t = e(477900);
e(582128);
var l = e(980707),
    a = e(477782),
    r = e(442433),
    o = e(793574),
    c = e(688810),
    s = e(253799),
    d = e(17928),
    u = e(192308),
    f = e(138134),
    p = e(540999),
    y = e(691540),
    g = e(857250),
    A = e(97483),
    h = e(624479),
    _ = e(77729),
    b = e(16590),
    E = e(375708),
    x = e(241326),
    C = e(645655),
    D = e(549685),
    O = e(32880),
    j = e(983069),
    I = e(539572),
    S = e(589553),
    T = e(696016),
    P = e(264572).Buffer,
    w = e(7807),
    v = e(931991),
    F = e(71393),
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
    W = e(602902),
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
            let { clips: i, channelId: e, onShare: l, onSelectClip: o, actionsDisabled: s = !1 } = n,
                { analyticsLocations: u } = (0, c.Ay)(),
                f = (0, d.bG)([G.Ay], () => i.some((n) => G.Ay.isClipExporting(n.id)));
            async function p() {
                if (((0, r.Z_)(), null != o)) {
                    o(), l?.();
                    return;
                }
                let n = (0, M.t)(e);
                (0, I.H1)(i.map((n) => n.id));
                try {
                    await (0, W.K)(i, { channelId: n ? e : void 0, analyticsLocations: u });
                } catch (n) {
                } finally {
                    (0, I.H1)(null);
                }
                l?.();
            }
            return (0, t.jsx)(a.Dr, {
                id: "share",
                label: E.intl.string(E.t.RDE0Sc),
                leadingAccessory: { type: "icon", icon: B.l },
                disabled: s && !f,
                action: p,
            });
        })({ clips: i, channelId: U, onShare: V, onSelectClip: Q, actionsDisabled: J }),
        ni = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "edit",
                      label: E.intl.string(E.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: D.A },
                      disabled: l,
                      action: function () {
                          (0, r.Z_)(), e?.();
                      },
                  });
        })({ clips: i, onEdit: Y, actionsDisabled: J }),
        ne = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "favorite",
                      label: E.intl.string(E.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: m.y },
                      disabled: e,
                      action: function () {
                          (0, r.Z_)(), i.forEach((n) => (0, I.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        nt = (function (n) {
            let { clips: i, channelId: e } = n,
                { analyticsLocations: l } = (0, c.Ay)(),
                o = (0, d.bG)([Z.Ay, R.A, H.default, F.A], () =>
                    Z.Ay.getFlattenedGuildIds().some((n) => {
                        let i = F.A.getGuild(n);
                        return null != i && (0, v.ie)(i, R.A, H.default).canCreateExpressions;
                    }),
                ),
                s = i[0];
            if (i.length > 1 || !o || s.type === T.nQ.SCREENSHOT) return null;
            async function u() {
                (0, r.Z_)(), await (0, L.n)(s, { analyticsLocations: l, channelId: e });
            }
            return (0, t.jsx)(a.Dr, {
                id: "clips-export-soundboard",
                label: E.intl.string(b.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: w.J },
                action: u,
            });
        })({ clips: i, channelId: U }),
        nl = (function (n) {
            let { clips: i } = n,
                e = i[0];
            return i.length > 1 || null == _.A.clipboard.copyFile
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "clips-copy-video",
                      label: E.intl.string(b.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: h.T },
                      action: function () {
                          (0, r.Z_)(),
                              _.A.clipboard.copyFile(e.filepath),
                              (0, y.P0)((0, g.o)(E.intl.string(E.t.mGZ66D), A.Ck.SUCCESS));
                      },
                  });
        })({ clips: i }),
        na = (function (n) {
            let { clips: i } = n,
                { analyticsLocations: e } = (0, c.Ay)(),
                l = i[0];
            if (i.length > 1) return null;
            let s = l.type === T.nQ.SCREENSHOT;
            async function d() {
                (0, r.Z_)(), (0, I.H1)([l.id]);
                try {
                    let n = await (0, I.VO)(l, { analyticsLocations: [...e, o.A.CLIPS_EXPORT_TO_FILE] }),
                        i = await n.arrayBuffer(),
                        t = (0, S.A)(l, s ? "jpeg" : "mp4");
                    await _.A.fileManager.saveWithDialog(P.from(i), t);
                } catch (n) {
                    T.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, I.H1)(null);
                }
            }
            async function u() {
                (0, r.Z_)(), (0, I.H1)([l.id]);
                try {
                    let n = await (0, I.VO)(l, { analyticsLocations: [...e, o.A.CLIPS_EXPORT_TO_SOUND_FILE] }),
                        i = await (0, j.R_)(n),
                        t = await i.arrayBuffer(),
                        a = (0, S.A)(l, "ogg");
                    await _.A.fileManager.saveWithDialog(P.from(t), a);
                } catch (n) {
                    T.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, I.H1)(null);
                }
            }
            return (0, t.jsxs)(a.Dr, {
                id: "clips-export-group",
                label: E.intl.string(E.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: O.s },
                children: [
                    (0, t.jsx)(a.Dr, {
                        id: "clips-export-file",
                        label: s ? E.intl.string(E.t.y5FgMk) : E.intl.string(E.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: O.s },
                        action: d,
                    }),
                    !s &&
                        (0, t.jsx)(a.Dr, {
                            id: "clips-export-sound-file",
                            label: E.intl.string(E.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: O.s },
                            action: u,
                        }),
                ],
            });
        })({ clips: i }),
        nr = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "unfavorite",
                      label: E.intl.string(b.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: N.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          (0, r.Z_)(), i.forEach((n) => (0, I.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        no = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: o = !1 } = n;
            return (0, t.jsx)(a.Dr, {
                id: "clips-delete",
                label: E.intl.string(E.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: x.u },
                color: "danger",
                disabled: o,
                action: function (n) {
                    (0, r.Z_)(), (0, C.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l });
                },
            });
        })({ clips: i, onBeforeDelete: q, onAfterDelete: z, actionsDisabled: J }),
        nc = (function (n) {
            let { clips: i } = n;
            return (0, t.jsx)(a.Dr, {
                leadingAccessory: { type: "icon", icon: K.s },
                id: "show-in-folder",
                label: "Show in Folder",
                action: function () {
                    (0, r.Z_)(), _.A.fileManager.showItemInFolder(i[0].filepath);
                },
            });
        })({ clips: i }),
        ns = (function (n) {
            let { clips: i } = n;
            return (0, d.bG)([p.A], () => p.A.isDeveloper)
                ? (0, t.jsx)(a.Dr, {
                      leadingAccessory: { type: "icon", icon: X.P },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          (0, r.Z_)(), (0, u.closeAllModals)(), (0, k.h)(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        nd = (function (n) {
            let { clips: i } = n,
                l = (0, d.bG)([p.A], () => p.A.isDeveloper);
            return i.length > 1 || !l
                ? null
                : (0, t.jsx)(a.Dr, {
                      id: "clips-feedback",
                      label: "Submit Clip Feedback",
                      leadingAccessory: { type: "icon", icon: f.i },
                      action: function () {
                          (0, r.Z_)(),
                              (0, u.openModalLazy)(
                                  async () => {
                                      let { default: n } = await Promise.all([
                                          e.e("98064"),
                                          e.e("8891"),
                                          e.e("58966"),
                                      ]).then(e.bind(e, 885168));
                                      return (e) => (0, t.jsx)(n, { ...e, clip: i[0] });
                                  },
                                  { stackingBehavior: "stack" },
                              );
                      },
                  });
        })({ clips: i }),
        nu = $.has(s.C.SHARE),
        nf = $.has(s.C.EDIT),
        np = $.has(s.C.FAVORITE),
        ny = $.has(s.C.EXPORT_TO_SOUNDBOARD),
        ng = $.has(s.C.COPY_TO_CLIPBOARD),
        nA = $.has(s.C.EXPORT_TO_FILE),
        nh = $.has(s.C.DELETE),
        n_ = $.has(s.C.SHOW_IN_FOLDER),
        nb = $.has(s.C.OPEN_IN_INSPECTOR),
        nE = $.has(s.C.CLIP_FEEDBACK);
    return (0, t.jsxs)(l.W, {
        navId: "clips-more-options",
        "aria-label": E.intl.string(E.t.PdRCRg),
        onClose: r.Z_,
        onSelect: r.Z_,
        children: [
            (0, t.jsxs)(a.rX, { children: [nu && nn, nf && ni] }),
            (0, t.jsxs)(a.rX, { children: [np && ne, ny && nt, ng && nl, nA && na] }),
            (0, t.jsxs)(a.rX, { children: [n_ && nc, nb && ns, nE && nd] }),
            (0, t.jsxs)(a.rX, { children: [np && nr, nh && no] }),
        ],
    });
}
function V(n) {
    let { analyticsLocations: i, ...e } = n,
        { analyticsLocations: l } = (0, c.Ay)(...i, o.A.CLIPS_CONTEXT_MENU);
    return (0, t.jsx)(c.f5, { value: l, children: (0, t.jsx)(U, { ...e }) });
}
