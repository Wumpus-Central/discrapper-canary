n.d(t, { $: () => T, f: () => m });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(43990),
    d = n(224640),
    c = n(20742),
    u = n(430993),
    _ = n(364840),
    E = n(696208),
    A = n(726249),
    h = n(540999),
    I = n(652215),
    f = n(375708),
    p = n(467793);
function T(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: r } = e;
    (0, A.HU)({ location: f.intl.string(f.t["3S2494"]) });
    let a = (0, l.bG)([h.A], () => h.A.isDeveloper) ? "92px" : void 0;
    return (0, i.jsx)(o.N, {
        theme: I.NJ8.DARK,
        children: (e) =>
            (0, i.jsx)("div", {
                className: s()(e, p.Y, r),
                style: { marginBottom: a },
                children: !0 === n ? t : (0, i.jsx)("div", { className: p.Q, children: t }),
            }),
    });
}
function m(e) {
    let { hideHeader: t, "aria-label": n, ...a } = e,
        s = (0, i.jsx)(r.Fragment, {}, "controls");
    return (0, i.jsxs)(d.d, {
        ...a,
        onClose: () => Promise.resolve(a.onClose?.()),
        "aria-label": n ?? a.title,
        children: [
            t ? null : (0, i.jsx)(c.rQ, { title: a.title ?? "", subtitle: a.subtitle }),
            (0, i.jsx)(u.c, { controls: s, children: a.children }),
            (0, i.jsx)(_.j, { children: a.preview }),
            (0, i.jsx)(E.H, {
                leading: a.actionBarInput,
                actions: a.actions ?? [],
                actionsFullWidth: null == a.actionBarInput,
            }),
        ],
    });
}
