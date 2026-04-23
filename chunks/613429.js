i.d(n, { default: () => d });
var e = i(627968),
    a = i(64700),
    s = i(189213),
    l = i(150934),
    r = i(684013),
    c = i(19575),
    o = i(985018);
function d(t) {
    let { url: n, onClose: i, ...d } = t,
        [u, p] = a.useState(!1),
        k = a.useCallback(() => {
            u && r.A.disableExternalLinkAlert(), c.Ay.send("OPEN_EXTERNAL_URL", n), i();
        }, [u, n, i]);
    return (0, e.jsx)(s.Modal, {
        onClose: i,
        size: "md",
        title: o.intl.string(o.t.WLx4F6),
        subtitle: o.intl.string(o.t.H8O1TK),
        actionBarInput: (0, e.jsx)(l.S, {
            checked: u,
            onChange: (t) => p(t),
            label: o.intl.string(o.t.IwqGhU),
            labelType: "secondary",
        }),
        actions: [
            { text: o.intl.string(o.t["ETE/oC"]), onClick: i, variant: "secondary" },
            { text: o.intl.string(o.t["3PatSz"]), onClick: k, variant: "primary" },
        ],
        ...d,
    });
}
