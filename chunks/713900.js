l.d(n, { T_: () => h, oS: () => C, Ay: () => N }), l(321073);
var a,
    o,
    t = l(64700),
    i = l(284009),
    u = l.n(i),
    r = (((a = {})[(a.GAME_PROFILE_DISABLED = 1)] = "GAME_PROFILE_DISABLED"), a),
    d =
        (((o = {})[(o.THRILLER = 0)] = "THRILLER"),
        (o[(o.SCIENCE_FICTION = 1)] = "SCIENCE_FICTION"),
        (o[(o.ACTION = 2)] = "ACTION"),
        (o[(o.HORROR = 3)] = "HORROR"),
        (o[(o.SURVIVAL = 4)] = "SURVIVAL"),
        (o[(o.FANTASY = 5)] = "FANTASY"),
        (o[(o.HISTORICAL = 6)] = "HISTORICAL"),
        (o[(o.STEALTH = 7)] = "STEALTH"),
        (o[(o.COMEDY = 8)] = "COMEDY"),
        (o[(o.BUSINESS = 9)] = "BUSINESS"),
        (o[(o.DRAMA = 10)] = "DRAMA"),
        (o[(o.NON_FICTION = 11)] = "NON_FICTION"),
        (o[(o.KIDS = 12)] = "KIDS"),
        (o[(o.SANDBOX = 13)] = "SANDBOX"),
        (o[(o.OPEN_WORLD = 14)] = "OPEN_WORLD"),
        (o[(o.WARFARE = 15)] = "WARFARE"),
        (o[(o.EDUCATIONAL = 16)] = "EDUCATIONAL"),
        (o[(o.MYSTERY = 17)] = "MYSTERY"),
        (o[(o.PARTY = 18)] = "PARTY"),
        (o[(o.ROMANCE = 19)] = "ROMANCE"),
        (o[(o.EROTIC = 20)] = "EROTIC"),
        o),
    s = l(665260),
    A = l(574381),
    I = l(311043),
    E = l(954571);
let c = (0, l(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var f = l(429913),
    p = l(569926),
    R = l(227309),
    O = l(871633),
    m = l(652215);
let g = function (e, n) {
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            a = arguments.length > 3 ? arguments[3] : void 0;
        E.default.track(m.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: n,
            rejection_reason: l,
            source: a,
        });
    },
    L = (e) => {
        if (null == e) return ["no match"];
        let n = [];
        return (
            s.Lt(e.gameFlags, r.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
            e.themes.includes(d.EROTIC) && n.push("nsfw"),
            n
        );
    },
    h = (e) => 0 === L(e).length,
    C = (e) => h(I.A.getGame(e)),
    N = (e) => {
        let { applicationId: n = "", gameId: l, source: a, trackEntryPointImpression: o = !0 } = e,
            i = t.useRef(!1),
            r =
                (c.useConfig({ location: "useShouldOpenGameProfileModal" }).enabled && ((0, A.m0)() || (0, A.un)())) ||
                (0, A.xl)() ||
                (0, A.HZ)(),
            {
                gameId: d,
                gameRecord: s,
                isLoading: I,
            } = (function (e) {
                let { applicationId: n, gameId: l } = e,
                    a = (0, f.h)(null == l ? n : void 0),
                    o = (function (e) {
                        let { applicationId: n, gameId: l } = e,
                            a = (0, f.h)(null == l ? n : void 0),
                            o = null == l && null != n && null == a,
                            i = t.useMemo(() => (null != l ? l : null == a ? null : a.getCanonicalGameId()), [l, a]),
                            { data: u, isLoading: r } = (0, p.I)(i);
                        return { gameId: i, gameRecord: u ?? null, isLoading: o || r };
                    })({ applicationId: n, gameId: null != a && (0, O.bB)(a) ? R.aX : l }),
                    i = null != o.gameRecord && (0, O.Zb)(o.gameRecord),
                    { data: u, isLoading: r } = (0, p.I)(i ? R.aX : void 0);
                return i ? { gameId: R.aX, gameRecord: u ?? null, isLoading: r } : o;
            })({ applicationId: r ? n : void 0, gameId: r ? l : void 0 }),
            E = h(s);
        return (
            t.useEffect(() => {
                if (!i.current && r && o && !I && null != s) {
                    u()(null != a, "Cannot track a Game Profile Entry Point Impressions without a source.");
                    let e = L(s);
                    g(E, s.id, e, a), (i.current = !0);
                }
            }, [r, s, E, I, a, o]),
            { shouldOpenGameProfile: r && E, gameId: d }
        );
    };
