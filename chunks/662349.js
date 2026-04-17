"use strict";
n.d(t, { A: () => h, h: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(287809),
    c = n(985018),
    d = n(405276);
function _(e) {
    return { margin: e.buttonInset };
}
function f(e) {
    let { wishlistOwner: t, isOwned: n, hideIcon: r, shortText: s } = e,
        a = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
        d = null == t || t.id === a?.id || n;
    return i.useMemo(
        () =>
            d
                ? {
                      label: s ? c.intl.string(c.t["99GFiS"]) : c.intl.string(c.t.FdGl5A),
                      icon: void 0,
                      isPromptingPurchase: !1,
                  }
                : {
                      label: s ? c.intl.string(c.t["3wFtNJ"]) : c.intl.string(c.t.ilhtIa),
                      icon: r ? void 0 : l.okO,
                      isPromptingPurchase: !0,
                  },
        [d, s, r],
    );
}
function p(e) {
    let { spec: t, label: n, icon: s, onClick: o, isHoveringOrFocusing: u, fullWidth: c = !1 } = e,
        f = i.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o],
        );
    return (0, r.jsx)("div", {
        className: a()(d.L, { [d.K]: u }),
        style: _(t),
        children: (0, r.jsx)(l.Button, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: n,
            icon: s,
            onClick: f,
            fullWidth: c,
        }),
    });
}
function h(e) {
    let { spec: t, onClick: n, isHoveringOrFocusing: i, label: s, icon: a } = e;
    return (0, r.jsx)(p, { spec: t, label: s, icon: a, onClick: n, isHoveringOrFocusing: i, fullWidth: !0 });
}
