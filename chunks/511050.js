n.d(t, {
    Z: () => h,
    l: () => p
});
var r = n(192379),
    i = n(442837),
    s = n(710845),
    a = n(569984),
    l = n(918701),
    o = n(751648),
    c = n(23547),
    d = n(822857),
    u = n(981631),
    m = n(642145);
let g = new s.Z('VirtualCurrency'),
    p = (e) => {
        let { location: t } = e,
            { enabled: n } = (0, d.W)({ location: t }),
            s = (0, i.e7)(
                [a.Z],
                () => {
                    if (!n) return null;
                    let e = a.Z.getQuest(m.V);
                    return null == e ? null : (0, l.LM)(e.config);
                },
                [n]
            ),
            p = (0, r.useCallback)(
                (e) => {
                    if (null == s && !e) {
                        g.warn('Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID '.concat(m.V));
                        return;
                    }
                    (0, c.wH)() ||
                        setTimeout(() => {
                            (0, o.hF)({
                                earnedOrbsQuantity: null != s ? s : 200,
                                dedupeKey: e ? void 0 : m.V
                            });
                        }, 500);
                },
                [s]
            ),
            h = (0, r.useCallback)(() => {
                (0, c.wH)() && (0, c.jj)();
            }, []);
        return n
            ? {
                  rewardOrbQuantity: s,
                  openIntroToOrbsClaimedCoachmark: p,
                  closeIntroToOrbsClaimedCoachmark: h
              }
            : {
                  rewardOrbQuantity: void 0,
                  openIntroToOrbsClaimedCoachmark: u.dG4,
                  closeIntroToOrbsClaimedCoachmark: u.dG4
              };
    },
    h = 12633 == n.j ? p : null;
