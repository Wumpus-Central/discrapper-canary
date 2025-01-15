var i = r(570140),
    a = r(607070),
    s = r(111810),
    o = r(477931);
let l = function (e) {
    var n;
    let r =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                  x: 0,
                  y: 0,
                  w: 0,
                  h: 0
              };
    s.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti &&
        !a.Z.useReducedMotion &&
        (null === (n = e.potions) ||
            void 0 === n ||
            n.forEach((e) => {
                e.type === o.B.CONFETTI &&
                    e.emoji.forEach((e) => {
                        i.Z.dispatch({
                            type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                            emoji: e,
                            boundingRect: r
                        });
                    });
            }));
};
n.Z = l;
