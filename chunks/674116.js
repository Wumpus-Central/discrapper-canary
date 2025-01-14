n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(153867),
    u = n(230711),
    m = n(313201),
    h = n(111672),
    g = n(921801),
    p = n(131951),
    x = n(663389),
    S = n(63063),
    T = n(358085),
    E = n(740492),
    C = n(894939),
    _ = n(321499),
    f = n(710808),
    I = n(625205),
    N = n(325808),
    A = n(823087),
    b = n(546997),
    v = n(520384),
    j = n(167540),
    O = n(803567),
    R = n(269876),
    P = n(976758),
    D = n(526761),
    y = n(726985),
    B = n(981631),
    L = n(65154),
    Z = n(388032),
    F = n(232186);
let M = (0, m.hQ)(),
    k = ''.concat(S.Z.getArticleURL(B.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function w(e, t, n) {
    (0, o.openModal)((s) =>
        (0, i.jsx)(o.ConfirmModal, {
            header: e,
            confirmText: Z.intl.string(Z.t.BddRzc),
            cancelText: Z.intl.string(Z.t['ETE/oK']),
            onConfirm: n,
            ...s,
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
            attenuateWhileSpeakingSelf: r,
            attenuateWhileSpeakingOthers: m,
            audioSubsystem: S,
            silenceWarning: B,
            legacyAudioSubsystemSupported: U,
            experimentalAudioSubsystemSupported: V,
            automaticAudioSubsystemSupported: G,
            sidechainEnabled: Y,
            sidechainStrength: H
        } = (0, a.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            qosEnabled: p.Z.getQoS(),
            attenuation: p.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: p.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: p.Z.getAttenuateWhileSpeakingOthers(),
            audioSubsystem: p.Z.getAudioSubsystem(),
            silenceWarning: p.Z.getEnableSilenceWarning(),
            legacyAudioSubsystemSupported: p.Z.supports(L.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: p.Z.supports(L.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: p.Z.supports(L.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
            sidechainEnabled: p.Z.getSidechainCompression(),
            sidechainStrength: p.Z.getSidechainCompressionStrength()
        })),
        z = (0, a.e7)([x.Z], () => x.Z.getSubsection()),
        W = s.createRef();
    s.useEffect(() => {
        if (z === D.GA) {
            var e;
            null == W || null === (e = W.current) || void 0 === e || e.scrollIntoView(), u.Z.clearSubsection();
        }
    }, [W, z]);
    let K = h.Z.getCurrentConfig({ location: 'UserSettingsVoiceProcessing' }).sidechainAvailable && !(0, T.isWeb)(),
        q = (0, a.e7)([E.ZP], () => E.ZP.disableVoiceChannelChangeAlert);
    return (0, i.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: Z.intl.string(Z.t.NiTd0d),
        children: [
            (0, i.jsx)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_DEVICES,
                children: (0, i.jsx)(I.Z, {})
            }),
            (0, i.jsx)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                children: (0, i.jsx)(P.Z, {})
            }),
            (0, i.jsxs)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_MIC_TEST,
                children: [
                    (0, i.jsx)(A.Z, {}),
                    (0, i.jsx)(o.FormText, {
                        className: F.marginBottom20,
                        type: o.FormText.Types.DESCRIPTION,
                        children: Z.intl.format(Z.t['V+B3FB'], { guideURL: k })
                    }),
                    (0, i.jsx)(o.FormDivider, { className: l()(F.marginBottom20) })
                ]
            }),
            (0, i.jsx)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_INPUT_MODE,
                children: (0, i.jsx)(N.Z, {})
            }),
            (0, i.jsxs)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_SENSITIVITY,
                children: [e === L.pM.VOICE_ACTIVITY && (0, i.jsx)(R.Z, {}), (0, i.jsx)(o.FormDivider, { className: F.marginBottom40 })]
            }),
            (0, i.jsx)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, i.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: W
                })
            }),
            (0, i.jsx)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, i.jsx)(C.Z, {})
            }),
            (0, i.jsx)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_VIDEO,
                children: (0, i.jsx)(j.Z, {})
            }),
            (0, i.jsx)(g.F, {
                setting: y.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, i.jsxs)(o.HeadingLevel, {
                    component: (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H1,
                        className: F.marginBottom20,
                        children: Z.intl.string(Z.t['8/udY2'])
                    }),
                    children: [
                        (0, i.jsx)(_.Z, {}),
                        (0, i.jsx)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, i.jsx)(O.Z, {})
                        }),
                        (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
                            children: (0, i.jsx)(o.FormSection, {
                                className: F.marginBottom20,
                                title: Z.intl.string(Z.t.uancuL),
                                children: (0, i.jsx)(o.FormSwitch, {
                                    value: t,
                                    onChange: (e) => c.Z.setQoS(e),
                                    note: Z.intl.string(Z.t.I1Eoqq),
                                    children: Z.intl.string(Z.t['3CqDxs'])
                                })
                            })
                        }),
                        (0, i.jsx)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
                            children: (0, i.jsxs)(o.FormSection, {
                                className: F.marginBottom20,
                                children: [
                                    (0, i.jsx)(o.FormTitle, {
                                        id: M,
                                        tag: o.FormTitleTags.H5,
                                        className: F.marginBottom8,
                                        children: Z.intl.string(Z.t.oSdBvb)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: n,
                                        onValueChange: (e) => {
                                            c.Z.setAttenuation(e, r, m);
                                        },
                                        'aria-labelledby': M
                                    }),
                                    (0, i.jsx)(o.FormText, {
                                        className: F.marginBottom20,
                                        type: o.FormText.Types.DESCRIPTION,
                                        children: Z.intl.string(Z.t['0A/8Rk'])
                                    }),
                                    (0, i.jsx)(o.FormDivider, { className: F.marginBottom20 }),
                                    (0, i.jsx)(o.FormSwitch, {
                                        value: r,
                                        onChange: (e) => c.Z.setAttenuation(n, e, m),
                                        children: Z.intl.string(Z.t['9dHxRU'])
                                    }),
                                    (0, i.jsx)(o.FormSwitch, {
                                        value: m,
                                        onChange: (e) => c.Z.setAttenuation(n, r, e),
                                        children: Z.intl.string(Z.t.SMt0Gh)
                                    })
                                ]
                            })
                        }),
                        K &&
                            (0, i.jsx)(g.F, {
                                setting: y.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
                                children: (0, i.jsxs)(o.FormSection, {
                                    className: F.marginBottom20,
                                    children: [
                                        (0, i.jsx)(o.FormSwitch, {
                                            className: l()(F.marginTop8, F.marginBottom20),
                                            value: Y,
                                            onChange: (e) => c.Z.setSidechainCompression(e),
                                            note: Z.intl.string(Z.t.IwZbbG),
                                            children: Z.intl.string(Z.t['/jwMtr'])
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: o.FormTitleTags.H5,
                                            className: F.marginBottom8,
                                            children: Z.intl.string(Z.t.fhEzfn)
                                        }),
                                        (0, i.jsx)(o.Slider, {
                                            initialValue: H,
                                            minValue: 1,
                                            onValueChange: (e) => c.Z.setSidechainCompressionStrength(e)
                                        })
                                    ]
                                })
                            }),
                        (0, i.jsx)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
                            children: (0, i.jsxs)(o.FormSection, {
                                className: F.marginBottom20,
                                title: Z.intl.string(Z.t.wVBHr6),
                                children: [
                                    (0, i.jsx)(o.SingleSelect, {
                                        className: F.marginBottom20,
                                        value: S,
                                        options: (function (e, t, n) {
                                            let i = [
                                                {
                                                    value: L.iA.STANDARD,
                                                    label: Z.intl.string(Z.t.dqb2JS)
                                                }
                                            ];
                                            return (
                                                e &&
                                                    i.push({
                                                        value: L.iA.LEGACY,
                                                        label: Z.intl.string(Z.t['TYfH+/'])
                                                    }),
                                                t &&
                                                    i.push({
                                                        value: L.iA.EXPERIMENTAL,
                                                        label: Z.intl.string(Z.t.liQmtr)
                                                    }),
                                                n &&
                                                    i.push({
                                                        value: L.iA.AUTOMATIC,
                                                        label: Z.intl.string(Z.t.qNgtOz)
                                                    }),
                                                i
                                            );
                                        })(U, V, G),
                                        onChange: (e) => {
                                            w(Z.intl.string(Z.t.uY7AcX), Z.intl.string(Z.t.gBqik5), () => c.Z.setAudioSubsystem(e));
                                        }
                                    }),
                                    (0, i.jsx)(o.FormDivider, { className: F.marginBottom20 })
                                ]
                            })
                        }),
                        (0, i.jsx)(b.Z, {}),
                        (0, i.jsx)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
                            children: (0, i.jsx)(o.FormSection, {
                                className: F.marginBottom20,
                                title: Z.intl.string(Z.t['aP1N/v']),
                                children: (0, i.jsx)(o.FormSwitch, {
                                    value: B,
                                    onChange: (e) => c.Z.setSilenceWarning(e),
                                    children: Z.intl.string(Z.t.jtiiCw)
                                })
                            })
                        }),
                        (0, i.jsxs)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
                            children: [
                                (0, i.jsx)(o.FormSwitch, {
                                    className: F.marginBottom20,
                                    note: Z.intl.string(Z.t.YCCMkJ),
                                    onChange: (e) => {
                                        d.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
                                    },
                                    value: !q,
                                    hideBorder: !0,
                                    children: (0, i.jsx)(o.Heading, {
                                        variant: 'text-md/medium',
                                        color: 'header-primary',
                                        className: F.marginBottom8,
                                        children: Z.intl.string(Z.t.e7LIiY)
                                    })
                                }),
                                (0, i.jsx)(o.FormDivider, { className: F.marginBottom40 })
                            ]
                        }),
                        (0, i.jsx)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, i.jsx)(f.Z, {})
                        }),
                        (0, i.jsx)(g.F, {
                            setting: y.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, i.jsx)(o.FormItem, {
                                children: (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.OUTLINED,
                                    color: o.Button.Colors.RED,
                                    onClick: () => {
                                        w(Z.intl.string(Z.t['/RXu6+']), Z.intl.string(Z.t.sQ42iY), c.Z.reset);
                                    },
                                    size: o.Button.Sizes.SMALL,
                                    children: Z.intl.string(Z.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
