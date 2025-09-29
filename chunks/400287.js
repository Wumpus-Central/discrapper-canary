n.d(t, { Z: () => y });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(538534),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(454585),
    d = n(125900),
    f = n(921801),
    _ = n(626135),
    p = n(695346),
    h = n(273313),
    m = n(726985),
    g = n(981631),
    E = n(388032),
    b = n(10198);
function y() {
    let e = p.fq.useSetting(),
        t = p.eR.useSetting(),
        n = (0, d.V2)({ location: "UserSettingsTextImages" }),
        i = p.R$.useSetting(),
        y = p.cC.useSetting(),
        O = p.vF.useSetting(),
        v = p.H1.useSetting(),
        I = p.ev.useSetting(),
        T = p.x4.useSetting(),
        S = p.RS.useSetting(),
        A = p.NA.useSetting(),
        C = p.nc.useSetting(),
        { analyticsLocations: N } = (0, c.ZP)(l.Z.TEXT_AND_IMAGES),
        R = () =>
            (0, r.jsx)(o.E, {
                label: E.intl.string(E.t.QgwmV1),
                description: E.intl.string(E.t.TYnRkZ),
                options: [
                    {
                        name: E.intl.string(E.t["KFH/mZ"]),
                        value: g.A2N.ON_CLICK,
                    },
                    {
                        name: E.intl.string(E.t.K5VTBA),
                        value: g.A2N.IF_MODERATOR,
                    },
                    {
                        name: E.intl.string(E.t.Pe1RbG),
                        value: g.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => p.cC.updateSetting(e),
                value: y,
            });
    return (0, r.jsxs)(h.Z, {
        title: E.intl.string(E.t["/VQax8"]),
        children: [
            (0, r.jsxs)(f.F, {
                setting: m.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: b.marginBottom8,
                        children: E.intl.string(E.t.U68Dgo),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: m.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(b.marginTop8, b.marginBottom20),
                            value: S,
                            onChange: p.RS.updateSetting,
                            children: E.intl.string(E.t.U47N1t),
                        }),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: m.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(b.marginTop8, b.marginBottom20),
                            value: T,
                            note: E.intl.formatToPlainString(E.t.qjjvqK, { maxSize: 10 }),
                            onChange: p.x4.updateSetting,
                            children: E.intl.string(E.t.VP11Nj),
                        }),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: m.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(b.marginTop8, b.marginBottom40),
                            value: v,
                            note: E.intl.string(E.t.T0rbtL),
                            onChange: p.H1.updateSetting,
                            children: E.intl.string(E.t["w8j+yc"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(f.F, {
                setting: m.s6.CHAT_EMBEDS,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: b.marginBottom8,
                        children: E.intl.string(E.t.PWZOn5),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: m.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(b.marginTop8, b.marginBottom40),
                            value: A,
                            onChange: p.NA.updateSetting,
                            children: E.intl.string(E.t.xX0ZTE),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(f.F, {
                setting: m.s6.CHAT_EMOJI,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: b.marginBottom8,
                        children: E.intl.string(E.t.sMOuub),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: m.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(b.marginTop8, b.marginBottom20),
                            value: C,
                            onChange: p.nc.updateSetting,
                            children: E.intl.string(E.t.Iv24sr),
                        }),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: m.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: b.marginBottom40,
                            value: I,
                            note: u.Z.parse(E.intl.string(E.t["20dvub"])),
                            onChange: p.ev.updateSetting,
                            children: E.intl.string(E.t["79qal5"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(f.F, {
                setting: m.s6.CHAT_STICKERS,
                children: (0, r.jsxs)(s.hjN, {
                    className: b.marginBottom8,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: b.marginBottom8,
                            children: E.intl.string(E.t["6NtAuL"]),
                        }),
                        (0, r.jsx)(f.F, {
                            setting: m.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, r.jsx)(s.j7V, {
                                className: b.marginBottom40,
                                value: e,
                                note: E.intl.string(E.t["/eVrj4"]),
                                onChange: (e) => {
                                    _.default.track(g.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: N,
                                    }),
                                        p.fq.updateSetting(e);
                                },
                                children: E.intl.string(E.t["29xPVV"]),
                            }),
                        }),
                    ],
                }),
            }),
            n &&
                (0, r.jsx)(f.F, {
                    setting: m.s6.CHAT_SOUNDMOJI,
                    children: (0, r.jsxs)(s.hjN, {
                        className: b.marginBottom8,
                        children: [
                            (0, r.jsx)(s.vwX, {
                                className: b.marginBottom8,
                                children: E.intl.string(E.t.EHlAMT),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: m.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(s.j7V, {
                                    className: b.marginBottom40,
                                    value: t,
                                    note: E.intl.string(E.t.hrSIhI),
                                    onChange: (e) => {
                                        _.default.track(g.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            p.eR.updateSetting(e);
                                    },
                                    children: E.intl.string(E.t["CtYr+f"]),
                                }),
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)(f.F, {
                setting: m.s6.CHAT_TEXT_BOX,
                children: (0, r.jsxs)(s.hjN, {
                    className: b.marginBottom8,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: b.marginBottom8,
                            children: E.intl.string(E.t.afR0pK),
                        }),
                        (0, r.jsx)(f.F, {
                            setting: m.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, r.jsx)(s.j7V, {
                                className: a()(b.marginTop8, b.marginBottom40),
                                value: i,
                                onChange: (e) => {
                                    _.default.track(g.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: g.jXE.SETTINGS_TEXT_AND_IMAGES },
                                    }),
                                        p.R$.updateSetting(e);
                                },
                                children: E.intl.string(E.t.AqGrEB),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(f.F, {
                setting: m.s6.CHAT_THREADS,
                children: (0, r.jsxs)(s.hjN, {
                    className: b.marginBottom40,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: b.marginBottom8,
                            children: E.intl.string(E.t.B2panJ),
                        }),
                        (0, r.jsx)(f.F, {
                            setting: m.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, r.jsx)(s.j7V, {
                                className: b.marginTop8,
                                value: O,
                                onChange: p.vF.updateSetting,
                                children: E.intl.string(E.t.AInv5u),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(f.F, {
                setting: m.s6.CHAT_SPOILERS,
                children: R(),
            }),
        ],
    });
}
