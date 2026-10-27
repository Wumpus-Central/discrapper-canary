i.d(e, { default: () => h });
var n = i(477900),
    l = i(582128),
    a = i(189213),
    s = i(193249),
    r = i(276983),
    d = i(17928),
    o = i(73153),
    c = i(998979),
    p = i(248675),
    u = i(105292),
    f = i(457161);
function h(t) {
    let e,
        { applicationId: i, appName: h, ...g } = t,
        { settings: C, setAllowed: m } =
            ((e = (0, d.cf)(
                [c.A],
                () => {
                    let t = {};
                    for (let e of r.jQ) t[e] = c.A.getDecision(i, e);
                    return t;
                },
                [i],
            )),
            {
                settings: l.useMemo(
                    () => r.jQ.filter(r.yG).map((t) => ({ permission: t, decision: e[t] ?? null })),
                    [e],
                ),
                setAllowed: function (t, e) {
                    o.h.dispatch({
                        type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
                        applicationId: i,
                        permissions: [t],
                        allowed: e,
                    });
                },
            });
    return (0, n.jsx)(a.a, {
        ...g,
        title: u.intl.string(p.default["7a+RNP"]),
        subtitle: u.intl.formatToPlainString(p.default.IJY15p, { app: h }),
        actions: [{ text: u.intl.string(p.default["+pSIev"]), variant: "primary", onClick: g.onClose }],
        children: (0, n.jsx)("div", {
            className: f.n,
            children: C.map((t) => {
                let { permission: e, decision: i } = t;
                return (0, n.jsx)(
                    s.d,
                    {
                        label: (0, r.Us)(e),
                        description: null == i ? u.intl.string(p.default["wyav+H"]) : void 0,
                        checked: "granted" === i,
                        onChange: (t) => m(e, t),
                    },
                    e,
                );
            }),
        }),
    });
}
