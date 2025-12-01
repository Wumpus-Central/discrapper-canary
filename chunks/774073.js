n.d(t, {
    ZP: () => y,
    z6: () => b,
}),
    n(997841),
    n(539854);
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(683076),
    s = n(95015),
    l = n(442837),
    c = n(812206),
    u = n(565183),
    d = n(669764),
    f = n(210753),
    p = n(626135),
    _ = n(539746),
    m = n(981631);
let h = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        p.default.track(m.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: r,
        });
    },
    g = (e, t) => {
        let n = [];
        return null == e || null == t
            ? ["no match"]
            : ((0, s.yE)(t.flags, m.udG.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
              e.themes.includes(o.i.EROTIC) && n.push("nsfw"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              n);
    },
    E = (e, t) => 0 === g(e, t).length,
    b = (e) => E(d.Z.getGame(e), c.Z.getApplication(e)),
    y = (e) => {
        let {
                location: t,
                applicationId: n = "",
                autoTrackExposure: i = !0,
                source: o,
                trackEntryPointImpression: s = !0,
            } = e,
            c = r.useRef(!1),
            p = (0, _.xG)(t, i);
        (0, f.M)(p && "" !== n ? n : null);
        let m = (0, l.e7)([d.Z], () => d.Z.getGame(n)),
            b = (0, u.Z)(n),
            y = r.useMemo(() => (null != m && null != b ? E(m, b) : null), [b, m]);
        return (
            r.useEffect(() => {
                !c.current &&
                    p &&
                    s &&
                    !1 === d.Z.isFetching(n) &&
                    null != m &&
                    null != y &&
                    (a()(null != o, "Cannot track a Game Profile Entry Point Impressions without a source."),
                    h(y, n, g(m), o),
                    (c.current = !0));
            }, [y, n, p, m, o, s]),
            {
                shouldOpenGameProfile: p && !0 === y,
                applicationId: n,
            }
        );
    };
