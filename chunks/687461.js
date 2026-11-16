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
                revealDate: n,
                lockedAssetUrl: r,
                hintAssetUrl: s,
                onLockedAssetError: i,
                onHintAssetError: u,
                listItemProps: c,
            } = e,
            d = null != n ? (0, m.Hm)(n, g.intl.currentLocale) : null;
        return (0, l.jsxs)("div", {
            ...c,
            className: h.TW,
            role: "img",
            "aria-label":
                null != d
                    ? g.intl.formatToPlainString(g.t.jz3aVY, { day: t, date: d })
                    : g.intl.formatToPlainString(g.t.EeYnVZ, { day: t }),
            children: [
                null != r && (0, l.jsx)("img", { className: h.LY, src: r, alt: "", onError: i }),
                null != s && (0, l.jsx)("img", { className: a()(h.LY, h.qC), src: s, alt: "", onError: u }),
                (0, l.jsx)(f, { day: t }),
                null != d &&
                    (0, l.jsx)("span", {
                        className: h._J,
                        "aria-hidden": "true",
                        children: (0, l.jsx)(o.E, {
                            variant: "body-md/medium",
                            color: "none",
                            tag: "span",
                            lineClamp: 2,
                            children: g.intl.formatToPlainString(g.t.GwQvTT, { date: d }),
                        }),
                    }),
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
                    revealDate: C = null,
                    aspectRatio: A,
                    className: y,
                    style: _,
                    tag: b = "li",
                    listItemProps: L,
                    onReveal: S,
                } = e,
                I = r.useMemo(() => ({ ..._, "--custom-calendar-tile-aspect-ratio": A }), [_, A]),
                [j, k] = p(d),
                [N, O] = p(g),
                R = r.useRef(null),
                T = r.useRef(!1),
                D = r.useCallback(() => {
                    ((T.current = !0), S());
                }, [S]);
            r.useEffect(() => {
                if (s !== m.k$.REVEALED || !T.current) return;
                T.current = !1;
                let e = R.current;
                (e?.querySelector('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') ?? e)?.focus();
            }, [s]);
            let P = o === i.G.LARGE_SQUARE;
            switch (s) {
                case m.k$.REVEALED:
                    t = (0, l.jsx)(E, { skuId: c, tilePosition: f, listItemProps: L });
                    break;
                case m.k$.OPENABLE:
                    t = (0, l.jsx)(x, {
                        day: n,
                        lockedAssetUrl: j,
                        hintAssetUrl: N,
                        onLockedAssetError: k,
                        onHintAssetError: O,
                        onReveal: D,
                        listItemProps: L,
                        isNumberAboveButton: P,
                    });
                    break;
                case m.k$.HINT:
                case m.k$.LOCKED:
                    t = (0, l.jsx)(v, {
                        day: n,
                        revealDate: C,
                        lockedAssetUrl: j,
                        hintAssetUrl: s === m.k$.HINT ? N : null,
                        onLockedAssetError: k,
                        onHintAssetError: O,
                        listItemProps: L,
                    });
            }
            let M = s === m.k$.REVEALED;
            return (0, l.jsx)(b, {
                ref: R,
                className: a()(h.Vs, { [h.Ml]: M, [h.Zk]: s === m.k$.OPENABLE, [h.Jl]: P, [h.W_]: u }, y),
                style: I,
                tabIndex: M ? -1 : void 0,
                children: t,
            });
        },
    },
);
