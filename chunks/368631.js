n.d(t, { zj: () => v }), n(321073);
var i = n(627968),
    s = n(554146),
    l = n(397927),
    a = n(631670),
    r = n(252452),
    o = n(361739),
    d = n(932001),
    c = n(379587),
    u = n(704591),
    m = n(103738),
    _ = n(745109),
    g = n(836602),
    A = n(517235),
    x = n(768908),
    p = n(586685),
    h = n(790076),
    T = n(224515),
    E = n(16986),
    f = n(682262),
    S = n(531525),
    C = n(652215),
    b = n(985018);
let N = () => {
        let e = [];
        return e.push(s.M.WIDGETS_USER_SETTINGS_NEW_BADGE), e.push(s.M.DISPLAY_NAME_STYLES_NEW_BADGE), e;
    },
    I = () => {
        let e = N(),
            [t] = (0, d.kn)(e);
        return t === s.M.DISPLAY_NAME_STYLES_NEW_BADGE || t === s.M.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, i.jsx)(l.LpS, { text: b.intl.string(b.t.y2b7CA) })
            : null;
    },
    v = (e) => {
        let { unseenGiftCount: t, isOverlaySupported: n, paymentsBlocked: d, isEligibleForQuests: v } = e;
        return Object.freeze({
            [S.H.PROFILE_CUSTOMIZATION]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                type: o.Py.WIDE,
                searchableTitles: [b.intl.string(b.t["vi7f+q"])],
                label: b.intl.string(b.t["vi7f+q"]),
                ariaLabel: b.intl.string(b.t["vi7f+q"]),
                element: _.A,
                newIndicator: (0, i.jsx)(I, {}),
                newIndicatorDismissibleContentTypes: [...N()],
                notice: { stores: [g.A], element: m.A },
                onSettingsClose: () => {
                    (0, a.F7)(), r.A.clearSubsection(C.nc_.PROFILE_CUSTOMIZATION);
                },
            },
            [S.H.PROFILE_DISPLAY_NAME]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [b.intl.string(b.t["9AjdkD"])],
                parent: S.H.PROFILE_CUSTOMIZATION,
            },
            [S.H.PROFILE_USER_PROFILE]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [b.intl.string(b.t["2p07FR"]), b.intl.string(b.t["7vhiqk"])],
                parent: S.H.PROFILE_CUSTOMIZATION,
            },
            [S.H.PROFILE_SERVER_PROFILES]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [b.intl.string(b.t.kPHroX)],
                parent: S.H.PROFILE_CUSTOMIZATION,
            },
            [S.H.PREMIUM]: {
                section: C.nc_.PREMIUM,
                ariaLabel: b.intl.string(b.t.Ipxkog),
                searchableTitles: [b.intl.string(b.t.Ipxkog)],
                label: b.intl.string(b.t.Ipxkog),
                element: A.A,
            },
            [S.H.GUILD_BOOSTING]: {
                section: C.nc_.GUILD_BOOSTING,
                searchableTitles: [b.intl.string(b.t["+CbP2v"])],
                label: b.intl.string(b.t["+CbP2v"]),
                element: T.A,
            },
            [S.H.GIFT_INVENTORY]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t["jcSP+g"])],
                label: b.intl.string(b.t["jcSP+g"]),
                element: p.Ay,
                ariaLabel: b.intl.string(b.t["jcSP+g"]),
                badgeCount: t,
            },
            [S.H.GIFT_CODE_REDEMPTION]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t["il+VCo"])],
                parent: S.H.GIFT_INVENTORY,
                predicate: () => !d,
            },
            [S.H.GIFT_INVENTORY_QUESTS]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t.JALI2K)],
                parent: S.H.GIFT_INVENTORY,
                predicate: () => v,
            },
            [S.H.GIFT_INVENTORY_LIST]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t["9KeUbY"])],
                parent: S.H.GIFT_INVENTORY,
                predicate: () => !d,
            },
            [S.H.GIFT_BLOCKED_PAYMENTS]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t.vwMEHS)],
                parent: S.H.GIFT_INVENTORY,
                predicate: () => d,
            },
            [S.H.CHAT]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t["/VQax8"])],
                label: b.intl.string(b.t["/VQax8"]),
                ariaLabel: b.intl.string(b.t["/VQax8"]),
                element: E.A,
            },
            [S.H.MESSAGE_SEARCH]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.VYODPD)],
                parent: S.H.CHAT,
            },
            [S.H.MESSAGE_SEARCH_ALL_DMS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t["t4+fbe"])],
                parent: S.H.MESSAGE_SEARCH,
            },
            [S.H.CHAT_INLINE_MEDIA]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.U68Dgp)],
                parent: S.H.CHAT,
            },
            [S.H.CHAT_INLINE_MEDIA_LINKS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.U47N1p)],
                parent: S.H.CHAT_INLINE_MEDIA,
            },
            [S.H.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.VP11No)],
                parent: S.H.CHAT_INLINE_MEDIA,
            },
            [S.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t["5S2AK+"])],
                parent: S.H.CHAT_INLINE_MEDIA,
            },
            [S.H.CHAT_EMBEDS]: { section: C.nc_.TEXT, searchableTitles: [b.intl.string(b.t.PWZOn4)], parent: S.H.CHAT },
            [S.H.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.xX0ZTA)],
                parent: S.H.CHAT_EMBEDS,
            },
            [S.H.CHAT_EMOJI]: { section: C.nc_.TEXT, searchableTitles: [b.intl.string(b.t.sMOuuS)], parent: S.H.CHAT },
            [S.H.CHAT_EMOJI_REACTIONS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.Iv24sm)],
                parent: S.H.CHAT_EMOJI,
            },
            [S.H.CHAT_EMOJI_EMOTICONS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t["79qal8"])],
                parent: S.H.CHAT_EMOJI,
            },
            [S.H.CHAT_STICKERS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t["6NtAuJ"])],
                parent: S.H.CHAT,
            },
            [S.H.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t["29xPVZ"])],
                parent: S.H.CHAT_STICKERS,
            },
            [S.H.CHAT_SOUNDMOJI]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.EHlAMc)],
                parent: S.H.CHAT,
                predicate: () => (0, u.AA)({ location: "SettingsRendererConfig" }),
            },
            [S.H.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t["CtYr+U"])],
                parent: S.H.CHAT_SOUNDMOJI,
                predicate: () => (0, u.AA)({ location: "SettingsRendererConfig" }),
            },
            [S.H.CHAT_FAVORITES]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.k8fFjp)],
                parent: S.H.CHAT,
                predicate: () => c.o.getConfig({ location: "SettingsRendererConfig" }).enabled,
                newIndicator: (0, i.jsx)(l.LpS, { text: b.intl.string(b.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: [s.M.FAVORITES_GUILD_NEW_BADGE],
            },
            [S.H.CHAT_FAVORITES_SHOW_SERVER]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.k8fFjp)],
                parent: S.H.CHAT_FAVORITES,
                predicate: () => c.o.getConfig({ location: "SettingsRendererConfig" }).enabled,
            },
            [S.H.CHAT_TEXT_BOX]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.afR0pI)],
                parent: S.H.CHAT,
            },
            [S.H.CHAT_TEXT_BOX_PREVIEW]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.AqGrEI)],
                parent: S.H.CHAT_TEXT_BOX,
            },
            [S.H.CHAT_THREADS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.B2panI)],
                parent: S.H.CHAT,
            },
            [S.H.CHAT_THREADS_SPLIT_VIEW]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.AInv5m)],
                parent: S.H.CHAT_THREADS,
            },
            [S.H.CHAT_SPOILERS]: {
                section: C.nc_.TEXT,
                searchableTitles: [b.intl.string(b.t.QgwmVz)],
                parent: S.H.CHAT,
            },
            [S.H.REGISTERED_GAMES]: {
                section: C.nc_.REGISTERED_GAMES,
                searchableTitles: [b.intl.string(b.t.AVDyEj)],
                label: b.intl.string(b.t.AVDyEj),
                element: x.Ay,
                predicate: () => (0, f.Pi)(),
            },
            [S.H.OVERLAY]: {
                section: C.nc_.OVERLAY,
                searchableTitles: [b.intl.string(b.t["9cb1Uz"]), b.intl.string(b.t.HcoRu0)],
                label: b.intl.string(b.t["9cb1Uz"]),
                element: h.Ay,
                predicate: () => n,
            },
        });
    };
