n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var a = n(200651),
    l = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(952265),
    s = n(481060),
    u = n(239091),
    d = n(579806),
    c = n(357156),
    m = n(592125),
    p = n(430824),
    v = n(496675),
    f = n(594174),
    b = n(709054),
    h = n(39604),
    x = n(680056),
    g = n(678651),
    j = n(445229),
    C = n(20437),
    w = n(356659),
    y = n(710111),
    _ = n(388032),
    k = n(249861),
    S = n(413135).Buffer;
function N(e) {
    let { clip: t, channelId: i, clipName: N, onSetClipName: T, onClose: L } = e,
        { videoPlayerRef: F, cropData: R, voiceAudioEnabled: E, setVoiceAudioEnabled: I, applicationAudioEnabled: P, setApplicationAudioEnabled: B } = (0, C.S)(),
        [M, A] = l.useState(null),
        { onShareClick: Z } = (0, x.Z)({
            channelId: i,
            setExporting: (e) => A(null != e ? 'share' : null)
        });
    async function D() {
        var e;
        let l = m.Z.getChannel(i);
        A('export'), null === (e = F.current) || void 0 === e || e.pause();
        try {
            let e = await (0, h.rO)(t, {
                ...R,
                applicationAudio: P,
                voiceAudio: E
            });
            (0, s.openModalLazy)(async () => {
                let { default: i } = await Promise.all([n.e('56035'), n.e('28394')]).then(n.bind(n, 758961)),
                    r = (null == l ? void 0 : l.guild_id) != null ? p.Z.getGuild(l.guild_id) : null,
                    o = null != r && (0, c.Gw)(r, v.Z, f.default).canCreateExpressions,
                    s = null == N || '' === N ? (0, w.yl)(b.default.extractTimestamp(t.id)) : N,
                    u = s.slice(0, y.Ek);
                return (t) =>
                    (0, a.jsx)(i, {
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
            A(null);
        }
    }
    async function z() {
        var e;
        A('export'), null === (e = F.current) || void 0 === e || e.pause();
        try {
            let e = await (0, h.rO)(t, {
                    ...R,
                    applicationAudio: P,
                    voiceAudio: E
                }),
                n = await e.arrayBuffer();
            await d.Z.fileManager.saveWithDialog(S.from(n), (0, w.EF)(t.id));
        } catch (e) {
        } finally {
            A(null);
        }
    }
    function O() {
        var e;
        null === (e = F.current) || void 0 === e || e.pause(),
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('15915').then(n.bind(n, 799677));
                return (n) =>
                    (0, a.jsx)(e, {
                        clip: t,
                        ...n,
                        onClose: async () => {
                            await n.onClose();
                        },
                        onAfterDelete: async () => {
                            await n.onClose(), L();
                        }
                    });
            });
    }
    return (0, a.jsxs)('div', {
        className: k.clipForm,
        children: [
            (0, a.jsxs)('div', {
                className: r()(k.clipFormSection, k.editSection),
                children: [
                    (0, a.jsx)(s.FormItem, {
                        className: k.clipFormItem,
                        title: _.intl.string(_.t.SJKc5u),
                        children: (0, a.jsx)(s.TextInput, {
                            onChange: (e) => {
                                '' === e ? T(void 0) : T(e);
                            },
                            value: N,
                            minLength: w.XH,
                            maxLength: w.MG,
                            placeholder: _.intl.string(_.t.Cyxddn)
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: k.clipFormSwitches,
                        children: [
                            (0, a.jsx)(s.FormSwitch, {
                                onChange: B,
                                value: P,
                                hideBorder: !0,
                                children: _.intl.string(_.t.GnQui4)
                            }),
                            (0, a.jsx)(s.FormSwitch, {
                                onChange: I,
                                value: E,
                                hideBorder: !0,
                                children: _.intl.string(_.t['5mVOCQ'])
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: r()(k.clipFormSection, k.metadataSection),
                children: [
                    (0, a.jsx)(g.Z, { clip: t }),
                    (0, a.jsx)(j.Z, {
                        className: k.userList,
                        clip: t
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: k.clipFormFooter,
                children: [
                    (0, a.jsx)(s.Button, {
                        submitting: 'share' === M,
                        disabled: null != M && 'share' !== M,
                        color: s.Button.Colors.BRAND,
                        wrapperClassName: k.clipFormFooterButton,
                        onClick: () =>
                            Z({
                                clip: {
                                    ...t,
                                    name: N
                                },
                                cropData: R,
                                applicationAudioEnabled: P,
                                voiceAudioEnabled: E,
                                onShareComplete: () => {
                                    o.Mr(w.Ut), o.Mr(w.Qr);
                                }
                            }),
                        children: _.intl.string(_.t.I8lglZ)
                    }),
                    (0, a.jsx)(s.Button, {
                        size: s.Button.Sizes.ICON,
                        className: k.clipFormFooterButton,
                        disabled: null != M,
                        wrapperClassName: r()(k.clipFormFooterButton, { [k.submittingWrapperFix]: null != M }),
                        color: s.Button.Colors.PRIMARY,
                        onClick: L,
                        children: _.intl.string(_.t.K344S0)
                    }),
                    (0, a.jsx)(s.Button, {
                        'aria-label': _.intl.string(_.t.PdRCRk),
                        size: s.Button.Sizes.ICON,
                        wrapperClassName: r()(k.clipFormFooterButton, { [k.submittingWrapperFix]: null != M }),
                        submitting: 'export' === M,
                        disabled: null != M && 'export' !== M,
                        color: s.Button.Colors.PRIMARY,
                        onClick: function (e) {
                            (0, u.jW)(e, async () => {
                                let { default: e } = await n.e('32157').then(n.bind(n, 151090));
                                return (t) =>
                                    (0, a.jsx)(e, {
                                        ...t,
                                        onExportToSoundboard: D,
                                        onExportToFile: z,
                                        onDelete: O,
                                        channelId: i
                                    });
                            });
                        },
                        children: (0, a.jsx)(s.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            })
        ]
    });
}
