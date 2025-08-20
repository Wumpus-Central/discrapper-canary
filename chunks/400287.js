n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(454585),
    u = n(125900),
    d = n(921801),
    f = n(626135),
    _ = n(695346),
    p = n(726985),
    h = n(981631),
    m = n(388032),
    g = n(197571);
function E() {
    let e = _.fq.useSetting(),
        t = _.eR.useSetting(),
        n = (0, u.V2)({ location: "UserSettingsTextImages" }),
        i = _.R$.useSetting(),
        E = _.cC.useSetting(),
        b = _.vF.useSetting(),
        y = _.H1.useSetting(),
        O = _.ev.useSetting(),
        v = _.x4.useSetting(),
        I = _.RS.useSetting(),
        T = _.NA.useSetting(),
        S = _.nc.useSetting(),
        { analyticsLocations: A } = (0, l.ZP)(s.Z.TEXT_AND_IMAGES),
        C = () =>
            (0, r.jsxs)(o.xJW, {
                title: m.intl.string(m.t.QgwmV1),
                children: [
                    (0, r.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        className: g.marginBottom8,
                        children: m.intl.string(m.t.TYnRkZ),
                    }),
                    (0, r.jsx)(o.FXm, {
                        options: [
                            {
                                name: m.intl.string(m.t["KFH/mZ"]),
                                value: h.A2N.ON_CLICK,
                            },
                            {
                                name: m.intl.string(m.t.K5VTBA),
                                value: h.A2N.IF_MODERATOR,
                            },
                            {
                                name: m.intl.string(m.t.Pe1RbG),
                                value: h.A2N.ALWAYS,
                            },
                        ],
                        onChange: (e) => _.cC.updateSetting(e.value),
                        value: E,
                    }),
                ],
            });
    return (0, r.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: m.intl.string(m.t["/VQax8"]),
        children: [
            (0, r.jsxs)(d.F, {
                setting: p.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, r.jsx)(o.vwX, {
                        className: g.marginBottom8,
                        children: m.intl.string(m.t.U68Dgo),
                    }),
                    (0, r.jsx)(d.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, r.jsx)(o.j7V, {
                            className: a()(g.marginTop8, g.marginBottom20),
                            value: I,
                            onChange: _.RS.updateSetting,
                            children: m.intl.string(m.t.U47N1t),
                        }),
                    }),
                    (0, r.jsx)(d.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, r.jsx)(o.j7V, {
                            className: a()(g.marginTop8, g.marginBottom20),
                            value: v,
                            note: m.intl.formatToPlainString(m.t.qjjvqK, { maxSize: 10 }),
                            onChange: _.x4.updateSetting,
                            children: m.intl.string(m.t.VP11Nj),
                        }),
                    }),
                    (0, r.jsx)(d.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, r.jsx)(o.j7V, {
                            className: a()(g.marginTop8, g.marginBottom40),
                            value: y,
                            note: m.intl.string(m.t.T0rbtL),
                            onChange: _.H1.updateSetting,
                            children: m.intl.string(m.t["w8j+yc"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.F, {
                setting: p.s6.CHAT_EMBEDS,
                children: [
                    (0, r.jsx)(o.vwX, {
                        className: g.marginBottom8,
                        children: m.intl.string(m.t.PWZOn5),
                    }),
                    (0, r.jsx)(d.F, {
                        setting: p.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, r.jsx)(o.j7V, {
                            className: a()(g.marginTop8, g.marginBottom40),
                            value: T,
                            onChange: _.NA.updateSetting,
                            children: m.intl.string(m.t.xX0ZTE),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.F, {
                setting: p.s6.CHAT_EMOJI,
                children: [
                    (0, r.jsx)(o.vwX, {
                        className: g.marginBottom8,
                        children: m.intl.string(m.t.sMOuub),
                    }),
                    (0, r.jsx)(d.F, {
                        setting: p.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, r.jsx)(o.j7V, {
                            className: a()(g.marginTop8, g.marginBottom20),
                            value: S,
                            onChange: _.nc.updateSetting,
                            children: m.intl.string(m.t.Iv24sr),
                        }),
                    }),
                    (0, r.jsx)(d.F, {
                        setting: p.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, r.jsx)(o.j7V, {
                            className: g.marginBottom40,
                            value: O,
                            note: c.Z.parse(m.intl.string(m.t["20dvub"])),
                            onChange: _.ev.updateSetting,
                            children: m.intl.string(m.t["79qal5"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(d.F, {
                setting: p.s6.CHAT_STICKERS,
                children: (0, r.jsxs)(o.hjN, {
                    className: g.marginBottom8,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            className: g.marginBottom8,
                            children: m.intl.string(m.t["6NtAuL"]),
                        }),
                        (0, r.jsx)(d.F, {
                            setting: p.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, r.jsx)(o.j7V, {
                                className: g.marginBottom40,
                                value: e,
                                note: m.intl.string(m.t["/eVrj4"]),
                                onChange: (e) => {
                                    f.default.track(h.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: A,
                                    }),
                                        _.fq.updateSetting(e);
                                },
                                children: m.intl.string(m.t["29xPVV"]),
                            }),
                        }),
                    ],
                }),
            }),
            n &&
                (0, r.jsx)(d.F, {
                    setting: p.s6.CHAT_SOUNDMOJI,
                    children: (0, r.jsxs)(o.hjN, {
                        className: g.marginBottom8,
                        children: [
                            (0, r.jsx)(o.vwX, {
                                className: g.marginBottom8,
                                children: m.intl.string(m.t.EHlAMT),
                            }),
                            (0, r.jsx)(d.F, {
                                setting: p.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(o.j7V, {
                                    className: g.marginBottom40,
                                    value: t,
                                    note: m.intl.string(m.t.hrSIhI),
                                    onChange: (e) => {
                                        f.default.track(h.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            _.eR.updateSetting(e);
                                    },
                                    children: m.intl.string(m.t["CtYr+f"]),
                                }),
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)(d.F, {
                setting: p.s6.CHAT_TEXT_BOX,
                children: (0, r.jsxs)(o.hjN, {
                    className: g.marginBottom8,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            className: g.marginBottom8,
                            children: m.intl.string(m.t.afR0pK),
                        }),
                        (0, r.jsx)(d.F, {
                            setting: p.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, r.jsx)(o.j7V, {
                                className: a()(g.marginTop8, g.marginBottom40),
                                value: i,
                                onChange: (e) => {
                                    f.default.track(h.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                    }),
                                        _.R$.updateSetting(e);
                                },
                                children: m.intl.string(m.t.AqGrEB),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(d.F, {
                setting: p.s6.CHAT_THREADS,
                children: (0, r.jsxs)(o.hjN, {
                    className: g.marginBottom40,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            className: g.marginBottom8,
                            children: m.intl.string(m.t.B2panJ),
                        }),
                        (0, r.jsx)(d.F, {
                            setting: p.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, r.jsx)(o.j7V, {
                                className: g.marginTop8,
                                value: b,
                                onChange: _.vF.updateSetting,
                                children: m.intl.string(m.t.AInv5u),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(d.F, {
                setting: p.s6.CHAT_SPOILERS,
                children: C(),
            }),
        ],
    });
}
