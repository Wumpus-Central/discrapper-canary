n.d(t, { k: () => h });
var r = n(855986),
    s = n(851746),
    i = n(975571),
    a = n(326084),
    c = n(197630),
    l = n(664654);
n(232198);
var d = n(652215),
    o = n(792996),
    u = n(879416);
function h() {
    let e,
        t,
        n,
        { location: h = "PremiumNitroHomeReferralBanner" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { referralSentUsers: f } = (0, l.J)(),
        m = (0, r.bG)([s.A], () => s.A.getRecipientStatus()),
        b = !1 !== (0, r.bG)([s.A], () => s.A.getHasEligibleFriends()),
        { isEligibleForIncentive: p, referralRewardType: A, useAltReferralCardArt: R } = (0, u.x)({ location: h }),
        S = p ? A : null,
        x =
            ((e = 0),
            (t = 0),
            (n = 0),
            m.forEach((r) => {
                r === a.aK.REFERRER_REWARD_GRANTED
                    ? (e++, t++, n++)
                    : r === a.aK.CONVERTED
                      ? (t++, n++)
                      : r === a.aK.REDEEMED && n++;
            }),
            { numRewardGranted: e, numConverted: t, numRedeemed: n, numSent: m.size }),
        v = 3 === m.size,
        g = (function (e, t, n) {
            let r = i.A.getArticleURL(d.MVz.REFERRAL_PROGRAM);
            if (!e) return o.intl.format(o.t["zWhX/Q"], { helpdeskArticle: r });
            if (null != n)
                return 3 === t.numRewardGranted
                    ? n === c.xb.ORBS
                        ? o.intl.format(o.t.OluhLp, { helpdeskArticle: r })
                        : o.intl.format(o.t["8BYihN"], { helpdeskArticle: r })
                    : 3 === t.numSent
                      ? n === c.xb.ORBS
                          ? o.intl.format(o.t["1aV1j9"], { helpdeskArticle: r })
                          : o.intl.format(o.t.QNrPuS, { helpdeskArticle: r })
                      : e
                        ? n === c.xb.ORBS
                            ? o.intl.format(o.t.cfE0uG, { numOrbs: 5e3, helpdeskArticle: r })
                            : o.intl.format(o.t["+fcvlI"], { helpdeskArticle: r })
                        : o.intl.format(o.t["a0+Jwv"], { helpdeskArticle: r });
            return 3 === t.numSent
                ? 3 === t.numRedeemed
                    ? o.intl.format(o.t["1aEjsH"], { helpdeskArticle: r })
                    : o.intl.format(o.t["+u3AOO"], { helpdeskArticle: r })
                : o.intl.format(o.t["omMr+V"], { helpdeskArticle: r });
        })(b, x, S),
        E =
            S === c.xb.ORBS
                ? o.intl.string(o.t.tAlkl4)
                : S === c.xb.DISCOUNT
                  ? o.intl.formatToPlainString(o.t["/JJ9I5"], { discountPercent: 30 })
                  : o.intl.string(o.t.USo4s7),
        O = S === c.xb.ORBS && 3 === x.numSent && x.numConverted >= 1;
    return {
        referralSentUsers: f,
        nReferralsSent: x.numSent,
        hasEligibleFriends: b,
        allSent: v,
        headingText: E,
        bodyText: g,
        referralStatus: x,
        isEligibleForIncentive: p,
        referralIncentiveRewardType: S,
        useAltReferralCardArt: R,
        shouldShowSpendOrbsCta: O,
    };
}
