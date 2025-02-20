n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: () => T,
        INVITE_OPTIONS_10_TIMES: () => O,
        INVITE_OPTIONS_12_HOURS: () => o,
        INVITE_OPTIONS_1_DAY: () => P,
        INVITE_OPTIONS_1_HOUR: () => S,
        INVITE_OPTIONS_25_TIMES: () => N,
        INVITE_OPTIONS_30_MINUTES: () => a,
        INVITE_OPTIONS_50_TIMES: () => _,
        INVITE_OPTIONS_5_TIMES: () => u,
        INVITE_OPTIONS_6_HOURS: () => E,
        INVITE_OPTIONS_7_DAYS: () => f,
        INVITE_OPTIONS_FOREVER: () => g,
        INVITE_OPTIONS_ONCE: () => l,
        INVITE_OPTIONS_UNLIMITED: () => i,
        MAX_AGE_OPTIONS: () => m,
        MAX_USES_OPTIONS: () => s
    });
var I = n(388032);
function r(e, t) {
    return {
        value: e,
        get label() {
            return t();
        }
    };
}
let i = r(0, () => I.NW.formatToPlainString(I.t['r/IcuL'], { maxUses: 0 })),
    l = r(1, () => I.NW.formatToPlainString(I.t['r/IcuL'], { maxUses: 1 })),
    u = r(5, () => I.NW.formatToPlainString(I.t['r/IcuL'], { maxUses: 5 })),
    O = r(10, () => I.NW.formatToPlainString(I.t['r/IcuL'], { maxUses: 10 })),
    N = r(25, () => I.NW.formatToPlainString(I.t['r/IcuL'], { maxUses: 25 })),
    _ = r(50, () => I.NW.formatToPlainString(I.t['r/IcuL'], { maxUses: 50 })),
    T = r(100, () => I.NW.formatToPlainString(I.t['r/IcuL'], { maxUses: 100 })),
    s = [i, l, u, O, N, _, T],
    a = r(1800, () => I.NW.formatToPlainString(I.t.iXLF9f, { minutes: 30 })),
    S = r(3600, () => I.NW.formatToPlainString(I.t.xCjYxM, { hours: 1 })),
    E = r(21600, () => I.NW.formatToPlainString(I.t.xCjYxM, { hours: 6 })),
    o = r(43200, () => I.NW.formatToPlainString(I.t.xCjYxM, { hours: 12 })),
    P = r(86400, () => I.NW.formatToPlainString(I.t.k2UNz8, { days: 1 })),
    f = r(604800, () => I.NW.formatToPlainString(I.t.k2UNz8, { days: 7 })),
    g = r(0, () => I.NW.string(I.t.PqEzn5)),
    m = [a, S, E, o, P, f, g];
