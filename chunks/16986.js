n.d(t, {
    A: () => b,
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(793574),
    a = n(688810),
    o = n(461012),
    c = n(46054),
    d = n(753806),
    u = n(145331),
    g = n(195043),
    h = n(954571),
    x = n(253932),
    A = n(790174),
    p = n(531525),
    m = n(652215),
    j = n(985018);

function b() {
    let e = x.ML.useSetting(),
        t = x.eK.useSetting(),
        n = x.SI.useSetting(),
        b = x.gs.useSetting(),
        O = x.SY.useSetting(),
        S = x._z.useSetting(),
        E = x.j7.useSetting(),
        f = x.X6.useSetting(),
        v = x.hD.useSetting(),
        T = x.rs.useSetting(),
        C = x.jW.useSetting(),
        y = x.ng.useSetting(),
        N = x.Hu.useSetting(),
        I = x.wT.useSetting(),
        { analyticsLocations: _ } = (0, a.Ay)(r.A.TEXT_AND_IMAGES),
        P = s.useCallback((e) => {
            let t = 1 === e;
            t
                ? d.A.cleanUpPrivateChannelSearchState()
                : d.A.cleanUpSearchState({
                      type: m.I4_.DMS,
                  }),
                (0, u._k)({
                    prevIsCrossDMSettingEnabled: x.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: u.vy.USER_SETTINGS,
                }),
                x.Hu.updateSetting(t);
        }, []);
    return (0, i.jsx)(A.A, {
        title: j.intl.string(j.t["/VQax8"]),
        children: (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(g.x, {
                    setting: p.H.CHAT_INLINE_MEDIA,
                    children: (0, i.jsxs)(l.nVY, {
                        label: j.intl.string(j.t.U68Dgp),
                        children: [
                            (0, i.jsx)(g.x, {
                                setting: p.H.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: v,
                                    onChange: x.hD.updateSetting,
                                    label: j.intl.string(j.t.U47N1p),
                                }),
                            }),
                            (0, i.jsx)(g.x, {
                                setting: p.H.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: f,
                                    description: j.intl.formatToPlainString(j.t.qjjvqO, {
                                        maxSize: 10,
                                    }),
                                    onChange: x.X6.updateSetting,
                                    label: j.intl.string(j.t.VP11No),
                                }),
                            }),
                            (0, i.jsx)(g.x, {
                                setting: p.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: S,
                                    description: j.intl.string(j.t.T0rbtM),
                                    onChange: x._z.updateSetting,
                                    label: j.intl.string(j.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_EMBEDS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: j.intl.string(j.t.PWZOn4),
                            children: (0, i.jsx)(g.x, {
                                setting: p.H.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: T,
                                    onChange: x.rs.updateSetting,
                                    label: j.intl.string(j.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_EMOJI,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsxs)(l.nVY, {
                            label: j.intl.string(j.t.sMOuuS),
                            children: [
                                (0, i.jsx)(g.x, {
                                    setting: p.H.CHAT_EMOJI_REACTIONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: C,
                                        onChange: x.jW.updateSetting,
                                        label: j.intl.string(j.t.Iv24sm),
                                    }),
                                }),
                                (0, i.jsx)(g.x, {
                                    setting: p.H.CHAT_EMOJI_EMOTICONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: E,
                                        description: c.A.parse(j.intl.string(j.t["20dvuQ"])),
                                        onChange: x.j7.updateSetting,
                                        label: j.intl.string(j.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_STICKERS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: j.intl.string(j.t["6NtAuJ"]),
                            children: (0, i.jsx)(g.x, {
                                setting: p.H.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: e,
                                    description: j.intl.string(j.t["/eVrj8"]),
                                    onChange: (e) => {
                                        h.default.track(m.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: {
                                                section: m.JJy.SETTINGS_TEXT_AND_IMAGES,
                                            },
                                            location_stack: _,
                                        }),
                                            x.ML.updateSetting(e);
                                    },
                                    label: j.intl.string(j.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_SOUNDMOJI,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: j.intl.string(j.t.EHlAMc),
                            children: (0, i.jsx)(g.x, {
                                setting: p.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: t,
                                    description: j.intl.string(j.t.hrSIhN),
                                    onChange: (e) => {
                                        h.default.track(m.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: {
                                                section: m.JJy.SETTINGS_TEXT_AND_IMAGES,
                                            },
                                        }),
                                            x.eK.updateSetting(e);
                                    },
                                    label: j.intl.string(j.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_TEXT_BOX,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsxs)(l.nVY, {
                            label: j.intl.string(j.t.afR0pI),
                            children: [
                                (0, i.jsx)(g.x, {
                                    setting: p.H.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: n,
                                        onChange: (e) => {
                                            h.default.track(m.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: {
                                                    section: m.JJy.SETTINGS_TEXT_AND_IMAGES,
                                                },
                                            }),
                                                x.SI.updateSetting(e);
                                        },
                                        label: j.intl.string(j.t.AqGrEI),
                                    }),
                                }),
                                (0, i.jsx)(g.x, {
                                    setting: p.H.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: y,
                                        description: j.intl.string(j.t.AaXigo),
                                        onChange: (e) => {
                                            x.ng.updateSetting(e);
                                        },
                                        label: j.intl.string(j.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_THREADS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: j.intl.string(j.t.B2panI),
                            children: (0, i.jsx)(g.x, {
                                setting: p.H.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: O,
                                    onChange: x.SY.updateSetting,
                                    label: j.intl.string(j.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.MESSAGE_SEARCH,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(g.x, {
                            setting: p.H.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, i.jsx)(l.z6M, {
                                label: j.intl.string(j.t["NxjN+q"]),
                                options: [
                                    {
                                        name: j.intl.string(j.t["t+fGsk"]),
                                        value: 0,
                                    },
                                    {
                                        name: j.intl.string(j.t.MwlEGN),
                                        value: 1,
                                    },
                                ],
                                onChange: P,
                                value: +!!N,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_SPOILERS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.z6M, {
                            label: j.intl.string(j.t.QgwmVz),
                            description: j.intl.string(j.t.TYnRkS),
                            options: [
                                {
                                    name: j.intl.string(j.t["KFH/me"]),
                                    value: m.P6Q.ON_CLICK,
                                },
                                {
                                    name: j.intl.string(j.t.K5VTBE),
                                    value: m.P6Q.IF_MODERATOR,
                                },
                                {
                                    name: j.intl.string(j.t.Pe1RbL),
                                    value: m.P6Q.ALWAYS,
                                },
                            ],
                            onChange: (e) => x.gs.updateSetting(e),
                            value: b,
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: p.H.CHAT_CHANNEL_LIST_PREVIEWS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.z6M, {
                            label: j.intl.string(j.t.OAOUoQ),
                            options: [
                                {
                                    name: j.intl.string(j.t["8K53DF"]),
                                    value: o.P.ALL,
                                },
                                {
                                    name: j.intl.string(j.t.Gw11zg),
                                    value: o.P.UNREADS,
                                },
                                {
                                    name: j.intl.string(j.t.R2Ok7F),
                                    value: o.P.NONE,
                                },
                            ],
                            onChange: (e) => x.wT.updateSetting(e),
                            value: I,
                        }),
                    ],
                }),
            ],
        }),
    });
}
