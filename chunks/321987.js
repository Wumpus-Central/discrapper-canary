"use strict";
n.d(t, { $: () => g, f: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(224640),
    o = n(20742),
    l = n(430993),
    u = n(364840),
    d = n(696208),
    c = n(311907),
    _ = n(43990),
    f = n(726249),
    E = n(540999),
    h = n(652215),
    p = n(985018),
    m = n(42994);
function g(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    (0, f.HU)({ location: p.intl.string(p.t["3S2494"]) });
    let a = (0, c.bG)([E.A], () => E.A.isDeveloper) ? "92px" : void 0;
    return (0, r.jsx)(_.N, {
        theme: h.NJ8.DARK,
        children: (e) =>
            (0, r.jsx)("div", {
                className: s()(e, m.Y, i),
                style: { marginBottom: a },
                children: !0 === n ? t : (0, r.jsx)("div", { className: m.Q, children: t }),
            }),
    });
}
function A(e) {
    let { hideHeader: t, ...n } = e;
    return (0, r.jsxs)(a.d, {
        ...n,
        onClose: () => Promise.resolve(n.onClose?.()),
        children: [
            t ? null : (0, r.jsx)(o.rQ, { title: n.title ?? "", subtitle: n.subtitle }),
            (0, r.jsx)(l.c, { controls: n.input, children: n.children }),
            (0, r.jsx)(u.j, { children: n.preview }),
            (0, r.jsx)(d.H, {
                leading: n.actionBarInput,
                actions: n.actions ?? [],
                actionsFullWidth: null == n.actionBarInput,
            }),
        ],
    });
}
