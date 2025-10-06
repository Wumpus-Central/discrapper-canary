n.d(t, { Z: () => g });
var r = n(951288),
    i = n(538534),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(454585),
    c = n(125900),
    u = n(921801),
    d = n(626135),
    f = n(695346),
    _ = n(273313),
    p = n(726985),
    h = n(981631),
    m = n(388032);
function g() {
    let e = f.fq.useSetting(),
        t = f.eR.useSetting(),
        n = (0, c.V2)({ location: "UserSettingsTextImages" }),
        g = f.R$.useSetting(),
        E = f.cC.useSetting(),
        b = f.vF.useSetting(),
        y = f.H1.useSetting(),
        O = f.ev.useSetting(),
        v = f.x4.useSetting(),
        I = f.RS.useSetting(),
        T = f.NA.useSetting(),
        S = f.nc.useSetting(),
        A = f.HV.useSetting(),
        { analyticsLocations: C } = (0, s.ZP)(o.Z.TEXT_AND_IMAGES),
        N = () =>
            (0, r.jsx)(i.E, {
                label: m.intl.string(m.t.QgwmV1),
                description: m.intl.string(m.t.TYnRkZ),
                options: [
                    {
                        name: m.intl.string(m.t["KFH/mZ"]),
                        value: h.A2N.ON_CLICK,
                    },
                    {
                        name: m.intl.string(m.t.K5VTBA),
                        value: h.A2N.IF_MODERATOR,
                    },
                    {
                        name: m.intl.string(m.t.Pe1RbG),
                        value: h.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => f.cC.updateSetting(e),
                value: E,
            });
    return (0, r.jsx)(_.Z, {
        title: m.intl.string(m.t["/VQax8"]),
        children: (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(u.F, {
                    setting: p.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(a.C3N, {
                        label: m.intl.string(m.t.U68Dgo),
                        children: [
                            (0, r.jsx)(u.F, {
                                setting: p.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: I,
                                    onChange: f.RS.updateSetting,
                                    label: m.intl.string(m.t.U47N1t),
                                }),
                            }),
                            (0, r.jsx)(u.F, {
                                setting: p.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: v,
                                    description: m.intl.formatToPlainString(m.t.qjjvqK, { maxSize: 10 }),
                                    onChange: f.x4.updateSetting,
                                    label: m.intl.string(m.t.VP11Nj),
                                }),
                            }),
                            (0, r.jsx)(u.F, {
                                setting: p.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: y,
                                    description: m.intl.string(m.t.T0rbtL),
                                    onChange: f.H1.updateSetting,
                                    label: m.intl.string(m.t["w8j+yc"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(u.F, {
                    setting: p.s6.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: m.intl.string(m.t.PWZOn5),
                            children: (0, r.jsx)(u.F, {
                                setting: p.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: T,
                                    onChange: f.NA.updateSetting,
                                    label: m.intl.string(m.t.xX0ZTE),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(u.F, {
                    setting: p.s6.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: m.intl.string(m.t.sMOuub),
                            children: [
                                (0, r.jsx)(u.F, {
                                    setting: p.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: S,
                                        onChange: f.nc.updateSetting,
                                        label: m.intl.string(m.t.Iv24sr),
                                    }),
                                }),
                                (0, r.jsx)(u.F, {
                                    setting: p.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: O,
                                        description: l.Z.parse(m.intl.string(m.t["20dvub"])),
                                        onChange: f.ev.updateSetting,
                                        label: m.intl.string(m.t["79qal5"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(u.F, {
                    setting: p.s6.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: m.intl.string(m.t["6NtAuL"]),
                            children: (0, r.jsx)(u.F, {
                                setting: p.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: e,
                                    description: m.intl.string(m.t["/eVrj4"]),
                                    onChange: (e) => {
                                        d.default.track(h.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: C,
                                        }),
                                            f.fq.updateSetting(e);
                                    },
                                    label: m.intl.string(m.t["29xPVV"]),
                                }),
                            }),
                        }),
                    ],
                }),
                n &&
                    (0, r.jsxs)(u.F, {
                        setting: p.s6.CHAT_SOUNDMOJI,
                        children: [
                            (0, r.jsx)(a.izJ, {}),
                            (0, r.jsx)(a.C3N, {
                                label: m.intl.string(m.t.EHlAMT),
                                children: (0, r.jsx)(u.F, {
                                    setting: p.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: t,
                                        description: m.intl.string(m.t.hrSIhI),
                                        onChange: (e) => {
                                            d.default.track(h.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                                checked: e,
                                                location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                f.eR.updateSetting(e);
                                        },
                                        label: m.intl.string(m.t["CtYr+f"]),
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, r.jsxs)(u.F, {
                    setting: p.s6.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: m.intl.string(m.t.afR0pK),
                            children: [
                                (0, r.jsx)(u.F, {
                                    setting: p.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: g,
                                        onChange: (e) => {
                                            d.default.track(h.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                f.R$.updateSetting(e);
                                        },
                                        label: m.intl.string(m.t.AqGrEB),
                                    }),
                                }),
                                (0, r.jsx)(u.F, {
                                    setting: p.s6.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: A,
                                        description: m.intl.string(m.t.AaXigo),
                                        onChange: (e) => {
                                            f.HV.updateSetting(e);
                                        },
                                        label: m.intl.string(m.t.uXQ2xc),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(u.F, {
                    setting: p.s6.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: m.intl.string(m.t.B2panJ),
                            children: (0, r.jsx)(u.F, {
                                setting: p.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: b,
                                    onChange: f.vF.updateSetting,
                                    label: m.intl.string(m.t.AInv5u),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(u.F, {
                    setting: p.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(a.izJ, {}), N()],
                }),
            ],
        }),
    });
}
