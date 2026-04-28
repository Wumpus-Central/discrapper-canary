n.d(t, { default: () => Z });
var i = n(627968);
n(64700);
var a = n(17928),
    r = n(192308),
    l = n(691540),
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
    m = n(807072),
    w = n(241326),
    b = n(442433),
    A = n(77729),
    _ = n(688810),
    x = n(931991),
    v = n(983069),
    E = n(734057),
    C = n(71393),
    D = n(576705),
    S = n(711014),
    R = n(287809),
    j = n(549685),
    F = n(741394),
    M = n(274372),
    T = n(372684),
    B = n(439818),
    N = n(399925),
    P = n(74847),
    H = n(602902),
    O = n(696016);
n(980504);
var k = n(16590),
    L = n(985018),
    U = n(264572).Buffer;
function Z(e) {
    let {
            clips: t,
            channelId: Z,
            onShare: G,
            onEdit: I,
            onBeforeDelete: q,
            onAfterDelete: V,
            actionsDisabled: $ = !1,
            showShareAndEdit: z = !1,
        } = e,
        K = t[0],
        W = t.length > 1,
        { analyticsLocations: J } = (0, _.Ay)(),
        X = (0, a.bG)([S.Ay, D.A, R.default, C.A], () =>
            S.Ay.getFlattenedGuildIds().some((e) => {
                let t = C.A.getGuild(e);
                return null != t && (0, x.ie)(t, D.A, R.default).canCreateExpressions;
            }),
        ),
        Q = (0, a.bG)([M.A], () => t.some((e) => M.A.isClipExporting(e.id)));
    async function Y() {
        (0, b.Z_)();
        let e = E.A.getChannel(Z);
        (0, N.H1)([K.id]);
        try {
            let t = await (0, N.VO)(K);
            (0, r.openModalLazy)(
                async () => {
                    let { default: a } = await Promise.all([n.e("8555"), n.e("12811"), n.e("6355")]).then(
                            n.bind(n, 191110),
                        ),
                        r = e?.guild_id != null ? C.A.getGuild(e.guild_id) : null,
                        l = null != r && (0, x.ie)(r, D.A, R.default).canCreateExpressions,
                        s = null == K.name || "" === K.name ? (0, O.cM)(K.createdAt) : K.name,
                        o = s.slice(0, 32);
                    return (n) =>
                        (0, i.jsx)(a, {
                            ...n,
                            showGuildPicker: !0,
                            guildId: l ? e?.guild_id : void 0,
                            sourceFile: { file: new File([t], `${s}.mp4`, { type: "video/mp4" }), name: o },
                        });
                },
                { stackingBehavior: "stack" },
            );
        } catch (e) {
        } finally {
            (0, N.H1)(null);
        }
    }
    async function ee() {
        (0, b.Z_)(), (0, N.H1)([K.id]);
        try {
            let e = await (0, N.VO)(K),
                t = await e.arrayBuffer(),
                n = (0, B.A)((0, F.uk)(K.filepath));
            await A.A.fileManager.saveWithDialog(U.from(t), n);
        } catch (e) {
            O.nx.error("Error exporting clip to file", e);
        } finally {
            (0, N.H1)(null);
        }
    }
    async function et() {
        (0, b.Z_)();
        let e = (0, P.t)(Z);
        (0, N.H1)(t.map((e) => e.id));
        try {
            await (0, H.K)(t, { channelId: e ? Z : void 0, analyticsLocations: J });
        } catch (e) {
        } finally {
            (0, N.H1)(null);
        }
        G?.();
    }
    function en() {
        (0, b.Z_)(), t.forEach((e) => (0, N.XK)(e));
    }
    async function ei() {
        (0, b.Z_)(), (0, N.H1)([K.id]);
        try {
            let e = await (0, N.VO)(K),
                t = await (0, v.R_)(e),
                n = await t.arrayBuffer(),
                i = (0, B.A)((0, F.kh)(K.filepath)) + ".ogg";
            await A.A.fileManager.saveWithDialog(U.from(n), i);
        } catch (e) {
            O.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, N.H1)(null);
        }
    }
    return (0, i.jsxs)(c.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": L.intl.string(L.t.PdRCRg),
        onClose: b.Z_,
        onSelect: b.Z_,
        children: [
            t.some((e) => !0 === e.isTemporary) &&
                (0, i.jsx)(u.Dr, {
                    id: "add-to-library",
                    label: L.intl.string(L.t["BfLmm+"]),
                    leadingAccessory: { type: "icon", icon: d.p },
                    disabled: $,
                    action: function () {
                        (0, b.Z_)(), t.forEach((e) => (0, N.w7)(e.id));
                    },
                }),
            z &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u.Dr, {
                            id: "share",
                            label: L.intl.string(L.t.RDE0Sc),
                            leadingAccessory: { type: "icon", icon: f.l },
                            disabled: $ && !Q,
                            action: et,
                        }),
                        !W &&
                            (0, i.jsx)(u.Dr, {
                                id: "edit",
                                label: L.intl.string(L.t.bt75uw),
                                leadingAccessory: { type: "icon", icon: j.A },
                                disabled: $ || W,
                                action: function () {
                                    (0, b.Z_)(), W || I?.();
                                },
                            }),
                        (0, i.jsx)(u.bX, {}),
                    ],
                }),
            !K.isFavorite &&
                (0, i.jsx)(u.Dr, {
                    id: "favorite",
                    label: L.intl.string(L.t.nPywqO),
                    leadingAccessory: { type: "icon", icon: h.y },
                    disabled: $,
                    action: en,
                }),
            !W && X && K.type !== T.nQ.SCREENSHOT
                ? (0, i.jsx)(u.Dr, {
                      leadingAccessory: { type: "icon", icon: g.J },
                      id: "clips-export-soundboard",
                      label: L.intl.string(k.default.HH4Tjj),
                      action: Y,
                  })
                : null,
            !W &&
                null != A.A.clipboard.copyFile &&
                (0, i.jsx)(u.Dr, {
                    leadingAccessory: { type: "icon", icon: p.T },
                    id: "clips-copy-video",
                    label: L.intl.string(k.default.tv7emB),
                    action: function () {
                        (0, b.Z_)(),
                            A.A.clipboard.copyFile(K.filepath),
                            (0, l.P0)((0, s.o)(L.intl.string(L.t.mGZ66D), o.Ck.SUCCESS));
                    },
                }),
            !W &&
                (0, i.jsxs)(u.Dr, {
                    id: "clips-export-group",
                    leadingAccessory: { type: "icon", icon: y.s },
                    label: L.intl.string(L.t["WH/V85"]),
                    children: [
                        (0, i.jsx)(u.Dr, {
                            leadingAccessory: { type: "icon", icon: y.s },
                            id: "clips-export-file",
                            label: K.type === T.nQ.SCREENSHOT ? L.intl.string(L.t.y5FgMk) : L.intl.string(L.t.sFgmNy),
                            action: ee,
                        }),
                        K.type !== T.nQ.SCREENSHOT &&
                            (0, i.jsx)(u.Dr, {
                                leadingAccessory: { type: "icon", icon: y.s },
                                id: "clips-export-sound-file",
                                label: L.intl.string(L.t.db0NKG),
                                action: ei,
                            }),
                    ],
                }),
            (0, i.jsx)(u.bX, {}),
            !0 === K.isFavorite &&
                (0, i.jsx)(u.Dr, {
                    leadingAccessory: { type: "icon", icon: m.U },
                    id: "unfavorite",
                    label: L.intl.string(k.default.IZsalP),
                    color: "danger",
                    disabled: $,
                    action: en,
                }),
            (0, i.jsx)(u.Dr, {
                leadingAccessory: { type: "icon", icon: w.u },
                id: "clips-delete",
                label: L.intl.string(L.t.oyYWHE),
                color: "danger",
                disabled: $,
                action: function (e) {
                    if (((0, b.Z_)(), e?.shiftKey)) {
                        q?.(), t.forEach((e) => (0, N.oH)(e.filepath, e.id)), V?.();
                        return;
                    }
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    clips: t,
                                    ...n,
                                    onBeforeDelete: q,
                                    onAfterDelete: async () => {
                                        await n.onClose(), V?.();
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
