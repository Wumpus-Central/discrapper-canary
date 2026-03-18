"use strict";
n.d(t, { Ay: () => A, oS: () => g }), n(321073);
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
    p = n(652215);
let h = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(p.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: r,
        });
    },
    m = (e, t) => {
        let n = [];
        return null == e || null == t
            ? ["no match"]
            : ((0, c.n)(t, p.gfo.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
              e.themes.includes(a.W.EROTIC) && n.push("nsfw"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              n);
    },
    E = (e, t) => 0 === m(e, t).length,
    g = (e) => E(d.A.getGame(e)?.supplementalData, l.A.getApplication(e)),
    A = (e) => {
        let { applicationId: t = "", source: n, trackEntryPointImpression: i = !0 } = e,
            a = r.useRef(!1),
            c = (0, o.bG)([l.A], () => l.A.getApplication(t)),
            f = r.useMemo(
                () => [t, ...(c?.linkedGames?.map((e) => e.id) ?? [])].filter((e) => null != e && "" !== e),
                [t, c],
            );
        (0, u.A)(f), (0, _.W)(f);
        let p = (0, o.bG)([d.A, l.A], () => f.find((e) => E(d.A.getGame(e)?.supplementalData, l.A.getApplication(e)))),
            g = (0, o.bG)([d.A, l.A], () => f.every((e) => !d.A.isFetching(e) && !l.A.isFetchingApplication(e)));
        return (
            r.useEffect(() => {
                if (!a.current && i && null != c && (g || null != p)) {
                    let e = null != p ? d.A.getGame(p) : d.A.getGame(c.id);
                    if (null != e) {
                        s()(null != n, "Cannot track a Game Profile Entry Point Impressions without a source.");
                        let t = m(e.supplementalData, c);
                        h(null != p, e.applicationId, t, n), (a.current = !0);
                    }
                }
            }, [p, c, g, n, i]),
            { shouldOpenGameProfile: null != p, applicationId: p }
        );
    };
