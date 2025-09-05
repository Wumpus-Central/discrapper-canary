n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(454585),
    d = n(125900),
    f = n(921801),
    _ = n(626135),
    p = n(695346),
    h = n(726985),
    m = n(981631),
    g = n(388032),
    E = n(10198);
function b() {
    let e = p.fq.useSetting(),
        t = p.eR.useSetting(),
        n = (0, d.V2)({ location: "UserSettingsTextImages" }),
        i = p.R$.useSetting(),
        b = p.cC.useSetting(),
        y = p.vF.useSetting(),
        O = p.H1.useSetting(),
        v = p.ev.useSetting(),
        I = p.x4.useSetting(),
        T = p.RS.useSetting(),
        S = p.NA.useSetting(),
        A = p.nc.useSetting(),
        { analyticsLocations: C } = (0, c.ZP)(l.Z.TEXT_AND_IMAGES),
        N = () =>
            (0, r.jsxs)(s.xJW, {
                title: g.intl.string(g.t.QgwmV1),
                children: [
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: E.marginBottom8,
                        children: g.intl.string(g.t.TYnRkZ),
                    }),
                    (0, r.jsx)(o.Gu, {
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
                        onChange: (e) => p.cC.updateSetting(e.value),
                        value: b,
                    }),
                ],
            });
    return (0, r.jsxs)(s.hjN, {
        tag: s.RB0.H1,
        title: g.intl.string(g.t["/VQax8"]),
        children: [
            (0, r.jsxs)(f.F, {
                setting: h.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: E.marginBottom8,
                        children: g.intl.string(g.t.U68Dgo),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(E.marginTop8, E.marginBottom20),
                            value: T,
                            onChange: p.RS.updateSetting,
                            children: g.intl.string(g.t.U47N1t),
                        }),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(E.marginTop8, E.marginBottom20),
                            value: I,
                            note: g.intl.formatToPlainString(g.t.qjjvqK, { maxSize: 10 }),
                            onChange: p.x4.updateSetting,
                            children: g.intl.string(g.t.VP11Nj),
                        }),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(E.marginTop8, E.marginBottom40),
                            value: O,
                            note: g.intl.string(g.t.T0rbtL),
                            onChange: p.H1.updateSetting,
                            children: g.intl.string(g.t["w8j+yc"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(f.F, {
                setting: h.s6.CHAT_EMBEDS,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: E.marginBottom8,
                        children: g.intl.string(g.t.PWZOn5),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(E.marginTop8, E.marginBottom40),
                            value: S,
                            onChange: p.NA.updateSetting,
                            children: g.intl.string(g.t.xX0ZTE),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(f.F, {
                setting: h.s6.CHAT_EMOJI,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: E.marginBottom8,
                        children: g.intl.string(g.t.sMOuub),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: h.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(E.marginTop8, E.marginBottom20),
                            value: A,
                            onChange: p.nc.updateSetting,
                            children: g.intl.string(g.t.Iv24sr),
                        }),
                    }),
                    (0, r.jsx)(f.F, {
                        setting: h.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: E.marginBottom40,
                            value: v,
                            note: u.Z.parse(g.intl.string(g.t["20dvub"])),
                            onChange: p.ev.updateSetting,
                            children: g.intl.string(g.t["79qal5"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(f.F, {
                setting: h.s6.CHAT_STICKERS,
                children: (0, r.jsxs)(s.hjN, {
                    className: E.marginBottom8,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: E.marginBottom8,
                            children: g.intl.string(g.t["6NtAuL"]),
                        }),
                        (0, r.jsx)(f.F, {
                            setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, r.jsx)(s.j7V, {
                                className: E.marginBottom40,
                                value: e,
                                note: g.intl.string(g.t["/eVrj4"]),
                                onChange: (e) => {
                                    _.default.track(m.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: C,
                                    }),
                                        p.fq.updateSetting(e);
                                },
                                children: g.intl.string(g.t["29xPVV"]),
                            }),
                        }),
                    ],
                }),
            }),
            n &&
                (0, r.jsx)(f.F, {
                    setting: h.s6.CHAT_SOUNDMOJI,
                    children: (0, r.jsxs)(s.hjN, {
                        className: E.marginBottom8,
                        children: [
                            (0, r.jsx)(s.vwX, {
                                className: E.marginBottom8,
                                children: g.intl.string(g.t.EHlAMT),
                            }),
                            (0, r.jsx)(f.F, {
                                setting: h.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(s.j7V, {
                                    className: E.marginBottom40,
                                    value: t,
                                    note: g.intl.string(g.t.hrSIhI),
                                    onChange: (e) => {
                                        _.default.track(m.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            p.eR.updateSetting(e);
                                    },
                                    children: g.intl.string(g.t["CtYr+f"]),
                                }),
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)(f.F, {
                setting: h.s6.CHAT_TEXT_BOX,
                children: (0, r.jsxs)(s.hjN, {
                    className: E.marginBottom8,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: E.marginBottom8,
                            children: g.intl.string(g.t.afR0pK),
                        }),
                        (0, r.jsx)(f.F, {
                            setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, r.jsx)(s.j7V, {
                                className: a()(E.marginTop8, E.marginBottom40),
                                value: i,
                                onChange: (e) => {
                                    _.default.track(m.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: m.jXE.SETTINGS_TEXT_AND_IMAGES },
                                    }),
                                        p.R$.updateSetting(e);
                                },
                                children: g.intl.string(g.t.AqGrEB),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(f.F, {
                setting: h.s6.CHAT_THREADS,
                children: (0, r.jsxs)(s.hjN, {
                    className: E.marginBottom40,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: E.marginBottom8,
                            children: g.intl.string(g.t.B2panJ),
                        }),
                        (0, r.jsx)(f.F, {
                            setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, r.jsx)(s.j7V, {
                                className: E.marginTop8,
                                value: y,
                                onChange: p.vF.updateSetting,
                                children: g.intl.string(g.t.AInv5u),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(f.F, {
                setting: h.s6.CHAT_SPOILERS,
                children: N(),
            }),
        ],
    });
}
