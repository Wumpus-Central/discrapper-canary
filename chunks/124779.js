e.d(n, { default: () => c });
var i = e(255367);
e(73800);
var r = e(82659),
    l = e(287734),
    a = e(471253),
    u = e(388032);
function c(t) {
    let { channel: n, transitionState: e, onClose: c } = t;
    function o() {
        (l.default.disconnect(), c());
    }
    return (0, i.jsx)(r.Modal, {
        transitionState: e,
        title: u.intl.string(u.t.pADdJi),
        subtitle: u.intl.string(u.t.mT7jwM),
        onClose: c,
        actions: [
            {
                text: u.intl.string(u.t.xTwqz8),
                onClick: o,
                variant: 'secondary'
            },
            {
                text: u.intl.string(u.t['sBP/1t']),
                onClick: function () {
                    ((0, a.NZ)(n), o());
                },
                variant: 'critical-primary'
            }
        ]
    });
}
