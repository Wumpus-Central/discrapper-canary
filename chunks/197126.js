e.d(i, { default: () => V });
var t = e(627968);
e(64700);
var l = e(980707),
    r = e(477782),
    o = e(442433),
    a = e(253799),
    c = e(663341),
    s = e(61302),
    d = e(375708),
    u = e(691540),
    p = e(857250),
    f = e(97483),
    y = e(624479),
    g = e(77729),
    h = e(16590),
    A = e(241326),
    b = e(645655),
    _ = e(549685),
    x = e(32880),
    D = e(983069),
    E = e(372684),
    C = e(589553),
    j = e(696016),
    O = e(264572).Buffer,
    m = e(17928),
    w = e(7807),
    I = e(931991),
    R = e(71393),
    Z = e(576705),
    T = e(711014),
    v = e(287809),
    H = e(105009),
    S = e(505930),
    F = e(807072),
    P = e(192308),
    N = e(346411),
    B = e(540999),
    G = e(781710),
    X = e(405433),
    k = e(688810),
    L = e(274372),
    W = e(74847),
    M = e(602902),
    K = e(678708);
function V(n) {
    let {
            clips: i,
            channelId: e,
            onShare: V,
            onEdit: U,
            onBeforeDelete: Y,
            onAfterDelete: Q,
            actionsDisabled: q = !1,
            displayConfiguration: J = a.I,
        } = n,
        z = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return i.some((n) => !0 === n.isTemporary)
                ? (0, t.jsx)(r.Dr, {
                      id: "add-to-library",
                      label: d.intl.string(d.t["BfLmm+"]),
                      leadingAccessory: { type: "icon", icon: c.p },
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.w7)(n.id));
                      },
                  })
                : null;
        })({ clips: i, actionsDisabled: q }),
        $ = (function (n) {
            let { clips: i, channelId: e, onShare: l, actionsDisabled: a = !1 } = n,
                { analyticsLocations: c } = (0, k.Ay)(),
                u = (0, m.bG)([L.Ay], () => i.some((n) => L.Ay.isClipExporting(n.id)));
            async function p() {
                (0, o.Z_)();
                let n = (0, W.t)(e);
                (0, s.H1)(i.map((n) => n.id));
                try {
                    await (0, M.K)(i, { channelId: n ? e : void 0, analyticsLocations: c });
                } catch (n) {
                } finally {
                    (0, s.H1)(null);
                }
                l?.();
            }
            return (0, t.jsx)(r.Dr, {
                id: "share",
                label: d.intl.string(d.t.RDE0Sc),
                leadingAccessory: { type: "icon", icon: X.l },
                disabled: a && !u,
                action: p,
            });
        })({ clips: i, channelId: e, onShare: V, actionsDisabled: q }),
        nn = (function (n) {
            let { clips: i, onEdit: e, actionsDisabled: l = !1 } = n;
            return i.length > 1
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "edit",
                      label: d.intl.string(d.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: _.A },
                      disabled: l,
                      action: function () {
                          (0, o.Z_)(), e?.();
                      },
                  });
        })({ clips: i, onEdit: U, actionsDisabled: q }),
        ni = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "favorite",
                      label: d.intl.string(d.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: S.y },
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: q }),
        ne = (function (n) {
            let { clips: i, channelId: e } = n,
                l = (0, m.bG)([T.Ay, Z.A, v.default, R.A], () =>
                    T.Ay.getFlattenedGuildIds().some((n) => {
                        let i = R.A.getGuild(n);
                        return null != i && (0, I.ie)(i, Z.A, v.default).canCreateExpressions;
                    }),
                ),
                a = i[0];
            if (i.length > 1 || !l || a.type === E.nQ.SCREENSHOT) return null;
            async function c() {
                (0, o.Z_)(), await (0, H.n)(a, e);
            }
            return (0, t.jsx)(r.Dr, {
                id: "clips-export-soundboard",
                label: d.intl.string(h.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: w.J },
                action: c,
            });
        })({ clips: i, channelId: e }),
        nt = (function (n) {
            let { clips: i } = n,
                e = i[0];
            return i.length > 1 || null == g.A.clipboard.copyFile
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "clips-copy-video",
                      label: d.intl.string(h.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: y.T },
                      action: function () {
                          (0, o.Z_)(),
                              g.A.clipboard.copyFile(e.filepath),
                              (0, u.P0)((0, p.o)(d.intl.string(d.t.mGZ66D), f.Ck.SUCCESS));
                      },
                  });
        })({ clips: i }),
        nl = (function (n) {
            let { clips: i } = n,
                e = i[0];
            if (i.length > 1) return null;
            let l = e.type === E.nQ.SCREENSHOT;
            async function a() {
                (0, o.Z_)(), (0, s.H1)([e.id]);
                try {
                    let n = await (0, s.VO)(e),
                        i = await n.arrayBuffer(),
                        t = (0, C.A)(e, l ? "jpeg" : "mp4");
                    await g.A.fileManager.saveWithDialog(O.from(i), t);
                } catch (n) {
                    j.nx.error("Error exporting clip to file", n);
                } finally {
                    (0, s.H1)(null);
                }
            }
            async function c() {
                (0, o.Z_)(), (0, s.H1)([e.id]);
                try {
                    let n = await (0, s.VO)(e),
                        i = await (0, D.R_)(n),
                        t = await i.arrayBuffer(),
                        l = (0, C.A)(e, "ogg");
                    await g.A.fileManager.saveWithDialog(O.from(t), l);
                } catch (n) {
                    j.nx.error("Error exporting clip to sound file", n);
                } finally {
                    (0, s.H1)(null);
                }
            }
            return (0, t.jsxs)(r.Dr, {
                id: "clips-export-group",
                label: d.intl.string(d.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: x.s },
                children: [
                    (0, t.jsx)(r.Dr, {
                        id: "clips-export-file",
                        label: l ? d.intl.string(d.t.y5FgMk) : d.intl.string(d.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: x.s },
                        action: a,
                    }),
                    !l &&
                        (0, t.jsx)(r.Dr, {
                            id: "clips-export-sound-file",
                            label: d.intl.string(d.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: x.s },
                            action: c,
                        }),
                ],
            });
        })({ clips: i }),
        nr = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "unfavorite",
                      label: d.intl.string(h.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: F.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: q }),
        no = (function (n) {
            let { clips: i, onBeforeDelete: e, onAfterDelete: l, actionsDisabled: a = !1 } = n;
            return (0, t.jsx)(r.Dr, {
                id: "clips-delete",
                label: d.intl.string(d.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: A.u },
                color: "danger",
                disabled: a,
                action: function (n) {
                    (0, o.Z_)(), (0, b.A)(n, { clips: i, onBeforeDelete: e, onAfterDelete: l });
                },
            });
        })({ clips: i, onBeforeDelete: Y, onAfterDelete: Q, actionsDisabled: q }),
        na = (function (n) {
            let { clips: i } = n;
            return (0, m.bG)([B.A], () => B.A.isDeveloper)
                ? (0, t.jsx)(r.Dr, {
                      leadingAccessory: { type: "icon", icon: K.s },
                      id: "show-in-folder",
                      label: "Show in Folder",
                      action: function () {
                          (0, o.Z_)(), g.A.fileManager.showItemInFolder(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        nc = (function (n) {
            let { clips: i } = n;
            return (0, m.bG)([B.A], () => B.A.isDeveloper)
                ? (0, t.jsx)(r.Dr, {
                      leadingAccessory: { type: "icon", icon: N.P },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          (0, o.Z_)(), (0, P.closeAllModals)(), (0, G.h)(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        ns = J.has(a.C.ADD_TO_LIBRARY),
        nd = J.has(a.C.SHARE),
        nu = J.has(a.C.EDIT),
        np = J.has(a.C.FAVORITE),
        nf = J.has(a.C.EXPORT_TO_SOUNDBOARD),
        ny = J.has(a.C.COPY_TO_CLIPBOARD),
        ng = J.has(a.C.EXPORT_TO_FILE),
        nh = J.has(a.C.DELETE),
        nA = J.has(a.C.SHOW_IN_FOLDER),
        nb = J.has(a.C.OPEN_IN_INSPECTOR);
    return (0, t.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": d.intl.string(d.t.PdRCRg),
        onClose: o.Z_,
        onSelect: o.Z_,
        children: [
            (0, t.jsxs)(r.rX, { children: [ns && z, nd && $, nu && nn] }),
            (0, t.jsxs)(r.rX, { children: [np && ni, nf && ne, ny && nt, ng && nl] }),
            (0, t.jsxs)(r.rX, { children: [nA && na, nb && nc] }),
            (0, t.jsxs)(r.rX, { children: [np && nr, nh && no] }),
        ],
    });
}
