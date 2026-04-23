n.d(e, { L: () => s });
var r = n(17928),
    i = n(617617),
    a = n(287809),
    o = n(840387),
    l = n(639555);
let s = () => {
    let t = a.default.getCurrentUser(),
        e = (0, r.bG)([i.A], () => i.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, o.Z)(),
        s = (0, l.Rv)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!n && !!s) || ((n || t?.isStaff() === !0) && e);
};
