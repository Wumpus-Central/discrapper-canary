var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(690352),
    o = n(834730),
    u = n(821609),
    c = n(857512),
    d = n(987421),
    m = n(198329),
    g = n(792996),
    h = n(102087);
function p(e) {
    let [t, n] = r.useState(null),
        l = r.useCallback(() => n(e), [e]);
    return [e !== t ? e : null, l];
}
let f = (e) => {
        let { day: t } = e;
        return (0, l.jsx)("span", {
            className: h.U$,
            "aria-hidden": "true",
            children: (0, l.jsx)(o.E, {
                className: h.Le,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: t,
            }),
        });
    },
    E = (e) => {
        let { skuId: t, tilePosition: n, listItemProps: s } = e,
            a = r.useMemo(() => ({ tilePosition: n }), [n]);
        return null == t
            ? null
            : (0, l.jsx)(c.R9, { newValue: a, children: (0, l.jsx)(d.A, { skuId: t, listItemProps: s }) });
    },
    x = (e) => {
        let {
            day: t,
            lockedAssetUrl: n,
            hintAssetUrl: r,
            onLockedAssetError: s,
            onHintAssetError: i,
            onReveal: o,
            listItemProps: c,
            isNumberAboveButton: d,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: h.vj,
                    children: [
                        null != n && (0, l.jsx)("img", { className: a()(h.LY, h.nu), src: n, alt: "", onError: s }),
                        null != r &&
                            (0, l.jsx)("img", { className: a()(h.LY, h.nu, h.qC), src: r, alt: "", onError: i }),
                        !d && (0, l.jsx)(f, { day: t }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: h.a7,
                    children: [
                        d && (0, l.jsx)(f, { day: t }),
                        (0, l.jsx)(u.$, {
                            ...c,
                            variant: "overlay-primary",
                            fullWidth: !0,
                            text: g.intl.string(g.t["1PdKvg"]),
                            "aria-label": g.intl.formatToPlainString(g.t.zzDQv3, { day: t }),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        });
    },
    v = (e) => {
        let {
            day: t,
            lockedAssetUrl: n,
            hintAssetUrl: r,
            onLockedAssetError: s,
            onHintAssetError: i,
            listItemProps: o,
        } = e;
        return (0, l.jsxs)("div", {
            ...o,
            className: h.TW,
            role: "img",
            "aria-label": g.intl.formatToPlainString(g.t.EeYnVZ, { day: t }),
            children: [
                null != n && (0, l.jsx)("img", { className: h.LY, src: n, alt: "", onError: s }),
                null != r && (0, l.jsx)("img", { className: a()(h.LY, h.qC), src: r, alt: "", onError: i }),
                (0, l.jsx)(f, { day: t }),
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
                    cardShape: o,
                    isHintCentered: u = !1,
                    skuId: c,
                    lockedAssetUrl: d,
                    hintAssetUrl: g,
                    tilePosition: f,
                    aspectRatio: C,
                    className: A,
                    style: y,
                    tag: _ = "li",
                    listItemProps: b,
                    onReveal: L,
                } = e,
                S = r.useMemo(() => ({ ...y, "--custom-calendar-tile-aspect-ratio": C }), [y, C]),
                [I, k] = p(d),
                [j, N] = p(g),
                R = r.useRef(null),
                O = r.useRef(!1),
                T = r.useCallback(() => {
                    ((O.current = !0), L());
                }, [L]);
            r.useEffect(() => {
                if (s !== m.k$.REVEALED || !O.current) return;
                O.current = !1;
                let e = R.current;
                (e?.querySelector('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? e)?.focus();
            }, [s]);
            let D = o === i.G.LARGE_SQUARE;
            switch (s) {
                case m.k$.REVEALED:
                    t = (0, l.jsx)(E, { skuId: c, tilePosition: f, listItemProps: b });
                    break;
                case m.k$.OPENABLE:
                    t = (0, l.jsx)(x, {
                        day: n,
                        lockedAssetUrl: I,
                        hintAssetUrl: j,
                        onLockedAssetError: k,
                        onHintAssetError: N,
                        onReveal: T,
                        listItemProps: b,
                        isNumberAboveButton: D,
                    });
                    break;
                case m.k$.HINT:
                case m.k$.LOCKED:
                    t = (0, l.jsx)(v, {
                        day: n,
                        lockedAssetUrl: I,
                        hintAssetUrl: s === m.k$.HINT ? j : null,
                        onLockedAssetError: k,
                        onHintAssetError: N,
                        listItemProps: b,
                    });
            }
            let P = s === m.k$.REVEALED;
            return (0, l.jsx)(_, {
                ref: R,
                className: a()(h.Vs, { [h.Ml]: P, [h.Zk]: s === m.k$.OPENABLE, [h.Jl]: D, [h.W_]: u }, A),
                style: S,
                tabIndex: P ? -1 : void 0,
                children: t,
            });
        },
    },
);
