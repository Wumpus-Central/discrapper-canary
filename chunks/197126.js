e.d(i, { default: () => U });
var t = e(627968);
e(64700);
var l = e(980707),
    r = e(477782),
    o = e(442433),
    a = e(253799),
    c = e(663341),
    s = e(607814),
    d = e(375708),
    u = e(691540),
    f = e(857250),
    p = e(97483),
    y = e(624479),
    g = e(77729),
    h = e(16590),
    A = e(241326),
    b = e(645655),
    _ = e(549685),
    x = e(32880),
    D = e(983069),
    E = e(741394),
    C = e(372684),
    O = e(439818),
    j = e(696016),
    w = e(264572).Buffer,
    m = e(17928),
    I = e(7807),
    R = e(931991),
    Z = e(71393),
    T = e(576705),
    v = e(711014),
    H = e(287809),
    S = e(105009),
    F = e(505930),
    P = e(807072),
    N = e(192308),
    k = e(346411),
    B = e(540999),
    G = e(781710),
    X = e(405433),
    L = e(688810),
    W = e(274372),
    M = e(74847),
    K = e(602902),
    V = e(678708);
function U(n) {
    let {
            clips: i,
            channelId: e,
            onShare: U,
            onEdit: Y,
            onBeforeDelete: Q,
            onAfterDelete: q,
            actionsDisabled: J = !1,
            displayConfiguration: z = a.I,
        } = n,
        $ = (function (n) {
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
        })({ clips: i, actionsDisabled: J }),
        nn = (function (n) {
            let { clips: i, channelId: e, onShare: l, actionsDisabled: a = !1 } = n,
                { analyticsLocations: c } = (0, L.Ay)(),
                u = (0, m.bG)([W.A], () => i.some((n) => W.A.isClipExporting(n.id)));
            async function f() {
                (0, o.Z_)();
                let n = (0, M.t)(e);
                (0, s.H1)(i.map((n) => n.id));
                try {
                    await (0, K.K)(i, { channelId: n ? e : void 0, analyticsLocations: c });
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
                action: f,
            });
        })({ clips: i, channelId: e, onShare: U, actionsDisabled: J }),
        ni = (function (n) {
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
        })({ clips: i, onEdit: Y, actionsDisabled: J }),
        ne = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 === i[0].isFavorite
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "favorite",
                      label: d.intl.string(d.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: F.y },
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        nt = (function (n) {
            let { clips: i, channelId: e } = n,
                l = (0, m.bG)([v.Ay, T.A, H.default, Z.A], () =>
                    v.Ay.getFlattenedGuildIds().some((n) => {
                        let i = Z.A.getGuild(n);
                        return null != i && (0, R.ie)(i, T.A, H.default).canCreateExpressions;
                    }),
                ),
                a = i[0];
            if (i.length > 1 || !l || a.type === C.nQ.SCREENSHOT) return null;
            async function c() {
                (0, o.Z_)(), await (0, S.n)(a, e);
            }
            return (0, t.jsx)(r.Dr, {
                id: "clips-export-soundboard",
                label: d.intl.string(h.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: I.J },
                action: c,
            });
        })({ clips: i, channelId: e }),
        nl = (function (n) {
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
                              (0, u.P0)((0, f.o)(d.intl.string(d.t.mGZ66D), p.Ck.SUCCESS));
                      },
                  });
        })({ clips: i }),
        nr = (function (n) {
            let { clips: i } = n,
                e = i[0];
            if (i.length > 1) return null;
            let l = e.type === C.nQ.SCREENSHOT;
            async function a() {
                (0, o.Z_)(), (0, s.H1)([e.id]);
                try {
                    let n = await (0, s.VO)(e),
                        i = await n.arrayBuffer(),
                        t = (0, O.A)((0, E.uk)(e.filepath));
                    await g.A.fileManager.saveWithDialog(w.from(i), t);
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
                        l = (0, O.A)((0, E.kh)(e.filepath)) + ".ogg";
                    await g.A.fileManager.saveWithDialog(w.from(t), l);
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
        no = (function (n) {
            let { clips: i, actionsDisabled: e = !1 } = n;
            return !0 !== i[0].isFavorite
                ? null
                : (0, t.jsx)(r.Dr, {
                      id: "unfavorite",
                      label: d.intl.string(h.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: P.U },
                      color: "danger",
                      disabled: e,
                      action: function () {
                          (0, o.Z_)(), i.forEach((n) => (0, s.XK)(n));
                      },
                  });
        })({ clips: i, actionsDisabled: J }),
        na = (function (n) {
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
        })({ clips: i, onBeforeDelete: Q, onAfterDelete: q, actionsDisabled: J }),
        nc = (function (n) {
            let { clips: i } = n;
            return (0, m.bG)([B.A], () => B.A.isDeveloper)
                ? (0, t.jsx)(r.Dr, {
                      leadingAccessory: { type: "icon", icon: V.s },
                      id: "show-in-folder",
                      label: "Show in Folder",
                      action: function () {
                          (0, o.Z_)(), g.A.fileManager.showItemInFolder(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        ns = (function (n) {
            let { clips: i } = n;
            return (0, m.bG)([B.A], () => B.A.isDeveloper)
                ? (0, t.jsx)(r.Dr, {
                      leadingAccessory: { type: "icon", icon: k.P },
                      id: "open-in-inspector",
                      label: "Open in Inspector",
                      action: function () {
                          (0, o.Z_)(), (0, N.closeAllModals)(), (0, G.h)(i[0].filepath);
                      },
                  })
                : null;
        })({ clips: i }),
        nd = z.has(a.C.ADD_TO_LIBRARY),
        nu = z.has(a.C.SHARE),
        nf = z.has(a.C.EDIT),
        np = z.has(a.C.FAVORITE),
        ny = z.has(a.C.EXPORT_TO_SOUNDBOARD),
        ng = z.has(a.C.COPY_TO_CLIPBOARD),
        nh = z.has(a.C.EXPORT_TO_FILE),
        nA = z.has(a.C.DELETE),
        nb = z.has(a.C.SHOW_IN_FOLDER),
        n_ = z.has(a.C.OPEN_IN_INSPECTOR);
    return (0, t.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": d.intl.string(d.t.PdRCRg),
        onClose: o.Z_,
        onSelect: o.Z_,
        children: [
            (0, t.jsxs)(r.rX, { children: [nd && $, nu && nn, nf && ni] }),
            (0, t.jsxs)(r.rX, { children: [np && ne, ny && nt, ng && nl, nh && nr] }),
            (0, t.jsxs)(r.rX, { children: [nb && nc, n_ && ns] }),
            (0, t.jsxs)(r.rX, { children: [np && no, nA && na] }),
        ],
    });
}
