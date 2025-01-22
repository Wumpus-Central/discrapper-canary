n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(733597);
function a(e) {
    let { activity: t, user: n, source: a, ...o } = e,
        { label: s, tooltip: c, loading: u, disabled: d, onClick: m } = (0, l.Lz)(t, n, a);
    return (0, i.jsx)(r.Tooltip, {
        text: c,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsx)(r.Button, {
                ...o,
                color: d ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
                onClick: m,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: !u && d,
                submitting: u,
                children: s
            });
        }
    });
}
