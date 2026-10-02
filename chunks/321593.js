n.d(t, { Ay: () => f, gT: () => m });
var r = n(477900),
    i = n(582128),
    a = n(17928),
    l = n(683180),
    o = n(783791),
    s = n(972786),
    u = n(11055),
    h = n(50617),
    c = n(375708),
    d = n(746587);
function f(e) {
    let { projectId: t } = e,
        n = (0, a.bG)([o.Ay], () => null != t && o.Ay.isThinking(t), [t]),
        [l, s] = i.useState(n ? t : null);
    return (
        n && l !== t && s(t),
        i.useEffect(() => {
            if (n || null == l) return;
            let e = setTimeout(() => s(null), 300);
            return () => clearTimeout(e);
        }, [n, l]),
        (0, r.jsx)("span", {
            className: d.W,
            "data-page": n ? void 0 : "chat",
            "data-thinking": n ? "" : void 0,
            role: n ? "img" : void 0,
            "aria-label": n ? c.intl.string(h.default.ui2IQ2) : void 0,
            "aria-hidden": !n || void 0,
            children: null == l ? null : (0, r.jsx)(u.A, { projectId: l, orientation: "right", state: "thinking" }),
        })
    );
}
function m(e) {
    let { guildId: t } = e,
        n = (0, a.bG)(
            [o.Ay, s.Ay],
            () =>
                o.Ay.getActivityOrderedProjectIds().find(
                    (e) => (0, l.X0)(s.Ay.getProject(e), t) && o.Ay.isThinking(e),
                ) ?? null,
            [t],
        );
    return (0, r.jsx)(f, { projectId: n });
}
