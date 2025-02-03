n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(395361),
    r = n(733597),
    s = n(629257);
function o(e) {
    let { activity: t, user: n, source: o, className: c, size: u, look: d, color: m, fullWidth: f, onAction: p } = e,
        { label: h, tooltip: g, loading: v, disabled: _, onClick: I } = (0, r.Ih)(t, n, o),
        S = () => {
            null == p || p(), I();
        };
    return (0, i.jsx)(l.ua7, {
        text: g,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsxs)(l.zxk, {
                className: c,
                innerClassName: s.playButtonInner,
                size: u,
                look: d,
                color: m,
                fullWidth: f,
                onClick: S,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: _,
                submitting: v,
                children: [
                    (0, i.jsx)(a.Z, {
                        width: 16,
                        height: 16
                    }),
                    h
                ]
            });
        }
    });
}
