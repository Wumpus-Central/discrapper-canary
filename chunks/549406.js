n.d(t, { Bx: () => eu, Ay: () => eh, Gm: () => ea, Q_: () => es, zF: () => eo, zR: () => ec });
var i,
    l = n(774603),
    r = n(176522),
    s = n(435558),
    a = n.n(s),
    o = n(691540),
    d = n(857250),
    c = n(97483),
    u = n(734057),
    h = n(309010),
    A = n(871237),
    E = n(957565),
    C = n(375708);
let g = (0, s.throttle)(() => (0, o.P0)((0, d.o)(C.intl.string(C.t["+5kSoW"]), c.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var _ = n(265422),
    I = n(967198),
    T = n(625494),
    p = n(652215),
    N = n(192308),
    S = n(272613),
    L = n(819638),
    m = n(723702),
    f = n(186111),
    O = n(763827),
    b = n(64460),
    R = n(92960),
    v = n(739008),
    U = n(314519),
    y = n(837057),
    D = n(310419),
    G = n(488995),
    M = n(675704),
    P = n(806964),
    x = n(552049),
    V = n(877991),
    j = n(332779),
    w = n(274794),
    H = n(928531),
    B = n(251494),
    F = n(82038),
    k = n(14214),
    W = n(151199),
    K = n(975571),
    Y = n(28647),
    Z = n(851109);
let z = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: a().debounce(
        () => {
            if (T._.hasSubscribers(p.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return T._.dispatch(p.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
        },
        100,
        { leading: !0 },
    ),
};
var X = n(478437),
    J = n(367513),
    Q = n(604681),
    q = n(313961),
    $ = n(47675),
    ee = n(999291),
    et = n(761640),
    en = n(467691),
    ei = n(674272),
    el = n(431804),
    er = n(406975),
    es =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function ea(e) {
    switch (e) {
        case "NAVIGATION":
            return C.intl.string(C.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return C.intl.string(C.t.bI8F5u);
        case "CHAT":
            return C.intl.string(C.t.hDhbb3);
        case "MISCELLANEOUS":
            return C.intl.string(C.t.cBdwqs);
        case "MESSAGE":
            return C.intl.string(C.t["5fpmX9"]);
        case "DND":
            return C.intl.string(C.t["69j6+4"]);
    }
}
function eo(e) {
    switch (e) {
        case "MESSAGE":
            return C.intl.string(C.t.iepGDn);
        case "DND":
            return C.intl.string(C.t.LBsB0a);
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
    [p.IWg.SERVER_NEXT]: H.yx,
    [p.IWg.SERVER_PREV]: H.yv,
    [p.IWg.CHANNEL_NEXT]: r.kF,
    [p.IWg.CHANNEL_PREV]: r.Oc,
    [p.IWg.NAVIGATE_BACK]: r.GY,
    [p.IWg.NAVIGATE_FORWARD]: r.M$,
    [p.IWg.UNREAD_NEXT]: en.mH,
    [p.IWg.UNREAD_PREV]: en.US,
    [p.IWg.MENTION_CHANNEL_NEXT]: en.BD,
    [p.IWg.MENTION_CHANNEL_PREV]: en.X8,
    [p.IWg.TOGGLE_PREVIOUS_GUILD]: r.Fv,
    [p.IWg.JUMP_TO_GUILD]: b.J,
    [p.IWg.SUBMIT]: B.X,
    [p.IWg.TEXTAREA_FOCUS]: F.c,
    [p.IWg.MARK_CHANNEL_READ]: R.Df,
    [p.IWg.MARK_SERVER_READ]: v.P,
    [p.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (T._.dispatch(p.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [p.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(f.A.getLayers().length > 0 || (0, N.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, Z.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = h.Ay.getChannelId(),
                    n = u.A.getChannel(t);
                window.location.pathname.startsWith(p.BVt.CHANNEL(p.gNP)) && null != n
                    ? (0, _.i)(n.guild_id, t)
                    : (0, _.a)(p.BVt.CHANNEL(p.gNP, t ?? void 0));
            })(),
            T._.dispatch(p.jej.TOGGLE_INBOX),
            !1),
    },
    [p.IWg.MARK_TOP_INBOX_CHANNEL_READ]: z,
    [p.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = I.A.getGuildId(),
                t = h.Ay.getChannelId(e),
                n = u.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && q.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === X.r.GUILD_VOICE || i))
                return J.A.updateChatOpen(t, !q.A.getChatOpen(t)), !1;
            if (null != t && null != n && n.type === X.r.DM) {
                let e = et.Ay.getSection(t, n?.isDM()),
                    i = (0, ee.AP)(n.getRecipientId()),
                    l = e === p.YvQ.PROFILE;
                return (0, $.am)({ displayProfile: i, isProfileOpen: !l }), Q.A.toggleUserProfileSidebarSection(), !1;
            }
            return Q.A.toggleMembersSection(), !1;
        },
    },
    [p.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(K.C), !1),
    },
    [p.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, ei.A)({ source: el.y.KEYBIND }), !1),
    },
    [p.IWg.TOGGLE_MUTE]: k.VT,
    [p.IWg.TOGGLE_DEAFEN]: k.rR,
    [p.IWg.TOGGLE_CATEGORY_COLLAPSED]: W.y,
    [p.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (T._.dispatch(p.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [p.IWg.SCROLL_UP]: x.U5,
    [p.IWg.SCROLL_DOWN]: x.fz,
    [p.IWg.QUICKSWITCHER_SHOW]: M.R,
    [p.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != I.A.getGuildId() && (0, _.i)(p.ME), T._.safeDispatch(p.jej.TOGGLE_DM_CREATE), !1),
    },
    [p.IWg.SEARCH_EMOJIS]: V.L,
    [p.IWg.SEARCH_GIFS]: j.T,
    [p.IWg.SEARCH_STICKERS]: w.w,
    [p.IWg.TOGGLE_HOTKEYS]: Y.z,
    [p.IWg.JUMP_TO_FIRST_UNREAD]: U.s,
    [p.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, N.hasModalOpen)(L.fc)
                ? S.A.updateCreateGuildModal({ slide: L.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : S.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [p.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getChannel(h.Ay.getChannelId());
            return null == e || e.isManaged() || T._.dispatch(p.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [p.IWg.RETURN_TO_AUDIO_CHANNEL]: P.u,
    [p.IWg.CALL_ACCEPT]: l.Yo,
    [p.IWg.CALL_START]: l.OX,
    [p.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (f.A.hasLayers() || (0, N.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return T._.dispatch(p.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [p.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = O.A.getGuildId(),
                n = O.A.getChannelId();
            return null != n && (0, _.i)(t ?? p.ME, n), !1;
        },
    },
    [p.IWg.ZOOM_IN]: er.Ur,
    [p.IWg.ZOOM_OUT]: er.hU,
    [p.IWg.ZOOM_RESET]: er.O$,
    [p.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = I.A.getGuildId() ?? void 0;
            (0, y.transitionToGlobalDiscovery)({
                tab: G.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: D.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [p.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, m.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
        },
    },
    [p.IWg.OPEN_CONTEXT_MENU]: {
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
    [p.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = h.Ay.getChannelId();
            if (null == e) return !1;
            let t = u.A.getChannel(e);
            if (null == t) return !1;
            let n = u.A.getChannel(t.parent_id),
                i = (0, A.af)(t, n);
            return (0, E.C)(i, g), !1;
        },
    },
};
function eu() {
    return [
        {
            description: C.intl.string(C.t.bx4Uyz),
            binds: ed(p.IWg.SERVER_PREV, p.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t["+Wem6h"]),
            binds: ed(p.IWg.CHANNEL_PREV, p.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t["+2fcdz"]),
            binds: ed(p.IWg.NAVIGATE_BACK, p.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t.eVmj1H),
            binds: ed(p.IWg.UNREAD_PREV, p.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t.EcqS7Y),
            binds: ed(p.IWg.MENTION_CHANNEL_PREV, p.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: C.intl.string(C.t["4I3pwW"]), binds: ed(p.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: C.intl.string(C.t.Bqss72), binds: ed(p.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: C.intl.string(C.t.yYsRlD), binds: ed(p.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: C.intl.string(C.t.O7ouXO), binds: ed(p.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: C.intl.string(C.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: C.intl.string(C.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: C.intl.string(C.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: C.intl.string(C.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: C.intl.string(C.t.UaXAPx), binds: ed(p.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: C.intl.string(C.t["5X9vFj"]), binds: ed(p.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: C.intl.string(C.t.wxQFsl), binds: ed(p.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: C.intl.string(C.t["C+XV7f"]), binds: ed(p.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: C.intl.string(C.t["Q+YV/T"]), binds: ed(p.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: C.intl.string(C.t["YEjV+W"]), binds: ed(p.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: C.intl.string(C.t.AcBI9S), binds: ed(p.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: C.intl.string(C.t.JoxNnl), binds: ed(p.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: C.intl.string(C.t["3PHxo8"]), binds: ed(p.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: C.intl.string(C.t.YFl7eb), binds: ed(p.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: C.intl.string(C.t.L3RYYJ), binds: ed(p.IWg.SCROLL_UP, p.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: C.intl.string(C.t["3HAurM"]), binds: ed(p.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: C.intl.string(C.t.rrYBEu), binds: ed(p.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: C.intl.string(C.t.sUJlPL), binds: ed(p.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: C.intl.string(C.t["A+Fv0R"]), binds: ed(p.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: C.intl.string(C.t.tL6eVW), binds: ed(p.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t["QXe/7T"]), binds: ed(p.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.d6UIii), binds: ed(p.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.IcEW06), binds: ed(p.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.WN2dsS), binds: ed(p.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: C.intl.string(C.t.rUK0kk), binds: ed(p.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.vkGkSn), binds: ed(p.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: C.intl.string(C.t.FJvZ87), binds: ed(p.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: C.intl.string(C.t["FiWl/T"]), binds: ed(p.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: C.intl.string(C.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: C.intl.string(C.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: C.intl.string(C.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: C.intl.string(C.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: C.intl.string(C.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: C.intl.string(C.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: C.intl.string(C.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: C.intl.string(C.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: C.intl.string(C.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: C.intl.string(C.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: C.intl.string(C.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: C.intl.string(C.t.z9c6mt), binds: ed(p.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eh = 21552 == n.j ? ec : null;
