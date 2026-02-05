n.d(e, { default: () => c });
var r = n(627968);
n(64700);
var a = n(397927),
    i = n(975807),
    l = n(900549),
    s = n(985018),
    o = n(117816);
function c(t) {
    let { url: e, onClose: n, transitionState: c } = t;
    return (0, r.jsx)(a.kpP, {
        transitionState: c,
        onClose: n,
        graphic: { src: o.A, type: "image" },
        gradientColor: "blue",
        title: s.intl.string(s.t["biy1X/"]),
        subtitle: s.intl.format(s.t.J86cyX, { url: e }),
        actions: [
            {
                text: s.intl.string(s.t.gQrLtr),
                onClick: () => {
                    (0, i.A)(e, !0);
                },
                variant: "secondary",
            },
            { text: s.intl.string(s.t["xl8R+2"]), onClick: n },
        ],
        children: (0, r.jsx)(l.w, { url: e }),
    });
}
