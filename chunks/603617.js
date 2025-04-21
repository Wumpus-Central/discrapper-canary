n.r(e),
    n.d(e, {
        INVITE_OPTIONS_100_TIMES: () => a,
        INVITE_OPTIONS_10_TIMES: () => u,
        INVITE_OPTIONS_12_HOURS: () => P,
        INVITE_OPTIONS_1_DAY: () => f,
        INVITE_OPTIONS_1_HOUR: () => S,
        INVITE_OPTIONS_25_TIMES: () => _,
        INVITE_OPTIONS_30_MINUTES: () => N,
        INVITE_OPTIONS_50_TIMES: () => T,
        INVITE_OPTIONS_5_TIMES: () => O,
        INVITE_OPTIONS_6_HOURS: () => E,
        INVITE_OPTIONS_7_DAYS: () => g,
        INVITE_OPTIONS_8_HOURS: () => o,
        INVITE_OPTIONS_FOREVER: () => m,
        INVITE_OPTIONS_ONCE: () => l,
        INVITE_OPTIONS_UNLIMITED: () => r,
        MAX_AGE_OPTIONS: () => d,
        MAX_USES_OPTIONS: () => s
    });
var I = n(388032);
function i(t, e) {
    return {
        value: t,
        get label() {
            return e();
        }
    };
}
let r = i(0, () => I.intl.formatToPlainString(I.t['r/IcuL'], { maxUses: 0 })),
    l = i(1, () => I.intl.formatToPlainString(I.t['r/IcuL'], { maxUses: 1 })),
    O = i(5, () => I.intl.formatToPlainString(I.t['r/IcuL'], { maxUses: 5 })),
    u = i(10, () => I.intl.formatToPlainString(I.t['r/IcuL'], { maxUses: 10 })),
    _ = i(25, () => I.intl.formatToPlainString(I.t['r/IcuL'], { maxUses: 25 })),
    T = i(50, () => I.intl.formatToPlainString(I.t['r/IcuL'], { maxUses: 50 })),
    a = i(100, () => I.intl.formatToPlainString(I.t['r/IcuL'], { maxUses: 100 })),
    s = [r, l, O, u, _, T, a],
    N = i(1800, () => I.intl.formatToPlainString(I.t.iXLF9f, { minutes: 30 })),
    S = i(3600, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 1 })),
    E = i(21600, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 6 })),
    o = i(28800, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 8 })),
    P = i(43200, () => I.intl.formatToPlainString(I.t.xCjYxM, { hours: 12 })),
    f = i(86400, () => I.intl.formatToPlainString(I.t.k2UNz8, { days: 1 })),
    g = i(604800, () => I.intl.formatToPlainString(I.t.k2UNz8, { days: 7 })),
    m = i(0, () => I.intl.string(I.t.PqEzn5)),
    d = [N, S, E, P, f, g, m];
