n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(395361),
    o = n(829820),
    a = n(862863);
function s(e) {
    let { activity: t, user: n, source: s, className: c, size: u, look: d, color: p, fullWidth: f, onAction: m } = e,
        { label: g, tooltip: b, loading: _, disabled: v, onClick: h } = (0, o.Ih)(t, n, s),
        y = () => {
            (null == m || m(), h());
        };
    return (0, r.jsx)(i.ua7, {
        text: b,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(i.zxk, {
                className: c,
                innerClassName: a.playButtonInner,
                size: u,
                look: d,
                color: p,
                fullWidth: f,
                onClick: y,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: v,
                submitting: _,
                children: [
                    (0, r.jsx)(l.Z, {
                        width: 16,
                        height: 16
                    }),
                    g
                ]
            });
        }
    });
}
