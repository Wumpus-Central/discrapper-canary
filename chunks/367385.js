n.d(t, { Bx: () => eg, Ay: () => eC, Gm: () => eu, Q_: () => ec, zF: () => eA, zR: () => eE });
var i,
    l = n(192308),
    r = n(793322),
    s = n(174768),
    a = n(186111),
    o = n(309010),
    d = n(967198),
    c = n(114129),
    u = n(442325),
    A = n(774603),
    h = n(176522),
    E = n(435558),
    g = n.n(E),
    C = n(691540),
    _ = n(857250),
    I = n(97483),
    T = n(734057),
    p = n(147036),
    S = n(957565),
    N = n(375708);
let m = (0, E.throttle)(() => (0, C.P0)((0, _.o)(N.intl.string(N.t["+5kSoW"]), I.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var L = n(265422),
    f = n(625494),
    O = n(652215),
    b = n(272613),
    R = n(819638),
    v = n(723702),
    y = n(763827),
    U = n(64460),
    D = n(92960),
    G = n(739008),
    M = n(314519),
    x = n(837057),
    P = n(310419),
    w = n(488995),
    V = n(675704),
    j = n(806964),
    H = n(552049),
    B = n(877991),
    F = n(332779),
    k = n(274794),
    W = n(928531),
    K = n(251494),
    Y = n(82038),
    Z = n(14214),
    z = n(151199),
    X = n(975571),
    J = n(28647),
    Q = n(851109);
let q = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: g().debounce(
        () => {
            if (f._.hasSubscribers(O.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (f._.dispatch(O.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
        },
        100,
        { leading: !0 },
    ),
};
var $ = n(478437),
    ee = n(367513),
    et = n(604681),
    en = n(198052),
    ei = n(47675),
    el = n(999291),
    er = n(761640),
    es = n(467691),
    ea = n(674272),
    eo = n(431804),
    ed = n(406975),
    ec =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function eu(e) {
    switch (e) {
        case "NAVIGATION":
            return N.intl.string(N.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return N.intl.string(N.t.bI8F5u);
        case "CHAT":
            return N.intl.string(N.t.hDhbb3);
        case "MISCELLANEOUS":
            return N.intl.string(N.t.cBdwqs);
        case "MESSAGE":
            return N.intl.string(N.t["5fpmX9"]);
        case "DND":
            return N.intl.string(N.t["69j6+4"]);
    }
}
function eA(e) {
    switch (e) {
        case "MESSAGE":
            return N.intl.string(N.t.iepGDn);
        case "DND":
            return N.intl.string(N.t.LBsB0a);
        default:
            return;
    }
}
function eh() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eE[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eE = {
    [O.IWg.SERVER_NEXT]: W.yx,
    [O.IWg.SERVER_PREV]: W.yv,
    [O.IWg.CHANNEL_NEXT]: h.kF,
    [O.IWg.CHANNEL_PREV]: h.Oc,
    [O.IWg.NAVIGATE_BACK]: h.GY,
    [O.IWg.NAVIGATE_FORWARD]: h.M$,
    [O.IWg.UNREAD_NEXT]: es.mH,
    [O.IWg.UNREAD_PREV]: es.US,
    [O.IWg.MENTION_CHANNEL_NEXT]: es.BD,
    [O.IWg.MENTION_CHANNEL_PREV]: es.X8,
    [O.IWg.TOGGLE_PREVIOUS_GUILD]: h.Fv,
    [O.IWg.JUMP_TO_GUILD]: U.J,
    [O.IWg.SUBMIT]: K.X,
    [O.IWg.TEXTAREA_FOCUS]: Y.c,
    [O.IWg.MARK_CHANNEL_READ]: D.Df,
    [O.IWg.MARK_SERVER_READ]: G.P,
    [O.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (f._.dispatch(O.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [O.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(a.A.getLayers().length > 0 || (0, l.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, Q.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = T.A.getChannel(t);
                window.location.pathname.startsWith(O.BVt.CHANNEL(O.gNP)) && null != n
                    ? (0, L.i)(n.guild_id, t)
                    : (0, L.a)(O.BVt.CHANNEL(O.gNP, t ?? void 0));
            })(),
            f._.dispatch(O.jej.TOGGLE_INBOX),
            !1),
    },
    [O.IWg.MARK_TOP_INBOX_CHANNEL_READ]: q,
    [O.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = T.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && en.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === $.r.GUILD_VOICE || i))
                return (ee.A.updateChatOpen(t, !en.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === $.r.DM) {
                let e = er.Ay.getSection(t, n?.isDM()),
                    i = (0, el.AP)(n.getRecipientId()),
                    l = e === O.YvQ.PROFILE;
                return (
                    (0, ei.am)({ displayProfile: i, isProfileOpen: !l }), et.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (et.A.toggleMembersSection(), !1);
        },
    },
    [O.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(X.C), !1),
    },
    [O.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, ea.A)({ source: eo.y.KEYBIND }), !1),
    },
    [O.IWg.TOGGLE_MUTE]: Z.VT,
    [O.IWg.TOGGLE_DEAFEN]: Z.rR,
    [O.IWg.TOGGLE_CATEGORY_COLLAPSED]: z.y,
    [O.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (f._.dispatch(O.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [O.IWg.SCROLL_UP]: H.U5,
    [O.IWg.SCROLL_DOWN]: H.fz,
    [O.IWg.QUICKSWITCHER_SHOW]: V.R,
    [O.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, L.i)(O.ME), f._.safeDispatch(O.jej.TOGGLE_DM_CREATE), !1),
    },
    [O.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (s.A.isOpen()) return !1;
            if (!u.A.isEnabled()) return (a.A.hasLayers() || (0, r.WU)(), !1);
            let e = o.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
        },
    },
    [O.IWg.CLOSE_CHANNEL_TAB]: {
        binds: ["mod+w"],
        comboKeysBindGlobal: !0,
        action() {
            if (!u.A.isEnabled() || a.A.hasLayers() || (0, l.hasAnyModalOpen)() || s.A.isOpen()) return;
            let e = u.A.getActiveTab();
            if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
        },
    },
    [O.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getActiveTab();
            if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
        },
    },
    [O.IWg.SEARCH_EMOJIS]: B.L,
    [O.IWg.SEARCH_GIFS]: F.T,
    [O.IWg.SEARCH_STICKERS]: k.w,
    [O.IWg.TOGGLE_HOTKEYS]: J.z,
    [O.IWg.JUMP_TO_FIRST_UNREAD]: M.s,
    [O.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, l.hasModalOpen)(R.fc)
                ? b.A.updateCreateGuildModal({ slide: R.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : b.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [O.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = T.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || f._.dispatch(O.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [O.IWg.RETURN_TO_AUDIO_CHANNEL]: j.u,
    [O.IWg.CALL_ACCEPT]: A.Yo,
    [O.IWg.CALL_START]: A.OX,
    [O.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (a.A.hasLayers() || (0, l.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (f._.dispatch(O.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [O.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = y.A.getGuildId(),
                n = y.A.getChannelId();
            return (null != n && (0, L.i)(t ?? O.ME, n), !1);
        },
    },
    [O.IWg.ZOOM_IN]: ed.Ur,
    [O.IWg.ZOOM_OUT]: ed.hU,
    [O.IWg.ZOOM_RESET]: ed.O$,
    [O.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId() ?? void 0;
            (0, x.transitionToGlobalDiscovery)({
                tab: w.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: P.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [O.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, v.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [O.IWg.OPEN_CONTEXT_MENU]: {
        binds: ["shift+f10"],
        comboKeysBindGlobal: !0,
        action() {
            let e = document.activeElement;
            return (
                null != e &&
                e !== document.body &&
                (e.dispatchEvent(
                    new MouseEvent("contextmenu", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        clientX: 0,
                        clientY: 0,
                    }),
                ),
                !1)
            );
        },
    },
    [O.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.Ay.getChannelId();
            if (null == e) return !1;
            let t = T.A.getChannel(e);
            if (null == t) return !1;
            let n = T.A.getChannel(t.parent_id),
                i = (0, p.af)(t, n);
            return ((0, S.C)(i, m), !1);
        },
    },
};
function eg() {
    return [
        {
            description: N.intl.string(N.t.bx4Uyz),
            binds: eh(O.IWg.SERVER_PREV, O.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: N.intl.string(N.t["+Wem6h"]),
            binds: eh(O.IWg.CHANNEL_PREV, O.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: N.intl.string(N.t["+2fcdz"]),
            binds: eh(O.IWg.NAVIGATE_BACK, O.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: N.intl.string(N.t.eVmj1H),
            binds: eh(O.IWg.UNREAD_PREV, O.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: N.intl.string(N.t.EcqS7Y),
            binds: eh(O.IWg.MENTION_CHANNEL_PREV, O.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: N.intl.string(N.t["4I3pwW"]), binds: eh(O.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: N.intl.string(N.t.Bqss72), binds: eh(O.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: N.intl.string(N.t.yYsRlD), binds: eh(O.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: N.intl.string(N.t.O7ouXO), binds: eh(O.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: N.intl.string(N.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: N.intl.string(N.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: N.intl.string(N.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: N.intl.string(N.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: N.intl.string(N.t.UaXAPx), binds: eh(O.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: N.intl.string(N.t["5X9vFj"]), binds: eh(O.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: N.intl.string(N.t.wxQFsl), binds: eh(O.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: N.intl.string(N.t["C+XV7f"]), binds: eh(O.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: N.intl.string(N.t["Q+YV/T"]), binds: eh(O.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: N.intl.string(N.t["YEjV+W"]), binds: eh(O.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: N.intl.string(N.t.AcBI9S), binds: eh(O.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: N.intl.string(N.t.JoxNnl), binds: eh(O.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: N.intl.string(N.t["3PHxo8"]), binds: eh(O.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: N.intl.string(N.t.YFl7eb), binds: eh(O.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: N.intl.string(N.t.L3RYYJ), binds: eh(O.IWg.SCROLL_UP, O.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: N.intl.string(N.t["3HAurM"]), binds: eh(O.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: N.intl.string(N.t.rrYBEu), binds: eh(O.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: N.intl.string(N.t.sUJlPL), binds: eh(O.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: N.intl.string(N.t["A+Fv0R"]), binds: eh(O.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: N.intl.string(N.t.tL6eVW), binds: eh(O.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: N.intl.string(N.t["QXe/7T"]), binds: eh(O.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: N.intl.string(N.t.d6UIii), binds: eh(O.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: N.intl.string(N.t.IcEW06), binds: eh(O.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: N.intl.string(N.t.WN2dsS), binds: eh(O.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: N.intl.string(N.t.rUK0kk), binds: eh(O.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: N.intl.string(N.t.vkGkSn), binds: eh(O.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: N.intl.string(N.t.FJvZ87), binds: eh(O.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: N.intl.string(N.t["FiWl/T"]), binds: eh(O.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: N.intl.string(N.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: N.intl.string(N.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: N.intl.string(N.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: N.intl.string(N.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: N.intl.string(N.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: N.intl.string(N.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: N.intl.string(N.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: N.intl.string(N.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: N.intl.string(N.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: N.intl.string(N.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: N.intl.string(N.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: N.intl.string(N.t.z9c6mt), binds: eh(O.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eC = 221552 == n.j ? eE : null;
