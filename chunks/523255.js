n.d(t, {
    SI: () => c,
    hZ: () => d
});
var i = n(913527),
    r = n.n(i),
    l = n(835913),
    o = n(675478),
    s = n(581883),
    a = n(905567);
let c = (e) => {
        var t;
        if (!u(e)) return !1;
        let n = null == (t = s.Z.settings.userContent) ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
            i = null != n ? l.E.toDate(n) : void 0,
            o = null != i ? r()().diff(i, 'days') : null;
        if (null != n && !(null != o && o > 30)) return !1;
        let { isEligible: c } = a.C.getCurrentConfig({ location: '657a81_1' }, { autoTrackExposure: !0 });
        return c;
    },
    u = (e) => null != e && Date.now() - e.createdAt.getTime() > 2592000000,
    d = () => {
        let e = l.E.now();
        o.hW.updateAsync(
            'userContent',
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            o.fy.INFREQUENT_USER_ACTION
        );
    };
