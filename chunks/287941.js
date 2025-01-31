n.d(t, {
    I: () => f,
    Z: () => h
});
var i = n(570140),
    r = n(607070),
    a = n(626135),
    s = n(823961),
    o = n(992970),
    l = n(111810),
    u = n(235894),
    c = n(981631);
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
            r = arguments.length > 3 ? arguments[3] : void 0;
        if (!d()) return;
        let s = null == e.id,
            { shouldPlay: l, failureReason: u } = p(n);
        a.default.track(c.rMx.CONFETTI_POTION_TRIGGERED, {
            emoji_type: s ? o.aK.Unicode : o.aK.UserCreated,
            will_play: l,
            failure_reason: u,
            location: r
        }),
            l &&
                i.Z.dispatch({
                    type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                    emoji: e,
                    boundingRect: t
                });
    },
    _ = (e, t) => {
        let n = l.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti;
        return s.Z.confettiMode || t
            ? n
                ? r.Z.useReducedMotion
                    ? {
                          shouldPlay: !1,
                          failureReason: o.U0.ReducedMotion
                      }
                    : null == (0, u.Eq)(e)
                      ? {
                            shouldPlay: !1,
                            failureReason: o.U0.NoValidPotion
                        }
                      : {
                            shouldPlay: !0,
                            failureReason: o.U0.None
                        }
                : {
                      shouldPlay: !1,
                      failureReason: o.U0.NotInExperiment
                  }
            : {
                  shouldPlay: !1,
                  failureReason: o.U0.NotInConfettiMode
              };
    },
    p = (e) => {
        let t = l.HZ.getCurrentConfig({ location: 'TriggerConfetti' }, { autoTrackExposure: !1 }).canSeeConfetti;
        return s.Z.confettiMode || e
            ? t
                ? r.Z.useReducedMotion
                    ? {
                          shouldPlay: !1,
                          failureReason: o.U0.ReducedMotion
                      }
                    : {
                          shouldPlay: !0,
                          failureReason: o.U0.None
                      }
                : {
                      shouldPlay: !1,
                      failureReason: o.U0.NotInExperiment
                  }
            : {
                  shouldPlay: !1,
                  failureReason: o.U0.NotInConfettiMode
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
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0;
        if (!d()) return;
        let l = (0, u.Eq)(e),
            f = (null == l ? void 0 : null === (t = l.emoji) || void 0 === t ? void 0 : t[0].id) == null,
            { shouldPlay: p, failureReason: h } = _(e, r);
        a.default.track(c.rMx.CONFETTI_POTION_TRIGGERED, {
            emoji_type: f ? o.aK.Unicode : o.aK.UserCreated,
            will_play: p,
            failure_reason: h,
            location: s
        }),
            p &&
                null != l &&
                l.emoji.forEach((e) => {
                    i.Z.dispatch({
                        type: 'POTIONS_TRIGGER_MESSAGE_CONFETTI',
                        emoji: e,
                        boundingRect: n
                    });
                });
    };
