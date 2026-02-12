"use strict";
n.d(t, { Jg: () => _, oH: () => f, s3: () => c, tt: () => d });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(500380),
    o = n(518977),
    l = n(683433),
    u = n(996541);
function c(e) {
    let { gradientColor: t, title: n, headerBadgeText: l, headerBadgeIcon: c, countryCode: d, ..._ } = e,
        f = i.useCallback(
            () => (null == d ? null : (0, r.jsx)("img", { alt: "", className: u.bI, src: (0, s.t)(d) })),
            [d],
        ),
        h = i.useMemo(() => {
            if (null != l) return { icon: c, type: { text: l }, variant: "expressive" };
        }, [l, c]);
    return (0, r.jsx)(a.rQ0, {
        ..._,
        badge: h,
        badgePosition: "end",
        gradientColor: t,
        titleTextVariant: "heading-lg/semibold",
        alignCenter: !1,
        title: n,
        subtitle: null != d ? { text: (0, o.Gw)((0, o.ni)(d)), leadingIcon: f } : void 0,
    });
}
function d(e) {
    let { onBackClick: t, primaryButtonProps: n } = e,
        { variant: i, onClick: s, text: o, loading: u, disabled: c, icon: d } = n;
    return (0, r.jsx)(a.H7u, {
        leading: null != t ? (0, r.jsx)(l.A, { onClick: t }) : void 0,
        actions: [{ variant: i ?? "active", text: o, onClick: s, loading: u, disabled: c, icon: d }],
        actionsFullWidth: !1,
    });
}
function _(e) {
    let { children: t, size: n = "md", ...i } = e;
    return (0, r.jsx)(a.dWK, { size: n, ...i, children: t });
}
function f(e) {
    let {
        title: t,
        gradientColor: n = "purple",
        countryCode: i,
        headerBadgeText: s,
        headerBadgeIcon: o,
        onBackClick: l,
        primaryButtonProps: u,
        children: _,
        ...f
    } = e;
    return (0, r.jsxs)(a.dWK, {
        ...f,
        children: [
            (0, r.jsx)(c, { gradientColor: n, title: t, countryCode: i, headerBadgeText: s, headerBadgeIcon: o }),
            (0, r.jsx)(a.cwr, { children: _ }),
            (0, r.jsx)(d, { onBackClick: l, primaryButtonProps: u }),
        ],
    });
}
