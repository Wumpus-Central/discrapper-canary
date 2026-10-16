n.d(t, { A: () => E });
var i = n(439372),
    r = n(826673),
    a = n(958872),
    s = n(952818),
    l = n(153488),
    o = n(832163),
    d = n(713913),
    c = n(13981),
    u = n(652215);
class _ extends i.A {
    actions = {
        LOGOUT: () => (0, c.ik)({ type: "logout" }),
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChange(e),
    };
    handleRunningGamesChange = (e) => {
        let { added: t, removed: n } = e;
        if ((t.length > 0 && (0, c.ik)({ type: "game_launched" }), l.A.hasConsented(u.YAq.PERSONALIZATION)))
            for (let e of n) {
                if (!s.Ay.isDetectionEnabled(e)) continue;
                let t = o.A.getApplicationIdFromDetectableId(e.id) ?? e.id,
                    n = (0, d.CG)(t);
                if (null != n && !((0, r.k8)(n.dismissibleContent) || (0, a.P3)(n.dismissibleContent))) {
                    (!(function (e) {
                        let t = new Image();
                        ((t.src = e), (t.onload = () => void 0));
                    })(n.imageUrl),
                        (0, c.sC)(n.id));
                    return;
                }
            }
    };
}
let E = new _();
