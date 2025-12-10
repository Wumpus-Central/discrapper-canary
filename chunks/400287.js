n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(454585),
    c = n(611004),
    u = n(315322),
    d = n(921801),
    f = n(626135),
    p = n(695346),
    _ = n(273313),
    m = n(726985),
    h = n(981631),
    g = n(388032);
function E() {
    let e = p.fq.useSetting(),
        t = p.eR.useSetting(),
        n = p.R$.useSetting(),
        E = p.cC.useSetting(),
        b = p.vF.useSetting(),
        y = p.H1.useSetting(),
        O = p.ev.useSetting(),
        v = p.x4.useSetting(),
        S = p.RS.useSetting(),
        I = p.NA.useSetting(),
        T = p.nc.useSetting(),
        C = p.HV.useSetting(),
        A = p.rR.useSetting(),
        { analyticsLocations: N } = (0, s.ZP)(o.Z.TEXT_AND_IMAGES),
        P = i.useCallback((e) => {
            let t = 1 === e;
            t ? c.Z.cleanUpPrivateChannelSearchState() : c.Z.cleanUpSearchState({ type: h.aib.DMS }),
                (0, u.yn)({
                    prevIsCrossDMSettingEnabled: p.rR.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: u.Ix.USER_SETTINGS,
                }),
                p.rR.updateSetting(t);
        }, []),
        R = () =>
            (0, r.jsx)(a.FXm, {
                label: g.intl.string(g.t.QgwmVz),
                description: g.intl.string(g.t.TYnRkS),
                options: [
                    {
                        name: g.intl.string(g.t["KFH/me"]),
                        value: h.A2N.ON_CLICK,
                    },
                    {
                        name: g.intl.string(g.t.K5VTBE),
                        value: h.A2N.IF_MODERATOR,
                    },
                    {
                        name: g.intl.string(g.t.Pe1RbL),
                        value: h.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => p.cC.updateSetting(e),
                value: E,
            });
    return (0, r.jsx)(_.Z, {
        title: g.intl.string(g.t["/VQax8"]),
        children: (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(d.F, {
                    setting: m.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(a.C3N, {
                        label: g.intl.string(g.t.U68Dgp),
                        children: [
                            (0, r.jsx)(d.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: S,
                                    onChange: p.RS.updateSetting,
                                    label: g.intl.string(g.t.U47N1p),
                                }),
                            }),
                            (0, r.jsx)(d.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: v,
                                    description: g.intl.formatToPlainString(g.t.qjjvqO, { maxSize: 10 }),
                                    onChange: p.x4.updateSetting,
                                    label: g.intl.string(g.t.VP11No),
                                }),
                            }),
                            (0, r.jsx)(d.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: y,
                                    description: g.intl.string(g.t.T0rbtM),
                                    onChange: p.H1.updateSetting,
                                    label: g.intl.string(g.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: g.intl.string(g.t.PWZOn4),
                            children: (0, r.jsx)(d.F, {
                                setting: m.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: I,
                                    onChange: p.NA.updateSetting,
                                    label: g.intl.string(g.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: g.intl.string(g.t.sMOuuS),
                            children: [
                                (0, r.jsx)(d.F, {
                                    setting: m.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: T,
                                        onChange: p.nc.updateSetting,
                                        label: g.intl.string(g.t.Iv24sm),
                                    }),
                                }),
                                (0, r.jsx)(d.F, {
                                    setting: m.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: O,
                                        description: l.Z.parse(g.intl.string(g.t["20dvuQ"])),
                                        onChange: p.ev.updateSetting,
                                        label: g.intl.string(g.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: g.intl.string(g.t["6NtAuJ"]),
                            children: (0, r.jsx)(d.F, {
                                setting: m.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: e,
                                    description: g.intl.string(g.t["/eVrj8"]),
                                    onChange: (e) => {
                                        f.default.track(h.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: N,
                                        }),
                                            p.fq.updateSetting(e);
                                    },
                                    label: g.intl.string(g.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.CHAT_SOUNDMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: g.intl.string(g.t.EHlAMc),
                            children: (0, r.jsx)(d.F, {
                                setting: m.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: t,
                                    description: g.intl.string(g.t.hrSIhN),
                                    onChange: (e) => {
                                        f.default.track(h.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            p.eR.updateSetting(e);
                                    },
                                    label: g.intl.string(g.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: g.intl.string(g.t.afR0pI),
                            children: [
                                (0, r.jsx)(d.F, {
                                    setting: m.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: n,
                                        onChange: (e) => {
                                            f.default.track(h.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                p.R$.updateSetting(e);
                                        },
                                        label: g.intl.string(g.t.AqGrEI),
                                    }),
                                }),
                                (0, r.jsx)(d.F, {
                                    setting: m.s6.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: C,
                                        description: g.intl.string(g.t.AaXigo),
                                        onChange: (e) => {
                                            p.HV.updateSetting(e);
                                        },
                                        label: g.intl.string(g.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: g.intl.string(g.t.B2panI),
                            children: (0, r.jsx)(d.F, {
                                setting: m.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: b,
                                    onChange: p.vF.updateSetting,
                                    label: g.intl.string(g.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.MESSAGE_SEARCH,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(d.F, {
                            setting: m.s6.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, r.jsx)(a.FXm, {
                                label: g.intl.string(g.t["NxjN+q"]),
                                options: [
                                    {
                                        name: g.intl.string(g.t["t+fGsk"]),
                                        value: 0,
                                    },
                                    {
                                        name: g.intl.string(g.t.MwlEGN),
                                        value: 1,
                                    },
                                ],
                                onChange: P,
                                value: +!!A,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.F, {
                    setting: m.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(a.izJ, {}), R()],
                }),
            ],
        }),
    });
}
