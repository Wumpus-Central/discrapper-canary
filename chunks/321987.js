"use strict";
n.d(t, { $: () => p, f: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(726249),
    c = n(540999),
    d = n(652215),
    _ = n(985018),
    f = n(105199);
function p(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    (0, u.HU)({ location: _.intl.string(_.t["3S2494"]) });
    let s = (0, o.bG)([c.A], () => c.A.isDeveloper) ? "92px" : void 0;
    return (0, r.jsx)(l.NPJ, {
        theme: d.NJ8.DARK,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(e, f.Y, i),
                style: { marginBottom: s },
                children: !0 === n ? t : (0, r.jsx)("div", { className: f.Q, children: t }),
            }),
    });
}
function h(e) {
    let { hideHeader: t, ...n } = e;
    return (0, r.jsxs)(s.dWK, {
        ...n,
        onClose: () => Promise.resolve(n.onClose?.()),
        children: [
            t ? null : (0, r.jsx)(s.rQ0, { title: n.title ?? "", subtitle: n.subtitle }),
            (0, r.jsx)(s.cwr, { controls: n.input, children: n.children }),
            (0, r.jsx)(s.jlY, { children: n.preview }),
            (0, r.jsx)(s.H7u, {
                leading: n.actionBarInput,
                actions: n.actions ?? [],
                actionsFullWidth: null == n.actionBarInput,
            }),
        ],
    });
}
