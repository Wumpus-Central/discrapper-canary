n.d(t, { A: () => A });
var i = n(439372),
    r = n(826673),
    a = n(958872),
    s = n(952818),
    l = n(11044),
    o = n(153488),
    d = n(832163),
    c = n(713913),
    u = n(13981),
    _ = n(652215);
class E extends i.A {
    actions = {
        LOGOUT: () => (0, u.ik)({ type: "logout" }),
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChange(e),
    };
    handleRunningGamesChange = (e) => {
        let { added: t, removed: n } = e;
        if ((t.length > 0 && (0, u.ik)({ type: "game_launched" }), o.A.hasConsented(_.YAq.PERSONALIZATION)))
            for (let e of n) {
                if (!s.Ay.isDetectionEnabled(e)) continue;
                let t = d.A.getApplicationIdFromDetectableId(e.id) ?? e.id,
                    n = (0, c.CG)(t);
                if (null != n && !((0, r.k8)(n.dismissibleContent) || (0, a.P3)(n.dismissibleContent))) {
                    ((0, l.N)(n.imageUrl), (0, u.sC)(n.id));
                    return;
                }
            }
    };
}
let A = new E();
