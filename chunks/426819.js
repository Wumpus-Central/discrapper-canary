n.d(t, { zR: () => em, Q_: () => ef, Ay: () => eg, Bx: () => eT, zF: () => eI, Gm: () => eh });
var i,
    r = n(300259),
    a = n(323073),
    s = n(288254),
    l = n(734057),
    o = n(309010),
    d = n(406704),
    c = n(747926),
    u = n(774603),
    _ = n(980372),
    E = n(435558),
    A = n.n(E),
    f = n(858899),
    h = n(147036),
    I = n(957565),
    p = n(792996);
let m = (0, E.throttle)(() => (0, f.P0)({ text: p.intl.string(p.t["+5kSoW"]), variant: "success" }), 3e3, {
    leading: !0,
    trailing: !1,
});
var T = n(265422),
    g = n(967198),
    S = n(188567),
    N = n(652215),
    C = n(192308),
    O = n(630685),
    R = n(272613),
    L = n(398884),
    y = n(819638),
    D = n(723702),
    b = n(186111),
    v = n(495867),
    P = n(64460),
    M = n(92960),
    U = n(795737),
    w = n(314519),
    G = n(837057),
    x = n(310419),
    k = n(488995),
    F = n(675704),
    B = n(74477),
    V = n(198620);
let H = (0, D.cX)() || (0, D.Sn)();
function j() {
    return (0, V.t)() && B.A.getConfig({ location: B.R }).enabled;
}
var W = n(806964),
    Y = n(552049),
    K = n(877991),
    $ = n(332779),
    X = n(274794),
    z = n(194482),
    q = n(251494),
    Q = n(82038),
    J = n(14214),
    Z = n(151199),
    ee = n(975571),
    et = n(552992),
    en = n(851109);
