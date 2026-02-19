"use strict";
n.d(t, { CJ: () => b, dY: () => N, y8: () => S });
var i = n(774603),
    s = n(430086),
    l = n(64460),
    r = n(92960),
    a = n(739008),
    o = n(314519),
    c = n(967497),
    d = n(806964),
    u = n(552049),
    h = n(877991),
    A = n(904828),
    p = n(251494),
    g = n(82038),
    m = n(14214),
    _ = n(151199),
    f = n(512513),
    x = n(801796),
    C = n(652215),
    E = n(985018);
function I() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = b[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let b = {
        [C.IWg.SERVER_NEXT]: A.yx,
        [C.IWg.SERVER_PREV]: A.yv,
        [C.IWg.CHANNEL_NEXT]: s.kF,
        [C.IWg.CHANNEL_PREV]: s.Oc,
        [C.IWg.NAVIGATE_BACK]: s.GY,
        [C.IWg.NAVIGATE_FORWARD]: s.M$,
        [C.IWg.UNREAD_NEXT]: x.mH,
        [C.IWg.UNREAD_PREV]: x.US,
        [C.IWg.MENTION_CHANNEL_NEXT]: x.BD,
        [C.IWg.MENTION_CHANNEL_PREV]: x.X8,
        [C.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
        [C.IWg.JUMP_TO_GUILD]: l.J,
        [C.IWg.SUBMIT]: p.X,
        [C.IWg.TEXTAREA_FOCUS]: g.c,
        [C.IWg.MARK_CHANNEL_READ]: r.D,
        [C.IWg.MARK_SERVER_READ]: a.P,
        [C.IWg.TOGGLE_MUTE]: m.VT,
        [C.IWg.TOGGLE_DEAFEN]: m.rR,
        [C.IWg.TOGGLE_CATEGORY_COLLAPSED]: _.y,
        [C.IWg.SCROLL_UP]: u.U5,
        [C.IWg.SCROLL_DOWN]: u.fz,
        [C.IWg.SEARCH_EMOJIS]: h.L,
        [C.IWg.TOGGLE_HOTKEYS]: f.z,
        [C.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [C.IWg.RETURN_TO_AUDIO_CHANNEL]: d.u,
        [C.IWg.CALL_ACCEPT]: i.Yo,
        [C.IWg.CALL_START]: i.OX,
        [C.IWg.QUICKSWITCHER_SHOW]: c.R,
    },
    N = { [C.IWg.QUICKSWITCHER_SHOW]: c.R };
function S() {
    return [
        { description: E.intl.string(E.t.bx4Uyz), binds: I(C.IWg.SERVER_PREV, C.IWg.SERVER_NEXT) },
        { description: E.intl.string(E.t["+Wem6h"]), binds: I(C.IWg.CHANNEL_PREV, C.IWg.CHANNEL_NEXT) },
        { description: E.intl.string(E.t["+2fcdz"]), binds: I(C.IWg.NAVIGATE_BACK, C.IWg.NAVIGATE_FORWARD) },
        { description: E.intl.string(E.t.eVmj1H), binds: I(C.IWg.UNREAD_PREV, C.IWg.UNREAD_NEXT) },
        {
            description: E.intl.string(E.t.EcqS7Y),
            binds: I(C.IWg.MENTION_CHANNEL_PREV, C.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: E.intl.string(E.t.Bqss72), binds: I(C.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: E.intl.string(E.t.UaXAPx), binds: I(C.IWg.MARK_SERVER_READ) },
        { description: E.intl.string(E.t["5X9vFj"]), binds: I(C.IWg.MARK_CHANNEL_READ) },
        { description: E.intl.string(E.t.JoxNnl), binds: I(C.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: E.intl.string(E.t.tL6eVW), binds: I(C.IWg.TOGGLE_MUTE) },
        { description: E.intl.string(E.t["QXe/7T"]), binds: I(C.IWg.TOGGLE_DEAFEN) },
        { description: E.intl.string(E.t.d6UIii), binds: I(C.IWg.CALL_ACCEPT) },
        { description: E.intl.string(E.t.IcEW06), binds: I(C.IWg.MARK_CHANNEL_READ) },
        { description: E.intl.string(E.t.WN2dsS), binds: I(C.IWg.CALL_START), groupEnd: !0 },
        { description: E.intl.string(E.t.L3RYYJ), binds: I(C.IWg.SCROLL_UP, C.IWg.SCROLL_DOWN) },
        { description: E.intl.string(E.t["3HAurM"]), binds: I(C.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: E.intl.string(E.t.rrYBEu), binds: I(C.IWg.TEXTAREA_FOCUS) },
        { description: E.intl.string(E.t.yYsRlD), binds: I(C.IWg.QUICKSWITCHER_SHOW) },
    ];
}
