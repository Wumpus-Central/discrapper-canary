n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(793574),
    r = n(688810),
    o = n(46054),
    d = n(753806),
    c = n(145331),
    u = n(195043),
    h = n(954571),
    A = n(253932),
    g = n(790174),
    m = n(531525),
    p = n(652215),
    _ = n(985018);
function x() {
    let e = A.ML.useSetting(),
        t = A.eK.useSetting(),
        n = A.SI.useSetting(),
        x = A.gs.useSetting(),
        f = A.SY.useSetting(),
        E = A._z.useSetting(),
        C = A.j7.useSetting(),
        I = A.X6.useSetting(),
        S = A.hD.useSetting(),
        b = A.rs.useSetting(),
        N = A.jW.useSetting(),
        T = A.ng.useSetting(),
        j = A.Hu.useSetting(),
        { analyticsLocations: v } = (0, r.Ay)(a.A.TEXT_AND_IMAGES),
        y = l.useCallback((e) => {
            let t = 1 === e;
            t ? d.A.cleanUpPrivateChannelSearchState() : d.A.cleanUpSearchState({ type: p.I4_.DMS }),
                (0, c._k)({
                    prevIsCrossDMSettingEnabled: A.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: c.vy.USER_SETTINGS,
                }),
                A.Hu.updateSetting(t);
        }, []);
    return (0, i.jsx)(g.A, {
        title: _.intl.string(_.t["/VQax8"]),
        children: (0, i.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(u.x, {
                    setting: m.H.CHAT_INLINE_MEDIA,
                    children: (0, i.jsxs)(s.nVY, {
                        label: _.intl.string(_.t.U68Dgp),
                        children: [
                            (0, i.jsx)(u.x, {
                                setting: m.H.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, i.jsx)(s.dOG, {
                                    checked: S,
                                    onChange: A.hD.updateSetting,
                                    label: _.intl.string(_.t.U47N1p),
                                }),
                            }),
                            (0, i.jsx)(u.x, {
                                setting: m.H.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, i.jsx)(s.dOG, {
                                    checked: I,
                                    description: _.intl.formatToPlainString(_.t.qjjvqO, { maxSize: 10 }),
                                    onChange: A.X6.updateSetting,
                                    label: _.intl.string(_.t.VP11No),
                                }),
                            }),
                            (0, i.jsx)(u.x, {
                                setting: m.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, i.jsx)(s.dOG, {
                                    checked: E,
                                    description: _.intl.string(_.t.T0rbtM),
                                    onChange: A._z.updateSetting,
                                    label: _.intl.string(_.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.CHAT_EMBEDS,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsx)(s.nVY, {
                            label: _.intl.string(_.t.PWZOn4),
                            children: (0, i.jsx)(u.x, {
                                setting: m.H.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, i.jsx)(s.dOG, {
                                    checked: b,
                                    onChange: A.rs.updateSetting,
                                    label: _.intl.string(_.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.CHAT_EMOJI,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsxs)(s.nVY, {
                            label: _.intl.string(_.t.sMOuuS),
                            children: [
                                (0, i.jsx)(u.x, {
                                    setting: m.H.CHAT_EMOJI_REACTIONS,
                                    children: (0, i.jsx)(s.dOG, {
                                        checked: N,
                                        onChange: A.jW.updateSetting,
                                        label: _.intl.string(_.t.Iv24sm),
                                    }),
                                }),
                                (0, i.jsx)(u.x, {
                                    setting: m.H.CHAT_EMOJI_EMOTICONS,
                                    children: (0, i.jsx)(s.dOG, {
                                        checked: C,
                                        description: o.A.parse(_.intl.string(_.t["20dvuQ"])),
                                        onChange: A.j7.updateSetting,
                                        label: _.intl.string(_.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.CHAT_STICKERS,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsx)(s.nVY, {
                            label: _.intl.string(_.t["6NtAuJ"]),
                            children: (0, i.jsx)(u.x, {
                                setting: m.H.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, i.jsx)(s.dOG, {
                                    checked: e,
                                    description: _.intl.string(_.t["/eVrj8"]),
                                    onChange: (e) => {
                                        h.default.track(p.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: p.JJy.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: v,
                                        }),
                                            A.ML.updateSetting(e);
                                    },
                                    label: _.intl.string(_.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.CHAT_SOUNDMOJI,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsx)(s.nVY, {
                            label: _.intl.string(_.t.EHlAMc),
                            children: (0, i.jsx)(u.x, {
                                setting: m.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(s.dOG, {
                                    checked: t,
                                    description: _.intl.string(_.t.hrSIhN),
                                    onChange: (e) => {
                                        h.default.track(p.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: p.JJy.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            A.eK.updateSetting(e);
                                    },
                                    label: _.intl.string(_.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.CHAT_TEXT_BOX,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsxs)(s.nVY, {
                            label: _.intl.string(_.t.afR0pI),
                            children: [
                                (0, i.jsx)(u.x, {
                                    setting: m.H.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, i.jsx)(s.dOG, {
                                        checked: n,
                                        onChange: (e) => {
                                            h.default.track(p.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: p.JJy.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                A.SI.updateSetting(e);
                                        },
                                        label: _.intl.string(_.t.AqGrEI),
                                    }),
                                }),
                                (0, i.jsx)(u.x, {
                                    setting: m.H.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, i.jsx)(s.dOG, {
                                        checked: T,
                                        description: _.intl.string(_.t.AaXigo),
                                        onChange: (e) => {
                                            A.ng.updateSetting(e);
                                        },
                                        label: _.intl.string(_.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.CHAT_THREADS,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsx)(s.nVY, {
                            label: _.intl.string(_.t.B2panI),
                            children: (0, i.jsx)(u.x, {
                                setting: m.H.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, i.jsx)(s.dOG, {
                                    checked: f,
                                    onChange: A.SY.updateSetting,
                                    label: _.intl.string(_.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.MESSAGE_SEARCH,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsx)(u.x, {
                            setting: m.H.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, i.jsx)(s.z6M, {
                                label: _.intl.string(_.t["NxjN+q"]),
                                options: [
                                    { name: _.intl.string(_.t["t+fGsk"]), value: 0 },
                                    { name: _.intl.string(_.t.MwlEGN), value: 1 },
                                ],
                                onChange: y,
                                value: +!!j,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: m.H.CHAT_SPOILERS,
                    children: [
                        (0, i.jsx)(s.cGx, {}),
                        (0, i.jsx)(s.z6M, {
                            label: _.intl.string(_.t.QgwmVz),
                            description: _.intl.string(_.t.TYnRkS),
                            options: [
                                { name: _.intl.string(_.t["KFH/me"]), value: p.P6Q.ON_CLICK },
                                { name: _.intl.string(_.t.K5VTBE), value: p.P6Q.IF_MODERATOR },
                                { name: _.intl.string(_.t.Pe1RbL), value: p.P6Q.ALWAYS },
                            ],
                            onChange: (e) => A.gs.updateSetting(e),
                            value: x,
                        }),
                    ],
                }),
            ],
        }),
    });
}
