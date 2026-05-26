"use strict";
n.d(t, { $: () => A, f: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(224640),
    l = n(20742),
    u = n(430993),
    c = n(364840),
    d = n(696208),
    _ = n(17928),
    f = n(43990),
    h = n(726249),
    p = n(540999),
    E = n(652215),
    m = n(375708),
    g = n(966258);
function A(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: r } = e;
    (0, h.HU)({ location: m.intl.string(m.t["3S2494"]) });
    let s = (0, _.bG)([p.A], () => p.A.isDeveloper) ? "92px" : void 0;
    return (0, i.jsx)(f.N, {
        theme: E.NJ8.DARK,
        children: (e) =>
            (0, i.jsx)("div", {
                className: a()(e, g.Y, r),
                style: { marginBottom: s },
                children: !0 === n ? t : (0, i.jsx)("div", { className: g.Q, children: t }),
            }),
    });
}
function I(e) {
    let { hideHeader: t, "aria-label": n, ...s } = e,
        a = (0, i.jsx)(r.Fragment, {}, "controls");
    return (0, i.jsxs)(o.d, {
        ...s,
        onClose: () => Promise.resolve(s.onClose?.()),
        "aria-label": n ?? s.title,
        children: [
            t ? null : (0, i.jsx)(l.rQ, { title: s.title ?? "", subtitle: s.subtitle }),
            (0, i.jsx)(u.c, { controls: a, children: s.children }),
            (0, i.jsx)(c.j, { children: s.preview }),
            (0, i.jsx)(d.H, {
                leading: s.actionBarInput,
                actions: s.actions ?? [],
                actionsFullWidth: null == s.actionBarInput,
            }),
        ],
    });
}
