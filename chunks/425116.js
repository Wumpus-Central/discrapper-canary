"use strict";
n.d(t, { $: () => _, A: () => S });
var r = n(73153),
    i = n(439372),
    s = n(287809),
    a = n(219893),
    o = n(695515),
    l = n(936926),
    u = n(390660),
    c = n(602339),
    d = n(985018);
function _() {
    return o.A.isCurrentUserInRestrictedHours();
}
let f = !1,
    p = null,
    h = null,
    E = null;
function m() {
    null != h && (clearTimeout(h), (h = null));
    let e = (function () {
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
    })();
    if (null != e)
        if (e.minutesUntil <= 16) {
            var t;
            let n = `${e.rule.ruleId}:${e.startAtMs}`;
            if (n !== E) {
                let i, s;
                (t = e.rule),
                    (i = d.intl.string(c.default["0JlDg0"])),
                    (s = `${(0, a.n1)(t.days)} ${(0, a.li)(t)}`.trim()),
                    r.h.dispatch({ type: "RESTRICTED_HOURS_WARNING", title: i, subtitle: s }),
                    (E = n);
            }
            h = setTimeout(() => {
                (h = null), m();
            }, 6e4);
        } else
            h = setTimeout(
                () => {
                    (h = null), m();
                },
                Math.max(0, (e.minutesUntil - 16) * 6e4),
            );
}
function g() {
    let e = _();
    e !== f && ((f = e) ? (0, u.openRestrictedHoursModal)() : (0, u.k)(), m());
}
function A() {
    (f = !1), (E = null), (0, u.k)(), null != h && (clearTimeout(h), (h = null));
}
function I() {
    g(), m();
}
class T extends i.A {
    stores = new Map().set(s.default, I).set(o.A, I);
    actions = { POST_CONNECTION_OPEN: I, CURRENT_USER_UPDATE: I, LOGOUT: A };
    _initialize() {
        (f = _()) && (0, u.openRestrictedHoursModal)(), (p = setInterval(g, 6e4)), m();
    }
    _terminate() {
        null != p && (clearInterval(p), (p = null)),
            null != h && (clearTimeout(h), (h = null)),
            (E = null),
            (0, u.k)(),
            (f = !1);
    }
}
let S = new T();
