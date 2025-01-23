n.d(t, {
    c: function () {
        return s;
    }
});
var i = n(442837),
    r = n(581883),
    l = n(594174),
    a = n(981312),
    o = n(667172);
let s = () => {
    let e = l.default.getCurrentUser(),
        t = (0, i.e7)([r.Z], () => {
            var e, t, n;
            return null === (n = null === (t = r.Z.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n;
        }),
        n = (0, a.U)(),
        s = (0, o.v4)({ location: 'useSafetyAlertsSettingOrDefault' });
    return (!!n && !!s) || ((n || (null == e ? void 0 : e.isStaff()) === !0) && t);
};
