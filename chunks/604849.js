e.d(t, {
    c: function () {
        return o;
    }
});
var r = e(442837),
    i = e(581883),
    u = e(594174),
    l = e(981312),
    a = e(667172);
let o = () => {
    let n = u.default.getCurrentUser(),
        t = (0, r.e7)([i.Z], () => {
            var n, t, e;
            return null === (e = null === (t = i.Z.settings.privacy) || void 0 === t ? void 0 : null === (n = t.inappropriateConversationWarnings) || void 0 === n ? void 0 : n.value) || void 0 === e || e;
        }),
        e = (0, l.U)(),
        o = (0, a.v4)({ location: 'useSafetyAlertsSettingOrDefault' });
    return (!!e && !!o) || ((e || (null == n ? void 0 : n.isStaff()) === !0) && t);
};
