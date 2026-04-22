n.d(e, { default: () => c });
var a = n(627968);
n(64700);
var l = n(772707),
    r = n(900549),
    s = n(985018),
    i = n(117816);
function c(t) {
    let { url: e, onClose: n, transitionState: c } = t;
    return (0, a.jsx)(l.k, {
        transitionState: c,
        onClose: n,
        graphic: { src: i.A, type: "image" },
        gradientColor: "blue",
        title: s.intl.string(s.t["2B3wj8"]),
        subtitle: s.intl.format(s.t.jnHyYU, {}),
        actions: [{ text: s.intl.string(s.t["/g10LC"]), onClick: n }],
        children: (0, a.jsx)(r.w, { url: e }),
    });
}
