var i = r(570140),
    a = r(111810),
    s = r(477931);
let o = (e) => {
    var n;
    a.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti &&
        (null === (n = e.potions) ||
            void 0 === n ||
            n.forEach((e) => {
                e.type === s.B.CONFETTI &&
                    e.emoji.forEach((e) => {
                        i.Z.dispatch({
                            type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                            emoji: e
                        });
                    });
            }));
};
n.Z = o;
