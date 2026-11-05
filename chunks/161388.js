n.d(t, { CJ: () => C, dY: () => O, y8: () => R });
var i = n(774603),
    r = n(980372),
    a = n(64460),
    s = n(92960),
    l = n(795737),
    o = n(314519),
    d = n(793322);
let c = { binds: ["mod+k", "mod+t"], comboKeysBindGlobal: !0, action: () => ((0, d.WU)("KEYBIND", ""), !1) };
var u = n(806964),
    _ = n(552049),
    E = n(877991),
    A = n(194482),
    h = n(251494),
    f = n(82038),
    I = n(14214),
    p = n(151199),
    m = n(552992),
    g = n(513291),
    T = n(652215),
    S = n(792996);
function N() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = C[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let C = {
        [T.IWg.SERVER_NEXT]: A.yx,
        [T.IWg.SERVER_PREV]: A.yv,
        [T.IWg.CHANNEL_NEXT]: r.kF,
        [T.IWg.CHANNEL_PREV]: r.Oc,
        [T.IWg.NAVIGATE_BACK]: r.GY,
        [T.IWg.NAVIGATE_FORWARD]: r.M$,
        [T.IWg.UNREAD_NEXT]: g.mH,
        [T.IWg.UNREAD_PREV]: g.US,
        [T.IWg.MENTION_CHANNEL_NEXT]: g.BD,
        [T.IWg.MENTION_CHANNEL_PREV]: g.X8,
        [T.IWg.TOGGLE_PREVIOUS_GUILD]: r.Fv,
        [T.IWg.JUMP_TO_GUILD]: a.J,
        [T.IWg.SUBMIT]: h.X,
        [T.IWg.TEXTAREA_FOCUS]: f.c,
        [T.IWg.MARK_CHANNEL_READ]: s.Df,
        [T.IWg.MARK_SERVER_READ]: l.P,
        [T.IWg.TOGGLE_MUTE]: I.VT,
        [T.IWg.TOGGLE_DEAFEN]: I.rR,
        [T.IWg.TOGGLE_CATEGORY_COLLAPSED]: p.y,
        [T.IWg.SCROLL_UP]: _.U5,
        [T.IWg.SCROLL_DOWN]: _.fz,
        [T.IWg.SEARCH_EMOJIS]: E.L,
        [T.IWg.TOGGLE_HOTKEYS]: m.z,
        [T.IWg.JUMP_TO_FIRST_UNREAD]: o.s,
        [T.IWg.RETURN_TO_AUDIO_CHANNEL]: u.u,
        [T.IWg.CALL_ACCEPT]: i.Yo,
        [T.IWg.CALL_START]: i.OX,
        [T.IWg.QUICKSWITCHER_SHOW]: c,
    },
    O = { [T.IWg.QUICKSWITCHER_SHOW]: c };
function R() {
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
