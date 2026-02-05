i.d(t, { L: () => o });
var n = i(311907),
    a = i(617617),
    l = i(287809),
    r = i(840387),
    s = i(639555);
let o = () => {
    let e = l.default.getCurrentUser(),
        t = (0, n.bG)([a.A], () => a.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        i = (0, r.Z)(),
        o = (0, s.Rv)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!i && !!o) || ((i || e?.isStaff() === !0) && t);
};
