n.d(t, {
    Q2: () => Z,
    Rv: () => Y,
    U6: () => F,
    UD: () => B,
    ZP: () => W,
    oT: () => H,
}),
    n(415506),
    n(539854);
var r = n(2818),
    i = n(186070),
    a = n(185514),
    o = n(395878),
    s = n(321697),
    l = n(775774),
    c = n(570408),
    u = n(438846),
    d = n(360038),
    f = n(175724),
    p = n(705371),
    _ = n(138976),
    m = n(296805),
    h = n(561716),
    g = n(239748),
    E = n(337482),
    b = n(679080),
    y = n(777019),
    O = n(523147),
    v = n(400332),
    S = n(510761),
    I = n(189509),
    T = n(886077),
    C = n(280492),
    A = n(746887),
    N = n(861007),
    P = n(89028),
    R = n(300644),
    D = n(721383),
    w = n(207234),
    x = n(997292),
    L = n(743810),
    j = n(620212),
    M = n(188051),
    k = n(547420),
    U = n(981631),
    G = n(388032),
    Z = (function (e) {
        return (
            (e.NAVIGATION = "NAVIGATION"),
            (e.CHAT = "CHAT"),
            (e.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
            (e.MISCELLANEOUS = "MISCELLANEOUS"),
            (e.MESSAGE = "MESSAGE"),
            (e.DND = "DND"),
            e
        );
    })({});
function B(e) {
    switch (e) {
        case "NAVIGATION":
            return G.intl.string(G.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return G.intl.string(G.t.bI8F5u);
        case "CHAT":
            return G.intl.string(G.t.hDhbb3);
        case "MISCELLANEOUS":
            return G.intl.string(G.t.cBdwqs);
        case "MESSAGE":
            return G.intl.string(G.t["5fpmX9"]);
        case "DND":
            return G.intl.string(G.t["69j6+4"]);
    }
}
function F(e) {
    switch (e) {
        case "MESSAGE":
            return G.intl.string(G.t.iepGDn);
        case "DND":
            return G.intl.string(G.t.LBsB0a);
        default:
            return;
    }
}
function V() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = H[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let H = {
    [U.EkH.SERVER_NEXT]: S.nq,
    [U.EkH.SERVER_PREV]: S.X3,
    [U.EkH.CHANNEL_NEXT]: a.tQ,
    [U.EkH.CHANNEL_PREV]: a.x5,
    [U.EkH.NAVIGATE_BACK]: a.Nx,
    [U.EkH.NAVIGATE_FORWARD]: a.On,
    [U.EkH.UNREAD_NEXT]: L.pd,
    [U.EkH.UNREAD_PREV]: L.wk,
    [U.EkH.MENTION_CHANNEL_NEXT]: L.Nv,
    [U.EkH.MENTION_CHANNEL_PREV]: L.uX,
    [U.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
    [U.EkH.JUMP_TO_GUILD]: d.u,
    [U.EkH.SUBMIT]: I.z,
    [U.EkH.TEXTAREA_FOCUS]: T.U,
    [U.EkH.MARK_CHANNEL_READ]: f.f,
    [U.EkH.MARK_SERVER_READ]: p.l,
    [U.EkH.TOGGLE_CHANNEL_PINS]: N.u,
    [U.EkH.TOGGLE_FOR_LATER]: P.f,
    [U.EkH.TOGGLE_INBOX]: w.a,
    [U.EkH.MARK_TOP_INBOX_CHANNEL_READ]: w.M,
    [U.EkH.TOGGLE_USERS]: x.r,
    [U.EkH.TOGGLE_HELP]: R.O,
    [U.EkH.VIBE_WITH_WUMPUS]: M.w,
    [U.EkH.TOGGLE_MUTE]: C.iN,
    [U.EkH.TOGGLE_DEAFEN]: C.oV,
    [U.EkH.TOGGLE_CATEGORY_COLLAPSED]: A.u,
    [U.EkH.SEARCH_SOUNDBOARD]: O.Z,
    [U.EkH.SCROLL_UP]: E.B2,
    [U.EkH.SCROLL_DOWN]: E.gN,
    [U.EkH.QUICKSWITCHER_SHOW]: h.$,
    [U.EkH.CREATE_DM_GROUP]: o.K,
    [U.EkH.SEARCH_EMOJIS]: b.S,
    [U.EkH.SEARCH_GIFS]: y.O,
    [U.EkH.SEARCH_STICKERS]: v.U,
    [U.EkH.TOGGLE_HOTKEYS]: D._,
    [U.EkH.JUMP_TO_FIRST_UNREAD]: _.O,
    [U.EkH.CREATE_GUILD]: s.r,
    [U.EkH.UPLOAD_FILE]: j.U,
    [U.EkH.RETURN_TO_AUDIO_CHANNEL]: g.F,
    [U.EkH.CALL_ACCEPT]: i.IL,
    [U.EkH.CALL_START]: i.FI,
    [U.EkH.FOCUS_SEARCH]: c.I,
    [U.EkH.JUMP_TO_CURRENT_CALL]: u.K,
    [U.EkH.ZOOM_IN]: k.UF,
    [U.EkH.ZOOM_OUT]: k.RC,
    [U.EkH.ZOOM_RESET]: k.MY,
    [U.EkH.OPEN_APP_DIRECTORY]: m.T,
    [U.EkH.BROWSER_DEVTOOLS]: l.p,
};
function Y() {
    let e = [
            {
                description: G.intl.string(G.t.bx4Uyz),
                binds: V(U.EkH.SERVER_PREV, U.EkH.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t["+Wem6h"]),
                binds: V(U.EkH.CHANNEL_PREV, U.EkH.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t["+2fcdz"]),
                binds: V(U.EkH.NAVIGATE_BACK, U.EkH.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t.eVmj1H),
                binds: V(U.EkH.UNREAD_PREV, U.EkH.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t.EcqS7Y),
                binds: V(U.EkH.MENTION_CHANNEL_PREV, U.EkH.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t["4I3pwW"]),
                binds: V(U.EkH.JUMP_TO_CURRENT_CALL),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t.Bqss72),
                binds: V(U.EkH.TOGGLE_PREVIOUS_GUILD),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t.yYsRlD),
                binds: V(U.EkH.QUICKSWITCHER_SHOW),
                group: "NAVIGATION",
            },
            {
                description: G.intl.string(G.t.O7ouXO),
                binds: V(U.EkH.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            {
                description: G.intl.string(G.t.Lns0Fc),
                binds: ["mod+d"],
                group: "DND",
            },
            {
                description: G.intl.string(G.t.dmMqay),
                binds: ["up", "down"],
                group: "DND",
            },
            {
                description: G.intl.string(G.t["cs/HVH"]),
                binds: ["spacebar", "enter"],
                group: "DND",
            },
            {
                description: G.intl.string(G.t["1ioMJQ"]),
                binds: ["esc"],
                group: "DND",
                groupEnd: !0,
            },
            {
                description: G.intl.string(G.t.UaXAPx),
                binds: V(U.EkH.MARK_SERVER_READ),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t["5X9vFj"]),
                binds: V(U.EkH.MARK_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t.wxQFsl),
                binds: V(U.EkH.CREATE_DM_GROUP),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t["C+XV7f"]),
                binds: V(U.EkH.TOGGLE_CHANNEL_PINS),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t["Q+YV/T"]),
                binds: V(U.EkH.TOGGLE_INBOX),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t["YEjV+W"]),
                binds: V(U.EkH.MARK_TOP_INBOX_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t.AcBI9S),
                binds: V(U.EkH.TOGGLE_USERS),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t.JoxNnl),
                binds: V(U.EkH.SEARCH_EMOJIS),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t["3PHxo8"]),
                binds: V(U.EkH.SEARCH_GIFS),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t.YFl7eb),
                binds: V(U.EkH.SEARCH_STICKERS),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t.L3RYYJ),
                binds: V(U.EkH.SCROLL_UP, U.EkH.SCROLL_DOWN),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t["3HAurM"]),
                binds: V(U.EkH.JUMP_TO_FIRST_UNREAD),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t.rrYBEu),
                binds: V(U.EkH.TEXTAREA_FOCUS),
                group: "CHAT",
            },
            {
                description: G.intl.string(G.t.sUJlPL),
                binds: V(U.EkH.UPLOAD_FILE),
                group: "CHAT",
                groupEnd: !0,
            },
            {
                description: G.intl.string(G.t.tL6eVW),
                binds: V(U.EkH.TOGGLE_MUTE),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: G.intl.string(G.t["QXe/7T"]),
                binds: V(U.EkH.TOGGLE_DEAFEN),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: G.intl.string(G.t.d6UIii),
                binds: V(U.EkH.CALL_ACCEPT),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: G.intl.string(G.t.IcEW06),
                binds: V(U.EkH.MARK_CHANNEL_READ),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: G.intl.string(G.t.WN2dsS),
                binds: V(U.EkH.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            {
                description: G.intl.string(G.t.rUK0kk),
                binds: V(U.EkH.SEARCH_SOUNDBOARD),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: G.intl.string(G.t.vkGkSn),
                binds: V(U.EkH.TOGGLE_HELP),
                group: "MISCELLANEOUS",
            },
            {
                description: G.intl.string(G.t.FJvZ87),
                binds: V(U.EkH.FOCUS_SEARCH),
                group: "MISCELLANEOUS",
            },
            {
                description: G.intl.string(G.t.HnNtEI),
                binds: ["h+h+right+n+k"],
                group: "MISCELLANEOUS",
                groupEnd: !0,
            },
            {
                description: G.intl.string(G.t.fsBWmS),
                binds: ["e"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t.xwMqD7),
                binds: ["backspace"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t.CvQ18w),
                binds: ["p"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t.lfIHs4),
                binds: ["plus"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t["5IEsGx"]),
                binds: ["r"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t.zSyDdA),
                binds: ["f"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t.JrGD7E),
                binds: ["mod+c"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t.RpE9k7),
                binds: ["alt+enter"],
                group: "MESSAGE",
            },
            {
                description: G.intl.string(G.t.rrYBEu),
                binds: ["escape"],
                group: "MESSAGE",
                groupEnd: !0,
            },
            {
                description: G.intl.string(G.t.z9c6mt),
                binds: V(U.EkH.VIBE_WITH_WUMPUS),
                group: "MISCELLANEOUS",
            },
        ],
        { enabled: t, inInbox: n } = r.Z.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: G.intl.string(G.t.IWNSoH),
                binds: V(U.EkH.TOGGLE_FOR_LATER),
                group: "CHAT",
            }),
        e
    );
}
let W = H;
