n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: function () {
            return _;
        },
        INVITE_OPTIONS_10_TIMES: function () {
            return I;
        },
        INVITE_OPTIONS_12_HOURS: function () {
            return c;
        },
        INVITE_OPTIONS_1_DAY: function () {
            return O;
        },
        INVITE_OPTIONS_1_HOUR: function () {
            return d;
        },
        INVITE_OPTIONS_25_TIMES: function () {
            return l;
        },
        INVITE_OPTIONS_30_MINUTES: function () {
            return T;
        },
        INVITE_OPTIONS_50_TIMES: function () {
            return s;
        },
        INVITE_OPTIONS_5_TIMES: function () {
            return u;
        },
        INVITE_OPTIONS_6_HOURS: function () {
            return S;
        },
        INVITE_OPTIONS_7_DAYS: function () {
            return N;
        },
        INVITE_OPTIONS_FOREVER: function () {
            return E;
        },
        INVITE_OPTIONS_ONCE: function () {
            return a;
        },
        INVITE_OPTIONS_UNLIMITED: function () {
            return o;
        },
        MAX_AGE_OPTIONS: function () {
            return m;
        },
        MAX_USES_OPTIONS: function () {
            return f;
        }
    });
var i = n(388032);
function r(e, t) {
    return {
        value: e,
        get label() {
            return t();
        }
    };
}
let o = r(0, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 0 })),
    a = r(1, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 1 })),
    u = r(5, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 5 })),
    I = r(10, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 10 })),
    l = r(25, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 25 })),
    s = r(50, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 50 })),
    _ = r(100, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 100 })),
    f = [o, a, u, I, l, s, _],
    T = r(1800, () => i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 })),
    d = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
    S = r(21600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 })),
    c = r(43200, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 })),
    O = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
    N = r(604800, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 })),
    E = r(0, () => i.intl.string(i.t.PqEzn5)),
    m = [T, d, S, c, O, N, E];
