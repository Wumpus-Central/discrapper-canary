t.d(i, { default: () => N });
var n = t(627968);
t(64700);
var l = t(17928),
    a = t(192308),
    o = t(691540),
    r = t(857250),
    c = t(97483),
    s = t(980707),
    d = t(477782),
    u = t(663341),
    p = t(405433),
    y = t(505930),
    g = t(7807),
    f = t(624479),
    b = t(32880),
    h = t(807072),
    A = t(241326),
    x = t(442433),
    m = t(77729),
    j = t(688810),
    w = t(931991),
    v = t(983069),
    D = t(734057),
    E = t(71393),
    _ = t(576705),
    H = t(711014),
    C = t(287809),
    k = t(549685),
    Z = t(741394),
    S = t(274372),
    F = t(372684),
    B = t(439818),
    G = t(607814),
    O = t(74847),
    R = t(602902),
    M = t(696016);
t(980504);
var P = t(16590),
    T = t(375708),
    I = t(264572).Buffer;
function N(e) {
    let {
            clips: i,
            channelId: N,
            onShare: W,
            onEdit: K,
            onBeforeDelete: V,
            onAfterDelete: L,
            actionsDisabled: Q = !1,
            showShareAndEdit: X = !1,
        } = e,
        z = i[0],
        U = i.length > 1,
        { analyticsLocations: q } = (0, j.Ay)(),
        J = (0, l.bG)([H.Ay, _.A, C.default, E.A], () =>
            H.Ay.getFlattenedGuildIds().some((e) => {
                let i = E.A.getGuild(e);
                return null != i && (0, w.ie)(i, _.A, C.default).canCreateExpressions;
            }),
        ),
        Y = (0, l.bG)([S.A], () => i.some((e) => S.A.isClipExporting(e.id)));
    async function $() {
        (0, x.Z_)();
        let e = D.A.getChannel(N);
        (0, G.H1)([z.id]);
        try {
            let i = await (0, G.VO)(z);
            (0, a.openModalLazy)(
                async () => {
                    let { default: l } = await Promise.all([
                            t.e("67485"),
                            t.e("73214"),
                            t.e("81857"),
                            t.e("19397"),
                            t.e("58231"),
                            t.e("41816"),
                            t.e("4207"),
                            t.e("22513"),
                            t.e("13498"),
                            t.e("18320"),
                            t.e("32993"),
                            t.e("12517"),
                            t.e("48628"),
                            t.e("71934"),
                            t.e("4512"),
                            t.e("8802"),
                            t.e("43753"),
                            t.e("86483"),
                            t.e("8516"),
                            t.e("39995"),
                            t.e("25568"),
                            t.e("56386"),
                            t.e("394"),
                            t.e("60909"),
                            t.e("25652"),
                            t.e("24199"),
                            t.e("207"),
                            t.e("89281"),
                            t.e("57036"),
                            t.e("98839"),
                            t.e("62680"),
                            t.e("87306"),
                            t.e("41043"),
                            t.e("18441"),
                            t.e("61379"),
                            t.e("98125"),
                            t.e("21825"),
                            t.e("76640"),
                            t.e("25693"),
                            t.e("28154"),
                            t.e("88077"),
                            t.e("33902"),
                            t.e("8555"),
                            t.e("32606"),
                            t.e("14879"),
                            t.e("13681"),
                            t.e("10004"),
                            t.e("55314"),
                            t.e("89094"),
                            t.e("29177"),
                            t.e("99999"),
                            t.e("32551"),
                            t.e("31658"),
                            t.e("4369"),
                            t.e("53930"),
                            t.e("46270"),
                            t.e("86949"),
                            t.e("23353"),
                            t.e("50015"),
                            t.e("11523"),
                            t.e("1555"),
                            t.e("44695"),
                            t.e("21690"),
                            t.e("44376"),
                            t.e("31644"),
                            t.e("70653"),
                            t.e("45723"),
                            t.e("70697"),
                            t.e("18546"),
                            t.e("38835"),
                            t.e("37622"),
                            t.e("90244"),
                            t.e("18943"),
                            t.e("84103"),
                            t.e("53614"),
                            t.e("31825"),
                            t.e("36320"),
                            t.e("20320"),
                            t.e("50401"),
                            t.e("84967"),
                            t.e("99657"),
                            t.e("31145"),
                            t.e("90889"),
                            t.e("51243"),
                            t.e("26780"),
                            t.e("44265"),
                            t.e("99141"),
                            t.e("25990"),
                            t.e("63095"),
                            t.e("68647"),
                            t.e("5131"),
                            t.e("64615"),
                            t.e("96443"),
                            t.e("66322"),
                            t.e("75134"),
                            t.e("93158"),
                            t.e("46249"),
                            t.e("55184"),
                            t.e("23216"),
                            t.e("87079"),
                            t.e("25637"),
                            t.e("78707"),
                            t.e("51130"),
                            t.e("73547"),
                            t.e("84456"),
                            t.e("99593"),
                            t.e("61935"),
                            t.e("58821"),
                            t.e("62168"),
                            t.e("55602"),
                            t.e("28128"),
                            t.e("58157"),
                            t.e("66580"),
                            t.e("8979"),
                            t.e("20643"),
                            t.e("98913"),
                            t.e("12811"),
                        ]).then(t.bind(t, 191110)),
                        a = e?.guild_id != null ? E.A.getGuild(e.guild_id) : null,
                        o = null != a && (0, w.ie)(a, _.A, C.default).canCreateExpressions,
                        r = null == z.name || "" === z.name ? (0, M.cM)(z.createdAt) : z.name,
                        c = r.slice(0, 32);
                    return (t) =>
                        (0, n.jsx)(l, {
                            ...t,
                            showGuildPicker: !0,
                            guildId: o ? e?.guild_id : void 0,
                            sourceFile: { file: new File([i], `${r}.mp4`, { type: "video/mp4" }), name: c },
                        });
                },
                { stackingBehavior: "stack" },
            );
        } catch (e) {
        } finally {
            (0, G.H1)(null);
        }
    }
    async function ee() {
        (0, x.Z_)(), (0, G.H1)([z.id]);
        try {
            let e = await (0, G.VO)(z),
                i = await e.arrayBuffer(),
                t = (0, B.A)((0, Z.uk)(z.filepath));
            await m.A.fileManager.saveWithDialog(I.from(i), t);
        } catch (e) {
            M.nx.error("Error exporting clip to file", e);
        } finally {
            (0, G.H1)(null);
        }
    }
    async function ei() {
        (0, x.Z_)();
        let e = (0, O.t)(N);
        (0, G.H1)(i.map((e) => e.id));
        try {
            await (0, R.K)(i, { channelId: e ? N : void 0, analyticsLocations: q });
        } catch (e) {
        } finally {
            (0, G.H1)(null);
        }
        W?.();
    }
    function et() {
        (0, x.Z_)(), i.forEach((e) => (0, G.XK)(e));
    }
    async function en() {
        (0, x.Z_)(), (0, G.H1)([z.id]);
        try {
            let e = await (0, G.VO)(z),
                i = await (0, v.R_)(e),
                t = await i.arrayBuffer(),
                n = (0, B.A)((0, Z.kh)(z.filepath)) + ".ogg";
            await m.A.fileManager.saveWithDialog(I.from(t), n);
        } catch (e) {
            M.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, G.H1)(null);
        }
    }
    return (0, n.jsxs)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": T.intl.string(T.t.PdRCRg),
        onClose: x.Z_,
        onSelect: x.Z_,
        children: [
            i.some((e) => !0 === e.isTemporary) &&
                (0, n.jsx)(d.Dr, {
                    id: "add-to-library",
                    label: T.intl.string(T.t["BfLmm+"]),
                    leadingAccessory: { type: "icon", icon: u.p },
                    disabled: Q,
                    action: function () {
                        (0, x.Z_)(), i.forEach((e) => (0, G.w7)(e.id));
                    },
                }),
            X &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Dr, {
                            id: "share",
                            label: T.intl.string(T.t.RDE0Sc),
                            leadingAccessory: { type: "icon", icon: p.l },
                            disabled: Q && !Y,
                            action: ei,
                        }),
                        !U &&
                            (0, n.jsx)(d.Dr, {
                                id: "edit",
                                label: T.intl.string(T.t.bt75uw),
                                leadingAccessory: { type: "icon", icon: k.A },
                                disabled: Q || U,
                                action: function () {
                                    (0, x.Z_)(), U || K?.();
                                },
                            }),
                        (0, n.jsx)(d.bX, {}),
                    ],
                }),
            !z.isFavorite &&
                (0, n.jsx)(d.Dr, {
                    id: "favorite",
                    label: T.intl.string(T.t.nPywqO),
                    leadingAccessory: { type: "icon", icon: y.y },
                    disabled: Q,
                    action: et,
                }),
            !U && J && z.type !== F.nQ.SCREENSHOT
                ? (0, n.jsx)(d.Dr, {
                      leadingAccessory: { type: "icon", icon: g.J },
                      id: "clips-export-soundboard",
                      label: T.intl.string(P.default.HH4Tjj),
                      action: $,
                  })
                : null,
            !U &&
                null != m.A.clipboard.copyFile &&
                (0, n.jsx)(d.Dr, {
                    leadingAccessory: { type: "icon", icon: f.T },
                    id: "clips-copy-video",
                    label: T.intl.string(P.default.tv7emB),
                    action: function () {
                        (0, x.Z_)(),
                            m.A.clipboard.copyFile(z.filepath),
                            (0, o.P0)((0, r.o)(T.intl.string(T.t.mGZ66D), c.Ck.SUCCESS));
                    },
                }),
            !U &&
                (0, n.jsxs)(d.Dr, {
                    id: "clips-export-group",
                    leadingAccessory: { type: "icon", icon: b.s },
                    label: T.intl.string(T.t["WH/V85"]),
                    children: [
                        (0, n.jsx)(d.Dr, {
                            leadingAccessory: { type: "icon", icon: b.s },
                            id: "clips-export-file",
                            label: z.type === F.nQ.SCREENSHOT ? T.intl.string(T.t.y5FgMk) : T.intl.string(T.t.sFgmNy),
                            action: ee,
                        }),
                        z.type !== F.nQ.SCREENSHOT &&
                            (0, n.jsx)(d.Dr, {
                                leadingAccessory: { type: "icon", icon: b.s },
                                id: "clips-export-sound-file",
                                label: T.intl.string(T.t.db0NKG),
                                action: en,
                            }),
                    ],
                }),
            (0, n.jsx)(d.bX, {}),
            !0 === z.isFavorite &&
                (0, n.jsx)(d.Dr, {
                    leadingAccessory: { type: "icon", icon: h.U },
                    id: "unfavorite",
                    label: T.intl.string(P.default.IZsalP),
                    color: "danger",
                    disabled: Q,
                    action: et,
                }),
            (0, n.jsx)(d.Dr, {
                leadingAccessory: { type: "icon", icon: A.u },
                id: "clips-delete",
                label: T.intl.string(T.t.oyYWHE),
                color: "danger",
                disabled: Q,
                action: function (e) {
                    if (((0, x.Z_)(), e?.shiftKey)) {
                        V?.(), i.forEach((e) => (0, G.oH)(e.filepath, e.id)), L?.();
                        return;
                    }
                    (0, a.openModalLazy)(
                        async () => {
                            let { default: e } = await t.e("13367").then(t.bind(t, 223818));
                            return (t) =>
                                (0, n.jsx)(e, {
                                    clips: i,
                                    ...t,
                                    onBeforeDelete: V,
                                    onAfterDelete: async () => {
                                        await t.onClose(), L?.();
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
