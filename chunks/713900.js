n.d(i, { T_: () => g, oS: () => C, Ay: () => k }), n(321073);
var t,
    a,
    l = n(64700),
    o = n(284009),
    r = n.n(o),
    d = (((t = {})[(t.GAME_PROFILE_DISABLED = 1)] = "GAME_PROFILE_DISABLED"), t),
    s =
        (((a = {})[(a.THRILLER = 0)] = "THRILLER"),
        (a[(a.SCIENCE_FICTION = 1)] = "SCIENCE_FICTION"),
        (a[(a.ACTION = 2)] = "ACTION"),
        (a[(a.HORROR = 3)] = "HORROR"),
        (a[(a.SURVIVAL = 4)] = "SURVIVAL"),
        (a[(a.FANTASY = 5)] = "FANTASY"),
        (a[(a.HISTORICAL = 6)] = "HISTORICAL"),
        (a[(a.STEALTH = 7)] = "STEALTH"),
        (a[(a.COMEDY = 8)] = "COMEDY"),
        (a[(a.BUSINESS = 9)] = "BUSINESS"),
        (a[(a.DRAMA = 10)] = "DRAMA"),
        (a[(a.NON_FICTION = 11)] = "NON_FICTION"),
        (a[(a.KIDS = 12)] = "KIDS"),
        (a[(a.SANDBOX = 13)] = "SANDBOX"),
        (a[(a.OPEN_WORLD = 14)] = "OPEN_WORLD"),
        (a[(a.WARFARE = 15)] = "WARFARE"),
        (a[(a.EDUCATIONAL = 16)] = "EDUCATIONAL"),
        (a[(a.MYSTERY = 17)] = "MYSTERY"),
        (a[(a.PARTY = 18)] = "PARTY"),
        (a[(a.ROMANCE = 19)] = "ROMANCE"),
        (a[(a.EROTIC = 20)] = "EROTIC"),
        a),
    u = n(665260),
    c = n(574381),
    m = n(311043),
    _ = n(954571);
let p = (0, n(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var A = n(429913),
    f = n(569926),
    L = n(227309),
    I = n(871633),
    E = n(652215);
let S = function (e, i) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            t = arguments.length > 3 ? arguments[3] : void 0;
        _.default.track(E.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: i,
            rejection_reason: n,
            source: t,
        });
    },
    R = (e) => {
        if (null == e) return ["no match"];
        let i = [];
        return (
            u.Lt(e.gameFlags, d.GAME_PROFILE_DISABLED) && i.push("profile disabled"),
            e.themes.includes(s.EROTIC) && i.push("nsfw"),
            i
        );
    },
    g = (e) => 0 === R(e).length,
    C = (e) => g(m.A.getGame(e)),
    k = (e) => {
        let { applicationId: i = "", gameId: n, source: t, trackEntryPointImpression: a = !0 } = e,
            o = l.useRef(!1),
            d =
                (p.useConfig({ location: "useShouldOpenGameProfileModal" }).enabled && ((0, c.m0)() || (0, c.un)())) ||
                (0, c.xl)() ||
                (0, c.HZ)(),
            {
                gameId: s,
                gameRecord: u,
                isLoading: m,
            } = (function (e) {
                let { applicationId: i, gameId: n } = e,
                    t = (0, A.h)(null == n ? i : void 0),
                    a = (function (e) {
                        let { applicationId: i, gameId: n } = e,
                            t = (0, A.h)(null == n ? i : void 0),
                            a = null == n && null != i && null == t,
                            o = l.useMemo(() => (null != n ? n : null == t ? null : t.getCanonicalGameId()), [n, t]),
                            { data: r, isLoading: d } = (0, f.I)(o);
                        return { gameId: o, gameRecord: r ?? null, isLoading: a || d };
                    })({ applicationId: i, gameId: null != t && (0, I.bB)(t) ? L.aX : n }),
                    o = null != a.gameRecord && (0, I.Zb)(a.gameRecord),
                    { data: r, isLoading: d } = (0, f.I)(o ? L.aX : void 0);
                return o ? { gameId: L.aX, gameRecord: r ?? null, isLoading: d } : a;
            })({ applicationId: d ? i : void 0, gameId: d ? n : void 0 }),
            _ = g(u);
        return (
            l.useEffect(() => {
                if (!o.current && d && a && !m && null != u) {
                    r()(null != t, "Cannot track a Game Profile Entry Point Impressions without a source.");
                    let e = R(u);
                    S(_, u.id, e, t), (o.current = !0);
                }
            }, [d, u, _, m, t, a]),
            { shouldOpenGameProfile: d && _, gameId: s }
        );
    };
