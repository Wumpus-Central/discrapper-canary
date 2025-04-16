n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(278754),
    d = n(454585),
    u = n(125900),
    m = n(921801),
    g = n(626135),
    p = n(695346),
    h = n(726985),
    f = n(981631),
    _ = n(388032),
    b = n(20493);
function N() {
    let e = (0, c.pR)(),
        t = (0, c.Ju)(),
        n = p.fq.useSetting(),
        i = p.eR.useSetting(),
        N = (0, u.V2)({ location: 'UserSettingsTextImages' }),
        x = p.R$.useSetting(),
        E = p.cC.useSetting(),
        j = p.vF.useSetting(),
        C = p.H1.useSetting(),
        O = p.ev.useSetting(),
        S = p.x4.useSetting(),
        v = p.RS.useSetting(),
        T = p.NA.useSetting(),
        I = p.nc.useSetting(),
        { analyticsLocations: y } = (0, o.ZP)(l.Z.TEXT_AND_IMAGES);
    return (0, r.jsxs)(a.hjN, {
        tag: a.RB0.H1,
        title: _.NW.string(_.t['/VQax8']),
        children: [
            (0, r.jsxs)(m.F, {
                setting: h.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, r.jsx)(a.vwX, {
                        className: b.marginBottom8,
                        children: _.NW.string(_.t.U68Dgo)
                    }),
                    (0, r.jsx)(m.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, r.jsx)(a.j7V, {
                            className: s()(b.marginTop8, b.marginBottom20),
                            value: v,
                            onChange: p.RS.updateSetting,
                            children: _.NW.string(_.t.U47N1t)
                        })
                    }),
                    (0, r.jsx)(m.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, r.jsx)(a.j7V, {
                            className: s()(b.marginTop8, b.marginBottom20),
                            value: S,
                            note: _.NW.formatToPlainString(_.t.qjjvqK, { maxSize: 10 }),
                            onChange: p.x4.updateSetting,
                            children: _.NW.string(_.t.VP11Nj)
                        })
                    }),
                    (0, r.jsx)(m.F, {
                        setting: h.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, r.jsx)(a.j7V, {
                            className: s()(b.marginTop8, b.marginBottom40),
                            value: C,
                            note: _.NW.string(_.t.T0rbtL),
                            onChange: p.H1.updateSetting,
                            children: _.NW.string(_.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, r.jsxs)(m.F, {
                setting: h.s6.CHAT_EMBEDS,
                children: [
                    (0, r.jsx)(a.vwX, {
                        className: b.marginBottom8,
                        children: _.NW.string(_.t.PWZOn5)
                    }),
                    (0, r.jsx)(m.F, {
                        setting: h.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, r.jsx)(a.j7V, {
                            className: s()(b.marginTop8, b.marginBottom40),
                            value: T,
                            onChange: p.NA.updateSetting,
                            children: _.NW.string(_.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, r.jsxs)(m.F, {
                setting: h.s6.CHAT_EMOJI,
                children: [
                    (0, r.jsx)(a.vwX, {
                        className: b.marginBottom8,
                        children: _.NW.string(_.t.sMOuub)
                    }),
                    (0, r.jsx)(m.F, {
                        setting: h.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, r.jsx)(a.j7V, {
                            className: s()(b.marginTop8, b.marginBottom20),
                            value: I,
                            onChange: p.nc.updateSetting,
                            children: _.NW.string(_.t.Iv24sr)
                        })
                    }),
                    (0, r.jsx)(m.F, {
                        setting: h.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, r.jsx)(a.j7V, {
                            className: b.marginBottom40,
                            value: O,
                            note: d.Z.parse(_.NW.string(_.t['20dvub'])),
                            onChange: p.ev.updateSetting,
                            children: _.NW.string(_.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, r.jsx)(m.F, {
                setting: h.s6.CHAT_STICKERS,
                children: (0, r.jsxs)(a.hjN, {
                    className: b.marginBottom8,
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: b.marginBottom8,
                            children: _.NW.string(_.t['6NtAuL'])
                        }),
                        t
                            ? null
                            : (0, r.jsx)(m.F, {
                                  setting: h.s6.CHAT_STICKERS_SUGGESTIONS,
                                  children: (0, r.jsx)(a.j7V, {
                                      className: s()(b.marginTop8, b.marginBottom20),
                                      value: e,
                                      note: _.NW.string(_.t.r3uQUV),
                                      onChange: (t) => {
                                          g.default.track(f.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                              enabled: !e,
                                              location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES },
                                              location_stack: y
                                          }),
                                              (0, c.AW)(!e);
                                      },
                                      children: _.NW.string(_.t['479+PT'])
                                  })
                              }),
                        (0, r.jsx)(m.F, {
                            setting: h.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, r.jsx)(a.j7V, {
                                className: b.marginBottom40,
                                value: n,
                                note: _.NW.string(_.t['/eVrj4']),
                                onChange: (e) => {
                                    g.default.track(f.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: y
                                    }),
                                        p.fq.updateSetting(e);
                                },
                                children: _.NW.string(_.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            N &&
                (0, r.jsx)(m.F, {
                    setting: h.s6.CHAT_SOUNDMOJI,
                    children: (0, r.jsxs)(a.hjN, {
                        className: b.marginBottom8,
                        children: [
                            (0, r.jsx)(a.vwX, {
                                className: b.marginBottom8,
                                children: _.NW.string(_.t.EHlAMT)
                            }),
                            (0, r.jsx)(m.F, {
                                setting: h.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(a.j7V, {
                                    className: b.marginBottom40,
                                    value: i,
                                    note: _.NW.string(_.t.hrSIhI),
                                    onChange: (e) => {
                                        g.default.track(f.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES }
                                        }),
                                            p.eR.updateSetting(e);
                                    },
                                    children: _.NW.string(_.t['CtYr+f'])
                                })
                            })
                        ]
                    })
                }),
            (0, r.jsx)(m.F, {
                setting: h.s6.CHAT_TEXT_BOX,
                children: (0, r.jsxs)(a.hjN, {
                    className: b.marginBottom8,
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: b.marginBottom8,
                            children: _.NW.string(_.t.afR0pK)
                        }),
                        (0, r.jsx)(m.F, {
                            setting: h.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, r.jsx)(a.j7V, {
                                className: s()(b.marginTop8, b.marginBottom40),
                                value: x,
                                onChange: (e) => {
                                    g.default.track(f.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: f.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        p.R$.updateSetting(e);
                                },
                                children: _.NW.string(_.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, r.jsx)(m.F, {
                setting: h.s6.CHAT_THREADS,
                children: (0, r.jsxs)(a.hjN, {
                    className: b.marginBottom40,
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: b.marginBottom8,
                            children: _.NW.string(_.t.B2panJ)
                        }),
                        (0, r.jsx)(m.F, {
                            setting: h.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, r.jsx)(a.j7V, {
                                className: b.marginTop8,
                                value: j,
                                onChange: p.vF.updateSetting,
                                children: _.NW.string(_.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, r.jsx)(m.F, {
                setting: h.s6.CHAT_SPOILERS,
                children: (0, r.jsxs)(a.xJW, {
                    title: _.NW.string(_.t.QgwmV1),
                    children: [
                        (0, r.jsx)(a.R94, {
                            type: a.R94.Types.DESCRIPTION,
                            className: b.marginBottom8,
                            children: _.NW.string(_.t.TYnRkZ)
                        }),
                        (0, r.jsx)(a.FXm, {
                            options: [
                                {
                                    name: _.NW.string(_.t['KFH/mZ']),
                                    value: f.A2N.ON_CLICK
                                },
                                {
                                    name: _.NW.string(_.t.K5VTBA),
                                    value: f.A2N.IF_MODERATOR
                                },
                                {
                                    name: _.NW.string(_.t.Pe1RbG),
                                    value: f.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => p.cC.updateSetting(e.value),
                            value: E
                        })
                    ]
                })
            })
        ]
    });
}
