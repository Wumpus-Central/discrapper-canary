n.d(t, { default: () => G });
var i = n(627968);
n(64700);
var a = n(17928),
    r = n(192308),
    l = n(691540),
    o = n(857250),
    s = n(97483),
    u = n(550079),
    c = n(477782),
    d = n(663341),
    f = n(405433),
    p = n(505930),
    g = n(7807),
    h = n(624479),
    y = n(32880),
    m = n(807072),
    b = n(241326),
    w = n(442433),
    A = n(77729),
    _ = n(688810),
    x = n(931991),
    E = n(983069),
    C = n(734057),
    v = n(71393),
    S = n(576705),
    D = n(711014),
    R = n(287809),
    F = n(549685),
    j = n(741394),
    M = n(274372),
    P = n(372684),
    B = n(439818),
    k = n(399925),
    H = n(74847),
    O = n(602902),
    T = n(696016);
n(980504);
var N = n(16590),
    Z = n(985018),
    U = n(264572).Buffer;
function G(e) {
    let {
            clips: t,
            channelId: G,
            onShare: L,
            onEdit: q,
            onBeforeDelete: $,
            onAfterDelete: z,
            actionsDisabled: I = !1,
            showShareAndEdit: K = !1,
        } = e,
        W = t[0],
        V = t.length > 1,
        { analyticsLocations: X } = (0, _.Ay)(),
        Q = (0, a.bG)([D.Ay, S.A, R.default, v.A], () =>
            D.Ay.getFlattenedGuildIds().some((e) => {
                let t = v.A.getGuild(e);
                return null != t && (0, x.ie)(t, S.A, R.default).canCreateExpressions;
            }),
        ),
        Y = (0, a.bG)([M.A], () => t.some((e) => M.A.isClipExporting(e.id)));
    async function J() {
        (0, w.Z_)();
        let e = C.A.getChannel(G);
        (0, k.H1)([W.id]);
        try {
            let t = await (0, k.VO)(W);
            (0, r.openModalLazy)(
                async () => {
                    let { default: a } = await Promise.all([n.e("12811"), n.e("34681")]).then(n.bind(n, 191110)),
                        r = e?.guild_id != null ? v.A.getGuild(e.guild_id) : null,
                        l = null != r && (0, x.ie)(r, S.A, R.default).canCreateExpressions,
                        o = null == W.name || "" === W.name ? (0, T.cM)(W.createdAt) : W.name,
                        s = o.slice(0, 32);
                    return (n) =>
                        (0, i.jsx)(a, {
                            ...n,
                            showGuildPicker: !0,
                            guildId: l ? e?.guild_id : void 0,
                            sourceFile: { file: new File([t], `${o}.mp4`, { type: "video/mp4" }), name: s },
                        });
                },
                { stackingBehavior: "stack" },
            );
        } catch (e) {
        } finally {
            (0, k.H1)(null);
        }
    }
    async function ee() {
        (0, w.Z_)(), (0, k.H1)([W.id]);
        try {
            let e = await (0, k.VO)(W),
                t = await e.arrayBuffer(),
                n = (0, B.A)((0, j.uk)(W.filepath));
            await A.A.fileManager.saveWithDialog(U.from(t), n);
        } catch (e) {
            T.nx.error("Error exporting clip to file", e);
        } finally {
            (0, k.H1)(null);
        }
    }
    async function et() {
        (0, w.Z_)();
        let e = (0, H.t)(G);
        (0, k.H1)(t.map((e) => e.id));
        try {
            await (0, O.K)(t, { channelId: e ? G : void 0, analyticsLocations: X });
        } catch (e) {
        } finally {
            (0, k.H1)(null);
        }
        L?.();
    }
    function en() {
        (0, w.Z_)(), t.forEach((e) => (0, k.XK)(e));
    }
    async function ei() {
        (0, w.Z_)(), (0, k.H1)([W.id]);
        try {
            let e = await (0, k.VO)(W),
                t = await (0, E.R_)(e),
                n = await t.arrayBuffer(),
                i = (0, B.A)((0, j.kh)(W.filepath)) + ".ogg";
            await A.A.fileManager.saveWithDialog(U.from(n), i);
        } catch (e) {
            T.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, k.H1)(null);
        }
    }
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": Z.intl.string(Z.t.PdRCRg),
        onClose: w.Z_,
        onSelect: w.Z_,
        children: [
            t.some((e) => !0 === e.isTemporary) &&
                (0, i.jsx)(c.Dr, {
                    id: "add-to-library",
                    label: Z.intl.string(Z.t["BfLmm+"]),
                    leadingAccessory: { type: "icon", icon: d.p },
                    disabled: I,
                    action: function () {
                        (0, w.Z_)(), t.forEach((e) => (0, k.w7)(e.id));
                    },
                }),
            K &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Dr, {
                            id: "share",
                            label: Z.intl.string(Z.t.RDE0Sc),
                            leadingAccessory: { type: "icon", icon: f.l },
                            disabled: I && !Y,
                            action: et,
                        }),
                        !V &&
                            (0, i.jsx)(c.Dr, {
                                id: "edit",
                                label: Z.intl.string(Z.t.bt75uw),
                                leadingAccessory: { type: "icon", icon: F.A },
                                disabled: I || V,
                                action: function () {
                                    (0, w.Z_)(), V || q?.();
                                },
                            }),
                        (0, i.jsx)(c.bX, {}),
                    ],
                }),
            !W.isFavorite &&
                (0, i.jsx)(c.Dr, {
                    id: "favorite",
                    label: Z.intl.string(Z.t.nPywqO),
                    leadingAccessory: { type: "icon", icon: p.y },
                    disabled: I,
                    action: en,
                }),
            !V && Q && W.type !== P.nQ.SCREENSHOT
                ? (0, i.jsx)(c.Dr, {
                      leadingAccessory: { type: "icon", icon: g.J },
                      id: "clips-export-soundboard",
                      label: Z.intl.string(N.default.HH4Tjj),
                      action: J,
                  })
                : null,
            !V &&
                null != A.A.clipboard.copyFile &&
                (0, i.jsx)(c.Dr, {
                    leadingAccessory: { type: "icon", icon: h.T },
                    id: "clips-copy-video",
                    label: Z.intl.string(N.default.tv7emB),
                    action: function () {
                        (0, w.Z_)(),
                            A.A.clipboard.copyFile(W.filepath),
                            (0, l.P0)((0, o.o)(Z.intl.string(Z.t.mGZ66D), s.Ck.SUCCESS));
                    },
                }),
            !V &&
                (0, i.jsxs)(c.Dr, {
                    id: "clips-export-group",
                    leadingAccessory: { type: "icon", icon: y.s },
                    label: Z.intl.string(Z.t["WH/V85"]),
                    children: [
                        (0, i.jsx)(c.Dr, {
                            leadingAccessory: { type: "icon", icon: y.s },
                            id: "clips-export-file",
                            label: W.type === P.nQ.SCREENSHOT ? Z.intl.string(Z.t.y5FgMk) : Z.intl.string(Z.t.sFgmNy),
                            action: ee,
                        }),
                        W.type !== P.nQ.SCREENSHOT &&
                            (0, i.jsx)(c.Dr, {
                                leadingAccessory: { type: "icon", icon: y.s },
                                id: "clips-export-sound-file",
                                label: Z.intl.string(Z.t.db0NKG),
                                action: ei,
                            }),
                    ],
                }),
            (0, i.jsx)(c.bX, {}),
            !0 === W.isFavorite &&
                (0, i.jsx)(c.Dr, {
                    leadingAccessory: { type: "icon", icon: m.U },
                    id: "unfavorite",
                    label: Z.intl.string(N.default.IZsalP),
                    color: "danger",
                    disabled: I,
                    action: en,
                }),
            (0, i.jsx)(c.Dr, {
                leadingAccessory: { type: "icon", icon: b.u },
                id: "clips-delete",
                label: Z.intl.string(Z.t.oyYWHE),
                color: "danger",
                disabled: I,
                action: function (e) {
                    if (((0, w.Z_)(), e?.shiftKey)) {
                        $?.(), t.forEach((e) => (0, k.oH)(e.filepath, e.id)), z?.();
                        return;
                    }
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    clips: t,
                                    ...n,
                                    onBeforeDelete: $,
                                    onAfterDelete: async () => {
                                        await n.onClose(), z?.();
                                    },
                                });
                        },
                        { stackingBehavior: "stack" },
                    );
                },
            }),
        ],
    });
}
