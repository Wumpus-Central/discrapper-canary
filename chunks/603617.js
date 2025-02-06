n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: () => u,
        INVITE_OPTIONS_10_TIMES: () => o,
        INVITE_OPTIONS_12_HOURS: () => N,
        INVITE_OPTIONS_1_DAY: () => E,
        INVITE_OPTIONS_1_HOUR: () => S,
        INVITE_OPTIONS_25_TIMES: () => I,
        INVITE_OPTIONS_30_MINUTES: () => d,
        INVITE_OPTIONS_50_TIMES: () => s,
        INVITE_OPTIONS_5_TIMES: () => l,
        INVITE_OPTIONS_6_HOURS: () => O,
        INVITE_OPTIONS_7_DAYS: () => m,
        INVITE_OPTIONS_FOREVER: () => P,
        INVITE_OPTIONS_ONCE: () => _,
        INVITE_OPTIONS_UNLIMITED: () => a,
        MAX_AGE_OPTIONS: () => g,
        MAX_USES_OPTIONS: () => T
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
    _ = r(1, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 1 })),
    l = r(5, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 5 })),
    o = r(10, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 10 })),
    I = r(25, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 25 })),
    s = r(50, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 50 })),
    u = r(100, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 100 })),
    T = [a, _, l, o, I, s, u],
    d = r(1800, () => i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 })),
    S = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
    O = r(21600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 })),
    N = r(43200, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 })),
    E = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
    m = r(604800, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 })),
    P = r(0, () => i.intl.string(i.t.PqEzn5)),
    g = [d, S, O, N, E, m, P];
