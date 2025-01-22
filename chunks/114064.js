let i;
var a,
    o = r(848246),
    s = r(442837),
    l = r(570140),
    u = r(168232),
    c = r(933843),
    d = r(746599),
    f = r(1163);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = 86400000,
    _ = {
        available: {},
        activated: {},
        lastFetched: null,
        overrides: {}
    },
    m = _;
function g() {
    m = _;
}
function E(e) {
    let {
        demos: { available: n, activated: r }
    } = e;
    (m.available = null != n ? n : {}), (m.activated = null != r ? r : {}), (m.lastFetched = Date.now());
}
function v() {
    (m.available = _.available), (m.lastFetched = null);
}
function y(e) {
    let { perkType: n, activatedDuration: r } = e;
    m.activated[n] = r;
}
function b(e) {
    let { perkType: n } = e;
    delete m.activated[n];
}
function I(e) {
    let { perkType: n } = e;
    if (((m.available[n] = !1), (null == i ? void 0 : i.extendedDemoDuration) !== !0)) delete m.activated[n];
}
function T(e) {
    let { user: n, perkType: r, available: i, activateSuccess: a, demoDuration: o } = e;
    void 0 !== n &&
        (0, u.QI)(n) &&
        ((m.overrides[r] = {
            available: i,
            activateSuccess: a,
            demoDuration: o
        }),
        null == m.available && (m.available = {}),
        (m.available[r] = i || !1),
        delete m.activated[r],
        (m.lastFetched = null));
}
function S() {
    if (!!(0, c.vw)(o.q.STREAM_HIGH_QUALITY)) (0, d.cD)(!0);
}
function A() {
    (0, d.cD)(!1);
}
function C() {
    i = f.Z.getCurrentConfig({ location: 'PerksDemosStore' }, { autoTrackExposure: !1 });
}
class N extends (a = s.ZP.Store) {
    isAvailable(e) {
        var n;
        return null !== (n = m.available[e]) && void 0 !== n && n;
    }
    hasActiveDemo(e) {
        let n = m.activated[e];
        return null != n && null != i && ((i.enabled && !i.extendedDemoDuration) || (i.extendedDemoDuration && new Date() <= new Date(n.end_time)));
    }
    hasActivated(e) {
        return null != m.activated[e];
    }
    shouldFetch() {
        return null == m.lastFetched || Date.now() > m.lastFetched + h;
    }
    shouldActivate(e) {
        var n;
        return null !== (n = m.available[e]) && void 0 !== n && n && null == m.activated[e];
    }
    overrides() {
        return m.overrides;
    }
    activatedEndTime(e) {
        var n;
        return null === (n = m.activated[e]) || void 0 === n ? void 0 : n.end_time;
    }
}
p(N, 'displayName', 'PerksDemosStore'),
    (n.Z = new N(l.Z, {
        PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: E,
        PREMIUM_PERKS_DEMOS_FETCH_FAILURE: v,
        PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: y,
        PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: b,
        PREMIUM_PERKS_DEMO_COMPLETE: I,
        LOGOUT: g,
        PREMIUM_PERKS_DEMO_OVERRIDE: T,
        STREAM_START: S,
        STREAM_STOP: A,
        CONNECTION_OPEN: C,
        EXPERIMENTS_FETCH_SUCCESS: C,
        EXPERIMENT_OVERRIDE_BUCKET: C
    }));
