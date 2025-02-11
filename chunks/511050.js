n.d(t, {
    Z: () => x,
    l: () => g
});
var i = n(192379),
    s = n(442837),
    l = n(710845),
    r = n(569984),
    a = n(918701),
    o = n(751648),
    c = n(23547),
    d = n(822857),
    u = n(981631),
    h = n(642145);
let m = new l.Z('VirtualCurrency'),
    g = (e) => {
        let { location: t } = e,
            { enabled: n } = (0, d.W)({ location: t }),
            l = (0, s.e7)(
                [r.Z],
                () => {
                    if (!n) return null;
                    let e = r.Z.getQuest(h.V);
                    return null == e ? null : (0, a.LM)(e.config);
                },
                [n]
            ),
            g = (0, i.useCallback)(
                (e) => {
                    if (null == l && !e) {
                        m.warn('Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID '.concat(h.V));
                        return;
                    }
                    (0, c.wH)() ||
                        setTimeout(() => {
                            (0, o.hF)({
                                earnedOrbsQuantity: null != l ? l : 200,
                                dedupeKey: h.V
                            });
                        }, 500);
                },
                [l]
            ),
            x = (0, i.useCallback)(() => {
                (0, c.wH)() && (0, c.jj)();
            }, []);
        return n
            ? {
                  rewardOrbQuantity: l,
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
