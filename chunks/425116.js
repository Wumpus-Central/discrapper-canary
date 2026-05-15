"use strict";
n.d(t, { $: () => h, A: () => C });
var i = n(228366),
    r = n(439372),
    s = n(803224),
    a = n(287809),
    o = n(244284),
    l = n(219893),
    u = n(695515),
    c = n(936926),
    d = n(580296),
    _ = n(602339),
    f = n(375708);
function h() {
    return u.A.isCurrentUserInRestrictedHours();
}
let p = !1,
    E = null,
    m = null,
    g = null;
function A() {
    null != m && (clearTimeout(m), (m = null));
    let e = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (!(0, c.Eq)({ location: "RestrictedHoursManager" }) || !s.A.screenDowntimeReminder) return null;
        let t = a.default.getCurrentUser()?.restrictedSchedule;
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
                  if (t !== g) {
                      var n, r;
                      let s, a, u;
                      (n = e.rule),
                          (r = e.startAtMs),
                          (s = f.intl.string(_.default["0JlDg0"])),
                          (a = o.bV[new Date(r).getDay()]),
                          (u = `${(0, l.n1)([a])} ${(0, l.li)(n)}`.trim()),
                          i.h.dispatch({ type: "RESTRICTED_HOURS_WARNING", title: s, subtitle: u }),
                          (g = t);
                  }
              })(e),
              (m = setTimeout(() => {
                  (m = null), A();
              }, 6e4)))
            : (m = setTimeout(
                  () => {
                      (m = null), A();
                  },
                  Math.max(0, (e.minutesUntil - 16) * 6e4),
              )));
}
function I() {
    let e = h();
    e !== p &&
        ((p = e),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: p }),
        p ? (0, d.openRestrictedHoursModal)() : (0, d.k)(),
        A());
}
function T() {
    (p = !1),
        (g = null),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: !1 }),
        (0, d.k)(),
        null != m && (clearTimeout(m), (m = null));
}
function S() {
    I(), A();
}
function N() {
    A();
}
class y extends r.A {
    stores = new Map().set(a.default, S).set(u.A, S);
    actions = {
        POST_CONNECTION_OPEN: S,
        CURRENT_USER_UPDATE: S,
        NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: N,
        LOGOUT: T,
    };
    _initialize() {
        (p = h()),
            i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: p }),
            p && (0, d.openRestrictedHoursModal)(),
            (E = setInterval(I, 6e4)),
            A();
    }
    _terminate() {
        null != E && (clearInterval(E), (E = null)),
            null != m && (clearTimeout(m), (m = null)),
            (g = null),
            (0, d.k)(),
            (p = !1);
    }
}
let C = new y();
