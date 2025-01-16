n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(278754),
    d = n(454585),
    u = n(125900),
    m = n(921801),
    g = n(626135),
    h = n(695346),
    p = n(726985),
    x = n(981631),
    f = n(388032),
    _ = n(232186);
function E() {
    let e = (0, c.pR)(),
        t = (0, c.Ju)(),
        n = h.fq.useSetting(),
        r = h.eR.useSetting(),
        E = (0, u.V2)({ location: 'UserSettingsTextImages' }),
        C = h.R$.useSetting(),
        T = h.cC.useSetting(),
        S = h.vF.useSetting(),
        b = h.H1.useSetting(),
        I = h.ev.useSetting(),
        N = h.x4.useSetting(),
        v = h.RS.useSetting(),
        A = h.NA.useSetting(),
        j = h.nc.useSetting(),
        { analyticsLocations: O } = (0, o.ZP)(l.Z.TEXT_AND_IMAGES);
    return (0, i.jsxs)(a.FormSection, {
        tag: a.FormTitleTags.H1,
        title: f.intl.string(f.t['/VQax8']),
        children: [
            (0, i.jsxs)(m.F, {
                setting: p.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        className: _.marginBottom8,
                        children: f.intl.string(f.t.U68Dgo)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            className: s()(_.marginTop8, _.marginBottom20),
                            value: v,
                            onChange: h.RS.updateSetting,
                            children: f.intl.string(f.t.U47N1t)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            className: s()(_.marginTop8, _.marginBottom20),
                            value: N,
                            note: f.intl.formatToPlainString(f.t.qjjvqK, { maxSize: 10 }),
                            onChange: h.x4.updateSetting,
                            children: f.intl.string(f.t.VP11Nj)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            className: s()(_.marginTop8, _.marginBottom40),
                            value: b,
                            note: f.intl.string(f.t.T0rbtL),
                            onChange: h.H1.updateSetting,
                            children: f.intl.string(f.t['w8j+yc'])
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: p.s6.CHAT_EMBEDS,
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        className: _.marginBottom8,
                        children: f.intl.string(f.t.PWZOn5)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            className: s()(_.marginTop8, _.marginBottom40),
                            value: A,
                            onChange: h.NA.updateSetting,
                            children: f.intl.string(f.t.xX0ZTE)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.F, {
                setting: p.s6.CHAT_EMOJI,
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        className: _.marginBottom8,
                        children: f.intl.string(f.t.sMOuub)
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            className: s()(_.marginTop8, _.marginBottom20),
                            value: j,
                            onChange: h.nc.updateSetting,
                            children: f.intl.string(f.t.Iv24sr)
                        })
                    }),
                    (0, i.jsx)(m.F, {
                        setting: p.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            className: _.marginBottom40,
                            value: I,
                            note: d.Z.parse(f.intl.string(f.t['20dvub'])),
                            onChange: h.ev.updateSetting,
                            children: f.intl.string(f.t['79qal5'])
                        })
                    })
                ]
            }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_STICKERS,
                children: (0, i.jsxs)(a.FormSection, {
                    className: _.marginBottom8,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: _.marginBottom8,
                            children: f.intl.string(f.t['6NtAuL'])
                        }),
                        t
                            ? null
                            : (0, i.jsx)(m.F, {
                                  setting: p.s6.CHAT_STICKERS_SUGGESTIONS,
                                  children: (0, i.jsx)(a.FormSwitch, {
                                      className: s()(_.marginTop8, _.marginBottom20),
                                      value: e,
                                      note: f.intl.string(f.t.r3uQUV),
                                      onChange: (t) => {
                                          g.default.track(x.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                              enabled: !e,
                                              location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES },
                                              location_stack: O
                                          }),
                                              (0, c.AW)(!e);
                                      },
                                      children: f.intl.string(f.t['479+PT'])
                                  })
                              }),
                        (0, i.jsx)(m.F, {
                            setting: p.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, i.jsx)(a.FormSwitch, {
                                className: _.marginBottom40,
                                value: n,
                                note: f.intl.string(f.t['/eVrj4']),
                                onChange: (e) => {
                                    g.default.track(x.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: O
                                    }),
                                        h.fq.updateSetting(e);
                                },
                                children: f.intl.string(f.t['29xPVV'])
                            })
                        })
                    ]
                })
            }),
            E &&
                (0, i.jsx)(m.F, {
                    setting: p.s6.CHAT_SOUNDMOJI,
                    children: (0, i.jsxs)(a.FormSection, {
                        className: _.marginBottom8,
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: _.marginBottom8,
                                children: f.intl.string(f.t.EHlAMT)
                            }),
                            (0, i.jsx)(m.F, {
                                setting: p.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(a.FormSwitch, {
                                    className: _.marginBottom40,
                                    value: r,
                                    note: f.intl.string(f.t.hrSIhI),
                                    onChange: (e) => {
                                        g.default.track(x.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES }
                                        }),
                                            h.eR.updateSetting(e);
                                    },
                                    children: f.intl.string(f.t['CtYr+f'])
                                })
                            })
                        ]
                    })
                }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_TEXT_BOX,
                children: (0, i.jsxs)(a.FormSection, {
                    className: _.marginBottom8,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: _.marginBottom8,
                            children: f.intl.string(f.t.afR0pK)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: p.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, i.jsx)(a.FormSwitch, {
                                className: s()(_.marginTop8, _.marginBottom40),
                                value: C,
                                onChange: (e) => {
                                    g.default.track(x.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: x.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }),
                                        h.R$.updateSetting(e);
                                },
                                children: f.intl.string(f.t.AqGrEB)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_THREADS,
                children: (0, i.jsxs)(a.FormSection, {
                    className: _.marginBottom40,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: _.marginBottom8,
                            children: f.intl.string(f.t.B2panJ)
                        }),
                        (0, i.jsx)(m.F, {
                            setting: p.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, i.jsx)(a.FormSwitch, {
                                className: _.marginTop8,
                                value: S,
                                onChange: h.vF.updateSetting,
                                children: f.intl.string(f.t.AInv5u)
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(m.F, {
                setting: p.s6.CHAT_SPOILERS,
                children: (0, i.jsxs)(a.FormItem, {
                    title: f.intl.string(f.t.QgwmV1),
                    children: [
                        (0, i.jsx)(a.FormText, {
                            type: a.FormText.Types.DESCRIPTION,
                            className: _.marginBottom8,
                            children: f.intl.string(f.t.TYnRkZ)
                        }),
                        (0, i.jsx)(a.RadioGroup, {
                            options: [
                                {
                                    name: f.intl.string(f.t['KFH/mZ']),
                                    value: x.A2N.ON_CLICK
                                },
                                {
                                    name: f.intl.string(f.t.K5VTBA),
                                    value: x.A2N.IF_MODERATOR
                                },
                                {
                                    name: f.intl.string(f.t.Pe1RbG),
                                    value: x.A2N.ALWAYS
                                }
                            ],
                            onChange: (e) => h.cC.updateSetting(e.value),
                            value: T
                        })
                    ]
                })
            })
        ]
    });
}
