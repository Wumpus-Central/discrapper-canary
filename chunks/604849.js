n.d(t, { c: () => u });
var i = n(442837),
    r = n(581883),
    a = n(594174),
    l = n(981312),
    o = n(667172);
let u = () => {
    let e = a.default.getCurrentUser(),
        t = (0, i.e7)([r.Z], () => {
            var e, t, n;
            return null == (n = null == (t = r.Z.settings.privacy) || null == (e = t.inappropriateConversationWarnings) ? void 0 : e.value) || n;
        }),
        n = (0, l.U)(),
        u = (0, o.v4)({ location: 'useSafetyAlertsSettingOrDefault' });
    return (!!n && !!u) || ((n || (null == e ? void 0 : e.isStaff()) === !0) && t);
};
