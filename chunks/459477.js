n.d(e, { default: () => I }), n(321073);
var r = n(627968),
    i = n(64700),
    o = n(505779),
    l = n(158954),
    a = n(240248),
    s = n(59544),
    c = n(145963),
    u = n(985018);
let I = (t) => {
    let { transitionState: e, onClose: n, detectedGame: I, storeWebsites: E } = t,
        T = (0, c.UV)(),
        A = i.useMemo(() => E.map((t) => t.url), [E]),
        d = (0, s.Q)(A),
        m = i.useMemo(() => {
            let t = [];
            for (let e of [
                ...E.map((t, e) => ({ ...t, gameStoreLink: d[e] ?? "" })).filter((t) => !(0, a.uJ)(t.gameStoreLink)),
            ].sort((t, e) => (t.category === o.V.STEAM ? -1 : +(e.category === o.V.STEAM)))) {
                let n = T[e.category];
                null != n &&
                    t.push({
                        ...n,
                        variant: "secondary",
                        onClick: () => window.open(e.gameStoreLink, "_blank", "noreferrer noopener"),
                        role: "link",
                    });
            }
            return t;
        }, [E, T, d]);
    return (0, r.jsx)(l.Modal, {
        onClose: n,
        transitionState: e,
        size: "sm",
        title: u.intl.string(u.t["/4gj6r"]),
        subtitle: u.intl.format(u.t["0acM2Y"], { gameName: I.name }),
        actions: m,
    });
};
