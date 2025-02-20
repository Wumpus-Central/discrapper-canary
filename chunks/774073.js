n.d(t, {
    ZP: () => b,
    z6: () => v
}),
    n(789020),
    n(653041);
var r = n(192379),
    i = n(512722),
    o = n.n(i),
    a = n(683076),
    s = n(442837),
    l = n(224706),
    c = n(812206),
    u = n(835473),
    d = n(669764),
    f = n(626135),
    p = n(630388),
    _ = n(539746),
    h = n(981631);
let m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(h.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: r
        });
    },
    g = (e, t) => {
        let n = [];
        return null == e || null == t ? ['no match'] : ((0, p.yE)(t.flags, h.udG.GAME_PROFILE_DISABLED) && n.push('profile disabled'), e.themes.includes(a.i.EROTIC) && n.push('nsfw'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), n);
    },
    E = (e, t) => 0 === g(e, t).length,
    v = (e) => E(d.Z.getGame(e), c.Z.getApplication(e)),
    b = (e) => {
        let { location: t, applicationId: n = '', autoTrackExposure: i = !0, source: a, trackEntryPointImpression: c = !0 } = e,
            f = r.useRef(!1),
            p = (0, _.xG)(t, i);
        r.useEffect(() => {
            p && null != n && '' !== n && l.Z.getDetectableGamesSupplemental([n]);
        }, [n, p]);
        let h = (0, s.e7)([d.Z], () => d.Z.getGame(n)),
            v = (0, u.q)(n),
            b = r.useMemo(() => (null != h && null != v ? E(h, v) : null), [v, h]);
        return (
            r.useEffect(() => {
                !f.current && p && c && !1 === d.Z.isFetching(n) && null != h && null != b && (o()(null != a, 'Cannot track a Game Profile Entry Point Impressions without a source.'), m(b, n, g(h), a), (f.current = !0));
            }, [b, n, p, h, a, c]),
            {
                shouldOpenGameProfile: p && !0 === b,
                applicationId: n
            }
        );
    };
