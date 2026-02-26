n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(793574),
    o = n(688810),
    c = n(181079),
    d = n(422258),
    u = n(616075),
    _ = n(46054),
    m = n(753806),
    A = n(145331),
    g = n(195043),
    h = n(287809),
    x = n(954571),
    p = n(474090),
    E = n(253932),
    C = n(790174),
    T = n(531525),
    S = n(652215),
    I = n(788868),
    f = n(985018),
    N = n(525736);
function b() {
    let e = E.ML.useSetting(),
        t = E.eK.useSetting(),
        n = E.SI.useSetting(),
        b = E.gs.useSetting(),
        j = E.SY.useSetting(),
        v = E._z.useSetting(),
        O = E.j7.useSetting(),
        R = E.X6.useSetting(),
        y = E.hD.useSetting(),
        P = E.rs.useSetting(),
        L = E.jW.useSetting(),
        D = E.ng.useSetting(),
        M = E.Hu.useSetting(),
        { enabled: G } = (0, u.e)({ location: "UserSettingsTextImages" }),
        U = (0, a.bG)([c.A], () => c.A.favoriteServerEnabled),
        k = (0, a.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return null == e || !p.Ay.isPremiumExactly(e, I.PremiumTypes.TIER_2);
        }),
        { analyticsLocations: V } = (0, o.Ay)(r.A.TEXT_AND_IMAGES),
        H = s.useCallback((e) => {
            let t = 1 === e;
            t ? m.A.cleanUpPrivateChannelSearchState() : m.A.cleanUpSearchState({ type: S.I4_.DMS }),
                (0, A._k)({
                    prevIsCrossDMSettingEnabled: E.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: A.vy.USER_SETTINGS,
                }),
                E.Hu.updateSetting(t);
        }, []);
    return (0, i.jsx)(C.A, {
        title: f.intl.string(f.t["/VQax8"]),
        children: (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, i.jsx)(g.x, {
                    setting: T.H.CHAT_INLINE_MEDIA,
                    children: (0, i.jsxs)(l.nVY, {
                        label: f.intl.string(f.t.U68Dgp),
                        children: [
                            (0, i.jsx)(g.x, {
                                setting: T.H.CHAT_INLINE_MEDIA_LINKS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: y,
                                    onChange: E.hD.updateSetting,
                                    label: f.intl.string(f.t.U47N1p),
                                }),
                            }),
                            (0, i.jsx)(g.x, {
                                setting: T.H.CHAT_INLINE_MEDIA_UPLOADS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: R,
                                    description: f.intl.formatToPlainString(f.t.qjjvqO, { maxSize: 10 }),
                                    onChange: E.X6.updateSetting,
                                    label: f.intl.string(f.t.VP11No),
                                }),
                            }),
                            (0, i.jsx)(g.x, {
                                setting: T.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: v,
                                    description: f.intl.string(f.t.T0rbtM),
                                    onChange: E._z.updateSetting,
                                    label: f.intl.string(f.t["w8j+yW"]),
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.CHAT_EMBEDS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: f.intl.string(f.t.PWZOn4),
                            children: (0, i.jsx)(g.x, {
                                setting: T.H.CHAT_EMBEDS_LINK_PREVIEWS,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: P,
                                    onChange: E.rs.updateSetting,
                                    label: f.intl.string(f.t.xX0ZTA),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.CHAT_EMOJI,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsxs)(l.nVY, {
                            label: f.intl.string(f.t.sMOuuS),
                            children: [
                                (0, i.jsx)(g.x, {
                                    setting: T.H.CHAT_EMOJI_REACTIONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: L,
                                        onChange: E.jW.updateSetting,
                                        label: f.intl.string(f.t.Iv24sm),
                                    }),
                                }),
                                (0, i.jsx)(g.x, {
                                    setting: T.H.CHAT_EMOJI_EMOTICONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: O,
                                        description: _.A.parse(f.intl.string(f.t["20dvuQ"])),
                                        onChange: E.j7.updateSetting,
                                        label: f.intl.string(f.t["79qal8"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.CHAT_STICKERS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: f.intl.string(f.t["6NtAuJ"]),
                            children: (0, i.jsx)(g.x, {
                                setting: T.H.CHAT_STICKERS_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: e,
                                    description: f.intl.string(f.t["/eVrj8"]),
                                    onChange: (e) => {
                                        x.default.track(S.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                            enabled: e,
                                            location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                                            location_stack: V,
                                        }),
                                            E.ML.updateSetting(e);
                                    },
                                    label: f.intl.string(f.t["29xPVZ"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.CHAT_SOUNDMOJI,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: f.intl.string(f.t.EHlAMc),
                            children: (0, i.jsx)(g.x, {
                                setting: T.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: t,
                                    description: f.intl.string(f.t.hrSIhN),
                                    onChange: (e) => {
                                        x.default.track(S.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                            checked: e,
                                            location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                                        }),
                                            E.eK.updateSetting(e);
                                    },
                                    label: f.intl.string(f.t["CtYr+U"]),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.CHAT_TEXT_BOX,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsxs)(l.nVY, {
                            label: f.intl.string(f.t.afR0pI),
                            children: [
                                (0, i.jsx)(g.x, {
                                    setting: T.H.CHAT_TEXT_BOX_PREVIEW,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: n,
                                        onChange: (e) => {
                                            x.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                                enabled: e,
                                                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                                            }),
                                                E.SI.updateSetting(e);
                                        },
                                        label: f.intl.string(f.t.AqGrEI),
                                    }),
                                }),
                                (0, i.jsx)(g.x, {
                                    setting: T.H.CHAT_MENTION_SUGGESTIONS,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: D,
                                        description: f.intl.string(f.t.AaXigo),
                                        onChange: (e) => {
                                            E.ng.updateSetting(e);
                                        },
                                        label: f.intl.string(f.t.uXQ2xT),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                G &&
                    (0, i.jsxs)(g.x, {
                        setting: T.H.CHAT_FAVORITES,
                        children: [
                            (0, i.jsx)(l.cGx, {}),
                            (0, i.jsx)(l.nVY, {
                                label: f.intl.string(f.t.k8fFjp),
                                children: (0, i.jsx)(g.x, {
                                    setting: T.H.CHAT_FAVORITES_SHOW_SERVER,
                                    children: (0, i.jsx)(l.dOG, {
                                        checked: U,
                                        description: f.intl.string(N.default.IF7iE0),
                                        disabled: k,
                                        onChange: d.Qh,
                                        label: f.intl.string(N.default["0h2CcM"]),
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.CHAT_THREADS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.nVY, {
                            label: f.intl.string(f.t.B2panI),
                            children: (0, i.jsx)(g.x, {
                                setting: T.H.CHAT_THREADS_SPLIT_VIEW,
                                children: (0, i.jsx)(l.dOG, {
                                    checked: j,
                                    onChange: E.SY.updateSetting,
                                    label: f.intl.string(f.t.AInv5m),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.MESSAGE_SEARCH,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(g.x, {
                            setting: T.H.MESSAGE_SEARCH_ALL_DMS,
                            children: (0, i.jsx)(l.z6M, {
                                label: f.intl.string(f.t["NxjN+q"]),
                                options: [
                                    { name: f.intl.string(f.t["t+fGsk"]), value: 0 },
                                    { name: f.intl.string(f.t.MwlEGN), value: 1 },
                                ],
                                onChange: H,
                                value: +!!M,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(g.x, {
                    setting: T.H.CHAT_SPOILERS,
                    children: [
                        (0, i.jsx)(l.cGx, {}),
                        (0, i.jsx)(l.z6M, {
                            label: f.intl.string(f.t.QgwmVz),
                            description: f.intl.string(f.t.TYnRkS),
                            options: [
                                { name: f.intl.string(f.t["KFH/me"]), value: S.P6Q.ON_CLICK },
                                { name: f.intl.string(f.t.K5VTBE), value: S.P6Q.IF_MODERATOR },
                                { name: f.intl.string(f.t.Pe1RbL), value: S.P6Q.ALWAYS },
                            ],
                            onChange: (e) => E.gs.updateSetting(e),
                            value: b,
                        }),
                    ],
                }),
            ],
        }),
    });
}
