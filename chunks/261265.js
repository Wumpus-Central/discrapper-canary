n.d(t, { A: () => f });
var i = n(439372),
    r = n(826673),
    a = n(958872),
    s = n(952818),
    l = n(11044),
    o = n(153488),
    d = n(832163),
    c = n(716761),
    u = n(713913),
    _ = n(437614),
    E = n(13981),
    A = n(652215);
class h extends i.A {
    actions = {
        LOGOUT: () => (0, E.ik)({ type: "logout" }),
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChange(e),
    };
    handleRunningGamesChange = (e) => {
        let { added: t, removed: n } = e;
        if ((t.length > 0 && (0, E.ik)({ type: "game_launched" }), null == E.M6.getState().campaignId))
            for (let e of n) {
                let t = d.A.getApplicationIdFromDetectableId(e.id) ?? e.id,
                    n = (0, u.CG)(t);
                if (null == n) continue;
                let i = o.A.hasConsented(A.YAq.PERSONALIZATION)
                    ? s.Ay.isDetectionEnabled(e)
                        ? (0, r.k8)(n.dismissibleContent)
                            ? _.Lp.ALREADY_DISMISSED
                            : (0, a.P3)(n.dismissibleContent)
                              ? _.Lp.NEW_USER
                              : null
                        : _.Lp.DETECTION_DISABLED
                    : _.Lp.NO_PERSONALIZATION_CONSENT;
                if (null != i) {
                    (0, c.X)(A.HAw.SLAYER_STOREFRONT_GAME_EXIT_PROMO_SKIPPED, n, { type: i });
                    continue;
                }
                ((0, l.N)(n.imageUrl), (0, E.sC)(n.id));
                return;
            }
    };
}
let f = new h();
