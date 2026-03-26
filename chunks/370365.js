n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(587895),
    o = n(15285),
    d = n(769015),
    c = n(663677),
    u = n(760751),
    m = n(189081),
    _ = n(686533),
    g = n(502040);
function x(e) {
    let { game: t, gameApplication: n } = e,
        a = s.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, l.bG)([r.A], () => (null != n ? n : r.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(d.A, { game: o, pid: a, size: d.M.SMALL });
}
function A(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: r,
            getEnabledFromStatus: d,
            onChange: A,
            clientSettingType: h,
            ariaLabel: p,
        } = e,
        f = (0, l.cf)([o.Ay, u.A, m.A], () => (0, o.xU)(t, o.Ay, u.A, m.A)),
        T = (0, l.cf)([u.A, m.A], () => (0, o.hw)(t, !1, [u.A, m.A]), [t]),
        S = d(T),
        [E, b] = s.useState(S);
    return (
        s.useEffect(() => {
            b(S);
        }, [S]),
        (0, i.jsx)(_.A, {
            title: t.name,
            icon: (0, i.jsx)(x, { game: f, gameApplication: n }),
            "aria-label": p,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.dOG, {
                        checked: E,
                        disabled: r,
                        onChange: (e) => {
                            let n;
                            return (n = !e && E), void (b(e), A(e, f, T), n && (0, c.L)(h, f.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: g.Kz }),
                ],
            }),
        })
    );
}
