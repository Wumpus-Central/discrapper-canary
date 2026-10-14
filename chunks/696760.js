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
    N = n.n(T),
    p = n(858899),
    S = n(147036),
    f = n(957565),
    O = n(660183);
let L = (0, T.throttle)(() => (0, p.P0)({ text: O.intl.string(O.t["+5kSoW"]), variant: "success" }), 3e3, {
    leading: !0,
    trailing: !1,
});
var m = n(265422),
    R = n(625494),
    b = n(652215),
    v = n(272613),
    U = n(819638),
    D = n(723702),
    y = n(763827),
    G = n(64460),
    M = n(92960),
    P = n(739008),
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
    action: N().debounce(
        () => {
            if (R._.hasSubscribers(b.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (R._.dispatch(b.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
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
    [b.IWg.SERVER_NEXT]: Y.yx,
    [b.IWg.SERVER_PREV]: Y.yv,
    [b.IWg.CHANNEL_NEXT]: I.kF,
    [b.IWg.CHANNEL_PREV]: I.Oc,
    [b.IWg.NAVIGATE_BACK]: I.GY,
    [b.IWg.NAVIGATE_FORWARD]: I.M$,
    [b.IWg.UNREAD_NEXT]: eo.mH,
    [b.IWg.UNREAD_PREV]: eo.US,
    [b.IWg.MENTION_CHANNEL_NEXT]: eo.BD,
    [b.IWg.MENTION_CHANNEL_PREV]: eo.X8,
    [b.IWg.TOGGLE_PREVIOUS_GUILD]: I.Fv,
    [b.IWg.JUMP_TO_GUILD]: G.J,
    [b.IWg.SUBMIT]: Z.X,
    [b.IWg.TEXTAREA_FOCUS]: z.c,
    [b.IWg.MARK_CHANNEL_READ]: M.Df,
    [b.IWg.MARK_SERVER_READ]: P.P,
    [b.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (R._.dispatch(b.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [b.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(a.A.getLayers().length > 0 || (0, l.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, $.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = h.A.getChannel(t);
                window.location.pathname.startsWith(b.BVt.CHANNEL(b.gNP)) && null != n
                    ? (0, m.i)(n.guild_id, t)
                    : (0, m.a)(b.BVt.CHANNEL(b.gNP, t ?? void 0));
            })(),
            R._.dispatch(b.jej.TOGGLE_INBOX),
            !1),
    },
    [b.IWg.MARK_TOP_INBOX_CHANNEL_READ]: ee,
    [b.IWg.TOGGLE_USERS]: {
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
                    l = e === b.YvQ.PROFILE;
                return (
                    (0, er.am)({ displayProfile: i, isProfileOpen: !l }), ei.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (ei.A.toggleMembersSection(), !1);
        },
    },
    [b.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(q.C), !1),
    },
    [b.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, ed.A)({ source: ec.y.KEYBIND }), !1),
    },
    [b.IWg.TOGGLE_MUTE]: X.VT,
    [b.IWg.TOGGLE_DEAFEN]: X.rR,
    [b.IWg.TOGGLE_CATEGORY_COLLAPSED]: J.y,
    [b.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (R._.dispatch(b.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [b.IWg.SCROLL_UP]: B.U5,
    [b.IWg.SCROLL_DOWN]: B.fz,
    [b.IWg.QUICKSWITCHER_SHOW]: H.R,
    [b.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, m.i)(b.ME), R._.safeDispatch(b.jej.TOGGLE_DM_CREATE), !1),
    },
    [b.IWg.CREATE_THREAD]: {
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
    [b.IWg.SEARCH_EMOJIS]: F.L,
    [b.IWg.SEARCH_GIFS]: W.T,
    [b.IWg.SEARCH_STICKERS]: K.w,
    [b.IWg.TOGGLE_HOTKEYS]: Q.z,
    [b.IWg.JUMP_TO_FIRST_UNREAD]: x.s,
    [b.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, l.hasModalOpen)(U.fc)
                ? v.A.updateCreateGuildModal({ slide: U.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : v.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [b.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = h.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || R._.dispatch(b.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [b.IWg.RETURN_TO_AUDIO_CHANNEL]: k.u,
    [b.IWg.CALL_ACCEPT]: g.Yo,
    [b.IWg.CALL_START]: g.OX,
    [b.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (a.A.hasLayers() || (0, l.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (R._.dispatch(b.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [b.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = y.A.getGuildId(),
                n = y.A.getChannelId();
            return (null != n && (0, m.i)(t ?? b.ME, n), !1);
        },
    },
    [b.IWg.ZOOM_IN]: eu.Ur,
    [b.IWg.ZOOM_OUT]: eu.hU,
    [b.IWg.ZOOM_RESET]: eu.O$,
    [b.IWg.OPEN_APP_DIRECTORY]: {
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
    [b.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, D.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
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
                i = (0, S.af)(t, n);
            return ((0, f.C)(i, L), !1);
        },
    },
};
function eg() {
    return [
        {
            description: O.intl.string(O.t.bx4Uyz),
            binds: e_(b.IWg.SERVER_PREV, b.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+Wem6h"]),
            binds: e_(b.IWg.CHANNEL_PREV, b.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+2fcdz"]),
            binds: e_(b.IWg.NAVIGATE_BACK, b.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.eVmj1H),
            binds: e_(b.IWg.UNREAD_PREV, b.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.EcqS7Y),
            binds: e_(b.IWg.MENTION_CHANNEL_PREV, b.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: O.intl.string(O.t["4I3pwW"]), binds: e_(b.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: O.intl.string(O.t.Bqss72), binds: e_(b.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: O.intl.string(O.t.yYsRlD), binds: e_(b.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: O.intl.string(O.t.O7ouXO), binds: e_(b.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: O.intl.string(O.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: O.intl.string(O.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: O.intl.string(O.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: O.intl.string(O.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: O.intl.string(O.t.UaXAPx), binds: e_(b.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: O.intl.string(O.t["5X9vFj"]), binds: e_(b.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.wxQFsl), binds: e_(b.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: O.intl.string(O.t["ZxGD+G"]), binds: e_(b.IWg.CREATE_THREAD), group: "CHAT" },
        { description: O.intl.string(O.t["C+XV7f"]), binds: e_(b.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: O.intl.string(O.t["Q+YV/T"]), binds: e_(b.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: O.intl.string(O.t["YEjV+W"]), binds: e_(b.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.AcBI9S), binds: e_(b.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: O.intl.string(O.t.JoxNnl), binds: e_(b.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: O.intl.string(O.t["3PHxo8"]), binds: e_(b.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: O.intl.string(O.t.YFl7eb), binds: e_(b.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: O.intl.string(O.t.L3RYYJ), binds: e_(b.IWg.SCROLL_UP, b.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: O.intl.string(O.t["3HAurM"]), binds: e_(b.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: O.intl.string(O.t.rrYBEu), binds: e_(b.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: O.intl.string(O.t.sUJlPL), binds: e_(b.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: O.intl.string(O.t["A+Fv0R"]), binds: e_(b.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: O.intl.string(O.t.tL6eVW), binds: e_(b.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t["QXe/7T"]), binds: e_(b.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.d6UIii), binds: e_(b.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.IcEW06), binds: e_(b.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.WN2dsS), binds: e_(b.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: O.intl.string(O.t.rUK0kk), binds: e_(b.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.vkGkSn), binds: e_(b.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t.FJvZ87), binds: e_(b.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t["FiWl/T"]), binds: e_(b.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
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
        { description: O.intl.string(O.t.z9c6mt), binds: e_(b.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eI = 221552 == n.j ? eC : null;
