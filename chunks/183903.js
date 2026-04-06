n.d(t, { default: () => R });
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
    l = n(442433),
    o = n(77729),
    s = n(688810),
    c = n(931991),
    u = n(352024),
    d = n(734057),
    f = n(71393),
    p = n(576705),
    g = n(711014),
    h = n(287809),
    y = n(549685),
    m = n(741394),
    b = n(661191),
    w = n(274372),
    A = n(372684),
    _ = n(439818),
    x = n(399925),
    E = n(74847),
    v = n(602902),
    C = n(696016);
n(980504);
var S = n(965623),
    D = n(985018),
    M = n(264572).Buffer;
function R(e) {
    let {
            clips: t,
            channelId: R,
            onShare: F,
            onEdit: T,
            onBeforeDelete: U,
            onAfterDelete: O,
            actionsDisabled: P = !1,
            showShareAndEdit: j = !1,
        } = e,
        B = t[0],
        k = t.length > 1,
        { analyticsLocations: N } = (0, s.Ay)(),
        H = (0, a.bG)([g.Ay, p.A, h.default, f.A], () =>
            g.Ay.getFlattenedGuildIds().some((e) => {
                let t = f.A.getGuild(e);
                return null != t && (0, c.ie)(t, p.A, h.default).canCreateExpressions;
            }),
        ),
        Z = (0, a.bG)([w.A], () => t.some((e) => w.A.isClipExporting(e.id)));
    async function G() {
        (0, l.Z_)();
        let e = d.A.getChannel(R);
        (0, x.H1)([B.id]);
        try {
            let t = await (0, x.VO)(B);
            (0, r.mMO)(
                async () => {
                    let { default: a } = await Promise.all([n.e("40556"), n.e("45893")]).then(n.bind(n, 6503)),
                        r = e?.guild_id != null ? f.A.getGuild(e.guild_id) : null,
                        l = null != r && (0, c.ie)(r, p.A, h.default).canCreateExpressions,
                        o = null == B.name || "" === B.name ? (0, C.cM)(b.default.extractTimestamp(B.id)) : B.name,
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
            (0, x.H1)(null);
        }
    }
    async function q() {
        (0, l.Z_)(), (0, x.H1)([B.id]);
        try {
            let e = await (0, x.VO)(B),
                t = await e.arrayBuffer(),
                n = (0, _.A)((0, m.uk)(B.filepath));
            await o.A.fileManager.saveWithDialog(M.from(t), n);
        } catch (e) {
            C.nx.error("Error exporting clip to file", e);
        } finally {
            (0, x.H1)(null);
        }
    }
    async function I() {
        (0, l.Z_)();
        let e = (0, E.t)(R);
        (0, x.H1)(t.map((e) => e.id));
        try {
            await (0, v.K)(t, { channelId: e ? R : void 0, analyticsLocations: N });
        } catch (e) {
        } finally {
            (0, x.H1)(null);
        }
        F?.();
    }
    function $() {
        (0, l.Z_)(), t.forEach((e) => (0, x.XK)(e));
    }
    async function L() {
        (0, l.Z_)(), (0, x.H1)([B.id]);
        try {
            let e = await (0, x.VO)(B),
                t = await (0, u.R_)(e),
                n = await t.arrayBuffer(),
                i = (0, _.A)((0, m.kh)(B.filepath)) + ".ogg";
            await o.A.fileManager.saveWithDialog(M.from(n), i);
        } catch (e) {
            C.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, x.H1)(null);
        }
    }
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": D.intl.string(D.t.PdRCRg),
        onClose: l.Z_,
        onSelect: l.Z_,
        children: [
            t.some((e) => !0 === e.isTemporary) &&
                (0, i.jsx)(r.Drp, {
                    id: "add-to-library",
                    label: D.intl.string(D.t["BfLmm+"]),
                    icon: r.pa$,
                    leadingAccessory: { type: "icon", icon: r.pa$ },
                    disabled: P,
                    action: function () {
                        (0, l.Z_)(), t.forEach((e) => (0, x.w7)(e.id));
                    },
                }),
            j &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.Drp, {
                            id: "share",
                            label: D.intl.string(D.t.RDE0Sc),
                            icon: r.liv,
                            leadingAccessory: { type: "icon", icon: r.liv },
                            disabled: P && !Z,
                            action: I,
                        }),
                        !k &&
                            (0, i.jsx)(r.Drp, {
                                id: "edit",
                                label: D.intl.string(D.t.bt75uw),
                                icon: y.A,
                                leadingAccessory: { type: "icon", icon: y.A },
                                disabled: P || k,
                                action: function () {
                                    (0, l.Z_)(), k || T?.();
                                },
                            }),
                    ],
                }),
            !B.isFavorite &&
                (0, i.jsx)(r.Drp, {
                    id: "favorite",
                    label: D.intl.string(D.t.nPywqO),
                    leadingAccessory: { type: "icon", icon: r.yA2 },
                    disabled: P,
                    action: $,
                }),
            !k &&
                (0, i.jsxs)(r.Drp, {
                    id: "clips-export-group",
                    leadingAccessory: { type: "icon", icon: r.s3U },
                    label: D.intl.string(D.t["WH/V85"]),
                    children: [
                        null != o.A.clipboard.copyFile &&
                            (0, i.jsx)(r.Drp, {
                                icon: r.TdU,
                                leadingAccessory: { type: "icon", icon: r.TdU },
                                id: "clips-copy-video",
                                label: D.intl.string(D.t["7NOhjN"]),
                                action: function () {
                                    (0, l.Z_)(),
                                        o.A.clipboard.copyFile(B.filepath),
                                        (0, r.showToast)(
                                            (0, r.createToast)(D.intl.string(D.t.mGZ66D), r.ToastType.SUCCESS),
                                        );
                                },
                            }),
                        H && B.type !== A.nQ.SCREENSHOT
                            ? (0, i.jsx)(r.Drp, {
                                  icon: r.JMI,
                                  leadingAccessory: { type: "icon", icon: r.JMI },
                                  id: "clips-export-soundboard",
                                  label: D.intl.string(D.t.ABjMWI),
                                  action: G,
                              })
                            : null,
                        (0, i.jsx)(r.Drp, {
                            icon: r.s3U,
                            leadingAccessory: { type: "icon", icon: r.s3U },
                            id: "clips-export-file",
                            label: B.type === A.nQ.SCREENSHOT ? D.intl.string(D.t.y5FgMk) : D.intl.string(D.t.sFgmNy),
                            action: q,
                        }),
                        B.type !== A.nQ.SCREENSHOT &&
                            (0, i.jsx)(r.Drp, {
                                icon: r.s3U,
                                leadingAccessory: { type: "icon", icon: r.s3U },
                                id: "clips-export-sound-file",
                                label: D.intl.string(D.t.db0NKG),
                                action: L,
                            }),
                    ],
                }),
            !0 === B.isFavorite &&
                (0, i.jsx)(r.Drp, {
                    leadingAccessory: { type: "icon", icon: r.UlM },
                    id: "unfavorite",
                    label: D.intl.string(S.default.IZsalP),
                    color: "danger",
                    disabled: P,
                    action: $,
                }),
            (0, i.jsx)(r.Drp, {
                leadingAccessory: { type: "icon", icon: r.ucK },
                id: "clips-delete",
                label: D.intl.string(D.t.oyYWHE),
                color: "danger",
                disabled: P,
                action: function (e) {
                    if (((0, l.Z_)(), e?.shiftKey)) {
                        U?.(), t.forEach((e) => (0, x.oH)(e.filepath)), O?.();
                        return;
                    }
                    (0, r.mMO)(
                        async () => {
                            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    clips: t,
                                    ...n,
                                    onBeforeDelete: U,
                                    onAfterDelete: async () => {
                                        await n.onClose(), O?.();
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
