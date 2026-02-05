i.d(n, { default: () => o });
var e = i(627968),
    a = i(64700),
    s = i(158954),
    l = i(684013),
    r = i(837921),
    c = i(985018);
function o(t) {
    let { url: n, onClose: i, ...o } = t,
        [d, u] = a.useState(!1),
        p = a.useCallback(() => {
            d && l.A.disableExternalLinkAlert(), r.Ay.send("OPEN_EXTERNAL_URL", n), i();
        }, [d, n, i]);
    return (0, e.jsx)(s.Modal, {
        onClose: i,
        size: "md",
        title: c.intl.string(c.t.WLx4F6),
        subtitle: c.intl.string(c.t.H8O1TK),
        actionBarInput: (0, e.jsx)(s.Sc0, {
            checked: d,
            onChange: (t) => u(t),
            label: c.intl.string(c.t.IwqGhU),
            labelType: "secondary",
        }),
        actions: [
            { text: c.intl.string(c.t["ETE/oC"]), onClick: i, variant: "secondary" },
            { text: c.intl.string(c.t["3PatSz"]), onClick: p, variant: "primary" },
        ],
        ...o,
    });
}
