let i;
n.d(t, { Z: () => C });
var r,
    a = n(848246),
    s = n(442837),
    o = n(570140),
    l = n(168232),
    u = n(933843),
    c = n(746599),
    d = n(1163);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 86400000,
    p = {
        available: {},
        activated: {},
        lastFetched: null,
        overrides: {}
    },
    h = p;
function m() {
    h = p;
}
function g(e) {
    let {
        demos: { available: t, activated: n }
    } = e;
    (h.available = null != t ? t : {}), (h.activated = null != n ? n : {}), (h.lastFetched = Date.now());
}
function E() {
    (h.available = p.available), (h.lastFetched = null);
}
function v(e) {
    let { perkType: t, activatedDuration: n } = e;
    h.activated[t] = n;
}
function y(e) {
    let { perkType: t } = e;
    delete h.activated[t];
}
function I(e) {
    let { perkType: t } = e;
    (h.available[t] = !1), (null == i ? void 0 : i.extendedDemoDuration) !== !0 && delete h.activated[t];
}
function T(e) {
    let { user: t, perkType: n, available: i, activateSuccess: r, demoDuration: a } = e;
    void 0 !== t &&
        (0, l.QI)(t) &&
        ((h.overrides[n] = {
            available: i,
            activateSuccess: r,
            demoDuration: a
        }),
        null == h.available && (h.available = {}),
        (h.available[n] = i || !1),
        delete h.activated[n],
        (h.lastFetched = null));
}
function b() {
    (0, u.vw)(a.q.STREAM_HIGH_QUALITY) && (0, c.cD)(!0);
}
function S() {
    (0, c.cD)(!1);
}
function A() {
    i = d.Z.getCurrentConfig({ location: 'PerksDemosStore' }, { autoTrackExposure: !1 });
}
class N extends (r = s.ZP.Store) {
    isAvailable(e) {
        var t;
        return null !== (t = h.available[e]) && void 0 !== t && t;
    }
    hasActiveDemo(e) {
        let t = h.activated[e];
        return null != t && null != i && ((i.enabled && !i.extendedDemoDuration) || (i.extendedDemoDuration && new Date() <= new Date(t.end_time)));
    }
    hasActivated(e) {
        return null != h.activated[e];
    }
    shouldFetch() {
        return null == h.lastFetched || Date.now() > h.lastFetched + _;
    }
    shouldActivate(e) {
        var t;
        return null !== (t = h.available[e]) && void 0 !== t && t && null == h.activated[e];
    }
    overrides() {
        return h.overrides;
    }
    activatedEndTime(e) {
        var t;
        return null === (t = h.activated[e]) || void 0 === t ? void 0 : t.end_time;
    }
}
f(N, 'displayName', 'PerksDemosStore');
let C = new N(o.Z, {
    PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: g,
    PREMIUM_PERKS_DEMOS_FETCH_FAILURE: E,
    PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: v,
    PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: y,
    PREMIUM_PERKS_DEMO_COMPLETE: I,
    LOGOUT: m,
    PREMIUM_PERKS_DEMO_OVERRIDE: T,
    STREAM_START: b,
    STREAM_STOP: S,
    CONNECTION_OPEN: A,
    EXPERIMENTS_FETCH_SUCCESS: A,
    EXPERIMENT_OVERRIDE_BUCKET: A
});
