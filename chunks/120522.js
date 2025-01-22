r.d(n, {
    S: function () {
        return h;
    },
    z: function () {
        return p;
    }
});
var i = r(913527),
    a = r.n(i),
    o = r(544891),
    s = r(570140),
    l = r(168232),
    u = r(594174),
    c = r(114064),
    d = r(1163),
    f = r(981631);
async function p() {
    let e = u.default.getCurrentUser();
    try {
        let { body: n } = await o.tn.get({
            url: f.ANM.USER_PERKS_DEMOS,
            rejectWithError: !0
        });
        (0, l.QI)(e) &&
            (n.available = {
                ...n.available,
                ...g()
            }),
            s.Z.dispatch({
                type: 'PREMIUM_PERKS_DEMOS_FETCH_SUCCESS',
                demos: n
            });
    } catch (e) {
        s.Z.dispatch({ type: 'PREMIUM_PERKS_DEMOS_FETCH_FAILURE' });
    }
}
async function h(e) {
    if (c.Z.hasActivated(e)) return !0;
    let n = u.default.getCurrentUser();
    try {
        if ((0, l.QI)(n)) {
            let n = m(e);
            if ((null == n ? void 0 : n.activateSuccess) === !0)
                return (
                    _(e, {
                        start_time: a()().toISOString(),
                        end_time: (d.Z.getCurrentConfig({ location: 'activatePerkDemo' }, { autoTrackExposure: !1 }).extendedDemoDuration ? a()().add(n.demoDuration, 'days') : a()().add(1, 'hour')).toISOString()
                    }),
                    !0
                );
        }
        let { body: r } = await o.tn.post({
            url: f.ANM.USER_PERKS_DEMOS_ACTIVATE(e),
            rejectWithError: !0
        });
        return _(e, r), !0;
    } catch {
        return (
            s.Z.dispatch({
                type: 'PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE',
                perkType: e
            }),
            !1
        );
    }
}
function _(e, n) {
    s.Z.dispatch({
        type: 'PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS',
        perkType: e,
        activatedDuration: n
    });
}
function m(e) {
    return c.Z.overrides()[e];
}
function g() {
    let e = c.Z.overrides(),
        n = {};
    for (let a in e) {
        var r, i;
        !0 === (null !== (i = null === (r = e[a]) || void 0 === r ? void 0 : r.available) && void 0 !== i ? i : void 0) && (n[a] = !0);
    }
    return n;
}
