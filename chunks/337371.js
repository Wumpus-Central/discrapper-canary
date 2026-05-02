"use strict";
n.d(t, { Bx: () => e_, Ay: () => ef, Gm: () => el, Q_: () => eo, zF: () => eu, zR: () => ed }), n(321073);
var i,
    r = n(966597),
    s = n(774603),
    a = n(176522),
    o = n(735438),
    l = n.n(o),
    u = n(691540),
    c = n(857250),
    d = n(97483),
    _ = n(734057),
    f = n(309010),
    h = n(871237),
    p = n(957565),
    E = n(375708);
let m = (0, o.throttle)(() => (0, u.P0)((0, c.o)(E.intl.string(E.t["+5kSoW"]), d.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var g = n(265422),
    A = n(967198),
    I = n(625494),
    T = n(652215),
    S = n(192308),
    N = n(272613),
    y = n(819638),
    C = n(723702),
    v = n(186111),
    O = n(763827),
    R = n(64460),
    b = n(92960),
    D = n(739008),
    L = n(314519),
    w = n(837057),
    M = n(310419),
    P = n(488995),
    x = n(675704),
    U = n(806964),
    k = n(552049),
    G = n(877991),
    F = n(332779),
    V = n(274794),
    B = n(928531),
    H = n(251494),
    j = n(82038),
    Y = n(14214),
    W = n(151199),
    K = n(975571),
    z = n(28647),
    $ = n(851109);
let q = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: l().debounce(
        () => {
            if (I._.hasSubscribers(T.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return I._.dispatch(T.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
        },
        100,
        { leading: !0 },
    ),
};
var Z = n(478437),
    X = n(367513),
    Q = n(604681),
    J = n(313961),
    ee = n(47675),
    et = n(999291),
    en = n(761640),
    ei = n(467691),
    er = n(674272),
    es = n(431804),
    ea = n(406975),
    eo =
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
            return E.intl.string(E.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return E.intl.string(E.t.bI8F5u);
        case "CHAT":
            return E.intl.string(E.t.hDhbb3);
        case "MISCELLANEOUS":
            return E.intl.string(E.t.cBdwqs);
        case "MESSAGE":
            return E.intl.string(E.t["5fpmX9"]);
        case "DND":
            return E.intl.string(E.t["69j6+4"]);
    }
}
function eu(e) {
    switch (e) {
        case "MESSAGE":
            return E.intl.string(E.t.iepGDn);
        case "DND":
            return E.intl.string(E.t.LBsB0a);
        default:
            return;
    }
}
function ec() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = ed[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let ed = {
    [T.IWg.SERVER_NEXT]: B.yx,
    [T.IWg.SERVER_PREV]: B.yv,
    [T.IWg.CHANNEL_NEXT]: a.kF,
    [T.IWg.CHANNEL_PREV]: a.Oc,
    [T.IWg.NAVIGATE_BACK]: a.GY,
    [T.IWg.NAVIGATE_FORWARD]: a.M$,
    [T.IWg.UNREAD_NEXT]: ei.mH,
    [T.IWg.UNREAD_PREV]: ei.US,
    [T.IWg.MENTION_CHANNEL_NEXT]: ei.BD,
    [T.IWg.MENTION_CHANNEL_PREV]: ei.X8,
    [T.IWg.TOGGLE_PREVIOUS_GUILD]: a.Fv,
    [T.IWg.JUMP_TO_GUILD]: R.J,
    [T.IWg.SUBMIT]: H.X,
    [T.IWg.TEXTAREA_FOCUS]: j.c,
    [T.IWg.MARK_CHANNEL_READ]: b.Df,
    [T.IWg.MARK_SERVER_READ]: D.P,
    [T.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (I._.dispatch(T.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [T.IWg.TOGGLE_FOR_LATER]: {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
            let { enabled: e, inInbox: t } = r.A.getConfig({ location: "keybinds" });
            if (e && !t) return I._.dispatch(T.jej.TOGGLE_FOR_LATER), !1;
        },
    },
    [T.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(v.A.getLayers().length > 0) &&
            ((() => {
                let { notificationCenterVariant: e } = (0, $.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = f.A.getChannelId(),
                    n = _.A.getChannel(t);
                return window.location.pathname.startsWith(T.BVt.CHANNEL(T.gNP)) && null != n
                    ? (0, g.i)(n.guild_id, t)
                    : (0, g.a)(T.BVt.CHANNEL(T.gNP, t ?? void 0));
            })(),
            I._.dispatch(T.jej.TOGGLE_INBOX),
            !1),
    },
    [T.IWg.MARK_TOP_INBOX_CHANNEL_READ]: q,
    [T.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = A.A.getGuildId(),
                t = f.A.getChannelId(e),
                n = _.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && J.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === Z.r.GUILD_VOICE || i))
                return X.A.updateChatOpen(t, !J.A.getChatOpen(t), "toggle users keybind"), !1;
            if (null != t && null != n && n.type === Z.r.DM) {
                let e = en.Ay.getSection(t, n?.isDM()),
                    i = (0, et.AP)(n.getRecipientId()),
                    r = e === T.YvQ.PROFILE;
                return (0, ee.am)({ displayProfile: i, isProfileOpen: !r }), Q.A.toggleUserProfileSidebarSection(), !1;
            }
            return Q.A.toggleMembersSection(), !1;
        },
    },
    [T.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(K.C), !1),
    },
    [T.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, er.A)({ source: es.y.KEYBIND, onClose: S.closeAllModals }), !1),
    },
    [T.IWg.TOGGLE_MUTE]: Y.VT,
    [T.IWg.TOGGLE_DEAFEN]: Y.rR,
    [T.IWg.TOGGLE_CATEGORY_COLLAPSED]: W.y,
    [T.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (I._.dispatch(T.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [T.IWg.SCROLL_UP]: k.U5,
    [T.IWg.SCROLL_DOWN]: k.fz,
    [T.IWg.QUICKSWITCHER_SHOW]: x.R,
    [T.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != A.A.getGuildId() && (0, g.i)(T.ME), I._.safeDispatch(T.jej.TOGGLE_DM_CREATE), !1),
    },
    [T.IWg.SEARCH_EMOJIS]: G.L,
    [T.IWg.SEARCH_GIFS]: F.T,
    [T.IWg.SEARCH_STICKERS]: V.w,
    [T.IWg.TOGGLE_HOTKEYS]: z.z,
    [T.IWg.JUMP_TO_FIRST_UNREAD]: L.s,
    [T.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, S.hasModalOpen)(y.fc)
                ? N.A.updateCreateGuildModal({ slide: y.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : N.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [T.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = _.A.getChannel(f.A.getChannelId());
            return null == e || e.isManaged() || I._.dispatch(T.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [T.IWg.RETURN_TO_AUDIO_CHANNEL]: U.u,
    [T.IWg.CALL_ACCEPT]: s.Yo,
    [T.IWg.CALL_START]: s.OX,
    [T.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (v.A.hasLayers() || (0, S.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return I._.dispatch(T.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [T.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = O.A.getGuildId(),
                n = O.A.getChannelId();
            return null != n && (0, g.i)(t ?? T.ME, n), !1;
        },
    },
    [T.IWg.ZOOM_IN]: ea.Ur,
    [T.IWg.ZOOM_OUT]: ea.hU,
    [T.IWg.ZOOM_RESET]: ea.O$,
    [T.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = A.A.getGuildId() ?? void 0;
            (0, w.transitionToGlobalDiscovery)({
                tab: P.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: M.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [T.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, C.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
        },
    },
    [T.IWg.OPEN_CONTEXT_MENU]: {
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
    [T.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = f.A.getChannelId();
            if (null == e) return !1;
            let t = _.A.getChannel(e);
            if (null == t) return !1;
            let n = _.A.getChannel(t.parent_id),
                i = (0, h.af)(t, n);
            return (0, p.C)(i, m), !1;
        },
    },
};
function e_() {
    let e = [
            {
                description: E.intl.string(E.t.bx4Uyz),
                binds: ec(T.IWg.SERVER_PREV, T.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: E.intl.string(E.t["+Wem6h"]),
                binds: ec(T.IWg.CHANNEL_PREV, T.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: E.intl.string(E.t["+2fcdz"]),
                binds: ec(T.IWg.NAVIGATE_BACK, T.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: E.intl.string(E.t.eVmj1H),
                binds: ec(T.IWg.UNREAD_PREV, T.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: E.intl.string(E.t.EcqS7Y),
                binds: ec(T.IWg.MENTION_CHANNEL_PREV, T.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: E.intl.string(E.t["4I3pwW"]), binds: ec(T.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: E.intl.string(E.t.Bqss72), binds: ec(T.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: E.intl.string(E.t.yYsRlD), binds: ec(T.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            {
                description: E.intl.string(E.t.O7ouXO),
                binds: ec(T.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            { description: E.intl.string(E.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: E.intl.string(E.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: E.intl.string(E.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: E.intl.string(E.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: E.intl.string(E.t.UaXAPx), binds: ec(T.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: E.intl.string(E.t["5X9vFj"]), binds: ec(T.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: E.intl.string(E.t.wxQFsl), binds: ec(T.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: E.intl.string(E.t["C+XV7f"]), binds: ec(T.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: E.intl.string(E.t["Q+YV/T"]), binds: ec(T.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: E.intl.string(E.t["YEjV+W"]), binds: ec(T.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: E.intl.string(E.t.AcBI9S), binds: ec(T.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: E.intl.string(E.t.JoxNnl), binds: ec(T.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: E.intl.string(E.t["3PHxo8"]), binds: ec(T.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: E.intl.string(E.t.YFl7eb), binds: ec(T.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: E.intl.string(E.t.L3RYYJ), binds: ec(T.IWg.SCROLL_UP, T.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: E.intl.string(E.t["3HAurM"]), binds: ec(T.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: E.intl.string(E.t.rrYBEu), binds: ec(T.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: E.intl.string(E.t.sUJlPL), binds: ec(T.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: E.intl.string(E.t["A+Fv0R"]),
                binds: ec(T.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: E.intl.string(E.t.tL6eVW), binds: ec(T.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: E.intl.string(E.t["QXe/7T"]), binds: ec(T.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: E.intl.string(E.t.d6UIii), binds: ec(T.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: E.intl.string(E.t.IcEW06), binds: ec(T.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: E.intl.string(E.t.WN2dsS),
                binds: ec(T.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: E.intl.string(E.t.rUK0kk), binds: ec(T.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: E.intl.string(E.t.vkGkSn), binds: ec(T.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: E.intl.string(E.t.FJvZ87), binds: ec(T.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: E.intl.string(E.t["FiWl/T"]), binds: ec(T.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
            { description: E.intl.string(E.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
            { description: E.intl.string(E.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
            { description: E.intl.string(E.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
            { description: E.intl.string(E.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
            { description: E.intl.string(E.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
            { description: E.intl.string(E.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
            { description: E.intl.string(E.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
            { description: E.intl.string(E.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
            { description: E.intl.string(E.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
            { description: E.intl.string(E.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
            { description: E.intl.string(E.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
            { description: E.intl.string(E.t.z9c6mt), binds: ec(T.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = r.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: E.intl.string(E.t.IWNSoH), binds: ec(T.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let ef = ed;
