n.d(t, { CJ: () => b, dY: () => N, y8: () => S });
var i = n(774603),
    l = n(430086),
    s = n(64460),
    a = n(92960),
    r = n(739008),
    o = n(314519),
    d = n(967497),
    c = n(806964),
    u = n(552049),
    h = n(877991),
    A = n(904828),
    _ = n(251494),
    m = n(82038),
    g = n(14214),
    p = n(151199),
    f = n(512513),
    E = n(801796),
    x = n(652215),
    I = n(985018);
function C() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = b[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let b = {
        [x.IWg.SERVER_NEXT]: A.yx,
        [x.IWg.SERVER_PREV]: A.yv,
        [x.IWg.CHANNEL_NEXT]: l.kF,
        [x.IWg.CHANNEL_PREV]: l.Oc,
        [x.IWg.NAVIGATE_BACK]: l.GY,
        [x.IWg.NAVIGATE_FORWARD]: l.M$,
        [x.IWg.UNREAD_NEXT]: E.mH,
        [x.IWg.UNREAD_PREV]: E.US,
        [x.IWg.MENTION_CHANNEL_NEXT]: E.BD,
        [x.IWg.MENTION_CHANNEL_PREV]: E.X8,
        [x.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
        [x.IWg.JUMP_TO_GUILD]: s.J,
        [x.IWg.SUBMIT]: _.X,
        [x.IWg.TEXTAREA_FOCUS]: m.c,
        [x.IWg.MARK_CHANNEL_READ]: a.Df,
        [x.IWg.MARK_SERVER_READ]: r.P,
        [x.IWg.TOGGLE_MUTE]: g.VT,
        [x.IWg.TOGGLE_DEAFEN]: g.rR,
        [x.IWg.TOGGLE_CATEGORY_COLLAPSED]: p.y,
        [x.IWg.SCROLL_UP]: u.U5,
        [x.IWg.SCROLL_DOWN]: u.fz,
        [x.IWg.SEARCH_EMOJIS]: h.L,
        [x.IWg.TOGGLE_HOTKEYS]: f.z,
        [x.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [x.IWg.RETURN_TO_AUDIO_CHANNEL]: c.u,
        [x.IWg.CALL_ACCEPT]: i.Yo,
        [x.IWg.CALL_START]: i.OX,
        [x.IWg.QUICKSWITCHER_SHOW]: d.R,
    },
    N = { [x.IWg.QUICKSWITCHER_SHOW]: d.R };
function S() {
    return [
        { description: I.intl.string(I.t.bx4Uyz), binds: C(x.IWg.SERVER_PREV, x.IWg.SERVER_NEXT) },
        { description: I.intl.string(I.t["+Wem6h"]), binds: C(x.IWg.CHANNEL_PREV, x.IWg.CHANNEL_NEXT) },
        { description: I.intl.string(I.t["+2fcdz"]), binds: C(x.IWg.NAVIGATE_BACK, x.IWg.NAVIGATE_FORWARD) },
        { description: I.intl.string(I.t.eVmj1H), binds: C(x.IWg.UNREAD_PREV, x.IWg.UNREAD_NEXT) },
        {
            description: I.intl.string(I.t.EcqS7Y),
            binds: C(x.IWg.MENTION_CHANNEL_PREV, x.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: I.intl.string(I.t.Bqss72), binds: C(x.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: I.intl.string(I.t.UaXAPx), binds: C(x.IWg.MARK_SERVER_READ) },
        { description: I.intl.string(I.t["5X9vFj"]), binds: C(x.IWg.MARK_CHANNEL_READ) },
        { description: I.intl.string(I.t.JoxNnl), binds: C(x.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: I.intl.string(I.t.tL6eVW), binds: C(x.IWg.TOGGLE_MUTE) },
        { description: I.intl.string(I.t["QXe/7T"]), binds: C(x.IWg.TOGGLE_DEAFEN) },
        { description: I.intl.string(I.t.d6UIii), binds: C(x.IWg.CALL_ACCEPT) },
        { description: I.intl.string(I.t.IcEW06), binds: C(x.IWg.MARK_CHANNEL_READ) },
        { description: I.intl.string(I.t.WN2dsS), binds: C(x.IWg.CALL_START), groupEnd: !0 },
        { description: I.intl.string(I.t.L3RYYJ), binds: C(x.IWg.SCROLL_UP, x.IWg.SCROLL_DOWN) },
        { description: I.intl.string(I.t["3HAurM"]), binds: C(x.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: I.intl.string(I.t.rrYBEu), binds: C(x.IWg.TEXTAREA_FOCUS) },
        { description: I.intl.string(I.t.yYsRlD), binds: C(x.IWg.QUICKSWITCHER_SHOW) },
    ];
}
