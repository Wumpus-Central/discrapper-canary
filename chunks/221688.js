n.d(t, {
    X8: () => c,
    dB: () => d,
    gr: () => o,
});
var r = n(554146),
    i = n(826673),
    l = n(103411),
    s = n(664654),
    a = n(985018);
let o = () => {
        let e = (0, l.m)(),
            t = (0, i.JZ)(r.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return e && !t;
    },
    c = (e) => {
        let { hasSentAll: t } = e;
        return a.intl.string(a.t.USo4s7);
    },
    d = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return ((e) => {
            let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: r } = e;
            return t
                ? a.intl.format(a.t["TYu+MH"], {
                      helpdeskArticle: r,
                  })
                : a.intl.format(a.t["omMr+V"], {
                      helpdeskArticle: r,
                  });
        })({
            hasSentAll: n.sent >= s.Z,
            hasSentAtLeastOne: n.sent >= 1,
            helpdeskArticle: t,
        });
    };
