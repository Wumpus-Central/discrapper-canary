n.d(t, { $: () => A, A: () => O });
var i = n(228366),
    r = n(439372),
    a = n(803224),
    s = n(287809),
    l = n(244284),
    o = n(219893),
    d = n(695515),
    c = n(936926),
    u = n(580296),
    _ = n(513687),
    E = n(375708);
function A() {
    return d.A.isCurrentUserInRestrictedHours();
}
let h = !1,
    I = null,
    f = null,
    p = null;
function T() {
    null != f && (clearTimeout(f), (f = null));
    let e = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (!(0, c.Eq)({ location: "RestrictedHoursManager" }) || !a.A.screenDowntimeReminder) return null;
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
                  if (t !== p) {
                      var n, r;
                      let a, s, d;
                      (n = e.rule),
                          (r = e.startAtMs),
                          (a = E.intl.string(_.default["0JlDg0"])),
                          (s = l.bV[new Date(r).getDay()]),
                          (d = `${(0, o.n1)([s])} ${(0, o.li)(n)}`.trim()),
                          i.h.dispatch({ type: "RESTRICTED_HOURS_WARNING", title: a, subtitle: d }),
                          (p = t);
                  }
              })(e),
              (f = setTimeout(() => {
                  (f = null), T();
              }, 6e4)))
            : (f = setTimeout(
                  () => {
                      (f = null), T();
                  },
                  Math.max(0, (e.minutesUntil - 16) * 6e4),
              )));
}
function m() {
    let e = A();
    e !== h &&
        ((h = e),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: h }),
        h ? (0, u.openRestrictedHoursModal)() : (0, u.k)(),
        T());
}
function g() {
    (h = !1),
        (p = null),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: !1 }),
        (0, u.k)(),
        null != f && (clearTimeout(f), (f = null));
}
function S() {
    m(), T();
}
function N() {
    T();
}
class C extends r.A {
    stores = new Map().set(s.default, S).set(d.A, S);
    actions = {
        POST_CONNECTION_OPEN: S,
        CURRENT_USER_UPDATE: S,
        NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: N,
        LOGOUT: g,
    };
    _initialize() {
        (h = A()),
            i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: h }),
            h && (0, u.openRestrictedHoursModal)(),
            (I = setInterval(m, 6e4)),
            T();
    }
    _terminate() {
        null != I && (clearInterval(I), (I = null)),
            null != f && (clearTimeout(f), (f = null)),
            (p = null),
            (0, u.k)(),
            (h = !1);
    }
}
let O = new C();
