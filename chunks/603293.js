n.d(t, { b: () => m });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(397927),
    a = n(500380),
    o = n(518977),
    d = n(985018),
    c = n(223784);
function u(e) {
    let { country: t, countryName: n, ...o } = e,
        { onClose: u } = o,
        m = s.useCallback(
            () => (null == t ? null : (0, i.jsx)("img", { alt: "", className: c.b, src: (0, a.t)(t) })),
            [t],
        ),
        g = null != n && null != t ? { text: n, leadingIcon: m } : (n ?? void 0),
        _ = s.useCallback(() => {
            window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"), u();
        }, [u]);
    return (0, i.jsx)(l.Modal, {
        ...o,
        title: d.intl.string(d.t.PuB1W7),
        subtitle: g,
        actions: [{ text: d.intl.string(d.t.PuB1W7), onClick: _, variant: "primary" }],
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: d.intl.string(d.t["21skUa"]),
        }),
    });
}
function m(e) {
    let t = null != e ? (0, o.Gw)(e) : null;
    (0, r.qfG)((n) => (0, i.jsx)(u, { ...n, country: e, countryName: t }));
}
