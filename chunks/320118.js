r.d(t, { F: () => d });
var n = r(311907),
    a = r(895944),
    l = r(649032),
    s = r(26508),
    i = r(861495);
function d(e) {
    let t = e?.location ?? "useNitroProgramReward",
        r = (0, s.DK)(l.W.NITRO, t),
        { programReward: d, totalDays: u } = (0, n.cf)([a.A], () => ({
            programReward: a.A.getRewardForProgram(l.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(l.W.NITRO),
        }));
    return {
        passesGeneralUIInvariant: (0, i.Q)(d, r),
        passesProgressBarInvariant: (0, i.Y)(d, u, r),
        programReward: d,
        totalDays: u,
    };
}
