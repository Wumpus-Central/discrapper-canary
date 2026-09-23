n.d(t, {
    CN: () => $,
    Cx: () => el,
    DX: () => eO,
    EC: () => eD,
    Ew: () => eu,
    Fv: () => m,
    G$: () => eS,
    GU: () => G,
    Gy: () => Z,
    HA: () => ev,
    Hz: () => ey,
    L4: () => ef,
    LX: () => T,
    Me: () => er,
    Mu: () => P,
    Ot: () => N,
    P4: () => S,
    QK: () => eA,
    QY: () => en,
    Qw: () => eL,
    RC: () => ee,
    SC: () => z,
    T7: () => eI,
    UY: () => e_,
    U_: () => X,
    V0: () => y,
    VP: () => F,
    Vi: () => O,
    Y2: () => K,
    YK: () => eC,
    YM: () => H,
    _1: () => ei,
    _9: () => eN,
    _S: () => eo,
    ad: () => ed,
    cM: () => k,
    dV: () => V,
    gC: () => q,
    iJ: () => j,
    k9: () => J,
    kd: () => L,
    ku: () => eg,
    l_: () => D,
    mO: () => eE,
    mY: () => ea,
    nQ: () => eP,
    nS: () => eR,
    nm: () => M,
    nx: () => R,
    p4: () => ec,
    pZ: () => Q,
    pk: () => eM,
    rD: () => eT,
    rb: () => eU,
    rv: () => Y,
    s3: () => w,
    sL: () => ep,
    sT: () => g,
    sc: () => v,
    sz: () => C,
    tS: () => es,
    td: () => x,
    ut: () => B,
    vZ: () => U,
    w6: () => em,
    xy: () => eb,
    yz: () => et,
    z2: () => eh,
    zj: () => b,
    zq: () => W,
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
    I,
    f = n(626584),
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
    R = new f.A("Clips"),
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
    k = (e) => `Clip - ${new Date(e).toLocaleString()}`,
    F = 15,
    B = 60 * p.A.Millis.SECOND,
    V = 3e4,
    H = 30,
    j = 10;
p.A.Millis.DAY;
let W = 10,
    Y = 100,
    K = 75,
    $ = 0x3c0000000,
    z = ".autoclip-cache",
    X = 0;
var q =
        (((s = {}).ALL = ":all"),
        (s.APPLICATION = ":application"),
        (s.VOICE = ":voice"),
        (s.SOUNDBOARD = ":soundboard"),
        s),
    Z =
        (((l = {}).MANUAL = "manual"),
        (l.DISTRIBUTED = "distributed"),
        (l.SHOUTING = "shouting"),
        (l.LAUGHTER = "laughter"),
        (l.GAME_EVENT = "game_event"),
        (l.SPEAKING = "speaking"),
        (l.SOUNDBOARD = "soundboard"),
        l),
    Q =
        (((o = {})[(o.LAUGHTER = 1)] = "LAUGHTER"),
        (o[(o.SHOUTING = 2)] = "SHOUTING"),
        (o[(o.GAME_EVENTS = 4)] = "GAME_EVENTS"),
        o),
    J =
        (((d = {}).UNKNOWN = "unknown"),
        (d.BELOW_MINIMUM = "below_minimum"),
        (d.MEETS_MINIMUM = "meets_minimum"),
        (d.MEETS_AUTO_ENABLE = "meets_auto_enable"),
        d),
    ee =
        (((c = {}).MAX_CONCURRENT_SAVES = "max_concurrent_saves"),
        (c.NO_ELIGIBLE_SOURCE = "no_eligible_source"),
        (c.MODULE_NOT_LOADED = "module_not_loaded"),
        (c.BUFFER_WARMING_UP = "buffer_warming_up"),
        (c.BRIDGE_SHUTDOWN = "bridge_shutdown"),
        (c.RECORDING_NOT_READY = "recording_not_ready"),
        c),
    et = (((u = {}).ORIGINAL = "original"), (u.PORTRAIT_9_16 = "9:16"), (u.LANDSCAPE_16_9 = "16:9"), u);
function en(e) {
    switch (e) {
        case "9:16":
            return 9 / 16;
        case "16:9":
            return 16 / 9;
        default:
            return null;
    }
}
function ei(e) {
    if (e?.bounds != null) return e.bounds;
    let t = en(e?.preset);
    return null != t ? { aspectRatio: t } : null;
}
var er = (((_ = {}).TEXT = "text"), (_.IMAGE = "image"), _);
let ea = { text: "#D53FAE", image: "#3F7FD5" },
    es = 5,
    el = 1,
    eo = { x: 0.5, y: 0.5 },
    ed = 0,
    ec = 15;
function eu(e) {
    let t = (((Math.round(e / ec) * ec) % 360) + 360) % 360;
    return t > 180 ? t - 360 : t;
}
var e_ = (((E = {}).NONE = "none"), (E.SMALL = "small"), (E.MEDIUM = "medium"), (E.LARGE = "large"), E);
let eE = { none: 0, small: 1 / 16, medium: 1 / 8, large: 1 / 4 },
    eA = { fontSize: 0.06, color: "#FFFFFF", strokeWidth: "none", strokeColor: "#000000" },
    eh = 0.015,
    eI = 0.5,
    ef = 2048,
    ep = 0x2000000,
    eT = 2097152,
    em = "image/webp",
    eg = 0.92,
    eS = ["png", "jpg", "jpeg", "webp"],
    eN = ["image/png", "image/jpeg", "image/webp"],
    eC = 0.35,
    eO = 0.02,
    eR = 2;
function eL(e, t) {
    return Math.max(eO, Math.min(eC, (0.5 * e) / t));
}
var ey = (((A = {}).NONE = "none"), (A.SMALL = "small"), (A.MEDIUM = "medium"), (A.LARGE = "large"), A);
let eD = { none: 0, small: 0.02, medium: 0.05, large: 0.1 },
    ev = 0.4,
    eb = "none",
    eM = "#000000";
var eP = (((h = {}).CLIP = "clip"), (h.SCREENSHOT = "screenshot"), (h.VOICE_CLIP = "voice_clip"), h),
    eU =
        (((I = {}).UNCLASSIFIED = "unclassified"),
        (I.KILL = "kill"),
        (I.MULTIKILL = "multikill"),
        (I.DEATH = "death"),
        (I.ASSIST = "assist"),
        (I.ITEM = "item"),
        (I.VICTORY = "victory"),
        (I.DEFEAT = "defeat"),
        (I.LEVEL_UP = "level_up"),
        (I.TREASURE = "treasure"),
        (I.OBJECTIVE_KILL = "objective_kill"),
        I);
