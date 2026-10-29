i.d(e, { default: () => g });
var n = i(477900),
    a = i(582128),
    l = i(189213),
    s = i(193249),
    r = i(276983),
    d = i(17928),
    o = i(73153),
    c = i(998979),
    p = i(521802),
    u = i(248675),
    f = i(105292),
    h = i(457161);
function g(t) {
    let e,
        i,
        { applicationId: g, appName: C, ...m } = t,
        { settings: I, setAllowed: k } =
            ((e = (0, p.A)(g)),
            (i = (0, d.cf)(
                [c.A],
                () => {
                    let t = {};
                    for (let i of e) t[i] = c.A.getDecision(g, i);
                    return t;
                },
                [g, e],
            )),
            {
                settings: a.useMemo(() => e.map((t) => ({ permission: t, decision: i[t] ?? null })), [e, i]),
                setAllowed: function (t, e) {
                    o.h.dispatch({
                        type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
                        applicationId: g,
                        permissions: [t],
                        allowed: e,
                    });
                },
            });
    return (0, n.jsx)(l.a, {
        ...m,
        title: f.intl.string(u.default["7a+RNP"]),
        subtitle: f.intl.formatToPlainString(u.default.IJY15p, { app: C }),
        actions: [{ text: f.intl.string(u.default["+pSIev"]), variant: "primary", onClick: m.onClose }],
        children: (0, n.jsx)("div", {
            className: h.n,
            children: I.map((t) => {
                let { permission: e, decision: i } = t;
                return (0, n.jsx)(
                    s.d,
                    {
                        label: (0, r.Us)(e),
                        description: null == i ? f.intl.string(u.default["wyav+H"]) : void 0,
                        checked: "granted" === i,
                        onChange: (t) => k(e, t),
                    },
                    e,
                );
            }),
        }),
    });
}
