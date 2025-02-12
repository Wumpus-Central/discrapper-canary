n.d(e, { c: () => u });
var i = n(442837),
    a = n(581883),
    r = n(594174),
    l = n(981312),
    o = n(667172);
let u = () => {
    let t = r.default.getCurrentUser(),
        e = (0, i.e7)([a.Z], () => {
            var t, e, n;
            return null === (n = null === (e = a.Z.settings.privacy) || void 0 === e ? void 0 : null === (t = e.inappropriateConversationWarnings) || void 0 === t ? void 0 : t.value) || void 0 === n || n;
        }),
        n = (0, l.U)(),
        u = (0, o.v4)({ location: 'useSafetyAlertsSettingOrDefault' });
    return (!!n && !!u) || ((n || (null == t ? void 0 : t.isStaff()) === !0) && e);
};
