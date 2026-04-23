n.d(t, { y8: () => T, dY: () => N, CJ: () => S });
var i = n(774603),
    l = n(176522),
    s = n(64460),
    r = n(92960),
    a = n(739008),
    o = n(314519),
    d = n(793322);
let c = { binds: ["mod+k", "mod+t"], comboKeysBindGlobal: !0, action: () => ((0, d.WU)("KEYBIND", ""), !1) };
var u = n(806964),
    h = n(552049),
    A = n(877991),
    _ = n(928531),
    g = n(251494),
    m = n(82038),
    p = n(14214),
    f = n(151199),
    E = n(28647),
    C = n(467691),
    x = n(652215),
    I = n(985018);
function b() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = S[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let S = {
        [x.IWg.SERVER_NEXT]: _.yx,
        [x.IWg.SERVER_PREV]: _.yv,
        [x.IWg.CHANNEL_NEXT]: l.kF,
        [x.IWg.CHANNEL_PREV]: l.Oc,
        [x.IWg.NAVIGATE_BACK]: l.GY,
        [x.IWg.NAVIGATE_FORWARD]: l.M$,
        [x.IWg.UNREAD_NEXT]: C.mH,
        [x.IWg.UNREAD_PREV]: C.US,
        [x.IWg.MENTION_CHANNEL_NEXT]: C.BD,
        [x.IWg.MENTION_CHANNEL_PREV]: C.X8,
        [x.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
        [x.IWg.JUMP_TO_GUILD]: s.J,
        [x.IWg.SUBMIT]: g.X,
        [x.IWg.TEXTAREA_FOCUS]: m.c,
        [x.IWg.MARK_CHANNEL_READ]: r.Df,
        [x.IWg.MARK_SERVER_READ]: a.P,
        [x.IWg.TOGGLE_MUTE]: p.VT,
        [x.IWg.TOGGLE_DEAFEN]: p.rR,
        [x.IWg.TOGGLE_CATEGORY_COLLAPSED]: f.y,
        [x.IWg.SCROLL_UP]: h.U5,
        [x.IWg.SCROLL_DOWN]: h.fz,
        [x.IWg.SEARCH_EMOJIS]: A.L,
        [x.IWg.TOGGLE_HOTKEYS]: E.z,
        [x.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [x.IWg.RETURN_TO_AUDIO_CHANNEL]: u.u,
        [x.IWg.CALL_ACCEPT]: i.Yo,
        [x.IWg.CALL_START]: i.OX,
        [x.IWg.QUICKSWITCHER_SHOW]: c,
    },
    N = { [x.IWg.QUICKSWITCHER_SHOW]: c };
function T() {
    return [
        { description: I.intl.string(I.t.bx4Uyz), binds: b(x.IWg.SERVER_PREV, x.IWg.SERVER_NEXT) },
        { description: I.intl.string(I.t["+Wem6h"]), binds: b(x.IWg.CHANNEL_PREV, x.IWg.CHANNEL_NEXT) },
        { description: I.intl.string(I.t["+2fcdz"]), binds: b(x.IWg.NAVIGATE_BACK, x.IWg.NAVIGATE_FORWARD) },
        { description: I.intl.string(I.t.eVmj1H), binds: b(x.IWg.UNREAD_PREV, x.IWg.UNREAD_NEXT) },
        {
            description: I.intl.string(I.t.EcqS7Y),
            binds: b(x.IWg.MENTION_CHANNEL_PREV, x.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: I.intl.string(I.t.Bqss72), binds: b(x.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: I.intl.string(I.t.UaXAPx), binds: b(x.IWg.MARK_SERVER_READ) },
        { description: I.intl.string(I.t["5X9vFj"]), binds: b(x.IWg.MARK_CHANNEL_READ) },
        { description: I.intl.string(I.t.JoxNnl), binds: b(x.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: I.intl.string(I.t.tL6eVW), binds: b(x.IWg.TOGGLE_MUTE) },
        { description: I.intl.string(I.t["QXe/7T"]), binds: b(x.IWg.TOGGLE_DEAFEN) },
        { description: I.intl.string(I.t.d6UIii), binds: b(x.IWg.CALL_ACCEPT) },
        { description: I.intl.string(I.t.IcEW06), binds: b(x.IWg.MARK_CHANNEL_READ) },
        { description: I.intl.string(I.t.WN2dsS), binds: b(x.IWg.CALL_START), groupEnd: !0 },
        { description: I.intl.string(I.t.L3RYYJ), binds: b(x.IWg.SCROLL_UP, x.IWg.SCROLL_DOWN) },
        { description: I.intl.string(I.t["3HAurM"]), binds: b(x.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: I.intl.string(I.t.rrYBEu), binds: b(x.IWg.TEXTAREA_FOCUS) },
        { description: I.intl.string(I.t.yYsRlD), binds: b(x.IWg.QUICKSWITCHER_SHOW) },
    ];
}
