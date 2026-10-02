n.d(t, { y8: () => R, dY: () => O, CJ: () => C });
var i = n(774603),
    r = n(176522),
    a = n(64460),
    s = n(92960),
    l = n(739008),
    o = n(314519),
    d = n(793322);
let c = { binds: ["mod+k", "mod+t"], comboKeysBindGlobal: !0, action: () => ((0, d.WU)("KEYBIND", ""), !1) };
var u = n(806964),
    _ = n(552049),
    E = n(877991),
    A = n(928531),
    h = n(251494),
    I = n(82038),
    f = n(14214),
    p = n(151199),
    T = n(28647),
    m = n(467691),
    g = n(652215),
    S = n(375708);
function N() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = C[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let C = {
        [g.IWg.SERVER_NEXT]: A.yx,
        [g.IWg.SERVER_PREV]: A.yv,
        [g.IWg.CHANNEL_NEXT]: r.kF,
        [g.IWg.CHANNEL_PREV]: r.Oc,
        [g.IWg.NAVIGATE_BACK]: r.GY,
        [g.IWg.NAVIGATE_FORWARD]: r.M$,
        [g.IWg.UNREAD_NEXT]: m.mH,
        [g.IWg.UNREAD_PREV]: m.US,
        [g.IWg.MENTION_CHANNEL_NEXT]: m.BD,
        [g.IWg.MENTION_CHANNEL_PREV]: m.X8,
        [g.IWg.TOGGLE_PREVIOUS_GUILD]: r.Fv,
        [g.IWg.JUMP_TO_GUILD]: a.J,
        [g.IWg.SUBMIT]: h.X,
        [g.IWg.TEXTAREA_FOCUS]: I.c,
        [g.IWg.MARK_CHANNEL_READ]: s.Df,
        [g.IWg.MARK_SERVER_READ]: l.P,
        [g.IWg.TOGGLE_MUTE]: f.VT,
        [g.IWg.TOGGLE_DEAFEN]: f.rR,
        [g.IWg.TOGGLE_CATEGORY_COLLAPSED]: p.y,
        [g.IWg.SCROLL_UP]: _.U5,
        [g.IWg.SCROLL_DOWN]: _.fz,
        [g.IWg.SEARCH_EMOJIS]: E.L,
        [g.IWg.TOGGLE_HOTKEYS]: T.z,
        [g.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [g.IWg.RETURN_TO_AUDIO_CHANNEL]: u.u,
        [g.IWg.CALL_ACCEPT]: i.Yo,
        [g.IWg.CALL_START]: i.OX,
        [g.IWg.QUICKSWITCHER_SHOW]: c,
    },
    O = { [g.IWg.QUICKSWITCHER_SHOW]: c };
function R() {
    return [
        { description: S.intl.string(S.t.bx4Uyz), binds: N(g.IWg.SERVER_PREV, g.IWg.SERVER_NEXT) },
        { description: S.intl.string(S.t["+Wem6h"]), binds: N(g.IWg.CHANNEL_PREV, g.IWg.CHANNEL_NEXT) },
        { description: S.intl.string(S.t["+2fcdz"]), binds: N(g.IWg.NAVIGATE_BACK, g.IWg.NAVIGATE_FORWARD) },
        { description: S.intl.string(S.t.eVmj1H), binds: N(g.IWg.UNREAD_PREV, g.IWg.UNREAD_NEXT) },
        {
            description: S.intl.string(S.t.EcqS7Y),
            binds: N(g.IWg.MENTION_CHANNEL_PREV, g.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: S.intl.string(S.t.Bqss72), binds: N(g.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: S.intl.string(S.t.UaXAPx), binds: N(g.IWg.MARK_SERVER_READ) },
        { description: S.intl.string(S.t["5X9vFj"]), binds: N(g.IWg.MARK_CHANNEL_READ) },
        { description: S.intl.string(S.t.JoxNnl), binds: N(g.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: S.intl.string(S.t.tL6eVW), binds: N(g.IWg.TOGGLE_MUTE) },
        { description: S.intl.string(S.t["QXe/7T"]), binds: N(g.IWg.TOGGLE_DEAFEN) },
        { description: S.intl.string(S.t.d6UIii), binds: N(g.IWg.CALL_ACCEPT) },
        { description: S.intl.string(S.t.IcEW06), binds: N(g.IWg.MARK_CHANNEL_READ) },
        { description: S.intl.string(S.t.WN2dsS), binds: N(g.IWg.CALL_START), groupEnd: !0 },
        { description: S.intl.string(S.t.L3RYYJ), binds: N(g.IWg.SCROLL_UP, g.IWg.SCROLL_DOWN) },
        { description: S.intl.string(S.t["3HAurM"]), binds: N(g.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: S.intl.string(S.t.rrYBEu), binds: N(g.IWg.TEXTAREA_FOCUS) },
        { description: S.intl.string(S.t.yYsRlD), binds: N(g.IWg.QUICKSWITCHER_SHOW) },
    ];
}
