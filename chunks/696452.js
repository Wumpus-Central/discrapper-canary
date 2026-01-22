r.d(e, {
    default: () => o,
});
var n = r(627968);
r(64700);
var a = r(397927),
    i = r(975807),
    s = r(900549),
    l = r(985018),
    c = r(117816);

function o(t) {
    let { url: e, onClose: r, transitionState: o } = t;
    return (0, n.jsx)(a.kpP, {
        transitionState: o,
        onClose: r,
        graphic: {
            src: c.A,
            type: "image",
        },
        gradientColor: "blue",
        title: l.intl.string(l.t["biy1X/"]),
        subtitle: l.intl.format(l.t.J86cyX, {
            url: e,
        }),
        actions: [
            {
                text: l.intl.string(l.t.gQrLtr),
                onClick: () => {
                    (0, i.A)(e, !0);
                },
                variant: "secondary",
            },
            {
                text: l.intl.string(l.t["xl8R+2"]),
                onClick: r,
            },
        ],
        children: (0, n.jsx)(s.w, {
            url: e,
        }),
    });
}
