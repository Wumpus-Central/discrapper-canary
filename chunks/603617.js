n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: () => a,
        INVITE_OPTIONS_10_TIMES: () => u,
        INVITE_OPTIONS_12_HOURS: () => E,
        INVITE_OPTIONS_14_DAYS: () => m,
        INVITE_OPTIONS_1_DAY: () => f,
        INVITE_OPTIONS_1_HOUR: () => S,
        INVITE_OPTIONS_25_TIMES: () => O,
        INVITE_OPTIONS_30_DAYS: () => g,
        INVITE_OPTIONS_30_MINUTES: () => s,
        INVITE_OPTIONS_50_TIMES: () => T,
        INVITE_OPTIONS_5_TIMES: () => _,
        INVITE_OPTIONS_60_DAYS: () => c,
        INVITE_OPTIONS_6_HOURS: () => o,
        INVITE_OPTIONS_7_DAYS: () => d,
        INVITE_OPTIONS_8_HOURS: () => P,
        INVITE_OPTIONS_FOREVER: () => p,
        INVITE_OPTIONS_ONCE: () => r,
        INVITE_OPTIONS_UNLIMITED: () => l,
        MAX_AGE_OPTIONS: () => D,
        MAX_USES_OPTIONS: () => N,
    });
var I = n(388032);
function i(e, t) {
    return {
        value: e,
        get label() {
            return t();
        },
    };
}
let l = i(0, () => I.intl.formatToPlainString(I.t["r/IcuP"], { maxUses: 0 })),
    r = i(1, () => I.intl.formatToPlainString(I.t["r/IcuP"], { maxUses: 1 })),
    _ = i(5, () => I.intl.formatToPlainString(I.t["r/IcuP"], { maxUses: 5 })),
    u = i(10, () => I.intl.formatToPlainString(I.t["r/IcuP"], { maxUses: 10 })),
    O = i(25, () => I.intl.formatToPlainString(I.t["r/IcuP"], { maxUses: 25 })),
    T = i(50, () => I.intl.formatToPlainString(I.t["r/IcuP"], { maxUses: 50 })),
    a = i(100, () => I.intl.formatToPlainString(I.t["r/IcuP"], { maxUses: 100 })),
    N = [l, r, _, u, O, T, a],
    s = i(1800, () => I.intl.formatToPlainString(I.t.iXLF9W, { minutes: 30 })),
    S = i(3600, () => I.intl.formatToPlainString(I.t.xCjYxK, { hours: 1 })),
    o = i(21600, () => I.intl.formatToPlainString(I.t.xCjYxK, { hours: 6 })),
    P = i(28800, () => I.intl.formatToPlainString(I.t.xCjYxK, { hours: 8 })),
    E = i(43200, () => I.intl.formatToPlainString(I.t.xCjYxK, { hours: 12 })),
    f = i(86400, () => I.intl.formatToPlainString(I.t["k2UNz+"], { days: 1 })),
    d = i(604800, () => I.intl.formatToPlainString(I.t["k2UNz+"], { days: 7 })),
    m = i(1209600, () => I.intl.formatToPlainString(I.t["k2UNz+"], { days: 14 })),
    g = i(2592000, () => I.intl.formatToPlainString(I.t["k2UNz+"], { days: 30 })),
    c = i(5184000, () => I.intl.formatToPlainString(I.t["k2UNz+"], { days: 60 })),
    p = i(0, () => I.intl.string(I.t.PqEzn8)),
    D = [s, S, o, E, f, d, m, g, c, p];
