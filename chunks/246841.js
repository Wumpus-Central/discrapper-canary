n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(395361),
    a = n(829820),
    s = n(202122);
function o(e) {
    let { activity: t, user: n, source: o, className: u, size: c, look: d, color: m, fullWidth: f, onAction: h } = e,
        { label: g, tooltip: p, loading: v, disabled: S, onClick: I } = (0, a.Ih)(t, n, o),
        x = () => {
            null == h || h(), I();
        };
    return (0, l.jsx)(i.ua7, {
        text: p,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, l.jsxs)(i.zxk, {
                className: u,
                innerClassName: s.playButtonInner,
                size: c,
                look: d,
                color: m,
                fullWidth: f,
                onClick: x,
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
