n.d(t, {
    SI: () => c,
    hZ: () => f
});
var r = n(913527),
    i = n.n(r),
    a = n(835913),
    o = n(675478),
    s = n(581883),
    l = n(905567);
let c = (e) => {
        var t;
        if (!d(e)) return !1;
        let n = null == (t = s.Z.settings.userContent) ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
            r = null != n ? a.E.toDate(n) : void 0,
            o = null != r ? i()().diff(r, 'days') : null,
            c = null != o && o > 30;
        if (null != n && !c) return !1;
        let { isEligible: u } = l.C.getCurrentConfig({ location: '657a81_1' }, { autoTrackExposure: !0 });
        return u;
    },
    u = 2592000000,
    d = (e) => null != e && Date.now() - e.createdAt.getTime() > u,
    f = () => {
        let e = a.E.now();
        o.hW.updateAsync(
            'userContent',
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            o.fy.INFREQUENT_USER_ACTION
        );
    };
