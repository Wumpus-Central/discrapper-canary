n.d(t, { Z: () => E });
var r = n(951288),
    i = n(538534),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(454585),
    c = n(657871),
    u = n(125900),
    d = n(921801),
    f = n(626135),
    _ = n(695346),
    p = n(273313),
    h = n(726985),
    m = n(981631),
    g = n(388032);
function E() {
    let e = _.fq.useSetting(),
        t = _.eR.useSetting(),
        n = (0, u.V2)({ location: "UserSettingsTextImages" }),
        E = _.R$.useSetting(),
        b = _.cC.useSetting(),
        y = _.vF.useSetting(),
        O = _.H1.useSetting(),
        v = _.ev.useSetting(),
        I = _.x4.useSetting(),
        T = _.RS.useSetting(),
        S = _.NA.useSetting(),
        A = _.nc.useSetting(),
        C = _.HV.useSetting(),
        { enabled: N } = (0, c.zM)("UserSettingsTextImages", { autoTrackExposure: !1 }),
        { analyticsLocations: R } = (0, s.ZP)(o.Z.TEXT_AND_IMAGES),
        P = () =>
            (0, r.jsx)(i.E, {
                label: g.intl.string(g.t.QgwmV1),
                description: g.intl.string(g.t.TYnRkZ),
                options: [
                    {
                        name: g.intl.string(g.t["KFH/mZ"]),
                        value: m.A2N.ON_CLICK,
                    },
                    {
                        name: g.intl.string(g.t.K5VTBA),
                        value: m.A2N.IF_MODERATOR,
                    },
                    {
                        name: g.intl.string(g.t.Pe1RbG),
                        value: m.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => _.cC.updateSetting(e),
                value: b,
            });
    return (0, r.jsx)(p.Z, {
        title: g.intl.string(g.t["/VQax8"]),
        children: (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(d.F, {
                    setting: h.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(a.C3N, {
                        label: g.intl.string(g.t.U68Dgo),
                        children: [
                            (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: T,
                                    onChange: _.RS.updateSetting,
                                    label: g.intl.string(g.t.U47N1t),
                                }),
                            }),
                            (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: I,
                                    description: g.intl.formatToPlainString(g.t.qjjvqK, { maxSize: 10 }),
                                    onChange: _.x4.updateSetting,
                                    label: g.intl.string(g.t.VP11Nj),
                                }),
                            }),
                            (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: O,
                                    description: g.intl.string(g.t.T0rbtL),
                                    onChange: _.H1.updateSetting,
                                    label: g.intl.string(g.t["w8j+yc"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: g.intl.string(g.t.PWZOn5),
                            children: (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: S,
                                    onChange: _.NA.updateSetting,
                                    label: g.intl.string(g.t.xX0ZTE),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: g.intl.string(g.t.sMOuub),
                            children: [
                                (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: A,
                                        onChange: _.nc.updateSetting,
                                        label: g.intl.string(g.t.Iv24sr),
                                    }),
                                }),
                                (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: v,
                                        description: l.Z.parse(g.intl.string(g.t["20dvub"])),
                                        onChange: _.ev.updateSetting,
                                        label: g.intl.string(g.t["79qal5"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: g.intl.string(g.t["6NtAuL"]),
                            children: (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: e,
                                    description: g.intl.string(g.t["/eVrj4"]),
                                    onChange: (e) => {
                                        f.default.track(m.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: R,
                                        }),
                                            _.fq.updateSetting(e);
                                    },
                                    label: g.intl.string(g.t["29xPVV"]),
                                }),
                            }),
                        }),
                    ],
                }),
                n &&
                    (0, r.jsxs)(d.F, {
                        setting: h.s6.CHAT_SOUNDMOJI,
                        children: [
                            (0, r.jsx)(a.izJ, {}),
                            (0, r.jsx)(a.C3N, {
                                label: g.intl.string(g.t.EHlAMT),
                                children: (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: t,
                                        description: g.intl.string(g.t.hrSIhI),
                                        onChange: (e) => {
                                            f.default.track(m.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                                checked: e,
                                                location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                _.eR.updateSetting(e);
                                        },
                                        label: g.intl.string(g.t["CtYr+f"]),
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: g.intl.string(g.t.afR0pK),
                            children: [
                                (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: E,
                                        onChange: (e) => {
                                            f.default.track(m.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                _.R$.updateSetting(e);
                                        },
                                        label: g.intl.string(g.t.AqGrEB),
                                    }),
                                }),
                                N &&
                                    (0, r.jsx)(d.F, {
                                        setting: h.s6.CHAT_MENTION_SUGGESTIONS,
                                        children: (0, r.jsx)(a.rsf, {
                                            checked: C,
                                            description: g.intl.string(g.t.AaXigo),
                                            onChange: (e) => {
                                                _.HV.updateSetting(e);
                                            },
                                            label: g.intl.string(g.t.uXQ2xc),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: g.intl.string(g.t.B2panJ),
                            children: (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: y,
                                    onChange: _.vF.updateSetting,
                                    label: g.intl.string(g.t.AInv5u),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(a.izJ, {}), P()],
                }),
            ],
        }),
    });
}
