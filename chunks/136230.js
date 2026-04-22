n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(319060),
    o = n(750943),
    d = n(187322),
    c = n(939249),
    u = n(201275),
    m = n(342298),
    g = n(657048),
    h = n(240248),
    x = n(985018),
    _ = n(814555);
let p = (0, h.xI)(a.A.ROLE_ICON_UPLOADER_ICON_SIZE);
function A(e) {
    let { role: t, "aria-label": n = x.intl.string(x.t["MsUY/S"]), className: s, onClick: a, disabled: h = !1 } = e,
        A = l.useRef(null),
        E = l.useMemo(() => (0, u.ox)(t, p), [t]),
        f =
            null != E
                ? (0, i.jsx)(g.A, { enableTooltip: !1, className: _.Kk, ...E })
                : (0, i.jsx)(o.X, { size: "md", color: "currentColor", className: _.Kk });
    return (0, i.jsx)(d.vN, {
        ringTarget: A,
        children: (0, i.jsxs)(c.D, {
            "aria-label": n,
            className: r()(_.kL, s, { [_.r9]: h }),
            onClick: h ? void 0 : a,
            "aria-disabled": h,
            children: [
                (0, i.jsx)("div", { ref: A, className: _.VH, children: f }),
                null != E ? (0, i.jsx)(m.L, { className: _.Sl }) : null,
            ],
        }),
    });
}
