"use strict";
n.d(t, { A: () => f, l: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(580630),
    u = n(818348),
    c = n(985018),
    d = n(333245);
function _(e) {
    let { label: t, icon: n, onClick: a, isHoveringOrFocusing: l } = e,
        u = i.useCallback(
            (e) => {
                e.stopPropagation(), a();
            },
            [a],
        );
    return (0, r.jsx)("div", {
        className: s()(d.L, { [d.K]: l }),
        children: (0, r.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: t,
            icon: n,
            onClick: u,
        }),
    });
}
function f(e) {
    let { onClick: t, isHoveringOrFocusing: n, currentUser: a, wishlistOwner: s, isOwned: l } = e,
        { label: u, icon: d } = i.useMemo(
            () =>
                null == s || s.id === a?.id || l
                    ? { label: c.intl.string(c.t.FdGl5A), icon: void 0 }
                    : { label: c.intl.string(c.t.ilhtIa), icon: o.okO },
            [l, s, a],
        );
    return (0, r.jsx)(_, { label: u, icon: d, onClick: t, isHoveringOrFocusing: n });
}
function p(e) {
    let { sku: t, onClick: n, isHoveringOrFocusing: a } = e,
        s = i.useMemo(() => (0, l.$g)(t.price?.amount ?? 0, t.price?.currency ?? u.Yr.USD), [t]);
    return (0, r.jsx)(_, { label: s, icon: void 0, onClick: n, isHoveringOrFocusing: a });
}
