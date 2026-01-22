n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(793943),
    s = n(287809),
    o = n(927578),
    c = n(350972),
    u = n(677056),
    d = n(526162),
    f = n(635917);

function p() {
    let [e, t] = (0, l.yK)([s.default, d.A], () => [
            d.A.getCurrentDesktopIcon(),
            o.Ay.isPremium(s.default.getCurrentUser()),
        ]),
        n = (0, a.fy)().activePanel === a.HP.APP_ICON,
        p = (0, f.gG)(e),
        h = p.id !== c.LW.DEFAULT && (t || n),
        b = (0, r.jsx)(i.pVd, {
            size: "custom",
            color: "currentColor",
            width: 24,
            height: 24,
        });
    return null != p && h
        ? (0, r.jsx)(u.A, {
              id: p.id,
              width: 48,
          })
        : b;
}
