n.d(e, { default: () => d });
var s = n(627968);
n(64700);
var c = n(87719),
    i = n(244975),
    a = n(985018),
    r = n(101280);
function d(t) {
    let { onClose: e, ...n } = t,
        d = a.intl.format(a.t.AVVUse, {
            onLearnMore: function () {
                e(), (0, c.e)();
            },
        });
    return (0, s.jsx)(i.F, {
        title: a.intl.string(a.t.SeL3ec),
        subtitle: d,
        graphic: { src: r.A, type: "image" },
        secondaryCTA: a.intl.string(a.t["13/7kX"]),
        onSecondaryClick: e,
        onClose: e,
        ...n,
    });
}
