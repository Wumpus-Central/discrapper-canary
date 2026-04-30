n.d(t, { y8: () => g, dY: () => R, CJ: () => C });
var i = n(774603),
    a = n(176522),
    r = n(64460),
    s = n(92960),
    l = n(739008),
    o = n(314519),
    d = n(793322);
let c = { binds: ["mod+k", "mod+t"], comboKeysBindGlobal: !0, action: () => ((0, d.WU)("KEYBIND", ""), !1) };
var _ = n(806964),
    E = n(552049),
    u = n(877991),
    A = n(928531),
    I = n(251494),
    T = n(82038),
    h = n(14214),
    S = n(151199),
    N = n(28647),
    f = n(467691),
    p = n(652215),
    m = n(985018);
function O() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = C[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let C = {
        [p.IWg.SERVER_NEXT]: A.yx,
        [p.IWg.SERVER_PREV]: A.yv,
        [p.IWg.CHANNEL_NEXT]: a.kF,
        [p.IWg.CHANNEL_PREV]: a.Oc,
        [p.IWg.NAVIGATE_BACK]: a.GY,
        [p.IWg.NAVIGATE_FORWARD]: a.M$,
        [p.IWg.UNREAD_NEXT]: f.mH,
        [p.IWg.UNREAD_PREV]: f.US,
        [p.IWg.MENTION_CHANNEL_NEXT]: f.BD,
        [p.IWg.MENTION_CHANNEL_PREV]: f.X8,
        [p.IWg.TOGGLE_PREVIOUS_GUILD]: a.Fv,
        [p.IWg.JUMP_TO_GUILD]: r.J,
        [p.IWg.SUBMIT]: I.X,
        [p.IWg.TEXTAREA_FOCUS]: T.c,
        [p.IWg.MARK_CHANNEL_READ]: s.Df,
        [p.IWg.MARK_SERVER_READ]: l.P,
        [p.IWg.TOGGLE_MUTE]: h.VT,
        [p.IWg.TOGGLE_DEAFEN]: h.rR,
        [p.IWg.TOGGLE_CATEGORY_COLLAPSED]: S.y,
        [p.IWg.SCROLL_UP]: E.U5,
        [p.IWg.SCROLL_DOWN]: E.fz,
        [p.IWg.SEARCH_EMOJIS]: u.L,
        [p.IWg.TOGGLE_HOTKEYS]: N.z,
        [p.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [p.IWg.RETURN_TO_AUDIO_CHANNEL]: _.u,
        [p.IWg.CALL_ACCEPT]: i.Yo,
        [p.IWg.CALL_START]: i.OX,
        [p.IWg.QUICKSWITCHER_SHOW]: c,
    },
    R = { [p.IWg.QUICKSWITCHER_SHOW]: c };
function g() {
    return [
        { description: m.intl.string(m.t.bx4Uyz), binds: O(p.IWg.SERVER_PREV, p.IWg.SERVER_NEXT) },
        { description: m.intl.string(m.t["+Wem6h"]), binds: O(p.IWg.CHANNEL_PREV, p.IWg.CHANNEL_NEXT) },
        { description: m.intl.string(m.t["+2fcdz"]), binds: O(p.IWg.NAVIGATE_BACK, p.IWg.NAVIGATE_FORWARD) },
        { description: m.intl.string(m.t.eVmj1H), binds: O(p.IWg.UNREAD_PREV, p.IWg.UNREAD_NEXT) },
        {
            description: m.intl.string(m.t.EcqS7Y),
            binds: O(p.IWg.MENTION_CHANNEL_PREV, p.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: m.intl.string(m.t.Bqss72), binds: O(p.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: m.intl.string(m.t.UaXAPx), binds: O(p.IWg.MARK_SERVER_READ) },
        { description: m.intl.string(m.t["5X9vFj"]), binds: O(p.IWg.MARK_CHANNEL_READ) },
        { description: m.intl.string(m.t.JoxNnl), binds: O(p.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: m.intl.string(m.t.tL6eVW), binds: O(p.IWg.TOGGLE_MUTE) },
        { description: m.intl.string(m.t["QXe/7T"]), binds: O(p.IWg.TOGGLE_DEAFEN) },
        { description: m.intl.string(m.t.d6UIii), binds: O(p.IWg.CALL_ACCEPT) },
        { description: m.intl.string(m.t.IcEW06), binds: O(p.IWg.MARK_CHANNEL_READ) },
        { description: m.intl.string(m.t.WN2dsS), binds: O(p.IWg.CALL_START), groupEnd: !0 },
        { description: m.intl.string(m.t.L3RYYJ), binds: O(p.IWg.SCROLL_UP, p.IWg.SCROLL_DOWN) },
        { description: m.intl.string(m.t["3HAurM"]), binds: O(p.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: m.intl.string(m.t.rrYBEu), binds: O(p.IWg.TEXTAREA_FOCUS) },
        { description: m.intl.string(m.t.yYsRlD), binds: O(p.IWg.QUICKSWITCHER_SHOW) },
    ];
}
