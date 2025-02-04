n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: () => c,
        INVITE_OPTIONS_10_TIMES: () => o,
        INVITE_OPTIONS_12_HOURS: () => I,
        INVITE_OPTIONS_1_DAY: () => N,
        INVITE_OPTIONS_1_HOUR: () => A,
        INVITE_OPTIONS_25_TIMES: () => E,
        INVITE_OPTIONS_30_MINUTES: () => d,
        INVITE_OPTIONS_50_TIMES: () => u,
        INVITE_OPTIONS_5_TIMES: () => s,
        INVITE_OPTIONS_6_HOURS: () => T,
        INVITE_OPTIONS_7_DAYS: () => g,
        INVITE_OPTIONS_FOREVER: () => O,
        INVITE_OPTIONS_ONCE: () => a,
        INVITE_OPTIONS_UNLIMITED: () => i,
        MAX_AGE_OPTIONS: () => S,
        MAX_USES_OPTIONS: () => _
    });
var r = n(388032);
function l(e, t) {
    return {
        value: e,
        get label() {
            return t();
        }
    };
}
let i = l(0, () => r.intl.formatToPlainString(r.t['r/IcuL'], { maxUses: 0 })),
    a = l(1, () => r.intl.formatToPlainString(r.t['r/IcuL'], { maxUses: 1 })),
    s = l(5, () => r.intl.formatToPlainString(r.t['r/IcuL'], { maxUses: 5 })),
    o = l(10, () => r.intl.formatToPlainString(r.t['r/IcuL'], { maxUses: 10 })),
    E = l(25, () => r.intl.formatToPlainString(r.t['r/IcuL'], { maxUses: 25 })),
    u = l(50, () => r.intl.formatToPlainString(r.t['r/IcuL'], { maxUses: 50 })),
    c = l(100, () => r.intl.formatToPlainString(r.t['r/IcuL'], { maxUses: 100 })),
    _ = [i, a, s, o, E, u, c],
    d = l(1800, () => r.intl.formatToPlainString(r.t.iXLF9f, { minutes: 30 })),
    A = l(3600, () => r.intl.formatToPlainString(r.t.xCjYxM, { hours: 1 })),
    T = l(21600, () => r.intl.formatToPlainString(r.t.xCjYxM, { hours: 6 })),
    I = l(43200, () => r.intl.formatToPlainString(r.t.xCjYxM, { hours: 12 })),
    N = l(86400, () => r.intl.formatToPlainString(r.t.k2UNz8, { days: 1 })),
    g = l(604800, () => r.intl.formatToPlainString(r.t.k2UNz8, { days: 7 })),
    O = l(0, () => r.intl.string(r.t.PqEzn5)),
    S = [d, A, T, I, N, g, O];
