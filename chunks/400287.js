n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(278754),
    d = n(454585),
    u = n(125900),
    m = n(921801),
    p = n(626135),
    g = n(695346),
    h = n(726985),
    f = n(981631),
    b = n(388032),
    _ = n(20493);
function x() {
    let e = (0, c.pR)(),
        t = (0, c.Ju)(),
        n = g.fq.useSetting(),
        r = g.eR.useSetting(),
        x = (0, u.V2)({ location: 'UserSettingsTextImages' }),
        E = g.R$.useSetting(),
        C = g.cC.useSetting(),
        j = g.vF.useSetting(),
        O = g.H1.useSetting(),
        S = g.ev.useSetting(),
        v = g.x4.useSetting(),
        T = g.RS.useSetting(),
        I = g.NA.useSetting(),
        N = g.nc.useSetting(),
        { analyticsLocations: y } = (0, o.ZP)(a.Z.TEXT_AND_IMAGES);
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: b.intl.string(b.t['/VQax8']),
        children: [
            (0, i.jsxs)(m.F, {
                setting: h.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: _.marginBottom8,
                        children: b.intl.string(b.t.U68Dgo)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(_.marginTop8, _.marginBottom20),
                            value: T,
                            onChange: g.RS.updateSetting,
                            children: b.intl.string(b.t.U47N1t)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(_.marginTop8, _.marginBottom20),
                            value: v,
                            note: b.intl.formatToPlainString(b.t.qjjvqK, { maxSize: 10 }),
                            onChange: g.x4.updateSetting,
                            children: b.intl.string(b.t.VP11Nj)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(_.marginTop8, _.marginBottom40),
                            value: O,
                            note: b.intl.string(b.t.T0rbtL),
                            onChange: g.H1.updateSetting,
                            children: b.intl.string(b.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: h.s6.CHAT_EMBEDS,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: _.marginBottom8,
                        children: b.intl.string(b.t.PWZOn5)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(_.marginTop8, _.marginBottom40),
                            value: I,
                            onChange: g.NA.updateSetting,
                            children: b.intl.string(b.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: h.s6.CHAT_EMOJI,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: _.marginBottom8,
                        children: b.intl.string(b.t.sMOuub)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: h.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: s()(_.marginTop8, _.marginBottom20),
                            value: N,
                            onChange: g.nc.updateSetting,
                            children: b.intl.string(b.t.Iv24sr)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: h.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: _.marginBottom40,
                            value: S,
                            note: d.Z.parse(b.intl.string(b.t['20dvub'])),
                            onChange: g.ev.updateSetting,
                            children: b.intl.string(b.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, i.jsx)(m.F, {
                setting: h.s6.CHAT_STICKERS,
                children: (0, i.jsxs)(l.hjN, {
                    className: _.marginBottom8,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: _.marginBottom8,
                            children: b.intl.string(b.t['6NtAuL'])
                        }),
                        t
                            ? null
                            : (0, i.jsx)(m.F, {
                                  setting: h.s6.CHAT_STICKERS_SUGGESTIONS,
                                  children: (0, i.jsx)(l.j7V, {
                                      className: s()(_.marginTop8, _.marginBottom20),
                                      value: e,
                                      note: b.intl.string(b.t.r3uQUV),
                                      onChange: (t) => {
                                          p.default.track(f.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                              enabled: !e,
                                              location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES },
                                              location_stack: y
                                          }),
                                              (0, c.AW)(!e);
                                      },
                                      children: b.intl.string(b.t['479+PT'])
                                  })
                              }),
                        (0, i.jsx)(m.F, {
                            setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, i.jsx)(l.j7V, {
                                className: _.marginBottom40,
                                value: n,
                                note: b.intl.string(b.t['/eVrj4']),
                                onChange: (e) => {
                                    p.default.track(f.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: y
                                    }),
                                        g.fq.updateSetting(e);
                                },
                                children: b.intl.string(b.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            x &&
                (0, i.jsx)(m.F, {
                    setting: h.s6.CHAT_SOUNDMOJI,
                    children: (0, i.jsxs)(l.hjN, {
                        className: _.marginBottom8,
                        children: [
                            (0, i.jsx)(l.vwX, {
                                className: _.marginBottom8,
                                children: b.intl.string(b.t.EHlAMT)
                            }),
                            (0, i.jsx)(m.F, {
                                setting: h.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.j7V, {
                                    className: _.marginBottom40,
                                    value: r,
                                    note: b.intl.string(b.t.hrSIhI),
                                    onChange: (e) => {
                                        p.default.track(f.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES }
                                        }),
                                            g.eR.updateSetting(e);
                                    },
                                    children: b.intl.string(b.t['CtYr+f'])
                                })
                            })
                        ]
                    })
                }),
            (0, i.jsx)(m.F, {
                setting: h.s6.CHAT_TEXT_BOX,
                children: (0, i.jsxs)(l.hjN, {
                    className: _.marginBottom8,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: _.marginBottom8,
                            children: b.intl.string(b.t.afR0pK)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, i.jsx)(l.j7V, {
                                className: s()(_.marginTop8, _.marginBottom40),
                                value: E,
                                onChange: (e) => {
                                    p.default.track(f.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        g.R$.updateSetting(e);
                                },
                                children: b.intl.string(b.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: h.s6.CHAT_THREADS,
                children: (0, i.jsxs)(l.hjN, {
                    className: _.marginBottom40,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: _.marginBottom8,
                            children: b.intl.string(b.t.B2panJ)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, i.jsx)(l.j7V, {
                                className: _.marginTop8,
                                value: j,
                                onChange: g.vF.updateSetting,
                                children: b.intl.string(b.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: h.s6.CHAT_SPOILERS,
                children: (0, i.jsxs)(l.xJW, {
                    title: b.intl.string(b.t.QgwmV1),
                    children: [
                        (0, i.jsx)(l.R94, {
                            type: l.R94.Types.DESCRIPTION,
                            className: _.marginBottom8,
                            children: b.intl.string(b.t.TYnRkZ)
                        }),
                        (0, i.jsx)(l.FXm, {
                            options: [
                                {
                                    name: b.intl.string(b.t['KFH/mZ']),
                                    value: f.A2N.ON_CLICK
                                },
                                {
                                    name: b.intl.string(b.t.K5VTBA),
                                    value: f.A2N.IF_MODERATOR
                                },
                                {
                                    name: b.intl.string(b.t.Pe1RbG),
                                    value: f.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => g.cC.updateSetting(e.value),
                            value: C
                        })
                    ]
                })
            })
        ]
    });
}
