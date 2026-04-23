"use strict";
n.d(t, { Ay: () => S, oS: () => T }), n(321073);
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(353874),
    o = n(763956),
    l = n(665260),
    u = n(574381),
    c = n(311907),
    d = n(587895),
    _ = n(429913),
    f = n(311043),
    p = n(454908),
    h = n(954571),
    E = n(829806),
    m = n(652215);
let g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        h.default.track(m.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: r,
        });
    },
    A = (e) => {
        let t = [];
        return null == e
            ? ["no match"]
            : (l.Lt(e.gameFlags, a.c.GAME_PROFILE_DISABLED) && t.push("profile disabled"),
              e.themes.includes(o.W.EROTIC) && t.push("nsfw"),
              (null == e.description || 0 === e.description.length) && t.push("no summary"),
              t);
    },
    I = (e) => 0 === A(e).length,
    T = (e) => I(f.A.getGame(e)),
    S = (e) => {
        let { applicationId: t = "", source: n, trackEntryPointImpression: i = !0 } = e,
            a = r.useRef(!1),
            o =
                ((0, E.kW)("useShouldOpenGameProfileModal") && ((0, u.m0)() || (0, u.un)())) ||
                (0, u.xl)() ||
                (0, u.HZ)(),
            l = (0, c.bG)([d.A], () => d.A.getApplication(t)),
            h = r.useMemo(
                () => [t, ...(l?.linkedGames?.map((e) => e.id) ?? [])].filter((e) => null != e && "" !== e),
                [t, l],
            );
        (0, _.A)(o ? h : []), (0, p.x)(o ? h : []);
        let m = (0, c.bG)([f.A], () => h.find((e) => I(f.A.getGame(e)))),
            T = (0, c.bG)([f.A, d.A], () => h.every((e) => !f.A.isFetching(e) && !d.A.isFetchingApplication(e)));
        return (
            r.useEffect(() => {
                if (!a.current && o && i && null != l && (T || null != m)) {
                    let e = null != m ? f.A.getGame(m) : f.A.getGame(l.id);
                    if (null != e) {
                        s()(null != n, "Cannot track a Game Profile Entry Point Impressions without a source.");
                        let t = A(e);
                        g(null != m, e.applicationId, t, n), (a.current = !0);
                    }
                }
            }, [m, l, o, T, n, i]),
            { shouldOpenGameProfile: o && null != m, applicationId: m }
        );
    };
