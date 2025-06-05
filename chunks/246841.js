n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(395361),
    a = n(829820),
    o = n(862863);
function s(e) {
    let { activity: t, user: n, source: s, className: c, size: u, look: d, color: f, fullWidth: p, onAction: m } = e,
        { label: g, tooltip: b, loading: _, disabled: h, onClick: v } = (0, a.Ih)(t, n, s),
        y = () => {
            null == m || m(), v();
        };
    return (0, r.jsx)(i.ua7, {
        text: b,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(i.zxk, {
                className: c,
                innerClassName: o.playButtonInner,
                size: u,
                look: d,
                color: f,
                fullWidth: p,
                onClick: y,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: h,
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
