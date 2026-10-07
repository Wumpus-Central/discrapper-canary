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
var U = n(265422),
    v = n(625494),
    b = n(652215),
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
    B = n(488995),
    k = n(675704),
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
            if (v._.hasSubscribers(b.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (v._.dispatch(b.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
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
    [b.IWg.SERVER_NEXT]: z.yx,
    [b.IWg.SERVER_PREV]: z.yv,
    [b.IWg.CHANNEL_NEXT]: I.kF,
    [b.IWg.CHANNEL_PREV]: I.Oc,
    [b.IWg.NAVIGATE_BACK]: I.GY,
    [b.IWg.NAVIGATE_FORWARD]: I.M$,
    [b.IWg.UNREAD_NEXT]: ec.mH,
    [b.IWg.UNREAD_PREV]: ec.US,
    [b.IWg.MENTION_CHANNEL_NEXT]: ec.BD,
    [b.IWg.MENTION_CHANNEL_PREV]: ec.X8,
    [b.IWg.TOGGLE_PREVIOUS_GUILD]: I.Fv,
    [b.IWg.JUMP_TO_GUILD]: P.J,
    [b.IWg.SUBMIT]: X.X,
    [b.IWg.TEXTAREA_FOCUS]: J.c,
    [b.IWg.MARK_CHANNEL_READ]: x.Df,
    [b.IWg.MARK_SERVER_READ]: V.P,
    [b.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (v._.dispatch(b.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [b.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(a.A.getLayers().length > 0 || (0, l.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, et.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = h.A.getChannel(t);
                window.location.pathname.startsWith(b.BVt.CHANNEL(b.gNP)) && null != n
                    ? (0, U.i)(n.guild_id, t)
                    : (0, U.a)(b.BVt.CHANNEL(b.gNP, t ?? void 0));
            })(),
            v._.dispatch(b.jej.TOGGLE_INBOX),
            !1),
    },
    [b.IWg.MARK_TOP_INBOX_CHANNEL_READ]: en,
    [b.IWg.TOGGLE_USERS]: {
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
                    l = e === b.YvQ.PROFILE;
                return (
                    (0, ea.am)({ displayProfile: i, isProfileOpen: !l }), er.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (er.A.toggleMembersSection(), !1);
        },
    },
    [b.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open($.C), !1),
    },
    [b.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, eu.A)({ source: eA.y.KEYBIND }), !1),
    },
    [b.IWg.TOGGLE_MUTE]: q.VT,
    [b.IWg.TOGGLE_DEAFEN]: q.rR,
    [b.IWg.TOGGLE_CATEGORY_COLLAPSED]: Q.y,
    [b.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (v._.dispatch(b.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [b.IWg.SCROLL_UP]: W.U5,
    [b.IWg.SCROLL_DOWN]: W.fz,
    [b.IWg.QUICKSWITCHER_SHOW]: k.R,
    [b.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, U.i)(b.ME), v._.safeDispatch(b.jej.TOGGLE_DM_CREATE), !1),
    },
    [b.IWg.CREATE_THREAD]: {
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
    [b.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (s.A.isOpen()) return !1;
            if (!u.A.isEnabled()) return (a.A.hasLayers() || (0, r.WU)(), !1);
            let e = o.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
        },
    },
    [b.IWg.CLOSE_CHANNEL_TAB]: {
        binds: ["mod+w"],
        comboKeysBindGlobal: !0,
        action() {
            if (!u.A.isEnabled() || a.A.hasLayers() || (0, l.hasAnyModalOpen)() || s.A.isOpen()) return;
            let e = u.A.getActiveTab();
            if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
        },
    },
    [b.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getActiveTab();
            if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
        },
    },
    [b.IWg.SEARCH_EMOJIS]: K.L,
    [b.IWg.SEARCH_GIFS]: Y.T,
    [b.IWg.SEARCH_STICKERS]: Z.w,
    [b.IWg.TOGGLE_HOTKEYS]: ee.z,
    [b.IWg.JUMP_TO_FIRST_UNREAD]: w.s,
    [b.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, l.hasModalOpen)(G.fc)
                ? D.A.updateCreateGuildModal({ slide: G.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : D.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [b.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = h.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || v._.dispatch(b.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [b.IWg.RETURN_TO_AUDIO_CHANNEL]: F.u,
    [b.IWg.CALL_ACCEPT]: g.Yo,
    [b.IWg.CALL_START]: g.OX,
    [b.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (a.A.hasLayers() || (0, l.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (v._.dispatch(b.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [b.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = M.A.getGuildId(),
                n = M.A.getChannelId();
            return (null != n && (0, U.i)(t ?? b.ME, n), !1);
        },
    },
    [b.IWg.ZOOM_IN]: eE.Ur,
    [b.IWg.ZOOM_OUT]: eE.hU,
    [b.IWg.ZOOM_RESET]: eE.O$,
    [b.IWg.OPEN_APP_DIRECTORY]: {
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
    [b.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, y.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [b.IWg.OPEN_CONTEXT_MENU]: {
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
    [b.IWg.COPY_CHANNEL_LINK]: {
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
            binds: eg(b.IWg.SERVER_PREV, b.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t["+Wem6h"]),
            binds: eg(b.IWg.CHANNEL_PREV, b.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t["+2fcdz"]),
            binds: eg(b.IWg.NAVIGATE_BACK, b.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t.eVmj1H),
            binds: eg(b.IWg.UNREAD_PREV, b.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: m.intl.string(m.t.EcqS7Y),
            binds: eg(b.IWg.MENTION_CHANNEL_PREV, b.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: m.intl.string(m.t["4I3pwW"]), binds: eg(b.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: m.intl.string(m.t.Bqss72), binds: eg(b.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: m.intl.string(m.t.yYsRlD), binds: eg(b.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: m.intl.string(m.t.O7ouXO), binds: eg(b.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: m.intl.string(m.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: m.intl.string(m.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: m.intl.string(m.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: m.intl.string(m.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: m.intl.string(m.t.UaXAPx), binds: eg(b.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: m.intl.string(m.t["5X9vFj"]), binds: eg(b.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: m.intl.string(m.t.wxQFsl), binds: eg(b.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: m.intl.string(m.t["ZxGD+G"]), binds: eg(b.IWg.CREATE_THREAD), group: "CHAT" },
        { description: m.intl.string(m.t["C+XV7f"]), binds: eg(b.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: m.intl.string(m.t["Q+YV/T"]), binds: eg(b.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: m.intl.string(m.t["YEjV+W"]), binds: eg(b.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: m.intl.string(m.t.AcBI9S), binds: eg(b.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: m.intl.string(m.t.JoxNnl), binds: eg(b.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: m.intl.string(m.t["3PHxo8"]), binds: eg(b.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: m.intl.string(m.t.YFl7eb), binds: eg(b.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: m.intl.string(m.t.L3RYYJ), binds: eg(b.IWg.SCROLL_UP, b.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: m.intl.string(m.t["3HAurM"]), binds: eg(b.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: m.intl.string(m.t.rrYBEu), binds: eg(b.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: m.intl.string(m.t.sUJlPL), binds: eg(b.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: m.intl.string(m.t["A+Fv0R"]), binds: eg(b.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: m.intl.string(m.t.tL6eVW), binds: eg(b.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t["QXe/7T"]), binds: eg(b.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.d6UIii), binds: eg(b.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.IcEW06), binds: eg(b.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.WN2dsS), binds: eg(b.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: m.intl.string(m.t.rUK0kk), binds: eg(b.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: m.intl.string(m.t.vkGkSn), binds: eg(b.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: m.intl.string(m.t.FJvZ87), binds: eg(b.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: m.intl.string(m.t["FiWl/T"]), binds: eg(b.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
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
        { description: m.intl.string(m.t.z9c6mt), binds: eg(b.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let ep = 221552 == n.j ? eI : null;
