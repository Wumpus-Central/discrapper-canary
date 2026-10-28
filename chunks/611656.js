(t.d(n, { Ay: () => g, TC: () => p, T_: () => _, oS: () => A }), t(321073));
var i = t(582128),
    r = t(284009),
    u = t.n(r),
    a = t(353874),
    l = t(665260),
    o = t(501592),
    c = t(311043),
    s = t(980822),
    f = t(174459),
    d = t(652215);
function p(e) {
    return l.Lt(e.gameFlags, a.c.GAME_DISABLED);
}
function h(e) {
    if (null == e) return ["no match"];
    let n = [];
    return (p(e) && n.push("profile disabled"), (0, o.K)(e.contentClassification) && n.push("nsfw"), n);
}
function _(e) {
    return 0 === h(e).length;
}
function A(e) {
    return _(c.A.getGame(e));
}
let g = function (e) {
    let { applicationId: n = "", gameId: t, source: r, trackEntryPointImpression: a = !0 } = e,
        l = i.useRef(!1),
        { gameId: o, gameRecord: c, isLoading: _ } = (0, s.A)({ applicationId: n, gameId: t }),
        A = null != c && !p(c);
    return (
        i.useEffect(() => {
            l.current ||
                !a ||
                _ ||
                null == c ||
                (u()(null != r, "Cannot track a Game Profile Entry Point Impressions without a source."),
                (function (e, n) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    f.default.track(d.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
                        game_profile_available: e,
                        application_id: n,
                        rejection_reason: t,
                        source: i,
                    });
                })(A, c.id, h(c), r),
                (l.current = !0));
        }, [c, A, _, r, a]),
        { shouldOpenGameProfile: A, gameId: o }
    );
};
