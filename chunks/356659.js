r.d(n, {
    A5: function () {
        return M;
    },
    Bg: function () {
        return h;
    },
    D5: function () {
        return s;
    },
    D_: function () {
        return c;
    },
    EF: function () {
        return p;
    },
    G$: function () {
        return d;
    },
    HW: function () {
        return v;
    },
    Hp: function () {
        return E;
    },
    JO: function () {
        return C;
    },
    Kw: function () {
        return R;
    },
    MG: function () {
        return b;
    },
    OT: function () {
        return i;
    },
    Qr: function () {
        return T;
    },
    Ut: function () {
        return I;
    },
    WM: function () {
        return _;
    },
    X9: function () {
        return o;
    },
    XH: function () {
        return y;
    },
    _U: function () {
        return w;
    },
    dJ: function () {
        return a;
    },
    f_: function () {
        return S;
    },
    i$: function () {
        return x;
    },
    jF: function () {
        return f;
    },
    ji: function () {
        return D;
    },
    jp: function () {
        return O;
    },
    mg: function () {
        return g;
    },
    nU: function () {
        return m;
    },
    wD: function () {
        return A;
    },
    xd: function () {
        return P;
    },
    xx: function () {
        return L;
    },
    yl: function () {
        return N;
    }
});
var i,
    a,
    o,
    s,
    l = r(710845),
    u = r(70956);
!(function (e) {
    (e[(e.SECONDS_30 = 30 * u.Z.Millis.SECOND)] = 'SECONDS_30'), (e[(e.MINUTES_1 = u.Z.Millis.MINUTE)] = 'MINUTES_1'), (e[(e.MINUTES_2 = 2 * u.Z.Millis.MINUTE)] = 'MINUTES_2');
})(i || (i = {})),
    !(function (e) {
        (e[(e.ALL = 0)] = 'ALL'), (e[(e.FRIENDS = 1)] = 'FRIENDS');
    })(a || (a = {})),
    !(function (e) {
        (e.DECOUPLED = 'decoupled'), (e.VIEWER = 'viewer'), (e.STREAMER = 'streamer');
    })(o || (o = {})),
    !(function (e) {
        (e[(e.Error = 0)] = 'Error'), (e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled');
    })(s || (s = {}));
let c = 'alt+c',
    d = 6 * u.Z.Millis.SECOND,
    f = new l.Z('Clips'),
    p = (e) => 'Discord_Clip_'.concat(e, '.mp4'),
    h = 3,
    _ = 1,
    m = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
    g = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
    E = 0.1,
    v = 25,
    y = 0,
    b = 200,
    I = 'clips-edit',
    T = 'clips-gallery',
    S = 640,
    A = 360,
    C = 100,
    N = (e) => 'Clip - '.concat(new Date(e).toLocaleString()),
    R = 15,
    O = 30000,
    D = 30,
    x = 10,
    L = 14 * u.Z.Millis.DAY,
    w = 5,
    P = 5,
    M = 1;
