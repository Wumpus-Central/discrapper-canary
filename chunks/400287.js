n.d(t, { Z: () => _ });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(454585),
    d = n(125900),
    u = n(921801),
    m = n(626135),
    g = n(695346),
    p = n(726985),
    h = n(981631),
    f = n(388032),
    b = n(20493);
function _() {
    let e = g.fq.useSetting(),
        t = g.eR.useSetting(),
        n = (0, d.V2)({ location: 'UserSettingsTextImages' }),
        r = g.R$.useSetting(),
        _ = g.cC.useSetting(),
        x = g.vF.useSetting(),
        E = g.H1.useSetting(),
        j = g.ev.useSetting(),
        O = g.x4.useSetting(),
        C = g.RS.useSetting(),
        S = g.NA.useSetting(),
        v = g.nc.useSetting(),
        { analyticsLocations: T } = (0, o.ZP)(a.Z.TEXT_AND_IMAGES);
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: f.intl.string(f.t['/VQax8']),
        children: [
            (0, i.jsxs)(u.F, {
                setting: p.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: b.marginBottom8,
                        children: f.intl.string(f.t.U68Dgo)
                    }),
                    (0, i.jsx)(u.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(b.marginTop8, b.marginBottom20),
                            value: C,
                            onChange: g.RS.updateSetting,
                            children: f.intl.string(f.t.U47N1t)
                        })
                    }),
                    (0, i.jsx)(u.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(b.marginTop8, b.marginBottom20),
                            value: O,
                            note: f.intl.formatToPlainString(f.t.qjjvqK, { maxSize: 10 }),
                            onChange: g.x4.updateSetting,
                            children: f.intl.string(f.t.VP11Nj)
                        })
                    }),
                    (0, i.jsx)(u.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(b.marginTop8, b.marginBottom40),
                            value: E,
                            note: f.intl.string(f.t.T0rbtL),
                            onChange: g.H1.updateSetting,
                            children: f.intl.string(f.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)(u.F, {
                setting: p.s6.CHAT_EMBEDS,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: b.marginBottom8,
                        children: f.intl.string(f.t.PWZOn5)
                    }),
                    (0, i.jsx)(u.F, {
                        setting: p.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(b.marginTop8, b.marginBottom40),
                            value: S,
                            onChange: g.NA.updateSetting,
                            children: f.intl.string(f.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(u.F, {
                setting: p.s6.CHAT_EMOJI,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: b.marginBottom8,
                        children: f.intl.string(f.t.sMOuub)
                    }),
                    (0, i.jsx)(u.F, {
                        setting: p.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(b.marginTop8, b.marginBottom20),
                            value: v,
                            onChange: g.nc.updateSetting,
                            children: f.intl.string(f.t.Iv24sr)
                        })
                    }),
                    (0, i.jsx)(u.F, {
                        setting: p.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: b.marginBottom40,
                            value: j,
                            note: c.Z.parse(f.intl.string(f.t['20dvub'])),
                            onChange: g.ev.updateSetting,
                            children: f.intl.string(f.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, i.jsx)(u.F, {
                setting: p.s6.CHAT_STICKERS,
                children: (0, i.jsxs)(l.hjN, {
                    className: b.marginBottom8,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: b.marginBottom8,
                            children: f.intl.string(f.t['6NtAuL'])
                        }),
                        (0, i.jsx)(u.F, {
                            setting: p.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, i.jsx)(l.j7V, {
                                className: b.marginBottom40,
                                value: e,
                                note: f.intl.string(f.t['/eVrj4']),
                                onChange: (e) => {
                                    m.default.track(h.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: T
                                    }),
                                        g.fq.updateSetting(e);
                                },
                                children: f.intl.string(f.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            n &&
                (0, i.jsx)(u.F, {
                    setting: p.s6.CHAT_SOUNDMOJI,
                    children: (0, i.jsxs)(l.hjN, {
                        className: b.marginBottom8,
                        children: [
                            (0, i.jsx)(l.vwX, {
                                className: b.marginBottom8,
                                children: f.intl.string(f.t.EHlAMT)
                            }),
                            (0, i.jsx)(u.F, {
                                setting: p.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.j7V, {
                                    className: b.marginBottom40,
                                    value: t,
                                    note: f.intl.string(f.t.hrSIhI),
                                    onChange: (e) => {
                                        m.default.track(h.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES }
                                        }),
                                            g.eR.updateSetting(e);
                                    },
                                    children: f.intl.string(f.t['CtYr+f'])
                                })
                            })
                        ]
                    })
                }),
            (0, i.jsx)(u.F, {
                setting: p.s6.CHAT_TEXT_BOX,
                children: (0, i.jsxs)(l.hjN, {
                    className: b.marginBottom8,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: b.marginBottom8,
                            children: f.intl.string(f.t.afR0pK)
                        }),
                        (0, i.jsx)(u.F, {
                            setting: p.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, i.jsx)(l.j7V, {
                                className: s()(b.marginTop8, b.marginBottom40),
                                value: r,
                                onChange: (e) => {
                                    m.default.track(h.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: h.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        g.R$.updateSetting(e);
                                },
                                children: f.intl.string(f.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.F, {
                setting: p.s6.CHAT_THREADS,
                children: (0, i.jsxs)(l.hjN, {
                    className: b.marginBottom40,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: b.marginBottom8,
                            children: f.intl.string(f.t.B2panJ)
                        }),
                        (0, i.jsx)(u.F, {
                            setting: p.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, i.jsx)(l.j7V, {
                                className: b.marginTop8,
                                value: x,
                                onChange: g.vF.updateSetting,
                                children: f.intl.string(f.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.F, {
                setting: p.s6.CHAT_SPOILERS,
                children: (0, i.jsxs)(l.xJW, {
                    title: f.intl.string(f.t.QgwmV1),
                    children: [
                        (0, i.jsx)(l.R94, {
                            type: l.R94.Types.DESCRIPTION,
                            className: b.marginBottom8,
                            children: f.intl.string(f.t.TYnRkZ)
                        }),
                        (0, i.jsx)(l.FXm, {
                            options: [
                                {
                                    name: f.intl.string(f.t['KFH/mZ']),
                                    value: h.A2N.ON_CLICK
                                },
                                {
                                    name: f.intl.string(f.t.K5VTBA),
                                    value: h.A2N.IF_MODERATOR
                                },
                                {
                                    name: f.intl.string(f.t.Pe1RbG),
                                    value: h.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => g.cC.updateSetting(e.value),
                            value: _
                        })
                    ]
                })
            })
        ]
    });
}
