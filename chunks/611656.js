"use strict";
n.d(t, { Ay: () => T, oS: () => I }), n(321073);
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(763956),
    o = n(574381),
    l = n(311907),
    u = n(587895),
    c = n(429913),
    d = n(20015),
    _ = n(136086),
    f = n(885151),
    p = n(954571),
    h = n(829806),
    m = n(652215);
let E = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        p.default.track(m.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
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
            : ((0, d.n)(t, m.gfo.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
              e.themes.includes(a.W.EROTIC) && n.push("nsfw"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              (null == e.summary || 0 === e.summary.length) && n.push("no summary"),
              n);
    },
    A = (e, t) => 0 === g(e, t).length,
    I = (e) => A(_.A.getGame(e)?.supplementalData, u.A.getApplication(e)),
    T = (e) => {
        let { applicationId: t = "", source: n, trackEntryPointImpression: i = !0 } = e,
            a = r.useRef(!1),
            d =
                ((0, h.kW)("useShouldOpenGameProfileModal") && ((0, o.m0)() || (0, o.un)())) ||
                (0, o.xl)() ||
                (0, o.HZ)(),
            p = (0, l.bG)([u.A], () => u.A.getApplication(t)),
            m = r.useMemo(
                () => [t, ...(p?.linkedGames?.map((e) => e.id) ?? [])].filter((e) => null != e && "" !== e),
                [t, p],
            );
        (0, c.A)(d ? m : []), (0, f.W)(d ? m : []);
        let I = (0, l.bG)([_.A, u.A], () => m.find((e) => A(_.A.getGame(e)?.supplementalData, u.A.getApplication(e)))),
            T = (0, l.bG)([_.A, u.A], () => m.every((e) => !_.A.isFetching(e) && !u.A.isFetchingApplication(e)));
        return (
            r.useEffect(() => {
                if (!a.current && d && i && null != p && (T || null != I)) {
                    let e = null != I ? _.A.getGame(I) : _.A.getGame(p.id);
                    if (null != e) {
                        s()(null != n, "Cannot track a Game Profile Entry Point Impressions without a source.");
                        let t = g(e.supplementalData, p);
                        E(null != I, e.applicationId, t, n), (a.current = !0);
                    }
                }
            }, [I, p, d, T, n, i]),
            { shouldOpenGameProfile: d && null != I, applicationId: I }
        );
    };
