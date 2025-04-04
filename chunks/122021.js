n.d(t, {
    Xj: () => g,
    fq: () => E,
    rR: () => b
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(726542),
    l = n(487576),
    c = n(553795),
    u = n(594174),
    d = n(70956),
    f = n(981631),
    _ = n(420212);
let p = { [f.ABu.INSTAGRAM]: ['1036753656588017764'] },
    h = new Map([[f.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    m = 30 * d.Z.Millis.DAY;
function g(e) {
    let { forUserProfile: t } = e,
        n = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        r = l.c.useExperiment({ location: 'f2f7ef_1' }, { autoTrackExposure: !1 }).allowPlayStationStaging;
    return (e) => {
        var i;
        return e.type === f.ABu.PLAYSTATION_STAGING ? r : !!(void 0 !== n && (null == (i = p[e.type]) ? void 0 : i.includes(n.id))) || !!t || e.enabled;
    };
}
function E() {
    let e = (0, a.e7)([c.Z], () => c.Z.getAccounts()),
        t = g({ forUserProfile: !1 }),
        n = r.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return r.useMemo(
        () =>
            o().sortBy(s.Z.filter(t), [
                (e) => {
                    var t;
                    return !(h.has(e.type) && Date.now() < (null != (t = h.get(e.type)) ? t : 0) + m);
                },
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !f.vbS.has(e.type),
                (e) => e.name
            ]),
        [n, t]
    );
}
function b(e) {
    let [t, n] = r.useState(!1);
    function i(e) {
        let { key: t } = e;
        t === _.vn.SHIFT && n(!0);
    }
    function o(e) {
        let { key: t } = e;
        t === _.vn.SHIFT && n(!1);
    }
    return (r.useEffect(
        () => (
            window.addEventListener('keydown', i),
            window.addEventListener('keyup', o),
            () => {
                window.removeEventListener('keydown', i), window.removeEventListener('keyup', o);
            }
        ),
        []
    ),
    t && e === f.ABu.TWITTER)
        ? f.ABu.TWITTER_LEGACY
        : e;
}
f.ABu.PLAYSTATION, f.ABu.XBOX, f.ABu.SPOTIFY, f.ABu.STEAM, f.ABu.TWITCH;
