n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(454585),
    c = n(945577),
    u = n(611004),
    d = n(315322),
    f = n(921801),
    p = n(626135),
    _ = n(695346),
    m = n(273313),
    h = n(726985),
    g = n(981631),
    E = n(388032);
function b() {
    var e;
    let t = _.fq.useSetting(),
        n = _.eR.useSetting(),
        b = _.R$.useSetting(),
        y = _.cC.useSetting(),
        O = _.vF.useSetting(),
        v = _.H1.useSetting(),
        S = _.ev.useSetting(),
        I = _.x4.useSetting(),
        T = _.RS.useSetting(),
        A = _.NA.useSetting(),
        C = _.nc.useSetting(),
        N = _.HV.useSetting(),
        P = (0, c.xy)({ location: "UserSettingsTextImages" }),
        R = null != (e = _.rR.useSetting()) ? e : P,
        { analyticsLocations: w } = (0, s.ZP)(o.Z.TEXT_AND_IMAGES),
        D = i.useCallback((e) => {
            let t = 1 === e;
            t ? u.Z.cleanUpPrivateChannelSearchState() : u.Z.cleanUpSearchState({ type: g.aib.DMS }),
                (0, d.yn)({
                    prevIsCrossDMSettingEnabled: _.rR.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: d.Ix.USER_SETTINGS,
                }),
                _.rR.updateSetting(t);
        }, []),
        x = () =>
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
                onChange: (e) => _.cC.updateSetting(e),
                value: y,
            });
    return (0, r.jsx)(m.Z, {
        title: E.intl.string(E.t["/VQax8"]),
        children: (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(f.F, {
                    setting: h.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(a.C3N, {
                        label: E.intl.string(E.t.U68Dgp),
                        children: [
                            (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: T,
                                    onChange: _.RS.updateSetting,
                                    label: E.intl.string(E.t.U47N1p),
                                }),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: I,
                                    description: E.intl.formatToPlainString(E.t.qjjvqO, { maxSize: 10 }),
                                    onChange: _.x4.updateSetting,
                                    label: E.intl.string(E.t.VP11No),
                                }),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: v,
                                    description: E.intl.string(E.t.T0rbtM),
                                    onChange: _.H1.updateSetting,
                                    label: E.intl.string(E.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: E.intl.string(E.t.PWZOn4),
                            children: (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: A,
                                    onChange: _.NA.updateSetting,
                                    label: E.intl.string(E.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: E.intl.string(E.t.sMOuuS),
                            children: [
                                (0, r.jsx)(f.F, {
                                    setting: h.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: C,
                                        onChange: _.nc.updateSetting,
                                        label: E.intl.string(E.t.Iv24sm),
                                    }),
                                }),
                                (0, r.jsx)(f.F, {
                                    setting: h.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: S,
                                        description: l.Z.parse(E.intl.string(E.t["20dvuQ"])),
                                        onChange: _.ev.updateSetting,
                                        label: E.intl.string(E.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: E.intl.string(E.t["6NtAuJ"]),
                            children: (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: t,
                                    description: E.intl.string(E.t["/eVrj8"]),
                                    onChange: (e) => {
                                        p.default.track(g.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: w,
                                        }),
                                            _.fq.updateSetting(e);
                                    },
                                    label: E.intl.string(E.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.CHAT_SOUNDMOJI,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: E.intl.string(E.t.EHlAMc),
                            children: (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: n,
                                    description: E.intl.string(E.t.hrSIhN),
                                    onChange: (e) => {
                                        p.default.track(g.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            _.eR.updateSetting(e);
                                    },
                                    label: E.intl.string(E.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsxs)(a.C3N, {
                            label: E.intl.string(E.t.afR0pI),
                            children: [
                                (0, r.jsx)(f.F, {
                                    setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: b,
                                        onChange: (e) => {
                                            p.default.track(g.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                _.R$.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t.AqGrEI),
                                    }),
                                }),
                                (0, r.jsx)(f.F, {
                                    setting: h.s6.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(a.rsf, {
                                        checked: N,
                                        description: E.intl.string(E.t.AaXigo),
                                        onChange: (e) => {
                                            _.HV.updateSetting(e);
                                        },
                                        label: E.intl.string(E.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(a.C3N, {
                            label: E.intl.string(E.t.B2panI),
                            children: (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(a.rsf, {
                                    checked: O,
                                    onChange: _.vF.updateSetting,
                                    label: E.intl.string(E.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.MESSAGE_SEARCH,
                    children: [
                        (0, r.jsx)(a.izJ, {}),
                        (0, r.jsx)(f.F, {
                            setting: h.s6.MESSAGE_SEARCH_ALL_DMS,
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
                                onChange: D,
                                value: +!!R,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: h.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(a.izJ, {}), x()],
                }),
            ],
        }),
    });
}
