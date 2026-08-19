i.d(t, { Ri: () => l, aQ: () => o, fS: () => r });
var n = i(795816),
    s = i(933958);
let a = "activity:";
function l(e) {
    let { applicationId: t, location: i } = e;
    return `activity:${t}:${i.id}`;
}
function r(e) {
    return e.startsWith(a);
}
function o(e) {
    let t = (function (e) {
        let t = e.indexOf(":", a.length);
        if (-1 === t) return null;
        let i = e.slice(a.length, t),
            n = e.slice(t + 1);
        return "" === i || "" === n ? null : { applicationId: i, locationId: n };
    })(e);
    if (null == t) return;
    let { applicationId: i, locationId: l } = t,
        r = s.Ay.getSelfEmbeddedActivities().get(i);
    null != r && r.location.id === l && (0, n._H)({ location: r.location, applicationId: i, showFeedback: !1 });
}
