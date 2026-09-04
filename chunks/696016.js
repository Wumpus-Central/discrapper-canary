n.d(t, {
    CN: () => Y,
    Cx: () => ei,
    Fv: () => p,
    GU: () => U,
    Gy: () => q,
    LX: () => f,
    Me: () => ee,
    Mu: () => b,
    Ot: () => g,
    P4: () => m,
    QK: () => el,
    RC: () => X,
    SC: () => K,
    UY: () => ea,
    U_: () => $,
    V0: () => R,
    VP: () => x,
    Vi: () => N,
    Y2: () => W,
    YM: () => V,
    _1: () => J,
    _S: () => er,
    cM: () => G,
    dV: () => F,
    gC: () => z,
    iJ: () => B,
    k9: () => Z,
    kd: () => O,
    l_: () => L,
    mO: () => es,
    mY: () => et,
    nQ: () => eo,
    nm: () => v,
    nx: () => C,
    rb: () => ed,
    rv: () => j,
    s3: () => P,
    sT: () => T,
    sc: () => y,
    sz: () => S,
    tS: () => en,
    td: () => w,
    ut: () => k,
    vZ: () => M,
    yz: () => Q,
    zj: () => D,
    zq: () => H,
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
    h = n(626584),
    I = n(927813),
    f =
        (((i = {})[(i.SECONDS_30 = 30 * I.A.Millis.SECOND)] = "SECONDS_30"),
        (i[(i.MINUTES_1 = I.A.Millis.MINUTE)] = "MINUTES_1"),
        (i[(i.MINUTES_2 = 2 * I.A.Millis.MINUTE)] = "MINUTES_2"),
        i),
    p = (((r = {}).DECOUPLED = "decoupled"), (r.STREAMER = "streamer"), (r.VOICE = "voice"), r);
let T = "v3";
var m = (((a = {})[(a.Error = 0)] = "Error"), (a[(a.Disabled = 1)] = "Disabled"), (a[(a.Enabled = 2)] = "Enabled"), a);
let g = "alt+c",
    S = "f12",
    N = 6 * I.A.Millis.SECOND,
    C = new h.A("Clips"),
    O = 6,
    R = 2,
    L = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
    y = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
    D = 0.1,
    v = "clips-gallery",
    b = "clips_player",
    M = 640,
    P = 360,
    U = 100,
    w = 1e3,
    G = (e) => `Clip - ${new Date(e).toLocaleString()}`,
    x = 15,
    k = 60 * I.A.Millis.SECOND,
    F = 3e4,
    V = 30,
    B = 10;
I.A.Millis.DAY;
let H = 10,
    j = 100,
    W = 75,
    Y = 0x3c0000000,
    K = ".autoclip-cache",
    $ = 0;
var z =
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
        (((o = {}).UNKNOWN = "unknown"),
        (o.BELOW_MINIMUM = "below_minimum"),
        (o.MEETS_MINIMUM = "meets_minimum"),
        (o.MEETS_AUTO_ENABLE = "meets_auto_enable"),
        o),
    X =
        (((d = {}).MAX_CONCURRENT_SAVES = "max_concurrent_saves"),
        (d.NO_ELIGIBLE_SOURCE = "no_eligible_source"),
        (d.MODULE_NOT_LOADED = "module_not_loaded"),
        (d.BUFFER_WARMING_UP = "buffer_warming_up"),
        (d.BRIDGE_SHUTDOWN = "bridge_shutdown"),
        (d.RECORDING_NOT_READY = "recording_not_ready"),
        d),
    Q = (((c = {}).ORIGINAL = "original"), (c.PORTRAIT_9_16 = "9:16"), (c.LANDSCAPE_16_9 = "16:9"), c);
function J(e) {
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
var ee = (((u = {}).TEXT = "text"), u);
let et = { text: "#D53FAE" },
    en = 5,
    ei = 1,
    er = { x: 0.5, y: 0.5 };
var ea = (((_ = {}).NONE = "none"), (_.SMALL = "small"), (_.MEDIUM = "medium"), (_.LARGE = "large"), _);
let es = { none: 0, small: 1 / 16, medium: 1 / 8, large: 1 / 4 },
    el = { fontSize: 0.06, color: "#FFFFFF", strokeWidth: "none", strokeColor: "#000000" };
var eo = (((E = {}).CLIP = "clip"), (E.SCREENSHOT = "screenshot"), (E.VOICE_CLIP = "voice_clip"), E),
    ed =
        (((A = {}).UNCLASSIFIED = "unclassified"),
        (A.KILL = "kill"),
        (A.MULTIKILL = "multikill"),
        (A.DEATH = "death"),
        (A.ASSIST = "assist"),
        (A.ITEM = "item"),
        (A.VICTORY = "victory"),
        (A.DEFEAT = "defeat"),
        (A.LEVEL_UP = "level_up"),
        (A.TREASURE = "treasure"),
        (A.OBJECTIVE_KILL = "objective_kill"),
        A);
