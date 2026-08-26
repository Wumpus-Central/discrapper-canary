e.d(i, { Ay: () => g, gT: () => p });
var n = e(477900),
    r = e(582128),
    l = e(17928),
    a = e(683180),
    u = e(783791),
    d = e(972786),
    s = e(11055),
    o = e(295813),
    c = e(375708),
    h = e(746587);
function g(t) {
    let { projectId: i } = t,
        e = (0, l.bG)([u.Ay], () => null != i && u.Ay.isThinking(i), [i]),
        [a, d] = r.useState(e ? i : null);
    return (
        e && a !== i && d(i),
        r.useEffect(() => {
            if (e || null == a) return;
            let t = setTimeout(() => d(null), 300);
            return () => clearTimeout(t);
        }, [e, a]),
        (0, n.jsx)("span", {
            className: h.W,
            "data-page": e ? void 0 : "chat",
            "data-thinking": e ? "" : void 0,
            role: e ? "img" : void 0,
            "aria-label": e ? c.intl.string(o.default.ui2IQ2) : void 0,
            "aria-hidden": !e || void 0,
            children: null == a ? null : (0, n.jsx)(s.A, { projectId: a, orientation: "right", state: "thinking" }),
        })
    );
}
function p(t) {
    let { guildId: i } = t,
        e = (0, l.bG)(
            [u.Ay, d.A],
            () =>
                u.Ay.getActivityOrderedProjectIds().find(
                    (t) => (0, a.X0)(d.A.getProject(t), i) && u.Ay.isThinking(t),
                ) ?? null,
            [i],
        );
    return (0, n.jsx)(g, { projectId: e });
}