let ei = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: A().debounce(
        () => {
            if (S._.hasSubscribers(N.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (S._.dispatch(N.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
        },
        100,
        { leading: !0 },
    ),
};
var er = n(478437),
    ea = n(367513),
    es = n(604681),
    el = n(628983),
    eo = n(741534),
    ed = n(527212),
    ec = n(799704),
    eu = n(513291),
    e_ = n(674272),
    eE = n(431804),
    eA = n(406975),
    ef =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function eh(e) {
    switch (e) {
        case "NAVIGATION":
            return p.intl.string(p.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return p.intl.string(p.t.bI8F5u);
        case "CHAT":
            return p.intl.string(p.t.hDhbb3);
        case "MISCELLANEOUS":
            return p.intl.string(p.t.cBdwqs);
        case "MESSAGE":
            return p.intl.string(p.t["5fpmX9"]);
        case "DND":
            return p.intl.string(p.t["69j6+4"]);
    }
}
function eI(e) {
    switch (e) {
        case "MESSAGE":
            return p.intl.string(p.t.iepGDn);
        case "DND":
            return p.intl.string(p.t.LBsB0a);
        default:
            return;
    }
}
function ep() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = em[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let em = {
    [N.IWg.SERVER_NEXT]: z.yx,
    [N.IWg.SERVER_PREV]: z.yv,
    [N.IWg.CHANNEL_NEXT]: _.kF,
    [N.IWg.CHANNEL_PREV]: _.Oc,
    [N.IWg.NAVIGATE_BACK]: _.GY,
    [N.IWg.NAVIGATE_FORWARD]: _.M$,
    [N.IWg.UNREAD_NEXT]: eu.mH,
    [N.IWg.UNREAD_PREV]: eu.US,
    [N.IWg.MENTION_CHANNEL_NEXT]: eu.BD,
    [N.IWg.MENTION_CHANNEL_PREV]: eu.X8,
    [N.IWg.TOGGLE_PREVIOUS_GUILD]: _.Fv,
    [N.IWg.JUMP_TO_GUILD]: P.J,
    [N.IWg.SUBMIT]: q.X,
    [N.IWg.TEXTAREA_FOCUS]: Q.c,
    [N.IWg.MARK_CHANNEL_READ]: M.Df,
    [N.IWg.MARK_SERVER_READ]: U.P,
    [N.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (S._.dispatch(N.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [N.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(b.A.getLayers().length > 0 || (0, C.ue)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, en.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = l.A.getChannel(t);
                window.location.pathname.startsWith(N.BVt.CHANNEL(N.gNP)) && null != n
                    ? (0, T.i)(n.guild_id, t)
                    : (0, T.a)(N.BVt.CHANNEL(N.gNP, t ?? void 0));
            })(),
            S._.dispatch(N.jej.TOGGLE_INBOX),
            !1),
    },
    [N.IWg.MARK_TOP_INBOX_CHANNEL_READ]: ei,
    [N.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = g.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = l.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && el.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === er.r.GUILD_VOICE || i))
                return (ea.A.updateChatOpen(t, !el.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === er.r.DM) {
                let e = ec.Ay.getSection(t, n?.isDM()),
                    i = (0, ed.AP)(n.getRecipientId()),
                    r = e === N.YvQ.PROFILE;
                return (
                    (0, eo.am)({ displayProfile: i, isProfileOpen: !r }), es.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (es.A.toggleMembersSection(), !1);
        },
    },
    [N.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(ee.C), !1),
    },
    [N.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, e_.A)({ source: eE.y.KEYBIND }), !1),
    },
    [N.IWg.TOGGLE_MUTE]: J.VT,
    [N.IWg.TOGGLE_DEAFEN]: J.rR,
    [N.IWg.TOGGLE_CATEGORY_COLLAPSED]: Z.y,
    [N.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (S._.dispatch(N.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [N.IWg.SCROLL_UP]: Y.U5,
    [N.IWg.SCROLL_DOWN]: Y.fz,
    [N.IWg.QUICKSWITCHER_SHOW]: F.R,
    [N.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != g.A.getGuildId() && (0, T.i)(N.ME), S._.safeDispatch(N.jej.TOGGLE_DM_CREATE), !1),
    },
    [N.IWg.CREATE_THREAD]: {
        binds: ["mod+shift+alt+n"],
        comboKeysBindGlobal: !0,
        action() {
            let e,
                t = ((e = l.A.getChannel(o.Ay.getChannelId())), e?.isThread() === !0 ? l.A.getChannel(e.parent_id) : e);
            return (
                !(null == t || t.isForumLikeChannel() || (0, a.qR)(t) || (0, s.BV)(t)) &&
                (!!(0, d.D1)(t) || !!(0, d.vy)(t)) &&
                ((0, c.Tv)(t, void 0, "Keyboard Shortcut"), !1)
            );
        },
    },
    [N.IWg.OPEN_CHANNEL_TAB]: r.T3,
    [N.IWg.CLOSE_CHANNEL_TAB]: r.nK,
    [N.IWg.TOGGLE_CHANNEL_TAB_PIN]: r.P$,
    [N.IWg.SEARCH_EMOJIS]: K.L,
    [N.IWg.SEARCH_GIFS]: $.T,
    [N.IWg.SEARCH_STICKERS]: X.w,
    [N.IWg.TOGGLE_HOTKEYS]: et.z,
    [N.IWg.JUMP_TO_FIRST_UNREAD]: w.s,
    [N.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            if ((0, C.kB)(y.fc)) R.A.updateCreateGuildModal({ slide: y.oS.JOIN_GUILD, location: "Keyboard Shortcut" });
            else {
                let e = !(0, L.Sn)() && (0, O.i)("guild_list_add_server");
                R.A.openCreateGuildModal({ location: "Keyboard Shortcut", joinFirst: e });
            }
        },
    },
    [N.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = l.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || S._.dispatch(N.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [N.IWg.RECORD_VOICE_MESSAGE]: {
        binds: H ? ["ctrl+shift+d"] : ["alt+r"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (!(e.repeat || b.A.hasLayers() || (0, C.ue)()) && S._.hasSubscribers(N.jej.RECORD_VOICE_MESSAGE))
                return (S._.dispatchToLastSubscribed(N.jej.RECORD_VOICE_MESSAGE), !1);
        },
    },
    [N.IWg.RETURN_TO_AUDIO_CHANNEL]: W.u,
    [N.IWg.CALL_ACCEPT]: u.Yo,
    [N.IWg.CALL_START]: u.OX,
    [N.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (b.A.hasLayers() || (0, C.ue)()) return;
            let n = !t.includes("shift");
            return (S._.dispatch(N.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [N.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = v.A.getGuildId(),
                n = v.A.getChannelId();
            return (null != n && (0, T.i)(t ?? N.ME, n), !1);
        },
    },
    [N.IWg.ZOOM_IN]: eA.Ur,
    [N.IWg.ZOOM_OUT]: eA.hU,
    [N.IWg.ZOOM_RESET]: eA.O$,
    [N.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = g.A.getGuildId() ?? void 0;
            (0, G.transitionToGlobalDiscovery)({
                tab: k.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: x.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [N.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, D.HZ)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [N.IWg.OPEN_CONTEXT_MENU]: {
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
    [N.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.Ay.getChannelId();
            if (null == e) return !1;
            let t = l.A.getChannel(e);
            if (null == t) return !1;
            let n = l.A.getChannel(t.parent_id),
                i = (0, h.af)(t, n);
            return ((0, I.C)(i, m), !1);
        },
    },
};
function eT() {
    return [
        {
            description: p.intl.string(p.t.bx4Uyz),
            binds: ep(N.IWg.SERVER_PREV, N.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: p.intl.string(p.t["+Wem6h"]),
            binds: ep(N.IWg.CHANNEL_PREV, N.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: p.intl.string(p.t["+2fcdz"]),
            binds: ep(N.IWg.NAVIGATE_BACK, N.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: p.intl.string(p.t.eVmj1H),
            binds: ep(N.IWg.UNREAD_PREV, N.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: p.intl.string(p.t.EcqS7Y),
            binds: ep(N.IWg.MENTION_CHANNEL_PREV, N.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: p.intl.string(p.t["4I3pwW"]), binds: ep(N.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: p.intl.string(p.t.Bqss72), binds: ep(N.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: p.intl.string(p.t.yYsRlD), binds: ep(N.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: p.intl.string(p.t.O7ouXO), binds: ep(N.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: p.intl.string(p.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: p.intl.string(p.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: p.intl.string(p.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: p.intl.string(p.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: p.intl.string(p.t.UaXAPx), binds: ep(N.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: p.intl.string(p.t["5X9vFj"]), binds: ep(N.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: p.intl.string(p.t.wxQFsl), binds: ep(N.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: p.intl.string(p.t["ZxGD+G"]), binds: ep(N.IWg.CREATE_THREAD), group: "CHAT" },
        { description: p.intl.string(p.t["C+XV7f"]), binds: ep(N.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: p.intl.string(p.t["Q+YV/T"]), binds: ep(N.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: p.intl.string(p.t["YEjV+W"]), binds: ep(N.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: p.intl.string(p.t.AcBI9S), binds: ep(N.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: p.intl.string(p.t.JoxNnl), binds: ep(N.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: p.intl.string(p.t["3PHxo8"]), binds: ep(N.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: p.intl.string(p.t.YFl7eb), binds: ep(N.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: p.intl.string(p.t.L3RYYJ), binds: ep(N.IWg.SCROLL_UP, N.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: p.intl.string(p.t["3HAurM"]), binds: ep(N.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: p.intl.string(p.t.rrYBEu), binds: ep(N.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: p.intl.string(p.t.Wknt9M), binds: ep(N.IWg.RECORD_VOICE_MESSAGE), group: "CHAT", predicate: j },
        { description: p.intl.string(p.t.sUJlPL), binds: ep(N.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: p.intl.string(p.t["A+Fv0R"]), binds: ep(N.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: p.intl.string(p.t.tL6eVW), binds: ep(N.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: p.intl.string(p.t["QXe/7T"]), binds: ep(N.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: p.intl.string(p.t.d6UIii), binds: ep(N.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: p.intl.string(p.t.IcEW06), binds: ep(N.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: p.intl.string(p.t.WN2dsS), binds: ep(N.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: p.intl.string(p.t.rUK0kk), binds: ep(N.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: p.intl.string(p.t.vkGkSn), binds: ep(N.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: p.intl.string(p.t.FJvZ87), binds: ep(N.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: p.intl.string(p.t["FiWl/T"]), binds: ep(N.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: p.intl.string(p.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: p.intl.string(p.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: p.intl.string(p.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: p.intl.string(p.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: p.intl.string(p.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: p.intl.string(p.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: p.intl.string(p.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: p.intl.string(p.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: p.intl.string(p.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: p.intl.string(p.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: p.intl.string(p.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: p.intl.string(p.t.z9c6mt), binds: ep(N.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eg = em;
