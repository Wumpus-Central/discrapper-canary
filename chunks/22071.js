r.d(t, { r: () => L });
var s = r(627968),
    n = r(64700),
    l = r(17928),
    a = r(834730),
    i = r(496431),
    u = r(765548),
    c = r(414121),
    d = r(287809),
    f = r(765178),
    o = r(451988),
    x = r(990078),
    m = r(408278),
    h = r(933832),
    j = r(624479),
    k = r(957565),
    p = r(375708),
    v = r(572336);
function g(e) {
    let { url: t } = e,
        [r, l] = n.useState(!1),
        [a] = n.useState(() => new o.Ep());
    n.useEffect(() => () => a.stop(), [a]);
    let [i, u] = n.useState(t);
    t !== i && (u(t), l(!1));
    let c = n.useCallback(() => {
            (0, k.C)(t, () => {
                l(!0), f.O.announce(p.intl.string(p.t["+5kSoW"])), a.start(1e3, () => l(!1));
            });
        }, [t, a]),
        d = p.intl.string(r ? p.t["+5kSoW"] : p.t.WqhZss);
    return (0, s.jsxs)("div", {
        className: v.nM,
        children: [
            (0, s.jsx)("input", {
                className: v.nf,
                type: "text",
                value: t,
                readOnly: !0,
                "aria-label": p.intl.string(p.t.WqhZss),
                onFocus: (e) => e.currentTarget.select(),
            }),
            k.p5 &&
                (0, s.jsx)(x.m, {
                    text: d,
                    children: (0, s.jsx)(m.K, {
                        size: "md",
                        variant: "secondary",
                        "aria-label": d,
                        icon: r ? h.A : j.T,
                        onClick: c,
                    }),
                }),
        ],
    });
}
var A = r(191627),
    b = r(602339),
    E = r(294051);
function L(e) {
    let t,
        r,
        { linkCode: f, expiresAt: o, onRefresh: x } = e,
        m = (0, l.bG)([d.default], () => d.default.getCurrentUser()?.id),
        h = (0, u.A)(x),
        { days: j, hours: k, minutes: v, seconds: L } = (0, i.A)(o);
    if (
        (n.useEffect(() => {
            let e = o - Date.now();
            if (e <= 0) return void h();
            let t = setTimeout(h, e);
            return () => clearTimeout(t);
        }, [o, h]),
        null == m)
    )
        return null;
    let N = (0, A.jZ)(m, f),
        S = p.intl.string(b.default.RfkLDs);
    return (0, s.jsxs)("div", {
        className: E.kL,
        children: [
            (0, s.jsxs)("div", {
                className: E.Nr,
                children: [
                    (0, s.jsxs)("div", {
                        className: E.wx,
                        children: [
                            (0, s.jsx)(a.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: p.intl.string(b.default.pojgfk),
                            }),
                            (0, s.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: `${S} ${((r = Math.floor((t = Math.max(0, 86400 * j + 3600 * k + 60 * v + L)) / 60)), `${r}:${String(t % 60).padStart(2, "0")}`)}`,
                            }),
                        ],
                    }),
                    (0, s.jsx)(c.Lx, { size: 200, text: N, ariaLabel: p.intl.string(b.default.Mi60fm) }),
                ],
            }),
            (0, s.jsx)("div", {
                className: E.yF,
                children: (0, s.jsx)(a.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: p.intl.string(b.default.TGr8Ws),
                }),
            }),
            (0, s.jsx)(g, { url: N }),
        ],
    });
}
