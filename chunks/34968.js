n.d(t, {
    CJ: () => x,
    dY: () => E,
    y8: () => _,
}),
    n(65821);
var r = n(774603),
    l = n(430086),
    i = n(64460),
    a = n(92960),
    s = n(739008),
    o = n(314519),
    c = n(967497),
    u = n(806964),
    d = n(552049),
    f = n(877991),
    p = n(904828),
    h = n(251494),
    b = n(82038),
    g = n(14214),
    m = n(151199),
    A = n(512513),
    y = n(801796),
    O = n(652215),
    j = n(985018);
function v() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = x[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let x = {
        [O.IWg.SERVER_NEXT]: p.yx,
        [O.IWg.SERVER_PREV]: p.yv,
        [O.IWg.CHANNEL_NEXT]: l.kF,
        [O.IWg.CHANNEL_PREV]: l.Oc,
        [O.IWg.NAVIGATE_BACK]: l.GY,
        [O.IWg.NAVIGATE_FORWARD]: l.M$,
        [O.IWg.UNREAD_NEXT]: y.mH,
        [O.IWg.UNREAD_PREV]: y.US,
        [O.IWg.MENTION_CHANNEL_NEXT]: y.BD,
        [O.IWg.MENTION_CHANNEL_PREV]: y.X8,
        [O.IWg.TOGGLE_PREVIOUS_GUILD]: l.Fv,
        [O.IWg.JUMP_TO_GUILD]: i.J,
        [O.IWg.SUBMIT]: h.X,
        [O.IWg.TEXTAREA_FOCUS]: b.c,
        [O.IWg.MARK_CHANNEL_READ]: a.D,
        [O.IWg.MARK_SERVER_READ]: s.P,
        [O.IWg.TOGGLE_MUTE]: g.VT,
        [O.IWg.TOGGLE_DEAFEN]: g.rR,
        [O.IWg.TOGGLE_CATEGORY_COLLAPSED]: m.y,
        [O.IWg.SCROLL_UP]: d.U5,
        [O.IWg.SCROLL_DOWN]: d.fz,
        [O.IWg.SEARCH_EMOJIS]: f.L,
        [O.IWg.TOGGLE_HOTKEYS]: A.z,
        [O.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [O.IWg.RETURN_TO_AUDIO_CHANNEL]: u.u,
        [O.IWg.CALL_ACCEPT]: r.Yo,
        [O.IWg.CALL_START]: r.OX,
        [O.IWg.QUICKSWITCHER_SHOW]: c.R,
    },
    E = { [O.IWg.QUICKSWITCHER_SHOW]: c.R };
function _() {
    return [
        {
            description: j.intl.string(j.t.bx4Uyz),
            binds: v(O.IWg.SERVER_PREV, O.IWg.SERVER_NEXT),
        },
        {
            description: j.intl.string(j.t["+Wem6h"]),
            binds: v(O.IWg.CHANNEL_PREV, O.IWg.CHANNEL_NEXT),
        },
        {
            description: j.intl.string(j.t["+2fcdz"]),
            binds: v(O.IWg.NAVIGATE_BACK, O.IWg.NAVIGATE_FORWARD),
        },
        {
            description: j.intl.string(j.t.eVmj1H),
            binds: v(O.IWg.UNREAD_PREV, O.IWg.UNREAD_NEXT),
        },
        {
            description: j.intl.string(j.t.EcqS7Y),
            binds: v(O.IWg.MENTION_CHANNEL_PREV, O.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.Bqss72),
            binds: v(O.IWg.TOGGLE_PREVIOUS_GUILD),
        },
        {
            description: j.intl.string(j.t.UaXAPx),
            binds: v(O.IWg.MARK_SERVER_READ),
        },
        {
            description: j.intl.string(j.t["5X9vFj"]),
            binds: v(O.IWg.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.JoxNnl),
            binds: v(O.IWg.SEARCH_EMOJIS),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.tL6eVW),
            binds: v(O.IWg.TOGGLE_MUTE),
        },
        {
            description: j.intl.string(j.t["QXe/7T"]),
            binds: v(O.IWg.TOGGLE_DEAFEN),
        },
        {
            description: j.intl.string(j.t.d6UIii),
            binds: v(O.IWg.CALL_ACCEPT),
        },
        {
            description: j.intl.string(j.t.IcEW06),
            binds: v(O.IWg.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.WN2dsS),
            binds: v(O.IWg.CALL_START),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.L3RYYJ),
            binds: v(O.IWg.SCROLL_UP, O.IWg.SCROLL_DOWN),
        },
        {
            description: j.intl.string(j.t["3HAurM"]),
            binds: v(O.IWg.JUMP_TO_FIRST_UNREAD),
        },
        {
            description: j.intl.string(j.t.rrYBEu),
            binds: v(O.IWg.TEXTAREA_FOCUS),
        },
        {
            description: j.intl.string(j.t.yYsRlD),
            binds: v(O.IWg.QUICKSWITCHER_SHOW),
        },
    ];
}
