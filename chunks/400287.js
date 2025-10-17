n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(454585),
    c = n(125900),
    u = n(611004),
    d = n(921801),
    f = n(626135),
    _ = n(695346),
    p = n(273313),
    h = n(726985),
    m = n(981631),
    g = n(125085),
    E = n(388032);
function b() {
    var e;
    let t = _.fq.useSetting(),
        n = _.eR.useSetting(),
        b = (0, c.V2)({ location: "UserSettingsTextImages" }),
        y = _.R$.useSetting(),
        O = _.cC.useSetting(),
        v = _.vF.useSetting(),
        I = _.H1.useSetting(),
        T = _.ev.useSetting(),
        S = _.x4.useSetting(),
        A = _.RS.useSetting(),
        C = _.NA.useSetting(),
        N = _.nc.useSetting(),
        R = _.HV.useSetting(),
        P = null != (e = _.rR.useSetting()) ? e : g.K,
        { analyticsLocations: w } = (0, s.ZP)(o.Z.TEXT_AND_IMAGES),
        D = i.useCallback((e) => {
            let t = 1 === e;
            t ? u.Z.cleanUpPrivateChannelSearchState() : u.Z.cleanUpSearchState({ type: m.aib.DMS }),
                _.rR.updateSetting(t);
        }, []),
        L = () =>
            (0, r.jsx)(a.FXm, {
                label: E.intl.string(E.t.QgwmV1),
                description: E.intl.string(E.t.TYnRkZ),
                options: [
                    {
                        name: E.intl.string(E.t["KFH/mZ"]),
                        value: m.A2N.ON_CLICK,
                    },
                    {
                        name: E.intl.string(E.t.K5VTBA),
                        value: m.A2N.IF_MODERATOR,
                    },
                    {
                        name: E.intl.string(E.t.Pe1RbG),
                        value: m.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => _.cC.updateSetting(e),
                value: O,
            });
    return (0, r.jsx)(p.Z, {
        title: E.intl.string(E.t["/VQax8"]),
        children: (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(d.F, {
                    setting: h.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(a.C3N, {
                        label: E.intl.string(E.t.U68Dgo),
                        children: [
                            (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: A,
                                    onChange: _.RS.updateSetting,
                                    label: E.intl.string(E.t.U47N1t),
                                }),
                            }),
                            (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: S,
                                    description: E.intl.formatToPlainString(E.t.qjjvqK, { maxSize: 10 }),
                                    onChange: _.x4.updateSetting,
                                    label: E.intl.string(E.t.VP11Nj),
                                }),
                            }),
                            (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: I,
                                    description: E.intl.string(E.t.T0rbtL),
                                    onChange: _.H1.updateSetting,
                                    label: E.intl.string(E.t["w8j+yc"]),
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
                            label: E.intl.string(E.t.PWZOn5),
                            children: (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: C,
                                    onChange: _.NA.updateSetting,
                                    label: E.intl.string(E.t.xX0ZTE),
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
                            label: E.intl.string(E.t.sMOuub),
                            children: [
                                (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: N,
                                        onChange: _.nc.updateSetting,
                                        label: E.intl.string(E.t.Iv24sr),
                                    }),
                                }),
                                (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: T,
                                        description: l.Z.parse(E.intl.string(E.t["20dvub"])),
                                        onChange: _.ev.updateSetting,
                                        label: E.intl.string(E.t["79qal5"]),
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
                            label: E.intl.string(E.t["6NtAuL"]),
                            children: (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: t,
                                    description: E.intl.string(E.t["/eVrj4"]),
                                    onChange: (e) => {
                                        f.default.track(m.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: w,
                                        }),
                                            _.fq.updateSetting(e);
                                    },
                                    label: E.intl.string(E.t["29xPVV"]),
                                }),
                            }),
                        }),
                    ],
                }),
                b &&
                    (0, r.jsxs)(d.F, {
                        setting: h.s6.CHAT_SOUNDMOJI,
                        children: [
                            (0, r.jsx)(a.izJ, {}),
                            (0, r.jsx)(a.C3N, {
                                label: E.intl.string(E.t.EHlAMT),
                                children: (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: n,
                                        description: E.intl.string(E.t.hrSIhI),
                                        onChange: (e) => {
                                            f.default.track(m.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                                checked: e,
                                                location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                _.eR.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t["CtYr+f"]),
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
                            label: E.intl.string(E.t.afR0pK),
                            children: [
                                (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: y,
                                        onChange: (e) => {
                                            f.default.track(m.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                _.R$.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t.AqGrEB),
                                    }),
                                }),
                                (0, r.jsx)(d.F, {
                                    setting: h.s6.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: R,
                                        description: E.intl.string(E.t.AaXigo),
                                        onChange: (e) => {
                                            _.HV.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t.uXQ2xc),
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
                            label: E.intl.string(E.t.B2panJ),
                            children: (0, r.jsx)(d.F, {
                                setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: v,
                                    onChange: _.vF.updateSetting,
                                    label: E.intl.string(E.t.AInv5u),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.MESSAGE_SEARCH,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(d.F, {
                            setting: h.s6.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, r.jsx)(a.FXm, {
                                label: E.intl.string(E.t["NxjN+v"]),
                                options: [
                                    {
                                        name: E.intl.string(E.t["t+fGsr"]),
                                        value: 0,
                                    },
                                    {
                                        name: E.intl.string(E.t.MwlEGB),
                                        value: 1,
                                    },
                                ],
                                onChange: D,
                                value: +!!P,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: h.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(a.izJ, {}), L()],
                }),
            ],
        }),
    });
}
