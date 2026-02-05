t.d(e, { A: () => p });
var n = t(627968),
    a = t(64700),
    r = t(503698),
    i = t.n(r),
    l = t(990078),
    s = t(421380),
    o = t(397927),
    d = t(946274),
    u = t(985018),
    c = t(893347);
let g = "custom-image",
    q = a.forwardRef(function (A, e) {
        let { selectedImageName: t, onChange: a, disabled: r = !1, name: l, alt: d, data: u } = A,
            g = l === t,
            q = (0, s.Gx)({ isSelected: g, label: d }),
            p = r
                ? void 0
                : () => {
                      a(u, l);
                  };
        return (0, n.jsx)(o.DUT, {
            ref: e,
            className: i()(c.hO, { [c.wH]: g, [c.r9]: r }),
            onClick: p,
            "aria-disabled": r,
            ...q,
            children: (0, n.jsx)("img", { src: u, alt: d, className: c.mp }),
        });
    });
function p(A) {
    let {
            presetImages: e,
            image: t,
            imageName: r,
            savedImageName: p,
            onChange: f,
            uploadButtonLabel: m = u.intl.string(u.t["MsUY/S"]),
            radioGroupAriaLabel: h = u.intl.string(u.t["0Q0UJq"]),
            disabled: C = !1,
        } = A,
        v = r === g,
        [U, V] = a.useState(v ? t : null),
        [x, b] = a.useState(null),
        j = a.useRef(null),
        K = a.useRef(null);
    a.useEffect(() => {
        p !== g && (V(null), b(null));
    }, [p]);
    let N = null != x ? u.intl.formatToPlainString(u.t["Kw+5YX"], { filename: x }) : u.intl.string(u.t.SNPvSv),
        { ref: F, ...T } = (0, s._u)({ orientation: "horizontal", isDisabled: C });
    return (
        a.useEffect(() => {
            v && null != x && K.current?.ref?.focus();
        }, [v, x]),
        (0, n.jsxs)("div", {
            className: c.fE,
            children: [
                (0, n.jsx)(o.vN3, {
                    within: !0,
                    children: (0, n.jsxs)("div", {
                        className: i()(c.au, { [c.r9]: C, [c.R]: null != U }),
                        "aria-disabled": C,
                        children: [
                            (0, n.jsx)(o.XGR, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: m,
                            }),
                            (0, n.jsx)(d.Ay, {
                                ref: j,
                                tabIndex: 0,
                                onChange: (A, e) => {
                                    null != e && (b(e.name), V(A), f(A, g));
                                },
                                "aria-label": m,
                            }),
                        ],
                    }),
                }),
                null != U &&
                    (0, n.jsxs)("div", {
                        className: c.kt,
                        children: [
                            (0, n.jsx)(l.m, {
                                asContainer: !0,
                                text: u.intl.string(u.t.AQYXMO),
                                children: (0, n.jsx)(o.DUT, {
                                    className: c.xA,
                                    onClick: () => j.current?.activateUploadDialogue(),
                                    "aria-label": u.intl.formatToPlainString(u.t.Qc9Lg6, { filename: x }),
                                    children: (0, n.jsx)(o.R2l, { size: "xs", color: "currentColor", className: c.IZ }),
                                }),
                            }),
                            (0, n.jsx)(l.m, {
                                asContainer: !0,
                                text: u.intl.string(u.t.WxqWU0),
                                children: (0, n.jsx)(o.DUT, {
                                    className: c.xA,
                                    onClick: () => {
                                        r === g && f(e[0].data, e[0].name), V(null), b(null);
                                    },
                                    "aria-label": u.intl.formatToPlainString(u.t.Z43V9S, { filename: x }),
                                    children: (0, n.jsx)(o.ucK, { size: "md", color: "currentColor", className: c.fy }),
                                }),
                            }),
                        ],
                    }),
                (0, n.jsxs)("div", {
                    "aria-label": h,
                    ref: F,
                    ...T,
                    className: c.R$,
                    children: [
                        null != U &&
                            (0, n.jsx)(q, {
                                ref: K,
                                selectedImageName: r,
                                onChange: f,
                                disabled: C,
                                name: g,
                                alt: N,
                                data: U,
                            }),
                        e.map((A) => (0, n.jsx)(q, { selectedImageName: r, onChange: f, disabled: C, ...A }, A.name)),
                    ],
                }),
            ],
        })
    );
}
