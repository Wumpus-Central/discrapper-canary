n.d(t, {
    default: () => M,
});
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
    O = n(399925),
    x = n(74847),
    v = n(602902),
    E = n(696016),
    j = n(980504),
    P = n(985018),
    S = n(264572).Buffer;

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function M(e) {
    let {
            clips: t,
            channelId: M,
            onShare: R,
            onEdit: F,
            onBeforeDelete: k,
            onAfterDelete: T,
            actionsDisabled: B = !1,
            showShareAndEdit: U = !1,
        } = e,
        N = t[0],
        H = t.length > 1,
        { analyticsLocations: Z } = (0, s.Ay)(),
        G = (0, a.bG)([h.Ay, p.A, g.default, d.A], () =>
            h.Ay.getFlattenedGuildIds().some((e) => {
                let t = d.A.getGuild(e);
                return null != t && (0, c.ie)(t, p.A, g.default).canCreateExpressions;
            }),
        ),
        q = (0, a.bG)([w.A], () => t.some((e) => w.A.isClipExporting(e.id)));
    async function I() {
        (0, l.Z_)();
        let e = f.A.getChannel(M);
        (0, O.H1)([N.id]);
        try {
            let t = await (0, O.VO)(N);
            (0, r.mMO)(
                async () => {
                    let { default: a } = await Promise.all([n.e("40556"), n.e("30913")]).then(n.bind(n, 6503)),
                        r = (null == e ? void 0 : e.guild_id) != null ? d.A.getGuild(e.guild_id) : null,
                        l = null != r && (0, c.ie)(r, p.A, g.default).canCreateExpressions,
                        o = null == N.name || "" === N.name ? (0, E.cM)(b.default.extractTimestamp(N.id)) : N.name,
                        s = o.slice(0, j.Ah);
                    return (n) =>
                        (0, i.jsx)(
                            a,
                            D(C({}, n), {
                                showGuildPicker: !0,
                                guildId: l ? (null == e ? void 0 : e.guild_id) : void 0,
                                sourceFile: {
                                    file: new File([t], "".concat(o, ".mp4"), {
                                        type: "video/mp4",
                                    }),
                                    name: s,
                                },
                            }),
                        );
                },
                {
                    stackingBehavior: "stack",
                },
            );
        } catch (e) {
        } finally {
            (0, O.H1)(null);
        }
    }
    async function K() {
        (0, l.Z_)(), (0, O.H1)([N.id]);
        try {
            let e = await (0, O.VO)(N),
                t = await e.arrayBuffer(),
                n = (0, _.A)((0, m.uk)(N.filepath));
            await o.A.fileManager.saveWithDialog(S.from(t), n);
        } catch (e) {
            E.nx.error("Error exporting clip to file", e);
        } finally {
            (0, O.H1)(null);
        }
    }
    async function L() {
        (0, l.Z_)();
        let e = (0, x.t)(M);
        (0, O.H1)(t.map((e) => e.id));
        try {
            await (0, v.K)(t, {
                channelId: e ? M : void 0,
                analyticsLocations: Z,
            });
        } catch (e) {
        } finally {
            (0, O.H1)(null);
        }
        null == R || R();
    }
    async function W() {
        (0, l.Z_)(), (0, O.H1)([N.id]);
        try {
            let e = await (0, O.VO)(N),
                t = await (0, u.R_)(e),
                n = await t.arrayBuffer(),
                i = (0, _.A)((0, m.kh)(N.filepath)) + ".ogg";
            await o.A.fileManager.saveWithDialog(S.from(n), i);
        } catch (e) {
            E.nx.error("Error exporting clip to sound file", e);
        } finally {
            (0, O.H1)(null);
        }
    }
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "clips-more-options",
        "aria-label": P.intl.string(P.t.PdRCRg),
        onClose: l.Z_,
        onSelect: l.Z_,
        children: [
            t.some((e) => !0 === e.isTemporary) &&
                (0, i.jsx)(r.Drp, {
                    id: "add-to-library",
                    label: P.intl.string(P.t["BfLmm+"]),
                    icon: r.pa$,
                    leadingAccessory: {
                        type: "icon",
                        icon: r.pa$,
                    },
                    disabled: B,
                    action: function () {
                        (0, l.Z_)(), t.forEach((e) => (0, O.w7)(e.id));
                    },
                }),
            U &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.Drp, {
                            id: "share",
                            label: P.intl.string(P.t.RDE0Sc),
                            icon: r.liv,
                            leadingAccessory: {
                                type: "icon",
                                icon: r.liv,
                            },
                            disabled: B && !q,
                            action: L,
                        }),
                        !H &&
                            (0, i.jsx)(r.Drp, {
                                id: "edit",
                                label: P.intl.string(P.t.bt75uw),
                                icon: y.A,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: y.A,
                                },
                                disabled: B,
                                action: function () {
                                    (0, l.Z_)(),
                                        H ||
                                            (0, r.mMO)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("19632"),
                                                        n.e("11618"),
                                                    ]).then(n.bind(n, 723028));
                                                    return (t) =>
                                                        (0, i.jsx)(
                                                            e,
                                                            D(C({}, t), {
                                                                channelId: M,
                                                                clip: N,
                                                            }),
                                                        );
                                                },
                                                {
                                                    modalKey: E.DQ,
                                                    stackingBehavior: "stack",
                                                },
                                            ),
                                        null == F || F();
                                },
                            }),
                    ],
                }),
            (0, i.jsx)(r.Drp, {
                id: "favorite",
                label: N.isFavorite ? P.intl.string(P.t.wDnlod) : P.intl.string(P.t.nPywqO),
                icon: N.isFavorite ? r.C3E : r.yhu,
                leadingAccessory: {
                    type: "icon",
                    icon: N.isFavorite ? r.C3E : r.yhu,
                },
                disabled: B,
                action: function () {
                    (0, l.Z_)(), t.forEach((e) => (0, O.XK)(e));
                },
            }),
            !H &&
                (0, i.jsxs)(r.Drp, {
                    id: "clips-export-group",
                    label: P.intl.string(P.t["WH/V85"]),
                    children: [
                        null != o.A.clipboard.copyFile &&
                            (0, i.jsx)(r.Drp, {
                                icon: r.TdU,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: r.TdU,
                                },
                                id: "clips-copy-video",
                                label: P.intl.string(P.t["7NOhjN"]),
                                action: function () {
                                    (0, l.Z_)(),
                                        o.A.clipboard.copyFile(N.filepath),
                                        (0, r.showToast)(
                                            (0, r.createToast)(P.intl.string(P.t.mGZ66D), r.ToastType.SUCCESS),
                                        );
                                },
                            }),
                        G && N.type !== A.nQ.SCREENSHOT
                            ? (0, i.jsx)(r.Drp, {
                                  icon: r.JMI,
                                  leadingAccessory: {
                                      type: "icon",
                                      icon: r.JMI,
                                  },
                                  id: "clips-export-soundboard",
                                  label: P.intl.string(P.t.ABjMWI),
                                  action: I,
                              })
                            : null,
                        (0, i.jsx)(r.Drp, {
                            icon: r.s3U,
                            leadingAccessory: {
                                type: "icon",
                                icon: r.s3U,
                            },
                            id: "clips-export-file",
                            label: N.type === A.nQ.SCREENSHOT ? P.intl.string(P.t.y5FgMk) : P.intl.string(P.t.sFgmNy),
                            action: K,
                        }),
                        N.type !== A.nQ.SCREENSHOT &&
                            (0, i.jsx)(r.Drp, {
                                icon: r.s3U,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: r.s3U,
                                },
                                id: "clips-export-sound-file",
                                label: P.intl.string(P.t.db0NKG),
                                action: W,
                            }),
                    ],
                }),
            (0, i.jsx)(r.Drp, {
                icon: r.ucK,
                leadingAccessory: {
                    type: "icon",
                    icon: r.ucK,
                },
                id: "clips-delete",
                label: P.intl.string(P.t.oyYWHE),
                color: "danger",
                disabled: B,
                action: function (e) {
                    if (((0, l.Z_)(), null == e ? void 0 : e.shiftKey)) {
                        null == k || k(), t.forEach((e) => (0, O.oH)(e.filepath)), null == T || T();
                        return;
                    }
                    (0, r.mMO)(
                        async () => {
                            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    D(
                                        C(
                                            {
                                                clips: t,
                                            },
                                            n,
                                        ),
                                        {
                                            onBeforeDelete: k,
                                            onAfterDelete: async () => {
                                                await n.onClose(), null == T || T();
                                            },
                                        },
                                    ),
                                );
                        },
                        {
                            stackingBehavior: "stack",
                        },
                    );
                },
            }),
        ],
    });
}
