"use strict";
n.d(t, { $: () => c, A: () => S });
var i = n(228366),
    r = n(439372),
    s = n(287809),
    a = n(219893),
    o = n(695515),
    l = n(936926),
    d = n(580296),
    _ = n(602339),
    u = n(985018);
function c() {
    return o.A.isCurrentUserInRestrictedHours();
}
let E = !1,
    h = null,
    m = null,
    f = null;
function g() {
    null != m && (clearTimeout(m), (m = null));
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
            if (n !== f) {
                let r, s;
                (t = e.rule),
                    (r = u.intl.string(_.default["0JlDg0"])),
                    (s = `${(0, a.n1)(t.days)} ${(0, a.li)(t)}`.trim()),
                    i.h.dispatch({ type: "RESTRICTED_HOURS_WARNING", title: r, subtitle: s }),
                    (f = n);
            }
            m = setTimeout(() => {
                (m = null), g();
            }, 6e4);
        } else
            m = setTimeout(
                () => {
                    (m = null), g();
                },
                Math.max(0, (e.minutesUntil - 16) * 6e4),
            );
}
function p() {
    let e = c();
    e !== E && ((E = e) ? (0, d.openRestrictedHoursModal)() : (0, d.k)(), g());
}
function A() {
    (E = !1), (f = null), (0, d.k)(), null != m && (clearTimeout(m), (m = null));
}
function I() {
    p(), g();
}
class T extends r.A {
    stores = new Map().set(s.default, I).set(o.A, I);
    actions = { POST_CONNECTION_OPEN: I, CURRENT_USER_UPDATE: I, LOGOUT: A };
    _initialize() {
        (E = c()) && (0, d.openRestrictedHoursModal)(), (h = setInterval(p, 6e4)), g();
    }
    _terminate() {
        null != h && (clearInterval(h), (h = null)),
            null != m && (clearTimeout(m), (m = null)),
            (f = null),
            (0, d.k)(),
            (E = !1);
    }
}
let S = new T();
