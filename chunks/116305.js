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
    g = n(467691),
    m = n(652215),
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
        [m.IWg.SERVER_NEXT]: A.yx,
        [m.IWg.SERVER_PREV]: A.yv,
        [m.IWg.CHANNEL_NEXT]: r.kF,
        [m.IWg.CHANNEL_PREV]: r.Oc,
        [m.IWg.NAVIGATE_BACK]: r.GY,
        [m.IWg.NAVIGATE_FORWARD]: r.M$,
        [m.IWg.UNREAD_NEXT]: g.mH,
        [m.IWg.UNREAD_PREV]: g.US,
        [m.IWg.MENTION_CHANNEL_NEXT]: g.BD,
        [m.IWg.MENTION_CHANNEL_PREV]: g.X8,
        [m.IWg.TOGGLE_PREVIOUS_GUILD]: r.Fv,
        [m.IWg.JUMP_TO_GUILD]: a.J,
        [m.IWg.SUBMIT]: h.X,
        [m.IWg.TEXTAREA_FOCUS]: I.c,
        [m.IWg.MARK_CHANNEL_READ]: s.Df,
        [m.IWg.MARK_SERVER_READ]: l.P,
        [m.IWg.TOGGLE_MUTE]: f.VT,
        [m.IWg.TOGGLE_DEAFEN]: f.rR,
        [m.IWg.TOGGLE_CATEGORY_COLLAPSED]: p.y,
        [m.IWg.SCROLL_UP]: _.U5,
        [m.IWg.SCROLL_DOWN]: _.fz,
        [m.IWg.SEARCH_EMOJIS]: E.L,
        [m.IWg.TOGGLE_HOTKEYS]: T.z,
        [m.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [m.IWg.RETURN_TO_AUDIO_CHANNEL]: u.u,
        [m.IWg.CALL_ACCEPT]: i.Yo,
        [m.IWg.CALL_START]: i.OX,
        [m.IWg.QUICKSWITCHER_SHOW]: c,
    },
    O = { [m.IWg.QUICKSWITCHER_SHOW]: c };
function R() {
    return [
        { description: S.intl.string(S.t.bx4Uyz), binds: N(m.IWg.SERVER_PREV, m.IWg.SERVER_NEXT) },
        { description: S.intl.string(S.t["+Wem6h"]), binds: N(m.IWg.CHANNEL_PREV, m.IWg.CHANNEL_NEXT) },
        { description: S.intl.string(S.t["+2fcdz"]), binds: N(m.IWg.NAVIGATE_BACK, m.IWg.NAVIGATE_FORWARD) },
        { description: S.intl.string(S.t.eVmj1H), binds: N(m.IWg.UNREAD_PREV, m.IWg.UNREAD_NEXT) },
        {
            description: S.intl.string(S.t.EcqS7Y),
            binds: N(m.IWg.MENTION_CHANNEL_PREV, m.IWg.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        { description: S.intl.string(S.t.Bqss72), binds: N(m.IWg.TOGGLE_PREVIOUS_GUILD) },
        { description: S.intl.string(S.t.UaXAPx), binds: N(m.IWg.MARK_SERVER_READ) },
        { description: S.intl.string(S.t["5X9vFj"]), binds: N(m.IWg.MARK_CHANNEL_READ) },
        { description: S.intl.string(S.t.JoxNnl), binds: N(m.IWg.SEARCH_EMOJIS), groupEnd: !0 },
        { description: S.intl.string(S.t.tL6eVW), binds: N(m.IWg.TOGGLE_MUTE) },
        { description: S.intl.string(S.t["QXe/7T"]), binds: N(m.IWg.TOGGLE_DEAFEN) },
        { description: S.intl.string(S.t.d6UIii), binds: N(m.IWg.CALL_ACCEPT) },
        { description: S.intl.string(S.t.IcEW06), binds: N(m.IWg.MARK_CHANNEL_READ) },
        { description: S.intl.string(S.t.WN2dsS), binds: N(m.IWg.CALL_START), groupEnd: !0 },
        { description: S.intl.string(S.t.L3RYYJ), binds: N(m.IWg.SCROLL_UP, m.IWg.SCROLL_DOWN) },
        { description: S.intl.string(S.t["3HAurM"]), binds: N(m.IWg.JUMP_TO_FIRST_UNREAD) },
        { description: S.intl.string(S.t.rrYBEu), binds: N(m.IWg.TEXTAREA_FOCUS) },
        { description: S.intl.string(S.t.yYsRlD), binds: N(m.IWg.QUICKSWITCHER_SHOW) },
    ];
}
