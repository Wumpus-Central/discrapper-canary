n.d(t, { Bx: () => eA, Ay: () => eE, Gm: () => eo, Q_: () => ea, zF: () => ed, zR: () => eu }), n(321073);
var i,
    l = n(966597),
    r = n(774603),
    s = n(176522),
    a = n(735438),
    o = n.n(a),
    d = n(691540),
    c = n(857250),
    u = n(97483),
    A = n(734057),
    E = n(309010),
    h = n(871237),
    C = n(957565),
    g = n(375708);
let _ = (0, a.throttle)(() => (0, d.P0)((0, c.o)(g.intl.string(g.t["+5kSoW"]), u.Ck.SUCCESS)), 3e3, {
    leading: !0,
    trailing: !1,
});
var I = n(265422),
    T = n(967198),
    N = n(625494),
    p = n(652215),
    S = n(192308),
    L = n(272613),
    m = n(819638),
    O = n(723702),
    f = n(186111),
    b = n(763827),
    R = n(64460),
    v = n(92960),
    U = n(739008),
    D = n(314519),
    G = n(837057),
    M = n(310419),
    y = n(488995),
    P = n(675704),
    x = n(806964),
    V = n(552049),
    j = n(877991),
    w = n(332779),
    H = n(274794),
    F = n(928531),
    B = n(251494),
    k = n(82038),
    W = n(14214),
    K = n(151199),
    Y = n(975571),
    Z = n(28647),
    z = n(851109);
