n.d(t, {
    Q2: () => F,
    Rv: () => W,
    U6: () => V,
    UD: () => B,
    ZP: () => K,
    oT: () => Y,
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
    h = n(296805),
    m = n(169698),
    g = n(561716),
    E = n(239748),
    b = n(337482),
    y = n(679080),
    O = n(777019),
    v = n(523147),
    S = n(400332),
    I = n(510761),
    T = n(189509),
    C = n(886077),
    A = n(280492),
    N = n(746887),
    P = n(861007),
    w = n(89028),
    R = n(300644),
    D = n(721383),
    x = n(207234),
    L = n(997292),
    j = n(743810),
    M = n(620212),
    k = n(188051),
    U = n(547420),
    G = n(981631),
    Z = n(388032),
    F = (function (e) {
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
            return Z.intl.string(Z.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return Z.intl.string(Z.t.bI8F5u);
        case "CHAT":
            return Z.intl.string(Z.t.hDhbb3);
        case "MISCELLANEOUS":
            return Z.intl.string(Z.t.cBdwqs);
        case "MESSAGE":
            return Z.intl.string(Z.t["5fpmX9"]);
        case "DND":
            return Z.intl.string(Z.t["69j6+4"]);
    }
}
function V(e) {
    switch (e) {
        case "MESSAGE":
            return Z.intl.string(Z.t.iepGDn);
        case "DND":
            return Z.intl.string(Z.t.LBsB0a);
        default:
            return;
    }
}
function H() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = Y[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let Y = {
    [G.EkH.SERVER_NEXT]: I.nq,
    [G.EkH.SERVER_PREV]: I.X3,
    [G.EkH.CHANNEL_NEXT]: a.tQ,
    [G.EkH.CHANNEL_PREV]: a.x5,
    [G.EkH.NAVIGATE_BACK]: a.Nx,
    [G.EkH.NAVIGATE_FORWARD]: a.On,
    [G.EkH.UNREAD_NEXT]: j.pd,
    [G.EkH.UNREAD_PREV]: j.wk,
    [G.EkH.MENTION_CHANNEL_NEXT]: j.Nv,
    [G.EkH.MENTION_CHANNEL_PREV]: j.uX,
    [G.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
    [G.EkH.JUMP_TO_GUILD]: d.u,
    [G.EkH.SUBMIT]: T.z,
    [G.EkH.TEXTAREA_FOCUS]: C.U,
    [G.EkH.MARK_CHANNEL_READ]: f.f,
    [G.EkH.MARK_SERVER_READ]: p.l,
    [G.EkH.TOGGLE_CHANNEL_PINS]: P.u,
    [G.EkH.TOGGLE_FOR_LATER]: w.f,
    [G.EkH.TOGGLE_INBOX]: x.a,
    [G.EkH.MARK_TOP_INBOX_CHANNEL_READ]: x.M,
    [G.EkH.TOGGLE_USERS]: L.r,
    [G.EkH.TOGGLE_HELP]: R.O,
    [G.EkH.VIBE_WITH_WUMPUS]: k.w,
    [G.EkH.TOGGLE_MUTE]: A.iN,
    [G.EkH.TOGGLE_DEAFEN]: A.oV,
    [G.EkH.TOGGLE_CATEGORY_COLLAPSED]: N.u,
    [G.EkH.SEARCH_SOUNDBOARD]: v.Z,
    [G.EkH.SCROLL_UP]: b.B2,
    [G.EkH.SCROLL_DOWN]: b.gN,
    [G.EkH.QUICKSWITCHER_SHOW]: g.$,
    [G.EkH.CREATE_DM_GROUP]: o.K,
    [G.EkH.SEARCH_EMOJIS]: y.S,
    [G.EkH.SEARCH_GIFS]: O.O,
    [G.EkH.SEARCH_STICKERS]: S.U,
    [G.EkH.TOGGLE_HOTKEYS]: D._,
    [G.EkH.JUMP_TO_FIRST_UNREAD]: _.O,
    [G.EkH.CREATE_GUILD]: s.r,
    [G.EkH.UPLOAD_FILE]: M.U,
    [G.EkH.RETURN_TO_AUDIO_CHANNEL]: E.F,
    [G.EkH.CALL_ACCEPT]: i.IL,
    [G.EkH.CALL_START]: i.FI,
    [G.EkH.FOCUS_SEARCH]: c.I,
    [G.EkH.JUMP_TO_CURRENT_CALL]: u.K,
    [G.EkH.ZOOM_IN]: U.UF,
    [G.EkH.ZOOM_OUT]: U.RC,
    [G.EkH.ZOOM_RESET]: U.MY,
    [G.EkH.OPEN_APP_DIRECTORY]: h.T,
    [G.EkH.BROWSER_DEVTOOLS]: l.p,
    [G.EkH.OPEN_CONTEXT_MENU]: m.K,
};
function W() {
    let e = [
            {
                description: Z.intl.string(Z.t.bx4Uyz),
                binds: H(G.EkH.SERVER_PREV, G.EkH.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t["+Wem6h"]),
                binds: H(G.EkH.CHANNEL_PREV, G.EkH.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t["+2fcdz"]),
                binds: H(G.EkH.NAVIGATE_BACK, G.EkH.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t.eVmj1H),
                binds: H(G.EkH.UNREAD_PREV, G.EkH.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t.EcqS7Y),
                binds: H(G.EkH.MENTION_CHANNEL_PREV, G.EkH.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t["4I3pwW"]),
                binds: H(G.EkH.JUMP_TO_CURRENT_CALL),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t.Bqss72),
                binds: H(G.EkH.TOGGLE_PREVIOUS_GUILD),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t.yYsRlD),
                binds: H(G.EkH.QUICKSWITCHER_SHOW),
                group: "NAVIGATION",
            },
            {
                description: Z.intl.string(Z.t.O7ouXO),
                binds: H(G.EkH.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            {
                description: Z.intl.string(Z.t.Lns0Fc),
                binds: ["mod+d"],
                group: "DND",
            },
            {
                description: Z.intl.string(Z.t.dmMqay),
                binds: ["up", "down"],
                group: "DND",
            },
            {
                description: Z.intl.string(Z.t["cs/HVH"]),
                binds: ["spacebar", "enter"],
                group: "DND",
            },
            {
                description: Z.intl.string(Z.t["1ioMJQ"]),
                binds: ["esc"],
                group: "DND",
                groupEnd: !0,
            },
            {
                description: Z.intl.string(Z.t.UaXAPx),
                binds: H(G.EkH.MARK_SERVER_READ),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t["5X9vFj"]),
                binds: H(G.EkH.MARK_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t.wxQFsl),
                binds: H(G.EkH.CREATE_DM_GROUP),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t["C+XV7f"]),
                binds: H(G.EkH.TOGGLE_CHANNEL_PINS),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t["Q+YV/T"]),
                binds: H(G.EkH.TOGGLE_INBOX),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t["YEjV+W"]),
                binds: H(G.EkH.MARK_TOP_INBOX_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t.AcBI9S),
                binds: H(G.EkH.TOGGLE_USERS),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t.JoxNnl),
                binds: H(G.EkH.SEARCH_EMOJIS),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t["3PHxo8"]),
                binds: H(G.EkH.SEARCH_GIFS),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t.YFl7eb),
                binds: H(G.EkH.SEARCH_STICKERS),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t.L3RYYJ),
                binds: H(G.EkH.SCROLL_UP, G.EkH.SCROLL_DOWN),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t["3HAurM"]),
                binds: H(G.EkH.JUMP_TO_FIRST_UNREAD),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t.rrYBEu),
                binds: H(G.EkH.TEXTAREA_FOCUS),
                group: "CHAT",
            },
            {
                description: Z.intl.string(Z.t.sUJlPL),
                binds: H(G.EkH.UPLOAD_FILE),
                group: "CHAT",
                groupEnd: !0,
            },
            {
                description: Z.intl.string(Z.t.tL6eVW),
                binds: H(G.EkH.TOGGLE_MUTE),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: Z.intl.string(Z.t["QXe/7T"]),
                binds: H(G.EkH.TOGGLE_DEAFEN),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: Z.intl.string(Z.t.d6UIii),
                binds: H(G.EkH.CALL_ACCEPT),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: Z.intl.string(Z.t.IcEW06),
                binds: H(G.EkH.MARK_CHANNEL_READ),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: Z.intl.string(Z.t.WN2dsS),
                binds: H(G.EkH.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            {
                description: Z.intl.string(Z.t.rUK0kk),
                binds: H(G.EkH.SEARCH_SOUNDBOARD),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: Z.intl.string(Z.t.vkGkSn),
                binds: H(G.EkH.TOGGLE_HELP),
                group: "MISCELLANEOUS",
            },
            {
                description: Z.intl.string(Z.t.FJvZ87),
                binds: H(G.EkH.FOCUS_SEARCH),
                group: "MISCELLANEOUS",
            },
            {
                description: Z.intl.string(Z.t["FiWl/T"]),
                binds: H(G.EkH.OPEN_CONTEXT_MENU),
                group: "MISCELLANEOUS",
            },
            {
                description: Z.intl.string(Z.t.HnNtEI),
                binds: ["h+h+right+n+k"],
                group: "MISCELLANEOUS",
                groupEnd: !0,
            },
            {
                description: Z.intl.string(Z.t.fsBWmS),
                binds: ["e"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.xwMqD7),
                binds: ["backspace"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.CvQ18w),
                binds: ["p"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.lfIHs4),
                binds: ["plus"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t["5IEsGx"]),
                binds: ["r"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.zSyDdA),
                binds: ["f"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.yGLjXF),
                binds: ["s"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.JrGD7E),
                binds: ["mod+c"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.RpE9k7),
                binds: ["alt+enter"],
                group: "MESSAGE",
            },
            {
                description: Z.intl.string(Z.t.rrYBEu),
                binds: ["escape"],
                group: "MESSAGE",
                groupEnd: !0,
            },
            {
                description: Z.intl.string(Z.t.z9c6mt),
                binds: H(G.EkH.VIBE_WITH_WUMPUS),
                group: "MISCELLANEOUS",
            },
        ],
        { enabled: t, inInbox: n } = r.Z.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: Z.intl.string(Z.t.IWNSoH),
                binds: H(G.EkH.TOGGLE_FOR_LATER),
                group: "CHAT",
            }),
        e
    );
}
let K = Y;
