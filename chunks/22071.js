r.d(t, { r: () => C });
var s = r(477900),
    n = r(582128),
    l = r(17928),
    a = r(834730),
    i = r(496431),
    u = r(765548),
    c = r(414121),
    d = r(287809),
    o = r(451988),
    f = r(765178),
    m = r(866665),
    x = r(408278),
    h = r(933832),
    k = r(624479),
    j = r(957565),
    p = r(105292),
    g = r(604487);
function v(e) {
    let { url: t } = e,
        [r, l] = n.useState(!1),
        [a] = n.useState(() => new o.Ep());
    n.useEffect(() => () => a.stop(), [a]);
    let [i, u] = n.useState(t);
    t !== i && (u(t), l(!1));
    let c = n.useCallback(() => {
            (0, j.C)(t, () => {
                (l(!0), f.O.announce(p.intl.string(p.t["+5kSoW"])), a.start(1e3, () => l(!1)));
            });
        }, [t, a]),
        d = p.intl.string(r ? p.t["+5kSoW"] : p.t.WqhZss);
    return (0, s.jsxs)("div", {
        className: g.nM,
        children: [
            (0, s.jsx)("input", {
                className: g.nf,
                type: "text",
                value: t,
                readOnly: !0,
                "aria-label": p.intl.string(p.t.WqhZss),
                onFocus: (e) => e.currentTarget.select(),
            }),
            j.p5 &&
                (0, s.jsx)(m.m, {
                    text: d,
                    children: (0, s.jsx)(x.K, {
                        size: "md",
                        variant: "secondary",
                        "aria-label": d,
                        icon: r ? h.CheckmarkLargeIcon : k.CopyIcon,
                        onClick: c,
                    }),
                }),
        ],
    });
}
var b = r(191627),
    y = r(83152),
    A = r(232442);
function C(e) {
    let t,
        r,
        { linkCode: o, expiresAt: f, onRefresh: m } = e,
        x = (0, l.bG)([d.default], () => d.default.getCurrentUser()?.id),
        h = (0, u.A)(m),
        { days: k, hours: j, minutes: g, seconds: C } = (0, i.A)(f);
    if (
        (n.useEffect(() => {
            let e = f - Date.now();
            if (e <= 0) return void h();
            let t = setTimeout(h, e);
            return () => clearTimeout(t);
        }, [f, h]),
        null == x)
    )
        return null;
    let E = (0, b.jZ)(x, o),
        L = p.intl.string(y.default.RfkLDs);
    return (0, s.jsxs)("div", {
        className: A.kL,
        children: [
            (0, s.jsxs)("div", {
                className: A.Nr,
                children: [
                    (0, s.jsxs)("div", {
                        className: A.wx,
                        children: [
                            (0, s.jsx)(a.E, {
                                variant: "body-md/medium",
                                color: "text-default",
                                children: p.intl.string(y.default.pojgfk),
                            }),
                            (0, s.jsx)(a.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                children: `${L} ${((r = Math.floor((t = Math.max(0, 86400 * k + 3600 * j + 60 * g + C)) / 60)), `${r}:${String(t % 60).padStart(2, "0")}`)}`,
                            }),
                        ],
                    }),
                    (0, s.jsx)(c.Lx, { size: 200, text: E, ariaLabel: p.intl.string(y.default.Mi60fm) }),
                ],
            }),
            (0, s.jsx)("div", {
                className: A.yF,
                children: (0, s.jsx)(a.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: p.intl.string(y.default.TGr8Ws),
                }),
            }),
            (0, s.jsx)(v, { url: E }),
        ],
    });
}
