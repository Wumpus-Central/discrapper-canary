n.d(i, { default: () => d });
var a = n(627968),
    e = n(64700),
    s = n(189213),
    l = n(27192),
    r = n(493540),
    o = n(980406),
    c = n(375708);
function d(t) {
    let { guildId: i, transitionState: n, onClose: d } = t,
        [u, h] = e.useState(!1),
        [p, C] = e.useState(!1);
    async function b() {
        h(!0);
        try {
            await (0, r.Bo)(i), d();
        } finally {
            h(!1);
        }
    }
    let k = c.intl.string(c.t["22itmo"]);
    return (0, a.jsx)(s.Modal, {
        size: "md",
        transitionState: n,
        onClose: d,
        "aria-label": k,
        title: k,
        subtitle: c.intl.string(c.t.kdbm9C),
        actions: [
            { variant: "secondary", onClick: d, text: c.intl.string(c.t["ETE/oC"]) },
            { variant: "primary", text: c.intl.string(c.t["cY+Oob"]), disabled: !p, onClick: b, loading: u },
        ],
        children: (0, a.jsx)(l.Kj, {
            onChange: function () {
                C((t) => !t);
            },
            value: p,
            children: (0, o.r)(),
        }),
    });
}
