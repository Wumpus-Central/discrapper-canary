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
    b = n(274372),
    w = n(372684),
    A = n(439818),
    _ = n(399925),
    x = n(74847),
    E = n(602902),
    v = n(696016);
n(980504);
var C = n(16590),
    S = n(985018),
    D = n(264572).Buffer;
function R(e) {
    let {
            clips: t,
            channelId: R,
            onShare: M,
            onEdit: F,
            onBeforeDelete: j,
            onAfterDelete: P,
            actionsDisabled: T = !1,
            showShareAndEdit: B = !1,
        } = e,
        O = t[0],
        H = t.length > 1,
        { analyticsLocations: U } = (0, s.Ay)(),
        k = (0, a.bG)([g.Ay, p.A, h.default, f.A], () =>
            g.Ay.getFlattenedGuildIds().some((e) => {
                let t = f.A.getGuild(e);
                return null != t && (0, c.ie)(t, p.A, h.default).canCreateExpressions;
            }),
        ),
        N = (0, a.bG)([b.A], () => t.some((e) => b.A.isClipExporting(e.id)));
    async function Z() {
        (0, l.Z_)();
        let e = d.A.getChannel(R);
        (0, _.H1)([O.id]);
        try {
            let t = await (0, _.VO)(O);
            (0, r.mMO)(
                async () => {
                    let { default: a } = await Promise.all([n.e("40556"), n.e("34681")]).then(n.bind(n, 6503)),
                        r = e?.guild_id != null ? f.A.getGuild(e.guild_id) : null,
                        l = null != r && (0, c.ie)(r, p.A, h.default).canCreateExpressions,
                        o = null == O.name || "" === O.name ? (0, v.cM)(O.createdAt) : O.name,
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
            (0, _.H1)(null);
        }
    }
    async function G() {
        (0, l.Z_)(), (0, _.H1)([O.id]);
        try {
            let e = await (0, _.VO)(O),
                t = await e.arrayBuffer(),
                n = (0, A.A)((0, m.uk)(O.filepath));
            await o.A.fileManager.saveWithDialog(D.from(t), n);
        } catch (e) {
            v.nx.error("Error exporting clip to file", e);
        } finally {
            (0, _.H1)(null);
        }
    }
    async function q() {
        (0, l.Z_)();
        let e = (0, x.t)(R);
        (0, _.H1)(t.map((e) => e.id));
        try {
            await (0, E.K)(t, { channelId: e ? R : void 0, analyticsLocations: U });
        } catch (e) {
        } finally {
            (0, _.H1)(null);
        }
        M?.();
    }
    function L() {
        (0, l.Z_)(), t.forEach((e) => (0, _.XK)(e));
    }
    async function $() {
        (0, l.Z_)(), (0, _.H1)([O.id]);
        try {
            let e = await (0, _.VO)(O),
                t = await (0, u.R_)(e),
                n = await t.arrayBuffer(),
                i = (0, A.A)((0, m.kh)(O.filepath)) + ".ogg";
            await o.A.fileManager.saveWithDialog(D.from(n), i);
        } catch (e) {
            v.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, _.H1)(null);
        }
    }
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": S.intl.string(S.t.PdRCRg),
        onClose: l.Z_,
        onSelect: l.Z_,
        children: [
            t.some((e) => !0 === e.isTemporary) &&
                (0, i.jsx)(r.Drp, {
                    id: "add-to-library",
                    label: S.intl.string(S.t["BfLmm+"]),
                    leadingAccessory: { type: "icon", icon: r.pa$ },
                    disabled: T,
                    action: function () {
                        (0, l.Z_)(), t.forEach((e) => (0, _.w7)(e.id));
                    },
                }),
            B &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.Drp, {
                            id: "share",
                            label: S.intl.string(S.t.RDE0Sc),
                            leadingAccessory: { type: "icon", icon: r.liv },
                            disabled: T && !N,
                            action: q,
                        }),
                        !H &&
                            (0, i.jsx)(r.Drp, {
                                id: "edit",
                                label: S.intl.string(S.t.bt75uw),
                                leadingAccessory: { type: "icon", icon: y.A },
                                disabled: T || H,
                                action: function () {
                                    (0, l.Z_)(), H || F?.();
                                },
                            }),
                        (0, i.jsx)(r.bXX, {}),
                    ],
                }),
            !O.isFavorite &&
                (0, i.jsx)(r.Drp, {
                    id: "favorite",
                    label: S.intl.string(S.t.nPywqO),
                    leadingAccessory: { type: "icon", icon: r.yA2 },
                    disabled: T,
                    action: L,
                }),
            !H && k && O.type !== w.nQ.SCREENSHOT
                ? (0, i.jsx)(r.Drp, {
                      leadingAccessory: { type: "icon", icon: r.JMI },
                      id: "clips-export-soundboard",
                      label: S.intl.string(C.default.HH4Tjj),
                      action: Z,
                  })
                : null,
            !H &&
                null != o.A.clipboard.copyFile &&
                (0, i.jsx)(r.Drp, {
                    leadingAccessory: { type: "icon", icon: r.TdU },
                    id: "clips-copy-video",
                    label: S.intl.string(C.default.tv7emB),
                    action: function () {
                        (0, l.Z_)(),
                            o.A.clipboard.copyFile(O.filepath),
                            (0, r.showToast)((0, r.createToast)(S.intl.string(S.t.mGZ66D), r.ToastType.SUCCESS));
                    },
                }),
            !H &&
                (0, i.jsxs)(r.Drp, {
                    id: "clips-export-group",
                    leadingAccessory: { type: "icon", icon: r.s3U },
                    label: S.intl.string(S.t["WH/V85"]),
                    children: [
                        (0, i.jsx)(r.Drp, {
                            leadingAccessory: { type: "icon", icon: r.s3U },
                            id: "clips-export-file",
                            label: O.type === w.nQ.SCREENSHOT ? S.intl.string(S.t.y5FgMk) : S.intl.string(S.t.sFgmNy),
                            action: G,
                        }),
                        O.type !== w.nQ.SCREENSHOT &&
                            (0, i.jsx)(r.Drp, {
                                leadingAccessory: { type: "icon", icon: r.s3U },
                                id: "clips-export-sound-file",
                                label: S.intl.string(S.t.db0NKG),
                                action: $,
                            }),
                    ],
                }),
            (0, i.jsx)(r.bXX, {}),
            !0 === O.isFavorite &&
                (0, i.jsx)(r.Drp, {
                    leadingAccessory: { type: "icon", icon: r.UlM },
                    id: "unfavorite",
                    label: S.intl.string(C.default.IZsalP),
                    color: "danger",
                    disabled: T,
                    action: L,
                }),
            (0, i.jsx)(r.Drp, {
                leadingAccessory: { type: "icon", icon: r.ucK },
                id: "clips-delete",
                label: S.intl.string(S.t.oyYWHE),
                color: "danger",
                disabled: T,
                action: function (e) {
                    if (((0, l.Z_)(), e?.shiftKey)) {
                        j?.(), t.forEach((e) => (0, _.oH)(e.filepath, e.id)), P?.();
                        return;
                    }
                    (0, r.mMO)(
                        async () => {
                            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    clips: t,
                                    ...n,
                                    onBeforeDelete: j,
                                    onAfterDelete: async () => {
                                        await n.onClose(), P?.();
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
