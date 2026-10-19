n.d(t, {
    A_: () => F,
    CN: () => X,
    Cx: () => ed,
    DX: () => eL,
    EC: () => eb,
    Ew: () => eE,
    Fv: () => m,
    G$: () => eC,
    GU: () => G,
    Gy: () => J,
    HA: () => eM,
    Hz: () => ev,
    L4: () => eT,
    LX: () => T,
    Me: () => es,
    Mu: () => P,
    Ot: () => N,
    P4: () => S,
    QK: () => ef,
    QY: () => er,
    Qw: () => eD,
    RC: () => en,
    SC: () => q,
    T7: () => ep,
    UY: () => eA,
    U_: () => Z,
    V0: () => y,
    VP: () => V,
    Vi: () => O,
    Y2: () => z,
    YK: () => eR,
    YM: () => W,
    _1: () => ea,
    _9: () => eO,
    _S: () => ec,
    ad: () => eu,
    cM: () => B,
    dV: () => j,
    gC: () => Q,
    gy: () => k,
    iJ: () => Y,
    k9: () => et,
    kd: () => L,
    ku: () => eN,
    l_: () => D,
    mO: () => eh,
    mY: () => el,
    nQ: () => ew,
    nS: () => ey,
    nm: () => M,
    nx: () => R,
    p4: () => e_,
    pZ: () => ee,
    pk: () => eU,
    rD: () => eg,
    rb: () => eG,
    rv: () => $,
    s3: () => w,
    sL: () => em,
    sT: () => g,
    sc: () => v,
    sz: () => C,
    tS: () => eo,
    td: () => x,
    ut: () => H,
    vZ: () => U,
    w6: () => eS,
    xy: () => eP,
    yz: () => ei,
    z2: () => eI,
    zj: () => b,
    zq: () => K,
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
    f,
    I = n(626584),
    p = n(927813),
    T =
        (((i = {})[(i.SECONDS_30 = 30 * p.A.Millis.SECOND)] = "SECONDS_30"),
        (i[(i.MINUTES_1 = p.A.Millis.MINUTE)] = "MINUTES_1"),
        (i[(i.MINUTES_2 = 2 * p.A.Millis.MINUTE)] = "MINUTES_2"),
        i),
    m = (((r = {}).DECOUPLED = "decoupled"), (r.STREAMER = "streamer"), (r.VOICE = "voice"), r);
let g = "v3";
var S = (((a = {})[(a.Error = 0)] = "Error"), (a[(a.Disabled = 1)] = "Disabled"), (a[(a.Enabled = 2)] = "Enabled"), a);
let N = "alt+c",
    C = "f12",
    O = 6 * p.A.Millis.SECOND,
    R = new I.A("Clips"),
    L = 6,
    y = 2,
    D = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
    v = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
    b = 0.1,
    M = "clips-gallery",
    P = "clips_player",
    U = 640,
    w = 360,
    G = 100,
    x = 1e3,
    k = "id",
    F = "killIds",
    B = (e) => `Clip - ${new Date(e).toLocaleString()}`,
    V = 15,
    H = 60 * p.A.Millis.SECOND,
    j = 3e4,
    W = 30,
    Y = 10;
p.A.Millis.DAY;
let K = 10,
    $ = 100,
    z = 75,
    X = 0x3c0000000,
    q = ".autoclip-cache",
    Z = 0;
var Q =
        (((s = {}).ALL = ":all"),
        (s.APPLICATION = ":application"),
        (s.VOICE = ":voice"),
        (s.SOUNDBOARD = ":soundboard"),
        s),
    J =
        (((l = {}).MANUAL = "manual"),
        (l.DISTRIBUTED = "distributed"),
        (l.SHOUTING = "shouting"),
        (l.LAUGHTER = "laughter"),
        (l.GAME_EVENT = "game_event"),
        (l.SPEAKING = "speaking"),
        (l.SOUNDBOARD = "soundboard"),
        l),
    ee =
        (((o = {})[(o.LAUGHTER = 1)] = "LAUGHTER"),
        (o[(o.SHOUTING = 2)] = "SHOUTING"),
        (o[(o.GAME_EVENTS = 4)] = "GAME_EVENTS"),
        o),
    et =
        (((d = {}).UNKNOWN = "unknown"),
        (d.BELOW_MINIMUM = "below_minimum"),
        (d.MEETS_MINIMUM = "meets_minimum"),
        (d.MEETS_AUTO_ENABLE = "meets_auto_enable"),
        d),
    en =
        (((c = {}).MAX_CONCURRENT_SAVES = "max_concurrent_saves"),
        (c.NO_ELIGIBLE_SOURCE = "no_eligible_source"),
        (c.MODULE_NOT_LOADED = "module_not_loaded"),
        (c.BUFFER_WARMING_UP = "buffer_warming_up"),
        (c.BRIDGE_SHUTDOWN = "bridge_shutdown"),
        (c.RECORDING_NOT_READY = "recording_not_ready"),
        c),
    ei = (((u = {}).ORIGINAL = "original"), (u.PORTRAIT_9_16 = "9:16"), (u.LANDSCAPE_16_9 = "16:9"), u);
function er(e) {
    switch (e) {
        case "9:16":
            return 9 / 16;
        case "16:9":
            return 16 / 9;
        default:
            return null;
    }
}
function ea(e) {
    if (e?.bounds != null) return e.bounds;
    let t = er(e?.preset);
    return null != t ? { aspectRatio: t } : null;
}
var es = (((_ = {}).TEXT = "text"), (_.IMAGE = "image"), _);
let el = { text: "#D53FAE", image: "#3F7FD5" },
    eo = 5,
    ed = 1,
    ec = { x: 0.5, y: 0.5 },
    eu = 0,
    e_ = 15;
function eE(e) {
    let t = (((Math.round(e / e_) * e_) % 360) + 360) % 360;
    return t > 180 ? t - 360 : t;
}
var eA = (((E = {}).NONE = "none"), (E.SMALL = "small"), (E.MEDIUM = "medium"), (E.LARGE = "large"), E);
let eh = { none: 0, small: 1 / 16, medium: 1 / 8, large: 1 / 4 },
    ef = { fontSize: 0.06, color: "#FFFFFF", strokeWidth: "none", strokeColor: "#000000" },
    eI = 0.015,
    ep = 0.5,
    eT = 2048,
    em = 0x2000000,
    eg = 2097152,
    eS = "image/webp",
    eN = 0.92,
    eC = ["png", "jpg", "jpeg", "webp"],
    eO = ["image/png", "image/jpeg", "image/webp"],
    eR = 0.35,
    eL = 0.02,
    ey = 2;
function eD(e, t) {
    return Math.max(eL, Math.min(eR, (0.5 * e) / t));
}
var ev = (((A = {}).NONE = "none"), (A.SMALL = "small"), (A.MEDIUM = "medium"), (A.LARGE = "large"), A);
let eb = { none: 0, small: 0.02, medium: 0.05, large: 0.1 },
    eM = 0.4,
    eP = "none",
    eU = "#000000";
var ew = (((h = {}).CLIP = "clip"), (h.SCREENSHOT = "screenshot"), (h.VOICE_CLIP = "voice_clip"), h),
    eG =
        (((f = {}).UNCLASSIFIED = "unclassified"),
        (f.KILL = "kill"),
        (f.MULTIKILL = "multikill"),
        (f.DEATH = "death"),
        (f.ASSIST = "assist"),
        (f.ITEM = "item"),
        (f.VICTORY = "victory"),
        (f.DEFEAT = "defeat"),
        (f.LEVEL_UP = "level_up"),
        (f.TREASURE = "treasure"),
        (f.OBJECTIVE_KILL = "objective_kill"),
        f);
