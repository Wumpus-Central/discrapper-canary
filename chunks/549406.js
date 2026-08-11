"use strict";
n.d(t, { Bx: () => eu, Ay: () => e_, Gm: () => el, Q_: () => es, zF: () => eo, zR: () => ec });
var i,
    r = n(774603),
    a = n(176522),
    s = n(435558),
    l = n.n(s),
    o = n(691540),
    d = n(857250),
    c = n(97483),
    u = n(734057),
    _ = n(309010),
    E = n(871237),
    A = n(957565),
    h = n(375708);
let I = (0, s.throttle)(() => (0, o.P0)((0, d.o)(h.intl.string(h.t["+5kSoW"]), c.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var f = n(265422),
    p = n(967198),
    T = n(625494),
    m = n(652215),
    g = n(192308),
    S = n(272613),
    N = n(819638),
    C = n(723702),
    O = n(186111),
    R = n(763827),
    L = n(64460),
    D = n(92960),
    y = n(739008),
    v = n(314519),
    b = n(837057),
    M = n(310419),
    P = n(488995),
    U = n(675704),
    w = n(806964),
    G = n(552049),
    x = n(877991),
    k = n(332779),
    F = n(274794),
    V = n(928531),
    B = n(251494),
    H = n(82038),
    j = n(14214),
    W = n(151199),
    Y = n(975571),
    K = n(28647),
    $ = n(851109);
let z = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: l().debounce(
        () => {
            if (T._.hasSubscribers(m.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return T._.dispatch(m.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
        },
        100,
        { leading: !0 },
    ),
};
var q = n(478437),
    Z = n(367513),
    X = n(604681),
    Q = n(198052),
    J = n(47675),
    ee = n(999291),
    et = n(761640),
    en = n(467691),
    ei = n(674272),
    er = n(431804),
    ea = n(406975),
    es =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function el(e) {
    switch (e) {
        case "NAVIGATION":
            return h.intl.string(h.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return h.intl.string(h.t.bI8F5u);
        case "CHAT":
            return h.intl.string(h.t.hDhbb3);
        case "MISCELLANEOUS":
            return h.intl.string(h.t.cBdwqs);
        case "MESSAGE":
            return h.intl.string(h.t["5fpmX9"]);
        case "DND":
            return h.intl.string(h.t["69j6+4"]);
    }
}
function eo(e) {
    switch (e) {
        case "MESSAGE":
            return h.intl.string(h.t.iepGDn);
        case "DND":
            return h.intl.string(h.t.LBsB0a);
        default:
            return;
    }
}
function ed() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = ec[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let ec = {
    [m.IWg.SERVER_NEXT]: V.yx,
    [m.IWg.SERVER_PREV]: V.yv,
    [m.IWg.CHANNEL_NEXT]: a.kF,
    [m.IWg.CHANNEL_PREV]: a.Oc,
    [m.IWg.NAVIGATE_BACK]: a.GY,
    [m.IWg.NAVIGATE_FORWARD]: a.M$,
    [m.IWg.UNREAD_NEXT]: en.mH,
    [m.IWg.UNREAD_PREV]: en.US,
    [m.IWg.MENTION_CHANNEL_NEXT]: en.BD,
    [m.IWg.MENTION_CHANNEL_PREV]: en.X8,
    [m.IWg.TOGGLE_PREVIOUS_GUILD]: a.Fv,
    [m.IWg.JUMP_TO_GUILD]: L.J,
    [m.IWg.SUBMIT]: B.X,
    [m.IWg.TEXTAREA_FOCUS]: H.c,
    [m.IWg.MARK_CHANNEL_READ]: D.Df,
    [m.IWg.MARK_SERVER_READ]: y.P,
    [m.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (T._.dispatch(m.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [m.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(O.A.getLayers().length > 0 || (0, g.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, $.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = _.Ay.getChannelId(),
                    n = u.A.getChannel(t);
                window.location.pathname.startsWith(m.BVt.CHANNEL(m.gNP)) && null != n
                    ? (0, f.i)(n.guild_id, t)
                    : (0, f.a)(m.BVt.CHANNEL(m.gNP, t ?? void 0));
            })(),
            T._.dispatch(m.jej.TOGGLE_INBOX),
            !1),
    },
    [m.IWg.MARK_TOP_INBOX_CHANNEL_READ]: z,
    [m.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = p.A.getGuildId(),
                t = _.Ay.getChannelId(e),
                n = u.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && Q.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === q.r.GUILD_VOICE || i))
                return Z.A.updateChatOpen(t, !Q.A.getChatOpen(t)), !1;
            if (null != t && null != n && n.type === q.r.DM) {
                let e = et.Ay.getSection(t, n?.isDM()),
                    i = (0, ee.AP)(n.getRecipientId()),
                    r = e === m.YvQ.PROFILE;
                return (0, J.am)({ displayProfile: i, isProfileOpen: !r }), X.A.toggleUserProfileSidebarSection(), !1;
            }
            return X.A.toggleMembersSection(), !1;
        },
    },
    [m.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(Y.C), !1),
    },
    [m.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, ei.A)({ source: er.y.KEYBIND }), !1),
    },
    [m.IWg.TOGGLE_MUTE]: j.VT,
    [m.IWg.TOGGLE_DEAFEN]: j.rR,
    [m.IWg.TOGGLE_CATEGORY_COLLAPSED]: W.y,
    [m.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (T._.dispatch(m.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [m.IWg.SCROLL_UP]: G.U5,
    [m.IWg.SCROLL_DOWN]: G.fz,
    [m.IWg.QUICKSWITCHER_SHOW]: U.R,
    [m.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != p.A.getGuildId() && (0, f.i)(m.ME), T._.safeDispatch(m.jej.TOGGLE_DM_CREATE), !1),
    },
    [m.IWg.SEARCH_EMOJIS]: x.L,
    [m.IWg.SEARCH_GIFS]: k.T,
    [m.IWg.SEARCH_STICKERS]: F.w,
    [m.IWg.TOGGLE_HOTKEYS]: K.z,
    [m.IWg.JUMP_TO_FIRST_UNREAD]: v.s,
    [m.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, g.hasModalOpen)(N.fc)
                ? S.A.updateCreateGuildModal({ slide: N.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : S.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [m.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getChannel(_.Ay.getChannelId());
            return null == e || e.isManaged() || T._.dispatch(m.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [m.IWg.RETURN_TO_AUDIO_CHANNEL]: w.u,
    [m.IWg.CALL_ACCEPT]: r.Yo,
    [m.IWg.CALL_START]: r.OX,
    [m.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (O.A.hasLayers() || (0, g.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return T._.dispatch(m.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [m.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = R.A.getGuildId(),
                n = R.A.getChannelId();
            return null != n && (0, f.i)(t ?? m.ME, n), !1;
        },
    },
    [m.IWg.ZOOM_IN]: ea.Ur,
    [m.IWg.ZOOM_OUT]: ea.hU,
    [m.IWg.ZOOM_RESET]: ea.O$,
    [m.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = p.A.getGuildId() ?? void 0;
            (0, b.transitionToGlobalDiscovery)({
                tab: P.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: M.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [m.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, C.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
        },
    },
    [m.IWg.OPEN_CONTEXT_MENU]: {
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
    [m.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = _.Ay.getChannelId();
            if (null == e) return !1;
            let t = u.A.getChannel(e);
            if (null == t) return !1;
            let n = u.A.getChannel(t.parent_id),
                i = (0, E.af)(t, n);
            return (0, A.C)(i, I), !1;
        },
    },
};
function eu() {
    return [
        {
            description: h.intl.string(h.t.bx4Uyz),
            binds: ed(m.IWg.SERVER_PREV, m.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: h.intl.string(h.t["+Wem6h"]),
            binds: ed(m.IWg.CHANNEL_PREV, m.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: h.intl.string(h.t["+2fcdz"]),
            binds: ed(m.IWg.NAVIGATE_BACK, m.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: h.intl.string(h.t.eVmj1H),
            binds: ed(m.IWg.UNREAD_PREV, m.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: h.intl.string(h.t.EcqS7Y),
            binds: ed(m.IWg.MENTION_CHANNEL_PREV, m.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: h.intl.string(h.t["4I3pwW"]), binds: ed(m.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: h.intl.string(h.t.Bqss72), binds: ed(m.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: h.intl.string(h.t.yYsRlD), binds: ed(m.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: h.intl.string(h.t.O7ouXO), binds: ed(m.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: h.intl.string(h.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: h.intl.string(h.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: h.intl.string(h.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: h.intl.string(h.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: h.intl.string(h.t.UaXAPx), binds: ed(m.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: h.intl.string(h.t["5X9vFj"]), binds: ed(m.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: h.intl.string(h.t.wxQFsl), binds: ed(m.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: h.intl.string(h.t["C+XV7f"]), binds: ed(m.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: h.intl.string(h.t["Q+YV/T"]), binds: ed(m.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: h.intl.string(h.t["YEjV+W"]), binds: ed(m.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: h.intl.string(h.t.AcBI9S), binds: ed(m.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: h.intl.string(h.t.JoxNnl), binds: ed(m.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: h.intl.string(h.t["3PHxo8"]), binds: ed(m.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: h.intl.string(h.t.YFl7eb), binds: ed(m.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: h.intl.string(h.t.L3RYYJ), binds: ed(m.IWg.SCROLL_UP, m.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: h.intl.string(h.t["3HAurM"]), binds: ed(m.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: h.intl.string(h.t.rrYBEu), binds: ed(m.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: h.intl.string(h.t.sUJlPL), binds: ed(m.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: h.intl.string(h.t["A+Fv0R"]), binds: ed(m.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: h.intl.string(h.t.tL6eVW), binds: ed(m.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: h.intl.string(h.t["QXe/7T"]), binds: ed(m.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: h.intl.string(h.t.d6UIii), binds: ed(m.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: h.intl.string(h.t.IcEW06), binds: ed(m.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: h.intl.string(h.t.WN2dsS), binds: ed(m.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: h.intl.string(h.t.rUK0kk), binds: ed(m.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: h.intl.string(h.t.vkGkSn), binds: ed(m.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: h.intl.string(h.t.FJvZ87), binds: ed(m.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: h.intl.string(h.t["FiWl/T"]), binds: ed(m.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: h.intl.string(h.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: h.intl.string(h.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: h.intl.string(h.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: h.intl.string(h.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: h.intl.string(h.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: h.intl.string(h.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: h.intl.string(h.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: h.intl.string(h.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: h.intl.string(h.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: h.intl.string(h.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: h.intl.string(h.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: h.intl.string(h.t.z9c6mt), binds: ed(m.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let e_ = ec;
