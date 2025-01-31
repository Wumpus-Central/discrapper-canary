n.d(t, {
    SI: () => c,
    hZ: () => E
});
var i = n(913527),
    l = n.n(i),
    r = n(835913),
    a = n(675478),
    s = n(581883),
    o = n(905567);
let c = (e) => {
        var t;
        if (!u(e)) return !1;
        let n = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
            i = null != n ? r.E.toDate(n) : void 0,
            a = null != i ? l()().diff(i, 'days') : null;
        if (null != n && !(null != a && a > 30)) return !1;
        let { isEligible: c } = o.C.getCurrentConfig({ location: '657a81_1' }, { autoTrackExposure: !0 });
        return c;
    },
    u = (e) => null != e && Date.now() - e.createdAt.getTime() > 2592000000,
    E = () => {
        let e = r.E.now();
        a.hW.updateAsync(
            'userContent',
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            a.fy.INFREQUENT_USER_ACTION
        );
    };
