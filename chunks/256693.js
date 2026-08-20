l.d(t, { Ri: () => a, aQ: () => o, fS: () => r });
var i = l(795816),
    s = l(933958);
let n = "activity:";
function a(e) {
    let { applicationId: t, location: l } = e;
    return `activity:${t}:${l.id}`;
}
function r(e) {
    return e.startsWith(n);
}
function o(e) {
    let t = (function (e) {
        let t = e.indexOf(":", n.length);
        if (-1 === t) return null;
        let l = e.slice(n.length, t),
            i = e.slice(t + 1);
        return "" === l || "" === i ? null : { applicationId: l, locationId: i };
    })(e);
    if (null == t) return;
    let { applicationId: l, locationId: a } = t,
        r = s.Ay.getSelfEmbeddedActivities().get(l);
    null != r && r.location.id === a && (0, i._H)({ location: r.location, applicationId: l, showFeedback: !1 });
}
