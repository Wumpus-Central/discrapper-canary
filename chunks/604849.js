n.d(t, { c: () => o });
var r = n(442837),
    i = n(581883),
    l = n(594174),
    a = n(981312),
    s = n(667172);
let o = () => {
    let e = l.default.getCurrentUser(),
        t = (0, r.e7)([i.Z], () => {
            var e, t, n;
            return null == (n = null == (t = i.Z.settings.privacy) || null == (e = t.inappropriateConversationWarnings) ? void 0 : e.value) || n;
        }),
        n = (0, a.U)(),
        o = (0, s.v4)({ location: 'useSafetyAlertsSettingOrDefault' });
    return (!!n && !!o) || ((n || (null == e ? void 0 : e.isStaff()) === !0) && t);
};
