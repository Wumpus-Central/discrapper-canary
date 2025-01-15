n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(395361),
    a = n(829820),
    s = n(484346);
function o(e) {
    let { activity: t, user: n, source: o, className: c, size: u, look: d, color: m, fullWidth: f, onAction: p } = e,
        { label: h, tooltip: g, loading: v, disabled: S, onClick: I } = (0, a.Ih)(t, n, o),
        _ = () => {
            null == p || p(), I();
        };
    return (0, i.jsx)(l.Tooltip, {
        text: g,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsxs)(l.Button, {
                className: c,
                innerClassName: s.playButtonInner,
                size: u,
                look: d,
                color: m,
                fullWidth: f,
                onClick: _,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: S,
                submitting: v,
                children: [
                    (0, i.jsx)(r.Z, {
                        width: 16,
                        height: 16
                    }),
                    h
                ]
            });
        }
    });
}
