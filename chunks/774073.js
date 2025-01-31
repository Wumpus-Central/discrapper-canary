n.d(t, {
    ZP: () => y,
    z6: () => v
}),
    n(789020),
    n(653041);
var i = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(683076),
    o = n(442837),
    l = n(224706),
    u = n(812206),
    c = n(835473),
    d = n(669764),
    f = n(626135),
    _ = n(630388),
    p = n(539746),
    h = n(981631);
let m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(h.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: i
        });
    },
    g = (e, t) => {
        let n = [];
        return null == e || null == t ? ['no match'] : ((0, _.yE)(t.flags, h.udG.GAME_PROFILE_DISABLED) && n.push('profile disabled'), e.themes.includes(s.i.EROTIC) && n.push('nsfw'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), n);
    },
    E = (e, t) => 0 === g(e, t).length,
    v = (e) => E(d.Z.getGame(e), u.Z.getApplication(e)),
    y = (e) => {
        let { location: t, applicationId: n = '', autoTrackExposure: r = !0, source: s, trackEntryPointImpression: u = !0 } = e,
            f = i.useRef(!1),
            _ = (0, p.xG)(t, r);
        i.useEffect(() => {
            _ && null != n && '' !== n && l.Z.getDetectableGamesSupplemental([n]);
        }, [n, _]);
        let h = (0, o.e7)([d.Z], () => d.Z.getGame(n)),
            v = (0, c.q)(n),
            y = i.useMemo(() => (null != h && null != v ? E(h, v) : null), [v, h]);
        return (
            i.useEffect(() => {
                !f.current && _ && u && !1 === d.Z.isFetching(n) && null != h && null != y && (a()(null != s, 'Cannot track a Game Profile Entry Point Impressions without a source.'), m(y, n, g(h), s), (f.current = !0));
            }, [y, n, _, h, s, u]),
            {
                shouldOpenGameProfile: _ && !0 === y,
                applicationId: n
            }
        );
    };
