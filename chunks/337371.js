"use strict";
n.d(t, { Bx: () => e_, Ay: () => eE, Gm: () => eo, Q_: () => el, zF: () => ed, zR: () => eu }), n(321073);
var i,
    r = n(966597),
    a = n(774603),
    s = n(176522),
    l = n(435558),
    o = n.n(l),
    d = n(691540),
    c = n(857250),
    u = n(97483),
    _ = n(734057),
    E = n(309010),
    A = n(871237),
    h = n(957565),
    I = n(375708);
let f = (0, l.throttle)(() => (0, d.P0)((0, c.o)(I.intl.string(I.t["+5kSoW"]), u.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var p = n(265422),
    T = n(967198),
    m = n(625494),
    g = n(652215),
    S = n(192308),
    N = n(272613),
    C = n(819638),
    R = n(723702),
    O = n(186111),
    L = n(763827),
    y = n(64460),
    D = n(92960),
    v = n(739008),
    b = n(314519),
    M = n(837057),
    P = n(310419),
    U = n(488995),
    w = n(675704),
    G = n(806964),
    x = n(552049),
    k = n(877991),
    F = n(332779),
    V = n(274794),
    B = n(928531),
    H = n(251494),
    j = n(82038),
    W = n(14214),
    Y = n(151199),
    K = n(975571),
    $ = n(28647),
    z = n(851109);
let q = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: o().debounce(
        () => {
            if (m._.hasSubscribers(g.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return m._.dispatch(g.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
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
    ea = n(431804),
    es = n(406975),
    el =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function eo(e) {
    switch (e) {
        case "NAVIGATION":
            return I.intl.string(I.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return I.intl.string(I.t.bI8F5u);
        case "CHAT":
            return I.intl.string(I.t.hDhbb3);
        case "MISCELLANEOUS":
            return I.intl.string(I.t.cBdwqs);
        case "MESSAGE":
            return I.intl.string(I.t["5fpmX9"]);
        case "DND":
            return I.intl.string(I.t["69j6+4"]);
    }
}
function ed(e) {
    switch (e) {
        case "MESSAGE":
            return I.intl.string(I.t.iepGDn);
        case "DND":
            return I.intl.string(I.t.LBsB0a);
        default:
            return;
    }
}
function ec() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eu[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eu = {
    [g.IWg.SERVER_NEXT]: B.yx,
    [g.IWg.SERVER_PREV]: B.yv,
    [g.IWg.CHANNEL_NEXT]: s.kF,
    [g.IWg.CHANNEL_PREV]: s.Oc,
    [g.IWg.NAVIGATE_BACK]: s.GY,
    [g.IWg.NAVIGATE_FORWARD]: s.M$,
    [g.IWg.UNREAD_NEXT]: ei.mH,
    [g.IWg.UNREAD_PREV]: ei.US,
    [g.IWg.MENTION_CHANNEL_NEXT]: ei.BD,
    [g.IWg.MENTION_CHANNEL_PREV]: ei.X8,
    [g.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [g.IWg.JUMP_TO_GUILD]: y.J,
    [g.IWg.SUBMIT]: H.X,
    [g.IWg.TEXTAREA_FOCUS]: j.c,
    [g.IWg.MARK_CHANNEL_READ]: D.Df,
    [g.IWg.MARK_SERVER_READ]: v.P,
    [g.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (m._.dispatch(g.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [g.IWg.TOGGLE_FOR_LATER]: {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
            let { enabled: e, inInbox: t } = r.A.getConfig({ location: "keybinds" });
            if (e && !t) return m._.dispatch(g.jej.TOGGLE_FOR_LATER), !1;
        },
    },
    [g.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(O.A.getLayers().length > 0 || (0, S.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, z.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = E.Ay.getChannelId(),
                    n = _.A.getChannel(t);
                window.location.pathname.startsWith(g.BVt.CHANNEL(g.gNP)) && null != n
                    ? (0, p.i)(n.guild_id, t)
                    : (0, p.a)(g.BVt.CHANNEL(g.gNP, t ?? void 0));
            })(),
            m._.dispatch(g.jej.TOGGLE_INBOX),
            !1),
    },
    [g.IWg.MARK_TOP_INBOX_CHANNEL_READ]: q,
    [g.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = T.A.getGuildId(),
                t = E.Ay.getChannelId(e),
                n = _.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && J.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === Z.r.GUILD_VOICE || i))
                return X.A.updateChatOpen(t, !J.A.getChatOpen(t)), !1;
            if (null != t && null != n && n.type === Z.r.DM) {
                let e = en.Ay.getSection(t, n?.isDM()),
                    i = (0, et.AP)(n.getRecipientId()),
                    r = e === g.YvQ.PROFILE;
                return (0, ee.am)({ displayProfile: i, isProfileOpen: !r }), Q.A.toggleUserProfileSidebarSection(), !1;
            }
            return Q.A.toggleMembersSection(), !1;
        },
    },
    [g.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(K.C), !1),
    },
    [g.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, er.A)({ source: ea.y.KEYBIND }), !1),
    },
    [g.IWg.TOGGLE_MUTE]: W.VT,
    [g.IWg.TOGGLE_DEAFEN]: W.rR,
    [g.IWg.TOGGLE_CATEGORY_COLLAPSED]: Y.y,
    [g.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (m._.dispatch(g.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [g.IWg.SCROLL_UP]: x.U5,
    [g.IWg.SCROLL_DOWN]: x.fz,
    [g.IWg.QUICKSWITCHER_SHOW]: w.R,
    [g.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != T.A.getGuildId() && (0, p.i)(g.ME), m._.safeDispatch(g.jej.TOGGLE_DM_CREATE), !1),
    },
    [g.IWg.SEARCH_EMOJIS]: k.L,
    [g.IWg.SEARCH_GIFS]: F.T,
    [g.IWg.SEARCH_STICKERS]: V.w,
    [g.IWg.TOGGLE_HOTKEYS]: $.z,
    [g.IWg.JUMP_TO_FIRST_UNREAD]: b.s,
    [g.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, S.hasModalOpen)(C.fc)
                ? N.A.updateCreateGuildModal({ slide: C.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : N.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [g.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = _.A.getChannel(E.Ay.getChannelId());
            return null == e || e.isManaged() || m._.dispatch(g.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [g.IWg.RETURN_TO_AUDIO_CHANNEL]: G.u,
    [g.IWg.CALL_ACCEPT]: a.Yo,
    [g.IWg.CALL_START]: a.OX,
    [g.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (O.A.hasLayers() || (0, S.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return m._.dispatch(g.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [g.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = L.A.getGuildId(),
                n = L.A.getChannelId();
            return null != n && (0, p.i)(t ?? g.ME, n), !1;
        },
    },
    [g.IWg.ZOOM_IN]: es.Ur,
    [g.IWg.ZOOM_OUT]: es.hU,
    [g.IWg.ZOOM_RESET]: es.O$,
    [g.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = T.A.getGuildId() ?? void 0;
            (0, M.transitionToGlobalDiscovery)({
                tab: U.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: P.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [g.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, R.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
        },
    },
    [g.IWg.OPEN_CONTEXT_MENU]: {
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
    [g.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = E.Ay.getChannelId();
            if (null == e) return !1;
            let t = _.A.getChannel(e);
            if (null == t) return !1;
            let n = _.A.getChannel(t.parent_id),
                i = (0, A.af)(t, n);
            return (0, h.C)(i, f), !1;
        },
    },
};
function e_() {
    let e = [
            {
                description: I.intl.string(I.t.bx4Uyz),
                binds: ec(g.IWg.SERVER_PREV, g.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: I.intl.string(I.t["+Wem6h"]),
                binds: ec(g.IWg.CHANNEL_PREV, g.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: I.intl.string(I.t["+2fcdz"]),
                binds: ec(g.IWg.NAVIGATE_BACK, g.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: I.intl.string(I.t.eVmj1H),
                binds: ec(g.IWg.UNREAD_PREV, g.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: I.intl.string(I.t.EcqS7Y),
                binds: ec(g.IWg.MENTION_CHANNEL_PREV, g.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: I.intl.string(I.t["4I3pwW"]), binds: ec(g.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: I.intl.string(I.t.Bqss72), binds: ec(g.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: I.intl.string(I.t.yYsRlD), binds: ec(g.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            {
                description: I.intl.string(I.t.O7ouXO),
                binds: ec(g.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            { description: I.intl.string(I.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: I.intl.string(I.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: I.intl.string(I.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: I.intl.string(I.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: I.intl.string(I.t.UaXAPx), binds: ec(g.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: I.intl.string(I.t["5X9vFj"]), binds: ec(g.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: I.intl.string(I.t.wxQFsl), binds: ec(g.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: I.intl.string(I.t["C+XV7f"]), binds: ec(g.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: I.intl.string(I.t["Q+YV/T"]), binds: ec(g.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: I.intl.string(I.t["YEjV+W"]), binds: ec(g.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: I.intl.string(I.t.AcBI9S), binds: ec(g.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: I.intl.string(I.t.JoxNnl), binds: ec(g.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: I.intl.string(I.t["3PHxo8"]), binds: ec(g.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: I.intl.string(I.t.YFl7eb), binds: ec(g.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: I.intl.string(I.t.L3RYYJ), binds: ec(g.IWg.SCROLL_UP, g.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: I.intl.string(I.t["3HAurM"]), binds: ec(g.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: I.intl.string(I.t.rrYBEu), binds: ec(g.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: I.intl.string(I.t.sUJlPL), binds: ec(g.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: I.intl.string(I.t["A+Fv0R"]),
                binds: ec(g.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: I.intl.string(I.t.tL6eVW), binds: ec(g.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: I.intl.string(I.t["QXe/7T"]), binds: ec(g.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: I.intl.string(I.t.d6UIii), binds: ec(g.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: I.intl.string(I.t.IcEW06), binds: ec(g.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: I.intl.string(I.t.WN2dsS),
                binds: ec(g.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: I.intl.string(I.t.rUK0kk), binds: ec(g.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: I.intl.string(I.t.vkGkSn), binds: ec(g.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: I.intl.string(I.t.FJvZ87), binds: ec(g.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: I.intl.string(I.t["FiWl/T"]), binds: ec(g.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
            { description: I.intl.string(I.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
            { description: I.intl.string(I.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
            { description: I.intl.string(I.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
            { description: I.intl.string(I.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
            { description: I.intl.string(I.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
            { description: I.intl.string(I.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
            { description: I.intl.string(I.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
            { description: I.intl.string(I.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
            { description: I.intl.string(I.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
            { description: I.intl.string(I.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
            { description: I.intl.string(I.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
            { description: I.intl.string(I.t.z9c6mt), binds: ec(g.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = r.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: I.intl.string(I.t.IWNSoH), binds: ec(g.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let eE = eu;
