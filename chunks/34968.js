"use strict";
n.d(t, { CJ: () => N, dY: () => b, y8: () => S });
var i = n(774603),
    s = n(430086),
    l = n(64460),
    a = n(92960),
    r = n(739008),
    o = n(314519),
    c = n(967497),
    d = n(806964),
    u = n(552049),
    h = n(877991),
    A = n(904828),
    m = n(251494),
    _ = n(82038),
    p = n(14214),
    g = n(151199),
    f = n(512513),
    x = n(801796),
    E = n(652215),
    C = n(985018);
function I() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = N[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let N = {
        [E.IWg.SERVER_NEXT]: A.yx,
        [E.IWg.SERVER_PREV]: A.yv,
        [E.IWg.CHANNEL_NEXT]: s.kF,
        [E.IWg.CHANNEL_PREV]: s.Oc,
        [E.IWg.NAVIGATE_BACK]: s.GY,
        [E.IWg.NAVIGATE_FORWARD]: s.M$,
        [E.IWg.UNREAD_NEXT]: x.mH,
        [E.IWg.UNREAD_PREV]: x.US,
        [E.IWg.MENTION_CHANNEL_NEXT]: x.BD,
        [E.IWg.MENTION_CHANNEL_PREV]: x.X8,
        [E.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
        [E.IWg.JUMP_TO_GUILD]: l.J,
        [E.IWg.SUBMIT]: m.X,
        [E.IWg.TEXTAREA_FOCUS]: _.c,
        [E.IWg.MARK_CHANNEL_READ]: a.Df,
        [E.IWg.MARK_SERVER_READ]: r.P,
        [E.IWg.TOGGLE_MUTE]: p.VT,
        [E.IWg.TOGGLE_DEAFEN]: p.rR,
        [E.IWg.TOGGLE_CATEGORY_COLLAPSED]: g.y,
        [E.IWg.SCROLL_UP]: u.U5,
        [E.IWg.SCROLL_DOWN]: u.fz,
        [E.IWg.SEARCH_EMOJIS]: h.L,
        [E.IWg.TOGGLE_HOTKEYS]: f.z,
        [E.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [E.IWg.RETURN_TO_AUDIO_CHANNEL]: d.u,
        [E.IWg.CALL_ACCEPT]: i.Yo,
        [E.IWg.CALL_START]: i.OX,
        [E.IWg.QUICKSWITCHER_SHOW]: c.R,
    },
    b = { [E.IWg.QUICKSWITCHER_SHOW]: c.R };
function S() {
    return [
        { description: C.intl.string(C.t.bx4Uyz), binds: I(E.IWg.SERVER_PREV, E.IWg.SERVER_NEXT) },
        { description: C.intl.string(C.t["+Wem6h"]), binds: I(E.IWg.CHANNEL_PREV, E.IWg.CHANNEL_NEXT) },
        { description: C.intl.string(C.t["+2fcdz"]), binds: I(E.IWg.NAVIGATE_BACK, E.IWg.NAVIGATE_FORWARD) },
        { description: C.intl.string(C.t.eVmj1H), binds: I(E.IWg.UNREAD_PREV, E.IWg.UNREAD_NEXT) },
        {
            description: C.intl.string(C.t.EcqS7Y),
            binds: I(E.IWg.MENTION_CHANNEL_PREV, E.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: C.intl.string(C.t.Bqss72), binds: I(E.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: C.intl.string(C.t.UaXAPx), binds: I(E.IWg.MARK_SERVER_READ) },
        { description: C.intl.string(C.t["5X9vFj"]), binds: I(E.IWg.MARK_CHANNEL_READ) },
        { description: C.intl.string(C.t.JoxNnl), binds: I(E.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: C.intl.string(C.t.tL6eVW), binds: I(E.IWg.TOGGLE_MUTE) },
        { description: C.intl.string(C.t["QXe/7T"]), binds: I(E.IWg.TOGGLE_DEAFEN) },
        { description: C.intl.string(C.t.d6UIii), binds: I(E.IWg.CALL_ACCEPT) },
        { description: C.intl.string(C.t.IcEW06), binds: I(E.IWg.MARK_CHANNEL_READ) },
        { description: C.intl.string(C.t.WN2dsS), binds: I(E.IWg.CALL_START), groupEnd: !0 },
        { description: C.intl.string(C.t.L3RYYJ), binds: I(E.IWg.SCROLL_UP, E.IWg.SCROLL_DOWN) },
        { description: C.intl.string(C.t["3HAurM"]), binds: I(E.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: C.intl.string(C.t.rrYBEu), binds: I(E.IWg.TEXTAREA_FOCUS) },
        { description: C.intl.string(C.t.yYsRlD), binds: I(E.IWg.QUICKSWITCHER_SHOW) },
    ];
}
