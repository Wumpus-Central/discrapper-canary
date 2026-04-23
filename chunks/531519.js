d.d(e, { default: () => o });
var s = d(627968);
d(64700);
var i = d(772707),
    n = d(956793),
    c = d(734057),
    a = d(716371),
    l = d(985018),
    r = d(31008);
function o(t) {
    let { transitionState: e, onClose: d } = t;
    return (0, s.jsx)(i.k, {
        transitionState: e,
        onClose: d,
        graphic: { src: r.A, type: "image" },
        gradientColor: "blue",
        title: l.intl.string(l.t.bAhz9l),
        subtitle: l.intl.string(l.t["7KjxW3"]),
        actions: [
            {
                text: l.intl.string(l.t.BddRzS),
                onClick: () => {
                    let t;
                    null != (t = c.A.getDMFromUserId(a.K)) && n.default.selectPrivateChannel(t), d();
                },
            },
        ],
    });
}
