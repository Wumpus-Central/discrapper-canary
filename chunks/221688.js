n.d(t, {
    X8: () => u,
    dB: () => d,
    gr: () => c,
});
var r = n(554146),
    i = n(826673),
    a = n(103411),
    s = n(664654),
    o = n(985018);
let l = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: r } = e;
        return t
            ? o.intl.format(o.t["TYu+MH"], {
                  helpdeskArticle: r,
              })
            : o.intl.format(o.t["omMr+V"], {
                  helpdeskArticle: r,
              });
    },
    c = () => {
        let e = (0, a.m)(),
            t = (0, i.JZ)(r.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return e && !t;
    },
    u = (e) => {
        let { hasSentAll: t } = e;
        return o.intl.string(o.t.USo4s7);
    },
    d = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return l({
            hasSentAll: n.sent >= s.Z,
            hasSentAtLeastOne: n.sent >= 1,
            helpdeskArticle: t,
        });
    };
