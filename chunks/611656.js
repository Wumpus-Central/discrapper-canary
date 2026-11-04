t(321073);
var i = t(582128),
    r = t(284009),
    u = t.n(r),
    a = t(353874),
    o = t(665260),
    l = t(501592),
    c = t(311043),
    s = t(980822),
    f = t(129230),
    d = t(652215);
function p(n) {
    return o.Lt(n.gameFlags, a.c.GAME_DISABLED);
}
function h(n) {
    if (null == n) return ["no match"];
    let e = [];
    return (p(n) && e.push("profile disabled"), (0, l.K)(n.contentClassification) && e.push("nsfw"), e);
}
function _(n) {
    return 0 === h(n).length;
}
t.d(
    e,
    {},
    {
        Ay: function (n) {
            let { applicationId: e = "", gameId: t, source: r, trackEntryPointImpression: a = !0 } = n,
                o = i.useRef(!1),
                { gameId: l, gameRecord: c, isLoading: _ } = (0, s.A)({ applicationId: e, gameId: t }),
                A = null != c && !p(c);
            return (
                i.useEffect(() => {
                    o.current ||
                        !a ||
                        _ ||
                        null == c ||
                        (u()(null != r, "Cannot track a Game Profile Entry Point Impressions without a source."),
                        (function (n, e) {
                            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                i = arguments.length > 3 ? arguments[3] : void 0;
                            f.default.track(d.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
                                game_profile_available: n,
                                application_id: e,
                                rejection_reason: t,
                                source: i,
                            });
                        })(A, c.id, h(c), r),
                        (o.current = !0));
                }, [c, A, _, r, a]),
                { shouldOpenGameProfile: A, gameId: l }
            );
        },
        TC: p,
        T_: _,
        oS: function (n) {
            return _(c.A.getGame(n));
        },
    },
);
