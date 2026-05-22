t.d(n, { default: () => K });
var e = t(627968);
t(64700);
var l = t(980707),
    r = t(477782),
    a = t(442433),
    o = t(253799),
    c = t(663341),
    s = t(607814),
    d = t(375708),
    u = t(691540),
    f = t(857250),
    p = t(97483),
    y = t(624479),
    g = t(77729),
    h = t(16590),
    A = t(241326),
    b = t(645655),
    x = t(549685),
    _ = t(32880),
    D = t(983069),
    E = t(741394),
    C = t(372684),
    j = t(439818),
    O = t(696016),
    w = t(264572).Buffer,
    m = t(17928),
    R = t(7807),
    Z = t(931991),
    H = t(71393),
    T = t(576705),
    v = t(711014),
    I = t(287809),
    S = t(105009),
    F = t(505930),
    k = t(807072),
    B = t(405433),
    P = t(688810),
    X = t(274372),
    G = t(74847),
    L = t(602902),
    N = t(678708),
    W = t(540999);
function K(i) {
    let {
            clips: n,
            channelId: t,
            onShare: K,
            onEdit: M,
            onBeforeDelete: V,
            onAfterDelete: U,
            actionsDisabled: Y = !1,
            displayConfiguration: Q = o.I,
        } = i,
        q = (function (i) {
            let { clips: n, actionsDisabled: t = !1 } = i;
            return n.some((i) => !0 === i.isTemporary)
                ? (0, e.jsx)(r.Dr, {
                      id: "add-to-library",
                      label: d.intl.string(d.t["BfLmm+"]),
                      leadingAccessory: { type: "icon", icon: c.p },
                      disabled: t,
                      action: function () {
                          (0, a.Z_)(), n.forEach((i) => (0, s.w7)(i.id));
                      },
                  })
                : null;
        })({ clips: n, actionsDisabled: Y }),
        J = (function (i) {
            let { clips: n, channelId: t, onShare: l, actionsDisabled: o = !1 } = i,
                { analyticsLocations: c } = (0, P.Ay)(),
                u = (0, m.bG)([X.A], () => n.some((i) => X.A.isClipExporting(i.id)));
            async function f() {
                (0, a.Z_)();
                let i = (0, G.t)(t);
                (0, s.H1)(n.map((i) => i.id));
                try {
                    await (0, L.K)(n, { channelId: i ? t : void 0, analyticsLocations: c });
                } catch (i) {
                } finally {
                    (0, s.H1)(null);
                }
                l?.();
            }
            return (0, e.jsx)(r.Dr, {
                id: "share",
                label: d.intl.string(d.t.RDE0Sc),
                leadingAccessory: { type: "icon", icon: B.l },
                disabled: o && !u,
                action: f,
            });
        })({ clips: n, channelId: t, onShare: K, actionsDisabled: Y }),
        z = (function (i) {
            let { clips: n, onEdit: t, actionsDisabled: l = !1 } = i;
            return n.length > 1
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "edit",
                      label: d.intl.string(d.t.bt75uw),
                      leadingAccessory: { type: "icon", icon: x.A },
                      disabled: l,
                      action: function () {
                          (0, a.Z_)(), t?.();
                      },
                  });
        })({ clips: n, onEdit: M, actionsDisabled: Y }),
        $ = (function (i) {
            let { clips: n, actionsDisabled: t = !1 } = i;
            return !0 === n[0].isFavorite
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "favorite",
                      label: d.intl.string(d.t.nPywqO),
                      leadingAccessory: { type: "icon", icon: F.y },
                      disabled: t,
                      action: function () {
                          (0, a.Z_)(), n.forEach((i) => (0, s.XK)(i));
                      },
                  });
        })({ clips: n, actionsDisabled: Y }),
        ii = (function (i) {
            let { clips: n, channelId: t } = i,
                l = (0, m.bG)([v.Ay, T.A, I.default, H.A], () =>
                    v.Ay.getFlattenedGuildIds().some((i) => {
                        let n = H.A.getGuild(i);
                        return null != n && (0, Z.ie)(n, T.A, I.default).canCreateExpressions;
                    }),
                ),
                o = n[0];
            if (n.length > 1 || !l || o.type === C.nQ.SCREENSHOT) return null;
            async function c() {
                (0, a.Z_)(), await (0, S.n)(o, t);
            }
            return (0, e.jsx)(r.Dr, {
                id: "clips-export-soundboard",
                label: d.intl.string(h.default.HH4Tjj),
                leadingAccessory: { type: "icon", icon: R.J },
                action: c,
            });
        })({ clips: n, channelId: t }),
        it = (function (i) {
            let { clips: n } = i,
                t = n[0];
            return n.length > 1 || null == g.A.clipboard.copyFile
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "clips-copy-video",
                      label: d.intl.string(h.default.tv7emB),
                      leadingAccessory: { type: "icon", icon: y.T },
                      action: function () {
                          (0, a.Z_)(),
                              g.A.clipboard.copyFile(t.filepath),
                              (0, u.P0)((0, f.o)(d.intl.string(d.t.mGZ66D), p.Ck.SUCCESS));
                      },
                  });
        })({ clips: n }),
        ie = (function (i) {
            let { clips: n } = i,
                t = n[0];
            if (n.length > 1) return null;
            let l = t.type === C.nQ.SCREENSHOT;
            async function o() {
                (0, a.Z_)(), (0, s.H1)([t.id]);
                try {
                    let i = await (0, s.VO)(t),
                        n = await i.arrayBuffer(),
                        e = (0, j.A)((0, E.uk)(t.filepath));
                    await g.A.fileManager.saveWithDialog(w.from(n), e);
                } catch (i) {
                    O.nx.error("Error exporting clip to file", i);
                } finally {
                    (0, s.H1)(null);
                }
            }
            async function c() {
                (0, a.Z_)(), (0, s.H1)([t.id]);
                try {
                    let i = await (0, s.VO)(t),
                        n = await (0, D.R_)(i),
                        e = await n.arrayBuffer(),
                        l = (0, j.A)((0, E.kh)(t.filepath)) + ".ogg";
                    await g.A.fileManager.saveWithDialog(w.from(e), l);
                } catch (i) {
                    O.nx.error("Error exporting clip to sound file", i);
                } finally {
                    (0, s.H1)(null);
                }
            }
            return (0, e.jsxs)(r.Dr, {
                id: "clips-export-group",
                label: d.intl.string(d.t["WH/V85"]),
                leadingAccessory: { type: "icon", icon: _.s },
                children: [
                    (0, e.jsx)(r.Dr, {
                        id: "clips-export-file",
                        label: l ? d.intl.string(d.t.y5FgMk) : d.intl.string(d.t.sFgmNy),
                        leadingAccessory: { type: "icon", icon: _.s },
                        action: o,
                    }),
                    !l &&
                        (0, e.jsx)(r.Dr, {
                            id: "clips-export-sound-file",
                            label: d.intl.string(d.t.db0NKG),
                            leadingAccessory: { type: "icon", icon: _.s },
                            action: c,
                        }),
                ],
            });
        })({ clips: n }),
        il = (function (i) {
            let { clips: n, actionsDisabled: t = !1 } = i;
            return !0 !== n[0].isFavorite
                ? null
                : (0, e.jsx)(r.Dr, {
                      id: "unfavorite",
                      label: d.intl.string(h.default.IZsalP),
                      leadingAccessory: { type: "icon", icon: k.U },
                      color: "danger",
                      disabled: t,
                      action: function () {
                          (0, a.Z_)(), n.forEach((i) => (0, s.XK)(i));
                      },
                  });
        })({ clips: n, actionsDisabled: Y }),
        ir = (function (i) {
            let { clips: n, onBeforeDelete: t, onAfterDelete: l, actionsDisabled: o = !1 } = i;
            return (0, e.jsx)(r.Dr, {
                id: "clips-delete",
                label: d.intl.string(d.t.oyYWHE),
                leadingAccessory: { type: "icon", icon: A.u },
                color: "danger",
                disabled: o,
                action: function (i) {
                    (0, a.Z_)(), (0, b.A)(i, { clips: n, onBeforeDelete: t, onAfterDelete: l });
                },
            });
        })({ clips: n, onBeforeDelete: V, onAfterDelete: U, actionsDisabled: Y }),
        ia = (function (i) {
            let { clips: n } = i;
            return (0, m.bG)([W.A], () => W.A.isDeveloper)
                ? (0, e.jsx)(r.Dr, {
                      leadingAccessory: { type: "icon", icon: N.s },
                      id: "show-in-folder",
                      label: "Show in Folder",
                      action: function () {
                          (0, a.Z_)(), g.A.fileManager.showItemInFolder(n[0].filepath);
                      },
                  })
                : null;
        })({ clips: n }),
        io = Q.has(o.C.ADD_TO_LIBRARY),
        ic = Q.has(o.C.SHARE),
        is = Q.has(o.C.EDIT),
        id = Q.has(o.C.FAVORITE),
        iu = Q.has(o.C.EXPORT_TO_SOUNDBOARD),
        ip = Q.has(o.C.COPY_TO_CLIPBOARD),
        iy = Q.has(o.C.EXPORT_TO_FILE),
        ig = Q.has(o.C.DELETE),
        ih = Q.has(o.C.SHOW_IN_FOLDER);
    return (0, e.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": d.intl.string(d.t.PdRCRg),
        onClose: a.Z_,
        onSelect: a.Z_,
        children: [
            (0, e.jsxs)(r.rX, { children: [io && q, ic && J, is && z] }),
            (0, e.jsxs)(r.rX, { children: [id && $, iu && ii, ip && it, iy && ie] }),
            (0, e.jsx)(r.rX, { children: ih && ia }),
            (0, e.jsxs)(r.rX, { children: [id && il, ig && ir] }),
        ],
    });
}
