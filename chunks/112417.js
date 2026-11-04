var i = n(484051),
    r = n(961943),
    a = n(124616),
    s = n(792996);
function l() {
    return { adult: s.intl.string(s.t.fp3xf5), teen: s.intl.string(s.t.dqC1w2), unverified: s.intl.string(s.t.qiLic6) };
}
n.d(
    t,
    {},
    {
        f: function (e, t) {
            let n = e ? r.Vg : r.nb;
            return (0, i.n)(n)
                ? e
                    ? l()
                    : {
                          adult: s.intl.formatToPlainString(a.default.iK0n30, { guildName: t }),
                          teen: s.intl.formatToPlainString(a.default.ezJA0R, { guildName: t }),
                          unverified: s.intl.formatToPlainString(a.default.h4HbnI, { guildName: t }),
                      }
                : null;
        },
        i: l,
    },
);
