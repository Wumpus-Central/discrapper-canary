s.d(t, { A: () => N });
var n = s(627968),
    l = s(284009),
    i = s.n(l),
    a = s(311907),
    r = s(732955),
    C = s(397927),
    c = s(303136),
    d = s(550111),
    L = s(287809),
    H = s(676279),
    M = s(659746),
    o = s(985018),
    u = s(537671),
    g = s(42085),
    h = s(49402),
    p = s(27753);
let N = (e) => {
    let { type: t, text: s, buttonText: l, buttonLoading: N, hideClose: m, onClose: A } = e,
        E = (0, a.bG)([L.default], () => {
            let e = L.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        f = (0, H.TM)() ? g.A : h.A,
        _ = ((e) => {
            switch (e) {
                case M.Or.PREMIUM_UPDATED:
                    return o.intl.string(o.t["75Wt0E"]);
                case M.Or.PREMIUM_ACTIVATED:
                    return o.intl.string(o.t.QWljxE);
                default:
                    return o.intl.string(o.t.X79Az5);
            }
        })(t);
    return (0, n.jsxs)("div", {
        className: u.kL,
        children: [
            (0, n.jsx)(C.Heading, { className: u.wx, variant: "display-md", color: "text-strong", children: _ }),
            (0, n.jsxs)("div", {
                className: u.Dz,
                children: [
                    (0, n.jsx)(c.A, {
                        fallbackImage: p.A,
                        className: u.d9,
                        children: (0, n.jsx)("source", { src: f }),
                    }),
                    (0, n.jsx)(d.A, {
                        user: E,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: E.nameplate,
                        className: u.M4,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: u.FS, children: s }),
            !m &&
                (0, n.jsx)("div", {
                    className: u.qr,
                    children: (0, n.jsx)(r.$nd, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: l,
                        onClick: A,
                        loading: N,
                    }),
                }),
        ],
    });
};
