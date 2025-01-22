r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(442837),
    a = r(314897),
    o = r(317381),
    s = r(413458);
function l(e) {
    let n = a.default.getId(),
        { userActivity: r, inActivity: l } = (0, i.cj)([o.ZP], () => {
            let r = o.ZP.getSelfEmbeddedActivityForChannel(e),
                i = o.ZP.getEmbeddedActivitiesForChannel(e).find((e) => e.applicationId === (null == r ? void 0 : r.applicationId)),
                a = !1;
            if ((null == i ? void 0 : i.participants) != null) {
                var l;
                a = (null == i ? void 0 : null === (l = i.participants) || void 0 === l ? void 0 : l.find((e) => (0, s.J)(e))) != null;
            } else (null == i ? void 0 : i.userIds) != null && (a = i.userIds.has(n));
            return {
                userActivity: r,
                inActivity: null != a && a
            };
        });
    return {
        userActivity: r,
        inActivity: l
    };
}
