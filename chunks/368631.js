n.d(t, { zj: () => y }), n(321073);
var a = n(627968),
    i = n(554146),
    s = n(397927),
    l = n(631670),
    r = n(252452),
    o = n(361739),
    d = n(932001),
    c = n(379587),
    u = n(704591),
    m = n(103738),
    h = n(745109),
    x = n(836602),
    p = n(517235),
    g = n(768908),
    _ = n(586685),
    f = n(790076),
    v = n(224515),
    b = n(16986),
    j = n(682262),
    A = n(531525),
    C = n(652215),
    T = n(985018);
let E = () => {
        let e = [];
        return e.push(i.M.DISPLAY_NAME_STYLES_NEW_BADGE), e;
    },
    S = () => {
        let e = E(),
            [t] = (0, d.kn)(e);
        return t === i.M.DISPLAY_NAME_STYLES_NEW_BADGE ? (0, a.jsx)(s.LpS, { text: T.intl.string(T.t.y2b7CA) }) : null;
    },
    y = (e) => {
        let { unseenGiftCount: t, isOverlaySupported: n, paymentsBlocked: d, isEligibleForQuests: y } = e;
        return Object.freeze({
            [A.H.PROFILE_CUSTOMIZATION]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                type: o.Py.WIDE,
                searchableTitles: [T.intl.string(T.t["vi7f+q"])],
                label: T.intl.string(T.t["vi7f+q"]),
                ariaLabel: T.intl.string(T.t["vi7f+q"]),
                element: h.A,
                newIndicator: (0, a.jsx)(S, {}),
                newIndicatorDismissibleContentTypes: [...E()],
                notice: { stores: [x.A], element: m.A },
                onSettingsClose: () => {
                    (0, l.F7)(), r.A.clearSubsection(C.nc_.PROFILE_CUSTOMIZATION);
                },
            },
            [A.H.PROFILE_DISPLAY_NAME]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [T.intl.string(T.t["9AjdkD"])],
                parent: A.H.PROFILE_CUSTOMIZATION,
            },
            [A.H.PROFILE_USER_PROFILE]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [T.intl.string(T.t["2p07FR"]), T.intl.string(T.t["7vhiqk"])],
                parent: A.H.PROFILE_CUSTOMIZATION,
            },
            [A.H.PROFILE_SERVER_PROFILES]: {
                section: C.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [T.intl.string(T.t.kPHroX)],
                parent: A.H.PROFILE_CUSTOMIZATION,
            },
            [A.H.PREMIUM]: {
                section: C.nc_.PREMIUM,
                ariaLabel: T.intl.string(T.t.Ipxkog),
                searchableTitles: [T.intl.string(T.t.Ipxkog)],
                label: T.intl.string(T.t.Ipxkog),
                element: p.A,
            },
            [A.H.GUILD_BOOSTING]: {
                section: C.nc_.GUILD_BOOSTING,
                searchableTitles: [T.intl.string(T.t["+CbP2v"])],
                label: T.intl.string(T.t["+CbP2v"]),
                element: v.A,
            },
            [A.H.GIFT_INVENTORY]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [T.intl.string(T.t["jcSP+g"])],
                label: T.intl.string(T.t["jcSP+g"]),
                element: _.Ay,
                ariaLabel: T.intl.string(T.t["jcSP+g"]),
                badgeCount: t,
            },
            [A.H.GIFT_CODE_REDEMPTION]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [T.intl.string(T.t["il+VCo"])],
                parent: A.H.GIFT_INVENTORY,
                predicate: () => !d,
            },
            [A.H.GIFT_INVENTORY_QUESTS]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [T.intl.string(T.t.JALI2K)],
                parent: A.H.GIFT_INVENTORY,
                predicate: () => y,
            },
            [A.H.GIFT_INVENTORY_LIST]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [T.intl.string(T.t["9KeUbY"])],
                parent: A.H.GIFT_INVENTORY,
                predicate: () => !d,
            },
            [A.H.GIFT_BLOCKED_PAYMENTS]: {
                section: C.nc_.INVENTORY,
                searchableTitles: [T.intl.string(T.t.vwMEHS)],
                parent: A.H.GIFT_INVENTORY,
                predicate: () => d,
            },
            [A.H.CHAT]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t["/VQax8"])],
                label: T.intl.string(T.t["/VQax8"]),
                ariaLabel: T.intl.string(T.t["/VQax8"]),
                element: b.A,
            },
            [A.H.MESSAGE_SEARCH]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.VYODPD)],
                parent: A.H.CHAT,
            },
            [A.H.MESSAGE_SEARCH_ALL_DMS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t["t4+fbe"])],
                parent: A.H.MESSAGE_SEARCH,
            },
            [A.H.CHAT_INLINE_MEDIA]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.U68Dgp)],
                parent: A.H.CHAT,
            },
            [A.H.CHAT_INLINE_MEDIA_LINKS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.U47N1p)],
                parent: A.H.CHAT_INLINE_MEDIA,
            },
            [A.H.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.VP11No)],
                parent: A.H.CHAT_INLINE_MEDIA,
            },
            [A.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t["5S2AK+"])],
                parent: A.H.CHAT_INLINE_MEDIA,
            },
            [A.H.CHAT_EMBEDS]: { section: C.nc_.TEXT, searchableTitles: [T.intl.string(T.t.PWZOn4)], parent: A.H.CHAT },
            [A.H.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.xX0ZTA)],
                parent: A.H.CHAT_EMBEDS,
            },
            [A.H.CHAT_EMOJI]: { section: C.nc_.TEXT, searchableTitles: [T.intl.string(T.t.sMOuuS)], parent: A.H.CHAT },
            [A.H.CHAT_EMOJI_REACTIONS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.Iv24sm)],
                parent: A.H.CHAT_EMOJI,
            },
            [A.H.CHAT_EMOJI_EMOTICONS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t["79qal8"])],
                parent: A.H.CHAT_EMOJI,
            },
            [A.H.CHAT_STICKERS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t["6NtAuJ"])],
                parent: A.H.CHAT,
            },
            [A.H.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t["29xPVZ"])],
                parent: A.H.CHAT_STICKERS,
            },
            [A.H.CHAT_SOUNDMOJI]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.EHlAMc)],
                parent: A.H.CHAT,
                predicate: () => (0, u.AA)({ location: "SettingsRendererConfig" }),
            },
            [A.H.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t["CtYr+U"])],
                parent: A.H.CHAT_SOUNDMOJI,
                predicate: () => (0, u.AA)({ location: "SettingsRendererConfig" }),
            },
            [A.H.CHAT_FAVORITES]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.k8fFjp)],
                parent: A.H.CHAT,
                predicate: () => c.o.getConfig({ location: "SettingsRendererConfig" }).enabled,
                newIndicator: (0, a.jsx)(s.LpS, { text: T.intl.string(T.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: [i.M.FAVORITES_GUILD_NEW_BADGE],
            },
            [A.H.CHAT_FAVORITES_SHOW_SERVER]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.k8fFjp)],
                parent: A.H.CHAT_FAVORITES,
                predicate: () => c.o.getConfig({ location: "SettingsRendererConfig" }).enabled,
            },
            [A.H.CHAT_TEXT_BOX]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.afR0pI)],
                parent: A.H.CHAT,
            },
            [A.H.CHAT_TEXT_BOX_PREVIEW]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.AqGrEI)],
                parent: A.H.CHAT_TEXT_BOX,
            },
            [A.H.CHAT_THREADS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.B2panI)],
                parent: A.H.CHAT,
            },
            [A.H.CHAT_THREADS_SPLIT_VIEW]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.AInv5m)],
                parent: A.H.CHAT_THREADS,
            },
            [A.H.CHAT_SPOILERS]: {
                section: C.nc_.TEXT,
                searchableTitles: [T.intl.string(T.t.QgwmVz)],
                parent: A.H.CHAT,
            },
            [A.H.REGISTERED_GAMES]: {
                section: C.nc_.REGISTERED_GAMES,
                searchableTitles: [T.intl.string(T.t.AVDyEj)],
                label: T.intl.string(T.t.AVDyEj),
                element: g.Ay,
                predicate: () => (0, j.Pi)(),
            },
            [A.H.OVERLAY]: {
                section: C.nc_.OVERLAY,
                searchableTitles: [T.intl.string(T.t["9cb1Uz"]), T.intl.string(T.t.HcoRu0)],
                label: T.intl.string(T.t["9cb1Uz"]),
                element: f.Ay,
                predicate: () => n,
            },
        });
    };
