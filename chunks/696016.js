"use strict";
n.d(t, {
    CN: () => K,
    Cx: () => er,
    Fv: () => m,
    GU: () => w,
    Gy: () => Z,
    LX: () => p,
    Me: () => et,
    Mu: () => M,
    Ot: () => S,
    P4: () => g,
    QK: () => eo,
    RC: () => Q,
    SC: () => $,
    UY: () => es,
    U_: () => z,
    V0: () => L,
    VP: () => k,
    Vi: () => C,
    Y2: () => Y,
    YM: () => B,
    _1: () => ee,
    _S: () => ea,
    cM: () => x,
    dV: () => V,
    gC: () => q,
    iJ: () => H,
    k9: () => X,
    kd: () => R,
    l_: () => y,
    mO: () => el,
    mY: () => en,
    nQ: () => ed,
    nm: () => b,
    nx: () => O,
    on: () => T,
    rb: () => ec,
    rv: () => W,
    s3: () => U,
    sc: () => D,
    sz: () => N,
    tS: () => ei,
    td: () => G,
    ut: () => F,
    vZ: () => P,
    yz: () => J,
    zj: () => v,
    zq: () => j,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c,
    u,
    _,
    E,
    A,
    h,
    I = n(626584),
    f = n(927813),
    p =
        (((i = {})[(i.SECONDS_30 = 30 * f.A.Millis.SECOND)] = "SECONDS_30"),
        (i[(i.MINUTES_1 = f.A.Millis.MINUTE)] = "MINUTES_1"),
        (i[(i.MINUTES_2 = 2 * f.A.Millis.MINUTE)] = "MINUTES_2"),
        i),
    T = (((r = {})[(r.ALL = 0)] = "ALL"), (r[(r.FRIENDS = 1)] = "FRIENDS"), r),
    m = (((a = {}).DECOUPLED = "decoupled"), (a.VIEWER = "viewer"), (a.STREAMER = "streamer"), (a.VOICE = "voice"), a),
    g = (((s = {})[(s.Error = 0)] = "Error"), (s[(s.Disabled = 1)] = "Disabled"), (s[(s.Enabled = 2)] = "Enabled"), s);
let S = "alt+c",
    N = "f12",
    C = 6 * f.A.Millis.SECOND,
    O = new I.A("Clips"),
    R = 6,
    L = 2,
    y = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
    D = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
    v = 0.1,
    b = "clips-gallery",
    M = "clips_player",
    P = 640,
    U = 360,
    w = 100,
    G = 1e3,
    x = (e) => `Clip - ${new Date(e).toLocaleString()}`,
    k = 15,
    F = 60 * f.A.Millis.SECOND,
    V = 3e4,
    B = 30,
    H = 10;
f.A.Millis.DAY;
let j = 10,
    W = 100,
    Y = 75,
    K = 0x3c0000000,
    $ = ".autoclip-cache",
    z = 0;
var q =
        (((l = {}).ALL = ":all"),
        (l.APPLICATION = ":application"),
        (l.VOICE = ":voice"),
        (l.SOUNDBOARD = ":soundboard"),
        l),
    Z =
        (((o = {}).MANUAL = "manual"),
        (o.DISTRIBUTED = "distributed"),
        (o.SHOUTING = "shouting"),
        (o.LAUGHTER = "laughter"),
        (o.GAME_EVENT = "game_event"),
        (o.SPEAKING = "speaking"),
        (o.SOUNDBOARD = "soundboard"),
        o),
    X =
        (((d = {}).UNKNOWN = "unknown"),
        (d.BELOW_MINIMUM = "below_minimum"),
        (d.MEETS_MINIMUM = "meets_minimum"),
        (d.MEETS_AUTO_ENABLE = "meets_auto_enable"),
        d),
    Q =
        (((c = {}).MAX_CONCURRENT_SAVES = "max_concurrent_saves"),
        (c.NO_ELIGIBLE_SOURCE = "no_eligible_source"),
        (c.MODULE_NOT_LOADED = "module_not_loaded"),
        (c.BUFFER_WARMING_UP = "buffer_warming_up"),
        (c.BRIDGE_SHUTDOWN = "bridge_shutdown"),
        (c.RECORDING_NOT_READY = "recording_not_ready"),
        c),
    J = (((u = {}).ORIGINAL = "original"), (u.PORTRAIT_9_16 = "9:16"), (u.LANDSCAPE_16_9 = "16:9"), u);
function ee(e) {
    if (e?.bounds != null) return e.bounds;
    let t = (function (e) {
        switch (e) {
            case "9:16":
                return 9 / 16;
            case "16:9":
                return 16 / 9;
            default:
                return null;
        }
    })(e?.preset);
    return null != t ? { aspectRatio: t } : null;
}
var et = (((_ = {}).TEXT = "text"), _);
let en = { text: "#D53FAE" },
    ei = 5,
    er = 1,
    ea = { x: 0.5, y: 0.5 };
var es = (((E = {}).NONE = "none"), (E.SMALL = "small"), (E.MEDIUM = "medium"), (E.LARGE = "large"), E);
let el = { none: 0, small: 1 / 16, medium: 1 / 8, large: 1 / 4 },
    eo = { fontSize: 0.06, color: "#FFFFFF", strokeWidth: "none", strokeColor: "#000000" };
var ed = (((A = {}).CLIP = "clip"), (A.SCREENSHOT = "screenshot"), (A.VOICE_CLIP = "voice_clip"), A),
    ec =
        (((h = {}).UNCLASSIFIED = "unclassified"),
        (h.KILL = "kill"),
        (h.MULTIKILL = "multikill"),
        (h.DEATH = "death"),
        (h.ASSIST = "assist"),
        (h.ITEM = "item"),
        (h.VICTORY = "victory"),
        (h.DEFEAT = "defeat"),
        (h.LEVEL_UP = "level_up"),
        (h.TREASURE = "treasure"),
        (h.OBJECTIVE_KILL = "objective_kill"),
        h);
