"use strict";
n.d(t, { $: () => f, A: () => N });
var i = n(228366),
    r = n(439372),
    s = n(287809),
    a = n(244284),
    o = n(219893),
    l = n(695515),
    u = n(936926),
    c = n(580296),
    d = n(602339),
    _ = n(375708);
function f() {
    return l.A.isCurrentUserInRestrictedHours();
}
let h = !1,
    p = null,
    E = null,
    m = null;
function g() {
    null != E && (clearTimeout(E), (E = null));
    let e = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
        if (!(0, u.Eq)({ location: "RestrictedHoursManager" })) return null;
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
                  if (t !== m) {
                      var n, r;
                      let s, l, u;
                      (n = e.rule),
                          (r = e.startAtMs),
                          (s = _.intl.string(d.default["0JlDg0"])),
                          (l = a.bV[new Date(r).getDay()]),
                          (u = `${(0, o.n1)([l])} ${(0, o.li)(n)}`.trim()),
                          i.h.dispatch({ type: "RESTRICTED_HOURS_WARNING", title: s, subtitle: u }),
                          (m = t);
                  }
              })(e),
              (E = setTimeout(() => {
                  (E = null), g();
              }, 6e4)))
            : (E = setTimeout(
                  () => {
                      (E = null), g();
                  },
                  Math.max(0, (e.minutesUntil - 16) * 6e4),
              )));
}
function A() {
    let e = f();
    e !== h &&
        ((h = e),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: h }),
        h ? (0, c.openRestrictedHoursModal)() : (0, c.k)(),
        g());
}
function I() {
    (h = !1),
        (m = null),
        i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: !1 }),
        (0, c.k)(),
        null != E && (clearTimeout(E), (E = null));
}
function T() {
    A(), g();
}
class S extends r.A {
    stores = new Map().set(s.default, T).set(l.A, T);
    actions = { POST_CONNECTION_OPEN: T, CURRENT_USER_UPDATE: T, LOGOUT: I };
    _initialize() {
        (h = f()),
            i.h.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: h }),
            h && (0, c.openRestrictedHoursModal)(),
            (p = setInterval(A, 6e4)),
            g();
    }
    _terminate() {
        null != p && (clearInterval(p), (p = null)),
            null != E && (clearTimeout(E), (E = null)),
            (m = null),
            (0, c.k)(),
            (h = !1);
    }
}
let N = new S();
