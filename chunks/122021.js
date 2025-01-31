n.d(t, {
    Xj: () => g,
    fq: () => E,
    rR: () => v
}),
    n(47120);
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(726542),
    l = n(487576),
    u = n(553795),
    c = n(594174),
    d = n(70956),
    f = n(981631),
    _ = n(420212);
let p = { [f.ABu.INSTAGRAM]: ['1036753656588017764'] },
    h = new Map([[f.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    m = 30 * d.Z.Millis.DAY;
function g(e) {
    let { forUserProfile: t } = e,
        n = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        i = l.c.useExperiment({ location: 'f2f7ef_1' }, { autoTrackExposure: !1 }).allowPlayStationStaging;
    return (e) => {
        var r;
        return e.type === f.ABu.PLAYSTATION_STAGING ? i : !!(void 0 !== n && (null === (r = p[e.type]) || void 0 === r ? void 0 : r.includes(n.id))) || !!t || e.enabled;
    };
}
function E() {
    let e = (0, s.e7)([u.Z], () => u.Z.getAccounts()),
        t = g({ forUserProfile: !1 }),
        n = i.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return i.useMemo(
        () =>
            a().sortBy(o.Z.filter(t), [
                (e) => {
                    var t;
                    return !(h.has(e.type) && Date.now() < (null !== (t = h.get(e.type)) && void 0 !== t ? t : 0) + m);
                },
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !f.vbS.has(e.type),
                (e) => e.name
            ]),
        [n, t]
    );
}
function v(e) {
    let [t, n] = i.useState(!1);
    function r(e) {
        let { key: t } = e;
        t === _.vn.SHIFT && n(!0);
    }
    function a(e) {
        let { key: t } = e;
        t === _.vn.SHIFT && n(!1);
    }
    return (i.useEffect(
        () => (
            window.addEventListener('keydown', r),
            window.addEventListener('keyup', a),
            () => {
                window.removeEventListener('keydown', r), window.removeEventListener('keyup', a);
            }
        ),
        []
    ),
    t && e === f.ABu.TWITTER)
        ? f.ABu.TWITTER_LEGACY
        : e;
}
f.ABu.PLAYSTATION, f.ABu.XBOX, f.ABu.SPOTIFY, f.ABu.STEAM, f.ABu.TWITCH;
