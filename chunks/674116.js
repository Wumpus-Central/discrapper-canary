n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(153867),
    u = n(230711),
    m = n(313201),
    g = n(111672),
    h = n(921801),
    p = n(131951),
    x = n(663389),
    f = n(63063),
    _ = n(358085),
    E = n(740492),
    C = n(894939),
    T = n(321499),
    S = n(710808),
    b = n(625205),
    I = n(325808),
    N = n(823087),
    v = n(546997),
    A = n(520384),
    j = n(167540),
    O = n(803567),
    R = n(269876),
    P = n(976758),
    y = n(526761),
    B = n(726985),
    D = n(981631),
    Z = n(65154),
    L = n(388032),
    M = n(232186);
let k = (0, m.hQ)(),
    w = ''.concat(f.Z.getArticleURL(D.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function F(e, t, n) {
    (0, o.openModal)((r) =>
        (0, i.jsx)(o.ConfirmModal, {
            header: e,
            confirmText: L.intl.string(L.t.BddRzc),
            cancelText: L.intl.string(L.t['ETE/oK']),
            onConfirm: n,
            ...r,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                children: t
            })
        })
    );
}
function U() {
    let {
            inputMode: e,
            qosEnabled: t,
            attenuation: n,
            attenuateWhileSpeakingSelf: s,
            attenuateWhileSpeakingOthers: m,
            audioSubsystem: f,
            silenceWarning: D,
            legacyAudioSubsystemSupported: U,
            experimentalAudioSubsystemSupported: V,
            automaticAudioSubsystemSupported: G,
            sidechainEnabled: H,
            sidechainStrength: Y
        } = (0, l.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            qosEnabled: p.Z.getQoS(),
            attenuation: p.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: p.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: p.Z.getAttenuateWhileSpeakingOthers(),
            audioSubsystem: p.Z.getAudioSubsystem(),
            silenceWarning: p.Z.getEnableSilenceWarning(),
            legacyAudioSubsystemSupported: p.Z.supports(Z.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: p.Z.supports(Z.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: p.Z.supports(Z.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
            sidechainEnabled: p.Z.getSidechainCompression(),
            sidechainStrength: p.Z.getSidechainCompressionStrength()
        })),
        W = (0, l.e7)([x.Z], () => x.Z.getSubsection()),
        z = r.createRef();
    r.useEffect(() => {
        if (W === y.GA) {
            var e;
            null == z || null === (e = z.current) || void 0 === e || e.scrollIntoView(), u.Z.clearSubsection();
        }
    }, [z, W]);
    let K = g.Z.getCurrentConfig({ location: 'UserSettingsVoiceProcessing' }).sidechainAvailable && !(0, _.isWeb)(),
        q = (0, l.e7)([E.ZP], () => E.ZP.disableVoiceChannelChangeAlert);
    return (0, i.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: L.intl.string(L.t.NiTd0d),
        children: [
            (0, i.jsx)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_DEVICES,
                children: (0, i.jsx)(b.Z, {})
            }),
            (0, i.jsx)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                children: (0, i.jsx)(P.Z, {})
            }),
            (0, i.jsxs)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_MIC_TEST,
                children: [
                    (0, i.jsx)(N.Z, {}),
                    (0, i.jsx)(o.FormText, {
                        className: M.marginBottom20,
                        type: o.FormText.Types.DESCRIPTION,
                        children: L.intl.format(L.t['V+B3FB'], { guideURL: w })
                    }),
                    (0, i.jsx)(o.FormDivider, { className: a()(M.marginBottom20) })
                ]
            }),
            (0, i.jsx)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_INPUT_MODE,
                children: (0, i.jsx)(I.Z, {})
            }),
            (0, i.jsxs)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_SENSITIVITY,
                children: [e === Z.pM.VOICE_ACTIVITY && (0, i.jsx)(R.Z, {}), (0, i.jsx)(o.FormDivider, { className: M.marginBottom40 })]
            }),
            (0, i.jsx)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, i.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: z
                })
            }),
            (0, i.jsx)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, i.jsx)(C.Z, {})
            }),
            (0, i.jsx)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_VIDEO,
                children: (0, i.jsx)(j.Z, {})
            }),
            (0, i.jsx)(h.F, {
                setting: B.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, i.jsxs)(o.HeadingLevel, {
                    component: (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H1,
                        className: M.marginBottom20,
                        children: L.intl.string(L.t['8/udY2'])
                    }),
                    children: [
                        (0, i.jsx)(T.Z, {}),
                        (0, i.jsx)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, i.jsx)(O.Z, {})
                        }),
                        (0, i.jsx)(A.Z, {}),
                        (0, i.jsx)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
                            children: (0, i.jsx)(o.FormSection, {
                                className: M.marginBottom20,
                                title: L.intl.string(L.t.uancuL),
                                children: (0, i.jsx)(o.FormSwitch, {
                                    value: t,
                                    onChange: (e) => c.Z.setQoS(e),
                                    note: L.intl.string(L.t.I1Eoqq),
                                    children: L.intl.string(L.t['3CqDxs'])
                                })
                            })
                        }),
                        (0, i.jsx)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
                            children: (0, i.jsxs)(o.FormSection, {
                                className: M.marginBottom20,
                                children: [
                                    (0, i.jsx)(o.FormTitle, {
                                        id: k,
                                        tag: o.FormTitleTags.H5,
                                        className: M.marginBottom8,
                                        children: L.intl.string(L.t.oSdBvb)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: n,
                                        onValueChange: (e) => {
                                            c.Z.setAttenuation(e, s, m);
                                        },
                                        'aria-labelledby': k
                                    }),
                                    (0, i.jsx)(o.FormText, {
                                        className: M.marginBottom20,
                                        type: o.FormText.Types.DESCRIPTION,
                                        children: L.intl.string(L.t['0A/8Rk'])
                                    }),
                                    (0, i.jsx)(o.FormDivider, { className: M.marginBottom20 }),
                                    (0, i.jsx)(o.FormSwitch, {
                                        value: s,
                                        onChange: (e) => c.Z.setAttenuation(n, e, m),
                                        children: L.intl.string(L.t['9dHxRU'])
                                    }),
                                    (0, i.jsx)(o.FormSwitch, {
                                        value: m,
                                        onChange: (e) => c.Z.setAttenuation(n, s, e),
                                        children: L.intl.string(L.t.SMt0Gh)
                                    })
                                ]
                            })
                        }),
                        K &&
                            (0, i.jsx)(h.F, {
                                setting: B.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
                                children: (0, i.jsxs)(o.FormSection, {
                                    className: M.marginBottom20,
                                    children: [
                                        (0, i.jsx)(o.FormSwitch, {
                                            className: a()(M.marginTop8, M.marginBottom20),
                                            value: H,
                                            onChange: (e) => c.Z.setSidechainCompression(e),
                                            note: L.intl.string(L.t.IwZbbG),
                                            children: L.intl.string(L.t['/jwMtr'])
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: o.FormTitleTags.H5,
                                            className: M.marginBottom8,
                                            children: L.intl.string(L.t.fhEzfn)
                                        }),
                                        (0, i.jsx)(o.Slider, {
                                            initialValue: Y,
                                            minValue: 1,
                                            onValueChange: (e) => c.Z.setSidechainCompressionStrength(e)
                                        })
                                    ]
                                })
                            }),
                        (0, i.jsx)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
                            children: (0, i.jsxs)(o.FormSection, {
                                className: M.marginBottom20,
                                title: L.intl.string(L.t.wVBHr6),
                                children: [
                                    (0, i.jsx)(o.SingleSelect, {
                                        className: M.marginBottom20,
                                        value: f,
                                        options: (function (e, t, n) {
                                            let i = [
                                                {
                                                    value: Z.iA.STANDARD,
                                                    label: L.intl.string(L.t.dqb2JS)
                                                }
                                            ];
                                            return (
                                                e &&
                                                    i.push({
                                                        value: Z.iA.LEGACY,
                                                        label: L.intl.string(L.t['TYfH+/'])
                                                    }),
                                                t &&
                                                    i.push({
                                                        value: Z.iA.EXPERIMENTAL,
                                                        label: L.intl.string(L.t.liQmtr)
                                                    }),
                                                n &&
                                                    i.push({
                                                        value: Z.iA.AUTOMATIC,
                                                        label: L.intl.string(L.t.qNgtOz)
                                                    }),
                                                i
                                            );
                                        })(U, V, G),
                                        onChange: (e) => {
                                            F(L.intl.string(L.t.uY7AcX), L.intl.string(L.t.gBqik5), () => c.Z.setAudioSubsystem(e));
                                        }
                                    }),
                                    (0, i.jsx)(o.FormDivider, { className: M.marginBottom20 })
                                ]
                            })
                        }),
                        (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
                            children: (0, i.jsx)(o.FormSection, {
                                className: M.marginBottom20,
                                title: L.intl.string(L.t['aP1N/v']),
                                children: (0, i.jsx)(o.FormSwitch, {
                                    value: D,
                                    onChange: (e) => c.Z.setSilenceWarning(e),
                                    children: L.intl.string(L.t.jtiiCw)
                                })
                            })
                        }),
                        (0, i.jsxs)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
                            children: [
                                (0, i.jsx)(o.FormSwitch, {
                                    className: M.marginBottom20,
                                    note: L.intl.string(L.t.YCCMkJ),
                                    onChange: (e) => {
                                        d.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
                                    },
                                    value: !q,
                                    hideBorder: !0,
                                    children: (0, i.jsx)(o.Heading, {
                                        variant: 'text-md/medium',
                                        color: 'header-primary',
                                        className: M.marginBottom8,
                                        children: L.intl.string(L.t.e7LIiY)
                                    })
                                }),
                                (0, i.jsx)(o.FormDivider, { className: M.marginBottom40 })
                            ]
                        }),
                        (0, i.jsx)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, i.jsx)(S.Z, {})
                        }),
                        (0, i.jsx)(h.F, {
                            setting: B.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, i.jsx)(o.FormItem, {
                                children: (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.OUTLINED,
                                    color: o.Button.Colors.RED,
                                    onClick: () => {
                                        F(L.intl.string(L.t['/RXu6+']), L.intl.string(L.t.sQ42iY), c.Z.reset);
                                    },
                                    size: o.Button.Sizes.SMALL,
                                    children: L.intl.string(L.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
