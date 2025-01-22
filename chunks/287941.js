r.d(n, {
    I: function () {
        return d;
    }
});
var i = r(570140),
    a = r(607070),
    o = r(823961),
    s = r(111810),
    l = r(477931);
let u = () => {
        let e = !0;
        return (e = r(451478).Z.isFocused());
    },
    c = function (e) {
        var n;
        let r =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          x: 0,
                          y: 0,
                          w: 0,
                          h: 0
                      },
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!u()) return;
        let d = s.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti;
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
                                boundingRect: r
                            });
                        });
                }));
    },
    d = function (e) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          x: 0,
                          y: 0,
                          w: 0,
                          h: 0
                      },
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!u()) return;
        let l = s.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti;
        (o.Z.confettiMode || r) &&
            l &&
            !a.Z.useReducedMotion &&
            i.Z.dispatch({
                type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                emoji: e,
                boundingRect: n
            });
    };
n.Z = c;
