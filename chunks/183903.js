n.d(t, { default: () => U });
var a = n(627968);
n(64700);
var i = n(17928),
    l = n(192308),
    r = n(691540),
    s = n(857250),
    o = n(97483),
    c = n(550079),
    u = n(477782),
    d = n(663341),
    f = n(405433),
    h = n(505930),
    g = n(7807),
    p = n(624479),
    y = n(32880),
    E = n(807072),
    m = n(241326),
    A = n(442433),
    w = n(77729),
    x = n(688810),
    _ = n(931991),
    b = n(983069),
    v = n(734057),
    C = n(71393),
    N = n(576705),
    S = n(711014),
    M = n(287809),
    T = n(549685),
    R = n(741394),
    B = n(274372),
    D = n(372684),
    G = n(439818),
    j = n(399925),
    I = n(74847),
    O = n(602902),
    F = n(696016);
n(980504);
var Z = n(16590),
    L = n(985018),
    P = n(264572).Buffer;
function U(e) {
    let {
            clips: t,
            channelId: U,
            onShare: k,
            onEdit: V,
            onBeforeDelete: H,
            onAfterDelete: q,
            actionsDisabled: X = !1,
            showShareAndEdit: J = !1,
        } = e,
        K = t[0],
        W = t.length > 1,
        { analyticsLocations: $ } = (0, x.Ay)(),
        z = (0, i.bG)([S.Ay, N.A, M.default, C.A], () =>
            S.Ay.getFlattenedGuildIds().some((e) => {
                let t = C.A.getGuild(e);
                return null != t && (0, _.ie)(t, N.A, M.default).canCreateExpressions;
            }),
        ),
        Q = (0, i.bG)([B.A], () => t.some((e) => B.A.isClipExporting(e.id)));
    async function Y() {
        (0, A.Z_)();
        let e = v.A.getChannel(U);
        (0, j.H1)([K.id]);
        try {
            let t = await (0, j.VO)(K);
            (0, l.openModalLazy)(
                async () => {
                    let { default: i } = await Promise.all([
                            n.e("24199"),
                            n.e("57036"),
                            n.e("88394"),
                            n.e("80527"),
                            n.e("21909"),
                            n.e("31825"),
                            n.e("23353"),
                            n.e("7175"),
                            n.e("37249"),
                            n.e("14138"),
                            n.e("8971"),
                            n.e("88017"),
                            n.e("77404"),
                            n.e("1040"),
                            n.e("64615"),
                            n.e("67849"),
                            n.e("64492"),
                            n.e("8555"),
                            n.e("36682"),
                            n.e("45723"),
                            n.e("56871"),
                            n.e("69601"),
                            n.e("63191"),
                            n.e("51444"),
                            n.e("62290"),
                            n.e("80973"),
                            n.e("12811"),
                            n.e("12612"),
                        ]).then(n.bind(n, 191110)),
                        l = e?.guild_id != null ? C.A.getGuild(e.guild_id) : null,
                        r = null != l && (0, _.ie)(l, N.A, M.default).canCreateExpressions,
                        s = null == K.name || "" === K.name ? (0, F.cM)(K.createdAt) : K.name,
                        o = s.slice(0, 32);
                    return (n) =>
                        (0, a.jsx)(i, {
                            ...n,
                            showGuildPicker: !0,
                            guildId: r ? e?.guild_id : void 0,
                            sourceFile: { file: new File([t], `${s}.mp4`, { type: "video/mp4" }), name: o },
                        });
                },
                { stackingBehavior: "stack" },
            );
        } catch (e) {
        } finally {
            (0, j.H1)(null);
        }
    }
    async function ee() {
        (0, A.Z_)(), (0, j.H1)([K.id]);
        try {
            let e = await (0, j.VO)(K),
                t = await e.arrayBuffer(),
                n = (0, G.A)((0, R.uk)(K.filepath));
            await w.A.fileManager.saveWithDialog(P.from(t), n);
        } catch (e) {
            F.nx.error("Error exporting clip to file", e);
        } finally {
            (0, j.H1)(null);
        }
    }
    async function et() {
        (0, A.Z_)();
        let e = (0, I.t)(U);
        (0, j.H1)(t.map((e) => e.id));
        try {
            await (0, O.K)(t, { channelId: e ? U : void 0, analyticsLocations: $ });
        } catch (e) {
        } finally {
            (0, j.H1)(null);
        }
        k?.();
    }
    function en() {
        (0, A.Z_)(), t.forEach((e) => (0, j.XK)(e));
    }
    async function ea() {
        (0, A.Z_)(), (0, j.H1)([K.id]);
        try {
            let e = await (0, j.VO)(K),
                t = await (0, b.R_)(e),
                n = await t.arrayBuffer(),
                a = (0, G.A)((0, R.kh)(K.filepath)) + ".ogg";
            await w.A.fileManager.saveWithDialog(P.from(n), a);
        } catch (e) {
            F.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, j.H1)(null);
        }
    }
    return (0, a.jsxs)(c.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": L.intl.string(L.t.PdRCRg),
        onClose: A.Z_,
        onSelect: A.Z_,
        children: [
            t.some((e) => !0 === e.isTemporary) &&
                (0, a.jsx)(u.Dr, {
                    id: "add-to-library",
                    label: L.intl.string(L.t["BfLmm+"]),
                    leadingAccessory: { type: "icon", icon: d.p },
                    disabled: X,
                    action: function () {
                        (0, A.Z_)(), t.forEach((e) => (0, j.w7)(e.id));
                    },
                }),
            J &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(u.Dr, {
                            id: "share",
                            label: L.intl.string(L.t.RDE0Sc),
                            leadingAccessory: { type: "icon", icon: f.l },
                            disabled: X && !Q,
                            action: et,
                        }),
                        !W &&
                            (0, a.jsx)(u.Dr, {
                                id: "edit",
                                label: L.intl.string(L.t.bt75uw),
                                leadingAccessory: { type: "icon", icon: T.A },
                                disabled: X || W,
                                action: function () {
                                    (0, A.Z_)(), W || V?.();
                                },
                            }),
                        (0, a.jsx)(u.bX, {}),
                    ],
                }),
            !K.isFavorite &&
                (0, a.jsx)(u.Dr, {
                    id: "favorite",
                    label: L.intl.string(L.t.nPywqO),
                    leadingAccessory: { type: "icon", icon: h.y },
                    disabled: X,
                    action: en,
                }),
            !W && z && K.type !== D.nQ.SCREENSHOT
                ? (0, a.jsx)(u.Dr, {
                      leadingAccessory: { type: "icon", icon: g.J },
                      id: "clips-export-soundboard",
                      label: L.intl.string(Z.default.HH4Tjj),
                      action: Y,
                  })
                : null,
            !W &&
                null != w.A.clipboard.copyFile &&
                (0, a.jsx)(u.Dr, {
                    leadingAccessory: { type: "icon", icon: p.T },
                    id: "clips-copy-video",
                    label: L.intl.string(Z.default.tv7emB),
                    action: function () {
                        (0, A.Z_)(),
                            w.A.clipboard.copyFile(K.filepath),
                            (0, r.P0)((0, s.o)(L.intl.string(L.t.mGZ66D), o.Ck.SUCCESS));
                    },
                }),
            !W &&
                (0, a.jsxs)(u.Dr, {
                    id: "clips-export-group",
                    leadingAccessory: { type: "icon", icon: y.s },
                    label: L.intl.string(L.t["WH/V85"]),
                    children: [
                        (0, a.jsx)(u.Dr, {
                            leadingAccessory: { type: "icon", icon: y.s },
                            id: "clips-export-file",
                            label: K.type === D.nQ.SCREENSHOT ? L.intl.string(L.t.y5FgMk) : L.intl.string(L.t.sFgmNy),
                            action: ee,
                        }),
                        K.type !== D.nQ.SCREENSHOT &&
                            (0, a.jsx)(u.Dr, {
                                leadingAccessory: { type: "icon", icon: y.s },
                                id: "clips-export-sound-file",
                                label: L.intl.string(L.t.db0NKG),
                                action: ea,
                            }),
                    ],
                }),
            (0, a.jsx)(u.bX, {}),
            !0 === K.isFavorite &&
                (0, a.jsx)(u.Dr, {
                    leadingAccessory: { type: "icon", icon: E.U },
                    id: "unfavorite",
                    label: L.intl.string(Z.default.IZsalP),
                    color: "danger",
                    disabled: X,
                    action: en,
                }),
            (0, a.jsx)(u.Dr, {
                leadingAccessory: { type: "icon", icon: m.u },
                id: "clips-delete",
                label: L.intl.string(L.t.oyYWHE),
                color: "danger",
                disabled: X,
                action: function (e) {
                    if (((0, A.Z_)(), e?.shiftKey)) {
                        H?.(), t.forEach((e) => (0, j.oH)(e.filepath, e.id)), q?.();
                        return;
                    }
                    (0, l.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                            return (n) =>
                                (0, a.jsx)(e, {
                                    clips: t,
                                    ...n,
                                    onBeforeDelete: H,
                                    onAfterDelete: async () => {
                                        await n.onClose(), q?.();
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
