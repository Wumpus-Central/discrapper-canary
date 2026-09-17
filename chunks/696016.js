n.d(t, {
    CN: () => K,
    Cx: () => ea,
    Fv: () => T,
    GU: () => w,
    Gy: () => q,
    LX: () => p,
    Me: () => en,
    Mu: () => M,
    Ot: () => S,
    P4: () => m,
    QK: () => ed,
    RC: () => J,
    SC: () => $,
    UY: () => el,
    U_: () => z,
    V0: () => L,
    VP: () => k,
    Vi: () => C,
    Y2: () => Y,
    YM: () => V,
    _1: () => et,
    _S: () => es,
    cM: () => x,
    dV: () => B,
    gC: () => X,
    iJ: () => H,
    k9: () => Q,
    kd: () => R,
    l_: () => y,
    mO: () => eo,
    mY: () => ei,
    nQ: () => ec,
    nm: () => b,
    nx: () => O,
    pZ: () => Z,
    rb: () => eu,
    rv: () => W,
    s3: () => U,
    sT: () => g,
    sc: () => D,
    sz: () => N,
    tS: () => er,
    td: () => G,
    ut: () => F,
    vZ: () => P,
    yz: () => ee,
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
    T = (((r = {}).DECOUPLED = "decoupled"), (r.STREAMER = "streamer"), (r.VOICE = "voice"), r);
let g = "v3";
var m = (((a = {})[(a.Error = 0)] = "Error"), (a[(a.Disabled = 1)] = "Disabled"), (a[(a.Enabled = 2)] = "Enabled"), a);
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
    B = 3e4,
    V = 30,
    H = 10;
f.A.Millis.DAY;
let j = 10,
    W = 100,
    Y = 75,
    K = 0x3c0000000,
    $ = ".autoclip-cache",
    z = 0;
var X =
        (((s = {}).ALL = ":all"),
        (s.APPLICATION = ":application"),
        (s.VOICE = ":voice"),
        (s.SOUNDBOARD = ":soundboard"),
        s),
    q =
        (((l = {}).MANUAL = "manual"),
        (l.DISTRIBUTED = "distributed"),
        (l.SHOUTING = "shouting"),
        (l.LAUGHTER = "laughter"),
        (l.GAME_EVENT = "game_event"),
        (l.SPEAKING = "speaking"),
        (l.SOUNDBOARD = "soundboard"),
        l),
    Z =
        (((o = {})[(o.LAUGHTER = 1)] = "LAUGHTER"),
        (o[(o.SHOUTING = 2)] = "SHOUTING"),
        (o[(o.GAME_EVENTS = 4)] = "GAME_EVENTS"),
        o),
    Q =
        (((d = {}).UNKNOWN = "unknown"),
        (d.BELOW_MINIMUM = "below_minimum"),
        (d.MEETS_MINIMUM = "meets_minimum"),
        (d.MEETS_AUTO_ENABLE = "meets_auto_enable"),
        d),
    J =
        (((c = {}).MAX_CONCURRENT_SAVES = "max_concurrent_saves"),
        (c.NO_ELIGIBLE_SOURCE = "no_eligible_source"),
        (c.MODULE_NOT_LOADED = "module_not_loaded"),
        (c.BUFFER_WARMING_UP = "buffer_warming_up"),
        (c.BRIDGE_SHUTDOWN = "bridge_shutdown"),
        (c.RECORDING_NOT_READY = "recording_not_ready"),
        c),
    ee = (((u = {}).ORIGINAL = "original"), (u.PORTRAIT_9_16 = "9:16"), (u.LANDSCAPE_16_9 = "16:9"), u);
function et(e) {
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
var en = (((_ = {}).TEXT = "text"), _);
let ei = { text: "#D53FAE" },
    er = 5,
    ea = 1,
    es = { x: 0.5, y: 0.5 };
var el = (((E = {}).NONE = "none"), (E.SMALL = "small"), (E.MEDIUM = "medium"), (E.LARGE = "large"), E);
let eo = { none: 0, small: 1 / 16, medium: 1 / 8, large: 1 / 4 },
    ed = { fontSize: 0.06, color: "#FFFFFF", strokeWidth: "none", strokeColor: "#000000" };
var ec = (((A = {}).CLIP = "clip"), (A.SCREENSHOT = "screenshot"), (A.VOICE_CLIP = "voice_clip"), A),
    eu =
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
