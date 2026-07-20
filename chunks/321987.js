"use strict";
n.d(t, { $: () => T, f: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(224640),
    o = n(20742),
    d = n(430993),
    c = n(364840),
    u = n(696208),
    _ = n(17928),
    E = n(43990),
    A = n(726249),
    h = n(540999),
    I = n(652215),
    f = n(375708),
    p = n(42994);
function T(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: r } = e;
    (0, A.HU)({ location: f.intl.string(f.t["3S2494"]) });
    let a = (0, _.bG)([h.A], () => h.A.isDeveloper) ? "92px" : void 0;
    return (0, i.jsx)(E.N, {
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
    return (0, i.jsxs)(l.d, {
        ...a,
        onClose: () => Promise.resolve(a.onClose?.()),
        "aria-label": n ?? a.title,
        children: [
            t ? null : (0, i.jsx)(o.rQ, { title: a.title ?? "", subtitle: a.subtitle }),
            (0, i.jsx)(d.c, { controls: s, children: a.children }),
            (0, i.jsx)(c.j, { children: a.preview }),
            (0, i.jsx)(u.H, {
                leading: a.actionBarInput,
                actions: a.actions ?? [],
                actionsFullWidth: null == a.actionBarInput,
            }),
        ],
    });
}
