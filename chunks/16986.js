n.d(t, {
    A: () => A,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(793574),
    a = n(688810),
    o = n(46054),
    c = n(753806),
    u = n(145331),
    d = n(195043),
    h = n(954571),
    p = n(253932),
    g = n(790174),
    f = n(531525),
    m = n(652215),
    b = n(985018);

function A() {
    let e = p.ML.useSetting(),
        t = p.eK.useSetting(),
        n = p.SI.useSetting(),
        A = p.gs.useSetting(),
        y = p.SY.useSetting(),
        O = p._z.useSetting(),
        _ = p.j7.useSetting(),
        j = p.X6.useSetting(),
        x = p.hD.useSetting(),
        v = p.rs.useSetting(),
        E = p.jW.useSetting(),
        C = p.ng.useSetting(),
        S = p.Hu.useSetting(),
        { analyticsLocations: I } = (0, a.Ay)(s.A.TEXT_AND_IMAGES),
        N = l.useCallback((e) => {
            let t = 1 === e;
            t
                ? c.A.cleanUpPrivateChannelSearchState()
                : c.A.cleanUpSearchState({
                      type: m.I4_.DMS,
                  }),
                (0, u._k)({
                    prevIsCrossDMSettingEnabled: p.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: u.vy.USER_SETTINGS,
                }),
                p.Hu.updateSetting(t);
        }, []);
    return (0, r.jsx)(g.A, {
        title: b.intl.string(b.t["/VQax8"]),
        children: (0, r.jsxs)(i.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(d.x, {
                    setting: f.H.CHAT_INLINE_MEDIA,
                    children: (0, r.jsxs)(i.nVY, {
                        label: b.intl.string(b.t.U68Dgp),
                        children: [
                            (0, r.jsx)(d.x, {
                                setting: f.H.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, r.jsx)(i.dOG, {
                                    checked: x,
                                    onChange: p.hD.updateSetting,
                                    label: b.intl.string(b.t.U47N1p),
                                }),
                            }),
                            (0, r.jsx)(d.x, {
                                setting: f.H.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, r.jsx)(i.dOG, {
                                    checked: j,
                                    description: b.intl.formatToPlainString(b.t.qjjvqO, {
                                        maxSize: 10,
                                    }),
                                    onChange: p.X6.updateSetting,
                                    label: b.intl.string(b.t.VP11No),
                                }),
                            }),
                            (0, r.jsx)(d.x, {
                                setting: f.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, r.jsx)(i.dOG, {
                                    checked: O,
                                    description: b.intl.string(b.t.T0rbtM),
                                    onChange: p._z.updateSetting,
                                    label: b.intl.string(b.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.CHAT_EMBEDS,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsx)(i.nVY, {
                            label: b.intl.string(b.t.PWZOn4),
                            children: (0, r.jsx)(d.x, {
                                setting: f.H.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, r.jsx)(i.dOG, {
                                    checked: v,
                                    onChange: p.rs.updateSetting,
                                    label: b.intl.string(b.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.CHAT_EMOJI,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsxs)(i.nVY, {
                            label: b.intl.string(b.t.sMOuuS),
                            children: [
                                (0, r.jsx)(d.x, {
                                    setting: f.H.CHAT_EMOJI_REACTIONS,
                                    children: (0, r.jsx)(i.dOG, {
                                        checked: E,
                                        onChange: p.jW.updateSetting,
                                        label: b.intl.string(b.t.Iv24sm),
                                    }),
                                }),
                                (0, r.jsx)(d.x, {
                                    setting: f.H.CHAT_EMOJI_EMOTICONS,
                                    children: (0, r.jsx)(i.dOG, {
                                        checked: _,
                                        description: o.A.parse(b.intl.string(b.t["20dvuQ"])),
                                        onChange: p.j7.updateSetting,
                                        label: b.intl.string(b.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.CHAT_STICKERS,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsx)(i.nVY, {
                            label: b.intl.string(b.t["6NtAuJ"]),
                            children: (0, r.jsx)(d.x, {
                                setting: f.H.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, r.jsx)(i.dOG, {
                                    checked: e,
                                    description: b.intl.string(b.t["/eVrj8"]),
                                    onChange: (e) => {
                                        h.default.track(m.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: {
                                                section: m.JJy.SETTINGS_TEXT_AND_IMAGES,
                                            },
                                            location_stack: I,
                                        }),
                                            p.ML.updateSetting(e);
                                    },
                                    label: b.intl.string(b.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.CHAT_SOUNDMOJI,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsx)(i.nVY, {
                            label: b.intl.string(b.t.EHlAMc),
                            children: (0, r.jsx)(d.x, {
                                setting: f.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, r.jsx)(i.dOG, {
                                    checked: t,
                                    description: b.intl.string(b.t.hrSIhN),
                                    onChange: (e) => {
                                        h.default.track(m.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: {
                                                section: m.JJy.SETTINGS_TEXT_AND_IMAGES,
                                            },
                                        }),
                                            p.eK.updateSetting(e);
                                    },
                                    label: b.intl.string(b.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.CHAT_TEXT_BOX,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsxs)(i.nVY, {
                            label: b.intl.string(b.t.afR0pI),
                            children: [
                                (0, r.jsx)(d.x, {
                                    setting: f.H.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, r.jsx)(i.dOG, {
                                        checked: n,
                                        onChange: (e) => {
                                            h.default.track(m.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: {
                                                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES,
                                                },
                                            }),
                                                p.SI.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t.AqGrEI),
                                    }),
                                }),
                                (0, r.jsx)(d.x, {
                                    setting: f.H.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, r.jsx)(i.dOG, {
                                        checked: C,
                                        description: b.intl.string(b.t.AaXigo),
                                        onChange: (e) => {
                                            p.ng.updateSetting(e);
                                        },
                                        label: b.intl.string(b.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.CHAT_THREADS,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsx)(i.nVY, {
                            label: b.intl.string(b.t.B2panI),
                            children: (0, r.jsx)(d.x, {
                                setting: f.H.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, r.jsx)(i.dOG, {
                                    checked: y,
                                    onChange: p.SY.updateSetting,
                                    label: b.intl.string(b.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.MESSAGE_SEARCH,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsx)(d.x, {
                            setting: f.H.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, r.jsx)(i.z6M, {
                                label: b.intl.string(b.t["NxjN+q"]),
                                options: [
                                    {
                                        name: b.intl.string(b.t["t+fGsk"]),
                                        value: 0,
                                    },
                                    {
                                        name: b.intl.string(b.t.MwlEGN),
                                        value: 1,
                                    },
                                ],
                                onChange: N,
                                value: +!!S,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(d.x, {
                    setting: f.H.CHAT_SPOILERS,
                    children: [
                        (0, r.jsx)(i.cGx, {}),
                        (0, r.jsx)(i.z6M, {
                            label: b.intl.string(b.t.QgwmVz),
                            description: b.intl.string(b.t.TYnRkS),
                            options: [
                                {
                                    name: b.intl.string(b.t["KFH/me"]),
                                    value: m.P6Q.ON_CLICK,
                                },
                                {
                                    name: b.intl.string(b.t.K5VTBE),
                                    value: m.P6Q.IF_MODERATOR,
                                },
                                {
                                    name: b.intl.string(b.t.Pe1RbL),
                                    value: m.P6Q.ALWAYS,
                                },
                            ],
                            onChange: (e) => p.gs.updateSetting(e),
                            value: A,
                        }),
                    ],
                }),
            ],
        }),
    });
}
