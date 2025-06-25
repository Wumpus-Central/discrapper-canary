n.d(e, { c: () => u });
var r = n(442837),
    i = n(581883),
    l = n(594174),
    a = n(981312),
    o = n(667172);
let u = () => {
    let t = l.default.getCurrentUser(),
        e = (0, r.e7)([i.Z], () => {
            var t, e, n;
            return null == (n = null == (e = i.Z.settings.privacy) || null == (t = e.inappropriateConversationWarnings) ? void 0 : t.value) || n;
        }),
        n = (0, a.U)(),
        u = (0, o.v4)({ location: 'useSafetyAlertsSettingOrDefault' });
    return (!!n && !!u) || ((n || (null == t ? void 0 : t.isStaff()) === !0) && e);
};
