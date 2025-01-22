r.d(n, {
    $I: function () {
        return v;
    },
    Fc: function () {
        return S;
    },
    Ku: function () {
        return E;
    },
    VF: function () {
        return A;
    },
    WX: function () {
        return a;
    },
    X_: function () {
        return u;
    },
    _U: function () {
        return b;
    },
    fL: function () {
        return l;
    },
    gG: function () {
        return m;
    },
    gv: function () {
        return c;
    },
    j8: function () {
        return s;
    },
    nz: function () {
        return y;
    },
    p: function () {
        return h;
    },
    p1: function () {
        return i;
    },
    pg: function () {
        return I;
    },
    rC: function () {
        return T;
    },
    sy: function () {
        return o;
    },
    wm: function () {
        return _;
    },
    zV: function () {
        return C;
    },
    zw: function () {
        return g;
    }
});
var i,
    a,
    o,
    s,
    l,
    u,
    c,
    d = r(47120);
var f = r(70956),
    p = r(981631);
let h = 100,
    _ = 1000,
    m = 100,
    g = 'Guild Events Modal',
    E = '-1';
!(function (e) {
    (e[(e.SCHEDULED = 1)] = 'SCHEDULED'), (e[(e.ACTIVE = 2)] = 'ACTIVE'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CANCELED = 4)] = 'CANCELED');
})(i || (i = {}));
let v = new Set([3, 4]);
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.STAGE_INSTANCE = 1)] = 'STAGE_INSTANCE'), (e[(e.VOICE = 2)] = 'VOICE'), (e[(e.EXTERNAL = 3)] = 'EXTERNAL'), (e[(e.PRIME_TIME = 4)] = 'PRIME_TIME');
})(a || (a = {})),
    !(function (e) {
        e[(e.EVENT_START = 1)] = 'EVENT_START';
    })(o || (o = {})),
    !(function (e) {
        (e[(e.PUBLIC = 1)] = 'PUBLIC'), (e[(e.GUILD_ONLY = 2)] = 'GUILD_ONLY');
    })(s || (s = {}));
let y = {
        1: p.d4z.GUILD_STAGE_VOICE,
        2: p.d4z.GUILD_VOICE
    },
    b = new Set([3]),
    I = new Set([1, 2]);
!(function (e) {
    (e[(e.EVENT_INFO = 0)] = 'EVENT_INFO'), (e[(e.RSVP_LIST = 1)] = 'RSVP_LIST');
})(l || (l = {}));
let T = 100,
    S = 2 * f.Z.Millis.DAY,
    A = 12 * f.Z.Millis.HOUR,
    C = 4;
!(function (e) {
    (e.NEW_EVENT = 'Upcoming Event Notice'), (e.EVENT_STARTING_SOON = 'Event Starting Soon Notice');
})(u || (u = {})),
    !(function (e) {
        (e[(e.UNINTERESTED = 0)] = 'UNINTERESTED'), (e[(e.INTERESTED = 1)] = 'INTERESTED');
    })(c || (c = {}));
