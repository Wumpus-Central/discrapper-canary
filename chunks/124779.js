n.d(i, { default: () => o });
var a = n(255367);
n(73800);
var s = n(82659),
    r = n(287734),
    c = n(471253),
    e = n(388032);
function o(t) {
    let { channel: i, transitionState: n, onClose: o } = t;
    function l() {
        r.default.disconnect(), o();
    }
    return (0, a.jsx)(s.Modal, {
        transitionState: n,
        title: e.intl.string(e.t.pADdJi),
        subtitle: e.intl.string(e.t.mT7jwM),
        onClose: o,
        actions: [
            {
                text: e.intl.string(e.t.xTwqz8),
                onClick: l,
                variant: "secondary",
            },
            {
                text: e.intl.string(e.t["sBP/1t"]),
                onClick: function () {
                    (0, c.NZ)(i), l();
                },
                variant: "critical-primary",
            },
        ],
    });
}
