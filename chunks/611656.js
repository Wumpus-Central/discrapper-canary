"use strict";
n.d(t, { Ay: () => I, oS: () => A }), n(938796), n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(763956),
    o = n(665260),
    l = n(311907),
    u = n(587895),
    c = n(858177),
    d = n(524799),
    _ = n(585958),
    f = n(954571),
    p = n(658160),
    h = n(652215);
let m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(h.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
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
    A = (e) => E(d.A.getGame(e), u.A.getApplication(e)),
    I = (e) => {
        let {
                location: t,
                applicationId: n = "",
                autoTrackExposure: i = !0,
                source: s,
                trackEntryPointImpression: o = !0,
            } = e,
            u = r.useRef(!1),
            f = (0, p.MH)(t, i);
        (0, _.e)(f && "" !== n ? n : null);
        let h = (0, l.bG)([d.A], () => d.A.getGame(n)),
            A = (0, c.O)(n),
            I = r.useMemo(() => (null != h && null != A ? E(h, A) : null), [A, h]);
        return (
            r.useEffect(() => {
                !u.current &&
                    f &&
                    o &&
                    !1 === d.A.isFetching(n) &&
                    null != h &&
                    null != I &&
                    (a()(null != s, "Cannot track a Game Profile Entry Point Impressions without a source."),
                    m(I, n, g(h), s),
                    (u.current = !0));
            }, [I, n, f, h, s, o]),
            { shouldOpenGameProfile: f && !0 === I, applicationId: n }
        );
    };
