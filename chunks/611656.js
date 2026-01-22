n.d(t, {
    Ay: () => y,
    oS: () => b,
}),
    n(938796),
    n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(763956),
    o = n(665260),
    l = n(311907),
    c = n(587895),
    u = n(858177),
    d = n(524799),
    f = n(585958),
    p = n(954571),
    _ = n(658160),
    h = n(652215);
let m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        p.default.track(h.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
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
            : ((0, o.Lt)(t.flags, h.gfo.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
              e.themes.includes(s.W.EROTIC) && n.push("nsfw"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              n);
    },
    E = (e, t) => 0 === g(e, t).length,
    b = (e) => E(d.A.getGame(e), c.A.getApplication(e)),
    y = (e) => {
        let {
                location: t,
                applicationId: n = "",
                autoTrackExposure: i = !0,
                source: s,
                trackEntryPointImpression: o = !0,
            } = e,
            c = r.useRef(!1),
            p = (0, _.MH)(t, i);
        (0, f.e)(p && "" !== n ? n : null);
        let h = (0, l.bG)([d.A], () => d.A.getGame(n)),
            b = (0, u.O)(n),
            y = r.useMemo(() => (null != h && null != b ? E(h, b) : null), [b, h]);
        return (
            r.useEffect(() => {
                !c.current &&
                    p &&
                    o &&
                    !1 === d.A.isFetching(n) &&
                    null != h &&
                    null != y &&
                    (a()(null != s, "Cannot track a Game Profile Entry Point Impressions without a source."),
                    m(y, n, g(h), s),
                    (c.current = !0));
            }, [y, n, p, h, s, o]),
            {
                shouldOpenGameProfile: p && !0 === y,
                applicationId: n,
            }
        );
    };
