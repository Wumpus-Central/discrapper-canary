I.r(e),
    I.d(e, {
        INVITE_OPTIONS_100_TIMES: () => r,
        INVITE_OPTIONS_10_TIMES: () => u,
        INVITE_OPTIONS_12_HOURS: () => o,
        INVITE_OPTIONS_14_DAYS: () => m,
        INVITE_OPTIONS_1_DAY: () => f,
        INVITE_OPTIONS_1_HOUR: () => s,
        INVITE_OPTIONS_25_TIMES: () => O,
        INVITE_OPTIONS_30_DAYS: () => V,
        INVITE_OPTIONS_30_MINUTES: () => S,
        INVITE_OPTIONS_50_TIMES: () => N,
        INVITE_OPTIONS_5_TIMES: () => T,
        INVITE_OPTIONS_60_DAYS: () => g,
        INVITE_OPTIONS_6_HOURS: () => E,
        INVITE_OPTIONS_7_DAYS: () => d,
        INVITE_OPTIONS_8_HOURS: () => P,
        INVITE_OPTIONS_FOREVER: () => D,
        INVITE_OPTIONS_ONCE: () => l,
        INVITE_OPTIONS_UNLIMITED: () => _,
        MAX_AGE_OPTIONS: () => A,
        MAX_USES_OPTIONS: () => a,
    });
var n = I(985018);
function i(t, e) {
    return {
        value: t,
        get label() {
            return e();
        },
    };
}
let _ = i(0, () => n.intl.formatToPlainString(n.t["r/IcuP"], { maxUses: 0 })),
    l = i(1, () => n.intl.formatToPlainString(n.t["r/IcuP"], { maxUses: 1 })),
    T = i(5, () => n.intl.formatToPlainString(n.t["r/IcuP"], { maxUses: 5 })),
    u = i(10, () => n.intl.formatToPlainString(n.t["r/IcuP"], { maxUses: 10 })),
    O = i(25, () => n.intl.formatToPlainString(n.t["r/IcuP"], { maxUses: 25 })),
    N = i(50, () => n.intl.formatToPlainString(n.t["r/IcuP"], { maxUses: 50 })),
    r = i(100, () => n.intl.formatToPlainString(n.t["r/IcuP"], { maxUses: 100 })),
    a = [_, l, T, u, O, N, r],
    S = i(1800, () => n.intl.formatToPlainString(n.t.iXLF9W, { minutes: 30 })),
    s = i(3600, () => n.intl.formatToPlainString(n.t.xCjYxK, { hours: 1 })),
    E = i(21600, () => n.intl.formatToPlainString(n.t.xCjYxK, { hours: 6 })),
    P = i(28800, () => n.intl.formatToPlainString(n.t.xCjYxK, { hours: 8 })),
    o = i(43200, () => n.intl.formatToPlainString(n.t.xCjYxK, { hours: 12 })),
    f = i(86400, () => n.intl.formatToPlainString(n.t["k2UNz+"], { days: 1 })),
    d = i(604800, () => n.intl.formatToPlainString(n.t["k2UNz+"], { days: 7 })),
    m = i(1209600, () => n.intl.formatToPlainString(n.t["k2UNz+"], { days: 14 })),
    V = i(2592e3, () => n.intl.formatToPlainString(n.t["k2UNz+"], { days: 30 })),
    g = i(5184e3, () => n.intl.formatToPlainString(n.t["k2UNz+"], { days: 60 })),
    D = i(0, () => n.intl.string(n.t.PqEzn8)),
    A = [S, s, E, o, f, d, m, V, g, D];
