n.d(t, { A: () => G, m: () => R });
var u = n(64700),
    l = n(17928),
    r = n(554146),
    i = n(367727),
    o = n(131607),
    s = n(645619),
    A = n(786173),
    _ = n(568065),
    E = n(49999);
let a = r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
function d(e) {
    let t = (0, l.bG)([s.A], () => s.A.getStateForGuild(e)),
        n = (0, A.A)(e, t ?? void 0);
    return n >= _.QS.GUILD_THEME ? n : 0;
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = d(e),
        [l, r] = (0, o.RF)(n > 0 && !t ? a : null, n),
        i = l === a,
        s = u.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.i.TAKE_ACTION;
                i && r(e);
            },
            [i, r],
        );
    return { showNewBadgeOnRow: i, dismissNewBadgeIfShown: s };
}
function R(e) {
    let t = d(e);
    u.useEffect(() => {
        t > 0 && (0, i.$l)(a, t, { dismissAction: E.i.AUTO_DISMISS, guildId: e });
    }, [t, e]);
}
