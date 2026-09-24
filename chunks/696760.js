n.d(t, { Bx: () => eI, Ay: () => ep, Gm: () => eC, Q_: () => eE, zF: () => eg, zR: () => eT });
var i,
    l = n(192308),
    r = n(793322),
    s = n(174768),
    a = n(186111),
    o = n(309010),
    d = n(967198),
    c = n(114129),
    u = n(442325),
    A = n(323073),
    h = n(288254),
    E = n(734057),
    C = n(406704),
    g = n(747926),
    _ = n(774603),
    T = n(176522),
    I = n(435558),
    p = n.n(I),
    N = n(691540),
    S = n(857250),
    f = n(97483),
    m = n(147036),
    O = n(957565),
    L = n(375708);
let b = (0, I.throttle)(() => (0, N.P0)((0, S.o)(L.intl.string(L.t["+5kSoW"]), f.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var v = n(265422),
    R = n(625494),
    U = n(652215),
    D = n(272613),
    y = n(819638),
    G = n(723702),
    M = n(763827),
    P = n(64460),
    x = n(92960),
    w = n(739008),
    V = n(314519),
    j = n(837057),
    H = n(310419),
    B = n(488995),
    F = n(675704),
    k = n(806964),
    W = n(552049),
    K = n(877991),
    Y = n(332779),
    Z = n(274794),
    z = n(928531),
    X = n(251494),
    J = n(82038),
    q = n(14214),
    Q = n(151199),
    $ = n(975571),
    ee = n(28647),
    et = n(851109);
let en = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: p().debounce(
        () => {
            if (R._.hasSubscribers(U.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (R._.dispatch(U.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
        },
        100,
        { leading: !0 },
    ),
};
var ei = n(478437),
    el = n(367513),
    er = n(604681),
    es = n(198052),
    ea = n(47675),
    eo = n(999291),
    ed = n(761640),
    ec = n(467691),
    eu = n(674272),
    eA = n(431804),
    eh = n(406975),
    eE =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function eC(e) {
    switch (e) {
        case "NAVIGATION":
            return L.intl.string(L.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return L.intl.string(L.t.bI8F5u);
        case "CHAT":
            return L.intl.string(L.t.hDhbb3);
        case "MISCELLANEOUS":
            return L.intl.string(L.t.cBdwqs);
        case "MESSAGE":
            return L.intl.string(L.t["5fpmX9"]);
        case "DND":
            return L.intl.string(L.t["69j6+4"]);
    }
}
function eg(e) {
    switch (e) {
        case "MESSAGE":
            return L.intl.string(L.t.iepGDn);
        case "DND":
            return L.intl.string(L.t.LBsB0a);
        default:
            return;
    }
}
function e_() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eT[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eT = {
    [U.IWg.SERVER_NEXT]: z.yx,
    [U.IWg.SERVER_PREV]: z.yv,
    [U.IWg.CHANNEL_NEXT]: T.kF,
    [U.IWg.CHANNEL_PREV]: T.Oc,
    [U.IWg.NAVIGATE_BACK]: T.GY,
    [U.IWg.NAVIGATE_FORWARD]: T.M$,
    [U.IWg.UNREAD_NEXT]: ec.mH,
    [U.IWg.UNREAD_PREV]: ec.US,
    [U.IWg.MENTION_CHANNEL_NEXT]: ec.BD,
    [U.IWg.MENTION_CHANNEL_PREV]: ec.X8,
    [U.IWg.TOGGLE_PREVIOUS_GUILD]: T.Fv,
    [U.IWg.JUMP_TO_GUILD]: P.J,
    [U.IWg.SUBMIT]: X.X,
    [U.IWg.TEXTAREA_FOCUS]: J.c,
    [U.IWg.MARK_CHANNEL_READ]: x.Df,
    [U.IWg.MARK_SERVER_READ]: w.P,
    [U.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (R._.dispatch(U.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [U.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(a.A.getLayers().length > 0 || (0, l.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, et.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = E.A.getChannel(t);
                window.location.pathname.startsWith(U.BVt.CHANNEL(U.gNP)) && null != n
                    ? (0, v.i)(n.guild_id, t)
                    : (0, v.a)(U.BVt.CHANNEL(U.gNP, t ?? void 0));
            })(),
            R._.dispatch(U.jej.TOGGLE_INBOX),
            !1),
    },
    [U.IWg.MARK_TOP_INBOX_CHANNEL_READ]: en,
    [U.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = E.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && es.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === ei.r.GUILD_VOICE || i))
                return (el.A.updateChatOpen(t, !es.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === ei.r.DM) {
                let e = ed.Ay.getSection(t, n?.isDM()),
                    i = (0, eo.AP)(n.getRecipientId()),
                    l = e === U.YvQ.PROFILE;
                return (
                    (0, ea.am)({ displayProfile: i, isProfileOpen: !l }), er.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (er.A.toggleMembersSection(), !1);
        },
    },
    [U.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open($.C), !1),
    },
    [U.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, eu.A)({ source: eA.y.KEYBIND }), !1),
    },
    [U.IWg.TOGGLE_MUTE]: q.VT,
    [U.IWg.TOGGLE_DEAFEN]: q.rR,
    [U.IWg.TOGGLE_CATEGORY_COLLAPSED]: Q.y,
    [U.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (R._.dispatch(U.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [U.IWg.SCROLL_UP]: W.U5,
    [U.IWg.SCROLL_DOWN]: W.fz,
    [U.IWg.QUICKSWITCHER_SHOW]: F.R,
    [U.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, v.i)(U.ME), R._.safeDispatch(U.jej.TOGGLE_DM_CREATE), !1),
    },
    [U.IWg.CREATE_THREAD]: {
        binds: ["mod+shift+alt+n"],
        comboKeysBindGlobal: !0,
        action() {
            let e,
                t = ((e = E.A.getChannel(o.Ay.getChannelId())), e?.isThread() === !0 ? E.A.getChannel(e.parent_id) : e);
            return (
                !(null == t || t.isForumLikeChannel() || (0, A.qR)(t) || (0, h.BV)(t)) &&
                (!!(0, C.D1)(t) || !!(0, C.vy)(t)) &&
                ((0, g.Tv)(t, void 0, "Keyboard Shortcut"), !1)
            );
        },
    },
    [U.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (s.A.isOpen()) return !1;
            if (!u.A.isEnabled()) return (a.A.hasLayers() || (0, r.WU)(), !1);
            let e = o.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
        },
    },
    [U.IWg.CLOSE_CHANNEL_TAB]: {
        binds: ["mod+w"],
        comboKeysBindGlobal: !0,
        action() {
            if (!u.A.isEnabled() || a.A.hasLayers() || (0, l.hasAnyModalOpen)() || s.A.isOpen()) return;
            let e = u.A.getActiveTab();
            if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
        },
    },
    [U.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getActiveTab();
            if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
        },
    },
    [U.IWg.SEARCH_EMOJIS]: K.L,
    [U.IWg.SEARCH_GIFS]: Y.T,
    [U.IWg.SEARCH_STICKERS]: Z.w,
    [U.IWg.TOGGLE_HOTKEYS]: ee.z,
    [U.IWg.JUMP_TO_FIRST_UNREAD]: V.s,
    [U.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, l.hasModalOpen)(y.fc)
                ? D.A.updateCreateGuildModal({ slide: y.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : D.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [U.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = E.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || R._.dispatch(U.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [U.IWg.RETURN_TO_AUDIO_CHANNEL]: k.u,
    [U.IWg.CALL_ACCEPT]: _.Yo,
    [U.IWg.CALL_START]: _.OX,
    [U.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (a.A.hasLayers() || (0, l.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (R._.dispatch(U.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [U.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = M.A.getGuildId(),
                n = M.A.getChannelId();
            return (null != n && (0, v.i)(t ?? U.ME, n), !1);
        },
    },
    [U.IWg.ZOOM_IN]: eh.Ur,
    [U.IWg.ZOOM_OUT]: eh.hU,
    [U.IWg.ZOOM_RESET]: eh.O$,
    [U.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId() ?? void 0;
            (0, j.transitionToGlobalDiscovery)({
                tab: B.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: H.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [U.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, G.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [U.IWg.OPEN_CONTEXT_MENU]: {
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
    [U.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.Ay.getChannelId();
            if (null == e) return !1;
            let t = E.A.getChannel(e);
            if (null == t) return !1;
            let n = E.A.getChannel(t.parent_id),
                i = (0, m.af)(t, n);
            return ((0, O.C)(i, b), !1);
        },
    },
};
function eI() {
    return [
        {
            description: L.intl.string(L.t.bx4Uyz),
            binds: e_(U.IWg.SERVER_PREV, U.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: L.intl.string(L.t["+Wem6h"]),
            binds: e_(U.IWg.CHANNEL_PREV, U.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: L.intl.string(L.t["+2fcdz"]),
            binds: e_(U.IWg.NAVIGATE_BACK, U.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: L.intl.string(L.t.eVmj1H),
            binds: e_(U.IWg.UNREAD_PREV, U.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: L.intl.string(L.t.EcqS7Y),
            binds: e_(U.IWg.MENTION_CHANNEL_PREV, U.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: L.intl.string(L.t["4I3pwW"]), binds: e_(U.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: L.intl.string(L.t.Bqss72), binds: e_(U.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: L.intl.string(L.t.yYsRlD), binds: e_(U.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: L.intl.string(L.t.O7ouXO), binds: e_(U.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: L.intl.string(L.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: L.intl.string(L.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: L.intl.string(L.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: L.intl.string(L.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: L.intl.string(L.t.UaXAPx), binds: e_(U.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: L.intl.string(L.t["5X9vFj"]), binds: e_(U.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: L.intl.string(L.t.wxQFsl), binds: e_(U.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: L.intl.string(L.t["ZxGD+G"]), binds: e_(U.IWg.CREATE_THREAD), group: "CHAT" },
        { description: L.intl.string(L.t["C+XV7f"]), binds: e_(U.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: L.intl.string(L.t["Q+YV/T"]), binds: e_(U.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: L.intl.string(L.t["YEjV+W"]), binds: e_(U.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: L.intl.string(L.t.AcBI9S), binds: e_(U.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: L.intl.string(L.t.JoxNnl), binds: e_(U.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: L.intl.string(L.t["3PHxo8"]), binds: e_(U.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: L.intl.string(L.t.YFl7eb), binds: e_(U.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: L.intl.string(L.t.L3RYYJ), binds: e_(U.IWg.SCROLL_UP, U.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: L.intl.string(L.t["3HAurM"]), binds: e_(U.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: L.intl.string(L.t.rrYBEu), binds: e_(U.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: L.intl.string(L.t.sUJlPL), binds: e_(U.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: L.intl.string(L.t["A+Fv0R"]), binds: e_(U.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: L.intl.string(L.t.tL6eVW), binds: e_(U.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: L.intl.string(L.t["QXe/7T"]), binds: e_(U.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: L.intl.string(L.t.d6UIii), binds: e_(U.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: L.intl.string(L.t.IcEW06), binds: e_(U.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: L.intl.string(L.t.WN2dsS), binds: e_(U.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: L.intl.string(L.t.rUK0kk), binds: e_(U.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: L.intl.string(L.t.vkGkSn), binds: e_(U.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: L.intl.string(L.t.FJvZ87), binds: e_(U.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: L.intl.string(L.t["FiWl/T"]), binds: e_(U.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: L.intl.string(L.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: L.intl.string(L.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: L.intl.string(L.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: L.intl.string(L.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: L.intl.string(L.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: L.intl.string(L.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: L.intl.string(L.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: L.intl.string(L.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: L.intl.string(L.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: L.intl.string(L.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: L.intl.string(L.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: L.intl.string(L.t.z9c6mt), binds: e_(U.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let ep = 221552 == n.j ? eT : null;
