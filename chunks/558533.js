n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(851746),
    r = n(694080),
    o = n(422936),
    c = n(234419),
    d = n(421116),
    u = n(727949),
    _ = n(166913),
    m = n(788868);
let A = (e) => {
    let { entrypoint: t } = e,
        n = (0, c.V)(),
        A = (0, o.O)(),
        g = (0, u.NF)({ trialOffer: n }),
        h = (0, u.Tp)(),
        x = (0, a.bG)([l.A], () => l.A.getReminderStateId());
    return (s.useEffect(() => {
        !0 === g && (0, u.QG)(), !0 === h && (0, u.ne)(x), (null != n || null != A) && (0, r.u1)(n, A);
    }, [n, A, g, h, x]),
    t === m.Mf.UserSettings)
        ? (0, i.jsx)(_.A, {})
        : t === m.Mf.ApplicationStoreHome
          ? (0, i.jsx)(d.A, {})
          : null;
};
