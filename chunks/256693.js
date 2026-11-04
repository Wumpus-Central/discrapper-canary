var i = n(795816),
    s = n(933958);
let l = "activity:";
n.d(
    t,
    {},
    {
        Ri: function (e) {
            let { applicationId: t, location: n } = e;
            return `activity:${t}:${n.id}`;
        },
        aQ: function (e) {
            let t = (function (e) {
                let t = e.indexOf(":", l.length);
                if (-1 === t) return null;
                let n = e.slice(l.length, t),
                    i = e.slice(t + 1);
                return "" === n || "" === i ? null : { applicationId: n, locationId: i };
            })(e);
            if (null == t) return;
            let { applicationId: n, locationId: r } = t,
                a = s.Ay.getSelfEmbeddedActivities().get(n);
            null != a && a.location.id === r && (0, i._H)({ location: a.location, applicationId: n, showFeedback: !1 });
        },
        fS: function (e) {
            return e.startsWith(l);
        },
    },
);
