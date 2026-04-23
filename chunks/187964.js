d.d(e, { default: () => r });
var n = d(627968);
d(64700);
var i = d(772707),
    s = d(651178),
    c = d(985018),
    a = d(31008);
function r(t) {
    let { transitionState: e, onClose: d } = t;
    return (0, n.jsx)(i.k, {
        transitionState: e,
        onClose: d,
        graphic: { src: a.A, type: "image" },
        gradientColor: "blue",
        title: c.intl.string(c.t.bAhz9l),
        subtitle: c.intl.string(c.t["7KjxW3"]),
        actions: [
            {
                text: c.intl.string(c.t.BddRzS),
                onClick: () => {
                    (0, s.A)(), d();
                },
            },
        ],
    });
}
