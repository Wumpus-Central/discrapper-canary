n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(755721),
    a = n(481060),
    o = n(395361),
    s = n(829820),
    l = n(191242);
function c(e) {
    let { activity: t, user: n, source: c, className: u, size: d, look: f, color: _, fullWidth: p, onAction: h } = e,
        { label: m, tooltip: g, loading: E, disabled: b, onClick: y } = (0, s.Ih)(t, n, c),
        O = () => {
            null == h || h(), y();
        };
    return (0, r.jsx)(a.ua7, {
        text: g,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(i.zx, {
                className: u,
                innerClassName: l.playButtonInner,
                size: d,
                look: f,
                color: _,
                fullWidth: p,
                onClick: O,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: b,
                submitting: E,
                children: [
                    (0, r.jsx)(o.Z, {
                        width: 16,
                        height: 16,
                    }),
                    m,
                ],
            });
        },
    });
}
