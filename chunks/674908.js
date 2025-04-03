n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    a = n(192379),
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
    N = n(935032),
    k = n(413135).Buffer;
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
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
function S(e) {
    let { clip: t, channelId: l, clipName: S, onSetClipName: E, onClose: R } = e,
        { videoPlayerRef: L, cropData: T, voiceAudioEnabled: F, setVoiceAudioEnabled: D, applicationAudioEnabled: I, setApplicationAudioEnabled: A } = (0, y.S)(),
        [Z, B] = a.useState(null),
        { onShareClick: M } = (0, x.Z)({
            channelId: l,
            setExporting: (e) => B(null != e ? 'share' : null)
        });
    async function W() {
        var e;
        let a = m.Z.getChannel(l);
        B('export'), null == (e = L.current) || e.pause();
        try {
            let e = await (0, g.rO)(
                t,
                P(O({}, T), {
                    applicationAudio: I,
                    voiceAudio: F
                })
            );
            (0, s.ZDy)(async () => {
                let { default: l } = await Promise.all([n.e('56035'), n.e('34057')]).then(n.bind(n, 758961)),
                    i = (null == a ? void 0 : a.guild_id) != null ? p.Z.getGuild(a.guild_id) : null,
                    o = null != i && (0, d.Gw)(i, f.Z, v.default).canCreateExpressions,
                    s = null == S || '' === S ? (0, _.yl)(h.default.extractTimestamp(t.id)) : S,
                    u = s.slice(0, w.Ek);
                return (t) =>
                    (0, r.jsx)(
                        l,
                        P(O({}, t), {
                            showGuildPicker: !0,
                            guildId: o ? (null == a ? void 0 : a.guild_id) : void 0,
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
    async function z() {
        var e;
        B('export'), null == (e = L.current) || e.pause();
        try {
            let e = await (0, g.rO)(
                    t,
                    P(O({}, T), {
                        applicationAudio: I,
                        voiceAudio: F
                    })
                ),
                n = await e.arrayBuffer();
            await c.Z.fileManager.saveWithDialog(k.from(n), (0, _.EF)(t.id));
        } catch (e) {
        } finally {
            B(null);
        }
    }
    function H() {
        var e;
        null == (e = L.current) || e.pause(),
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('15915').then(n.bind(n, 799677));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        P(O({ clip: t }, n), {
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
    return (0, r.jsxs)('div', {
        className: N.clipForm,
        children: [
            (0, r.jsxs)('div', {
                className: i()(N.clipFormSection, N.editSection),
                children: [
                    (0, r.jsx)(s.xJW, {
                        className: N.clipFormItem,
                        title: C.NW.string(C.t.SJKc5u),
                        children: (0, r.jsx)(s.oil, {
                            onChange: (e) => {
                                '' === e ? E(void 0) : E(e);
                            },
                            value: S,
                            minLength: _.XH,
                            maxLength: _.MG,
                            placeholder: C.NW.string(C.t.Cyxddn)
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: N.clipFormSwitches,
                        children: [
                            (0, r.jsx)(s.j7V, {
                                onChange: A,
                                value: I,
                                hideBorder: !0,
                                children: C.NW.string(C.t.GnQui4)
                            }),
                            (0, r.jsx)(s.j7V, {
                                onChange: D,
                                value: F,
                                hideBorder: !0,
                                children: C.NW.string(C.t['5mVOCQ'])
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: i()(N.clipFormSection, N.metadataSection),
                children: [
                    (0, r.jsx)(b.Z, { clip: t }),
                    (0, r.jsx)(j.Z, {
                        className: N.userList,
                        clip: t
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.clipFormFooter,
                children: [
                    (0, r.jsx)(s.zxk, {
                        submitting: 'share' === Z,
                        disabled: null != Z && 'share' !== Z,
                        color: s.zxk.Colors.BRAND,
                        wrapperClassName: N.clipFormFooterButton,
                        onClick: () =>
                            M({
                                clip: P(O({}, t), { name: S }),
                                cropData: T,
                                applicationAudioEnabled: I,
                                voiceAudioEnabled: F,
                                onShareComplete: () => {
                                    o.Mr(_.Ut), o.Mr(_.Qr);
                                }
                            }),
                        children: C.NW.string(C.t.I8lglZ)
                    }),
                    (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.ICON,
                        className: N.clipFormFooterButton,
                        disabled: null != Z,
                        wrapperClassName: i()(N.clipFormFooterButton, { [N.submittingWrapperFix]: null != Z }),
                        color: s.zxk.Colors.PRIMARY,
                        onClick: R,
                        children: C.NW.string(C.t.K344S0)
                    }),
                    (0, r.jsx)(s.zxk, {
                        'aria-label': C.NW.string(C.t.PdRCRk),
                        size: s.zxk.Sizes.ICON,
                        wrapperClassName: i()(N.clipFormFooterButton, { [N.submittingWrapperFix]: null != Z }),
                        submitting: 'export' === Z,
                        disabled: null != Z && 'export' !== Z,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: function (e) {
                            (0, u.jW)(e, async () => {
                                let { default: e } = await n.e('32157').then(n.bind(n, 151090));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        P(O({}, t), {
                                            onExportToSoundboard: W,
                                            onExportToFile: z,
                                            onDelete: H,
                                            channelId: l
                                        })
                                    );
                            });
                        },
                        children: (0, r.jsx)(s.xhG, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            })
        ]
    });
}
