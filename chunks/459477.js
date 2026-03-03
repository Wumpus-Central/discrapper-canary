r.d(e, { default: () => I }), r(321073);
var n = r(627968),
    i = r(64700),
    o = r(505779),
    a = r(158954),
    l = r(880405),
    s = r(145963),
    c = r(985018);
let I = (t) => {
    let { transitionState: e, onClose: r, detectedGame: I, storeWebsites: E } = t,
        T = (0, s.UV)(),
        u = i.useMemo(() => {
            let t = [];
            for (let e of [...E].sort((t, e) => (t.category === o.V.STEAM ? -1 : +(e.category === o.V.STEAM)))) {
                let r = T[e.category];
                null != r &&
                    t.push({
                        ...r,
                        variant: "secondary",
                        onClick: () => window.open((0, l.L)(e.url), "_blank", "noreferrer noopener"),
                        role: "link",
                    });
            }
            return t;
        }, [E, T]);
    return (0, n.jsx)(a.Modal, {
        onClose: r,
        transitionState: e,
        size: "sm",
        title: c.intl.string(c.t["/4gj6r"]),
        subtitle: c.intl.format(c.t["0acM2Y"], { gameName: I.name }),
        actions: u,
    });
};
