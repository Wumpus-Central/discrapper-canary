"use strict";
n.d(t, { T_: () => S, oS: () => N, Ay: () => C }), n(321073);
var i,
    r,
    s = n(64700),
    a = n(284009),
    o = n.n(a),
    l = (((i = {})[(i.GAME_PROFILE_DISABLED = 1)] = "GAME_PROFILE_DISABLED"), i),
    d =
        (((r = {})[(r.THRILLER = 0)] = "THRILLER"),
        (r[(r.SCIENCE_FICTION = 1)] = "SCIENCE_FICTION"),
        (r[(r.ACTION = 2)] = "ACTION"),
        (r[(r.HORROR = 3)] = "HORROR"),
        (r[(r.SURVIVAL = 4)] = "SURVIVAL"),
        (r[(r.FANTASY = 5)] = "FANTASY"),
        (r[(r.HISTORICAL = 6)] = "HISTORICAL"),
        (r[(r.STEALTH = 7)] = "STEALTH"),
        (r[(r.COMEDY = 8)] = "COMEDY"),
        (r[(r.BUSINESS = 9)] = "BUSINESS"),
        (r[(r.DRAMA = 10)] = "DRAMA"),
        (r[(r.NON_FICTION = 11)] = "NON_FICTION"),
        (r[(r.KIDS = 12)] = "KIDS"),
        (r[(r.SANDBOX = 13)] = "SANDBOX"),
        (r[(r.OPEN_WORLD = 14)] = "OPEN_WORLD"),
        (r[(r.WARFARE = 15)] = "WARFARE"),
        (r[(r.EDUCATIONAL = 16)] = "EDUCATIONAL"),
        (r[(r.MYSTERY = 17)] = "MYSTERY"),
        (r[(r.PARTY = 18)] = "PARTY"),
        (r[(r.ROMANCE = 19)] = "ROMANCE"),
        (r[(r.EROTIC = 20)] = "EROTIC"),
        r),
    _ = n(665260),
    u = n(574381),
    c = n(311043),
    E = n(954571);
let h = (0, n(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var m = n(429913),
    f = n(569926),
    g = n(227309),
    p = n(871633),
    A = n(652215);
let I = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0;
        E.default.track(A.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: i,
        });
    },
    T = (e) => {
        if (null == e) return ["no match"];
        let t = [];
        return (
            _.Lt(e.gameFlags, l.GAME_PROFILE_DISABLED) && t.push("profile disabled"),
            e.themes.includes(d.EROTIC) && t.push("nsfw"),
            t
        );
    },
    S = (e) => 0 === T(e).length,
    N = (e) => S(c.A.getGame(e)),
    C = (e) => {
        let { applicationId: t = "", gameId: n, source: i, trackEntryPointImpression: r = !0 } = e,
            a = s.useRef(!1),
            l =
                (h.useConfig({ location: "useShouldOpenGameProfileModal" }).enabled && ((0, u.m0)() || (0, u.un)())) ||
                (0, u.xl)() ||
                (0, u.HZ)(),
            {
                gameId: d,
                gameRecord: _,
                isLoading: c,
            } = (function (e) {
                let { applicationId: t, gameId: n } = e,
                    i = (0, m.h)(null == n ? t : void 0),
                    r = (function (e) {
                        let { applicationId: t, gameId: n } = e,
                            i = (0, m.h)(null == n ? t : void 0),
                            r = null == n && null != t && null == i,
                            a = s.useMemo(() => (null != n ? n : null == i ? null : i.getCanonicalGameId()), [n, i]),
                            { data: o, isLoading: l } = (0, f.I)(a);
                        return { gameId: a, gameRecord: o ?? null, isLoading: r || l };
                    })({ applicationId: t, gameId: null != i && (0, p.bB)(i) ? g.aX : n }),
                    a = null != r.gameRecord && (0, p.Zb)(r.gameRecord),
                    { data: o, isLoading: l } = (0, f.I)(a ? g.aX : void 0);
                return a ? { gameId: g.aX, gameRecord: o ?? null, isLoading: l } : r;
            })({ applicationId: l ? t : void 0, gameId: l ? n : void 0 }),
            E = S(_);
        return (
            s.useEffect(() => {
                if (!a.current && l && r && !c && null != _) {
                    o()(null != i, "Cannot track a Game Profile Entry Point Impressions without a source.");
                    let e = T(_);
                    I(E, _.id, e, i), (a.current = !0);
                }
            }, [l, _, E, c, i, r]),
            { shouldOpenGameProfile: l && E, gameId: d }
        );
    };
