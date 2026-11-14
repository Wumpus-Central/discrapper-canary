var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(834730),
    o = n(821609),
    u = n(857512),
    c = n(987421),
    d = n(198329),
    m = n(792996),
    g = n(102087);
function h(e) {
    let [t, n] = r.useState(null),
        l = r.useCallback(() => n(e), [e]);
    return [e !== t ? e : null, l];
}
let p = (e) => {
        let { day: t } = e;
        return (0, l.jsx)("span", {
            className: g.U$,
            "aria-hidden": "true",
            children: (0, l.jsx)(i.E, {
                className: g.Le,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: t,
            }),
        });
    },
    f = (e) => {
        let { skuId: t, tilePosition: n, listItemProps: s } = e,
            a = r.useMemo(() => ({ tilePosition: n }), [n]);
        return null == t
            ? null
            : (0, l.jsx)(u.R9, { newValue: a, children: (0, l.jsx)(c.A, { skuId: t, listItemProps: s }) });
    },
    E = (e) => {
        let {
            day: t,
            lockedAssetUrl: n,
            hintAssetUrl: r,
            onLockedAssetError: s,
            onHintAssetError: i,
            onReveal: u,
            listItemProps: c,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: g.vj,
                    children: [
                        null != n && (0, l.jsx)("img", { className: a()(g.LY, g.nu), src: n, alt: "", onError: s }),
                        null != r && (0, l.jsx)("img", { className: a()(g.LY, g.nu), src: r, alt: "", onError: i }),
                        (0, l.jsx)(p, { day: t }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: g.a7,
                    children: (0, l.jsx)(o.$, {
                        ...c,
                        variant: "overlay-primary",
                        fullWidth: !0,
                        text: m.intl.string(m.t["1PdKvg"]),
                        "aria-label": m.intl.formatToPlainString(m.t.zzDQv3, { day: t }),
                        onClick: u,
                    }),
                }),
            ],
        });
    },
    x = (e) => {
        let {
            day: t,
            lockedAssetUrl: n,
            hintAssetUrl: r,
            onLockedAssetError: s,
            onHintAssetError: a,
            listItemProps: i,
        } = e;
        return (0, l.jsxs)("div", {
            ...i,
            className: g.TW,
            role: "img",
            "aria-label": m.intl.formatToPlainString(m.t.EeYnVZ, { day: t }),
            children: [
                null != n && (0, l.jsx)("img", { className: g.LY, src: n, alt: "", onError: s }),
                null != r && (0, l.jsx)("img", { className: g.LY, src: r, alt: "", onError: a }),
                (0, l.jsx)(p, { day: t }),
            ],
        });
    };
n.d(
    t,
    {},
    {
        A: (e) => {
            let t,
                {
                    day: n,
                    state: s,
                    skuId: i,
                    lockedAssetUrl: o,
                    hintAssetUrl: u,
                    tilePosition: c,
                    aspectRatio: m,
                    className: p,
                    style: v,
                    tag: C = "li",
                    listItemProps: A,
                    onReveal: y,
                } = e,
                _ = r.useMemo(() => ({ ...v, "--custom-calendar-tile-aspect-ratio": m }), [v, m]),
                [b, S] = h(o),
                [L, I] = h(u),
                k = r.useRef(null),
                j = r.useRef(!1),
                N = r.useCallback(() => {
                    ((j.current = !0), y());
                }, [y]);
            switch (
                (r.useEffect(() => {
                    if (s !== d.k$.REVEALED || !j.current) return;
                    j.current = !1;
                    let e = k.current;
                    (
                        e?.querySelector('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? e
                    )?.focus();
                }, [s]),
                s)
            ) {
                case d.k$.REVEALED:
                    t = (0, l.jsx)(f, { skuId: i, tilePosition: c, listItemProps: A });
                    break;
                case d.k$.OPENABLE:
                    t = (0, l.jsx)(E, {
                        day: n,
                        lockedAssetUrl: b,
                        hintAssetUrl: L,
                        onLockedAssetError: S,
                        onHintAssetError: I,
                        onReveal: N,
                        listItemProps: A,
                    });
                    break;
                case d.k$.HINT:
                case d.k$.LOCKED:
                    t = (0, l.jsx)(x, {
                        day: n,
                        lockedAssetUrl: b,
                        hintAssetUrl: s === d.k$.HINT ? L : null,
                        onLockedAssetError: S,
                        onHintAssetError: I,
                        listItemProps: A,
                    });
            }
            let O = s === d.k$.REVEALED;
            return (0, l.jsx)(C, {
                ref: k,
                className: a()(g.Vs, { [g.Ml]: O, [g.Zk]: s === d.k$.OPENABLE }, p),
                style: _,
                tabIndex: O ? -1 : void 0,
                children: t,
            });
        },
    },
);
