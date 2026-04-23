"use strict";
n.d(t, { $: () => p, f: () => A });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(224640),
    o = n(20742),
    l = n(430993),
    d = n(364840),
    _ = n(696208),
    u = n(17928),
    c = n(43990),
    E = n(726249),
    h = n(540999),
    m = n(652215),
    f = n(985018),
    g = n(966258);
function p(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: r } = e;
    (0, E.HU)({ location: f.intl.string(f.t["3S2494"]) });
    let a = (0, u.bG)([h.A], () => h.A.isDeveloper) ? "92px" : void 0;
    return (0, i.jsx)(c.N, {
        theme: m.NJ8.DARK,
        children: (e) =>
            (0, i.jsx)("div", {
                className: s()(e, g.Y, r),
                style: { marginBottom: a },
                children: !0 === n ? t : (0, i.jsx)("div", { className: g.Q, children: t }),
            }),
    });
}
function A(e) {
    let { hideHeader: t, ...n } = e;
    return (0, i.jsxs)(a.d, {
        ...n,
        onClose: () => Promise.resolve(n.onClose?.()),
        children: [
            t ? null : (0, i.jsx)(o.rQ, { title: n.title ?? "", subtitle: n.subtitle }),
            (0, i.jsx)(l.c, { controls: n.input, children: n.children }),
            (0, i.jsx)(d.j, { children: n.preview }),
            (0, i.jsx)(_.H, {
                leading: n.actionBarInput,
                actions: n.actions ?? [],
                actionsFullWidth: null == n.actionBarInput,
            }),
        ],
    });
}
