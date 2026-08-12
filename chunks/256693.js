"use strict";
n.d(t, { Ri: () => s, aQ: () => o, fS: () => l });
var i = n(795816),
    r = n(933958);
let a = "activity:";
function s(e) {
    let { applicationId: t, location: n } = e;
    return `activity:${t}:${n.id}`;
}
function l(e) {
    return e.startsWith(a);
}
function o(e) {
    let t = (function (e) {
        let t = e.indexOf(":", a.length);
        if (-1 === t) return null;
        let n = e.slice(a.length, t),
            i = e.slice(t + 1);
        return "" === n || "" === i ? null : { applicationId: n, locationId: i };
    })(e);
    if (null == t) return;
    let { applicationId: n, locationId: s } = t,
        l = r.Ay.getSelfEmbeddedActivities().get(n);
    null != l && l.location.id === s && (0, i._H)({ location: l.location, applicationId: n, showFeedback: !1 });
}
