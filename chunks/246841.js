n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(395361),
    o = n(829820),
    s = n(862863);
function c(e) {
    let { activity: t, user: n, source: c, className: u, size: d, look: f, color: p, fullWidth: m, onAction: g } = e,
        { label: h, tooltip: b, loading: v, disabled: _, onClick: y } = (0, o.Ih)(t, n, c),
        O = () => {
            (null == g || g(), y());
        };
    return (0, r.jsx)(l.ua7, {
        text: b,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(i.zx, {
                className: u,
                innerClassName: s.playButtonInner,
                size: d,
                look: f,
                color: p,
                fullWidth: m,
                onClick: O,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: _,
                submitting: v,
                children: [
                    (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16
                    }),
                    h
                ]
            });
        }
    });
}
