n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(395361),
    a = n(733597),
    s = n(629257);
function o(e) {
    let { activity: t, user: n, source: o, className: c, size: u, look: d, color: m, fullWidth: p, onAction: h } = e,
        { label: g, tooltip: f, loading: v, disabled: S, onClick: x } = (0, a.Ih)(t, n, o),
        I = () => {
            null == h || h(), x();
        };
    return (0, l.jsx)(i.ua7, {
        text: f,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, l.jsxs)(i.zxk, {
                className: c,
                innerClassName: s.playButtonInner,
                size: u,
                look: d,
                color: m,
                fullWidth: p,
                onClick: I,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: S,
                submitting: v,
                children: [
                    (0, l.jsx)(r.Z, {
                        width: 16,
                        height: 16
                    }),
                    g
                ]
            });
        }
    });
}
