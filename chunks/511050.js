n.d(t, {
    Z: () => x,
    l: () => g
});
var i = n(192379),
    s = n(442837),
    r = n(710845),
    l = n(569984),
    a = n(918701),
    o = n(751648),
    c = n(23547),
    d = n(822857),
    u = n(981631),
    m = n(642145);
let h = new r.Z('VirtualCurrency'),
    g = (e) => {
        let { location: t } = e,
            { enabled: n } = (0, d.W)({ location: t }),
            r = (0, s.e7)(
                [l.Z],
                () => {
                    if (!n) return null;
                    let e = l.Z.getQuest(m.V);
                    return null == e ? null : (0, a.LM)(e.config);
                },
                [n]
            ),
            g = (0, i.useCallback)(
                (e) => {
                    if (null == r && !e) {
                        h.warn('Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID '.concat(m.V));
                        return;
                    }
                    (0, c.wH)() ||
                        setTimeout(() => {
                            (0, o.hF)({
                                earnedOrbsQuantity: null != r ? r : 200,
                                dedupeKey: e ? void 0 : m.V
                            });
                        }, 500);
                },
                [r]
            ),
            x = (0, i.useCallback)(() => {
                (0, c.wH)() && (0, c.jj)();
            }, []);
        return n
            ? {
                  rewardOrbQuantity: r,
                  openIntroToOrbsClaimedCoachmark: g,
                  closeIntroToOrbsClaimedCoachmark: x
              }
            : {
                  rewardOrbQuantity: void 0,
                  openIntroToOrbsClaimedCoachmark: u.dG4,
                  closeIntroToOrbsClaimedCoachmark: u.dG4
              };
    },
    x = 12633 == n.j ? g : null;
