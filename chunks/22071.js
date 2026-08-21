r.d(t, { r: () => E });
var s = r(477900),
    n = r(582128),
    l = r(17928),
    a = r(834730),
    i = r(496431),
    u = r(765548),
    c = r(414121),
    d = r(287809),
    o = r(765178),
    f = r(451988),
    x = r(866665),
    m = r(408278),
    h = r(933832),
    k = r(624479),
    j = r(957565),
    p = r(375708),
    g = r(604487);
function v(e) {
    let { url: t } = e,
        [r, l] = n.useState(!1),
        [a] = n.useState(() => new f.Ep());
    n.useEffect(() => () => a.stop(), [a]);
    let [i, u] = n.useState(t);
    t !== i && (u(t), l(!1));
    let c = n.useCallback(() => {
            (0, j.C)(t, () => {
                l(!0), o.O.announce(p.intl.string(p.t["+5kSoW"])), a.start(1e3, () => l(!1));
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
                (0, s.jsx)(x.m, {
                    text: d,
                    children: (0, s.jsx)(m.K, {
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
var A = r(191627),
    b = r(153648),
    C = r(232442);
function E(e) {
    let t,
        r,
        { linkCode: o, expiresAt: f, onRefresh: x } = e,
        m = (0, l.bG)([d.default], () => d.default.getCurrentUser()?.id),
        h = (0, u.A)(x),
        { days: k, hours: j, minutes: g, seconds: E } = (0, i.A)(f);
    if (
        (n.useEffect(() => {
            let e = f - Date.now();
            if (e <= 0) return void h();
            let t = setTimeout(h, e);
            return () => clearTimeout(t);
        }, [f, h]),
        null == m)
    )
        return null;
    let L = (0, A.jZ)(m, o),
        y = p.intl.string(b.default.RfkLDs);
    return (0, s.jsxs)("div", {
        className: C.kL,
        children: [
            (0, s.jsxs)("div", {
                className: C.Nr,
                children: [
                    (0, s.jsxs)("div", {
                        className: C.wx,
                        children: [
                            (0, s.jsx)(a.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: p.intl.string(b.default.pojgfk),
                            }),
                            (0, s.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: `${y} ${((r = Math.floor((t = Math.max(0, 86400 * k + 3600 * j + 60 * g + E)) / 60)), `${r}:${String(t % 60).padStart(2, "0")}`)}`,
                            }),
                        ],
                    }),
                    (0, s.jsx)(c.Lx, { size: 200, text: L, ariaLabel: p.intl.string(b.default.Mi60fm) }),
                ],
            }),
            (0, s.jsx)("div", {
                className: C.yF,
                children: (0, s.jsx)(a.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: p.intl.string(b.default.TGr8Ws),
                }),
            }),
            (0, s.jsx)(v, { url: L }),
        ],
    });
}
