t.d(i, { Ay: () => k, oS: () => S }), t(321073);
var n = t(64700),
    l = t(284009),
    a = t.n(l),
    o = t(353874),
    r = t(763956),
    s = t(665260),
    d = t(574381),
    u = t(311907),
    c = t(587895),
    p = t(429913),
    _ = t(311043),
    m = t(454908),
    A = t(954571),
    f = t(829806),
    h = t(652215);
let E = function (e, i) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            n = arguments.length > 3 ? arguments[3] : void 0;
        A.default.track(h.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: i,
            rejection_reason: t,
            source: n,
        });
    },
    L = (e) => {
        let i = [];
        return null == e
            ? ["no match"]
            : (s.Lt(e.gameFlags, o.c.GAME_PROFILE_DISABLED) && i.push("profile disabled"),
              e.themes.includes(r.W.EROTIC) && i.push("nsfw"),
              (null == e.description || 0 === e.description.length) && i.push("no summary"),
              i);
    },
    I = (e) => 0 === L(e).length,
    S = (e) => I(_.A.getGame(e)),
    k = (e) => {
        let { applicationId: i = "", source: t, trackEntryPointImpression: l = !0 } = e,
            o = n.useRef(!1),
            r =
                ((0, f.kW)("useShouldOpenGameProfileModal") && ((0, d.m0)() || (0, d.un)())) ||
                (0, d.xl)() ||
                (0, d.HZ)(),
            s = (0, u.bG)([c.A], () => c.A.getApplication(i)),
            A = n.useMemo(
                () => [i, ...(s?.linkedGames?.map((e) => e.id) ?? [])].filter((e) => null != e && "" !== e),
                [i, s],
            );
        (0, p.A)(r ? A : []), (0, m.x)(r ? A : []);
        let h = (0, u.bG)([_.A], () => A.find((e) => I(_.A.getGame(e)))),
            S = (0, u.bG)([_.A, c.A], () => A.every((e) => !_.A.isFetching(e) && !c.A.isFetchingApplication(e)));
        return (
            n.useEffect(() => {
                if (!o.current && r && l && null != s && (S || null != h)) {
                    let e = null != h ? _.A.getGame(h) : _.A.getGame(s.id);
                    if (null != e) {
                        a()(null != t, "Cannot track a Game Profile Entry Point Impressions without a source.");
                        let i = L(e);
                        E(null != h, e.applicationId, i, t), (o.current = !0);
                    }
                }
            }, [h, s, r, S, t, l]),
            { shouldOpenGameProfile: r && null != h, applicationId: h }
        );
    };
