n.d(t, {
    SI: () => c,
    hZ: () => d
});
var r = n(913527),
    i = n.n(r),
    l = n(835913),
    a = n(675478),
    o = n(581883),
    s = n(905567);
let c = (e) => {
        var t;
        if (!u(e)) return !1;
        let n = null == (t = o.Z.settings.userContent) ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
            r = null != n ? l.E.toDate(n) : void 0,
            a = null != r ? i()().diff(r, 'days') : null;
        if (null != n && !(null != a && a > 30)) return !1;
        let { isEligible: c } = s.C.getCurrentConfig({ location: '657a81_1' }, { autoTrackExposure: !0 });
        return c;
    },
    u = (e) => null != e && Date.now() - e.createdAt.getTime() > 2592000000,
    d = () => {
        let e = l.E.now();
        a.hW.updateAsync(
            'userContent',
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            a.fy.INFREQUENT_USER_ACTION
        );
    };
