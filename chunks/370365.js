n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(243721),
    r = n(587895),
    o = n(15285),
    d = n(769015),
    u = n(663677),
    c = n(760751),
    g = n(189081),
    m = n(686533),
    _ = n(481384);
function A(e) {
    let { game: t, gameApplication: n } = e,
        a = s.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, l.bG)([r.A], () => (null != n ? n : r.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(d.A, { game: o, pid: a, size: d.M.SMALL });
}
function h(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: r,
            getEnabledFromStatus: d,
            onChange: h,
            clientSettingType: p,
            ariaLabel: x,
        } = e,
        E = (0, l.cf)([o.Ay, c.A, g.A], () => (0, o.xU)(t, o.Ay, c.A, g.A)),
        T = (0, l.cf)([c.A, g.A], () => (0, o.hw)(t, !1, [c.A, g.A]), [t]),
        S = d(T),
        [f, b] = s.useState(S);
    return (
        s.useEffect(() => {
            b(S);
        }, [S]),
        (0, i.jsx)(m.A, {
            title: t.name,
            icon: (0, i.jsx)(A, { game: E, gameApplication: n }),
            "aria-label": x,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.d, {
                        checked: f,
                        disabled: r,
                        onChange: (e) => {
                            let n;
                            return (n = !e && f), void (b(e), h(e, E, T), n && (0, u.L)(p, E.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: _.Kz }),
                ],
            }),
        })
    );
}
