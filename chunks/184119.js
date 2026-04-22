t.d(e, { A: () => C });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(990078),
    s = t(785007),
    o = t(939249),
    d = t(187322),
    c = t(750943),
    u = t(834730),
    g = t(22231),
    h = t(241326),
    p = t(946274),
    f = t(985018),
    m = t(70246);
let q = "custom-image",
    v = n.forwardRef(function (A, e) {
        let { selectedImageName: t, onChange: n, disabled: r = !1, name: i, alt: d, data: c } = A,
            u = i === t,
            g = (0, s.Gx)({ isSelected: u, label: d }),
            h = r
                ? void 0
                : () => {
                      n(c, i);
                  };
        return (0, a.jsx)(o.D, {
            ref: e,
            className: l()(m.hO, { [m.wH]: u, [m.r9]: r }),
            onClick: h,
            "aria-disabled": r,
            ...g,
            children: (0, a.jsx)("img", { src: c, alt: d, className: m.mp }),
        });
    });
function C(A) {
    let {
            presetImages: e,
            image: t,
            imageName: r,
            savedImageName: C,
            onChange: x,
            uploadButtonLabel: U = f.intl.string(f.t["MsUY/S"]),
            radioGroupAriaLabel: V = f.intl.string(f.t["0Q0UJq"]),
            disabled: b = !1,
        } = A,
        j = r === q,
        [N, I] = n.useState(j ? t : null),
        [T, F] = n.useState(null),
        K = n.useRef(null),
        X = n.useRef(null);
    n.useEffect(() => {
        C !== q && (I(null), F(null));
    }, [C]);
    let P = null != T ? f.intl.formatToPlainString(f.t["Kw+5YX"], { filename: T }) : f.intl.string(f.t.SNPvSv),
        { ref: W, ...Q } = (0, s._u)({ orientation: "horizontal", isDisabled: b });
    return (
        n.useEffect(() => {
            j && null != T && X.current?.ref?.focus();
        }, [j, T]),
        (0, a.jsxs)("div", {
            className: m.fE,
            children: [
                (0, a.jsx)(d.vN, {
                    within: !0,
                    children: (0, a.jsxs)("div", {
                        className: l()(m.au, { [m.r9]: b, [m.R]: null != N }),
                        "aria-disabled": b,
                        children: [
                            (0, a.jsx)(c.X, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(u.E, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: U,
                            }),
                            (0, a.jsx)(p.Ay, {
                                ref: K,
                                tabIndex: 0,
                                onChange: (A, e) => {
                                    null != e && (F(e.name), I(A), x(A, q));
                                },
                                "aria-label": U,
                            }),
                        ],
                    }),
                }),
                null != N &&
                    (0, a.jsxs)("div", {
                        className: m.kt,
                        children: [
                            (0, a.jsx)(i.m, {
                                asContainer: !0,
                                text: f.intl.string(f.t.AQYXMO),
                                children: (0, a.jsx)(o.D, {
                                    className: m.xA,
                                    onClick: () => K.current?.activateUploadDialogue(),
                                    "aria-label": f.intl.formatToPlainString(f.t.Qc9Lg6, { filename: T }),
                                    children: (0, a.jsx)(g.R, { size: "xs", color: "currentColor", className: m.IZ }),
                                }),
                            }),
                            (0, a.jsx)(i.m, {
                                asContainer: !0,
                                text: f.intl.string(f.t.WxqWU0),
                                children: (0, a.jsx)(o.D, {
                                    className: m.xA,
                                    onClick: () => {
                                        r === q && x(e[0].data, e[0].name), I(null), F(null);
                                    },
                                    "aria-label": f.intl.formatToPlainString(f.t.Z43V9S, { filename: T }),
                                    children: (0, a.jsx)(h.u, { size: "md", color: "currentColor", className: m.fy }),
                                }),
                            }),
                        ],
                    }),
                (0, a.jsxs)("div", {
                    "aria-label": V,
                    ref: W,
                    ...Q,
                    className: m.R$,
                    children: [
                        null != N &&
                            (0, a.jsx)(v, {
                                ref: X,
                                selectedImageName: r,
                                onChange: x,
                                disabled: b,
                                name: q,
                                alt: P,
                                data: N,
                            }),
                        e.map((A) => (0, a.jsx)(v, { selectedImageName: r, onChange: x, disabled: b, ...A }, A.name)),
                    ],
                }),
            ],
        })
    );
}
