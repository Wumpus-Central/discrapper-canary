(t.d(e, { Ay: () => m, oS: () => _, T_: () => h, TC: () => A }), t(321073));
var l,
    u = t(582128),
    a = t(284009),
    i = t.n(a),
    r = (((l = {})[(l.GAME_DISABLED = 1)] = "GAME_DISABLED"), l),
    o = t(665260),
    c = t(501592),
    s = t(311043),
    d = t(980822),
    f = t(129230),
    p = t(652215);
function A(n) {
    return o.Lt(n.gameFlags, r.GAME_DISABLED);
}
function g(n) {
    if (null == n) return ["no match"];
    let e = [];
    return (A(n) && e.push("profile disabled"), (0, c.K)(n.contentClassification) && e.push("nsfw"), e);
}
function h(n) {
    return 0 === g(n).length;
}
function _(n) {
    return h(s.A.getGame(n));
}
let m = function (n) {
    let { applicationId: e = "", gameId: t, source: l, trackEntryPointImpression: a = !0 } = n,
        r = u.useRef(!1),
        { gameId: o, gameRecord: c, isLoading: s } = (0, d.A)({ applicationId: e, gameId: t }),
        h = null != c && !A(c);
    return (
        u.useEffect(() => {
            r.current ||
                !a ||
                s ||
                null == c ||
                (i()(null != l, "Cannot track a Game Profile Entry Point Impressions without a source."),
                (function (n, e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        l = arguments.length > 3 ? arguments[3] : void 0;
                    f.default.track(p.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
                        game_profile_available: n,
                        application_id: e,
                        rejection_reason: t,
                        source: l,
                    });
                })(h, c.id, g(c), l),
                (r.current = !0));
        }, [c, h, s, l, a]),
        { shouldOpenGameProfile: h, gameId: o }
    );
};
