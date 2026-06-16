n.d(t, { L: () => u });
var a = n(17928),
    i = n(617617),
    r = n(287809),
    s = n(840387),
    l = n(639555);
let u = () => {
    let e = r.default.getCurrentUser(),
        t = (0, a.bG)([i.A], () => i.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, s.Z)(),
        u = (0, l.Rv)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!n && !!u) || ((n || e?.isStaff() === !0) && t);
};
