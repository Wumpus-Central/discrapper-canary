n.d(t, { Ty: () => g, iT: () => p });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    u = n.n(r),
    a = n(17928),
    s = n(683180),
    d = n(783791),
    c = n(972786);
n(957907);
var o = n(818085),
    A = n(375708),
    f = n(554177);
function g(e) {
    let { className: t } = e;
    return (0, l.jsx)("span", {
        role: "img",
        "aria-label": A.intl.string(o.default.ui2IQ2),
        className: u()(f.lU, f.jP, t),
    });
}
function h(e) {
    let { projectId: t } = e,
        n = (0, a.bG)([d.A], () => null != t && d.A.isThinking(t), [t]),
        r = (0, a.bG)([d.A], () => (null != t ? d.A.getFinishedAt(t) : null), [t]),
        [s, c] = i.useState(() => (null != r && Date.now() - r >= 6e4 ? r : null));
    i.useEffect(() => {
        if (n || null == r) return;
        let e = setTimeout(() => c(r), Math.max(0, 6e4 - (Date.now() - r)));
        return () => clearTimeout(e);
    }, [n, r]);
    let h = n ? "building" : null != r && s !== r ? "done" : "idle";
    return "idle" === h
        ? null
        : "building" === h
          ? (0, l.jsx)(g, {})
          : (0, l.jsx)("span", {
                role: "img",
                "aria-label": A.intl.string(o.default["7Fdrf8"]),
                className: u()(f.lU, f.vv),
            });
}
function p(e) {
    let { guildId: t } = e,
        n = (0, a.bG)(
            [d.A, c.A],
            () =>
                d.A.getActivityOrderedProjectIds().find((e) => {
                    if (!(0, s.X0)(c.A.getProject(e), t)) return !1;
                    if (d.A.isThinking(e)) return !0;
                    let n = d.A.getFinishedAt(e);
                    return null != n && Date.now() - n < 6e4;
                }) ?? null,
            [t],
        );
    return (0, l.jsx)(h, { projectId: n });
}
