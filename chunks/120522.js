n.d(t, {
    S: () => _,
    z: () => f
});
var i = n(913527),
    r = n.n(i),
    a = n(544891),
    s = n(570140),
    o = n(168232),
    l = n(594174),
    u = n(114064),
    c = n(1163),
    d = n(981631);
async function f() {
    let e = l.default.getCurrentUser();
    try {
        let { body: t } = await a.tn.get({
            url: d.ANM.USER_PERKS_DEMOS,
            rejectWithError: !0
        });
        (0, o.QI)(e) &&
            (t.available = {
                ...t.available,
                ...m()
            }),
            s.Z.dispatch({
                type: 'PREMIUM_PERKS_DEMOS_FETCH_SUCCESS',
                demos: t
            });
    } catch (e) {
        s.Z.dispatch({ type: 'PREMIUM_PERKS_DEMOS_FETCH_FAILURE' });
    }
}
async function _(e) {
    if (u.Z.hasActivated(e)) return !0;
    let t = l.default.getCurrentUser();
    try {
        if ((0, o.QI)(t)) {
            let t = h(e);
            if ((null == t ? void 0 : t.activateSuccess) === !0)
                return (
                    p(e, {
                        start_time: r()().toISOString(),
                        end_time: (c.Z.getCurrentConfig({ location: 'activatePerkDemo' }, { autoTrackExposure: !1 }).extendedDemoDuration ? r()().add(t.demoDuration, 'days') : r()().add(1, 'hour')).toISOString()
                    }),
                    !0
                );
        }
        let { body: n } = await a.tn.post({
            url: d.ANM.USER_PERKS_DEMOS_ACTIVATE(e),
            rejectWithError: !0
        });
        return p(e, n), !0;
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
function p(e, t) {
    s.Z.dispatch({
        type: 'PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS',
        perkType: e,
        activatedDuration: t
    });
}
function h(e) {
    return u.Z.overrides()[e];
}
function m() {
    let e = u.Z.overrides(),
        t = {};
    for (let r in e) {
        var n, i;
        !0 === (null !== (i = null === (n = e[r]) || void 0 === n ? void 0 : n.available) && void 0 !== i ? i : void 0) && (t[r] = !0);
    }
    return t;
}
