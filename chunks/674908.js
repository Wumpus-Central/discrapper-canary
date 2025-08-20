n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    a = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(952265),
    s = n(755721),
    u = n(481060),
    c = n(239091),
    d = n(579806),
    m = n(357156),
    p = n(592125),
    f = n(430824),
    v = n(496675),
    h = n(594174),
    g = n(709054),
    x = n(39604),
    b = n(680056),
    j = n(678651),
    y = n(445229),
    _ = n(20437),
    w = n(356659),
    C = n(710111),
    k = n(388032),
    O = n(612683),
    P = n(413135).Buffer;
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { clip: t, channelId: l, clipName: E, onSetClipName: R, onClose: L } = e,
        {
            videoPlayerRef: T,
            cropData: F,
            voiceAudioEnabled: D,
            setVoiceAudioEnabled: I,
            applicationAudioEnabled: A,
            setApplicationAudioEnabled: Z,
        } = (0, _.S)(),
        [B, M] = a.useState(null),
        { onShareClick: z } = (0, b.Z)({
            channelId: l,
            setExporting: (e) => M(null != e ? "share" : null),
        });
    async function H() {
        var e;
        let a = p.Z.getChannel(l);
        M("export"), null == (e = T.current) || e.pause();
        try {
            let e = await (0, x.rO)(
                t,
                N(S({}, F), {
                    applicationAudio: A,
                    voiceAudio: D,
                }),
            );
            (0, u.ZDy)(async () => {
                let { default: l } = await n.e("56035").then(n.bind(n, 758961)),
                    i = (null == a ? void 0 : a.guild_id) != null ? f.Z.getGuild(a.guild_id) : null,
                    o = null != i && (0, m.Gw)(i, v.Z, h.default).canCreateExpressions,
                    s = null == E || "" === E ? (0, w.yl)(g.default.extractTimestamp(t.id)) : E,
                    u = s.slice(0, C.Ek);
                return (t) =>
                    (0, r.jsx)(
                        l,
                        N(S({}, t), {
                            showGuildPicker: !0,
                            guildId: o ? (null == a ? void 0 : a.guild_id) : void 0,
                            sourceFile: {
                                file: new File([e], "".concat(s, ".mp4"), { type: "video/mp4" }),
                                name: u,
                            },
                        }),
                    );
            });
        } catch (e) {
        } finally {
            M(null);
        }
    }
    async function W() {
        var e;
        M("export"), null == (e = T.current) || e.pause();
        try {
            let e = await (0, x.rO)(
                    t,
                    N(S({}, F), {
                        applicationAudio: A,
                        voiceAudio: D,
                    }),
                ),
                n = await e.arrayBuffer();
            await d.Z.fileManager.saveWithDialog(P.from(n), (0, w.EF)(t.id));
        } catch (e) {
        } finally {
            M(null);
        }
    }
    function U() {
        var e;
        null == (e = T.current) || e.pause(),
            (0, u.ZDy)(async () => {
                let { default: e } = await n.e("15915").then(n.bind(n, 799677));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        N(S({ clip: t }, n), {
                            onClose: async () => {
                                await n.onClose();
                            },
                            onAfterDelete: async () => {
                                await n.onClose(), L();
                            },
                        }),
                    );
            });
    }
    return (0, r.jsxs)("div", {
        className: O.clipForm,
        children: [
            (0, r.jsxs)("div", {
                className: i()(O.clipFormSection, O.editSection),
                children: [
                    (0, r.jsx)(u.xJW, {
                        className: O.clipFormItem,
                        title: k.intl.string(k.t.SJKc5u),
                        children: (0, r.jsx)(u.oil, {
                            onChange: (e) => {
                                "" === e ? R(void 0) : R(e);
                            },
                            value: E,
                            minLength: w.XH,
                            maxLength: w.MG,
                            placeholder: k.intl.string(k.t.Cyxddn),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: O.clipFormSwitches,
                        children: [
                            (0, r.jsx)(u.j7V, {
                                onChange: Z,
                                value: A,
                                hideBorder: !0,
                                children: k.intl.string(k.t.GnQui4),
                            }),
                            (0, r.jsx)(u.j7V, {
                                onChange: I,
                                value: D,
                                hideBorder: !0,
                                children: k.intl.string(k.t["5mVOCQ"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(O.clipFormSection, O.metadataSection),
                children: [
                    (0, r.jsx)(j.Z, { clip: t }),
                    (0, r.jsx)(y.Z, {
                        className: O.userList,
                        clip: t,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: O.clipFormFooter,
                children: [
                    (0, r.jsx)(s.zx, {
                        submitting: "share" === B,
                        disabled: null != B && "share" !== B,
                        color: s.zx.Colors.BRAND,
                        wrapperClassName: O.clipFormFooterButton,
                        onClick: () =>
                            z({
                                clip: N(S({}, t), { name: E }),
                                cropData: F,
                                applicationAudioEnabled: A,
                                voiceAudioEnabled: D,
                                onShareComplete: () => {
                                    o.Mr(w.Ut), o.Mr(w.Qr);
                                },
                            }),
                        children: k.intl.string(k.t.I8lglZ),
                    }),
                    (0, r.jsx)(s.zx, {
                        size: s.zx.Sizes.ICON,
                        className: O.clipFormFooterButton,
                        disabled: null != B,
                        wrapperClassName: i()(O.clipFormFooterButton, { [O.submittingWrapperFix]: null != B }),
                        color: s.zx.Colors.PRIMARY,
                        onClick: L,
                        children: k.intl.string(k.t.K344S0),
                    }),
                    (0, r.jsx)(s.zx, {
                        "aria-label": k.intl.string(k.t.PdRCRk),
                        size: s.zx.Sizes.ICON,
                        wrapperClassName: i()(O.clipFormFooterButton, { [O.submittingWrapperFix]: null != B }),
                        submitting: "export" === B,
                        disabled: null != B && "export" !== B,
                        color: s.zx.Colors.PRIMARY,
                        onClick: function (e) {
                            (0, c.jW)(e, async () => {
                                let { default: e } = await n.e("32157").then(n.bind(n, 151090));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        N(S({}, t), {
                                            onExportToSoundboard: H,
                                            onExportToFile: W,
                                            onDelete: U,
                                            channelId: l,
                                        }),
                                    );
                            });
                        },
                        children: (0, r.jsx)(u.xhG, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
        ],
    });
}
