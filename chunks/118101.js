e.d(n, { default: () => o });
var i = e(627968);
e(64700);
var l = e(158954),
    r = e(956793),
    a = e(849736),
    s = e(985018);
function o(t) {
    let { channel: n, transitionState: e, onClose: o } = t;
    function d() {
        r.default.disconnect(), o();
    }
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        title: s.intl.string(s.t.pADdJu),
        subtitle: s.intl.string(s.t.mT7jwN),
        onClose: o,
        actions: [
            { text: s.intl.string(s.t.xTwqz2), onClick: d, variant: "secondary" },
            {
                text: s.intl.string(s.t["sBP/1s"]),
                onClick: function () {
                    (0, a.OE)(n), d();
                },
                variant: "critical-primary",
            },
        ],
    });
}
