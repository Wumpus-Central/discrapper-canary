I.r(e),
    I.d(e, {
        INVITE_OPTIONS_100_TIMES: () => N,
        INVITE_OPTIONS_10_TIMES: () => O,
        INVITE_OPTIONS_12_HOURS: () => P,
        INVITE_OPTIONS_14_DAYS: () => d,
        INVITE_OPTIONS_1_DAY: () => f,
        INVITE_OPTIONS_1_HOUR: () => s,
        INVITE_OPTIONS_25_TIMES: () => T,
        INVITE_OPTIONS_30_DAYS: () => m,
        INVITE_OPTIONS_30_MINUTES: () => S,
        INVITE_OPTIONS_50_TIMES: () => u,
        INVITE_OPTIONS_5_TIMES: () => _,
        INVITE_OPTIONS_60_DAYS: () => c,
        INVITE_OPTIONS_6_HOURS: () => o,
        INVITE_OPTIONS_7_DAYS: () => g,
        INVITE_OPTIONS_8_HOURS: () => E,
        INVITE_OPTIONS_FOREVER: () => V,
        INVITE_OPTIONS_ONCE: () => r,
        INVITE_OPTIONS_UNLIMITED: () => l,
        MAX_AGE_OPTIONS: () => D,
        MAX_USES_OPTIONS: () => a,
    });
var n = I(388032);
function i(t, e) {
    return {
        value: t,
        get label() {
            return e();
        },
    };
}
let l = i(0, () => n.intl.formatToPlainString(n.t["r/IcuL"], { maxUses: 0 })),
    r = i(1, () => n.intl.formatToPlainString(n.t["r/IcuL"], { maxUses: 1 })),
    _ = i(5, () => n.intl.formatToPlainString(n.t["r/IcuL"], { maxUses: 5 })),
    O = i(10, () => n.intl.formatToPlainString(n.t["r/IcuL"], { maxUses: 10 })),
    T = i(25, () => n.intl.formatToPlainString(n.t["r/IcuL"], { maxUses: 25 })),
    u = i(50, () => n.intl.formatToPlainString(n.t["r/IcuL"], { maxUses: 50 })),
    N = i(100, () => n.intl.formatToPlainString(n.t["r/IcuL"], { maxUses: 100 })),
    a = [l, r, _, O, T, u, N],
    S = i(1800, () => n.intl.formatToPlainString(n.t.iXLF9f, { minutes: 30 })),
    s = i(3600, () => n.intl.formatToPlainString(n.t.xCjYxM, { hours: 1 })),
    o = i(21600, () => n.intl.formatToPlainString(n.t.xCjYxM, { hours: 6 })),
    E = i(28800, () => n.intl.formatToPlainString(n.t.xCjYxM, { hours: 8 })),
    P = i(43200, () => n.intl.formatToPlainString(n.t.xCjYxM, { hours: 12 })),
    f = i(86400, () => n.intl.formatToPlainString(n.t.k2UNz8, { days: 1 })),
    g = i(604800, () => n.intl.formatToPlainString(n.t.k2UNz8, { days: 7 })),
    d = i(1209600, () => n.intl.formatToPlainString(n.t.k2UNz8, { days: 14 })),
    m = i(2592000, () => n.intl.formatToPlainString(n.t.k2UNz8, { days: 30 })),
    c = i(5184000, () => n.intl.formatToPlainString(n.t.k2UNz8, { days: 60 })),
    V = i(0, () => n.intl.string(n.t.PqEzn5)),
    D = [S, s, o, P, f, g, d, m, c, V];
