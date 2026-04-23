s.d(t, { A: () => x });
var r = s(627968),
    a = s(64700),
    i = s(311907),
    n = s(851746),
    l = s(694080),
    o = s(422936),
    c = s(234419),
    d = s(421116),
    m = s(727949),
    u = s(166913),
    _ = s(788868);
let x = (e) => {
    let { entrypoint: t } = e,
        s = (0, c.V)(),
        x = (0, o.O)(),
        p = (0, m.NF)({ trialOffer: s }),
        g = (0, m.Tp)(),
        h = (0, i.bG)([n.A], () => n.A.getReminderStateId());
    return (a.useEffect(() => {
        !0 === p && (0, m.QG)(), !0 === g && (0, m.ne)(h), (null != s || null != x) && (0, l.u1)(s, x);
    }, [s, x, p, g, h]),
    t === _.Mf.UserSettings)
        ? (0, r.jsx)(u.A, {})
        : t === _.Mf.ApplicationStoreHome
          ? (0, r.jsx)(d.A, {})
          : null;
};
