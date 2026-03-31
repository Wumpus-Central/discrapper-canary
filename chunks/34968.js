n.d(t, { CJ: () => N, dY: () => T, y8: () => S });
var i = n(774603),
    l = n(430086),
    s = n(64460),
    a = n(92960),
    r = n(739008),
    o = n(314519),
    c = n(967497),
    d = n(806964),
    u = n(552049),
    h = n(877991),
    A = n(904828),
    _ = n(251494),
    m = n(82038),
    g = n(14214),
    p = n(151199),
    f = n(512513),
    x = n(801796),
    E = n(652215),
    I = n(985018);
function C() {
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
        [E.IWg.CHANNEL_NEXT]: l.kF,
        [E.IWg.CHANNEL_PREV]: l.Oc,
        [E.IWg.NAVIGATE_BACK]: l.GY,
        [E.IWg.NAVIGATE_FORWARD]: l.M$,
        [E.IWg.UNREAD_NEXT]: x.mH,
        [E.IWg.UNREAD_PREV]: x.US,
        [E.IWg.MENTION_CHANNEL_NEXT]: x.BD,
        [E.IWg.MENTION_CHANNEL_PREV]: x.X8,
        [E.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
        [E.IWg.JUMP_TO_GUILD]: s.J,
        [E.IWg.SUBMIT]: _.X,
        [E.IWg.TEXTAREA_FOCUS]: m.c,
        [E.IWg.MARK_CHANNEL_READ]: a.Df,
        [E.IWg.MARK_SERVER_READ]: r.P,
        [E.IWg.TOGGLE_MUTE]: g.VT,
        [E.IWg.TOGGLE_DEAFEN]: g.rR,
        [E.IWg.TOGGLE_CATEGORY_COLLAPSED]: p.y,
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
    T = { [E.IWg.QUICKSWITCHER_SHOW]: c.R };
function S() {
    return [
        { description: I.intl.string(I.t.bx4Uyz), binds: C(E.IWg.SERVER_PREV, E.IWg.SERVER_NEXT) },
        { description: I.intl.string(I.t["+Wem6h"]), binds: C(E.IWg.CHANNEL_PREV, E.IWg.CHANNEL_NEXT) },
        { description: I.intl.string(I.t["+2fcdz"]), binds: C(E.IWg.NAVIGATE_BACK, E.IWg.NAVIGATE_FORWARD) },
        { description: I.intl.string(I.t.eVmj1H), binds: C(E.IWg.UNREAD_PREV, E.IWg.UNREAD_NEXT) },
        {
            description: I.intl.string(I.t.EcqS7Y),
            binds: C(E.IWg.MENTION_CHANNEL_PREV, E.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: I.intl.string(I.t.Bqss72), binds: C(E.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: I.intl.string(I.t.UaXAPx), binds: C(E.IWg.MARK_SERVER_READ) },
        { description: I.intl.string(I.t["5X9vFj"]), binds: C(E.IWg.MARK_CHANNEL_READ) },
        { description: I.intl.string(I.t.JoxNnl), binds: C(E.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: I.intl.string(I.t.tL6eVW), binds: C(E.IWg.TOGGLE_MUTE) },
        { description: I.intl.string(I.t["QXe/7T"]), binds: C(E.IWg.TOGGLE_DEAFEN) },
        { description: I.intl.string(I.t.d6UIii), binds: C(E.IWg.CALL_ACCEPT) },
        { description: I.intl.string(I.t.IcEW06), binds: C(E.IWg.MARK_CHANNEL_READ) },
        { description: I.intl.string(I.t.WN2dsS), binds: C(E.IWg.CALL_START), groupEnd: !0 },
        { description: I.intl.string(I.t.L3RYYJ), binds: C(E.IWg.SCROLL_UP, E.IWg.SCROLL_DOWN) },
        { description: I.intl.string(I.t["3HAurM"]), binds: C(E.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: I.intl.string(I.t.rrYBEu), binds: C(E.IWg.TEXTAREA_FOCUS) },
        { description: I.intl.string(I.t.yYsRlD), binds: C(E.IWg.QUICKSWITCHER_SHOW) },
    ];
}
