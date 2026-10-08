n.d(t, { Bx: () => eg, Ay: () => eI, Gm: () => eE, Q_: () => eA, zF: () => eh, zR: () => eC });
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
    _ = n(406704),
    C = n(747926),
    g = n(774603),
    I = n(176522),
    T = n(435558),
    p = n.n(T),
    N = n(376357),
    S = n(147036),
    f = n(957565),
    O = n(660183);
let L = (0, T.throttle)(() => (0, N.P0)((0, N.ox)(O.intl.string(O.t["+5kSoW"]), N.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var m = n(265422),
    b = n(625494),
    R = n(652215),
    v = n(272613),
    U = n(819638),
    D = n(723702),
    y = n(763827),
    G = n(64460),
    P = n(92960),
    M = n(739008),
    x = n(314519),
    V = n(837057),
    w = n(310419),
    j = n(488995),
    H = n(675704),
    k = n(806964),
    B = n(552049),
    F = n(877991),
    W = n(332779),
    K = n(274794),
    Y = n(928531),
    Z = n(251494),
    z = n(82038),
    X = n(14214),
    J = n(151199),
    q = n(975571),
    Q = n(28647),
    $ = n(851109);
let ee = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: p().debounce(
        () => {
            if (b._.hasSubscribers(R.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (b._.dispatch(R.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
        },
        100,
        { leading: !0 },
    ),
};
var et = n(478437),
    en = n(367513),
    ei = n(604681),
    el = n(198052),
    er = n(47675),
    es = n(999291),
    ea = n(761640),
    eo = n(467691),
    ed = n(674272),
    ec = n(431804),
    eu = n(406975),
    eA =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function eE(e) {
    switch (e) {
        case "NAVIGATION":
            return O.intl.string(O.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return O.intl.string(O.t.bI8F5u);
        case "CHAT":
            return O.intl.string(O.t.hDhbb3);
        case "MISCELLANEOUS":
            return O.intl.string(O.t.cBdwqs);
        case "MESSAGE":
            return O.intl.string(O.t["5fpmX9"]);
        case "DND":
            return O.intl.string(O.t["69j6+4"]);
    }
}
function eh(e) {
    switch (e) {
        case "MESSAGE":
            return O.intl.string(O.t.iepGDn);
        case "DND":
            return O.intl.string(O.t.LBsB0a);
        default:
            return;
    }
}
function e_() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eC[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eC = {
    [R.IWg.SERVER_NEXT]: Y.yx,
    [R.IWg.SERVER_PREV]: Y.yv,
    [R.IWg.CHANNEL_NEXT]: I.kF,
    [R.IWg.CHANNEL_PREV]: I.Oc,
    [R.IWg.NAVIGATE_BACK]: I.GY,
    [R.IWg.NAVIGATE_FORWARD]: I.M$,
    [R.IWg.UNREAD_NEXT]: eo.mH,
    [R.IWg.UNREAD_PREV]: eo.US,
    [R.IWg.MENTION_CHANNEL_NEXT]: eo.BD,
    [R.IWg.MENTION_CHANNEL_PREV]: eo.X8,
    [R.IWg.TOGGLE_PREVIOUS_GUILD]: I.Fv,
    [R.IWg.JUMP_TO_GUILD]: G.J,
    [R.IWg.SUBMIT]: Z.X,
    [R.IWg.TEXTAREA_FOCUS]: z.c,
    [R.IWg.MARK_CHANNEL_READ]: P.Df,
    [R.IWg.MARK_SERVER_READ]: M.P,
    [R.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (b._.dispatch(R.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [R.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(a.A.getLayers().length > 0 || (0, l.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, $.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = h.A.getChannel(t);
                window.location.pathname.startsWith(R.BVt.CHANNEL(R.gNP)) && null != n
                    ? (0, m.i)(n.guild_id, t)
                    : (0, m.a)(R.BVt.CHANNEL(R.gNP, t ?? void 0));
            })(),
            b._.dispatch(R.jej.TOGGLE_INBOX),
            !1),
    },
    [R.IWg.MARK_TOP_INBOX_CHANNEL_READ]: ee,
    [R.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = h.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && el.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === et.r.GUILD_VOICE || i))
                return (en.A.updateChatOpen(t, !el.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === et.r.DM) {
                let e = ea.Ay.getSection(t, n?.isDM()),
                    i = (0, es.AP)(n.getRecipientId()),
                    l = e === R.YvQ.PROFILE;
                return (
                    (0, er.am)({ displayProfile: i, isProfileOpen: !l }), ei.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (ei.A.toggleMembersSection(), !1);
        },
    },
    [R.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(q.C), !1),
    },
    [R.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, ed.A)({ source: ec.y.KEYBIND }), !1),
    },
    [R.IWg.TOGGLE_MUTE]: X.VT,
    [R.IWg.TOGGLE_DEAFEN]: X.rR,
    [R.IWg.TOGGLE_CATEGORY_COLLAPSED]: J.y,
    [R.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (b._.dispatch(R.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [R.IWg.SCROLL_UP]: B.U5,
    [R.IWg.SCROLL_DOWN]: B.fz,
    [R.IWg.QUICKSWITCHER_SHOW]: H.R,
    [R.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, m.i)(R.ME), b._.safeDispatch(R.jej.TOGGLE_DM_CREATE), !1),
    },
    [R.IWg.CREATE_THREAD]: {
        binds: ["mod+shift+alt+n"],
        comboKeysBindGlobal: !0,
        action() {
            let e,
                t = ((e = h.A.getChannel(o.Ay.getChannelId())), e?.isThread() === !0 ? h.A.getChannel(e.parent_id) : e);
            return (
                !(null == t || t.isForumLikeChannel() || (0, A.qR)(t) || (0, E.BV)(t)) &&
                (!!(0, _.D1)(t) || !!(0, _.vy)(t)) &&
                ((0, C.Tv)(t, void 0, "Keyboard Shortcut"), !1)
            );
        },
    },
    [R.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (s.A.isOpen()) return !1;
            if (!u.A.isEnabled()) return (a.A.hasLayers() || (0, r.WU)(), !1);
            let e = o.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
        },
    },
    [R.IWg.CLOSE_CHANNEL_TAB]: {
        binds: ["mod+w"],
        comboKeysBindGlobal: !0,
        action() {
            if (!u.A.isEnabled() || a.A.hasLayers() || (0, l.hasAnyModalOpen)() || s.A.isOpen()) return;
            let e = u.A.getActiveTab();
            if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
        },
    },
    [R.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getActiveTab();
            if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
        },
    },
    [R.IWg.SEARCH_EMOJIS]: F.L,
    [R.IWg.SEARCH_GIFS]: W.T,
    [R.IWg.SEARCH_STICKERS]: K.w,
    [R.IWg.TOGGLE_HOTKEYS]: Q.z,
    [R.IWg.JUMP_TO_FIRST_UNREAD]: x.s,
    [R.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, l.hasModalOpen)(U.fc)
                ? v.A.updateCreateGuildModal({ slide: U.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : v.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [R.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = h.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || b._.dispatch(R.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [R.IWg.RETURN_TO_AUDIO_CHANNEL]: k.u,
    [R.IWg.CALL_ACCEPT]: g.Yo,
    [R.IWg.CALL_START]: g.OX,
    [R.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (a.A.hasLayers() || (0, l.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (b._.dispatch(R.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [R.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = y.A.getGuildId(),
                n = y.A.getChannelId();
            return (null != n && (0, m.i)(t ?? R.ME, n), !1);
        },
    },
    [R.IWg.ZOOM_IN]: eu.Ur,
    [R.IWg.ZOOM_OUT]: eu.hU,
    [R.IWg.ZOOM_RESET]: eu.O$,
    [R.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId() ?? void 0;
            (0, V.transitionToGlobalDiscovery)({
                tab: j.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: w.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [R.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, D.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [R.IWg.OPEN_CONTEXT_MENU]: {
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
    [R.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.Ay.getChannelId();
            if (null == e) return !1;
            let t = h.A.getChannel(e);
            if (null == t) return !1;
            let n = h.A.getChannel(t.parent_id),
                i = (0, S.af)(t, n);
            return ((0, f.C)(i, L), !1);
        },
    },
};
function eg() {
    return [
        {
            description: O.intl.string(O.t.bx4Uyz),
            binds: e_(R.IWg.SERVER_PREV, R.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+Wem6h"]),
            binds: e_(R.IWg.CHANNEL_PREV, R.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+2fcdz"]),
            binds: e_(R.IWg.NAVIGATE_BACK, R.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.eVmj1H),
            binds: e_(R.IWg.UNREAD_PREV, R.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.EcqS7Y),
            binds: e_(R.IWg.MENTION_CHANNEL_PREV, R.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: O.intl.string(O.t["4I3pwW"]), binds: e_(R.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: O.intl.string(O.t.Bqss72), binds: e_(R.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: O.intl.string(O.t.yYsRlD), binds: e_(R.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: O.intl.string(O.t.O7ouXO), binds: e_(R.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: O.intl.string(O.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: O.intl.string(O.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: O.intl.string(O.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: O.intl.string(O.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: O.intl.string(O.t.UaXAPx), binds: e_(R.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: O.intl.string(O.t["5X9vFj"]), binds: e_(R.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.wxQFsl), binds: e_(R.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: O.intl.string(O.t["ZxGD+G"]), binds: e_(R.IWg.CREATE_THREAD), group: "CHAT" },
        { description: O.intl.string(O.t["C+XV7f"]), binds: e_(R.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: O.intl.string(O.t["Q+YV/T"]), binds: e_(R.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: O.intl.string(O.t["YEjV+W"]), binds: e_(R.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.AcBI9S), binds: e_(R.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: O.intl.string(O.t.JoxNnl), binds: e_(R.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: O.intl.string(O.t["3PHxo8"]), binds: e_(R.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: O.intl.string(O.t.YFl7eb), binds: e_(R.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: O.intl.string(O.t.L3RYYJ), binds: e_(R.IWg.SCROLL_UP, R.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: O.intl.string(O.t["3HAurM"]), binds: e_(R.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: O.intl.string(O.t.rrYBEu), binds: e_(R.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: O.intl.string(O.t.sUJlPL), binds: e_(R.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: O.intl.string(O.t["A+Fv0R"]), binds: e_(R.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: O.intl.string(O.t.tL6eVW), binds: e_(R.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t["QXe/7T"]), binds: e_(R.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.d6UIii), binds: e_(R.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.IcEW06), binds: e_(R.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.WN2dsS), binds: e_(R.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: O.intl.string(O.t.rUK0kk), binds: e_(R.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.vkGkSn), binds: e_(R.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t.FJvZ87), binds: e_(R.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t["FiWl/T"]), binds: e_(R.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: O.intl.string(O.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: O.intl.string(O.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: O.intl.string(O.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: O.intl.string(O.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: O.intl.string(O.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: O.intl.string(O.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: O.intl.string(O.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: O.intl.string(O.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: O.intl.string(O.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: O.intl.string(O.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: O.intl.string(O.t.z9c6mt), binds: e_(R.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eI = 221552 == n.j ? eC : null;
