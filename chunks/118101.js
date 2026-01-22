n.d(i, { default: () => l });
var s = n(627968);
n(64700);
var a = n(158954),
    r = n(956793),
    c = n(849736),
    e = n(985018);
function l(t) {
    let { channel: i, transitionState: n, onClose: l } = t;
    function o() {
        r.default.disconnect(), l();
    }
    return (0, s.jsx)(a.Modal, {
        transitionState: n,
        title: e.intl.string(e.t.pADdJu),
        subtitle: e.intl.string(e.t.mT7jwN),
        onClose: l,
        actions: [
            {
                text: e.intl.string(e.t.xTwqz2),
                onClick: o,
                variant: "secondary",
            },
            {
                text: e.intl.string(e.t["sBP/1s"]),
                onClick: function () {
                    (0, c.OE)(i), o();
                },
                variant: "critical-primary",
            },
        ],
    });
}
