"use strict";
n.d(t, { ML: () => A, dq: () => g, gn: () => E });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(573648),
    l = n(165120),
    u = n(962173),
    c = n(287809),
    d = n(927813),
    _ = n(652215),
    f = n(650583);
let p = { [_.fg2.INSTAGRAM]: ["1036753656588017764"] },
    h = new Map([[_.fg2.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    m = 30 * d.A.Millis.DAY;
function g(e) {
    let { forUserProfile: t } = e,
        n = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        r = l.S.useExperiment({ location: "f2f7ef_1" }, { autoTrackExposure: !1 }).allowPlayStationStaging;
    return (e) =>
        e.type === _.fg2.PLAYSTATION_STAGING ? r : !!(void 0 !== n && p[e.type]?.includes(n.id)) || !!t || e.enabled;
}
function E() {
    let e = (0, s.bG)([u.A], () => u.A.getAccounts()),
        t = g({ forUserProfile: !1 }),
        n = r.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return r.useMemo(
        () =>
            a().sortBy(o.A.filter(t), [
                (e) => !(h.has(e.type) && Date.now() < (h.get(e.type) ?? 0) + m),
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !_.ewM.has(e.type),
                (e) => e.name,
            ]),
        [n, t],
    );
}
function A(e) {
    let [t, n] = r.useState(!1);
    function i(e) {
        let { key: t } = e;
        t === f.dh.SHIFT && n(!0);
    }
    function a(e) {
        let { key: t } = e;
        t === f.dh.SHIFT && n(!1);
    }
    return (r.useEffect(
        () => (
            window.addEventListener("keydown", i),
            window.addEventListener("keyup", a),
            () => {
                window.removeEventListener("keydown", i), window.removeEventListener("keyup", a);
            }
        ),
        [],
    ),
    t && e === _.fg2.TWITTER)
        ? _.fg2.TWITTER_LEGACY
        : e;
}
_.fg2.PLAYSTATION, _.fg2.XBOX, _.fg2.SPOTIFY, _.fg2.STEAM, _.fg2.TWITCH;
