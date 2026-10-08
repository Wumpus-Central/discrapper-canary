l.d(t, { A: () => G, m: () => P });
var n = l(582128),
    u = l(17928),
    r = l(554146),
    i = l(501419),
    o = l(131607),
    s = l(645619),
    A = l(786173),
    _ = l(568065),
    E = l(49999);
let a = r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
function d(e) {
    let t = (0, u.bG)([s.A], () => s.A.getStateForGuild(e)),
        l = (0, A.A)(e, t ?? void 0);
    return l >= _.QS.GUILD_THEME ? l : 0;
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = d(e),
        [u, r] = (0, o.RF)(l > 0 && !t ? a : null, l),
        i = u === a,
        s = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.i.TAKE_ACTION;
                i && r(e);
            },
            [i, r],
        );
    return { showNewBadgeOnRow: i, dismissNewBadgeIfShown: s };
}
function P(e) {
    let t = d(e);
    n.useEffect(() => {
        t > 0 && (0, i.$l)(a, t, { dismissAction: E.i.AUTO_DISMISS, guildId: e });
    }, [t, e]);
}
