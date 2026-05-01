n.d(t, { Bx: () => eh, Ay: () => eg, Gm: () => eo, Q_: () => ea, zF: () => ed, zR: () => eu }), n(321073);
var i,
    l = n(966597),
    s = n(774603),
    r = n(176522),
    a = n(735438),
    o = n.n(a),
    d = n(691540),
    c = n(857250),
    u = n(97483),
    h = n(734057),
    g = n(309010),
    A = n(147036),
    E = n(957565),
    p = n(985018);
let I = (0, a.throttle)(() => (0, d.P0)((0, c.o)(p.intl.string(p.t["+5kSoW"]), u.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var C = n(265422),
    m = n(967198),
    _ = n(625494),
    b = n(652215),
    N = n(192308),
    v = n(272613),
    f = n(819638),
    T = n(723702),
    S = n(186111),
    O = n(763827),
    L = n(64460),
    R = n(92960),
    M = n(739008),
    y = n(314519),
    G = n(837057),
    x = n(310419),
    w = n(488995),
    j = n(675704),
    V = n(806964),
    D = n(552049),
    P = n(877991),
    U = n(332779),
    H = n(274794),
    W = n(928531),
    B = n(251494),
    F = n(82038),
    K = n(14214),
    k = n(151199),
    Z = n(975571),
    Y = n(28647),
    X = n(851109);
let z = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: o().debounce(
        () => {
            if (_._.hasSubscribers(b.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return _._.dispatch(b.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
        },
        100,
        { leading: !0 },
    ),
};
var J = n(478437),
    Q = n(367513),
    q = n(604681),
    $ = n(313961),
    ee = n(47675),
    et = n(999291),
    en = n(761640),
    ei = n(467691),
    el = n(674272),
    es = n(431804),
    er = n(406975),
    ea =
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
        let t = eu[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eu = {
    [b.IWg.SERVER_NEXT]: W.yx,
    [b.IWg.SERVER_PREV]: W.yv,
    [b.IWg.CHANNEL_NEXT]: r.kF,
    [b.IWg.CHANNEL_PREV]: r.Oc,
    [b.IWg.NAVIGATE_BACK]: r.GY,
    [b.IWg.NAVIGATE_FORWARD]: r.M$,
    [b.IWg.UNREAD_NEXT]: ei.mH,
    [b.IWg.UNREAD_PREV]: ei.US,
    [b.IWg.MENTION_CHANNEL_NEXT]: ei.BD,
    [b.IWg.MENTION_CHANNEL_PREV]: ei.X8,
    [b.IWg.TOGGLE_PREVIOUS_GUILD]: r.Fv,
    [b.IWg.JUMP_TO_GUILD]: L.J,
    [b.IWg.SUBMIT]: B.X,
    [b.IWg.TEXTAREA_FOCUS]: F.c,
    [b.IWg.MARK_CHANNEL_READ]: R.Df,
    [b.IWg.MARK_SERVER_READ]: M.P,
    [b.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (_._.dispatch(b.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [b.IWg.TOGGLE_FOR_LATER]: {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
            let { enabled: e, inInbox: t } = l.A.getConfig({ location: "keybinds" });
            if (e && !t) return _._.dispatch(b.jej.TOGGLE_FOR_LATER), !1;
        },
    },
    [b.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(S.A.getLayers().length > 0) &&
            ((() => {
                let { notificationCenterVariant: e } = (0, X.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = g.A.getChannelId(),
                    n = h.A.getChannel(t);
                return window.location.pathname.startsWith(b.BVt.CHANNEL(b.gNP)) && null != n
                    ? (0, C.i)(n.guild_id, t)
                    : (0, C.a)(b.BVt.CHANNEL(b.gNP, t ?? void 0));
            })(),
            _._.dispatch(b.jej.TOGGLE_INBOX),
            !1),
    },
    [b.IWg.MARK_TOP_INBOX_CHANNEL_READ]: z,
    [b.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = m.A.getGuildId(),
                t = g.A.getChannelId(e),
                n = h.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && $.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === J.r.GUILD_VOICE || i))
                return Q.A.updateChatOpen(t, !$.A.getChatOpen(t), "toggle users keybind"), !1;
            if (null != t && null != n && n.type === J.r.DM) {
                let e = en.Ay.getSection(t, n?.isDM()),
                    i = (0, et.AP)(n.getRecipientId()),
                    l = e === b.YvQ.PROFILE;
                return (0, ee.am)({ displayProfile: i, isProfileOpen: !l }), q.A.toggleUserProfileSidebarSection(), !1;
            }
            return q.A.toggleMembersSection(), !1;
        },
    },
    [b.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(Z.C), !1),
    },
    [b.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, el.A)({ source: es.y.KEYBIND, onClose: N.closeAllModals }), !1),
    },
    [b.IWg.TOGGLE_MUTE]: K.VT,
    [b.IWg.TOGGLE_DEAFEN]: K.rR,
    [b.IWg.TOGGLE_CATEGORY_COLLAPSED]: k.y,
    [b.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (_._.dispatch(b.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [b.IWg.SCROLL_UP]: D.U5,
    [b.IWg.SCROLL_DOWN]: D.fz,
    [b.IWg.QUICKSWITCHER_SHOW]: j.R,
    [b.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != m.A.getGuildId() && (0, C.i)(b.ME), _._.safeDispatch(b.jej.TOGGLE_DM_CREATE), !1),
    },
    [b.IWg.SEARCH_EMOJIS]: P.L,
    [b.IWg.SEARCH_GIFS]: U.T,
    [b.IWg.SEARCH_STICKERS]: H.w,
    [b.IWg.TOGGLE_HOTKEYS]: Y.z,
    [b.IWg.JUMP_TO_FIRST_UNREAD]: y.s,
    [b.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, N.hasModalOpen)(f.fc)
                ? v.A.updateCreateGuildModal({ slide: f.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : v.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [b.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = h.A.getChannel(g.A.getChannelId());
            return null == e || e.isManaged() || _._.dispatch(b.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [b.IWg.RETURN_TO_AUDIO_CHANNEL]: V.u,
    [b.IWg.CALL_ACCEPT]: s.Yo,
    [b.IWg.CALL_START]: s.OX,
    [b.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (S.A.hasLayers() || (0, N.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return _._.dispatch(b.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [b.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = O.A.getGuildId(),
                n = O.A.getChannelId();
            return null != n && (0, C.i)(t ?? b.ME, n), !1;
        },
    },
    [b.IWg.ZOOM_IN]: er.Ur,
    [b.IWg.ZOOM_OUT]: er.hU,
    [b.IWg.ZOOM_RESET]: er.O$,
    [b.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = m.A.getGuildId() ?? void 0;
            (0, G.transitionToGlobalDiscovery)({
                tab: w.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: x.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [b.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, T.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
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
            let e = g.A.getChannelId();
            if (null == e) return !1;
            let t = h.A.getChannel(e);
            if (null == t) return !1;
            let n = h.A.getChannel(t.parent_id),
                i = (0, A.af)(t, n);
            return (0, E.C)(i, I), !1;
        },
    },
};
function eh() {
    let e = [
            {
                description: p.intl.string(p.t.bx4Uyz),
                binds: ec(b.IWg.SERVER_PREV, b.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t["+Wem6h"]),
                binds: ec(b.IWg.CHANNEL_PREV, b.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t["+2fcdz"]),
                binds: ec(b.IWg.NAVIGATE_BACK, b.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t.eVmj1H),
                binds: ec(b.IWg.UNREAD_PREV, b.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: p.intl.string(p.t.EcqS7Y),
                binds: ec(b.IWg.MENTION_CHANNEL_PREV, b.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: p.intl.string(p.t["4I3pwW"]), binds: ec(b.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: p.intl.string(p.t.Bqss72), binds: ec(b.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: p.intl.string(p.t.yYsRlD), binds: ec(b.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            {
                description: p.intl.string(p.t.O7ouXO),
                binds: ec(b.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            { description: p.intl.string(p.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: p.intl.string(p.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: p.intl.string(p.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: p.intl.string(p.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: p.intl.string(p.t.UaXAPx), binds: ec(b.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: p.intl.string(p.t["5X9vFj"]), binds: ec(b.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: p.intl.string(p.t.wxQFsl), binds: ec(b.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: p.intl.string(p.t["C+XV7f"]), binds: ec(b.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: p.intl.string(p.t["Q+YV/T"]), binds: ec(b.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: p.intl.string(p.t["YEjV+W"]), binds: ec(b.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: p.intl.string(p.t.AcBI9S), binds: ec(b.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: p.intl.string(p.t.JoxNnl), binds: ec(b.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: p.intl.string(p.t["3PHxo8"]), binds: ec(b.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: p.intl.string(p.t.YFl7eb), binds: ec(b.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: p.intl.string(p.t.L3RYYJ), binds: ec(b.IWg.SCROLL_UP, b.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: p.intl.string(p.t["3HAurM"]), binds: ec(b.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: p.intl.string(p.t.rrYBEu), binds: ec(b.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: p.intl.string(p.t.sUJlPL), binds: ec(b.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: p.intl.string(p.t["A+Fv0R"]),
                binds: ec(b.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: p.intl.string(p.t.tL6eVW), binds: ec(b.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t["QXe/7T"]), binds: ec(b.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t.d6UIii), binds: ec(b.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t.IcEW06), binds: ec(b.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: p.intl.string(p.t.WN2dsS),
                binds: ec(b.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: p.intl.string(p.t.rUK0kk), binds: ec(b.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: p.intl.string(p.t.vkGkSn), binds: ec(b.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: p.intl.string(p.t.FJvZ87), binds: ec(b.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: p.intl.string(p.t["FiWl/T"]), binds: ec(b.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
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
            { description: p.intl.string(p.t.z9c6mt), binds: ec(b.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = l.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: p.intl.string(p.t.IWNSoH), binds: ec(b.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let eg = 21552 == n.j ? eu : null;
