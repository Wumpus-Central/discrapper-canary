n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(395361),
    a = n(829820),
    o = n(550750);
function s(e) {
    let { activity: t, user: n, source: s, className: c, size: u, look: d, color: f, fullWidth: p, onAction: m } = e,
        { label: g, tooltip: y, loading: b, disabled: h, onClick: v } = (0, a.Ih)(t, n, s),
        O = () => {
            null == m || m(), v();
        };
    return (0, r.jsx)(l.ua7, {
        text: y,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(l.zxk, {
                className: c,
                innerClassName: o.playButtonInner,
                size: u,
                look: d,
                color: f,
                fullWidth: p,
                onClick: O,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: h,
                submitting: b,
                children: [
                    (0, r.jsx)(i.Z, {
                        width: 16,
                        height: 16
                    }),
                    g
                ]
            });
        }
    });
}
