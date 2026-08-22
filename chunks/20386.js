l.d(t, { ID: () => h, iT: () => p });
var n = l(477900),
    i = l(582128),
    r = l(503698),
    u = l.n(r),
    a = l(17928),
    s = l(683180),
    d = l(783791),
    c = l(972786);
l(957907);
var o = l(295813),
    A = l(375708),
    f = l(944046);
function g(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", {
        role: "img",
        "aria-label": A.intl.string(o.default.ui2IQ2),
        className: u()(f.lU, f.jP, t),
    });
}
function h(e) {
    let { projectId: t, className: l } = e,
        r = (0, a.bG)([d.Ay], () => null != t && d.Ay.isThinking(t), [t]),
        s = (0, a.bG)([d.Ay], () => (null != t ? d.Ay.getFinishedAt(t) : null), [t]),
        [c, h] = i.useState(() => (null != s && Date.now() - s >= 6e4 ? s : null));
    i.useEffect(() => {
        if (r || null == s) return;
        let e = setTimeout(() => h(s), Math.max(0, 6e4 - (Date.now() - s)));
        return () => clearTimeout(e);
    }, [r, s]);
    let p = r ? "building" : null != s && c !== s ? "done" : "idle";
    return "idle" === p
        ? null
        : "building" === p
          ? (0, n.jsx)(g, { className: l })
          : (0, n.jsx)("span", {
                role: "img",
                "aria-label": A.intl.string(o.default["7Fdrf8"]),
                className: u()(f.lU, f.vv, l),
            });
}
function p(e) {
    let { guildId: t } = e,
        l = (0, a.bG)(
            [d.Ay, c.A],
            () =>
                d.Ay.getActivityOrderedProjectIds().find((e) => {
                    if (!(0, s.X0)(c.A.getProject(e), t)) return !1;
                    if (d.Ay.isThinking(e)) return !0;
                    let l = d.Ay.getFinishedAt(e);
                    return null != l && Date.now() - l < 6e4;
                }) ?? null,
            [t],
        );
    return (0, n.jsx)(h, { projectId: l });
}
