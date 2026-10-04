n.d(t, { Ay: () => f, X8: () => m });
var r = n(477900),
    i = n(582128),
    l = n(17928),
    a = n(870440),
    o = n(485163),
    s = n(26278),
    u = n(693976),
    h = n(248675),
    c = n(375708),
    d = n(892065);
function f(e) {
    let { projectId: t } = e,
        n = (0, l.bG)([o.Ay], () => null != t && o.Ay.isThinking(t), [t]),
        [a, s] = i.useState(n ? t : null);
    return (
        n && a !== t && s(t),
        i.useEffect(() => {
            if (n || null == a) return;
            let e = setTimeout(() => s(null), 300);
            return () => clearTimeout(e);
        }, [n, a]),
        (0, r.jsx)("span", {
            className: d.W,
            "data-page": n ? void 0 : "chat",
            "data-thinking": n ? "" : void 0,
            role: n ? "img" : void 0,
            "aria-label": n ? c.intl.string(h.default["Y8pS+n"]) : void 0,
            "aria-hidden": !n || void 0,
            children: null == a ? null : (0, r.jsx)(u.A, { projectId: a, orientation: "right", state: "thinking" }),
        })
    );
}
function m(e) {
    let { guildId: t } = e,
        n = (0, l.bG)(
            [o.Ay, s.Ay],
            () =>
                o.Ay.getActivityOrderedProjectIds().find(
                    (e) => (0, a.Ot)(s.Ay.getProject(e), t) && o.Ay.isThinking(e),
                ) ?? null,
            [t],
        );
    return (0, r.jsx)(f, { projectId: n });
}
