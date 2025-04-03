I.r(t),
    I.d(t, {
        INVITE_OPTIONS_100_TIMES: () => T,
        INVITE_OPTIONS_10_TIMES: () => u,
        INVITE_OPTIONS_12_HOURS: () => P,
        INVITE_OPTIONS_1_DAY: () => f,
        INVITE_OPTIONS_1_HOUR: () => S,
        INVITE_OPTIONS_25_TIMES: () => N,
        INVITE_OPTIONS_30_MINUTES: () => s,
        INVITE_OPTIONS_50_TIMES: () => _,
        INVITE_OPTIONS_5_TIMES: () => l,
        INVITE_OPTIONS_6_HOURS: () => E,
        INVITE_OPTIONS_7_DAYS: () => g,
        INVITE_OPTIONS_8_HOURS: () => o,
        INVITE_OPTIONS_FOREVER: () => m,
        INVITE_OPTIONS_ONCE: () => O,
        INVITE_OPTIONS_UNLIMITED: () => i,
        MAX_AGE_OPTIONS: () => d,
        MAX_USES_OPTIONS: () => a
    });
var n = I(388032);
function r(e, t) {
    return {
        value: e,
        get label() {
            return t();
        }
    };
}
let i = r(0, () => n.NW.formatToPlainString(n.t['r/IcuL'], { maxUses: 0 })),
    O = r(1, () => n.NW.formatToPlainString(n.t['r/IcuL'], { maxUses: 1 })),
    l = r(5, () => n.NW.formatToPlainString(n.t['r/IcuL'], { maxUses: 5 })),
    u = r(10, () => n.NW.formatToPlainString(n.t['r/IcuL'], { maxUses: 10 })),
    N = r(25, () => n.NW.formatToPlainString(n.t['r/IcuL'], { maxUses: 25 })),
    _ = r(50, () => n.NW.formatToPlainString(n.t['r/IcuL'], { maxUses: 50 })),
    T = r(100, () => n.NW.formatToPlainString(n.t['r/IcuL'], { maxUses: 100 })),
    a = [i, O, l, u, N, _, T],
    s = r(1800, () => n.NW.formatToPlainString(n.t.iXLF9f, { minutes: 30 })),
    S = r(3600, () => n.NW.formatToPlainString(n.t.xCjYxM, { hours: 1 })),
    E = r(21600, () => n.NW.formatToPlainString(n.t.xCjYxM, { hours: 6 })),
    o = r(28800, () => n.NW.formatToPlainString(n.t.xCjYxM, { hours: 8 })),
    P = r(43200, () => n.NW.formatToPlainString(n.t.xCjYxM, { hours: 12 })),
    f = r(86400, () => n.NW.formatToPlainString(n.t.k2UNz8, { days: 1 })),
    g = r(604800, () => n.NW.formatToPlainString(n.t.k2UNz8, { days: 7 })),
    m = r(0, () => n.NW.string(n.t.PqEzn5)),
    d = [s, S, E, P, f, g, m];
