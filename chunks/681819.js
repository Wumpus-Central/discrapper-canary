n.d(t, {
    ML: () => b,
    dq: () => g,
    gn: () => E,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(573648),
    l = n(165120),
    c = n(962173),
    u = n(287809),
    d = n(927813),
    f = n(652215),
    p = n(650583);
let _ = {
        [f.fg2.INSTAGRAM]: ["1036753656588017764"],
    },
    h = new Map([[f.fg2.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    m = 30 * d.A.Millis.DAY;

function g(e) {
    let { forUserProfile: t } = e,
        n = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        r = l.S.useExperiment(
            {
                location: "f2f7ef_1",
            },
            {
                autoTrackExposure: !1,
            },
        ).allowPlayStationStaging;
    return (e) => {
        var i;
        return e.type === f.fg2.PLAYSTATION_STAGING
            ? r
            : !!(void 0 !== n && (null == (i = _[e.type]) ? void 0 : i.includes(n.id))) || !!t || e.enabled;
    };
}

function E() {
    let e = (0, s.bG)([c.A], () => c.A.getAccounts()),
        t = g({
            forUserProfile: !1,
        }),
        n = r.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return r.useMemo(
        () =>
            a().sortBy(o.A.filter(t), [
                (e) => {
                    var t;
                    return !(h.has(e.type) && Date.now() < (null != (t = h.get(e.type)) ? t : 0) + m);
                },
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !f.ewM.has(e.type),
                (e) => e.name,
            ]),
        [n, t],
    );
}

function b(e) {
    let [t, n] = r.useState(!1);

    function i(e) {
        let { key: t } = e;
        t === p.dh.SHIFT && n(!0);
    }

    function a(e) {
        let { key: t } = e;
        t === p.dh.SHIFT && n(!1);
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
    t && e === f.fg2.TWITTER)
        ? f.fg2.TWITTER_LEGACY
        : e;
}
f.fg2.PLAYSTATION, f.fg2.XBOX, f.fg2.SPOTIFY, f.fg2.STEAM, f.fg2.TWITCH;
