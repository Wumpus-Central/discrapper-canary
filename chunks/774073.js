r.d(n, {
    z6: function () {
        return T;
    }
});
var i,
    a = r(789020);
var o = r(653041);
var s = r(192379),
    l = r(512722),
    u = r.n(l),
    c = r(683076),
    d = r(442837),
    f = r(224706),
    p = r(812206),
    h = r(835473),
    _ = r(669764),
    m = r(626135),
    g = r(630388),
    E = r(539746),
    v = r(981631);
!(function (e) {
    (e.NoMatch = 'no match'), (e.NSFW = 'nsfw'), (e.NoSummary = 'no summary'), (e.NoReleaseDate = 'no release date'), (e.NoCoverImage = 'no cover image'), (e.Disabled = 'profile disabled');
})(i || (i = {}));
let y = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0;
        m.default.track(v.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: n,
            rejection_reason: r,
            source: i
        });
    },
    b = (e, n) => {
        let r = [];
        return null == e || null == n ? ['no match'] : ((0, g.yE)(n.flags, v.udG.GAME_PROFILE_DISABLED) && r.push('profile disabled'), e.themes.includes(c.i.EROTIC) && r.push('nsfw'), (null == e.summary || 0 === e.summary.length) && r.push('no summary'), (null == e.summary || 0 === e.summary.length) && r.push('no summary'), r);
    },
    I = (e, n) => 0 === b(e, n).length,
    T = (e) => {
        let n = _.Z.getGame(e);
        return I(n, p.Z.getApplication(e));
    },
    S = (e) => {
        let { location: n, applicationId: r = '', autoTrackExposure: i = !0, source: a, trackEntryPointImpression: o = !0 } = e,
            l = s.useRef(!1),
            c = (0, E.xG)(n, i);
        s.useEffect(() => {
            c && null != r && '' !== r && f.Z.getDetectableGamesSupplemental([r]);
        }, [r, c]);
        let p = (0, d.e7)([_.Z], () => _.Z.getGame(r)),
            m = (0, h.q)(r),
            g = s.useMemo(() => (null != p && null != m ? I(p, m) : null), [m, p]);
        return (
            s.useEffect(() => {
                !l.current && c && o && !1 === _.Z.isFetching(r) && null != p && null != g && (u()(null != a, 'Cannot track a Game Profile Entry Point Impressions without a source.'), y(g, r, b(p), a), (l.current = !0));
            }, [g, r, c, p, a, o]),
            {
                shouldOpenGameProfile: c && !0 === g,
                applicationId: r
            }
        );
    };
n.ZP = S;
