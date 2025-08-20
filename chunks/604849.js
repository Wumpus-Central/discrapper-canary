n.d(t, { c: () => l });
var r = n(442837),
    i = n(581883),
    a = n(594174),
    o = n(981312),
    s = n(667172);
let l = () => {
    let e = a.default.getCurrentUser(),
        t = (0, r.e7)([i.Z], () => {
            var e, t, n;
            return (
                null ==
                    (n =
                        null == (t = i.Z.settings.privacy) || null == (e = t.inappropriateConversationWarnings)
                            ? void 0
                            : e.value) || n
            );
        }),
        n = (0, o.U)(),
        l = (0, s.v4)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!n && !!l) || ((n || (null == e ? void 0 : e.isStaff()) === !0) && t);
};
