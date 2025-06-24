n.d(t, { Z: () => N }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(952265),
    s = n(481060),
    u = n(239091),
    c = n(579806),
    d = n(357156),
    m = n(592125),
    p = n(430824),
    f = n(496675),
    v = n(594174),
    h = n(709054),
    g = n(39604),
    x = n(680056),
    b = n(678651),
    j = n(445229),
    y = n(20437),
    _ = n(356659),
    w = n(710111),
    C = n(388032),
    k = n(935032),
    P = n(413135).Buffer;
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function S(e, t) {
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
function N(e) {
    let { clip: t, channelId: l, clipName: N, onSetClipName: E, onClose: R } = e,
        { videoPlayerRef: L, cropData: T, voiceAudioEnabled: F, setVoiceAudioEnabled: D, applicationAudioEnabled: I, setApplicationAudioEnabled: A } = (0, y.S)(),
        [Z, B] = r.useState(null),
        { onShareClick: M } = (0, x.Z)({
            channelId: l,
            setExporting: (e) => B(null != e ? 'share' : null)
        });
    async function z() {
        var e;
        let r = m.Z.getChannel(l);
        B('export'), null == (e = L.current) || e.pause();
        try {
            let e = await (0, g.rO)(
                t,
                S(O({}, T), {
                    applicationAudio: I,
                    voiceAudio: F
                })
            );
            (0, s.ZDy)(async () => {
                let { default: l } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961)),
                    i = (null == r ? void 0 : r.guild_id) != null ? p.Z.getGuild(r.guild_id) : null,
                    o = null != i && (0, d.Gw)(i, f.Z, v.default).canCreateExpressions,
                    s = null == N || '' === N ? (0, _.yl)(h.default.extractTimestamp(t.id)) : N,
                    u = s.slice(0, w.Ek);
                return (t) =>
                    (0, a.jsx)(
                        l,
                        S(O({}, t), {
                            showGuildPicker: !0,
                            guildId: o ? (null == r ? void 0 : r.guild_id) : void 0,
                            sourceFile: {
                                file: new File([e], ''.concat(s, '.mp4'), { type: 'video/mp4' }),
                                name: u
                            }
                        })
                    );
            });
        } catch (e) {
        } finally {
            B(null);
        }
    }
    async function H() {
        var e;
        B('export'), null == (e = L.current) || e.pause();
        try {
            let e = await (0, g.rO)(
                    t,
                    S(O({}, T), {
                        applicationAudio: I,
                        voiceAudio: F
                    })
                ),
                n = await e.arrayBuffer();
            await c.Z.fileManager.saveWithDialog(P.from(n), (0, _.EF)(t.id));
        } catch (e) {
        } finally {
            B(null);
        }
    }
    function W() {
        var e;
        null == (e = L.current) || e.pause(),
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('15915').then(n.bind(n, 799677));
                return (n) =>
                    (0, a.jsx)(
                        e,
                        S(O({ clip: t }, n), {
                            onClose: async () => {
                                await n.onClose();
                            },
                            onAfterDelete: async () => {
                                await n.onClose(), R();
                            }
                        })
                    );
            });
    }
    return (0, a.jsxs)('div', {
        className: k.clipForm,
        children: [
            (0, a.jsxs)('div', {
                className: i()(k.clipFormSection, k.editSection),
                children: [
                    (0, a.jsx)(s.xJW, {
                        className: k.clipFormItem,
                        title: C.intl.string(C.t.SJKc5u),
                        children: (0, a.jsx)(s.oil, {
                            onChange: (e) => {
                                '' === e ? E(void 0) : E(e);
                            },
                            value: N,
                            minLength: _.XH,
                            maxLength: _.MG,
                            placeholder: C.intl.string(C.t.Cyxddn)
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: k.clipFormSwitches,
                        children: [
                            (0, a.jsx)(s.j7V, {
                                onChange: A,
                                value: I,
                                hideBorder: !0,
                                children: C.intl.string(C.t.GnQui4)
                            }),
                            (0, a.jsx)(s.j7V, {
                                onChange: D,
                                value: F,
                                hideBorder: !0,
                                children: C.intl.string(C.t['5mVOCQ'])
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: i()(k.clipFormSection, k.metadataSection),
                children: [
                    (0, a.jsx)(b.Z, { clip: t }),
                    (0, a.jsx)(j.Z, {
                        className: k.userList,
                        clip: t
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: k.clipFormFooter,
                children: [
                    (0, a.jsx)(s.zxk, {
                        submitting: 'share' === Z,
                        disabled: null != Z && 'share' !== Z,
                        color: s.zxk.Colors.BRAND,
                        wrapperClassName: k.clipFormFooterButton,
                        onClick: () =>
                            M({
                                clip: S(O({}, t), { name: N }),
                                cropData: T,
                                applicationAudioEnabled: I,
                                voiceAudioEnabled: F,
                                onShareComplete: () => {
                                    o.Mr(_.Ut), o.Mr(_.Qr);
                                }
                            }),
                        children: C.intl.string(C.t.I8lglZ)
                    }),
                    (0, a.jsx)(s.zxk, {
                        size: s.zxk.Sizes.ICON,
                        className: k.clipFormFooterButton,
                        disabled: null != Z,
                        wrapperClassName: i()(k.clipFormFooterButton, { [k.submittingWrapperFix]: null != Z }),
                        color: s.zxk.Colors.PRIMARY,
                        onClick: R,
                        children: C.intl.string(C.t.K344S0)
                    }),
                    (0, a.jsx)(s.zxk, {
                        'aria-label': C.intl.string(C.t.PdRCRk),
                        size: s.zxk.Sizes.ICON,
                        wrapperClassName: i()(k.clipFormFooterButton, { [k.submittingWrapperFix]: null != Z }),
                        submitting: 'export' === Z,
                        disabled: null != Z && 'export' !== Z,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: function (e) {
                            (0, u.jW)(e, async () => {
                                let { default: e } = await n.e('32157').then(n.bind(n, 151090));
                                return (t) =>
                                    (0, a.jsx)(
                                        e,
                                        S(O({}, t), {
                                            onExportToSoundboard: z,
                                            onExportToFile: H,
                                            onDelete: W,
                                            channelId: l
                                        })
                                    );
                            });
                        },
                        children: (0, a.jsx)(s.xhG, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            })
        ]
    });
}
