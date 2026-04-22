n.d(e, { default: () => d });
var a = n(627968);
n(64700);
var r = n(772707),
    l = n(975807),
    i = n(900549),
    s = n(985018),
    c = n(117816);
function d(t) {
    let { url: e, onClose: n, transitionState: d } = t;
    return (0, a.jsx)(r.k, {
        transitionState: d,
        onClose: n,
        graphic: { src: c.A, type: "image" },
        gradientColor: "blue",
        title: s.intl.string(s.t["biy1X/"]),
        subtitle: s.intl.format(s.t.J86cyX, { url: e }),
        actions: [
            {
                text: s.intl.string(s.t.gQrLtr),
                onClick: () => {
                    (0, l.A)(e, !0);
                },
                variant: "secondary",
            },
            { text: s.intl.string(s.t["xl8R+2"]), onClick: n },
        ],
        children: (0, a.jsx)(i.w, { url: e }),
    });
}
