n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    a = n(538534),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(454585),
    u = n(125900),
    d = n(611004),
    f = n(921801),
    _ = n(626135),
    p = n(695346),
    h = n(273313),
    m = n(726985),
    g = n(981631),
    E = n(125085),
    b = n(388032);
function y() {
    var e;
    let t = p.fq.useSetting(),
        n = p.eR.useSetting(),
        y = (0, u.V2)({ location: "UserSettingsTextImages" }),
        O = p.R$.useSetting(),
        v = p.cC.useSetting(),
        I = p.vF.useSetting(),
        T = p.H1.useSetting(),
        S = p.ev.useSetting(),
        A = p.x4.useSetting(),
        C = p.RS.useSetting(),
        N = p.NA.useSetting(),
        R = p.nc.useSetting(),
        P = p.HV.useSetting(),
        w = null != (e = p.rR.useSetting()) ? e : E.K,
        { analyticsLocations: D } = (0, l.ZP)(s.Z.TEXT_AND_IMAGES),
        L = i.useCallback((e) => {
            let t = 1 === e;
            t ? d.Z.cleanUpPrivateChannelSearchState() : d.Z.cleanUpSearchState({ type: g.aib.DMS }),
                p.rR.updateSetting(t);
        }, []),
        x = () =>
            (0, r.jsx)(a.E, {
                label: b.intl.string(b.t.QgwmV1),
                description: b.intl.string(b.t.TYnRkZ),
                options: [
                    {
                        name: b.intl.string(b.t["KFH/mZ"]),
                        value: g.A2N.ON_CLICK,
                    },
                    {
                        name: b.intl.string(b.t.K5VTBA),
                        value: g.A2N.IF_MODERATOR,
                    },
                    {
                        name: b.intl.string(b.t.Pe1RbG),
                        value: g.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => p.cC.updateSetting(e),
                value: v,
            });
    return (0, r.jsx)(h.Z, {
        title: b.intl.string(b.t["/VQax8"]),
        children: (0, r.jsxs)(o.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(f.F, {
                    setting: m.s6.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(o.C3N, {
                        label: b.intl.string(b.t.U68Dgo),
                        children: [
                            (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(o.rsf, {
                                    checked: C,
                                    onChange: p.RS.updateSetting,
                                    label: b.intl.string(b.t.U47N1t),
                                }),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(o.rsf, {
                                    checked: A,
                                    description: b.intl.formatToPlainString(b.t.qjjvqK, { maxSize: 10 }),
                                    onChange: p.x4.updateSetting,
                                    label: b.intl.string(b.t.VP11Nj),
                                }),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(o.rsf, {
                                    checked: T,
                                    description: b.intl.string(b.t.T0rbtL),
                                    onChange: p.H1.updateSetting,
                                    label: b.intl.string(b.t["w8j+yc"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(o.izJ, {}),
                        (0, r.jsx)(o.C3N, {
                            label: b.intl.string(b.t.PWZOn5),
                            children: (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(o.rsf, {
                                    checked: N,
                                    onChange: p.NA.updateSetting,
                                    label: b.intl.string(b.t.xX0ZTE),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(o.izJ, {}),
                        (0, r.jsxs)(o.C3N, {
                            label: b.intl.string(b.t.sMOuub),
                            children: [
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(o.rsf, {
                                        checked: R,
                                        onChange: p.nc.updateSetting,
                                        label: b.intl.string(b.t.Iv24sr),
                                    }),
                                }),
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(o.rsf, {
                                        checked: S,
                                        description: c.Z.parse(b.intl.string(b.t["20dvub"])),
                                        onChange: p.ev.updateSetting,
                                        label: b.intl.string(b.t["79qal5"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(o.izJ, {}),
                        (0, r.jsx)(o.C3N, {
                            label: b.intl.string(b.t["6NtAuL"]),
                            children: (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(o.rsf, {
                                    checked: t,
                                    description: b.intl.string(b.t["/eVrj4"]),
                                    onChange: (e) => {
                                        _.default.track(g.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: D,
                                        }),
                                            p.fq.updateSetting(e);
                                    },
                                    label: b.intl.string(b.t["29xPVV"]),
                                }),
                            }),
                        }),
                    ],
                }),
                y &&
                    (0, r.jsxs)(f.F, {
                        setting: m.s6.CHAT_SOUNDMOJI,
                        children: [
                            (0, r.jsx)(o.izJ, {}),
                            (0, r.jsx)(o.C3N, {
                                label: b.intl.string(b.t.EHlAMT),
                                children: (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                    children: (0, r.jsx)(o.rsf, {
                                        checked: n,
                                        description: b.intl.string(b.t.hrSIhI),
                                        onChange: (e) => {
                                            _.default.track(g.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                                checked: e,
                                                location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                p.eR.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t["CtYr+f"]),
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(o.izJ, {}),
                        (0, r.jsxs)(o.C3N, {
                            label: b.intl.string(b.t.afR0pK),
                            children: [
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(o.rsf, {
                                        checked: O,
                                        onChange: (e) => {
                                            _.default.track(g.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                p.R$.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t.AqGrEB),
                                    }),
                                }),
                                (0, r.jsx)(f.F, {
                                    setting: m.s6.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(o.rsf, {
                                        checked: P,
                                        description: b.intl.string(b.t.AaXigo),
                                        onChange: (e) => {
                                            p.HV.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t.uXQ2xc),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(o.izJ, {}),
                        (0, r.jsx)(o.C3N, {
                            label: b.intl.string(b.t.B2panJ),
                            children: (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(o.rsf, {
                                    checked: I,
                                    onChange: p.vF.updateSetting,
                                    label: b.intl.string(b.t.AInv5u),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.MESSAGE_SEARCH,
                    children: [
                        (0, r.jsx)(o.izJ, {}),
                        (0, r.jsx)(f.F, {
                            setting: m.s6.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, r.jsx)(o.C3N, {
                                label: b.intl.string(b.t.VYODPD),
                                children: (0, r.jsx)(a.E, {
                                    label: b.intl.string(b.t["NxjN+v"]),
                                    options: [
                                        {
                                            name: b.intl.string(b.t["t+fGsr"]),
                                            value: 0,
                                        },
                                        {
                                            name: b.intl.string(b.t.MwlEGB),
                                            value: 1,
                                        },
                                    ],
                                    onChange: L,
                                    value: +!!w,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(f.F, {
                    setting: m.s6.CHAT_SPOILERS,
                    children: [(0, r.jsx)(o.izJ, {}), x()],
                }),
            ],
        }),
    });
}
