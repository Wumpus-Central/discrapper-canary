"use strict";
n.d(t, { y8: () => v, dY: () => C, CJ: () => y });
var i = n(774603),
    r = n(176522),
    s = n(64460),
    a = n(92960),
    o = n(739008),
    l = n(314519),
    u = n(793322);
let c = { binds: ["mod+k", "mod+t"], comboKeysBindGlobal: !0, action: () => ((0, u.WU)("KEYBIND", ""), !1) };
var d = n(806964),
    _ = n(552049),
    f = n(877991),
    h = n(928531),
    p = n(251494),
    E = n(82038),
    m = n(14214),
    g = n(151199),
    A = n(28647),
    I = n(467691),
    T = n(652215),
    S = n(375708);
function N() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = y[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let y = {
        [T.IWg.SERVER_NEXT]: h.yx,
        [T.IWg.SERVER_PREV]: h.yv,
        [T.IWg.CHANNEL_NEXT]: r.kF,
        [T.IWg.CHANNEL_PREV]: r.Oc,
        [T.IWg.NAVIGATE_BACK]: r.GY,
        [T.IWg.NAVIGATE_FORWARD]: r.M$,
        [T.IWg.UNREAD_NEXT]: I.mH,
        [T.IWg.UNREAD_PREV]: I.US,
        [T.IWg.MENTION_CHANNEL_NEXT]: I.BD,
        [T.IWg.MENTION_CHANNEL_PREV]: I.X8,
        [T.IWg.TOGGLE_PREVIOUS_GUILD]: r.Fv,
        [T.IWg.JUMP_TO_GUILD]: s.J,
        [T.IWg.SUBMIT]: p.X,
        [T.IWg.TEXTAREA_FOCUS]: E.c,
        [T.IWg.MARK_CHANNEL_READ]: a.Df,
        [T.IWg.MARK_SERVER_READ]: o.P,
        [T.IWg.TOGGLE_MUTE]: m.VT,
        [T.IWg.TOGGLE_DEAFEN]: m.rR,
        [T.IWg.TOGGLE_CATEGORY_COLLAPSED]: g.y,
        [T.IWg.SCROLL_UP]: _.U5,
        [T.IWg.SCROLL_DOWN]: _.fz,
        [T.IWg.SEARCH_EMOJIS]: f.L,
        [T.IWg.TOGGLE_HOTKEYS]: A.z,
        [T.IWg.JUMP_TO_FIRST_UNREAD]: l.s,
        [T.IWg.RETURN_TO_AUDIO_CHANNEL]: d.u,
        [T.IWg.CALL_ACCEPT]: i.Yo,
        [T.IWg.CALL_START]: i.OX,
        [T.IWg.QUICKSWITCHER_SHOW]: c,
    },
    C = { [T.IWg.QUICKSWITCHER_SHOW]: c };
function v() {
    return [
        { description: S.intl.string(S.t.bx4Uyz), binds: N(T.IWg.SERVER_PREV, T.IWg.SERVER_NEXT) },
        { description: S.intl.string(S.t["+Wem6h"]), binds: N(T.IWg.CHANNEL_PREV, T.IWg.CHANNEL_NEXT) },
        { description: S.intl.string(S.t["+2fcdz"]), binds: N(T.IWg.NAVIGATE_BACK, T.IWg.NAVIGATE_FORWARD) },
        { description: S.intl.string(S.t.eVmj1H), binds: N(T.IWg.UNREAD_PREV, T.IWg.UNREAD_NEXT) },
        {
            description: S.intl.string(S.t.EcqS7Y),
            binds: N(T.IWg.MENTION_CHANNEL_PREV, T.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: S.intl.string(S.t.Bqss72), binds: N(T.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: S.intl.string(S.t.UaXAPx), binds: N(T.IWg.MARK_SERVER_READ) },
        { description: S.intl.string(S.t["5X9vFj"]), binds: N(T.IWg.MARK_CHANNEL_READ) },
        { description: S.intl.string(S.t.JoxNnl), binds: N(T.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: S.intl.string(S.t.tL6eVW), binds: N(T.IWg.TOGGLE_MUTE) },
        { description: S.intl.string(S.t["QXe/7T"]), binds: N(T.IWg.TOGGLE_DEAFEN) },
        { description: S.intl.string(S.t.d6UIii), binds: N(T.IWg.CALL_ACCEPT) },
        { description: S.intl.string(S.t.IcEW06), binds: N(T.IWg.MARK_CHANNEL_READ) },
        { description: S.intl.string(S.t.WN2dsS), binds: N(T.IWg.CALL_START), groupEnd: !0 },
        { description: S.intl.string(S.t.L3RYYJ), binds: N(T.IWg.SCROLL_UP, T.IWg.SCROLL_DOWN) },
        { description: S.intl.string(S.t["3HAurM"]), binds: N(T.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: S.intl.string(S.t.rrYBEu), binds: N(T.IWg.TEXTAREA_FOCUS) },
        { description: S.intl.string(S.t.yYsRlD), binds: N(T.IWg.QUICKSWITCHER_SHOW) },
    ];
}
