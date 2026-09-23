n.d(t, { $: () => E, A: () => C });
var i = n(228366),
    r = n(439372),
    a = n(803224),
    s = n(287809),
    l = n(244284),
    o = n(219893),
    d = n(695515),
    c = n(580296),
    u = n(513687),
    _ = n(375708);
function E() {
    return d.A.isCurrentUserInRestrictedHours();
}
let A = !1,
    h = null,
    I = null,
    f = null;
function p() {
    null != I && (clearTimeout(I), (I = null));
    let e = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (!a.A.screenDowntimeReminder) return null;
        let t = s.default.getCurrentUser()?.restrictedSchedule;
        if (null == t) return null;
        let n = t.getNextStartInfo(e);
        return null == n
            ? null
            : {
                  minutesUntil: n.minutesUntil,
                  startAtMs: new Date(e).setSeconds(0, 0) + 60 * n.minutesUntil * 1e3,
                  rule: n.rule,
              };
    })();
    null != e &&
        (e.minutesUntil <= 16
            ? (!(function (e) {
                  let t = `${e.rule.ruleId}:${e.startAtMs}`;
                  if (t !== f) {
                      var n, r;
                      let a, s, d;
                      ((n = e.rule),
                          (r = e.startAtMs),
                          (a = _.intl.string(u.default["0JlDg0"])),
                          (s = l.bV[new Date(r).getDay()]),
                          (d = `${(0, o.n1)([s])} ${(0, o.li)(n)}`.trim()),
                          i.h.dispatch({ type: "RESTRICTED_HOURS_WARNING", title: a, subtitle: d }),
                          (f = t));
                  }
              })(e),
              (I = setTimeout(() => {
                  ((I = null), p());
              }, 6e4)))
            : (I = setTimeout(
                  () => {
                      ((I = null), p());
                  },
                  Math.max(0, (e.minutesUntil - 16) * 6e4),
              )));
}
function T() {
    let e = E();
    e !== A &&
        ((A = e),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: A }),
        A ? (0, c.openRestrictedHoursModal)() : (0, c.k)(),
        p());
}
function m() {
    ((A = !1),
        (f = null),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: !1 }),
        (0, c.k)(),
        null != I && (clearTimeout(I), (I = null)));
}
function g() {
    (T(), p());
}
function S() {
    p();
}
class N extends r.A {
    stores = new Map().set(s.default, g).set(d.A, g);
    actions = {
        POST_CONNECTION_OPEN: g,
        CURRENT_USER_UPDATE: g,
        NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: S,
        LOGOUT: m,
    };
    _initialize() {
        ((A = E()),
            i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: A }),
            A && (0, c.openRestrictedHoursModal)(),
            (h = setInterval(T, 6e4)),
            p());
    }
    _terminate() {
        (null != h && (clearInterval(h), (h = null)),
            null != I && (clearTimeout(I), (I = null)),
            (f = null),
            (0, c.k)(),
            (A = !1));
    }
}
let C = new N();
