"use strict";
n.d(t, { Ay: () => T, oS: () => I }), n(321073);
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(763956),
    o = n(311907),
    l = n(587895),
    u = n(429913),
    c = n(20015),
    d = n(136086),
    _ = n(885151),
    f = n(954571),
    p = n(658160),
    h = n(476464),
    m = n(652215);
let E = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(m.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
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
            : ((0, c.n)(t, m.gfo.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
              e.themes.includes(a.W.EROTIC) && n.push("nsfw"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              n);
    },
    A = (e, t) => 0 === g(e, t).length,
    I = (e) => A(d.A.getGame(e)?.supplementalData, l.A.getApplication(e)),
    T = (e) => {
        let {
                location: t,
                applicationId: n = "",
                autoTrackExposure: i = !0,
                source: a,
                trackEntryPointImpression: c = !0,
            } = e,
            f = r.useRef(!1),
            m = (0, p.MH)(t, i),
            I = (0, h._)(t),
            T = m || I,
            S = (0, o.bG)([l.A], () => l.A.getApplication(n)),
            y = r.useMemo(
                () => [n, ...(S?.linkedGames?.map((e) => e.id) ?? [])].filter((e) => null != e && "" !== e),
                [n, S],
            );
        (0, u.A)(T ? y : []), (0, _.W)(T ? y : []);
        let v = (0, o.bG)([d.A, l.A], () => y.find((e) => A(d.A.getGame(e)?.supplementalData, l.A.getApplication(e)))),
            N = (0, o.bG)([d.A, l.A], () => y.every((e) => !d.A.isFetching(e) && !l.A.isFetchingApplication(e)));
        return (
            r.useEffect(() => {
                if (!f.current && T && c && null != S && (N || null != v)) {
                    let e = null != v ? d.A.getGame(v) : d.A.getGame(S.id);
                    if (null != e) {
                        s()(null != a, "Cannot track a Game Profile Entry Point Impressions without a source.");
                        let t = g(e.supplementalData, S);
                        E(null != v, e.applicationId, t, a), (f.current = !0);
                    }
                }
            }, [v, S, T, N, a, c]),
            { shouldOpenGameProfile: T && null != v, applicationId: v }
        );
    };
