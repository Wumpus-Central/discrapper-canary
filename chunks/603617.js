n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: () => u,
        INVITE_OPTIONS_10_TIMES: () => l,
        INVITE_OPTIONS_12_HOURS: () => S,
        INVITE_OPTIONS_1_DAY: () => N,
        INVITE_OPTIONS_1_HOUR: () => T,
        INVITE_OPTIONS_25_TIMES: () => I,
        INVITE_OPTIONS_30_MINUTES: () => c,
        INVITE_OPTIONS_50_TIMES: () => d,
        INVITE_OPTIONS_5_TIMES: () => o,
        INVITE_OPTIONS_6_HOURS: () => f,
        INVITE_OPTIONS_7_DAYS: () => O,
        INVITE_OPTIONS_FOREVER: () => m,
        INVITE_OPTIONS_ONCE: () => r,
        INVITE_OPTIONS_UNLIMITED: () => _,
        MAX_AGE_OPTIONS: () => b,
        MAX_USES_OPTIONS: () => s
    });
var a = n(388032);
function i(e, t) {
    return {
        value: e,
        get label() {
            return t();
        }
    };
}
let _ = i(0, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 0 })),
    r = i(1, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 1 })),
    o = i(5, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 5 })),
    l = i(10, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 10 })),
    I = i(25, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 25 })),
    d = i(50, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 50 })),
    u = i(100, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 100 })),
    s = [_, r, o, l, I, d, u],
    c = i(1800, () => a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 30 })),
    T = i(3600, () => a.intl.formatToPlainString(a.t.xCjYxM, { hours: 1 })),
    f = i(21600, () => a.intl.formatToPlainString(a.t.xCjYxM, { hours: 6 })),
    S = i(43200, () => a.intl.formatToPlainString(a.t.xCjYxM, { hours: 12 })),
    N = i(86400, () => a.intl.formatToPlainString(a.t.k2UNz8, { days: 1 })),
    O = i(604800, () => a.intl.formatToPlainString(a.t.k2UNz8, { days: 7 })),
    m = i(0, () => a.intl.string(a.t.PqEzn5)),
    b = [c, T, f, S, N, O, m];
