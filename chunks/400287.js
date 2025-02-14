n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(278754),
    d = n(454585),
    u = n(125900),
    m = n(921801),
    h = n(626135),
    g = n(695346),
    x = n(726985),
    _ = n(981631),
    p = n(388032),
    E = n(483938);
function C() {
    let e = (0, c.pR)(),
        t = (0, c.Ju)(),
        n = g.fq.useSetting(),
        s = g.eR.useSetting(),
        C = (0, u.V2)({ location: 'UserSettingsTextImages' }),
        f = g.R$.useSetting(),
        T = g.cC.useSetting(),
        N = g.vF.useSetting(),
        S = g.H1.useSetting(),
        I = g.ev.useSetting(),
        b = g.x4.useSetting(),
        v = g.RS.useSetting(),
        j = g.NA.useSetting(),
        A = g.nc.useSetting(),
        { analyticsLocations: O } = (0, o.ZP)(a.Z.TEXT_AND_IMAGES);
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: p.intl.string(p.t['/VQax8']),
        children: [
            (0, i.jsxs)(m.F, {
                setting: x.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: E.marginBottom8,
                        children: p.intl.string(p.t.U68Dgo)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: x.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(l.j7V, {
                            className: r()(E.marginTop8, E.marginBottom20),
                            value: v,
                            onChange: g.RS.updateSetting,
                            children: p.intl.string(p.t.U47N1t)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: x.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(l.j7V, {
                            className: r()(E.marginTop8, E.marginBottom20),
                            value: b,
                            note: p.intl.formatToPlainString(p.t.qjjvqK, { maxSize: 10 }),
                            onChange: g.x4.updateSetting,
                            children: p.intl.string(p.t.VP11Nj)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: x.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: r()(E.marginTop8, E.marginBottom40),
                            value: S,
                            note: p.intl.string(p.t.T0rbtL),
                            onChange: g.H1.updateSetting,
                            children: p.intl.string(p.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: x.s6.CHAT_EMBEDS,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: E.marginBottom8,
                        children: p.intl.string(p.t.PWZOn5)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: x.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(l.j7V, {
                            className: r()(E.marginTop8, E.marginBottom40),
                            value: j,
                            onChange: g.NA.updateSetting,
                            children: p.intl.string(p.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: x.s6.CHAT_EMOJI,
                children: [
                    (0, i.jsx)(l.vwX, {
                        className: E.marginBottom8,
                        children: p.intl.string(p.t.sMOuub)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: x.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: r()(E.marginTop8, E.marginBottom20),
                            value: A,
                            onChange: g.nc.updateSetting,
                            children: p.intl.string(p.t.Iv24sr)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: x.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(l.j7V, {
                            className: E.marginBottom40,
                            value: I,
                            note: d.Z.parse(p.intl.string(p.t['20dvub'])),
                            onChange: g.ev.updateSetting,
                            children: p.intl.string(p.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, i.jsx)(m.F, {
                setting: x.s6.CHAT_STICKERS,
                children: (0, i.jsxs)(l.hjN, {
                    className: E.marginBottom8,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: E.marginBottom8,
                            children: p.intl.string(p.t['6NtAuL'])
                        }),
                        t
                            ? null
                            : (0, i.jsx)(m.F, {
                                  setting: x.s6.CHAT_STICKERS_SUGGESTIONS,
                                  children: (0, i.jsx)(l.j7V, {
                                      className: r()(E.marginTop8, E.marginBottom20),
                                      value: e,
                                      note: p.intl.string(p.t.r3uQUV),
                                      onChange: (t) => {
                                          h.default.track(_.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                              enabled: !e,
                                              location: { section: _.jXE.SETTINGS_TEXT_AND_IMAGES },
                                              location_stack: O
                                          }),
                                              (0, c.AW)(!e);
                                      },
                                      children: p.intl.string(p.t['479+PT'])
                                  })
                              }),
                        (0, i.jsx)(m.F, {
                            setting: x.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, i.jsx)(l.j7V, {
                                className: E.marginBottom40,
                                value: n,
                                note: p.intl.string(p.t['/eVrj4']),
                                onChange: (e) => {
                                    h.default.track(_.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: _.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: O
                                    }),
                                        g.fq.updateSetting(e);
                                },
                                children: p.intl.string(p.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            C &&
                (0, i.jsx)(m.F, {
                    setting: x.s6.CHAT_SOUNDMOJI,
                    children: (0, i.jsxs)(l.hjN, {
                        className: E.marginBottom8,
                        children: [
                            (0, i.jsx)(l.vwX, {
                                className: E.marginBottom8,
                                children: p.intl.string(p.t.EHlAMT)
                            }),
                            (0, i.jsx)(m.F, {
                                setting: x.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.j7V, {
                                    className: E.marginBottom40,
                                    value: s,
                                    note: p.intl.string(p.t.hrSIhI),
                                    onChange: (e) => {
                                        h.default.track(_.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: _.jXE.SETTINGS_TEXT_AND_IMAGES }
                                        }),
                                            g.eR.updateSetting(e);
                                    },
                                    children: p.intl.string(p.t['CtYr+f'])
                                })
                            })
                        ]
                    })
                }),
            (0, i.jsx)(m.F, {
                setting: x.s6.CHAT_TEXT_BOX,
                children: (0, i.jsxs)(l.hjN, {
                    className: E.marginBottom8,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: E.marginBottom8,
                            children: p.intl.string(p.t.afR0pK)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: x.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, i.jsx)(l.j7V, {
                                className: r()(E.marginTop8, E.marginBottom40),
                                value: f,
                                onChange: (e) => {
                                    h.default.track(_.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: _.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        g.R$.updateSetting(e);
                                },
                                children: p.intl.string(p.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: x.s6.CHAT_THREADS,
                children: (0, i.jsxs)(l.hjN, {
                    className: E.marginBottom40,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: E.marginBottom8,
                            children: p.intl.string(p.t.B2panJ)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: x.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, i.jsx)(l.j7V, {
                                className: E.marginTop8,
                                value: N,
                                onChange: g.vF.updateSetting,
                                children: p.intl.string(p.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: x.s6.CHAT_SPOILERS,
                children: (0, i.jsxs)(l.xJW, {
                    title: p.intl.string(p.t.QgwmV1),
                    children: [
                        (0, i.jsx)(l.R94, {
                            type: l.R94.Types.DESCRIPTION,
                            className: E.marginBottom8,
                            children: p.intl.string(p.t.TYnRkZ)
                        }),
                        (0, i.jsx)(l.FXm, {
                            options: [
                                {
                                    name: p.intl.string(p.t['KFH/mZ']),
                                    value: _.A2N.ON_CLICK
                                },
                                {
                                    name: p.intl.string(p.t.K5VTBA),
                                    value: _.A2N.IF_MODERATOR
                                },
                                {
                                    name: p.intl.string(p.t.Pe1RbG),
                                    value: _.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => g.cC.updateSetting(e.value),
                            value: T
                        })
                    ]
                })
            })
        ]
    });
}
