n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(422998),
    l = n(960488),
    c = n(311907),
    u = n(49621),
    d = n(590703),
    f = n(265059),
    p = n(87001),
    _ = n(611635),
    h = n(726249),
    m = n(203480),
    g = n(652215);
let E = new Set([g.BVt.LOGIN, g.BVt.REGISTER]);

function b(e) {
    let { lang: t, style: n, className: a } = (0, _.xb)(),
        o = (0, l.zy)(),
        u = i.useMemo(() => E.has(o.pathname), [o.pathname]);
    (0, m.A)(window, u);
    let d = (0, c.bG)([f.A, p.A], () => (p.A.getWindowOpen(g.MLl.DEVTOOLS_POPOUT) ? 0 : f.A.sidebarWidth));
    return (0, r.jsx)("html", {
        lang: t,
        style: "".concat(n, " --devtools-sidebar-width: ").concat(d, "px;"),
        className: s()(a, e, {
            overlay: __OVERLAY__,
        }),
    });
}

function y() {
    let [e, t] = i.useState([]);
    return (
        i.useEffect(() => {
            Promise.all(
                u.x.map((e) =>
                    n(907790)("./".concat(e, ".woff2")).then((e) => {
                        let { default: t } = e;
                        return t;
                    }),
                ),
            ).then((e) => t(e));
        }, []),
        (0, r.jsx)(r.Fragment, {
            children: e.map((e, t) =>
                (0, r.jsx)(
                    "link",
                    {
                        rel: "preload",
                        href: e,
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "anonymous",
                    },
                    t,
                ),
            ),
        })
    );
}

function O(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e;
    (0, h.cu)({
        skipsSettingDefaultPageTitle: n,
    });
    let { clientThemesClassName: a, clientThemesCSS: s } = (0, d.Ay)(),
        l = i.createElement(
            "style",
            {
                [d.Vg]: !0,
            },
            s,
        );
    return (0, r.jsxs)(o.mg, {
        children: [b(a), y(), l, t],
    });
}
let A = i.memo(O);
