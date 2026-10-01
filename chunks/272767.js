n.d(t, { f: () => o, i: () => l });
var i = n(521169),
    r = n(666113),
    a = n(680091),
    s = n(375708);
function l() {
    return { adult: s.intl.string(s.t.fp3xf5), teen: s.intl.string(s.t.dqC1w2), unverified: s.intl.string(s.t.qiLic6) };
}
function o(e, t) {
    let n = e ? r.Nf : r.nS;
    return (0, i.n)(n)
        ? e
            ? l()
            : {
                  adult: s.intl.formatToPlainString(a.default.iK0n30, { guildName: t }),
                  teen: s.intl.formatToPlainString(a.default.ezJA0R, { guildName: t }),
                  unverified: s.intl.formatToPlainString(a.default.h4HbnI, { guildName: t }),
              }
        : null;
}
