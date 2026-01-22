a.d(e, {
    default: () => o,
});
var n = a(627968);
a(64700);
var r = a(397927),
    i = a(900549),
    s = a(985018),
    l = a(117816);

function o(t) {
    let { url: e, onClose: a, transitionState: o } = t;
    return (0, n.jsx)(r.kpP, {
        transitionState: o,
        onClose: a,
        graphic: {
            src: l.A,
            type: "image",
        },
        gradientColor: "blue",
        title: s.intl.string(s.t["2B3wj8"]),
        subtitle: s.intl.format(s.t.jnHyYU, {}),
        actions: [
            {
                text: s.intl.string(s.t["/g10LC"]),
                onClick: a,
            },
        ],
        children: (0, n.jsx)(i.w, {
            url: e,
        }),
    });
}
