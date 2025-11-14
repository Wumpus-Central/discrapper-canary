n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(454585),
    c = n(125900),
    u = n(945577),
    d = n(611004),
    f = n(315322),
    _ = n(921801),
    p = n(626135),
    h = n(695346),
    m = n(273313),
    g = n(726985),
    E = n(981631),
    b = n(388032);
function y() {
    var e;
    let t = h.fq.useSetting(),
        n = h.eR.useSetting(),
        y = (0, c.V2)({ location: "UserSettingsTextImages" }),
        O = h.R$.useSetting(),
        v = h.cC.useSetting(),
        I = h.vF.useSetting(),
        T = h.H1.useSetting(),
        S = h.ev.useSetting(),
        A = h.x4.useSetting(),
        C = h.RS.useSetting(),
        N = h.NA.useSetting(),
        R = h.nc.useSetting(),
        P = h.HV.useSetting(),
        D = (0, u.xy)({ location: "UserSettingsTextImages" }),
        w = null != (e = h.rR.useSetting()) ? e : D,
        { analyticsLocations: x } = (0, s.ZP)(o.Z.TEXT_AND_IMAGES),
        L = i.useCallback((e) => {
            let t = 1 === e;
            t ? d.Z.cleanUpPrivateChannelSearchState() : d.Z.cleanUpSearchState({ type: E.aib.DMS }),
                (0, f.yn)({
                    prevIsCrossDMSettingEnabled: h.rR.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: f.Ix.USER_SETTINGS,
                }),
                h.rR.updateSetting(t);
        }, []),
        M = () =>
            (0, r.jsx)(a.FXm, {
                label: b.intl.string(b.t.QgwmVz),
                description: b.intl.string(b.t.TYnRkS),
                options: [
                    {
                        name: b.intl.string(b.t["KFH/me"]),
                        value: E.A2N.ON_CLICK,
                    },
                    {
                        name: b.intl.string(b.t.K5VTBE),
                        value: E.A2N.IF_MODERATOR,
                    },
                    {
                        name: b.intl.string(b.t.Pe1RbL),
                        value: E.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => h.cC.updateSetting(e),
                value: v,
            });
    return (0, r.jsx)(m.Z, {
        title: b.intl.string(b.t["/VQax8"]),
        children: (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(_.F, {
                    setting: g.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(a.C3N, {
                        label: b.intl.string(b.t.U68Dgp),
                        children: [
                            (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: C,
                                    onChange: h.RS.updateSetting,
                                    label: b.intl.string(b.t.U47N1p),
                                }),
                            }),
                            (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: A,
                                    description: b.intl.formatToPlainString(b.t.qjjvqO, { maxSize: 10 }),
                                    onChange: h.x4.updateSetting,
                                    label: b.intl.string(b.t.VP11No),
                                }),
                            }),
                            (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: T,
                                    description: b.intl.string(b.t.T0rbtM),
                                    onChange: h.H1.updateSetting,
                                    label: b.intl.string(b.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(_.F, {
                    setting: g.s6.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: b.intl.string(b.t.PWZOn4),
                            children: (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: N,
                                    onChange: h.NA.updateSetting,
                                    label: b.intl.string(b.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(_.F, {
                    setting: g.s6.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: b.intl.string(b.t.sMOuuS),
                            children: [
                                (0, r.jsx)(_.F, {
                                    setting: g.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: R,
                                        onChange: h.nc.updateSetting,
                                        label: b.intl.string(b.t.Iv24sm),
                                    }),
                                }),
                                (0, r.jsx)(_.F, {
                                    setting: g.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: S,
                                        description: l.Z.parse(b.intl.string(b.t["20dvuQ"])),
                                        onChange: h.ev.updateSetting,
                                        label: b.intl.string(b.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(_.F, {
                    setting: g.s6.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: b.intl.string(b.t["6NtAuJ"]),
                            children: (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: t,
                                    description: b.intl.string(b.t["/eVrj8"]),
                                    onChange: (e) => {
                                        p.default.track(E.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: E.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: x,
                                        }),
                                            h.fq.updateSetting(e);
                                    },
                                    label: b.intl.string(b.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                y &&
                    (0, r.jsxs)(_.F, {
                        setting: g.s6.CHAT_SOUNDMOJI,
                        children: [
                            (0, r.jsx)(a.izJ, {}),
                            (0, r.jsx)(a.C3N, {
                                label: b.intl.string(b.t.EHlAMc),
                                children: (0, r.jsx)(_.F, {
                                    setting: g.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: n,
                                        description: b.intl.string(b.t.hrSIhN),
                                        onChange: (e) => {
                                            p.default.track(E.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                                checked: e,
                                                location: { section: E.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                h.eR.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t["CtYr+U"]),
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, r.jsxs)(_.F, {
                    setting: g.s6.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: b.intl.string(b.t.afR0pI),
                            children: [
                                (0, r.jsx)(_.F, {
                                    setting: g.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: O,
                                        onChange: (e) => {
                                            p.default.track(E.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: E.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                h.R$.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t.AqGrEI),
                                    }),
                                }),
                                (0, r.jsx)(_.F, {
                                    setting: g.s6.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: P,
                                        description: b.intl.string(b.t.AaXigo),
                                        onChange: (e) => {
                                            h.HV.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(_.F, {
                    setting: g.s6.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: b.intl.string(b.t.B2panI),
                            children: (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: I,
                                    onChange: h.vF.updateSetting,
                                    label: b.intl.string(b.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(_.F, {
                    setting: g.s6.MESSAGE_SEARCH,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(_.F, {
                            setting: g.s6.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, r.jsx)(a.FXm, {
                                label: b.intl.string(b.t["NxjN+q"]),
                                options: [
                                    {
                                        name: b.intl.string(b.t["t+fGsk"]),
                                        value: 0,
                                    },
                                    {
                                        name: b.intl.string(b.t.MwlEGN),
                                        value: 1,
                                    },
                                ],
                                onChange: L,
                                value: +!!w,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(_.F, {
                    setting: g.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(a.izJ, {}), M()],
                }),
            ],
        }),
    });
}
