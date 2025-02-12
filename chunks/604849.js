n.d(t, { c: () => o });
var i = n(442837),
    l = n(581883),
    a = n(594174),
    r = n(981312),
    s = n(667172);
let o = () => {
    let e = a.default.getCurrentUser(),
        t = (0, i.e7)([l.Z], () => {
            var e, t, n;
            return null === (n = null === (t = l.Z.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n;
        }),
        n = (0, r.U)(),
        o = (0, s.v4)({ location: 'useSafetyAlertsSettingOrDefault' });
    return (!!n && !!o) || ((n || (null == e ? void 0 : e.isStaff()) === !0) && t);
};
