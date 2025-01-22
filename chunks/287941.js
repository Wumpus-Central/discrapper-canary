r.d(n, {
    I: function () {
        return c;
    }
});
var i = r(570140),
    a = r(607070),
    o = r(823961),
    s = r(111810),
    l = r(477931);
let u = function (e) {
        var n;
        let u =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          x: 0,
                          y: 0,
                          w: 0,
                          h: 0
                      },
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = s.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti,
            f = !0;
        if (!!(f = r(451478).Z.isFocused()))
            (o.Z.confettiMode || c) &&
                d &&
                !a.Z.useReducedMotion &&
                (null === (n = e.potions) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        e.type === l.B.CONFETTI &&
                            e.emoji.forEach((e) => {
                                i.Z.dispatch({
                                    type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                                    emoji: e,
                                    boundingRect: u
                                });
                            });
                    }));
    },
    c = function (e) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          x: 0,
                          y: 0,
                          w: 0,
                          h: 0
                      },
            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            u = s.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti,
            c = !0;
        if (!!(c = r(451478).Z.isFocused()))
            (o.Z.confettiMode || l) &&
                u &&
                !a.Z.useReducedMotion &&
                i.Z.dispatch({
                    type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                    emoji: e,
                    boundingRect: n
                });
    };
n.Z = u;
