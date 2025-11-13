n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(454585),
    c = n(125900),
    u = n(945577),
    d = n(611004),
    f = n(921801),
    _ = n(626135),
    p = n(695346),
    h = n(273313),
    m = n(726985),
    g = n(981631),
    E = n(388032);
function b() {
    var e;
    let t = p.fq.useSetting(),
        n = p.eR.useSetting(),
        b = (0, c.V2)({ location: "UserSettingsTextImages" }),
        y = p.R$.useSetting(),
        O = p.cC.useSetting(),
        v = p.vF.useSetting(),
        I = p.H1.useSetting(),
        T = p.ev.useSetting(),
        S = p.x4.useSetting(),
        A = p.RS.useSetting(),
        C = p.NA.useSetting(),
        N = p.nc.useSetting(),
        R = p.HV.useSetting(),
        P = (0, u.xy)({ location: "UserSettingsTextImages" }),
        D = null != (e = p.rR.useSetting()) ? e : P,
        { analyticsLocations: w } = (0, s.ZP)(o.Z.TEXT_AND_IMAGES),
        x = i.useCallback((e) => {
            let t = 1 === e;
            t ? d.Z.cleanUpPrivateChannelSearchState() : d.Z.cleanUpSearchState({ type: g.aib.DMS }),
                p.rR.updateSetting(t);
        }, []),
        L = () =>
            (0, r.jsx)(a.FXm, {
                label: E.intl.string(E.t.QgwmVz),
                description: E.intl.string(E.t.TYnRkS),
                options: [
                    {
                        name: E.intl.string(E.t["KFH/me"]),
                        value: g.A2N.ON_CLICK,
                    },
                    {
                        name: E.intl.string(E.t.K5VTBE),
                        value: g.A2N.IF_MODERATOR,
                    },
                    {
                        name: E.intl.string(E.t.Pe1RbL),
                        value: g.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => p.cC.updateSetting(e),
                value: O,
            });
    return (0, r.jsx)(h.Z, {
        title: E.intl.string(E.t["/VQax8"]),
        children: (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(f.F, {
                    setting: m.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(a.C3N, {
                        label: E.intl.string(E.t.U68Dgp),
                        children: [
                            (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: A,
                                    onChange: p.RS.updateSetting,
                                    label: E.intl.string(E.t.U47N1p),
                                }),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: S,
                                    description: E.intl.formatToPlainString(E.t.qjjvqO, { maxSize: 10 }),
                                    onChange: p.x4.updateSetting,
                                    label: E.intl.string(E.t.VP11No),
                                }),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: I,
                                    description: E.intl.string(E.t.T0rbtM),
                                    onChange: p.H1.updateSetting,
                                    label: E.intl.string(E.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: E.intl.string(E.t.PWZOn4),
                            children: (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: C,
                                    onChange: p.NA.updateSetting,
                                    label: E.intl.string(E.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: E.intl.string(E.t.sMOuuS),
                            children: [
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: N,
                                        onChange: p.nc.updateSetting,
                                        label: E.intl.string(E.t.Iv24sm),
                                    }),
                                }),
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: T,
                                        description: l.Z.parse(E.intl.string(E.t["20dvuQ"])),
                                        onChange: p.ev.updateSetting,
                                        label: E.intl.string(E.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: E.intl.string(E.t["6NtAuJ"]),
                            children: (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: t,
                                    description: E.intl.string(E.t["/eVrj8"]),
                                    onChange: (e) => {
                                        _.default.track(g.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: w,
                                        }),
                                            p.fq.updateSetting(e);
                                    },
                                    label: E.intl.string(E.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                b &&
                    (0, r.jsxs)(f.F, {
                        setting: m.s6.CHAT_SOUNDMOJI,
                        children: [
                            (0, r.jsx)(a.izJ, {}),
                            (0, r.jsx)(a.C3N, {
                                label: E.intl.string(E.t.EHlAMc),
                                children: (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: n,
                                        description: E.intl.string(E.t.hrSIhN),
                                        onChange: (e) => {
                                            _.default.track(g.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                                checked: e,
                                                location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                p.eR.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t["CtYr+U"]),
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: E.intl.string(E.t.afR0pI),
                            children: [
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: y,
                                        onChange: (e) => {
                                            _.default.track(g.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                p.R$.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t.AqGrEI),
                                    }),
                                }),
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: R,
                                        description: E.intl.string(E.t.AaXigo),
                                        onChange: (e) => {
                                            p.HV.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: E.intl.string(E.t.B2panI),
                            children: (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: v,
                                    onChange: p.vF.updateSetting,
                                    label: E.intl.string(E.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.MESSAGE_SEARCH,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(f.F, {
                            setting: m.s6.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, r.jsx)(a.FXm, {
                                label: E.intl.string(E.t["NxjN+q"]),
                                options: [
                                    {
                                        name: E.intl.string(E.t["t+fGsk"]),
                                        value: 0,
                                    },
                                    {
                                        name: E.intl.string(E.t.MwlEGN),
                                        value: 1,
                                    },
                                ],
                                onChange: x,
                                value: +!!D,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(a.izJ, {}), L()],
                }),
            ],
        }),
    });
}
