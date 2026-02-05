i.d(e, { default: () => c });
var n = i(627968);
i(64700);
var r = i(397927),
    l = i(651178),
    s = i(985018),
    a = i(31008);
function c(t) {
    let { transitionState: e, onClose: i } = t;
    return (0, n.jsx)(r.kpP, {
        transitionState: e,
        onClose: i,
        graphic: { src: a.A, type: "image" },
        gradientColor: "blue",
        title: s.intl.string(s.t.bAhz9l),
        subtitle: s.intl.string(s.t["7KjxW3"]),
        actions: [
            {
                text: s.intl.string(s.t.BddRzS),
                onClick: () => {
                    (0, l.A)(), i();
                },
            },
        ],
    });
}
