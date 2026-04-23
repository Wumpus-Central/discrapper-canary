s.d(t, { A: () => E });
var n = s(627968),
    l = s(284009),
    i = s.n(l),
    a = s(311907),
    r = s(821609),
    C = s(534514),
    c = s(512213),
    d = s(303136),
    L = s(287809),
    H = s(676279),
    M = s(659746),
    u = s(985018),
    o = s(521916),
    g = s(472161),
    h = s(573080),
    p = s(780350);
let E = (e) => {
    let { type: t, text: s, buttonText: l, buttonLoading: E, hideClose: m, onClose: N } = e,
        _ = (0, a.bG)([L.default], () => {
            let e = L.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        f = (0, H.TM)() ? g.A : p.A,
        A = ((e) => {
            switch (e) {
                case M.Or.PREMIUM_UPDATED:
                    return u.intl.string(u.t["75Wt0E"]);
                case M.Or.PREMIUM_ACTIVATED:
                    return u.intl.string(u.t.QWljxE);
                default:
                    return u.intl.string(u.t.X79Az5);
            }
        })(t);
    return (0, n.jsxs)("div", {
        className: o.kL,
        children: [
            (0, n.jsx)(C.D, { className: o.wx, variant: "display-md", color: "text-strong", children: A }),
            (0, n.jsxs)("div", {
                className: o.Dz,
                children: [
                    (0, n.jsx)(d.A, {
                        fallbackImage: h.A,
                        className: o.d9,
                        children: (0, n.jsx)("source", { src: f }),
                    }),
                    (0, n.jsx)(c.A, {
                        user: _,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: _.nameplate,
                        className: o.M4,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: o.FS, children: s }),
            !m &&
                (0, n.jsx)("div", {
                    className: o.qr,
                    children: (0, n.jsx)(r.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: l,
                        onClick: N,
                        loading: E,
                    }),
                }),
        ],
    });
};
