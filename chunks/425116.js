"use strict";
n.d(t, { $: () => p, A: () => R });
var r = n(73153),
    i = n(439372),
    s = n(287809),
    a = n(219893),
    o = n(695515),
    l = n(936926),
    u = n(390660),
    c = n(602339),
    d = n(985018);
let _ = 6e4,
    f = 16;
function p() {
    return o.A.isCurrentUserInRestrictedHours();
}
function h(e) {
    let t = d.intl.string(c.default["0JlDg0"]),
        n = `${(0, a.n1)(e.days)} ${(0, a.li)(e)}`.trim();
    r.h.dispatch({ type: "RESTRICTED_HOURS_WARNING", title: t, subtitle: n });
}
let m = !1,
    E = null,
    g = null,
    A = null;
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
    if (!(0, l.Eq)({ location: "RestrictedHoursManager" })) return null;
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
}
function T(e) {
    let t = `${e.rule.ruleId}:${e.startAtMs}`;
    t !== A && (h(e.rule), (A = t));
}
function S() {
    null != g && (clearTimeout(g), (g = null));
    let e = I();
    null != e &&
        (e.minutesUntil <= f
            ? (T(e),
              (g = setTimeout(() => {
                  (g = null), S();
              }, _)))
            : (g = setTimeout(
                  () => {
                      (g = null), S();
                  },
                  Math.max(0, (e.minutesUntil - f) * 6e4),
              )));
}
function y() {
    let e = p();
    e !== m && ((m = e) ? (0, u.openRestrictedHoursModal)() : (0, u.k)(), S());
}
function v() {
    (m = !1), (A = null), (0, u.k)(), null != g && (clearTimeout(g), (g = null));
}
function N() {
    y(), S();
}
class C extends i.A {
    stores = new Map().set(s.default, N).set(o.A, N);
    actions = { POST_CONNECTION_OPEN: N, CURRENT_USER_UPDATE: N, LOGOUT: v };
    _initialize() {
        (m = p()) && (0, u.openRestrictedHoursModal)(), (E = setInterval(y, _)), S();
    }
    _terminate() {
        null != E && (clearInterval(E), (E = null)),
            null != g && (clearTimeout(g), (g = null)),
            (A = null),
            (0, u.k)(),
            (m = !1);
    }
}
let R = new C();
