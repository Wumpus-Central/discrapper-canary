n.d(t, { Bx: () => e_, Ay: () => eu, Gm: () => eo, Q_: () => el, zF: () => ea, zR: () => ec }), n(321073);
var i,
    r = n(966597),
    s = n(774603),
    l = n(176522),
    o = n(691540),
    a = n(857250),
    d = n(97483),
    c = n(734057),
    _ = n(309010),
    u = n(147036),
    g = n(957565),
    h = n(985018),
    A = n(265422),
    p = n(967198),
    I = n(625494),
    E = n(652215),
    b = n(192308),
    C = n(272613),
    S = n(819638),
    m = n(723702),
    f = n(186111),
    N = n(763827),
    T = n(64460),
    L = n(92960),
    O = n(739008),
    y = n(314519),
    G = n(837057),
    x = n(310419),
    R = n(488995),
    M = n(675704),
    v = n(806964),
    U = n(552049),
    D = n(877991),
    P = n(332779),
    j = n(274794),
    V = n(928531),
    B = n(251494),
    W = n(82038),
    w = n(14214),
    H = n(151199),
    F = n(975571),
    k = n(28647),
    K = n(735438),
    Y = n.n(K),
    z = n(851109);
let X = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: Y().debounce(
        () => {
            if (I._.hasSubscribers(E.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return I._.dispatch(E.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
        },
        100,
        { leading: !0 },
    ),
};
var Q = n(478437),
    J = n(367513),
    Z = n(604681),
    q = n(313961),
    $ = n(47675),
    ee = n(999291),
    et = n(761640),
    en = n(467691),
    ei = n(674272),
    er = n(431804),
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
function ea(e) {
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
    [E.IWg.SERVER_NEXT]: V.yx,
    [E.IWg.SERVER_PREV]: V.yv,
    [E.IWg.CHANNEL_NEXT]: l.kF,
    [E.IWg.CHANNEL_PREV]: l.Oc,
    [E.IWg.NAVIGATE_BACK]: l.GY,
    [E.IWg.NAVIGATE_FORWARD]: l.M$,
    [E.IWg.UNREAD_NEXT]: en.mH,
    [E.IWg.UNREAD_PREV]: en.US,
    [E.IWg.MENTION_CHANNEL_NEXT]: en.BD,
    [E.IWg.MENTION_CHANNEL_PREV]: en.X8,
    [E.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
    [E.IWg.JUMP_TO_GUILD]: T.J,
    [E.IWg.SUBMIT]: B.X,
    [E.IWg.TEXTAREA_FOCUS]: W.c,
    [E.IWg.MARK_CHANNEL_READ]: L.Df,
    [E.IWg.MARK_SERVER_READ]: O.P,
    [E.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (I._.dispatch(E.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [E.IWg.TOGGLE_FOR_LATER]: {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
            let { enabled: e, inInbox: t } = r.A.getConfig({ location: "keybinds" });
            if (e && !t) return I._.dispatch(E.jej.TOGGLE_FOR_LATER), !1;
        },
    },
    [E.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(f.A.getLayers().length > 0) &&
            ((() => {
                let { notificationCenterVariant: e } = (0, z.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = _.A.getChannelId(),
                    n = c.A.getChannel(t);
                return window.location.pathname.startsWith(E.BVt.CHANNEL(E.gNP)) && null != n
                    ? (0, A.i)(n.guild_id, t)
                    : (0, A.a)(E.BVt.CHANNEL(E.gNP, t ?? void 0));
            })(),
            I._.dispatch(E.jej.TOGGLE_INBOX),
            !1),
    },
    [E.IWg.MARK_TOP_INBOX_CHANNEL_READ]: X,
    [E.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = p.A.getGuildId(),
                t = _.A.getChannelId(e),
                n = c.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && q.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === Q.r.GUILD_VOICE || i))
                return J.A.updateChatOpen(t, !q.A.getChatOpen(t), "toggle users keybind"), !1;
            if (null != t && null != n && n.type === Q.r.DM) {
                let e = et.Ay.getSection(t, n?.isDM()),
                    i = (0, ee.AP)(n.getRecipientId()),
                    r = e === E.YvQ.PROFILE;
                return (0, $.am)({ displayProfile: i, isProfileOpen: !r }), Z.A.toggleUserProfileSidebarSection(), !1;
            }
            return Z.A.toggleMembersSection(), !1;
        },
    },
    [E.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(F.C), !1),
    },
    [E.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, ei.A)({ source: er.y.KEYBIND, onClose: b.closeAllModals }), !1),
    },
    [E.IWg.TOGGLE_MUTE]: w.VT,
    [E.IWg.TOGGLE_DEAFEN]: w.rR,
    [E.IWg.TOGGLE_CATEGORY_COLLAPSED]: H.y,
    [E.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (I._.dispatch(E.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [E.IWg.SCROLL_UP]: U.U5,
    [E.IWg.SCROLL_DOWN]: U.fz,
    [E.IWg.QUICKSWITCHER_SHOW]: M.R,
    [E.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != p.A.getGuildId() && (0, A.i)(E.ME), I._.safeDispatch(E.jej.TOGGLE_DM_CREATE), !1),
    },
    [E.IWg.SEARCH_EMOJIS]: D.L,
    [E.IWg.SEARCH_GIFS]: P.T,
    [E.IWg.SEARCH_STICKERS]: j.w,
    [E.IWg.TOGGLE_HOTKEYS]: k.z,
    [E.IWg.JUMP_TO_FIRST_UNREAD]: y.s,
    [E.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, b.hasModalOpen)(S.fc)
                ? C.A.updateCreateGuildModal({ slide: S.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : C.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [E.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = c.A.getChannel(_.A.getChannelId());
            return null == e || e.isManaged() || I._.dispatch(E.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [E.IWg.RETURN_TO_AUDIO_CHANNEL]: v.u,
    [E.IWg.CALL_ACCEPT]: s.Yo,
    [E.IWg.CALL_START]: s.OX,
    [E.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (f.A.hasLayers() || (0, b.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return I._.dispatch(E.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [E.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = N.A.getGuildId(),
                n = N.A.getChannelId();
            return null != n && (0, A.i)(t ?? E.ME, n), !1;
        },
    },
    [E.IWg.ZOOM_IN]: es.Ur,
    [E.IWg.ZOOM_OUT]: es.hU,
    [E.IWg.ZOOM_RESET]: es.O$,
    [E.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = p.A.getGuildId() ?? void 0;
            (0, G.transitionToGlobalDiscovery)({
                tab: R.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: x.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [E.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, m.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
        },
    },
    [E.IWg.OPEN_CONTEXT_MENU]: {
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
    [E.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = _.A.getChannelId();
            if (null == e) return !1;
            let t = c.A.getChannel(e);
            if (null == t) return !1;
            let n = c.A.getChannel(t.parent_id),
                i = (0, u.af)(t, n);
            return (0, g.C)(i, () => (0, o.P0)((0, a.o)(h.intl.string(h.t["+5kSoW"]), d.Ck.SUCCESS))), !1;
        },
    },
};
function e_() {
    let e = [
            {
                description: h.intl.string(h.t.bx4Uyz),
                binds: ed(E.IWg.SERVER_PREV, E.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: h.intl.string(h.t["+Wem6h"]),
                binds: ed(E.IWg.CHANNEL_PREV, E.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: h.intl.string(h.t["+2fcdz"]),
                binds: ed(E.IWg.NAVIGATE_BACK, E.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: h.intl.string(h.t.eVmj1H),
                binds: ed(E.IWg.UNREAD_PREV, E.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: h.intl.string(h.t.EcqS7Y),
                binds: ed(E.IWg.MENTION_CHANNEL_PREV, E.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: h.intl.string(h.t["4I3pwW"]), binds: ed(E.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: h.intl.string(h.t.Bqss72), binds: ed(E.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: h.intl.string(h.t.yYsRlD), binds: ed(E.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            {
                description: h.intl.string(h.t.O7ouXO),
                binds: ed(E.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            { description: h.intl.string(h.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: h.intl.string(h.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: h.intl.string(h.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: h.intl.string(h.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: h.intl.string(h.t.UaXAPx), binds: ed(E.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: h.intl.string(h.t["5X9vFj"]), binds: ed(E.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: h.intl.string(h.t.wxQFsl), binds: ed(E.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: h.intl.string(h.t["C+XV7f"]), binds: ed(E.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: h.intl.string(h.t["Q+YV/T"]), binds: ed(E.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: h.intl.string(h.t["YEjV+W"]), binds: ed(E.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: h.intl.string(h.t.AcBI9S), binds: ed(E.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: h.intl.string(h.t.JoxNnl), binds: ed(E.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: h.intl.string(h.t["3PHxo8"]), binds: ed(E.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: h.intl.string(h.t.YFl7eb), binds: ed(E.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: h.intl.string(h.t.L3RYYJ), binds: ed(E.IWg.SCROLL_UP, E.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: h.intl.string(h.t["3HAurM"]), binds: ed(E.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: h.intl.string(h.t.rrYBEu), binds: ed(E.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: h.intl.string(h.t.sUJlPL), binds: ed(E.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: h.intl.string(h.t["A+Fv0R"]),
                binds: ed(E.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: h.intl.string(h.t.tL6eVW), binds: ed(E.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: h.intl.string(h.t["QXe/7T"]), binds: ed(E.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: h.intl.string(h.t.d6UIii), binds: ed(E.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: h.intl.string(h.t.IcEW06), binds: ed(E.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: h.intl.string(h.t.WN2dsS),
                binds: ed(E.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: h.intl.string(h.t.rUK0kk), binds: ed(E.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: h.intl.string(h.t.vkGkSn), binds: ed(E.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: h.intl.string(h.t.FJvZ87), binds: ed(E.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: h.intl.string(h.t["FiWl/T"]), binds: ed(E.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
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
            { description: h.intl.string(h.t.z9c6mt), binds: ed(E.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = r.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: h.intl.string(h.t.IWNSoH), binds: ed(E.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let eu = 21552 == n.j ? ec : null;
