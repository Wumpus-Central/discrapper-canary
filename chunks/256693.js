a.d(t, { Ri: () => i, aQ: () => o, fS: () => r });
var s = a(795816),
    l = a(933958);
let n = "activity:";
function i(e) {
    let { applicationId: t, location: a } = e;
    return `activity:${t}:${a.id}`;
}
function r(e) {
    return e.startsWith(n);
}
function o(e) {
    let t = (function (e) {
        let t = e.indexOf(":", n.length);
        if (-1 === t) return null;
        let a = e.slice(n.length, t),
            s = e.slice(t + 1);
        return "" === a || "" === s ? null : { applicationId: a, locationId: s };
    })(e);
    if (null == t) return;
    let { applicationId: a, locationId: i } = t,
        r = l.Ay.getSelfEmbeddedActivities().get(a);
    null != r && r.location.id === i && (0, s._H)({ location: r.location, applicationId: a, showFeedback: !1 });
}
