n.d(t, { Bx: () => eT, Ay: () => ep, Gm: () => eC, Q_: () => eh, zF: () => e_, zR: () => eI });
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
    E = n(288254),
    h = n(734057),
    C = n(406704),
    _ = n(747926),
    g = n(774603),
    I = n(176522),
    T = n(435558),
    p = n.n(T),
    N = n(739187),
    S = n(857250),
    O = n(97483),
    f = n(147036),
    L = n(957565),
    m = n(660183);
let R = (0, T.throttle)(() => (0, N.P)((0, S.o)(m.intl.string(m.t["+5kSoW"]), O.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var b = n(265422),
    U = n(625494),
    v = n(652215),
    D = n(272613),
    G = n(819638),
    y = n(723702),
    M = n(763827),
    P = n(64460),
    x = n(92960),
    V = n(739008),
    w = n(314519),
    j = n(837057),
    H = n(310419),
    k = n(488995),
    B = n(675704),
    F = n(806964),
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
            if (U._.hasSubscribers(v.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (U._.dispatch(v.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
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
    eE = n(406975),
    eh =
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
            return m.intl.string(m.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return m.intl.string(m.t.bI8F5u);
        case "CHAT":
            return m.intl.string(m.t.hDhbb3);
        case "MISCELLANEOUS":
            return m.intl.string(m.t.cBdwqs);
        case "MESSAGE":
            return m.intl.string(m.t["5fpmX9"]);
        case "DND":
            return m.intl.string(m.t["69j6+4"]);
    }
}
function e_(e) {
    switch (e) {
        case "MESSAGE":
            return m.intl.string(m.t.iepGDn);
        case "DND":
            return m.intl.string(m.t.LBsB0a);
        default:
            return;
    }
}
function eg() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eI[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eI = {
    [v.IWg.SERVER_NEXT]: z.yx,
    [v.IWg.SERVER_PREV]: z.yv,
    [v.IWg.CHANNEL_NEXT]: I.kF,
    [v.IWg.CHANNEL_PREV]: I.Oc,
    [v.IWg.NAVIGATE_BACK]: I.GY,
    [v.IWg.NAVIGATE_FORWARD]: I.M$,
    [v.IWg.UNREAD_NEXT]: ec.mH,
    [v.IWg.UNREAD_PREV]: ec.US,
    [v.IWg.MENTION_CHANNEL_NEXT]: ec.BD,
    [v.IWg.MENTION_CHANNEL_PREV]: ec.X8,
    [v.IWg.TOGGLE_PREVIOUS_GUILD]: I.Fv,
    [v.IWg.JUMP_TO_GUILD]: P.J,
    [v.IWg.SUBMIT]: X.X,
    [v.IWg.TEXTAREA_FOCUS]: J.c,
    [v.IWg.MARK_CHANNEL_READ]: x.Df,
    [v.IWg.MARK_SERVER_READ]: V.P,
    [v.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (U._.dispatch(v.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [v.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(a.A.getLayers().length > 0 || (0, l.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, et.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = h.A.getChannel(t);
                window.location.pathname.startsWith(v.BVt.CHANNEL(v.gNP)) && null != n
                    ? (0, b.i)(n.guild_id, t)
                    : (0, b.a)(v.BVt.CHANNEL(v.gNP, t ?? void 0));
            })(),
            U._.dispatch(v.jej.TOGGLE_INBOX),
            !1),
    },
    [v.IWg.MARK_TOP_INBOX_CHANNEL_READ]: en,
    [v.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = h.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && es.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === ei.r.GUILD_VOICE || i))
                return (el.A.updateChatOpen(t, !es.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === ei.r.DM) {
                let e = ed.Ay.getSection(t, n?.isDM()),
                    i = (0, eo.AP)(n.getRecipientId()),
                    l = e === v.YvQ.PROFILE;
                return (
                    (0, ea.am)({ displayProfile: i, isProfileOpen: !l }), er.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (er.A.toggleMembersSection(), !1);
        },
    },
    [v.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open($.C), !1),
    },
    [v.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, eu.A)({ source: eA.y.KEYBIND }), !1),
    },
    [v.IWg.TOGGLE_MUTE]: q.VT,
    [v.IWg.TOGGLE_DEAFEN]: q.rR,
    [v.IWg.TOGGLE_CATEGORY_COLLAPSED]: Q.y,
    [v.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (U._.dispatch(v.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [v.IWg.SCROLL_UP]: W.U5,
    [v.IWg.SCROLL_DOWN]: W.fz,
    [v.IWg.QUICKSWITCHER_SHOW]: B.R,
    [v.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, b.i)(v.ME), U._.safeDispatch(v.jej.TOGGLE_DM_CREATE), !1),
    },
    [v.IWg.CREATE_THREAD]: {
        binds: ["mod+shift+alt+n"],
        comboKeysBindGlobal: !0,
        action() {
            let e,
                t = ((e = h.A.getChannel(o.Ay.getChannelId())), e?.isThread() === !0 ? h.A.getChannel(e.parent_id) : e);
            return (
                !(null == t || t.isForumLikeChannel() || (0, A.qR)(t) || (0, E.BV)(t)) &&
                (!!(0, C.D1)(t) || !!(0, C.vy)(t)) &&
                ((0, _.Tv)(t, void 0, "Keyboard Shortcut"), !1)
            );
        },
    },
    [v.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (s.A.isOpen()) return !1;
            if (!u.A.isEnabled()) return (a.A.hasLayers() || (0, r.WU)(), !1);
            let e = o.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
        },
    },
    [v.IWg.CLOSE_CHANNEL_TAB]: {
        binds: ["mod+w"],
        comboKeysBindGlobal: !0,
        action() {
            if (!u.A.isEnabled() || a.A.hasLayers() || (0, l.hasAnyModalOpen)() || s.A.isOpen()) return;
            let e = u.A.getActiveTab();
            if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
        },
    },
    [v.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getActiveTab();
            if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
        },
    },
    [v.IWg.SEARCH_EMOJIS]: K.L,
    [v.IWg.SEARCH_GIFS]: Y.T,
    [v.IWg.SEARCH_STICKERS]: Z.w,
    [v.IWg.TOGGLE_HOTKEYS]: ee.z,
    [v.IWg.JUMP_TO_FIRST_UNREAD]: w.s,
    [v.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, l.hasModalOpen)(G.fc)
                ? D.A.updateCreateGuildModal({ slide: G.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : D.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [v.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = h.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || U._.dispatch(v.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [v.IWg.RETURN_TO_AUDIO_CHANNEL]: F.u,
    [v.IWg.CALL_ACCEPT]: g.Yo,
    [v.IWg.CALL_START]: g.OX,
    [v.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (a.A.hasLayers() || (0, l.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (U._.dispatch(v.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [v.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = M.A.getGuildId(),
                n = M.A.getChannelId();
            return (null != n && (0, b.i)(t ?? v.ME, n), !1);
        },
    },
    [v.IWg.ZOOM_IN]: eE.Ur,
    [v.IWg.ZOOM_OUT]: eE.hU,
    [v.IWg.ZOOM_RESET]: eE.O$,
    [v.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId() ?? void 0;
            (0, j.transitionToGlobalDiscovery)({
                tab: k.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: H.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [v.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, y.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [v.IWg.OPEN_CONTEXT_MENU]: {
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
    [v.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.Ay.getChannelId();
            if (null == e) return !1;
            let t = h.A.getChannel(e);
            if (null == t) return !1;
            let n = h.A.getChannel(t.parent_id),
                i = (0, f.af)(t, n);
            return ((0, L.C)(i, R), !1);
        },
    },
};
function eT() {
    return [
        {
            description: m.intl.string(m.t.bx4Uyz),
            binds: eg(v.IWg.SERVER_PREV, v.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t["+Wem6h"]),
            binds: eg(v.IWg.CHANNEL_PREV, v.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t["+2fcdz"]),
            binds: eg(v.IWg.NAVIGATE_BACK, v.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t.eVmj1H),
            binds: eg(v.IWg.UNREAD_PREV, v.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t.EcqS7Y),
            binds: eg(v.IWg.MENTION_CHANNEL_PREV, v.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: m.intl.string(m.t["4I3pwW"]), binds: eg(v.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: m.intl.string(m.t.Bqss72), binds: eg(v.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: m.intl.string(m.t.yYsRlD), binds: eg(v.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: m.intl.string(m.t.O7ouXO), binds: eg(v.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: m.intl.string(m.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: m.intl.string(m.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: m.intl.string(m.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: m.intl.string(m.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: m.intl.string(m.t.UaXAPx), binds: eg(v.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: m.intl.string(m.t["5X9vFj"]), binds: eg(v.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: m.intl.string(m.t.wxQFsl), binds: eg(v.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: m.intl.string(m.t["ZxGD+G"]), binds: eg(v.IWg.CREATE_THREAD), group: "CHAT" },
        { description: m.intl.string(m.t["C+XV7f"]), binds: eg(v.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: m.intl.string(m.t["Q+YV/T"]), binds: eg(v.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: m.intl.string(m.t["YEjV+W"]), binds: eg(v.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: m.intl.string(m.t.AcBI9S), binds: eg(v.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: m.intl.string(m.t.JoxNnl), binds: eg(v.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: m.intl.string(m.t["3PHxo8"]), binds: eg(v.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: m.intl.string(m.t.YFl7eb), binds: eg(v.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: m.intl.string(m.t.L3RYYJ), binds: eg(v.IWg.SCROLL_UP, v.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: m.intl.string(m.t["3HAurM"]), binds: eg(v.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: m.intl.string(m.t.rrYBEu), binds: eg(v.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: m.intl.string(m.t.sUJlPL), binds: eg(v.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: m.intl.string(m.t["A+Fv0R"]), binds: eg(v.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: m.intl.string(m.t.tL6eVW), binds: eg(v.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t["QXe/7T"]), binds: eg(v.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.d6UIii), binds: eg(v.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.IcEW06), binds: eg(v.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.WN2dsS), binds: eg(v.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: m.intl.string(m.t.rUK0kk), binds: eg(v.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.vkGkSn), binds: eg(v.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: m.intl.string(m.t.FJvZ87), binds: eg(v.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: m.intl.string(m.t["FiWl/T"]), binds: eg(v.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: m.intl.string(m.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: m.intl.string(m.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: m.intl.string(m.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: m.intl.string(m.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: m.intl.string(m.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: m.intl.string(m.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: m.intl.string(m.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: m.intl.string(m.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: m.intl.string(m.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: m.intl.string(m.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: m.intl.string(m.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: m.intl.string(m.t.z9c6mt), binds: eg(v.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let ep = 221552 == n.j ? eI : null;
