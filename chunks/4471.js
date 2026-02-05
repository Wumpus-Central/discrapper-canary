s.d(t, { A: () => m });
var n = s(627968),
    l = s(284009),
    i = s.n(l),
    a = s(311907),
    r = s(732955),
    C = s(397927),
    c = s(775602),
    d = s(607470),
    L = s(550111),
    H = s(287809),
    o = s(676279),
    u = s(659746),
    M = s(985018),
    g = s(537671),
    p = s(42085),
    h = s(49402),
    N = s(27753);
let m = (e) => {
    let { type: t, text: s, buttonText: l, buttonLoading: m, hideClose: A, onClose: E } = e,
        f = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        _ = (0, a.bG)([H.default], () => {
            let e = H.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        x = (0, o.TM)() ? p.A : h.A,
        I = ((e) => {
            switch (e) {
                case u.Or.PREMIUM_UPDATED:
                    return M.intl.string(M.t["75Wt0E"]);
                case u.Or.PREMIUM_ACTIVATED:
                    return M.intl.string(M.t.QWljxE);
                default:
                    return M.intl.string(M.t.X79Az5);
            }
        })(t);
    return (0, n.jsxs)("div", {
        className: g.kL,
        children: [
            (0, n.jsx)(C.Heading, { className: g.wx, variant: "display-md", color: "text-strong", children: I }),
            (0, n.jsxs)("div", {
                className: g.Dz,
                children: [
                    f
                        ? (0, n.jsx)("img", { src: N.A, alt: "", className: g.d9 })
                        : (0, n.jsx)(d.A, {
                              playsInline: !0,
                              muted: !0,
                              autoPlay: !0,
                              loop: !0,
                              className: g.d9,
                              children: (0, n.jsx)("source", { src: x }),
                          }),
                    (0, n.jsx)(L.A, {
                        user: _,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: _.nameplate,
                        className: g.M4,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: g.FS, children: s }),
            !A &&
                (0, n.jsx)("div", {
                    className: g.qr,
                    children: (0, n.jsx)(r.$nd, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: l,
                        onClick: E,
                        loading: m,
                    }),
                }),
        ],
    });
};
