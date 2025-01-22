r.d(n, {
    D6: function () {
        return u;
    },
    EF: function () {
        return i;
    },
    EW: function () {
        return l;
    },
    UC: function () {
        return p;
    },
    VZ: function () {
        return a;
    },
    ZC: function () {
        return d;
    },
    d_: function () {
        return o;
    },
    e7: function () {
        return c;
    },
    ny: function () {
        return f;
    },
    px: function () {
        return h;
    }
});
var i,
    a,
    o,
    s = r(411104);
let l = 1.5,
    u = 2.5,
    c = 0.125,
    d = 0.2;
!(function (e) {
    (e.SIZE_16 = 'SIZE_16'), (e.SIZE_20 = 'SIZE_20'), (e.SIZE_24 = 'SIZE_24'), (e.SIZE_32 = 'SIZE_32'), (e.SIZE_40 = 'SIZE_40'), (e.SIZE_44 = 'SIZE_44'), (e.SIZE_48 = 'SIZE_48'), (e.SIZE_56 = 'SIZE_56'), (e.SIZE_80 = 'SIZE_80'), (e.SIZE_120 = 'SIZE_120'), (e.SIZE_152 = 'SIZE_152'), (e.DEPRECATED_SIZE_30 = 'DEPRECATED_SIZE_30'), (e.DEPRECATED_SIZE_60 = 'DEPRECATED_SIZE_60'), (e.DEPRECATED_SIZE_100 = 'DEPRECATED_SIZE_100');
})(i || (i = {})),
    !(function (e) {
        (e.BLACK = 'black'), (e.WHITE = 'white');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.HIGH = 0.7)] = 'HIGH'), (e[(e.LOW = 0.45)] = 'LOW');
    })(o || (o = {}));
let f = Object.freeze({
    SIZE_16: Object.freeze({
        size: 16,
        status: 6,
        stroke: 2,
        offset: 0
    }),
    SIZE_20: Object.freeze({
        size: 20,
        status: 6,
        stroke: 2,
        offset: 0
    }),
    SIZE_24: Object.freeze({
        size: 24,
        status: 8,
        stroke: 3,
        offset: 0
    }),
    SIZE_32: Object.freeze({
        size: 32,
        status: 10,
        stroke: 3,
        offset: 0
    }),
    SIZE_40: Object.freeze({
        size: 40,
        status: 12,
        stroke: 4,
        offset: 0
    }),
    SIZE_44: Object.freeze({
        size: 44,
        status: 12,
        stroke: 4,
        offset: 0
    }),
    SIZE_48: Object.freeze({
        size: 48,
        status: 12,
        stroke: 4,
        offset: 0
    }),
    SIZE_56: Object.freeze({
        size: 56,
        status: 14,
        stroke: 4,
        offset: 2
    }),
    SIZE_80: Object.freeze({
        size: 80,
        status: 16,
        stroke: 6,
        offset: 4
    }),
    SIZE_120: Object.freeze({
        size: 120,
        status: 24,
        stroke: 8,
        offset: 8
    }),
    SIZE_152: Object.freeze({
        size: 152,
        status: 30,
        stroke: 10,
        offset: 10
    }),
    DEPRECATED_SIZE_30: Object.freeze({
        size: 30,
        status: 0,
        stroke: 0,
        offset: 0
    }),
    DEPRECATED_SIZE_60: Object.freeze({
        size: 60,
        status: 0,
        stroke: 0,
        offset: 0
    }),
    DEPRECATED_SIZE_100: Object.freeze({
        size: 100,
        status: 0,
        stroke: 0,
        offset: 0
    })
});
function p(e) {
    return f[e];
}
function h(e) {
    return 'number' != typeof e ? p(e).size : e;
}
