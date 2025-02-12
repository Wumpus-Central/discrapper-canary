a.d(t, { Z: () => S }), a(47120);
var n = a(200651),
    l = a(192379),
    i = a(120356),
    r = a.n(i),
    o = a(952265),
    s = a(481060),
    u = a(239091),
    d = a(579806),
    c = a(357156),
    m = a(592125),
    p = a(430824),
    v = a(496675),
    f = a(594174),
    h = a(709054),
    x = a(39604),
    g = a(680056),
    _ = a(678651),
    j = a(445229),
    C = a(20437),
    b = a(356659),
    w = a(710111),
    y = a(388032),
    k = a(640370),
    N = a(413135).Buffer;
function S(e) {
    let { clip: t, channelId: i, clipName: S, onSetClipName: R, onClose: E } = e,
        { videoPlayerRef: L, cropData: T, voiceAudioEnabled: F, setVoiceAudioEnabled: P, applicationAudioEnabled: I, setApplicationAudioEnabled: A } = (0, C.S)(),
        [Z, D] = l.useState(null),
        { onShareClick: B } = (0, g.Z)({
            channelId: i,
            setExporting: (e) => D(null != e ? 'share' : null)
        });
    async function M() {
        var e;
        let l = m.Z.getChannel(i);
        D('export'), null === (e = L.current) || void 0 === e || e.pause();
        try {
            let e = await (0, x.rO)(t, {
                ...T,
                applicationAudio: I,
                voiceAudio: F
            });
            (0, s.ZDy)(async () => {
                let { default: i } = await Promise.all([a.e('56035'), a.e('13686')]).then(a.bind(a, 758961)),
                    r = (null == l ? void 0 : l.guild_id) != null ? p.Z.getGuild(l.guild_id) : null,
                    o = null != r && (0, c.Gw)(r, v.Z, f.default).canCreateExpressions,
                    s = null == S || '' === S ? (0, b.yl)(h.default.extractTimestamp(t.id)) : S,
                    u = s.slice(0, w.Ek);
                return (t) =>
                    (0, n.jsx)(i, {
                        ...t,
                        showGuildPicker: !0,
                        guildId: o ? (null == l ? void 0 : l.guild_id) : void 0,
                        sourceFile: {
                            file: new File([e], ''.concat(s, '.mp4'), { type: 'video/mp4' }),
                            name: u
                        }
                    });
            });
        } catch (e) {
        } finally {
            D(null);
        }
    }
    async function z() {
        var e;
        D('export'), null === (e = L.current) || void 0 === e || e.pause();
        try {
            let e = await (0, x.rO)(t, {
                    ...T,
                    applicationAudio: I,
                    voiceAudio: F
                }),
                a = await e.arrayBuffer();
            await d.Z.fileManager.saveWithDialog(N.from(a), (0, b.EF)(t.id));
        } catch (e) {
        } finally {
            D(null);
        }
    }
    function H() {
        var e;
        null === (e = L.current) || void 0 === e || e.pause(),
            (0, s.ZDy)(async () => {
                let { default: e } = await a.e('15915').then(a.bind(a, 799677));
                return (a) =>
                    (0, n.jsx)(e, {
                        clip: t,
                        ...a,
                        onClose: async () => {
                            await a.onClose();
                        },
                        onAfterDelete: async () => {
                            await a.onClose(), E();
                        }
                    });
            });
    }
    return (0, n.jsxs)('div', {
        className: k.clipForm,
        children: [
            (0, n.jsxs)('div', {
                className: r()(k.clipFormSection, k.editSection),
                children: [
                    (0, n.jsx)(s.xJW, {
                        className: k.clipFormItem,
                        title: y.intl.string(y.t.SJKc5u),
                        children: (0, n.jsx)(s.oil, {
                            onChange: (e) => {
                                '' === e ? R(void 0) : R(e);
                            },
                            value: S,
                            minLength: b.XH,
                            maxLength: b.MG,
                            placeholder: y.intl.string(y.t.Cyxddn)
                        })
                    }),
                    (0, n.jsxs)('div', {
                        className: k.clipFormSwitches,
                        children: [
                            (0, n.jsx)(s.j7V, {
                                onChange: A,
                                value: I,
                                hideBorder: !0,
                                children: y.intl.string(y.t.GnQui4)
                            }),
                            (0, n.jsx)(s.j7V, {
                                onChange: P,
                                value: F,
                                hideBorder: !0,
                                children: y.intl.string(y.t['5mVOCQ'])
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: r()(k.clipFormSection, k.metadataSection),
                children: [
                    (0, n.jsx)(_.Z, { clip: t }),
                    (0, n.jsx)(j.Z, {
                        className: k.userList,
                        clip: t
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: k.clipFormFooter,
                children: [
                    (0, n.jsx)(s.zxk, {
                        submitting: 'share' === Z,
                        disabled: null != Z && 'share' !== Z,
                        color: s.zxk.Colors.BRAND,
                        wrapperClassName: k.clipFormFooterButton,
                        onClick: () =>
                            B({
                                clip: {
                                    ...t,
                                    name: S
                                },
                                cropData: T,
                                applicationAudioEnabled: I,
                                voiceAudioEnabled: F,
                                onShareComplete: () => {
                                    o.Mr(b.Ut), o.Mr(b.Qr);
                                }
                            }),
                        children: y.intl.string(y.t.I8lglZ)
                    }),
                    (0, n.jsx)(s.zxk, {
                        size: s.zxk.Sizes.ICON,
                        className: k.clipFormFooterButton,
                        disabled: null != Z,
                        wrapperClassName: r()(k.clipFormFooterButton, { [k.submittingWrapperFix]: null != Z }),
                        color: s.zxk.Colors.PRIMARY,
                        onClick: E,
                        children: y.intl.string(y.t.K344S0)
                    }),
                    (0, n.jsx)(s.zxk, {
                        'aria-label': y.intl.string(y.t.PdRCRk),
                        size: s.zxk.Sizes.ICON,
                        wrapperClassName: r()(k.clipFormFooterButton, { [k.submittingWrapperFix]: null != Z }),
                        submitting: 'export' === Z,
                        disabled: null != Z && 'export' !== Z,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: function (e) {
                            (0, u.jW)(e, async () => {
                                let { default: e } = await a.e('32157').then(a.bind(a, 151090));
                                return (t) =>
                                    (0, n.jsx)(e, {
                                        ...t,
                                        onExportToSoundboard: M,
                                        onExportToFile: z,
                                        onDelete: H,
                                        channelId: i
                                    });
                            });
                        },
                        children: (0, n.jsx)(s.xhG, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            })
        ]
    });
}
