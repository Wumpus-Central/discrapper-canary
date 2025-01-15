n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: function () {
            return c;
        },
        INVITE_OPTIONS_10_TIMES: function () {
            return o;
        },
        INVITE_OPTIONS_12_HOURS: function () {
            return m;
        },
        INVITE_OPTIONS_1_DAY: function () {
            return S;
        },
        INVITE_OPTIONS_1_HOUR: function () {
            return T;
        },
        INVITE_OPTIONS_25_TIMES: function () {
            return u;
        },
        INVITE_OPTIONS_30_MINUTES: function () {
            return _;
        },
        INVITE_OPTIONS_50_TIMES: function () {
            return I;
        },
        INVITE_OPTIONS_5_TIMES: function () {
            return s;
        },
        INVITE_OPTIONS_6_HOURS: function () {
            return N;
        },
        INVITE_OPTIONS_7_DAYS: function () {
            return f;
        },
        INVITE_OPTIONS_FOREVER: function () {
            return O;
        },
        INVITE_OPTIONS_ONCE: function () {
            return l;
        },
        INVITE_OPTIONS_UNLIMITED: function () {
            return a;
        },
        MAX_AGE_OPTIONS: function () {
            return E;
        },
        MAX_USES_OPTIONS: function () {
            return d;
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
let a = r(0, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 0 })),
    l = r(1, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 1 })),
    s = r(5, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 5 })),
    o = r(10, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 10 })),
    u = r(25, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 25 })),
    I = r(50, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 50 })),
    c = r(100, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 100 })),
    d = [a, l, s, o, u, I, c],
    _ = r(1800, () => i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 })),
    T = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
    N = r(21600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 })),
    m = r(43200, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 })),
    S = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
    f = r(604800, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 })),
    O = r(0, () => i.intl.string(i.t.PqEzn5)),
    E = [_, T, N, m, S, f, O];
