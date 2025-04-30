n.d(t, {
    I: () => f,
    Z: () => h
});
var r = n(570140),
    i = n(607070),
    o = n(626135),
    a = n(823961),
    s = n(992970),
    l = n(111810),
    c = n(235894),
    u = n(981631);
let d = () => {
        let e = !0;
        return n(451478).Z.isFocused();
    },
    f = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          x: 0,
                          y: 0,
                          w: 0,
                          h: 0
                      },
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        if (!d()) return;
        let a = null == e.id,
            { shouldPlay: l, failureReason: c } = p(n);
        o.default.track(u.rMx.CONFETTI_POTION_TRIGGERED, {
            emoji_type: a ? s.aK.Unicode : s.aK.UserCreated,
            will_play: l,
            failure_reason: c,
            location: i
        }),
            l &&
                r.Z.dispatch({
                    type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                    emoji: e,
                    boundingRect: t
                });
    },
    _ = (e, t) => {
        let n = l.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti;
        return a.Z.confettiMode || t
            ? n
                ? i.Z.useReducedMotion
                    ? {
                          shouldPlay: !1,
                          failureReason: s.U0.ReducedMotion
                      }
                    : null == (0, c.Eq)(e)
                      ? {
                            shouldPlay: !1,
                            failureReason: s.U0.NoValidPotion
                        }
                      : {
                            shouldPlay: !0,
                            failureReason: s.U0.None
                        }
                : {
                      shouldPlay: !1,
                      failureReason: s.U0.NotInExperiment
                  }
            : {
                  shouldPlay: !1,
                  failureReason: s.U0.NotInConfettiMode
              };
    },
    p = (e) => {
        let t = l.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti;
        return a.Z.confettiMode || e
            ? t
                ? i.Z.useReducedMotion
                    ? {
                          shouldPlay: !1,
                          failureReason: s.U0.ReducedMotion
                      }
                    : {
                          shouldPlay: !0,
                          failureReason: s.U0.None
                      }
                : {
                      shouldPlay: !1,
                      failureReason: s.U0.NotInExperiment
                  }
            : {
                  shouldPlay: !1,
                  failureReason: s.U0.NotInConfettiMode
              };
    },
    h = function (e) {
        var t;
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          x: 0,
                          y: 0,
                          w: 0,
                          h: 0
                      },
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0;
        if (!d()) return;
        let l = (0, c.Eq)(e),
            f = (null == l || null == (t = l.emoji) ? void 0 : t[0].id) == null,
            { shouldPlay: p, failureReason: h } = _(e, i);
        o.default.track(u.rMx.CONFETTI_POTION_TRIGGERED, {
            emoji_type: f ? s.aK.Unicode : s.aK.UserCreated,
            will_play: p,
            failure_reason: h,
            location: a
        }),
            p &&
                null != l &&
                l.emoji.forEach((e) => {
                    r.Z.dispatch({
                        type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                        emoji: e,
                        boundingRect: n
                    });
                });
    };
