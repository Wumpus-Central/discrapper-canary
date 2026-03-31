n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(793943),
    r = n(287809),
    o = n(927578),
    c = n(350972),
    d = n(677056),
    u = n(526162),
    h = n(635917);
function A() {
    let [e, t] = (0, l.yK)([r.default, u.A], () => [
            u.A.getCurrentDesktopIcon(),
            o.Ay.isPremium(r.default.getCurrentUser()),
        ]),
        n = (0, a.fy)().activePanel === a.HP.APP_ICON,
        A = (0, h.gG)(e),
        _ = A.id !== c.LW.DEFAULT && (t || n),
        m = (0, i.jsx)(s.pVd, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != A && _ ? (0, i.jsx)(d.A, { id: A.id, size: h.N8.SIZE_48 }) : m;
}
