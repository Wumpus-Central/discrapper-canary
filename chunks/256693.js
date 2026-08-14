l.d(t, { Ri: () => s, aQ: () => o, fS: () => r });
var n = l(795816),
    a = l(933958);
let i = "activity:";
function s(e) {
    let { applicationId: t, location: l } = e;
    return `activity:${t}:${l.id}`;
}
function r(e) {
    return e.startsWith(i);
}
function o(e) {
    let t = (function (e) {
        let t = e.indexOf(":", i.length);
        if (-1 === t) return null;
        let l = e.slice(i.length, t),
            n = e.slice(t + 1);
        return "" === l || "" === n ? null : { applicationId: l, locationId: n };
    })(e);
    if (null == t) return;
    let { applicationId: l, locationId: s } = t,
        r = a.Ay.getSelfEmbeddedActivities().get(l);
    null != r && r.location.id === s && (0, n._H)({ location: r.location, applicationId: l, showFeedback: !1 });
}
