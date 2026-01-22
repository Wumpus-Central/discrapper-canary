n.d(t, { L: () => l });
var r = n(311907),
    i = n(617617),
    a = n(287809),
    s = n(840387),
    o = n(639555);
let l = () => {
    let e = a.default.getCurrentUser(),
        t = (0, r.bG)([i.A], () => {
            var e, t, n;
            return (
                null ==
                    (e =
                        null == (n = i.A.settings.privacy) || null == (t = n.inappropriateConversationWarnings)
                            ? void 0
                            : t.value) || e
            );
        }),
        n = (0, s.Z)(),
        l = (0, o.Rv)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!n && !!l) || ((n || (null == e ? void 0 : e.isStaff()) === !0) && t);
};
