n.d(t, { Bx: () => eg, Ay: () => eC, Gm: () => eu, Q_: () => ec, zF: () => eh, zR: () => eE });
var i,
    l = n(793322),
    r = n(174768),
    s = n(186111),
    a = n(309010),
    o = n(967198),
    d = n(114129),
    c = n(442325),
    u = n(774603),
    h = n(176522),
    A = n(435558),
    E = n.n(A),
    g = n(691540),
    C = n(857250),
    _ = n(97483),
    I = n(734057),
    T = n(147036),
    p = n(957565),
    S = n(375708);
let N = (0, A.throttle)(() => (0, g.P0)((0, C.o)(S.intl.string(S.t["+5kSoW"]), _.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var L = n(265422),
    m = n(625494),
    f = n(652215),
    O = n(192308),
    b = n(272613),
    v = n(819638),
    R = n(723702),
    U = n(763827),
    y = n(64460),
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
    action: E().debounce(
        () => {
            if (m._.hasSubscribers(f.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return m._.dispatch(f.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
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
            return S.intl.string(S.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return S.intl.string(S.t.bI8F5u);
        case "CHAT":
            return S.intl.string(S.t.hDhbb3);
        case "MISCELLANEOUS":
            return S.intl.string(S.t.cBdwqs);
        case "MESSAGE":
            return S.intl.string(S.t["5fpmX9"]);
        case "DND":
            return S.intl.string(S.t["69j6+4"]);
    }
}
function eh(e) {
    switch (e) {
        case "MESSAGE":
            return S.intl.string(S.t.iepGDn);
        case "DND":
            return S.intl.string(S.t.LBsB0a);
        default:
            return;
    }
}
function eA() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eE[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eE = {
    [f.IWg.SERVER_NEXT]: W.yx,
    [f.IWg.SERVER_PREV]: W.yv,
    [f.IWg.CHANNEL_NEXT]: h.kF,
    [f.IWg.CHANNEL_PREV]: h.Oc,
    [f.IWg.NAVIGATE_BACK]: h.GY,
    [f.IWg.NAVIGATE_FORWARD]: h.M$,
    [f.IWg.UNREAD_NEXT]: es.mH,
    [f.IWg.UNREAD_PREV]: es.US,
    [f.IWg.MENTION_CHANNEL_NEXT]: es.BD,
    [f.IWg.MENTION_CHANNEL_PREV]: es.X8,
    [f.IWg.TOGGLE_PREVIOUS_GUILD]: h.Fv,
    [f.IWg.JUMP_TO_GUILD]: y.J,
    [f.IWg.SUBMIT]: K.X,
    [f.IWg.TEXTAREA_FOCUS]: Y.c,
    [f.IWg.MARK_CHANNEL_READ]: D.Df,
    [f.IWg.MARK_SERVER_READ]: G.P,
    [f.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (m._.dispatch(f.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [f.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(s.A.getLayers().length > 0 || (0, O.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, Q.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = a.Ay.getChannelId(),
                    n = I.A.getChannel(t);
                window.location.pathname.startsWith(f.BVt.CHANNEL(f.gNP)) && null != n
                    ? (0, L.i)(n.guild_id, t)
                    : (0, L.a)(f.BVt.CHANNEL(f.gNP, t ?? void 0));
            })(),
            m._.dispatch(f.jej.TOGGLE_INBOX),
            !1),
    },
    [f.IWg.MARK_TOP_INBOX_CHANNEL_READ]: q,
    [f.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getGuildId(),
                t = a.Ay.getChannelId(e),
                n = I.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && en.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === $.r.GUILD_VOICE || i))
                return ee.A.updateChatOpen(t, !en.A.getChatOpen(t)), !1;
            if (null != t && null != n && n.type === $.r.DM) {
                let e = er.Ay.getSection(t, n?.isDM()),
                    i = (0, el.AP)(n.getRecipientId()),
                    l = e === f.YvQ.PROFILE;
                return (0, ei.am)({ displayProfile: i, isProfileOpen: !l }), et.A.toggleUserProfileSidebarSection(), !1;
            }
            return et.A.toggleMembersSection(), !1;
        },
    },
    [f.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(X.C), !1),
    },
    [f.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, ea.A)({ source: eo.y.KEYBIND }), !1),
    },
    [f.IWg.TOGGLE_MUTE]: Z.VT,
    [f.IWg.TOGGLE_DEAFEN]: Z.rR,
    [f.IWg.TOGGLE_CATEGORY_COLLAPSED]: z.y,
    [f.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (m._.dispatch(f.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [f.IWg.SCROLL_UP]: H.U5,
    [f.IWg.SCROLL_DOWN]: H.fz,
    [f.IWg.QUICKSWITCHER_SHOW]: V.R,
    [f.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != o.A.getGuildId() && (0, L.i)(f.ME), m._.safeDispatch(f.jej.TOGGLE_DM_CREATE), !1),
    },
    [f.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (r.A.isOpen()) return !1;
            if (!c.A.isEnabled()) return s.A.hasLayers() || (0, l.WU)(), !1;
            let e = a.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, d.D5)(e, o.A.getGuildId() ?? null), !1);
        },
    },
    [f.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = c.A.getActiveTab();
            if (null != e) return (0, d.RL)(e.id, !e.pinned), !1;
        },
    },
    [f.IWg.SEARCH_EMOJIS]: B.L,
    [f.IWg.SEARCH_GIFS]: F.T,
    [f.IWg.SEARCH_STICKERS]: k.w,
    [f.IWg.TOGGLE_HOTKEYS]: J.z,
    [f.IWg.JUMP_TO_FIRST_UNREAD]: M.s,
    [f.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, O.hasModalOpen)(v.fc)
                ? b.A.updateCreateGuildModal({ slide: v.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : b.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [f.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = I.A.getChannel(a.Ay.getChannelId());
            return null == e || e.isManaged() || m._.dispatch(f.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [f.IWg.RETURN_TO_AUDIO_CHANNEL]: j.u,
    [f.IWg.CALL_ACCEPT]: u.Yo,
    [f.IWg.CALL_START]: u.OX,
    [f.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (s.A.hasLayers() || (0, O.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return m._.dispatch(f.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [f.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = U.A.getGuildId(),
                n = U.A.getChannelId();
            return null != n && (0, L.i)(t ?? f.ME, n), !1;
        },
    },
    [f.IWg.ZOOM_IN]: ed.Ur,
    [f.IWg.ZOOM_OUT]: ed.hU,
    [f.IWg.ZOOM_RESET]: ed.O$,
    [f.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.A.getGuildId() ?? void 0;
            (0, x.transitionToGlobalDiscovery)({
                tab: w.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: P.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [f.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, R.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
        },
    },
    [f.IWg.OPEN_CONTEXT_MENU]: {
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
    [f.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = a.Ay.getChannelId();
            if (null == e) return !1;
            let t = I.A.getChannel(e);
            if (null == t) return !1;
            let n = I.A.getChannel(t.parent_id),
                i = (0, T.af)(t, n);
            return (0, p.C)(i, N), !1;
        },
    },
};
function eg() {
    return [
        {
            description: S.intl.string(S.t.bx4Uyz),
            binds: eA(f.IWg.SERVER_PREV, f.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: S.intl.string(S.t["+Wem6h"]),
            binds: eA(f.IWg.CHANNEL_PREV, f.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: S.intl.string(S.t["+2fcdz"]),
            binds: eA(f.IWg.NAVIGATE_BACK, f.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: S.intl.string(S.t.eVmj1H),
            binds: eA(f.IWg.UNREAD_PREV, f.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: S.intl.string(S.t.EcqS7Y),
            binds: eA(f.IWg.MENTION_CHANNEL_PREV, f.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: S.intl.string(S.t["4I3pwW"]), binds: eA(f.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: S.intl.string(S.t.Bqss72), binds: eA(f.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: S.intl.string(S.t.yYsRlD), binds: eA(f.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: S.intl.string(S.t.O7ouXO), binds: eA(f.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: S.intl.string(S.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: S.intl.string(S.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: S.intl.string(S.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: S.intl.string(S.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: S.intl.string(S.t.UaXAPx), binds: eA(f.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: S.intl.string(S.t["5X9vFj"]), binds: eA(f.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: S.intl.string(S.t.wxQFsl), binds: eA(f.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: S.intl.string(S.t["C+XV7f"]), binds: eA(f.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: S.intl.string(S.t["Q+YV/T"]), binds: eA(f.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: S.intl.string(S.t["YEjV+W"]), binds: eA(f.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: S.intl.string(S.t.AcBI9S), binds: eA(f.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: S.intl.string(S.t.JoxNnl), binds: eA(f.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: S.intl.string(S.t["3PHxo8"]), binds: eA(f.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: S.intl.string(S.t.YFl7eb), binds: eA(f.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: S.intl.string(S.t.L3RYYJ), binds: eA(f.IWg.SCROLL_UP, f.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: S.intl.string(S.t["3HAurM"]), binds: eA(f.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: S.intl.string(S.t.rrYBEu), binds: eA(f.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: S.intl.string(S.t.sUJlPL), binds: eA(f.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: S.intl.string(S.t["A+Fv0R"]), binds: eA(f.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: S.intl.string(S.t.tL6eVW), binds: eA(f.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: S.intl.string(S.t["QXe/7T"]), binds: eA(f.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: S.intl.string(S.t.d6UIii), binds: eA(f.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: S.intl.string(S.t.IcEW06), binds: eA(f.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: S.intl.string(S.t.WN2dsS), binds: eA(f.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: S.intl.string(S.t.rUK0kk), binds: eA(f.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: S.intl.string(S.t.vkGkSn), binds: eA(f.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: S.intl.string(S.t.FJvZ87), binds: eA(f.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: S.intl.string(S.t["FiWl/T"]), binds: eA(f.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: S.intl.string(S.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: S.intl.string(S.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: S.intl.string(S.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: S.intl.string(S.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: S.intl.string(S.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: S.intl.string(S.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: S.intl.string(S.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: S.intl.string(S.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: S.intl.string(S.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: S.intl.string(S.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: S.intl.string(S.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: S.intl.string(S.t.z9c6mt), binds: eA(f.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eC = 221552 == n.j ? eE : null;
