r.d(t, {
    Z: () => O,
    l: () => h
});
var n = r(73800),
    a = r(442837),
    l = r(710845),
    i = r(509212),
    o = r(569984),
    u = r(751648),
    c = r(23547),
    s = r(822857),
    d = r(981631),
    b = r(46140);
let f = new l.Z('VirtualCurrency'),
    h = (e) => {
        let { location: t } = e,
            { enabled: r } = (0, s.WX)({ location: t }),
            l = (0, a.e7)(
                [o.Z],
                () => {
                    if (!r) return null;
                    let e = o.Z.getQuest(b.V6);
                    return null == e ? null : (0, i.LM)(e.config);
                },
                [r]
            ),
            h = (0, n.useCallback)(
                (e) => {
                    let { forceOpen: t, delayMS: r = 500 } = e;
                    if (null == l && !t) return void f.warn('Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID '.concat(b.V6));
                    if (!(0, c.wH)()) {
                        let e = () =>
                            (0, u.hF)({
                                earnedOrbsQuantity: null != l ? l : 200,
                                dedupeKey: t ? void 0 : b.V6
                            });
                        if (void 0 === r || 0 === r) return void e();
                        setTimeout(() => {
                            e();
                        }, r);
                    }
                },
                [l]
            ),
            O = (0, n.useCallback)(() => {
                (0, c.wH)() && (0, c.jj)();
            }, []);
        return r
            ? {
                  rewardOrbQuantity: l,
                  openIntroToOrbsClaimedCoachmark: h,
                  closeIntroToOrbsClaimedCoachmark: O
              }
            : {
                  rewardOrbQuantity: void 0,
                  openIntroToOrbsClaimedCoachmark: d.dG4,
                  closeIntroToOrbsClaimedCoachmark: d.dG4
              };
    },
    O = h;
