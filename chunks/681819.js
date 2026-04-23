"use strict";
n.d(t, { ML: () => I, dq: () => p, gn: () => A });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(573648),
    l = n(941314),
    d = n(165120),
    _ = n(30370),
    u = n(287809),
    c = n(927813),
    E = n(652215),
    h = n(650583);
let m = { [E.fg2.INSTAGRAM]: ["1036753656588017764"] },
    f = new Map([[E.fg2.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    g = 30 * c.A.Millis.DAY;
function p(e) {
    let { forUserProfile: t } = e,
        n = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        i = d.S.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging,
        r = l.A.useConfig({ location: "usePlatformAllowed" });
    return (e) =>
        e.type === E.fg2.PLAYSTATION_STAGING
            ? i
            : !!(void 0 !== n && m[e.type]?.includes(n.id)) ||
              !!t ||
              ((null == e.replacedBy || !r.enabled) && e.enabled);
}
function A() {
    let e = (0, a.bG)([_.A], () => _.A.getAccounts()),
        t = p({ forUserProfile: !1 }),
        n = i.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return i.useMemo(
        () =>
            s().sortBy(o.A.filter(t), [
                (e) => !(f.has(e.type) && Date.now() < (f.get(e.type) ?? 0) + g),
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !E.ewM.has(e.type),
                (e) => e.name,
            ]),
        [n, t],
    );
}
function I(e) {
    let [t, n] = i.useState(!1);
    function r(e) {
        let { key: t } = e;
        t === h.dh.SHIFT && n(!0);
    }
    function s(e) {
        let { key: t } = e;
        t === h.dh.SHIFT && n(!1);
    }
    return (i.useEffect(
        () => (
            window.addEventListener("keydown", r),
            window.addEventListener("keyup", s),
            () => {
                window.removeEventListener("keydown", r), window.removeEventListener("keyup", s);
            }
        ),
        [],
    ),
    t && e === E.fg2.TWITTER)
        ? E.fg2.TWITTER_LEGACY
        : e;
}
E.fg2.PLAYSTATION, E.fg2.XBOX, E.fg2.SPOTIFY, E.fg2.STEAM, E.fg2.TWITCH;
