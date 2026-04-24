n.d(t, { Bx: () => eu, Ay: () => eg, Gm: () => ea, Q_: () => eo, zF: () => ed, zR: () => e_ }), n(321073);
var i,
    r = n(966597),
    s = n(774603),
    l = n(176522),
    o = n(735438),
    a = n.n(o),
    d = n(691540),
    c = n(857250),
    _ = n(97483),
    u = n(734057),
    g = n(309010),
    h = n(147036),
    A = n(957565),
    p = n(985018);
let I = (0, o.throttle)(() => (0, d.P0)((0, c.o)(p.intl.string(p.t["+5kSoW"]), _.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var E = n(265422),
    b = n(967198),
    C = n(625494),
    S = n(652215),
    m = n(192308),
    f = n(272613),
    N = n(819638),
    T = n(723702),
    L = n(186111),
    O = n(763827),
    y = n(64460),
    G = n(92960),
    x = n(739008),
    R = n(314519),
    M = n(837057),
    v = n(310419),
    U = n(488995),
    D = n(675704),
    P = n(806964),
    j = n(552049),
    V = n(877991),
    B = n(332779),
    W = n(274794),
    w = n(928531),
    H = n(251494),
    F = n(82038),
    k = n(14214),
    K = n(151199),
    Y = n(975571),
    z = n(28647),
    X = n(851109);
let Q = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: a().debounce(
        () => {
            if (C._.hasSubscribers(S.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return C._.dispatch(S.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
        },
        100,
        { leading: !0 },
    ),
};
var J = n(478437),
    Z = n(367513),
    q = n(604681),
    $ = n(313961),
    ee = n(47675),
    et = n(999291),
    en = n(761640),
    ei = n(467691),
    er = n(674272),
    es = n(431804),
    el = n(406975),
    eo =
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
function ed(e) {
    switch (e) {
        case "MESSAGE":
            return p.intl.string(p.t.iepGDn);
        case "DND":
            return p.intl.string(p.t.LBsB0a);
        default:
            return;
    }
}
function ec() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = e_[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let e_ = {
    [S.IWg.SERVER_NEXT]: w.yx,
    [S.IWg.SERVER_PREV]: w.yv,
    [S.IWg.CHANNEL_NEXT]: l.kF,
    [S.IWg.CHANNEL_PREV]: l.Oc,
    [S.IWg.NAVIGATE_BACK]: l.GY,
    [S.IWg.NAVIGATE_FORWARD]: l.M$,
    [S.IWg.UNREAD_NEXT]: ei.mH,
    [S.IWg.UNREAD_PREV]: ei.US,
    [S.IWg.MENTION_CHANNEL_NEXT]: ei.BD,
    [S.IWg.MENTION_CHANNEL_PREV]: ei.X8,
    [S.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
    [S.IWg.JUMP_TO_GUILD]: y.J,
    [S.IWg.SUBMIT]: H.X,
    [S.IWg.TEXTAREA_FOCUS]: F.c,
    [S.IWg.MARK_CHANNEL_READ]: G.Df,
    [S.IWg.MARK_SERVER_READ]: x.P,
    [S.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (C._.dispatch(S.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [S.IWg.TOGGLE_FOR_LATER]: {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
            let { enabled: e, inInbox: t } = r.A.getConfig({ location: "keybinds" });
            if (e && !t) return C._.dispatch(S.jej.TOGGLE_FOR_LATER), !1;
        },
    },
    [S.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(L.A.getLayers().length > 0) &&
            ((() => {
                let { notificationCenterVariant: e } = (0, X.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = g.A.getChannelId(),
                    n = u.A.getChannel(t);
                return window.location.pathname.startsWith(S.BVt.CHANNEL(S.gNP)) && null != n
                    ? (0, E.i)(n.guild_id, t)
                    : (0, E.a)(S.BVt.CHANNEL(S.gNP, t ?? void 0));
            })(),
            C._.dispatch(S.jej.TOGGLE_INBOX),
            !1),
    },
    [S.IWg.MARK_TOP_INBOX_CHANNEL_READ]: Q,
    [S.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = b.A.getGuildId(),
                t = g.A.getChannelId(e),
                n = u.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && $.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === J.r.GUILD_VOICE || i))
                return Z.A.updateChatOpen(t, !$.A.getChatOpen(t), "toggle users keybind"), !1;
            if (null != t && null != n && n.type === J.r.DM) {
                let e = en.Ay.getSection(t, n?.isDM()),
                    i = (0, et.AP)(n.getRecipientId()),
                    r = e === S.YvQ.PROFILE;
                return (0, ee.am)({ displayProfile: i, isProfileOpen: !r }), q.A.toggleUserProfileSidebarSection(), !1;
            }
            return q.A.toggleMembersSection(), !1;
        },
    },
    [S.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(Y.C), !1),
    },
    [S.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, er.A)({ source: es.y.KEYBIND, onClose: m.closeAllModals }), !1),
    },
    [S.IWg.TOGGLE_MUTE]: k.VT,
    [S.IWg.TOGGLE_DEAFEN]: k.rR,
    [S.IWg.TOGGLE_CATEGORY_COLLAPSED]: K.y,
    [S.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (C._.dispatch(S.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [S.IWg.SCROLL_UP]: j.U5,
    [S.IWg.SCROLL_DOWN]: j.fz,
    [S.IWg.QUICKSWITCHER_SHOW]: D.R,
    [S.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != b.A.getGuildId() && (0, E.i)(S.ME), C._.safeDispatch(S.jej.TOGGLE_DM_CREATE), !1),
    },
    [S.IWg.SEARCH_EMOJIS]: V.L,
    [S.IWg.SEARCH_GIFS]: B.T,
    [S.IWg.SEARCH_STICKERS]: W.w,
    [S.IWg.TOGGLE_HOTKEYS]: z.z,
    [S.IWg.JUMP_TO_FIRST_UNREAD]: R.s,
    [S.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, m.hasModalOpen)(N.fc)
                ? f.A.updateCreateGuildModal({ slide: N.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : f.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [S.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getChannel(g.A.getChannelId());
            return null == e || e.isManaged() || C._.dispatch(S.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [S.IWg.RETURN_TO_AUDIO_CHANNEL]: P.u,
    [S.IWg.CALL_ACCEPT]: s.Yo,
    [S.IWg.CALL_START]: s.OX,
    [S.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (L.A.hasLayers() || (0, m.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return C._.dispatch(S.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [S.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = O.A.getGuildId(),
                n = O.A.getChannelId();
            return null != n && (0, E.i)(t ?? S.ME, n), !1;
        },
    },
    [S.IWg.ZOOM_IN]: el.Ur,
    [S.IWg.ZOOM_OUT]: el.hU,
    [S.IWg.ZOOM_RESET]: el.O$,
    [S.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = b.A.getGuildId() ?? void 0;
            (0, M.transitionToGlobalDiscovery)({
                tab: U.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: v.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [S.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, T.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
        },
    },
    [S.IWg.OPEN_CONTEXT_MENU]: {
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
    [S.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = g.A.getChannelId();
            if (null == e) return !1;
            let t = u.A.getChannel(e);
            if (null == t) return !1;
            let n = u.A.getChannel(t.parent_id),
                i = (0, h.af)(t, n);
            return (0, A.C)(i, I), !1;
        },
    },
};
function eu() {
    let e = [
            {
                description: p.intl.string(p.t.bx4Uyz),
                binds: ec(S.IWg.SERVER_PREV, S.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t["+Wem6h"]),
                binds: ec(S.IWg.CHANNEL_PREV, S.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t["+2fcdz"]),
                binds: ec(S.IWg.NAVIGATE_BACK, S.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t.eVmj1H),
                binds: ec(S.IWg.UNREAD_PREV, S.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t.EcqS7Y),
                binds: ec(S.IWg.MENTION_CHANNEL_PREV, S.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: p.intl.string(p.t["4I3pwW"]), binds: ec(S.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: p.intl.string(p.t.Bqss72), binds: ec(S.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: p.intl.string(p.t.yYsRlD), binds: ec(S.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            {
                description: p.intl.string(p.t.O7ouXO),
                binds: ec(S.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            { description: p.intl.string(p.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: p.intl.string(p.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: p.intl.string(p.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: p.intl.string(p.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: p.intl.string(p.t.UaXAPx), binds: ec(S.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: p.intl.string(p.t["5X9vFj"]), binds: ec(S.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: p.intl.string(p.t.wxQFsl), binds: ec(S.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: p.intl.string(p.t["C+XV7f"]), binds: ec(S.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: p.intl.string(p.t["Q+YV/T"]), binds: ec(S.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: p.intl.string(p.t["YEjV+W"]), binds: ec(S.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: p.intl.string(p.t.AcBI9S), binds: ec(S.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: p.intl.string(p.t.JoxNnl), binds: ec(S.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: p.intl.string(p.t["3PHxo8"]), binds: ec(S.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: p.intl.string(p.t.YFl7eb), binds: ec(S.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: p.intl.string(p.t.L3RYYJ), binds: ec(S.IWg.SCROLL_UP, S.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: p.intl.string(p.t["3HAurM"]), binds: ec(S.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: p.intl.string(p.t.rrYBEu), binds: ec(S.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: p.intl.string(p.t.sUJlPL), binds: ec(S.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: p.intl.string(p.t["A+Fv0R"]),
                binds: ec(S.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: p.intl.string(p.t.tL6eVW), binds: ec(S.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t["QXe/7T"]), binds: ec(S.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t.d6UIii), binds: ec(S.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t.IcEW06), binds: ec(S.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: p.intl.string(p.t.WN2dsS),
                binds: ec(S.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: p.intl.string(p.t.rUK0kk), binds: ec(S.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t.vkGkSn), binds: ec(S.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: p.intl.string(p.t.FJvZ87), binds: ec(S.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: p.intl.string(p.t["FiWl/T"]), binds: ec(S.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
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
            { description: p.intl.string(p.t.z9c6mt), binds: ec(S.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = r.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: p.intl.string(p.t.IWNSoH), binds: ec(S.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let eg = 21552 == n.j ? e_ : null;
