a.d(i, { default: () => c });
var n = a(477900);
a(582128);
var e = a(772707),
    s = a(975807),
    r = a(105292);
function c(t) {
    let { href: i, onClose: a, transitionState: c } = t;
    return (0, n.jsx)(e.k, {
        transitionState: c,
        onClose: a,
        gradientColor: "blue",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/40db7db5eefbabf36afe02e04e420d2306c57a91a34bebb7da82ca6bee9a8b2a.svg",
        },
        title: r.intl.string(r.t.XtDo9Z),
        subtitle: r.intl.string(r.t.L9yFko),
        actions: [
            { variant: "primary", text: r.intl.string(r.t.j7Vi2i), onClick: a },
            {
                variant: "secondary",
                text: r.intl.string(r.t["/bHu89"]),
                onClick: function () {
                    (a(), (0, s.A)(i, !0));
                },
            },
        ],
    });
}
