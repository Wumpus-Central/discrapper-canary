n.d(t, { L: () => o });
var i = n(311907),
    l = n(617617),
    a = n(287809),
    s = n(840387),
    r = n(639555);
let o = () => {
    let e = a.default.getCurrentUser(),
        t = (0, i.bG)([l.A], () => l.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, s.Z)(),
        o = (0, r.Rv)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!n && !!o) || ((n || e?.isStaff() === !0) && t);
};
