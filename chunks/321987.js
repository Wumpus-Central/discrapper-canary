"use strict";
n.d(t, { $: () => A, f: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(224640),
    l = n(20742),
    d = n(430993),
    _ = n(364840),
    u = n(696208),
    c = n(17928),
    E = n(43990),
    h = n(726249),
    m = n(540999),
    f = n(652215),
    g = n(985018),
    p = n(966258);
function A(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: r } = e;
    (0, h.HU)({ location: g.intl.string(g.t["3S2494"]) });
    let s = (0, c.bG)([m.A], () => m.A.isDeveloper) ? "92px" : void 0;
    return (0, i.jsx)(E.N, {
        theme: f.NJ8.DARK,
        children: (e) =>
            (0, i.jsx)("div", {
                className: a()(e, p.Y, r),
                style: { marginBottom: s },
                children: !0 === n ? t : (0, i.jsx)("div", { className: p.Q, children: t }),
            }),
    });
}
function I(e) {
    let { hideHeader: t, ...n } = e,
        s = (0, i.jsx)(r.Fragment, {}, "controls");
    return (0, i.jsxs)(o.d, {
        ...n,
        onClose: () => Promise.resolve(n.onClose?.()),
        children: [
            t ? null : (0, i.jsx)(l.rQ, { title: n.title ?? "", subtitle: n.subtitle }),
            (0, i.jsx)(d.c, { controls: s, children: n.children }),
            (0, i.jsx)(_.j, { children: n.preview }),
            (0, i.jsx)(u.H, {
                leading: n.actionBarInput,
                actions: n.actions ?? [],
                actionsFullWidth: null == n.actionBarInput,
            }),
        ],
    });
}
