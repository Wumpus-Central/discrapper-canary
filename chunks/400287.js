n.d(t, { Z: () => O });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(538534),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(454585),
    d = n(657871),
    f = n(125900),
    _ = n(921801),
    p = n(626135),
    h = n(695346),
    m = n(273313),
    g = n(726985),
    E = n(981631),
    b = n(388032),
    y = n(10198);
function O() {
    let e = h.fq.useSetting(),
        t = h.eR.useSetting(),
        n = (0, f.V2)({ location: "UserSettingsTextImages" }),
        i = h.R$.useSetting(),
        O = h.cC.useSetting(),
        v = h.vF.useSetting(),
        I = h.H1.useSetting(),
        T = h.ev.useSetting(),
        S = h.x4.useSetting(),
        A = h.RS.useSetting(),
        C = h.NA.useSetting(),
        N = h.nc.useSetting(),
        R = h.HV.useSetting(),
        { enabled: P } = (0, d.zM)("UserSettingsTextImages", { autoTrackExposure: !1 }),
        { analyticsLocations: w } = (0, c.ZP)(l.Z.TEXT_AND_IMAGES),
        D = () =>
            (0, r.jsx)(o.E, {
                label: b.intl.string(b.t.QgwmV1),
                description: b.intl.string(b.t.TYnRkZ),
                options: [
                    {
                        name: b.intl.string(b.t["KFH/mZ"]),
                        value: E.A2N.ON_CLICK,
                    },
                    {
                        name: b.intl.string(b.t.K5VTBA),
                        value: E.A2N.IF_MODERATOR,
                    },
                    {
                        name: b.intl.string(b.t.Pe1RbG),
                        value: E.A2N.ALWAYS,
                    },
                ],
                onChange: (e) => h.cC.updateSetting(e),
                value: O,
            });
    return (0, r.jsxs)(m.Z, {
        title: b.intl.string(b.t["/VQax8"]),
        children: [
            (0, r.jsxs)(_.F, {
                setting: g.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: y.marginBottom8,
                        children: b.intl.string(b.t.U68Dgo),
                    }),
                    (0, r.jsx)(_.F, {
                        setting: g.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(y.marginTop8, y.marginBottom20),
                            value: A,
                            onChange: h.RS.updateSetting,
                            children: b.intl.string(b.t.U47N1t),
                        }),
                    }),
                    (0, r.jsx)(_.F, {
                        setting: g.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(y.marginTop8, y.marginBottom20),
                            value: S,
                            note: b.intl.formatToPlainString(b.t.qjjvqK, { maxSize: 10 }),
                            onChange: h.x4.updateSetting,
                            children: b.intl.string(b.t.VP11Nj),
                        }),
                    }),
                    (0, r.jsx)(_.F, {
                        setting: g.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(y.marginTop8, y.marginBottom40),
                            value: I,
                            note: b.intl.string(b.t.T0rbtL),
                            onChange: h.H1.updateSetting,
                            children: b.intl.string(b.t["w8j+yc"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(_.F, {
                setting: g.s6.CHAT_EMBEDS,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: y.marginBottom8,
                        children: b.intl.string(b.t.PWZOn5),
                    }),
                    (0, r.jsx)(_.F, {
                        setting: g.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(y.marginTop8, y.marginBottom40),
                            value: C,
                            onChange: h.NA.updateSetting,
                            children: b.intl.string(b.t.xX0ZTE),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(_.F, {
                setting: g.s6.CHAT_EMOJI,
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: y.marginBottom8,
                        children: b.intl.string(b.t.sMOuub),
                    }),
                    (0, r.jsx)(_.F, {
                        setting: g.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: a()(y.marginTop8, y.marginBottom20),
                            value: N,
                            onChange: h.nc.updateSetting,
                            children: b.intl.string(b.t.Iv24sr),
                        }),
                    }),
                    (0, r.jsx)(_.F, {
                        setting: g.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, r.jsx)(s.j7V, {
                            className: y.marginBottom40,
                            value: T,
                            note: u.Z.parse(b.intl.string(b.t["20dvub"])),
                            onChange: h.ev.updateSetting,
                            children: b.intl.string(b.t["79qal5"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(_.F, {
                setting: g.s6.CHAT_STICKERS,
                children: (0, r.jsxs)(s.hjN, {
                    className: y.marginBottom8,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: y.marginBottom8,
                            children: b.intl.string(b.t["6NtAuL"]),
                        }),
                        (0, r.jsx)(_.F, {
                            setting: g.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, r.jsx)(s.j7V, {
                                className: y.marginBottom40,
                                value: e,
                                note: b.intl.string(b.t["/eVrj4"]),
                                onChange: (e) => {
                                    p.default.track(E.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: E.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: w,
                                    }),
                                        h.fq.updateSetting(e);
                                },
                                children: b.intl.string(b.t["29xPVV"]),
                            }),
                        }),
                    ],
                }),
            }),
            n &&
                (0, r.jsx)(_.F, {
                    setting: g.s6.CHAT_SOUNDMOJI,
                    children: (0, r.jsxs)(s.hjN, {
                        className: y.marginBottom8,
                        children: [
                            (0, r.jsx)(s.vwX, {
                                className: y.marginBottom8,
                                children: b.intl.string(b.t.EHlAMT),
                            }),
                            (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(s.j7V, {
                                    className: y.marginBottom40,
                                    value: t,
                                    note: b.intl.string(b.t.hrSIhI),
                                    onChange: (e) => {
                                        p.default.track(E.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: E.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            h.eR.updateSetting(e);
                                    },
                                    children: b.intl.string(b.t["CtYr+f"]),
                                }),
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)(_.F, {
                setting: g.s6.CHAT_TEXT_BOX,
                children: (0, r.jsxs)(s.hjN, {
                    className: y.marginBottom8,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: y.marginBottom8,
                            children: b.intl.string(b.t.afR0pK),
                        }),
                        (0, r.jsx)(_.F, {
                            setting: g.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, r.jsx)(s.j7V, {
                                className: a()(y.marginTop8, y.marginBottom20),
                                value: i,
                                onChange: (e) => {
                                    p.default.track(E.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: E.jXE.SETTINGS_TEXT_AND_IMAGES },
                                    }),
                                        h.R$.updateSetting(e);
                                },
                                children: b.intl.string(b.t.AqGrEB),
                            }),
                        }),
                        P &&
                            (0, r.jsx)(_.F, {
                                setting: g.s6.CHAT_MENTION_SUGGESTIONS,
                                children: (0, r.jsx)(s.j7V, {
                                    className: a()(y.marginTop8, y.marginBottom40),
                                    value: R,
                                    note: b.intl.string(b.t.AaXigo),
                                    onChange: (e) => {
                                        h.HV.updateSetting(e);
                                    },
                                    children: b.intl.string(b.t.uXQ2xc),
                                }),
                            }),
                    ],
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: g.s6.CHAT_THREADS,
                children: (0, r.jsxs)(s.hjN, {
                    className: y.marginBottom40,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            className: y.marginBottom8,
                            children: b.intl.string(b.t.B2panJ),
                        }),
                        (0, r.jsx)(_.F, {
                            setting: g.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, r.jsx)(s.j7V, {
                                className: y.marginTop8,
                                value: v,
                                onChange: h.vF.updateSetting,
                                children: b.intl.string(b.t.AInv5u),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(_.F, {
                setting: g.s6.CHAT_SPOILERS,
                children: D(),
            }),
        ],
    });
}
