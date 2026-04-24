s.d(t, { F: () => c });
var n = s(17928),
    a = s(166403),
    r = s(532309),
    l = s(636592),
    i = s(26508),
    d = s(673608),
    o = s(861495);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        s = (0, i.DK)(l.W.NITRO, t),
        {
            isReady: c,
            programReward: u,
            totalDays: m,
        } = (0, n.cf)([r.A], () => ({
            isReady: r.A.isReady(),
            programReward: r.A.getRewardForProgram(l.W.NITRO),
            totalDays: r.A.getTotalDaysInDuration(l.W.NITRO),
        })),
        h = (0, n.bG)([a.A], () => a.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        x = (0, d.q)(),
        C = (0, o.Q)(u, s),
        p = (0, o.Y)(u, m, s);
    return {
        isEligible: s,
        isReady: c,
        passesGeneralUIInvariant: C,
        passesProgressBarInvariant: p,
        programReward: u,
        shouldFetch: x,
        totalDays: m,
        wouldBeEligibleForNitroOrbsButIsExternalSub: s && h,
    };
}
