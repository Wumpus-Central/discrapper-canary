n.d(t, { b: () => m });
var i = n(627968),
    s = n(64700),
    l = n(189213),
    a = n(834730),
    r = n(192308),
    o = n(500380),
    d = n(518977),
    u = n(985018),
    c = n(223784);
function g(e) {
    let { country: t, countryName: n, ...r } = e,
        { onClose: d } = r,
        g = s.useCallback(
            () => (null == t ? null : (0, i.jsx)("img", { alt: "", className: c.b, src: (0, o.t)(t) })),
            [t],
        ),
        m = null != n && null != t ? { text: n, leadingIcon: g } : (n ?? void 0),
        _ = s.useCallback(() => {
            window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"), d();
        }, [d]);
    return (0, i.jsx)(l.Modal, {
        ...r,
        title: u.intl.string(u.t.PuB1W7),
        subtitle: m,
        actions: [{ text: u.intl.string(u.t.PuB1W7), onClick: _, variant: "primary" }],
        children: (0, i.jsx)(a.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: u.intl.string(u.t["21skUa"]),
        }),
    });
}
function m(e) {
    let t = null != e ? (0, d.Gw)(e) : null;
    (0, r.openModal)((n) => (0, i.jsx)(g, { ...n, country: e, countryName: t }));
}
