t.r(n),
    t.d(n, {
        INVITE_OPTIONS_100_TIMES: () => c,
        INVITE_OPTIONS_10_TIMES: () => _,
        INVITE_OPTIONS_12_HOURS: () => N,
        INVITE_OPTIONS_1_DAY: () => m,
        INVITE_OPTIONS_1_HOUR: () => T,
        INVITE_OPTIONS_25_TIMES: () => s,
        INVITE_OPTIONS_30_MINUTES: () => I,
        INVITE_OPTIONS_50_TIMES: () => d,
        INVITE_OPTIONS_5_TIMES: () => o,
        INVITE_OPTIONS_6_HOURS: () => f,
        INVITE_OPTIONS_7_DAYS: () => g,
        INVITE_OPTIONS_FOREVER: () => E,
        INVITE_OPTIONS_ONCE: () => l,
        INVITE_OPTIONS_UNLIMITED: () => r,
        MAX_AGE_OPTIONS: () => h,
        MAX_USES_OPTIONS: () => u
    });
var i = t(388032);
function a(e, n) {
    return {
        value: e,
        get label() {
            return n();
        }
    };
}
let r = a(0, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 0 })),
    l = a(1, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 1 })),
    o = a(5, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 5 })),
    _ = a(10, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 10 })),
    s = a(25, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 25 })),
    d = a(50, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 50 })),
    c = a(100, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 100 })),
    u = [r, l, o, _, s, d, c],
    I = a(1800, () => i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 })),
    T = a(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
    f = a(21600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 })),
    N = a(43200, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 })),
    m = a(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
    g = a(604800, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 })),
    E = a(0, () => i.intl.string(i.t.PqEzn5)),
    h = [I, T, f, N, m, g, E];
