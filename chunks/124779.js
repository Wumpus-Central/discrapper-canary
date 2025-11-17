n.d(i, { default: () => o });
var s = n(54381);
n(473749);
var a = n(793030),
    r = n(287734),
    c = n(471253),
    e = n(388032);
function o(t) {
    let { channel: i, transitionState: n, onClose: o } = t;
    function l() {
        r.default.disconnect(), o();
    }
    return (0, s.jsx)(a.Modal, {
        transitionState: n,
        title: e.intl.string(e.t.pADdJu),
        subtitle: e.intl.string(e.t.mT7jwN),
        onClose: o,
        actions: [
            {
                text: e.intl.string(e.t.xTwqz2),
                onClick: l,
                variant: "secondary",
            },
            {
                text: e.intl.string(e.t["sBP/1s"]),
                onClick: function () {
                    (0, c.NZ)(i), l();
                },
                variant: "critical-primary",
            },
        ],
    });
}
