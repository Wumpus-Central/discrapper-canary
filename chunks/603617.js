n.r(e),
    n.d(e, {
        INVITE_OPTIONS_100_TIMES: () => N,
        INVITE_OPTIONS_10_TIMES: () => O,
        INVITE_OPTIONS_12_HOURS: () => P,
        INVITE_OPTIONS_14_DAYS: () => g,
        INVITE_OPTIONS_1_DAY: () => f,
        INVITE_OPTIONS_1_HOUR: () => s,
        INVITE_OPTIONS_25_TIMES: () => u,
        INVITE_OPTIONS_30_DAYS: () => m,
        INVITE_OPTIONS_30_MINUTES: () => S,
        INVITE_OPTIONS_50_TIMES: () => T,
        INVITE_OPTIONS_5_TIMES: () => _,
        INVITE_OPTIONS_60_DAYS: () => c,
        INVITE_OPTIONS_6_HOURS: () => o,
        INVITE_OPTIONS_7_DAYS: () => d,
        INVITE_OPTIONS_8_HOURS: () => E,
        INVITE_OPTIONS_FOREVER: () => p,
        INVITE_OPTIONS_ONCE: () => r,
        INVITE_OPTIONS_UNLIMITED: () => l,
        MAX_AGE_OPTIONS: () => D,
        MAX_USES_OPTIONS: () => a,
    });
var I = n(388032);
function i(t, e) {
    return {
        value: t,
        get label() {
            return e();
        },
    };
}
let l = i(0, () => I.intl.formatToPlainString(I.t["r/IcuL"], { maxUses: 0 })),
    r = i(1, () => I.intl.formatToPlainString(I.t["r/IcuL"], { maxUses: 1 })),
    _ = i(5, () => I.intl.formatToPlainString(I.t["r/IcuL"], { maxUses: 5 })),
    O = i(10, () => I.intl.formatToPlainString(I.t["r/IcuL"], { maxUses: 10 })),
    u = i(25, () => I.intl.formatToPlainString(I.t["r/IcuL"], { maxUses: 25 })),
    T = i(50, () => I.intl.formatToPlainString(I.t["r/IcuL"], { maxUses: 50 })),
    N = i(100, () => I.intl.formatToPlainString(I.t["r/IcuL"], { maxUses: 100 })),
    a = [l, r, _, O, u, T, N],
    S = i(1800, () => I.intl.formatToPlainString(I.t.iXLF9f, { minutes: 30 })),
    s = i(3600, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 1 })),
    o = i(21600, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 6 })),
    E = i(28800, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 8 })),
    P = i(43200, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 12 })),
    f = i(86400, () => I.intl.formatToPlainString(I.t.k2UNz8, { days: 1 })),
    d = i(604800, () => I.intl.formatToPlainString(I.t.k2UNz8, { days: 7 })),
    g = i(1209600, () => I.intl.formatToPlainString(I.t.k2UNz8, { days: 14 })),
    m = i(2592000, () => I.intl.formatToPlainString(I.t.k2UNz8, { days: 30 })),
    c = i(5184000, () => I.intl.formatToPlainString(I.t.k2UNz8, { days: 60 })),
    p = i(0, () => I.intl.string(I.t.PqEzn5)),
    D = [S, s, o, P, f, d, g, m, c, p];
