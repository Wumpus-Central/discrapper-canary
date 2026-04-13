"use strict";
n.d(t, { ML: () => I, dq: () => g, gn: () => A });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(573648),
    l = n(342169),
    u = n(165120),
    c = n(962173),
    d = n(287809),
    _ = n(927813),
    f = n(652215),
    p = n(650583);
let h = { [f.fg2.INSTAGRAM]: ["1036753656588017764"] },
    m = new Map([[f.fg2.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    E = 30 * _.A.Millis.DAY;
function g(e) {
    let { forUserProfile: t } = e,
        n = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        r = u.S.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging,
        i = l.A.useConfig({ location: "usePlatformAllowed" });
    return (e) =>
        e.type === f.fg2.PLAYSTATION_STAGING
            ? r
            : !!(void 0 !== n && h[e.type]?.includes(n.id)) ||
              !!t ||
              ((null == e.replacedBy || !i.enabled) && e.enabled);
}
function A() {
    let e = (0, a.bG)([c.A], () => c.A.getAccounts()),
        t = g({ forUserProfile: !1 }),
        n = r.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return r.useMemo(
        () =>
            s().sortBy(o.A.filter(t), [
                (e) => !(m.has(e.type) && Date.now() < (m.get(e.type) ?? 0) + E),
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !f.ewM.has(e.type),
                (e) => e.name,
            ]),
        [n, t],
    );
}
function I(e) {
    let [t, n] = r.useState(!1);
    function i(e) {
        let { key: t } = e;
        t === p.dh.SHIFT && n(!0);
    }
    function s(e) {
        let { key: t } = e;
        t === p.dh.SHIFT && n(!1);
    }
    return (r.useEffect(
        () => (
            window.addEventListener("keydown", i),
            window.addEventListener("keyup", s),
            () => {
                window.removeEventListener("keydown", i), window.removeEventListener("keyup", s);
            }
        ),
        [],
    ),
    t && e === f.fg2.TWITTER)
        ? f.fg2.TWITTER_LEGACY
        : e;
}
f.fg2.PLAYSTATION, f.fg2.XBOX, f.fg2.SPOTIFY, f.fg2.STEAM, f.fg2.TWITCH;