let X = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: o().debounce(
        () => {
            if (N._.hasSubscribers(p.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return N._.dispatch(p.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
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
    er = n(431804),
    es = n(406975),
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
            return g.intl.string(g.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return g.intl.string(g.t.bI8F5u);
        case "CHAT":
            return g.intl.string(g.t.hDhbb3);
        case "MISCELLANEOUS":
            return g.intl.string(g.t.cBdwqs);
        case "MESSAGE":
            return g.intl.string(g.t["5fpmX9"]);
        case "DND":
            return g.intl.string(g.t["69j6+4"]);
    }
}
function ed(e) {
    switch (e) {
        case "MESSAGE":
            return g.intl.string(g.t.iepGDn);
        case "DND":
            return g.intl.string(g.t.LBsB0a);
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
    [p.IWg.SERVER_NEXT]: F.yx,
    [p.IWg.SERVER_PREV]: F.yv,
    [p.IWg.CHANNEL_NEXT]: s.kF,
    [p.IWg.CHANNEL_PREV]: s.Oc,
    [p.IWg.NAVIGATE_BACK]: s.GY,
    [p.IWg.NAVIGATE_FORWARD]: s.M$,
    [p.IWg.UNREAD_NEXT]: ei.mH,
    [p.IWg.UNREAD_PREV]: ei.US,
    [p.IWg.MENTION_CHANNEL_NEXT]: ei.BD,
    [p.IWg.MENTION_CHANNEL_PREV]: ei.X8,
    [p.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [p.IWg.JUMP_TO_GUILD]: R.J,
    [p.IWg.SUBMIT]: B.X,
    [p.IWg.TEXTAREA_FOCUS]: k.c,
    [p.IWg.MARK_CHANNEL_READ]: v.Df,
    [p.IWg.MARK_SERVER_READ]: U.P,
    [p.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (N._.dispatch(p.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [p.IWg.TOGGLE_FOR_LATER]: {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
            let { enabled: e, inInbox: t } = l.A.getConfig({ location: "keybinds" });
            if (e && !t) return N._.dispatch(p.jej.TOGGLE_FOR_LATER), !1;
        },
    },
    [p.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(f.A.getLayers().length > 0 || (0, S.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, z.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = E.A.getChannelId(),
                    n = A.A.getChannel(t);
                window.location.pathname.startsWith(p.BVt.CHANNEL(p.gNP)) && null != n
                    ? (0, I.i)(n.guild_id, t)
                    : (0, I.a)(p.BVt.CHANNEL(p.gNP, t ?? void 0));
            })(),
            N._.dispatch(p.jej.TOGGLE_INBOX),
            !1),
    },
    [p.IWg.MARK_TOP_INBOX_CHANNEL_READ]: X,
    [p.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = T.A.getGuildId(),
                t = E.A.getChannelId(e),
                n = A.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && $.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === J.r.GUILD_VOICE || i))
                return Q.A.updateChatOpen(t, !$.A.getChatOpen(t)), !1;
            if (null != t && null != n && n.type === J.r.DM) {
                let e = en.Ay.getSection(t, n?.isDM()),
                    i = (0, et.AP)(n.getRecipientId()),
                    l = e === p.YvQ.PROFILE;
                return (0, ee.am)({ displayProfile: i, isProfileOpen: !l }), q.A.toggleUserProfileSidebarSection(), !1;
            }
            return q.A.toggleMembersSection(), !1;
        },
    },
    [p.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(Y.C), !1),
    },
    [p.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, el.A)({ source: er.y.KEYBIND }), !1),
    },
    [p.IWg.TOGGLE_MUTE]: W.VT,
    [p.IWg.TOGGLE_DEAFEN]: W.rR,
    [p.IWg.TOGGLE_CATEGORY_COLLAPSED]: K.y,
    [p.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (N._.dispatch(p.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [p.IWg.SCROLL_UP]: V.U5,
    [p.IWg.SCROLL_DOWN]: V.fz,
    [p.IWg.QUICKSWITCHER_SHOW]: P.R,
    [p.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != T.A.getGuildId() && (0, I.i)(p.ME), N._.safeDispatch(p.jej.TOGGLE_DM_CREATE), !1),
    },
    [p.IWg.SEARCH_EMOJIS]: j.L,
    [p.IWg.SEARCH_GIFS]: w.T,
    [p.IWg.SEARCH_STICKERS]: H.w,
    [p.IWg.TOGGLE_HOTKEYS]: Z.z,
    [p.IWg.JUMP_TO_FIRST_UNREAD]: D.s,
    [p.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, S.hasModalOpen)(m.fc)
                ? L.A.updateCreateGuildModal({ slide: m.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : L.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [p.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = A.A.getChannel(E.A.getChannelId());
            return null == e || e.isManaged() || N._.dispatch(p.jej.UPLOAD_FILE, { channelId: e.id }), !1;
        },
    },
    [p.IWg.RETURN_TO_AUDIO_CHANNEL]: x.u,
    [p.IWg.CALL_ACCEPT]: r.Yo,
    [p.IWg.CALL_START]: r.OX,
    [p.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (f.A.hasLayers() || (0, S.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return N._.dispatch(p.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1;
        },
    },
    [p.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = b.A.getGuildId(),
                n = b.A.getChannelId();
            return null != n && (0, I.i)(t ?? p.ME, n), !1;
        },
    },
    [p.IWg.ZOOM_IN]: es.Ur,
    [p.IWg.ZOOM_OUT]: es.hU,
    [p.IWg.ZOOM_RESET]: es.O$,
    [p.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = T.A.getGuildId() ?? void 0;
            (0, G.transitionToGlobalDiscovery)({
                tab: y.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: M.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [p.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, O.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1;
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
            let e = E.A.getChannelId();
            if (null == e) return !1;
            let t = A.A.getChannel(e);
            if (null == t) return !1;
            let n = A.A.getChannel(t.parent_id),
                i = (0, h.af)(t, n);
            return (0, C.C)(i, _), !1;
        },
    },
};
function eA() {
    let e = [
            {
                description: g.intl.string(g.t.bx4Uyz),
                binds: ec(p.IWg.SERVER_PREV, p.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: g.intl.string(g.t["+Wem6h"]),
                binds: ec(p.IWg.CHANNEL_PREV, p.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: g.intl.string(g.t["+2fcdz"]),
                binds: ec(p.IWg.NAVIGATE_BACK, p.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: g.intl.string(g.t.eVmj1H),
                binds: ec(p.IWg.UNREAD_PREV, p.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: g.intl.string(g.t.EcqS7Y),
                binds: ec(p.IWg.MENTION_CHANNEL_PREV, p.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: g.intl.string(g.t["4I3pwW"]), binds: ec(p.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: g.intl.string(g.t.Bqss72), binds: ec(p.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: g.intl.string(g.t.yYsRlD), binds: ec(p.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            {
                description: g.intl.string(g.t.O7ouXO),
                binds: ec(p.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            { description: g.intl.string(g.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: g.intl.string(g.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: g.intl.string(g.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: g.intl.string(g.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: g.intl.string(g.t.UaXAPx), binds: ec(p.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: g.intl.string(g.t["5X9vFj"]), binds: ec(p.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: g.intl.string(g.t.wxQFsl), binds: ec(p.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: g.intl.string(g.t["C+XV7f"]), binds: ec(p.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: g.intl.string(g.t["Q+YV/T"]), binds: ec(p.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: g.intl.string(g.t["YEjV+W"]), binds: ec(p.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: g.intl.string(g.t.AcBI9S), binds: ec(p.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: g.intl.string(g.t.JoxNnl), binds: ec(p.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: g.intl.string(g.t["3PHxo8"]), binds: ec(p.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: g.intl.string(g.t.YFl7eb), binds: ec(p.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: g.intl.string(g.t.L3RYYJ), binds: ec(p.IWg.SCROLL_UP, p.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: g.intl.string(g.t["3HAurM"]), binds: ec(p.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: g.intl.string(g.t.rrYBEu), binds: ec(p.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: g.intl.string(g.t.sUJlPL), binds: ec(p.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: g.intl.string(g.t["A+Fv0R"]),
                binds: ec(p.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: g.intl.string(g.t.tL6eVW), binds: ec(p.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: g.intl.string(g.t["QXe/7T"]), binds: ec(p.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: g.intl.string(g.t.d6UIii), binds: ec(p.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: g.intl.string(g.t.IcEW06), binds: ec(p.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: g.intl.string(g.t.WN2dsS),
                binds: ec(p.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: g.intl.string(g.t.rUK0kk), binds: ec(p.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: g.intl.string(g.t.vkGkSn), binds: ec(p.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: g.intl.string(g.t.FJvZ87), binds: ec(p.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: g.intl.string(g.t["FiWl/T"]), binds: ec(p.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
            { description: g.intl.string(g.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
            { description: g.intl.string(g.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
            { description: g.intl.string(g.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
            { description: g.intl.string(g.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
            { description: g.intl.string(g.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
            { description: g.intl.string(g.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
            { description: g.intl.string(g.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
            { description: g.intl.string(g.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
            { description: g.intl.string(g.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
            { description: g.intl.string(g.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
            { description: g.intl.string(g.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
            { description: g.intl.string(g.t.z9c6mt), binds: ec(p.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = l.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: g.intl.string(g.t.IWNSoH), binds: ec(p.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let eE = 21552 == n.j ? eu : null;
