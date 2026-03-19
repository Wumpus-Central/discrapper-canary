n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(935649),
    a = n(847599),
    r = n(36149),
    o = n(323073),
    d = n(264249),
    c = n(253932),
    u = n(406274),
    _ = n(106148),
    m = n(650832),
    g = n(985018);
function A() {
    let e = (0, u.A)() ?? !0,
        t = (0, d.tI)(),
        n = (0, o.sP)(),
        A = (0, r.yM)(),
        x = s.useMemo(() => (!n || !!A) && !e, [n, e, A]),
        h = s.useCallback(
            (e) => {
                n && e
                    ? l.A.showAgeVerificationGetStartedModal({
                          entryPoint: a.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS,
                      })
                    : c.Kg.updateSetting(e);
            },
            [n],
        );
    return (0, i.jsx)(_.h, {
        children: (0, i.jsx)(m.Ay, {
            title: g.intl.string(g.t["L+yTsa"]),
            value: t,
            onChange: h,
            disabled: x,
            note: g.intl.string(g.t.hiM8pU),
        }),
    });
}
