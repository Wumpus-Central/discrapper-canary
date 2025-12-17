n.d(t, { default: () => F });
var a = n(54381);
n(473749);
var i = n(442837),
    r = n(481060),
    l = n(239091),
    o = n(579806),
    s = n(906732),
    u = n(357156),
    c = n(812613),
    f = n(592125),
    d = n(430824),
    h = n(496675),
    p = n(771845),
    g = n(594174),
    y = n(962399),
    m = n(137058),
    b = n(709054),
    w = n(435064),
    x = n(894694),
    O = n(61994),
    Z = n(39604),
    E = n(407316),
    P = n(937784),
    _ = n(356659),
    v = n(710111),
    j = n(388032),
    S = n(413135).Buffer;
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
    let {
            clips: t,
            channelId: F,
            onShare: D,
            onEdit: R,
            onBeforeDelete: k,
            onAfterDelete: U,
            actionsDisabled: A = !1,
            showShareAndEdit: B = !1,
        } = e,
        M = t[0],
        T = t.length > 1,
        { analyticsLocations: G } = (0, s.ZP)(),
        Y = (0, i.e7)([p.ZP, h.Z, g.default, d.Z], () =>
            p.ZP.getFlattenedGuildIds().some((e) => {
                let t = d.Z.getGuild(e);
                return null != t && (0, u.Gw)(t, h.Z, g.default).canCreateExpressions;
            }),
        ),
        q = (0, i.e7)([w.Z], () => t.some((e) => w.Z.isClipExporting(e.id)));
    async function I() {
        (0, l.Zy)();
        let e = f.Z.getChannel(F);
        (0, Z.UY)([M.id]);
        try {
            let t = await (0, Z.rO)(M);
            (0, r.ZDy)(
                async () => {
                    let { default: i } = await Promise.all([n.e("56035"), n.e("54982")]).then(n.bind(n, 758961)),
                        r = (null == e ? void 0 : e.guild_id) != null ? d.Z.getGuild(e.guild_id) : null,
                        l = null != r && (0, u.Gw)(r, h.Z, g.default).canCreateExpressions,
                        o = null == M.name || "" === M.name ? (0, _.yl)(b.default.extractTimestamp(M.id)) : M.name,
                        s = o.slice(0, v.Ek);
                    return (n) =>
                        (0, a.jsx)(
                            i,
                            C(N({}, n), {
                                showGuildPicker: !0,
                                guildId: l ? (null == e ? void 0 : e.guild_id) : void 0,
                                sourceFile: {
                                    file: new File([t], "".concat(o, ".mp4"), { type: "video/mp4" }),
                                    name: s,
                                },
                            }),
                        );
                },
                { stackingBehavior: "stack" },
            );
        } catch (e) {
        } finally {
            (0, Z.UY)(null);
        }
    }
    async function L() {
        (0, l.Zy)(), (0, Z.UY)([M.id]);
        try {
            let e = await (0, Z.rO)(M),
                t = await e.arrayBuffer(),
                n = (0, O.Z)((0, m.eP)(M.filepath));
            await o.Z.fileManager.saveWithDialog(S.from(t), n);
        } catch (e) {
            _.jF.error("Error exporting clip to file", e);
        } finally {
            (0, Z.UY)(null);
        }
    }
    async function W() {
        (0, l.Zy)();
        let e = (0, E.W)(F);
        (0, Z.UY)(t.map((e) => e.id));
        try {
            await (0, P.e)(t, {
                channelId: e ? F : void 0,
                analyticsLocations: G,
            });
        } catch (e) {
        } finally {
            (0, Z.UY)(null);
        }
        null == D || D();
    }
    async function H() {
        (0, l.Zy)(), (0, Z.UY)([M.id]);
        try {
            let e = await (0, Z.rO)(M),
                t = await (0, c.NF)(e),
                n = await t.arrayBuffer(),
                a = (0, O.Z)((0, m.G6)(M.filepath)) + ".ogg";
            await o.Z.fileManager.saveWithDialog(S.from(n), a);
        } catch (e) {
            _.jF.error("Error exporting clip to sound file", e);
        } finally {
            (0, Z.UY)(null);
        }
    }
    return (0, a.jsxs)(r.v2r, {
        navId: "clips-more-options",
        "aria-label": j.intl.string(j.t.PdRCRg),
        onClose: l.Zy,
        onSelect: l.Zy,
        children: [
            t.some((e) => !0 === e.isTemporary) &&
                (0, a.jsx)(r.sNh, {
                    id: "add-to-library",
                    label: j.intl.string(j.t["BfLmm+"]),
                    icon: r.svS,
                    disabled: A,
                    action: function () {
                        (0, l.Zy)(), t.forEach((e) => (0, Z.WY)(e.id));
                    },
                }),
            B &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(r.sNh, {
                            id: "share",
                            label: j.intl.string(j.t.RDE0Sc),
                            icon: r.aAc,
                            disabled: A && !q,
                            action: W,
                        }),
                        !T &&
                            (0, a.jsx)(r.sNh, {
                                id: "edit",
                                label: j.intl.string(j.t.bt75uw),
                                icon: y.Z,
                                disabled: A,
                                action: function () {
                                    (0, l.Zy)(),
                                        T ||
                                            (0, r.ZDy)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("98920"),
                                                        n.e("12479"),
                                                    ]).then(n.bind(n, 22989));
                                                    return (t) =>
                                                        (0, a.jsx)(
                                                            e,
                                                            C(N({}, t), {
                                                                channelId: F,
                                                                clip: M,
                                                            }),
                                                        );
                                                },
                                                {
                                                    modalKey: _.Ut,
                                                    stackingBehavior: "stack",
                                                },
                                            ),
                                        null == R || R();
                                },
                            }),
                    ],
                }),
            (0, a.jsx)(r.sNh, {
                id: "favorite",
                label: M.isFavorite ? j.intl.string(j.t.wDnlod) : j.intl.string(j.t.nPywqO),
                icon: M.isFavorite ? r.h_8 : r.Pzh,
                disabled: A,
                action: function () {
                    (0, l.Zy)(), t.forEach((e) => (0, Z.Pr)(e));
                },
            }),
            !T &&
                (0, a.jsxs)(r.sNh, {
                    id: "clips-export-group",
                    label: j.intl.string(j.t["WH/V85"]),
                    children: [
                        null != o.Z.clipboard.copyFile &&
                            (0, a.jsx)(r.sNh, {
                                icon: r.TIy,
                                id: "clips-copy-video",
                                label: j.intl.string(j.t["7NOhjN"]),
                                action: function () {
                                    (0, l.Zy)(),
                                        o.Z.clipboard.copyFile(M.filepath),
                                        (0, r.showToast)(
                                            (0, r.createToast)(j.intl.string(j.t.mGZ66D), r.ToastType.SUCCESS),
                                        );
                                },
                            }),
                        Y && M.type !== x.NJ.SCREENSHOT
                            ? (0, a.jsx)(r.sNh, {
                                  icon: r.KY1,
                                  id: "clips-export-soundboard",
                                  label: j.intl.string(j.t.ABjMWI),
                                  action: I,
                              })
                            : null,
                        (0, a.jsx)(r.sNh, {
                            icon: r._8t,
                            id: "clips-export-file",
                            label: M.type === x.NJ.SCREENSHOT ? j.intl.string(j.t.y5FgMk) : j.intl.string(j.t.sFgmNy),
                            action: L,
                        }),
                        M.type !== x.NJ.SCREENSHOT &&
                            (0, a.jsx)(r.sNh, {
                                icon: r._8t,
                                id: "clips-export-sound-file",
                                label: j.intl.string(j.t.db0NKG),
                                action: H,
                            }),
                    ],
                }),
            (0, a.jsx)(r.sNh, {
                icon: r.XHJ,
                id: "clips-delete",
                label: j.intl.string(j.t.oyYWHE),
                color: "danger",
                disabled: A,
                action: function (e) {
                    if (((0, l.Zy)(), null == e ? void 0 : e.shiftKey)) {
                        null == k || k(), t.forEach((e) => (0, Z.sS)(e.filepath)), null == U || U();
                        return;
                    }
                    (0, r.ZDy)(
                        async () => {
                            let { default: e } = await n.e("81409").then(n.bind(n, 210480));
                            return (n) =>
                                (0, a.jsx)(
                                    e,
                                    C(N({ clips: t }, n), {
                                        onBeforeDelete: k,
                                        onAfterDelete: async () => {
                                            await n.onClose(), null == U || U();
                                        },
                                    }),
                                );
                        },
                        { stackingBehavior: "stack" },
                    );
                },
            }),
        ],
    });
}
