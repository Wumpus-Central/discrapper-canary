n.d(t, { L: () => l });
var i = n(17928),
    a = n(617617),
    r = n(287809),
    s = n(840387),
    u = n(639555);
function l() {
    let e = r.default.getCurrentUser(),
        t = (0, i.bG)([a.A], () => a.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, s.Z)(),
        l = (0, u.Rv)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!n && !!l) || ((n || e?.isStaff() === !0) && t);
}
