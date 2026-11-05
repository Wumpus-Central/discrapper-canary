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
    I,
    p = n(626584),
    m = n(927813),
    g =
        (((i = {})[(i.SECONDS_30 = 30 * m.A.Millis.SECOND)] = "SECONDS_30"),
        (i[(i.MINUTES_1 = m.A.Millis.MINUTE)] = "MINUTES_1"),
        (i[(i.MINUTES_2 = 2 * m.A.Millis.MINUTE)] = "MINUTES_2"),
        i),
    T = (((r = {}).DECOUPLED = "decoupled"), (r.STREAMER = "streamer"), (r.VOICE = "voice"), r),
    S = (((a = {})[(a.Error = 0)] = "Error"), (a[(a.Disabled = 1)] = "Disabled"), (a[(a.Enabled = 2)] = "Enabled"), a);
let N = 6 * m.A.Millis.SECOND,
    C = new p.A("Clips"),
    O = 60 * m.A.Millis.SECOND;
m.A.Millis.DAY;
var R =
        (((s = {}).ALL = ":all"),
        (s.APPLICATION = ":application"),
        (s.VOICE = ":voice"),
        (s.SOUNDBOARD = ":soundboard"),
        s),
    L =
        (((l = {}).MANUAL = "manual"),
        (l.DISTRIBUTED = "distributed"),
        (l.SHOUTING = "shouting"),
        (l.LAUGHTER = "laughter"),
        (l.GAME_EVENT = "game_event"),
        (l.SPEAKING = "speaking"),
        (l.SOUNDBOARD = "soundboard"),
        l),
    y =
        (((o = {})[(o.LAUGHTER = 1)] = "LAUGHTER"),
        (o[(o.SHOUTING = 2)] = "SHOUTING"),
        (o[(o.GAME_EVENTS = 4)] = "GAME_EVENTS"),
        o),
    D =
        (((d = {}).UNKNOWN = "unknown"),
        (d.BELOW_MINIMUM = "below_minimum"),
        (d.MEETS_MINIMUM = "meets_minimum"),
        (d.MEETS_AUTO_ENABLE = "meets_auto_enable"),
        d),
    b = (((c = {}).UNSET = "unset"), (c.DEFAULT = "default"), (c.USER = "user"), c),
    v =
        (((u = {}).MAX_CONCURRENT_SAVES = "max_concurrent_saves"),
        (u.NO_ELIGIBLE_SOURCE = "no_eligible_source"),
        (u.MODULE_NOT_LOADED = "module_not_loaded"),
        (u.BUFFER_WARMING_UP = "buffer_warming_up"),
        (u.BRIDGE_SHUTDOWN = "bridge_shutdown"),
        (u.RECORDING_NOT_READY = "recording_not_ready"),
        u),
    P = (((_ = {}).ORIGINAL = "original"), (_.PORTRAIT_9_16 = "9:16"), (_.LANDSCAPE_16_9 = "16:9"), _);
function M(e) {
    switch (e) {
        case "9:16":
            return 9 / 16;
        case "16:9":
            return 16 / 9;
        default:
            return null;
    }
}
var U = (((E = {}).TEXT = "text"), (E.IMAGE = "image"), E),
    w = (((A = {}).NONE = "none"), (A.SMALL = "small"), (A.MEDIUM = "medium"), (A.LARGE = "large"), A),
    G = (((h = {}).NONE = "none"), (h.SMALL = "small"), (h.MEDIUM = "medium"), (h.LARGE = "large"), h),
    x = (((f = {}).CLIP = "clip"), (f.SCREENSHOT = "screenshot"), (f.VOICE_CLIP = "voice_clip"), f),
    k =
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
n.d(
    t,
    {},
    {
        $D: b,
        A_: "killIds",
        CN: 0x3c0000000,
        DX: 40 / 608,
        EC: { none: 0, small: 0.02, medium: 0.05, large: 0.1 },
        Ew: function (e) {
            let t = (((15 * Math.round(e / 15)) % 360) + 360) % 360;
            return t > 180 ? t - 360 : t;
        },
        Fv: T,
        G$: ["png", "jpg", "jpeg", "webp"],
        GU: C,
        Gy: L,
        Hz: G,
        I4: "clip-share-watermark",
        LX: g,
        Me: U,
        Mu: "clips_player",
        P4: S,
        QK: { fontSize: 0.06, color: "#FFFFFF", strokeWidth: "none", strokeColor: "#000000" },
        QY: M,
        Qh: 0.21875,
        Qw: function (e, t) {
            return Math.max(0.02, Math.min(0.35, (0.5 * e) / t));
        },
        RC: v,
        SC: ".autoclip-cache",
        UY: w,
        Vi: N,
        Yj: 213 / 1080,
        _1: function (e) {
            if (e?.bounds != null) return e.bounds;
            let t = M(e?.preset);
            return null != t ? { aspectRatio: t } : null;
        },
        _9: ["image/png", "image/jpeg", "image/webp"],
        _S: { x: 0.5, y: 0.5 },
        b1: 24 / 1080,
        cM: (e) => `Clip - ${new Date(e).toLocaleString()}`,
        gC: R,
        k9: D,
        l_: /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        mO: { none: 0, small: 1 / 16, medium: 1 / 8, large: 0.25 },
        mY: { text: "#D53FAE", image: "#3F7FD5" },
        nQ: x,
        nm: "clips-gallery",
        pZ: y,
        pk: "#000000",
        rD: 2097152,
        rb: k,
        sL: 0x2000000,
        sc: /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
        ut: O,
        w6: "image/webp",
        xv: "#00000024",
        yz: P,
    },
);
