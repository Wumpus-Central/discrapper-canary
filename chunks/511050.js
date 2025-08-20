n.d(t, {
    Z: () => h,
    l: () => p,
});
var r = n(647438),
    i = n(442837),
    a = n(710845),
    o = n(509212),
    s = n(569984),
    l = n(751648),
    c = n(23547),
    u = n(822857),
    d = n(981631),
    f = n(46140);
let _ = new a.Z("VirtualCurrency"),
    p = (e) => {
        let { location: t } = e,
            { enabled: n } = (0, u.WX)({ location: t }),
            a = (0, i.e7)([s.Z], () => {
                if (!n) return null;
                let e = s.Z.getQuest(f.V6);
                return null == e ? null : (0, o.LM)(e.config);
            }, [n]),
            p = (0, r.useCallback)(
                (e) => {
                    let { forceOpen: t, delayMS: n = 500 } = e;
                    if (null == a && !t)
                        return void _.warn(
                            "Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID ".concat(
                                f.V6,
                            ),
                        );
                    if (!(0, c.wH)()) {
                        let e = () =>
                            (0, l.hF)({
                                earnedOrbsQuantity: null != a ? a : 200,
                                dedupeKey: t ? void 0 : f.V6,
                            });
                        if (void 0 === n || 0 === n) return void e();
                        setTimeout(() => {
                            e();
                        }, n);
                    }
                },
                [a],
            ),
            h = (0, r.useCallback)(() => {
                (0, c.wH)() && (0, c.jj)();
            }, []);
        return n
            ? {
                  rewardOrbQuantity: a,
                  openIntroToOrbsClaimedCoachmark: p,
                  closeIntroToOrbsClaimedCoachmark: h,
              }
            : {
                  rewardOrbQuantity: void 0,
                  openIntroToOrbsClaimedCoachmark: d.dG4,
                  closeIntroToOrbsClaimedCoachmark: d.dG4,
              };
    },
    h = p;
