n.d(t, { default: () => M });
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
    l = n(442433),
    o = n(77729),
    s = n(688810),
    c = n(931991),
    u = n(352024),
    f = n(734057),
    d = n(71393),
    p = n(576705),
    h = n(711014),
    g = n(287809),
    y = n(549685),
    m = n(741394),
    b = n(661191),
    w = n(274372),
    A = n(372684),
    _ = n(439818),
    x = n(399925),
    E = n(74847),
    C = n(602902),
    v = n(696016);
n(980504);
var S = n(985018),
    D = n(264572).Buffer;
function M(e) {
    let {
            clips: t,
            channelId: M,
            onShare: R,
            onEdit: F,
            onBeforeDelete: O,
            onAfterDelete: T,
            actionsDisabled: B = !1,
            showShareAndEdit: P = !1,
        } = e,
        j = t[0],
        k = t.length > 1,
        { analyticsLocations: U } = (0, s.Ay)(),
        N = (0, a.bG)([h.Ay, p.A, g.default, d.A], () =>
            h.Ay.getFlattenedGuildIds().some((e) => {
                let t = d.A.getGuild(e);
                return null != t && (0, c.ie)(t, p.A, g.default).canCreateExpressions;
            }),
        ),
        H = (0, a.bG)([w.A], () => t.some((e) => w.A.isClipExporting(e.id)));
    async function Z() {
        (0, l.Z_)();
        let e = f.A.getChannel(M);
        (0, x.H1)([j.id]);
        try {
            let t = await (0, x.VO)(j);
            (0, r.mMO)(
                async () => {
                    let { default: a } = await Promise.all([n.e("40556"), n.e("90241")]).then(n.bind(n, 228884)),
                        r = e?.guild_id != null ? d.A.getGuild(e.guild_id) : null,
                        l = null != r && (0, c.ie)(r, p.A, g.default).canCreateExpressions,
                        o = null == j.name || "" === j.name ? (0, v.cM)(b.default.extractTimestamp(j.id)) : j.name,
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
    async function G() {
        (0, l.Z_)(), (0, x.H1)([j.id]);
        try {
            let e = await (0, x.VO)(j),
                t = await e.arrayBuffer(),
                n = (0, _.A)((0, m.uk)(j.filepath));
            await o.A.fileManager.saveWithDialog(D.from(t), n);
        } catch (e) {
            v.nx.error("Error exporting clip to file", e);
        } finally {
            (0, x.H1)(null);
        }
    }
    async function q() {
        (0, l.Z_)();
        let e = (0, E.t)(M);
        (0, x.H1)(t.map((e) => e.id));
        try {
            await (0, C.K)(t, { channelId: e ? M : void 0, analyticsLocations: U });
        } catch (e) {
        } finally {
            (0, x.H1)(null);
        }
        R?.();
    }
    async function I() {
        (0, l.Z_)(), (0, x.H1)([j.id]);
        try {
            let e = await (0, x.VO)(j),
                t = await (0, u.R_)(e),
                n = await t.arrayBuffer(),
                i = (0, _.A)((0, m.kh)(j.filepath)) + ".ogg";
            await o.A.fileManager.saveWithDialog(D.from(n), i);
        } catch (e) {
            v.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, x.H1)(null);
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
                    icon: r.pa$,
                    leadingAccessory: { type: "icon", icon: r.pa$ },
                    disabled: B,
                    action: function () {
                        (0, l.Z_)(), t.forEach((e) => (0, x.w7)(e.id));
                    },
                }),
            P &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.Drp, {
                            id: "share",
                            label: S.intl.string(S.t.RDE0Sc),
                            icon: r.liv,
                            leadingAccessory: { type: "icon", icon: r.liv },
                            disabled: B && !H,
                            action: q,
                        }),
                        !k &&
                            (0, i.jsx)(r.Drp, {
                                id: "edit",
                                label: S.intl.string(S.t.bt75uw),
                                icon: y.A,
                                leadingAccessory: { type: "icon", icon: y.A },
                                disabled: B,
                                action: function () {
                                    (0, l.Z_)(),
                                        k ||
                                            (0, r.mMO)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("19632"),
                                                        n.e("34982"),
                                                    ]).then(n.bind(n, 723028));
                                                    return (t) => (0, i.jsx)(e, { ...t, channelId: M, clip: j });
                                                },
                                                { modalKey: v.DQ, stackingBehavior: "stack" },
                                            ),
                                        F?.();
                                },
                            }),
                    ],
                }),
            (0, i.jsx)(r.Drp, {
                id: "favorite",
                label: j.isFavorite ? S.intl.string(S.t.wDnlod) : S.intl.string(S.t.nPywqO),
                icon: j.isFavorite ? r.C3E : r.yhu,
                leadingAccessory: { type: "icon", icon: j.isFavorite ? r.C3E : r.yhu },
                disabled: B,
                action: function () {
                    (0, l.Z_)(), t.forEach((e) => (0, x.XK)(e));
                },
            }),
            !k &&
                (0, i.jsxs)(r.Drp, {
                    id: "clips-export-group",
                    label: S.intl.string(S.t["WH/V85"]),
                    children: [
                        null != o.A.clipboard.copyFile &&
                            (0, i.jsx)(r.Drp, {
                                icon: r.TdU,
                                leadingAccessory: { type: "icon", icon: r.TdU },
                                id: "clips-copy-video",
                                label: S.intl.string(S.t["7NOhjN"]),
                                action: function () {
                                    (0, l.Z_)(),
                                        o.A.clipboard.copyFile(j.filepath),
                                        (0, r.showToast)(
                                            (0, r.createToast)(S.intl.string(S.t.mGZ66D), r.ToastType.SUCCESS),
                                        );
                                },
                            }),
                        N && j.type !== A.nQ.SCREENSHOT
                            ? (0, i.jsx)(r.Drp, {
                                  icon: r.JMI,
                                  leadingAccessory: { type: "icon", icon: r.JMI },
                                  id: "clips-export-soundboard",
                                  label: S.intl.string(S.t.ABjMWI),
                                  action: Z,
                              })
                            : null,
                        (0, i.jsx)(r.Drp, {
                            icon: r.s3U,
                            leadingAccessory: { type: "icon", icon: r.s3U },
                            id: "clips-export-file",
                            label: j.type === A.nQ.SCREENSHOT ? S.intl.string(S.t.y5FgMk) : S.intl.string(S.t.sFgmNy),
                            action: G,
                        }),
                        j.type !== A.nQ.SCREENSHOT &&
                            (0, i.jsx)(r.Drp, {
                                icon: r.s3U,
                                leadingAccessory: { type: "icon", icon: r.s3U },
                                id: "clips-export-sound-file",
                                label: S.intl.string(S.t.db0NKG),
                                action: I,
                            }),
                    ],
                }),
            (0, i.jsx)(r.Drp, {
                icon: r.ucK,
                leadingAccessory: { type: "icon", icon: r.ucK },
                id: "clips-delete",
                label: S.intl.string(S.t.oyYWHE),
                color: "danger",
                disabled: B,
                action: function (e) {
                    if (((0, l.Z_)(), e?.shiftKey)) {
                        O?.(), t.forEach((e) => (0, x.oH)(e.filepath)), T?.();
                        return;
                    }
                    (0, r.mMO)(
                        async () => {
                            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    clips: t,
                                    ...n,
                                    onBeforeDelete: O,
                                    onAfterDelete: async () => {
                                        await n.onClose(), T?.();
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
