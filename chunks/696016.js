"use strict";
n.d(t, {
    DQ: () => I,
    Fv: () => o,
    GU: () => v,
    LX: () => s,
    Ot: () => u,
    P4: () => l,
    T2: () => D,
    U_: () => g,
    V0: () => p,
    VP: () => C,
    Vi: () => d,
    YM: () => O,
    cM: () => N,
    dV: () => R,
    gC: () => M,
    iJ: () => b,
    kd: () => f,
    l_: () => h,
    mk: () => A,
    nm: () => T,
    nx: () => _,
    on: () => a,
    qh: () => w,
    s3: () => y,
    sc: () => m,
    sz: () => c,
    vZ: () => S,
    wN: () => L,
    zj: () => E,
});
var r = n(626584),
    i = n(927813),
    s = (function (e) {
        return (
            (e[(e.SECONDS_30 = 30 * i.A.Millis.SECOND)] = "SECONDS_30"),
            (e[(e.MINUTES_1 = i.A.Millis.MINUTE)] = "MINUTES_1"),
            (e[(e.MINUTES_2 = 2 * i.A.Millis.MINUTE)] = "MINUTES_2"),
            e
        );
    })({}),
    a = (function (e) {
        return (e[(e.ALL = 0)] = "ALL"), (e[(e.FRIENDS = 1)] = "FRIENDS"), e;
    })({}),
    o = (function (e) {
        return (e.DECOUPLED = "decoupled"), (e.VIEWER = "viewer"), (e.STREAMER = "streamer"), (e.VOICE = "voice"), e;
    })({}),
    l = (function (e) {
        return (e[(e.Error = 0)] = "Error"), (e[(e.Disabled = 1)] = "Disabled"), (e[(e.Enabled = 2)] = "Enabled"), e;
    })({});
let u = "alt+c",
    c = "f12",
    d = 6 * i.A.Millis.SECOND,
    _ = new r.A("Clips"),
    f = 4,
    p = 2,
    h = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
    m = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
    E = 0.1,
    g = 0,
    A = 200,
    I = "clips-edit",
    T = "clips-gallery",
    S = 640,
    y = 360,
    v = 100,
    N = (e) => `Clip - ${new Date(e).toLocaleString()}`,
    C = 15,
    R = 3e4,
    O = 30,
    b = 10;
i.A.Millis.DAY;
let D = 20,
    L = 1,
    w = 50;
var M = (function (e) {
    return (e.ALL = ":all"), (e.APPLICATION = ":application"), (e.VOICE = ":voice"), (e.SOUNDBOARD = ":soundboard"), e;
})({});
