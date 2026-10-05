n.d(t, { k: () => f });
var r = n(17928),
    s = n(851746),
    i = n(975571),
    l = n(326084),
    a = n(197630),
    c = n(664654);
n(232198);
var d = n(652215),
    o = n(375708),
    u = n(879416);
function f() {
    let e,
        t,
        n,
        { location: f = "PremiumNitroHomeReferralBanner" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { referralSentUsers: h } = (0, c.J)(),
        m = (0, r.bG)([s.A], () => s.A.getRecipientStatus()),
        b = !1 !== (0, r.bG)([s.A], () => s.A.getHasEligibleFriends()),
        { isEligibleForIncentive: p, referralRewardType: A, useAltReferralCardArt: R } = (0, u.x)({ location: f }),
        S = p ? A : null,
        x =
            ((e = 0),
            (t = 0),
            (n = 0),
            m.forEach((r) => {
                r === l.aK.REFERRER_REWARD_GRANTED
                    ? (e++, t++, n++)
                    : r === l.aK.CONVERTED
                      ? (t++, n++)
                      : r === l.aK.REDEEMED && n++;
            }),
            { numRewardGranted: e, numConverted: t, numRedeemed: n, numSent: m.size }),
        v = m.size === c.Z,
        g = (function (e, t, n) {
            let r = i.A.getArticleURL(d.MVz.REFERRAL_PROGRAM);
            if (!e) return o.intl.format(o.t["zWhX/Q"], { helpdeskArticle: r });
            if (null != n)
                return t.numRewardGranted === c.Z
                    ? n === a.xb.ORBS
                        ? o.intl.format(o.t.OluhLp, { helpdeskArticle: r })
                        : o.intl.format(o.t["8BYihN"], { helpdeskArticle: r })
                    : t.numSent === c.Z
                      ? n === a.xb.ORBS
                          ? o.intl.format(o.t["1aV1j9"], { helpdeskArticle: r })
                          : o.intl.format(o.t.QNrPuS, { helpdeskArticle: r })
                      : e
                        ? n === a.xb.ORBS
                            ? o.intl.format(o.t.cfE0uG, { numOrbs: 5e3, helpdeskArticle: r })
                            : o.intl.format(o.t["+fcvlI"], { helpdeskArticle: r })
                        : o.intl.format(o.t["a0+Jwv"], { helpdeskArticle: r });
            return t.numSent === c.Z
                ? t.numRedeemed === c.Z
                    ? o.intl.format(o.t["1aEjsH"], { helpdeskArticle: r })
                    : o.intl.format(o.t["+u3AOO"], { helpdeskArticle: r })
                : o.intl.format(o.t["omMr+V"], { helpdeskArticle: r });
        })(b, x, S),
        E =
            S === a.xb.ORBS
                ? o.intl.string(o.t.tAlkl4)
                : S === a.xb.DISCOUNT
                  ? o.intl.formatToPlainString(o.t["/JJ9I5"], { discountPercent: 30 })
                  : o.intl.string(o.t.USo4s7),
        O = S === a.xb.ORBS && x.numSent === c.Z && x.numConverted >= 1;
    return {
        referralSentUsers: h,
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
