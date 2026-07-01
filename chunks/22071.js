n.d(t, { r: () => N });
var s = n(627968),
    i = n(64700),
    l = n(17928),
    a = n(834730),
    r = n(496431),
    o = n(765548),
    u = n(414121),
    c = n(287809),
    d = n(765178),
    h = n(451988),
    m = n(990078),
    p = n(408278),
    f = n(933832),
    g = n(624479),
    A = n(957565),
    x = n(375708),
    C = n(572336);
function E(e) {
    let { url: t } = e,
        [n, l] = i.useState(!1),
        [a] = i.useState(() => new h.Ep());
    i.useEffect(() => () => a.stop(), [a]);
    let [r, o] = i.useState(t);
    t !== r && (o(t), l(!1));
    let u = i.useCallback(() => {
            (0, A.C)(t, () => {
                l(!0), d.O.announce(x.intl.string(x.t["+5kSoW"])), a.start(1e3, () => l(!1));
            });
        }, [t, a]),
        c = x.intl.string(n ? x.t["+5kSoW"] : x.t.WqhZss);
    return (0, s.jsxs)("div", {
        className: C.nM,
        children: [
            (0, s.jsx)("input", {
                className: C.nf,
                type: "text",
                value: t,
                readOnly: !0,
                "aria-label": x.intl.string(x.t.WqhZss),
                onFocus: (e) => e.currentTarget.select(),
            }),
            A.p5 &&
                (0, s.jsx)(m.m, {
                    text: c,
                    children: (0, s.jsx)(p.K, {
                        size: "md",
                        variant: "secondary",
                        "aria-label": c,
                        icon: n ? f.A : g.T,
                        onClick: u,
                    }),
                }),
        ],
    });
}
var v = n(191627),
    T = n(602339),
    _ = n(294051);
function N(e) {
    let t,
        n,
        { linkCode: d, expiresAt: h, onRefresh: m } = e,
        p = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.id),
        f = (0, o.A)(m),
        { days: g, hours: A, minutes: C, seconds: N } = (0, r.A)(h);
    if (
        (i.useEffect(() => {
            let e = h - Date.now();
            if (e <= 0) return void f();
            let t = setTimeout(f, e);
            return () => clearTimeout(t);
        }, [h, f]),
        null == p)
    )
        return null;
    let j = (0, v.jZ)(p, d),
        S = x.intl.string(T.default.RfkLDs);
    return (0, s.jsxs)("div", {
        className: _.kL,
        children: [
            (0, s.jsxs)("div", {
                className: _.Nr,
                children: [
                    (0, s.jsxs)("div", {
                        className: _.wx,
                        children: [
                            (0, s.jsx)(a.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: x.intl.string(T.default["ovecl/"]),
                            }),
                            (0, s.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: `${S} ${((n = Math.floor((t = Math.max(0, 86400 * g + 3600 * A + 60 * C + N)) / 60)), `${n}:${String(t % 60).padStart(2, "0")}`)}`,
                            }),
                        ],
                    }),
                    (0, s.jsx)(u.Lx, { size: 200, text: j, ariaLabel: x.intl.string(T.default.Mi60fm) }),
                ],
            }),
            (0, s.jsx)("div", {
                className: _.yF,
                children: (0, s.jsx)(a.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: x.intl.string(T.default.TGr8Ws),
                }),
            }),
            (0, s.jsx)(E, { url: j }),
        ],
    });
}
