n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    o = n(46054),
    d = n(753806),
    c = n(145331),
    u = n(195043),
    _ = n(954571),
    m = n(253932),
    g = n(790174),
    A = n(531525),
    x = n(652215),
    h = n(985018);
function p() {
    let e = m.ML.useSetting(),
        t = m.eK.useSetting(),
        n = m.SI.useSetting(),
        p = m.gs.useSetting(),
        T = m.SY.useSetting(),
        E = m._z.useSetting(),
        S = m.j7.useSetting(),
        C = m.X6.useSetting(),
        f = m.hD.useSetting(),
        b = m.rs.useSetting(),
        N = m.jW.useSetting(),
        I = m.Hu.useSetting(),
        { analyticsLocations: v } = (0, r.Ay)(a.A.TEXT_AND_IMAGES),
        j = s.useCallback((e) => {
            let t = 1 === e;
            t ? d.A.cleanUpPrivateChannelSearchState() : d.A.cleanUpSearchState({ type: x.I4_.DMS }),
                (0, c._k)({
                    prevIsCrossDMSettingEnabled: m.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: c.vy.USER_SETTINGS,
                }),
                m.Hu.updateSetting(t);
        }, []);
    return (0, i.jsx)(g.A, {
        title: h.intl.string(h.t["/VQax8"]),
        children: (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(u.x, {
                    setting: A.Ho.CHAT_INLINE_MEDIA,
                    children: (0, i.jsxs)(l.nVY, {
                        label: h.intl.string(h.t.U68Dgp),
                        children: [
                            (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: f,
                                    onChange: m.hD.updateSetting,
                                    label: h.intl.string(h.t.U47N1p),
                                }),
                            }),
                            (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: C,
                                    description: h.intl.formatToPlainString(h.t.qjjvqO, { maxSize: 10 }),
                                    onChange: m.X6.updateSetting,
                                    label: h.intl.string(h.t.VP11No),
                                }),
                            }),
                            (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: E,
                                    description: h.intl.string(h.t.T0rbtM),
                                    onChange: m._z.updateSetting,
                                    label: h.intl.string(h.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.CHAT_EMBEDS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: h.intl.string(h.t.PWZOn4),
                            children: (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: b,
                                    onChange: m.rs.updateSetting,
                                    label: h.intl.string(h.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.CHAT_EMOJI,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsxs)(l.nVY, {
                            label: h.intl.string(h.t.sMOuuS),
                            children: [
                                (0, i.jsx)(u.x, {
                                    setting: A.Ho.CHAT_EMOJI_REACTIONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: N,
                                        onChange: m.jW.updateSetting,
                                        label: h.intl.string(h.t.Iv24sm),
                                    }),
                                }),
                                (0, i.jsx)(u.x, {
                                    setting: A.Ho.CHAT_EMOJI_EMOTICONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: S,
                                        description: o.A.parse(h.intl.string(h.t["20dvuQ"])),
                                        onChange: m.j7.updateSetting,
                                        label: h.intl.string(h.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.CHAT_STICKERS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: h.intl.string(h.t["6NtAuJ"]),
                            children: (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: e,
                                    description: h.intl.string(h.t["/eVrj8"]),
                                    onChange: (e) => {
                                        _.default.track(x.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: x.JJy.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: v,
                                        }),
                                            m.ML.updateSetting(e);
                                    },
                                    label: h.intl.string(h.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.CHAT_SOUNDMOJI,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: h.intl.string(h.t.EHlAMc),
                            children: (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: t,
                                    description: h.intl.string(h.t.hrSIhN),
                                    onChange: (e) => {
                                        _.default.track(x.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: x.JJy.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            m.eK.updateSetting(e);
                                    },
                                    label: h.intl.string(h.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.CHAT_TEXT_BOX,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: h.intl.string(h.t.afR0pI),
                            children: (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_TEXT_BOX_PREVIEW,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: n,
                                    onChange: (e) => {
                                        _.default.track(x.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                            enabled: e,
                                            location: { section: x.JJy.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            m.SI.updateSetting(e);
                                    },
                                    label: h.intl.string(h.t.AqGrEI),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.CHAT_THREADS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: h.intl.string(h.t.B2panI),
                            children: (0, i.jsx)(u.x, {
                                setting: A.Ho.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: T,
                                    onChange: m.SY.updateSetting,
                                    label: h.intl.string(h.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.MESSAGE_SEARCH,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(u.x, {
                            setting: A.Ho.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, i.jsx)(l.z6M, {
                                label: h.intl.string(h.t["NxjN+q"]),
                                options: [
                                    { name: h.intl.string(h.t["t+fGsk"]), value: 0 },
                                    { name: h.intl.string(h.t.MwlEGN), value: 1 },
                                ],
                                onChange: j,
                                value: +!!I,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: A.Ho.CHAT_SPOILERS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.z6M, {
                            label: h.intl.string(h.t.QgwmVz),
                            description: h.intl.string(h.t.TYnRkS),
                            options: [
                                { name: h.intl.string(h.t["KFH/me"]), value: x.P6Q.ON_CLICK },
                                { name: h.intl.string(h.t.K5VTBE), value: x.P6Q.IF_MODERATOR },
                                { name: h.intl.string(h.t.Pe1RbL), value: x.P6Q.ALWAYS },
                            ],
                            onChange: (e) => m.gs.updateSetting(e),
                            value: p,
                        }),
                    ],
                }),
            ],
        }),
    });
}
