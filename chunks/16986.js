n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(793574),
    r = n(688810),
    o = n(46054),
    c = n(753806),
    d = n(145331),
    u = n(195043),
    _ = n(954571),
    m = n(253932),
    A = n(790174),
    g = n(531525),
    h = n(652215),
    x = n(985018);
function p() {
    let e = m.ML.useSetting(),
        t = m.eK.useSetting(),
        n = m.SI.useSetting(),
        p = m.gs.useSetting(),
        E = m.SY.useSetting(),
        C = m._z.useSetting(),
        T = m.j7.useSetting(),
        S = m.X6.useSetting(),
        I = m.hD.useSetting(),
        f = m.rs.useSetting(),
        N = m.jW.useSetting(),
        b = m.Hu.useSetting(),
        { analyticsLocations: j } = (0, r.Ay)(l.A.TEXT_AND_IMAGES),
        v = s.useCallback((e) => {
            let t = 1 === e;
            t ? c.A.cleanUpPrivateChannelSearchState() : c.A.cleanUpSearchState({ type: h.I4_.DMS }),
                (0, d._k)({
                    prevIsCrossDMSettingEnabled: m.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: d.vy.USER_SETTINGS,
                }),
                m.Hu.updateSetting(t);
        }, []);
    return (0, i.jsx)(A.A, {
        title: x.intl.string(x.t["/VQax8"]),
        children: (0, i.jsxs)(a.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(u.x, {
                    setting: g.H.CHAT_INLINE_MEDIA,
                    children: (0, i.jsxs)(a.nVY, {
                        label: x.intl.string(x.t.U68Dgp),
                        children: [
                            (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: I,
                                    onChange: m.hD.updateSetting,
                                    label: x.intl.string(x.t.U47N1p),
                                }),
                            }),
                            (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: S,
                                    description: x.intl.formatToPlainString(x.t.qjjvqO, { maxSize: 10 }),
                                    onChange: m.X6.updateSetting,
                                    label: x.intl.string(x.t.VP11No),
                                }),
                            }),
                            (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: C,
                                    description: x.intl.string(x.t.T0rbtM),
                                    onChange: m._z.updateSetting,
                                    label: x.intl.string(x.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.CHAT_EMBEDS,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsx)(a.nVY, {
                            label: x.intl.string(x.t.PWZOn4),
                            children: (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: f,
                                    onChange: m.rs.updateSetting,
                                    label: x.intl.string(x.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.CHAT_EMOJI,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsxs)(a.nVY, {
                            label: x.intl.string(x.t.sMOuuS),
                            children: [
                                (0, i.jsx)(u.x, {
                                    setting: g.H.CHAT_EMOJI_REACTIONS,
                                    children: (0, i.jsx)(a.dOG, {
                                        checked: N,
                                        onChange: m.jW.updateSetting,
                                        label: x.intl.string(x.t.Iv24sm),
                                    }),
                                }),
                                (0, i.jsx)(u.x, {
                                    setting: g.H.CHAT_EMOJI_EMOTICONS,
                                    children: (0, i.jsx)(a.dOG, {
                                        checked: T,
                                        description: o.A.parse(x.intl.string(x.t["20dvuQ"])),
                                        onChange: m.j7.updateSetting,
                                        label: x.intl.string(x.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.CHAT_STICKERS,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsx)(a.nVY, {
                            label: x.intl.string(x.t["6NtAuJ"]),
                            children: (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: e,
                                    description: x.intl.string(x.t["/eVrj8"]),
                                    onChange: (e) => {
                                        _.default.track(h.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: h.JJy.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: j,
                                        }),
                                            m.ML.updateSetting(e);
                                    },
                                    label: x.intl.string(x.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.CHAT_SOUNDMOJI,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsx)(a.nVY, {
                            label: x.intl.string(x.t.EHlAMc),
                            children: (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: t,
                                    description: x.intl.string(x.t.hrSIhN),
                                    onChange: (e) => {
                                        _.default.track(h.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: h.JJy.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            m.eK.updateSetting(e);
                                    },
                                    label: x.intl.string(x.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.CHAT_TEXT_BOX,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsx)(a.nVY, {
                            label: x.intl.string(x.t.afR0pI),
                            children: (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_TEXT_BOX_PREVIEW,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: n,
                                    onChange: (e) => {
                                        _.default.track(h.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                            enabled: e,
                                            location: { section: h.JJy.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            m.SI.updateSetting(e);
                                    },
                                    label: x.intl.string(x.t.AqGrEI),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.CHAT_THREADS,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsx)(a.nVY, {
                            label: x.intl.string(x.t.B2panI),
                            children: (0, i.jsx)(u.x, {
                                setting: g.H.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, i.jsx)(a.dOG, {
                                    checked: E,
                                    onChange: m.SY.updateSetting,
                                    label: x.intl.string(x.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.MESSAGE_SEARCH,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsx)(u.x, {
                            setting: g.H.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, i.jsx)(a.z6M, {
                                label: x.intl.string(x.t["NxjN+q"]),
                                options: [
                                    { name: x.intl.string(x.t["t+fGsk"]), value: 0 },
                                    { name: x.intl.string(x.t.MwlEGN), value: 1 },
                                ],
                                onChange: v,
                                value: +!!b,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(u.x, {
                    setting: g.H.CHAT_SPOILERS,
                    children: [
                        (0, i.jsx)(a.cGx, {}),
                        (0, i.jsx)(a.z6M, {
                            label: x.intl.string(x.t.QgwmVz),
                            description: x.intl.string(x.t.TYnRkS),
                            options: [
                                { name: x.intl.string(x.t["KFH/me"]), value: h.P6Q.ON_CLICK },
                                { name: x.intl.string(x.t.K5VTBE), value: h.P6Q.IF_MODERATOR },
                                { name: x.intl.string(x.t.Pe1RbL), value: h.P6Q.ALWAYS },
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
