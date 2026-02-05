n.d(t, { X8: () => c, dB: () => d, gr: () => o });
var i = n(554146),
    s = n(826673),
    r = n(103411),
    a = n(664654),
    l = n(985018);
let o = () => {
        let e = (0, r.m)(),
            t = (0, s.JZ)(i.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return e && !t;
    },
    c = (e) => {
        let { hasSentAll: t } = e;
        return l.intl.string(l.t.USo4s7);
    },
    d = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return ((e) => {
            let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
            return t
                ? l.intl.format(l.t["TYu+MH"], { helpdeskArticle: i })
                : l.intl.format(l.t["omMr+V"], { helpdeskArticle: i });
        })({ hasSentAll: n.sent >= a.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
    };
