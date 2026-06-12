i.d(e, { default: () => o });
var n = i(627968);
i(64700);
var l = i(772707),
    r = i(730852),
    s = i(734057),
    a = i(716371),
    c = i(375708),
    d = i(31008);
function o(t) {
    let { transitionState: e, onClose: i } = t;
    return (0, n.jsx)(l.k, {
        transitionState: e,
        onClose: i,
        graphic: { src: d.A, type: "image" },
        gradientColor: "blue",
        title: c.intl.string(c.t.bAhz9l),
        subtitle: c.intl.string(c.t["7KjxW3"]),
        actions: [
            {
                text: c.intl.string(c.t.BddRzS),
                onClick: () => {
                    let t;
                    null != (t = s.A.getDMFromUserId(a.K)) && r.default.selectPrivateChannel(t), i();
                },
            },
        ],
    });
}
